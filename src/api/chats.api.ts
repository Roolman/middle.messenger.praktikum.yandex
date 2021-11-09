import { BASE_URL } from "../constants/api";
import { BaseAPI } from "../utils/classes/base-api";
import { HttpClient } from "../utils/classes/fetch";
import { Observable } from "../utils/classes/observable";

export type UploadChatAvatar = {
    chatId: number
    avatar: File
}

export type AddDeleteChatUsers = {
    users: Array<number>
    chatId: number
}

export class ChatsApi extends BaseAPI {

    private _api: HttpClient

    constructor() {
        super()
        this._api = new HttpClient(BASE_URL + "chats")
    }

    request(): Observable {
        return this._api.get("")
    }

    create(title: string): Observable {
        return this._api.post("", {data: {title}})
    }

    delete(chatId: number): Observable {
        return this._api.delete("", {data: {chatId}})
    }

    requestChatUsers(chatId: number): Observable {
        return this._api.get(`/${chatId}/users`)
    }

    requestChatNewMessages(chatId: number): Observable {
        return this._api.get(`/new/${chatId}`)
    }

    loadChatAvatar(data: UploadChatAvatar): Observable {
        // TODO: Проверить работоспособность...
        let form = new FormData()
        form.append("chatId", data.chatId.toString())
        form.append("avatar", data.avatar)
        return this._api.put(`/avatar`, {data: form})
    }

    addChatUsers(data: AddDeleteChatUsers): Observable {
        return this._api.put(`/users`, {data})
    }

    deleteChatUsers(data: AddDeleteChatUsers): Observable {
        return this._api.delete(`/users`, {data})
    }

}