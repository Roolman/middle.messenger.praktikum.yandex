import { Button } from "../../../../components/button";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button";
import { Component, ComponentProps } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./chat-view.tmpl"
import "./chat-view.scss"
import { ChatData, ChatsService } from "../../../../services/state/chats.service";

type ChatViewProps = ComponentProps & {
    chat?: ChatData
    chatId: string
    onAvatar: Function
}

export class ChatView extends Component {
    props: ChatViewProps

    editDataButton: Button
    addUsersButton: Button
    deleteChatButton: Button
    avatar: HTMLElement

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ChatViewProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatViewProps): ChatViewProps {
        return {
            ...props,
            componentClassName: "settings__main",
            children: [
                {
                    name: "editDataButton",
                    component: new Button({
                        title: "Изменить данные",
                        type: BUTTON_TYPES.LINK,
                    }),
                },
                {
                    name: "addUsersButton",
                    component: new Button({
                        title: "Добавить пользователей",
                        type: BUTTON_TYPES.LINK,
                    }),
                },
                {
                    name: "deleteChatButton",
                    component: new Button({
                        title: "Удалить чат",
                        type: BUTTON_TYPES.LINK,
                        theme: BUTTON_THEMES.DANGER,
                    }),
                },
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(this._chatsService.chatObservable.subscribe(
            (chat: ChatData) => {
                this.setProps({ chat: chat })
            },
        ))
        // В случае если переход на страницу произошел через адресную строку
        if(!this.props.chat) {
            this._chatsService.getChats()
            this._chatsService.getChat(this.props.chatId)
        }
    }

    componentDidMount() {
        // Кнопки
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.editDataButton.element, "click")
                .subscribe(() => this.props.onEditDataButton()),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.addUsersButton.element, "click")
                .subscribe(() => {
                    alert("Откыть модуль добавления пользователей!")
                }),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.deleteChatButton.element, "click")
                .subscribe(() => {
                    alert("Открыть модал удалить чат?")
                }),
        )
        // Аватар
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.avatar, "click")
                .subscribe(() => this.props.onAvatar()),
        )
    }
}