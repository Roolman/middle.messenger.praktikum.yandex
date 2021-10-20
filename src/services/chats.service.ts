import { CHATS } from "../mock/chats"
import { Observable } from "../utils/classes/observable"
import { Subject } from "../utils/classes/subject"

export type Chat = {
    id: number,
    name: string,
    avatar: string,
    lastMessage: string,
    lastMessageSentByUser: boolean,
    lastMessageTime: Date,
    unreadCount: number
}

export class ChatsService {

    public chatsObservable: Observable
    private _chatsSubject: Subject<Chat[]>
    private _chats: Chat[]

    constructor() {
        this._chats = []
        this._chatsSubject = new Subject()
        this.chatsObservable = this._chatsSubject.asObservable()
    }

    getChats(): void {
        this._chats = CHATS
        this._chatsSubject.next(this._chats)
    }

}