import { AddDeleteChatUsers, ChatsApi, RequestChatsParams, RequestChatUsersParams, UploadChatAvatar } from "../../api/chats.api"
import { RESOURCES_URL } from "../../constants/api"
import { ServerErrorResponse } from "../../types/api"
import { User } from "../../types/state/user"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { Inject } from "../../utils/decorators/inject"
import { getShortChatDate } from "../../utils/helpers/date.utils"
import isEqual from "../../utils/helpers/isEqual"
import { SnackBarService, SNACKBAR_TYPE } from "../core/snackbar"
import { LOGGED_IN_KEY, UserService } from "./user.service"
import Router from "../core/router"
import { PAGES } from "../core/navigation"
import { Message, Messenger } from "../core/messenger"

export type ChatData = {
    id: number
    title: string
    avatar: string | null
    unread_count: number | null
    last_message: LastMessageData | null
    created_by?: number
    users?: User[]
    lastMessageTimeShort?: string
    lastMessageSentByUser?: boolean
    selected?: boolean
    // Отображаемые сообщения в чате
    messages?: Message[]
    // Сервис обмена сообщениями для чата
    messenger?: Messenger
}

type ChatDataShort = {
    id: number,
    title: string,
    avatar: string,
    created_by: number
}

export type LastMessageData = {
    user: Omit<User, "id">
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

    get chat(): ChatData | null {
        return this._chat
    }
    get chats(): ChatData[] {
        return this._chats
    }

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
                // TODO: Подумать о создании новых чатов
                this._chats = this._mapChats(chats)
                console.log(this._chats)
                this._chatsSubject.next(this._chats)
            },
            (err: ServerErrorResponse) => {
                console.log(err)
                this._snackBar.open("Сервис не доступен. Попробуйте позже")
            }
        )
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
                    this.addChatUsers(data)
                }
                
                if(avatar) {
                    const data: UploadChatAvatar = {
                        avatar: avatar,
                        chatId: response.id
                    }
                    this.uploadChatAvatar(data)
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
            this._chats = this._chats.map((x) => ({ ...x, selected: x.id === id }))

            // Если нет сообщений в чате, то получаем с 0го
            if(!this._chat.messages?.length) {
                this._chat.messenger?.getOldMessages(0)
            }

            this._chatsSubject.next(this._chats)
            this._chatSubject.next(this._chat)

            // Также получаем юзеров чата
            this.getChatUsers(this._chat.id)
        }
    }

    getChatUsers(chatId: number): void {
        // TODO: Добавить пагинацию
        const requestParams: RequestChatUsersParams = {
            limit: 1000
        }
        this._chatsApi
            .requestChatUsers(chatId, requestParams)
            .subscribe(
                (users: User[]) => {
                    if(this._chat) {
                        users = users.map(
                            x => ({
                                ...x,
                                avatar: x.avatar ? RESOURCES_URL + x.avatar : '',
                            })
                        )
                        this._chat.users = users
                        this._chatSubject.next(this._chat)
                    }
                },
                (err: ServerErrorResponse) => {
                    console.log(err)
                }
            )
    }

    uploadChatAvatar(data: UploadChatAvatar): void {
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
            if(uploadresponse.id === this._chat?.id) {
                this._chat.avatar = RESOURCES_URL + uploadresponse.avatar
                this._chatSubject.next(this._chat)
                this._snackBar.open("Аватар изменен", SNACKBAR_TYPE.SUCCESS)
            }
        })        
    }

    addChatUsers(data: AddDeleteChatUsers): void {
        this
        ._chatsApi
        .addChatUsers(data)
        .subscribe(
            () => {
                // Обновляем список пользователей
                this.getChatUsers(data.chatId)
            }
        )        
    }

    deleteChatUsers(data: AddDeleteChatUsers): void {
        this
        ._chatsApi
        .deleteChatUsers(data)
        .subscribe(
            () => {
                // Обновляем список пользователей
                this.getChatUsers(data.chatId)
            }
        )      
    }

    deleteChat(chatId: number): void {
        this._chatsApi
            .delete(chatId)
            .subscribe(
                () => {
                    this._snackBar.open("Чат успешно удален", SNACKBAR_TYPE.SUCCESS)
                    // this._chats = this._chats.filter(x => x.id !== chatId)
                    // this._chatsSubject.next(this._chats)
                    Router.go(PAGES.MAIN)
                },
                (err: ServerErrorResponse) => {
                    this._snackBar.open("Ошибка удаления чата", SNACKBAR_TYPE.ERROR)
                }
            )
    }

    onGetOldMessages(messages:  Message[], chatId: number): void {
        const chat = this._chats.find(x => x.id === chatId)
        if(chat) {
            chat.messages?.unshift(...messages.reverse())
            if(chat === this._chat) {
                this._chatSubject.next(chat)
            }
            else {
                // TODO: 
                // this._chatsSubject.next(this._chats)
            }
        }
    }

    onNewMessage(message: Message, chatId: number): void {
        const chat = this._chats.find(x => x.id === chatId)
        if(chat) {
            chat.messages?.push(message)
            if(chat.id === this._chat?.id) {
                this._chatSubject.next(chat)
            }
            else {
                // TODO:
                // this._chatsSubject.next(this._chats)
            }
        }        
    }

    private _mapChats(chats: ChatData[]) {
        const chatIds = this._chats.map(x => x.id)
        const {id, avatar, ...authUser} = this._userService.user as User
        console.log(authUser)
        // TODO: Заменить поиск на более оптимальный
        return chats.map(
            (x: ChatData) => {
                let lastMessageUser
                if(x.last_message) {
                    const {avatar, ...lastMessageUserData} = x.last_message.user
                    lastMessageUser = lastMessageUserData
                }
                if(chatIds.includes(x.id)) {
                    const existingChat = this._chats.find(c => c.id === x.id) as ChatData
                    return {
                        ...existingChat,
                        avatar: x.avatar ? RESOURCES_URL + x.avatar: null,
                        lastMessageTimeShort: x.last_message ? getShortChatDate(new Date(x.last_message.time)) : undefined,
                        lastMessageSentByUser: isEqual(lastMessageUser, authUser),
                    }
                }
                else {
                    return {
                        ...x,
                        avatar: x.avatar ? RESOURCES_URL + x.avatar: null,
                        lastMessageTimeShort: x.last_message ? getShortChatDate(new Date(x.last_message.time)) : undefined,
                        lastMessageSentByUser: isEqual(lastMessageUser, authUser),
                        messages: [],
                        messenger: new Messenger({
                            chatId: x.id,
                            user: this._userService.user as User,
                            api: this._chatsApi,
                            onGetOldMessages: this.onGetOldMessages.bind(this),
                            onNewMessage: this.onNewMessage.bind(this),
                        })
                    }
                }
            }
        )
    }
}