import { ComponentProps } from "../../../../types/components/component"
import { Component } from "../../../../utils/classes/component"

import tmpl from "./create-chat.tmpl"
import "./create-chat.scss"
import { ChatName } from "./components/chat-name"
import { AddChatUsers } from "../../../../modules/add-chat-users"
import { ChangeAvatar } from "../../../../modules/change-avatar"
import { User } from "../../../../types/state/user"
import { Observable } from "../../../../utils/classes/observable"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatsService } from "../../../../services/state/chats.service"

export class CreateChat extends Component {
    chatName: ChatName
    addChatUsers: AddChatUsers
    selectAvatar: ChangeAvatar

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ComponentProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "modal-container",
            children: [
                {
                    name: "chatName",
                    component: new ChatName({
                        onNextButton: () => {
                            this.chatName.hide()
                            this.addChatUsers.show()
                        },
                    }),
                },
                {
                    name: "addChatUsers",
                    component: new AddChatUsers({
                        onNextButton: () => {
                            this.addChatUsers.hide()
                            this.selectAvatar.show()
                        },
                    }),
                },
                {
                    name: "selectAvatar",
                    component: new ChangeAvatar({
                        onApplyButton: () => {
                            this.selectAvatar.hide()
                            this.hide()
                            this.chatName.show()
                            // Здесь создаем чат
                            this._createChat()
                            // После чего стираем все значения
                            this.chatName.titleInput.value = ""
                            this.addChatUsers.userNameInput.value = ""
                            this.addChatUsers.setProps({
                                selectedUsers: [],
                                fetchedUsers: [],
                            })
                            this.selectAvatar.file = null
                            this.selectAvatar.selectFileLabel.textContent = "Загрузите файл"
                        },
                        applyButtonText: "Создать",
                        headerTitle: "Загрузите лого",
                    }),
                },
            ],
        }
    }

    componentDidInit() {
        this.hide()
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.element, "click")
                .subscribe(
                    (e: Event) => {
                        const isVisible = this.element.style.display === "flex"
                        if (e.target === this.element && isVisible) {
                        // Скрываем
                            this.hide()
                            this.addChatUsers.hide()
                            this.selectAvatar.hide()
                            // При открытии начинаем с названия
                            this.chatName.show()
                        }
                    },
                ),
        )
    }

    private _createChat() {
        const chatTitle: string = this.chatName.titleInput.value as string
        const chatUsers: User[] = this.addChatUsers.props.selectedUsers || []
        const chatLogoFile: File | null = this.selectAvatar.file
        // TODO: Вызов функции
        this._chatsService.createChat(chatTitle, chatUsers, chatLogoFile)
    }
}