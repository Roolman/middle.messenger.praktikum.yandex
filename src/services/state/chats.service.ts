import { AddDeleteChatUsers, ChatsApi, RequestChatsParams, UploadChatAvatar } from "../../api/chats.api"
import { RESOURCES_URL } from "../../constants/api"
import { MESSAGES } from "../../mock/chat"
import { ServerErrorResponse } from "../../types/api"
import { User } from "../../types/state/user"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { Inject } from "../../utils/decorators/inject"
import { getShortChatDate } from "../../utils/helpers/date.utils"
import isEqual from "../../utils/helpers/isEqual"
import { SnackBarService, SNACKBAR_TYPE } from "../core/snackbar"
import { LOGGED_IN_KEY, UserService } from "./user.service"

export type ChatData = {
    id: number
    title: string
    avatar: string | null
    unread_count: number | null
    last_message: MessageData | null
    messages?: MessageData[]
    lastMessageTimeShort?: string
    lastMessageSentByUser?: boolean
    selected?: boolean
}

type ChatDataShort = {
    id: number,
    title: string,
    avatar: string,
    created_by: number
}

export type MessageData = {
    user: User
    time: Date
    content: string
}

export class ChatsService {

    private _chatsApi: ChatsApi

    public chatsObservable: Observable
    private _chatsSubject: Subject<ChatData[]>
    private _chats: ChatData[]

    public chatObservable: Observable
    private _chatSubject: Subject<ChatData | null>
    private _chat: ChatData | null

    @Inject(SnackBarService)
    private _snackBar: SnackBarService
    
    @Inject(UserService)
    private _userService: UserService

    constructor() {
        this._chatsApi = new ChatsApi()

        this._chats = []
        this._chatsSubject = new Subject()
        this.chatsObservable = this._chatsSubject.asObservable()

        this._chat = null
        this._chatSubject = new Subject()
        this.chatObservable = this._chatSubject.asObservable()

        this._chatSubject.next(this._chat)

        const isLoggedIn = Boolean(localStorage.getItem(LOGGED_IN_KEY))
        if(isLoggedIn) {
            this.getChats()
        }
    }

    getChats(data?: RequestChatsParams): void {
        // TODO: Сделать пагинацию
        if(data) {
            data.limit = 1000
        }
        else {
            data = {
                limit: 1000
            }
        }
        this
        ._chatsApi
        .request(data)
        .subscribe(
            (chats: ChatData[]) => {
                this._chats = chats.map((x) => ({
                    ...x,
                    avatar: x.avatar ? RESOURCES_URL + x.avatar: null,
                    lastMessageTimeShort: x.last_message ? getShortChatDate(x.last_message.time) : undefined,
                    lastMessageSentByUser: isEqual(x.last_message?.user, this._userService.user)
                }))
                this._chatsSubject.next(this._chats)
            },
            (err: ServerErrorResponse) => {
                console.log(err)
                this._snackBar.open("Сервис не доступен. Попробуйте позже")
            }
        )
    }

    getChat(id: string): void {
        const chat = this._chats.find(x => x.id == Number(id))
        if(chat) {
            this._chat = chat
            this._chatSubject.next(this._chat)
        }
        else {
            throw new Error(`Чат с id ${id} не найден`)
        }
    }

    createChat(title: string, users?: User[], avatar?: File | null): void {
        this._chatsApi.create(title).subscribe(
            (response: {id: number}) => {

                const newChat: ChatData = {
                    id: response.id,
                    title,
                    avatar: null,
                    unread_count: null,
                    last_message: null,
                }
                this._chats.unshift(newChat)
                this._chatsSubject.next(this._chats)
                this._snackBar.open("Чат создан. Напишите первое сообщение уже сейчас!", SNACKBAR_TYPE.SUCCESS)

                if(users && users.length) {
                    const data: AddDeleteChatUsers = {
                        users: users.map(x => x.id),
                        chatId: response.id
                    }
                    this
                    ._chatsApi
                    .addChatUsers(data)
                    .subscribe(() => {})
                }
                
                if(avatar) {
                    const data: UploadChatAvatar = {
                        avatar: avatar,
                        chatId: response.id
                    }
                    this
                    ._chatsApi
                    .loadChatAvatar(data)
                    .subscribe((uploadresponse: ChatDataShort) => {
                        this._chats = this._chats.map((x) => {
                            if(x.id === uploadresponse.id) {
                                x.avatar = RESOURCES_URL + uploadresponse.avatar
                            }
                            return x
                        })
                        this._chatsSubject.next(this._chats)
                    })
                }
            },
            (err: ServerErrorResponse) => {
                this._snackBar.open("Ошибка создания чата", SNACKBAR_TYPE.ERROR)
            }
        )
    }

    setChat(chatId: number): void {
        this._chat = this._chats.find((x) => x.id === chatId) || null
        if (this._chat) {
            const { id } = this._chat
            this.setMessages(this._chat)
            this._chats = this._chats.map((x) => ({ ...x, selected: x.id === id }))

            this._chatsSubject.next(this._chats)
            this._chatSubject.next(this._chat)
        }
    }

    getSelectedChat(): ChatData | undefined {
        return this._chats.find(x => x.selected)
    }

    setMessages(chat: ChatData): void {
        chat.messages = MESSAGES
    }

    // addMessage(message: string): void {
    //     const messageData: MessageData = {
    //         id: Math.round(Math.random() * 100),
    //         type: MESSAGE_TYPES.TEXT,
    //         value: message,
    //         time: new Date(),
    //         sentByUser: true,
    //     }
    //     this._chat?.messages.push(messageData)
    //     this._chatSubject.next(this._chat)
    // }
}