import { BASE_URL } from "../constants/api";
import { User } from "../types/state/user";
import { BaseAPI } from "../utils/classes/base-api";
import { HttpClient } from "../utils/classes/fetch";
import { Observable } from "../utils/classes/observable";

export class UsersApi extends BaseAPI {

    private _api: HttpClient

    constructor() {
        super()
        this._api = new HttpClient(BASE_URL + "user/")
    }

    request(userId: number): Observable {
        return this._api.get(`${userId}`)
    }

    requestUsers(login: string): Observable {
        return this._api.post("search", {data: {login}})
    }
    
    update(data: User): Observable {
        return this._api.put("profile", {data})
    }

    updateAvatar(avatar: File): Observable {
        let form = new FormData()
        form.append("avatar", avatar)
        return this._api.put("profile/avatar", {data: form})
    }

    updatePassword(oldPassword: string, newPassword: string): Observable {
        const data = {
            oldPassword,
            newPassword
        }
        return this._api.put("password", {data})
    }

}