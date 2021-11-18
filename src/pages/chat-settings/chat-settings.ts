import { Component } from "../../utils/classes/component"

import tmpl from "./chat-settings.tmpl"
import "./chat-settings.scss"
import { Button } from "../../components/button"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { ChangeAvatar } from "../../modules/change-avatar"
import { ChatData, ChatsService } from "../../services/state/chats.service"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import Router from "../../services/core/router"
import { PAGES } from "../../services/core/navigation"
import { ChatView } from "./components/chat-view"
import { ComponentProps } from "../../types/components/component"
import { AddDeleteChatUsers, UploadChatAvatar } from "../../api/chats.api"
import { ConfirmModal } from "../../modules/confirm-modal"
import { AddChatUsers } from "../../modules/add-chat-users"
import { User } from "../../types/state/user"
import { UserService } from "../../services/state/user.service"

type ChatSettingsProps = ComponentProps & {
    chat: ChatData
    isUserChatCreator?: boolean
}

export class ChatSettings extends Component {
    props: ChatSettingsProps

    // Кнопки
    returnButton: Button
    // Вернуться в профиль
    profileReturn: HTMLElement
    // Модуль смены аватара
    сhangeAvatar: ChangeAvatar
    //
    confirmModal: ConfirmModal
    //
    addChatUsers: AddChatUsers

    @Inject(ChatsService)
    private _chatsService: ChatsService

    @Inject(UserService)
    private _userService: UserService

    constructor(props: ChatSettingsProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatSettingsProps): ChatSettingsProps {
        return {
            ...props,
            profileIsEditable: false,
            changePasswordFormIsShown: false,
            chat: this._chatsService.chat as ChatData,
            componentClassName: "settings",
            children: [
                {
                    name: "сhangeAvatar",
                    component: new ChangeAvatar({
                        onApplyButton: (file: File) => {
                            // Обновить аватар
                            const data: UploadChatAvatar = {
                                chatId: this.props.chat.id,
                                avatar: file,
                            }
                            this._chatsService.uploadChatAvatar(data)
                            this.сhangeAvatar.hide()
                        },
                        applyButtonText: "Загрузить",
                        headerTitle: "Выберите лого",
                        isModal: true,
                        isFileRequired: true,
                    }),
                },
                {
                    name: "returnButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-arrow-left",
                    }),
                },
                {
                    name: "chatView",
                    component: new ChatView({
                        chat: this._chatsService.chat as ChatData,
                        onAddUsersButton: () => {
                            this.addChatUsers.show()
                        },
                        onDeleteChatButton: () => {
                            const user = this._userService.user as User
                            // Если создатель, то удялаем чат
                            if (this._isUserChatCreator(user)) {
                                this._onChatDelete()
                            } else {
                                // Иначе покидаем
                                const data: AddDeleteChatUsers = {
                                    chatId: this.props.chat.id,
                                    users: [user.id],
                                }
                                this._onDeleteChatUser(
                                    data,
                                    "Вы уверены, что хотите покинуть чат?",
                                    true,
                                )
                            }
                        },
                        onDeleteUserButton: (user: User) => {
                            const data: AddDeleteChatUsers = {
                                chatId: this.props.chat.id,
                                users: [user.id],
                            }
                            this._onDeleteChatUser(
                                data,
                                "Вы уверены, что хотите удалить пользователя?",
                            )
                        },
                        onAvatar: () => {
                            this.сhangeAvatar.show()
                        },
                    }),
                },
                {
                    name: "confirmModal",
                    component: new ConfirmModal({
                        onConfirm: () => {},
                        onDecline: () => this.confirmModal.hide(),
                    }),
                },
                {
                    name: "addChatUsers",
                    component: new AddChatUsers({
                        isModal: true,
                        onNextButton: () => {
                            this.addChatUsers.hide()
                            const chatUsers: User[] = this.addChatUsers.props.selectedUsers || []
                            const data: AddDeleteChatUsers = {
                                chatId: this.props.chat.id,
                                users: chatUsers.map((x) => x.id),
                            }
                            this._chatsService.addChatUsers(data)
                        },
                        nextButtonTitle: "Добавить",
                    }),
                },
            ],
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._chatsService
                .chatObservable
                .subscribe(
                    (chat: ChatData) => {
                        this.setProps({ chat })
                    },
                ),
        )
    }

    componentDidMount() {
        // Перейти к чатам
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileReturn, "click")
                .subscribe(
                    () => Router.go(PAGES.MAIN),
                ),
        )
    }

    private _onChatDelete() {
        this.confirmModal.setProps({
            description: "Вы уверены, что хотите удалить чат?",
            onConfirm: () => {
                this._chatsService.deleteChat(this.props.chat.id)
                Router.go(PAGES.MAIN)
            },
        })
        this.confirmModal.show()
    }

    private _onDeleteChatUser(data: AddDeleteChatUsers, description: string, leavePage?: boolean) {
        this.confirmModal.setProps({
            description,
            onConfirm: () => {
                this._chatsService.deleteChatUsers(data)
                this.confirmModal.hide()
                // Покинуть страницу и обновить чаты
                if (leavePage) {
                    this._chatsService.leaveChat(this._chatsService.chat?.id || 0)
                    Router.go(PAGES.MAIN)
                }
            },
        })
        this.confirmModal.show()
    }

    private _isUserChatCreator(user: User): boolean {
        return this._chatsService.chat?.created_by === user.id
    }
}