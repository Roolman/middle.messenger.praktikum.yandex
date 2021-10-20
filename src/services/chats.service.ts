import { CHATS } from "../mock/chats"
import { Observable } from "../utils/classes/observable"
import { Subject } from "../utils/classes/subject"
import { getShortChatDate } from "../utils/helpers/date.utils"

export type Chat = {
    id: number,
    name: string,
    avatar: string,
    lastMessage: string,
    lastMessageSentByUser: boolean,
    lastMessageTime: Date,
    lastMessageTimeShort: string,
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
        // TODO: Fix AS
        this._chats = CHATS.map(x => {
            return {...x, lastMessageTimeShort: getShortChatDate(x.lastMessageTime as Date)}
        })
        this._chatsSubject.next(this._chats)
    }

}