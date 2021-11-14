import { Component } from "../../utils/classes/component";

import tmpl from "./chat-settings.tmpl"
import "./chat-settings.scss"
import { Button } from "../../components/button";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button";
import { ChangeAvatar } from "../../modules/change-avatar";
import { ChatData, ChatsService } from "../../services/state/chats.service";
import { Inject } from "../../utils/decorators/inject";
import { Observable } from "../../utils/classes/observable";
import Router from "../../services/core/router"
import { PAGES } from "../../services/core/navigation";
import { ChatView } from "./components/chat-view";
import { ComponentProps } from "../../types/components/component";
import { AddDeleteChatUsers, UploadChatAvatar } from "../../api/chats.api";
import { ConfirmModal } from "../../modules/confirm-modal";
import { AddChatUsers } from "../../modules/add-chat-users";
import { User } from "../../types/state/user";

type ChatSettingsProps = ComponentProps & {
    chat: ChatData
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
                                avatar: file
                            }
                            this._chatsService.uploadChatAvatar(data)
                            this.сhangeAvatar.hide()
                        },
                        applyButtonText: "Загрузить",
                        headerTitle: "Выберите лого",
                        isModal: true,
                        isFileRequired: true
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
                            this._onChatDelete()
                        },
                        onDeleteUserButton: (user: User) => {
                            this.confirmModal.setProps({
                                description: "Вы уверены, что хотите удалить пользователя?",
                                onConfirm: () => {
                                    const data: AddDeleteChatUsers = {
                                        chatId: this.props.chat.id,
                                        users: [user.id]
                                    }
                                    this._chatsService.deleteChatUsers(data)
                                    this.confirmModal.hide()
                                }
                            })
                            this.confirmModal.show()
                        },
                        onAvatar: () => {
                            this.сhangeAvatar.show()
                        }
                    })
                },
                {
                    name: "confirmModal",
                    component: new ConfirmModal({
                        onConfirm: () => {},
                        onDecline: () => this.confirmModal.hide()
                    })
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
                                users: chatUsers.map(x => x.id)
                            }
                            this._chatsService.addChatUsers(data)
                        },
                        nextButtonTitle: "Добавить"
                    })
                }
            ],
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._chatsService
                .chatObservable
                .subscribe(
                    (chat: ChatData) => {
                        this.setProps({chat})
                    }
                )
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
            }
        })
        this.confirmModal.show()
    }
}