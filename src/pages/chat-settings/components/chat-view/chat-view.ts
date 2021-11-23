import { Button } from "../../../../components/button"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Component } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"
import { Inject } from "../../../../utils/decorators/inject"

import tmpl from "./chat-view.tmpl"
import "./chat-view.scss"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { ComponentChild, ComponentProps } from "../../../../types/components/component"
import { User } from "../../../../types/state/user"
import { ChatUserItem } from "../chat-user-item"
import { UserService } from "../../../../services/state/user.service"
import { Image } from "../../../../components/image"
import { DEFAULT_CHAT_AVATAR } from "../../../../constants/files"

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
    avatar: Image

    avatarContainer: HTMLElement

    @Inject(ChatsService)
    private _chatsService: ChatsService

    @Inject(UserService)
    private _userService: UserService

    constructor(props: ChatViewProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatViewProps): ChatViewProps {
        const usersChildComponents = this._getChatUserItemComponents(
            this._chatsService.chat?.users || [],
        )
        const user = this._userService.user as User
        let onDeleteTitle: string
        if (this._isUserChatCreator(user)) {
            onDeleteTitle = "Удалить чат"
        } else {
            onDeleteTitle = "Покинуть чат"
        }
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
                        title: onDeleteTitle,
                        type: BUTTON_TYPES.LINK,
                        theme: BUTTON_THEMES.DANGER,
                    }),
                },
                {
                    name: "avatar",
                    component: new Image({
                        class: "settings__main-avatar",
                        attributes: {
                            src: props.chat.avatar || DEFAULT_CHAT_AVATAR
                        }
                    })
                },
                ...usersChildComponents,
            ],
            users: usersChildComponents,
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._chatsService.chatObservable.subscribe(
                (chat: ChatData) => {
                    this.setProps({
                        chat,
                        users: this._getChatUserItemComponents(chat.users || []),
                    })
                    this.avatar.setProps({
                        attributes: {
                            src: chat.avatar || DEFAULT_CHAT_AVATAR
                        }
                    })
                },
            ),
        )
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
                .fromEvent(this.avatarContainer, "click")
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
                isChatCreatorOrAuthUser: this._isUserChatCreator(x) || this._isAuthUser(x),
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

    private _isAuthUser(user: User): boolean {
        return this._userService.user?.id === user.id
    }
}