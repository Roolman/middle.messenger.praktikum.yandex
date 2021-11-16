import { BASE_URL } from "../constants/api";
import { BaseAPI } from "../utils/classes/base-api";
import { HttpClient } from "../utils/classes/fetch/fetch";
import { Observable } from "../utils/classes/observable";

export type UploadChatAvatar = {
    chatId: number
    avatar: File
}

export type AddDeleteChatUsers = {
    users: Array<number>
    chatId: number
}

export type RequestChatsParams = {
    offset?: number
    limit?: number
    title?: string
}

export type RequestChatUsersParams = {
    offset?: number
    limit?: number
    name?: string
    email?: string
}


export class ChatsApi extends BaseAPI {

    private _api: HttpClient

    constructor() {
        super()
        this._api = new HttpClient(BASE_URL + "chats")
    }

    request(data?: RequestChatsParams): Observable {
        return this._api.get("", {data})
    }

    create(title: string): Observable {
        return this._api.post("", {data: {title}})
    }

    delete(chatId: number): Observable {
        return this._api.delete("", {data: {chatId}})
    }

    requestChatUsers(chatId: number, requstParams?: RequestChatUsersParams): Observable {
        return this._api.get(`/${chatId}/users`, {data: requstParams})
    }

    requestChatNewMessages(chatId: number): Observable {
        return this._api.get(`/new/${chatId}`)
    }

    requestToken(chatId: number): Observable {
        return this._api.post(`/token/${chatId}`)
    }

    loadChatAvatar(data: UploadChatAvatar): Observable {
        let form = new FormData()
        form.set("chatId", data.chatId.toString())
        form.set("avatar", data.avatar, data.avatar.name)
        return this._api.put(`/avatar`, {data: form})
    }

    addChatUsers(data: AddDeleteChatUsers): Observable {
        return this._api.put(`/users`, {data})
    }

    deleteChatUsers(data: AddDeleteChatUsers): Observable {
        return this._api.delete(`/users`, {data})
    }

}