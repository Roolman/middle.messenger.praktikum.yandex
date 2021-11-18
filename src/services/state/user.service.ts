import { AuthApi } from "../../api/auth.api"
import { UsersApi } from "../../api/users.api"
import { RESOURCES_URL } from "../../constants/api"
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

        // На случай если юзер руками удалил переменную в lS
        this.getUserData()
    }

    logIn(data: SignInUserData): void {
        this._logInLoadingSubject.next(true)
        this._authApi
            .signin(data)
            .subscribe(
                () => {
                    this._logInLoadingSubject.next(false)
                    this._logIn()
                },
                (err: ServerErrorResponse) => {
                    this._logInLoadingSubject.next(false)
                    if (err.reason === "User already in system") {
                        // Если по какой-то причине это произошло, то входим
                        this._logIn()
                    } else {
                        this._snackBar.open("Неверный логин или пароль", SNACKBAR_TYPE.ERROR)
                        console.error(err)
                    }
                },
            )
    }

    private _logIn(): void {
        localStorage.setItem(LOGGED_IN_KEY, "online")
        Router.go(PAGES.MAIN)
        this.getUserData()
    }

    signUp(data: SignUpUserData): void {
        this._registerLoadingSubject.next(true)
        this._authApi
            .signup(data)
            .subscribe(
                () => {
                    this._registerLoadingSubject.next(false)
                    this._snackBar.open("Добро пожаловать в Fast messenger!", SNACKBAR_TYPE.SUCCESS)
                    // После этого сразу входим
                    this._logIn()
                },
                (err: ServerErrorResponse) => {
                    this._registerLoadingSubject.next(false)
                    console.error(err)
                    if (err.reason === "Login already exists") {
                        this._snackBar.open(
                            "Логин уже занят. Попробуйте другой",
                            SNACKBAR_TYPE.ERROR,
                        )
                    } else {
                        this._snackBar.open(
                            "Ошибка регистрации. Попробуйте еще раз",
                            SNACKBAR_TYPE.ERROR,
                        )
                    }
                },
            )
    }

    getUserData(): void {
        this._authApi
            .requestUser()
            .subscribe(
                (user: ServerUserResponse) => {
                    if (!user.display_name) {
                        user.display_name = `${user.first_name} ${user.second_name}`
                    }
                    if (user.avatar) {
                        user.avatar = RESOURCES_URL + user.avatar
                    }
                    this._user = user
                    this._userSubject.next(this._user)
                },
                (err: ServerErrorResponse) => {
                    console.error(err)
                    const isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
                    const isInSystem = this._user || isLoggedIn
                    if (err.reason === "Cookie is not valid" && isInSystem) {
                        this.logOut()
                    }
                },
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
                },
            )
    }

    updateProfile(user: User): void {
        this._usersApi
            .update(user)
            .subscribe(
                (newUser: User) => {
                    if (newUser.avatar) {
                        newUser.avatar = RESOURCES_URL + newUser.avatar
                    }
                    this._user = newUser
                    this._userSubject.next(this._user)
                    this._snackBar.open("Данные успешно изменены", SNACKBAR_TYPE.SUCCESS)
                },
                () => {
                    this._snackBar.open("Ошибка изменения данных", SNACKBAR_TYPE.ERROR)
                },
            )
    }

    updateProfileAvatar(avatar: File): void {
        this._usersApi
            .updateAvatar(avatar)
            .subscribe(
                (user: User) => {
                    user.avatar = RESOURCES_URL + user.avatar
                    this._user = user
                    this._userSubject.next(this._user)
                    this._snackBar.open("Аватар успешно изменен", SNACKBAR_TYPE.SUCCESS)
                },
                () => {
                    this._snackBar.open("Ошибка смены аватара", SNACKBAR_TYPE.ERROR)
                },
            )
    }

    updatePassword(oldPassword: string, newPassword: string) {
        this._usersApi
            .updatePassword(oldPassword, newPassword)
            .subscribe(
                () => {
                    this._snackBar.open("Пароль успешно изменен", SNACKBAR_TYPE.SUCCESS)
                },
                (err: ServerErrorResponse) => {
                    if (err.reason === "Password is incorrect") {
                        this._snackBar.open("Пароль неверный", SNACKBAR_TYPE.ERROR)
                    } else {
                        this._snackBar.open("Ошибка смены пароля", SNACKBAR_TYPE.ERROR)
                    }
                },
            )
    }
}