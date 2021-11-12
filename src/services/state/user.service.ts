import { AuthApi } from "../../api/auth.api"
import { UsersApi } from "../../api/users.api"
import { ServerErrorResponse } from "../../types/api"
import { ServerUserResponse, SignInUserData, SignUpUserData } from "../../types/api/auth.api"
import { User } from "../../types/state/user"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { Inject } from "../../utils/decorators/inject"
import { PAGES } from "../core/navigation"
import Router from "../core/router"
import { SnackBarService, SNACKBAR_TYPE } from "../core/snackbar"

export const LOGGED_IN_KEY = "authorized"

export class UserService {

    private _authApi: AuthApi
    private _usersApi: UsersApi

    public userObservable: Observable
    private _userSubject: Subject<User | null>
    private _user: User | null

    public logInLoadingObservable: Observable
    private _logInLoadingSubject: Subject<boolean | undefined>

    public registerLoadingObservable: Observable
    private _registerLoadingSubject: Subject<boolean | undefined>

    public get user(): User | null {
        return this._user
    }

    @Inject(SnackBarService)
    private _snackBar: SnackBarService

    constructor() {
        this._user = null
        this._userSubject = new Subject()
        this.userObservable = this._userSubject.asObservable()

        this._logInLoadingSubject = new Subject()
        this.logInLoadingObservable = this._logInLoadingSubject.asObservable()
        this._registerLoadingSubject = new Subject()
        this.registerLoadingObservable = this._registerLoadingSubject.asObservable()

        this._authApi = new AuthApi()
        this._usersApi = new UsersApi()

        const isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
        if(isLoggedIn) {
            this.getUserData()
        }
        else {
            // На случай если юзер руками удалил переменную в lS
            this.logOut()
        }
    }

    logIn(data: SignInUserData): void {
        this._logInLoadingSubject.next(true)
        this._authApi
            .signin(data)
            .subscribe(
                () => {
                    this._logInLoadingSubject.next(false)
                    localStorage.setItem(LOGGED_IN_KEY, "online")
                    Router.go(PAGES.MAIN)
                },
                (err: ServerErrorResponse) => {
                    this._logInLoadingSubject.next(false)
                    this._snackBar.open("Неверный логин или пароль", SNACKBAR_TYPE.ERROR)
                    console.error(err)
                }
            )        
    }

    signUp(data: SignUpUserData): void {
        this._registerLoadingSubject.next(true)
        this._authApi
            .signup(data)
            .subscribe(
                () => {
                    this._registerLoadingSubject.next(false)
                    this._snackBar.open("Добро пожаловать в Fast messenger!", SNACKBAR_TYPE.SUCCESS)
                    this.logIn({
                        login: data.login,
                        password: data.password
                    })
                },
                (err: ServerErrorResponse) => {
                    this._registerLoadingSubject.next(false)
                    this._snackBar.open("Ошибка регистрации. Попробуйте еще раз", SNACKBAR_TYPE.ERROR)
                    console.error(err)
                }
            )         
    }

    getUserData(): void {
        this._authApi
            .requestUser()
            .subscribe(
                (user: ServerUserResponse) => {
                    this._user = user
                    this._userSubject.next(this._user)
                },
                (err: ServerErrorResponse) => {
                    console.error(err)
                }
            )
    }

    logOut(): void {
        this._authApi
            .logout()
            .subscribe(
                () => {
                    localStorage.removeItem(LOGGED_IN_KEY)
                    this._user = null
                    this._userSubject.next(this._user)
                    Router.go(PAGES.LOGIN)
                },
                () => {
                    localStorage.removeItem(LOGGED_IN_KEY)
                    this._user = null
                    this._userSubject.next(this._user)
                    Router.go(PAGES.LOGIN)
                }
            )
    }
}