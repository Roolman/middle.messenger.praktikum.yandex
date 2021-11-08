import { AuthApi } from "../../api/auth.api"
import { ServerErrorResponse } from "../../types/api"
import { ServerUserResponse, SignInUserData, SignUpUserData } from "../../types/api/auth.api"
import { User } from "../../types/state/user"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { PAGES } from "../core/navigation"
import Router from "../core/router"
import SnackBar, { SNACKBAR_TYPE } from "../core/snackbar"

export class UserService {

    private _authApi: AuthApi

    public userObservable: Observable
    private _userSubject: Subject<User | null>
    private _user: User | null

    public get user(): User | null {
        return this._user
    }

    constructor() {
        this._user = null
        this._userSubject = new Subject()
        this.userObservable = this._userSubject.asObservable()

        this._authApi = new AuthApi()
    }

    logIn(data: SignInUserData): void {
        this._authApi
            .signin(data)
            .subscribe(
                () => {
                    this.getUserData()
                    Router.go(PAGES.MAIN)
                },
                (err: ServerErrorResponse) => {
                    SnackBar.open("Неверный логин или пароль", SNACKBAR_TYPE.ERROR)
                    console.error(err)
                }
            )        
    }

    signUp(data: SignUpUserData): void {
        this._authApi
            .signup(data)
            .subscribe(
                () => {
                    SnackBar.open("Пользователь успешно зарегестрирован", SNACKBAR_TYPE.SUCCESS)
                    Router.go(PAGES.LOGIN)
                },
                (err: ServerErrorResponse) => {
                    SnackBar.open("Ошибка регистрации. Попробуйте еще раз", SNACKBAR_TYPE.ERROR)
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
                    this._user = null
                    this._userSubject.next(this._user)
                    Router.go(PAGES.LOGIN)
                },
                () => {
                    console.warn("Ошибка выхода")
                }
            )
    }

}