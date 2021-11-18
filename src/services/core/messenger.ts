import { ChatsApi } from "../../api/chats.api"
import { WEBSOCKET_BASE_URL } from "../../constants/api"
import { MESSENGER_EVENTS } from "../../constants/messenger"
import { Indexed } from "../../types"
import { ServerErrorResponse } from "../../types/api"
import { User } from "../../types/state/user"
import { Observable, Subscription } from "../../utils/classes/observable"

export type MessengerProps = {
    chatId: number
    user: User
    api: ChatsApi
    onNewMessage: Function
    onGetOldMessages: Function
}

export type Message = {
    id: number
    time: string
    type: string
    user_id: number
    content: string
    chat_id?: number
    file?: WSFile
}

export type WSFile = {
    id?: number // TODO: !!!
    user_id: number
    path: string
    filename: string
    content_type: string
    content_size: number
    upload_date: string
}

type WSDataServerResponse = Indexed & { type?: string } | Array<Indexed & { type: string }>

export class Messenger {
    private _subscriptions: Subscription[]

    private _socket: WebSocket
    private _token: string

    private _chatId: number
    private _user: User
    private _api: ChatsApi

    private _pingTimer: NodeJS.Timer

    private _onNewMessage: Function
    private _onGetOldMessages: Function

    constructor(props: MessengerProps) {
        const { chatId, api, user } = props
        this._chatId = chatId
        this._api = api
        this._user = user

        this._onNewMessage = props.onNewMessage
        this._onGetOldMessages = props.onGetOldMessages

        this._subscriptions = []

        this.connect()
    }

    connect() {
        this._subscriptions.push(
            this
                ._api
                .requestToken(this._chatId)
                .subscribe(
                    ({ token }: { token: string }) => {
                        if (token) {
                            this._token = token
                            this._socket = new WebSocket(
                                `${WEBSOCKET_BASE_URL}${this._user.id}/${this._chatId}/${token}`,
                            )
                            this.init()
                        }
                    },
                    (err: ServerErrorResponse) => {
                        console.log(err)
                    },
                ),
        )
    }

    init() {
        this._subscriptions.push(
            Observable
                .fromEvent(this._socket, "open")
                .subscribe(
                    () => {
                    // NOTE: Пингуем сокет раз в 5 сек примерно
                        this._pingTimer = setInterval(
                            () => {
                                this.pingChat()
                            },
                            5000,
                        )
                    },
                ),
        )

        this._subscriptions.push(
            Observable
                .fromEvent(this._socket, "close")
                .subscribe(
                    (event: CloseEvent) => {
                        clearInterval(this._pingTimer)
                    },
                ),
        )

        this._subscriptions.push(
            Observable
                .fromEvent(this._socket, "message")
                .subscribe(
                    (event: MessageEvent) => {
                        let data: WSDataServerResponse = JSON.parse(event.data)
                        let type
                        if (Array.isArray(data)) {
                            type = data[0]?.type
                        } else {
                            type = data.type
                        }
                        switch (type) {
                            case MESSENGER_EVENTS.MESSAGE:
                                if (Array.isArray(data)) {
                                    data = data as Message[]
                                    this._onGetOldMessages(data, this._chatId)
                                } else {
                                    data = data as Message
                                    this._onNewMessage(data, this._chatId)
                                }
                                break
                            case MESSENGER_EVENTS.PONG:
                            //
                                break
                            case MESSENGER_EVENTS.USER_CONNECTED:
                            //
                                break
                            case MESSENGER_EVENTS.FILE:
                                data = event.data as Message[]
                                //
                                break
                            case MESSENGER_EVENTS.STICKER:
                                data = event.data as Message[]
                                //
                                break
                            default:
                                break
                        }
                    },
                ),
        )

        this._subscriptions.push(
            Observable
                .fromEvent(this._socket, "error")
                .subscribe(
                    (event: ErrorEvent) => {
                        console.log("Ошибка", event.message)
                    },
                ),
        )
    }

    sendMessage(content: string) {
        this._send(content, MESSENGER_EVENTS.MESSAGE)
    }

    getOldMessages(content: number) {
        this._send(content, MESSENGER_EVENTS.GET_OLD)
    }

    pingChat() {
        this._send("ping", MESSENGER_EVENTS.PING)
    }

    destroy() {
        for (const sub of this._subscriptions) {
            sub.unsubscribe()
        }
        clearInterval(this._pingTimer)
        this._socket.close(1000)
    }

    private _send(content: string | number, type: string) {
        // NOTE: Если сокет не открылся, то повторить попытку через 100 мс
        if(this._socket.readyState === 0) {
            setTimeout(
                () => {
                    this._send(content, type)
                },
                50
            )
        }
        else {
            this._socket
            .send(
                JSON.stringify({
                    content,
                    type,
                }),
            )
        }
    }
}