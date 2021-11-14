import { Button } from "../../../../components/button";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button";
import { Component } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./chat-view.tmpl"
import "./chat-view.scss"
import { ChatData, ChatsService } from "../../../../services/state/chats.service";
import { ComponentChild, ComponentProps } from "../../../../types/components/component";
import { User } from "../../../../types/state/user";
import { ChatUserItem } from "../chat-user-item";

type ChatViewProps = ComponentProps & {
    chat: ChatData
    users?: ComponentChild<ChatUserItem>[]
    onAddUsersButton: Function
    onDeleteChatButton: Function
    onDeleteUserButton: Function
    onAvatar: Function
}

export class ChatView extends Component {
    props: ChatViewProps

    addUsersButton: Button
    deleteChatButton: Button
    avatar: HTMLElement

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ChatViewProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatViewProps): ChatViewProps {
        const usersChildComponents = this._getChatUserItemComponents(this._chatsService.chat?.users || [])
        return {
            ...props,
            componentClassName: "settings__main",
            children: [
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
                ...usersChildComponents
            ],
            users: usersChildComponents
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._chatsService.chatObservable.subscribe(
                (chat: ChatData) => {
                    this.setProps({
                         chat: chat,
                         users: this._getChatUserItemComponents(chat.users || [])
                    })
                },
        ))
    }

    componentDidMount() {
        // Кнопки
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.addUsersButton.element, "click")
            .subscribe(() => {
                this.props.onAddUsersButton()
            }),
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.deleteChatButton.element, "click")
            .subscribe(() => {
                this.props.onDeleteChatButton()
            }),
        )
        // Аватар
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.avatar, "click")
            .subscribe(() => this.props.onAvatar()),
        )
    }

    private _getChatUserItemComponents(users: User[]): ComponentChild<ChatUserItem>[] {
        const chatsUserItemComponents: ComponentChild<ChatUserItem>[] = users.map((x, i) => ({
            name: `chatUserItemComponent__${i}`,
            component: new ChatUserItem({
                user: x,
                onUserDelete: () => {
                    this.props.onDeleteUserButton(x)
                },
                isChatCreator: this._isUserChatCreator(x)
            }),
        }))
        // Обновляем children компонента для ререндера
        if (this.props?.children) {
            this.props.children = this.props.children.filter(
                (x) => !x.name.includes("chatUserItemComponent"),
            )
            this.props.children.push(...chatsUserItemComponents)
        }
        return chatsUserItemComponents
    }

    private _isUserChatCreator(user: User): boolean {
        return this._chatsService.chat?.created_by === user.id
    }
}