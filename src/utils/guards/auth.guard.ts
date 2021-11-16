import { LOGGED_IN_KEY, UserService } from "../../services/state/user.service";
import { User } from "../../types/state/user";
import { Inject } from "../decorators/inject";
import Router from "../../services/core/router/router"
import { PAGES } from "../../services/core/navigation";

export interface Guard {
    checkAccess: () => boolean
    actionOnNoAccess: () => void
}

export class AuthGuard implements Guard {

    private _user: User
    @Inject(UserService)
    private _userService: UserService
    
    private _isLoggedIn: boolean

    constructor() {
        this._userService.userObservable.subscribe(
            (user: User) => {
                this._user = user
            }
        )
        this._isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
    }

    checkAccess(): boolean {
        this._isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
        return Boolean(this._user) || this._isLoggedIn
    }

    actionOnNoAccess(): void {
        Router.go(PAGES.LOGIN)
    }

    invert(): AuthGuard {
        this.checkAccess = () => {
            this._isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
            return !(Boolean(this._user) || this._isLoggedIn)
        }
        this.actionOnNoAccess = () => {
            Router.go(PAGES.MAIN)
        }
        return this
    }
    
}