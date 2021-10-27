import { MESSAGE_TYPES } from "../../constants/message"
import { MESSAGES } from "../../mock/chat"
import { CHATS } from "../../mock/chats"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { getShortChatDate } from "../../utils/helpers/date.utils"

export type ChatData = {
    id: number,
    name: string,
    avatar: string,
    lastMessage: string,
    lastMessageSentByUser: boolean,
    lastMessageTime: Date,
    lastMessageTimeShort?: string,
    unreadCount: number,
    messages: MessageData[]
}

export type MessageData = {
    id: number
    type: string
    value: string
    time: Date
    sentByUser: boolean
}

export class ChatsService {

    public chatsObservable: Observable
    private _chatsSubject: Subject<ChatData[]>
    private _chats: ChatData[]

    public chatObservable: Observable
    private _chatSubject: Subject<ChatData | null>
    private _chat: ChatData | null

    constructor() {
        this._chats = []
        this._chatsSubject = new Subject()
        this.chatsObservable = this._chatsSubject.asObservable()

        this._chat = null
        this._chatSubject = new Subject()
        this.chatObservable = this._chatSubject.asObservable()

        this._chatSubject.next(this._chat)
    }

    getChats(): void {
        // TODO: Fix AS
        this._chats = CHATS.map(x => {
            return {...x, lastMessageTimeShort: getShortChatDate(x.lastMessageTime as Date)}
        })
        this._chatsSubject.next(this._chats)
    }

    setChat(chatData: ChatData): void {
        console.time('setChat')
        this._chat = chatData
        this.setMessages(this._chat)

        this._chatSubject.next(this._chat)
        console.timeEnd('setChat')
    }

    setMessages(chat: ChatData): void {
        chat.messages = MESSAGES
    }

    addMessage(message: string): void {
        const messageData: MessageData = {
            id: Math.random()*100,
            type: MESSAGE_TYPES.TEXT,
            value: message,
            time: new Date(),
            sentByUser: true
        }
        this._chat?.messages.push(messageData)
        this._chatSubject.next(this._chat)
    }

}