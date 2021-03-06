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
                            // ?????????? ?????????????? ??????
                            this._createChat()
                            // ?????????? ???????? ?????????????? ?????? ????????????????
                            this.chatName.titleInput.value = ""
                            this.addChatUsers.userNameInput.value = ""
                            this.addChatUsers.setProps({
                                selectedUsers: [],
                                fetchedUsers: [],
                            })
                            this.selectAvatar.file = null
                            this.selectAvatar.selectFileLabel.textContent = "?????????????????? ????????"
                        },
                        applyButtonText: "??????????????",
                        headerTitle: "?????????????????? ????????",
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
                        // ????????????????
                            this.hide()
                            this.addChatUsers.hide()
                            this.selectAvatar.hide()
                            // ?????? ???????????????? ???????????????? ?? ????????????????
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
        // TODO: ?????????? ??????????????
        this._chatsService.createChat(chatTitle, chatUsers, chatLogoFile)
    }
}