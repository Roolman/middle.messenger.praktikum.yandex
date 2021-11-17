import { BASE_URL } from "../constants/api";
import { SignInUserData, SignUpUserData } from "../types/api/auth.api";
import { BaseAPI } from "../utils/classes/base-api";
import { HttpClient } from "../utils/classes/fetch/fetch";
import { Observable } from "../utils/classes/observable";

export class AuthApi extends BaseAPI {

    private _api: HttpClient

    constructor() {
        super()
        this._api = new HttpClient(BASE_URL + "auth/")
    }

    signup(data: SignUpUserData): Observable {
        return this._api.post("signup", {data})
    }

    signin(data: SignInUserData): Observable {
        return this._api.post("signin", {data})
    }

    requestUser(): Observable {
        return this._api.get("user")
    }

    logout(): Observable {
        return this._api.post("logout")
    }

}