import * as Handlebars from "handlebars"

import "./chat.scss"
import templ, { emptyChat } from "./chat.tmpl"

import { Button } from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { Component, ComponentChild, ComponentProps } from "../../../../utils/classes/component"
import { ChatData, ChatsService, MessageData } from "../../../../services/state/chats.service"
import { Inject } from "../../../../utils/decorators/inject"
import { Form } from "../../../../components/form"
import { MessageInput } from "./components/message-input"
import { Observable } from "../../../../utils/classes/observable"
import { Validators } from "../../../../utils/classes/validators"
import { REQUIRED_VALIDATOR } from "../../../../constants/validators"

Handlebars.registerPartial("emptyChat", emptyChat)

type ChatProps = ComponentProps & ChatData & {
    messagesComponents: ComponentChild[]
}

export class Chat extends Component {
    props: ChatProps

    sendForm: Form
    sendButton: Button

    chatInput: HTMLElement
    messagesContainer: HTMLElement

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ChatProps): ChatProps {
        return {
            ...props,
            componentClassName: "chat",
            messagesComponents: [],
            children: [
                {
                    name: "sendButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-arrow-right",
                        attributes: {
                            form: "sendMessageFormId",
                            type: "submit",
                        },
                        styles: {
                            visibility: "hidden",
                        },
                    })
                },
                {
                    name: "sendForm",
                    component: new Form({
                        children: [
                            {
                                name: "messageInput",
                                component: new MessageInput({
                                    validators: new Validators([REQUIRED_VALIDATOR]),
                                })
                            }
                        ],
                        attributes: {
                            id: "sendMessageFormId",
                        },
                    })
                },
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._chatsService
                .chatObservable
                .subscribe(
                    (chat: ChatData) => {
                        this.setProps({
                            ...chat,
                            messagesComponents: this._getMessagesComponents(chat.messages)
                        })
                    },
                ),
        )
    }

    componentDidRender() {
        if (!this.props.id) {
            this.element.classList.add("chat_empty")
        } else {
            this.element.classList.remove("chat_empty")
            // Добавляем класс к форме
            this.sendForm.element.classList.add("chat__input-width")
        }
    }

    // TODO: Добавление сообщения со скролом
    componentDidMount() {
        if (this.props.id) {
            this._onMountSubscriptions.push(
                Observable.fromEvent(this.sendButton.element, "click")
                    .subscribe(
                        (e: Event) => {
                            e.preventDefault()

                            if (this.sendForm.isValid) {
                                let message = this.sendForm.formElements[0].value
                                console.log(message)
                                // this._chatsService.addMessage(message)
                                message = ""
                            }
                        },
                    ),
            )
            this._onMountSubscriptions.push(
                this.sendForm.onValidityChange.subscribe(
                    (isValid: boolean) => this._setSendButtonVisibility(isValid),
                ),
            )
        }
    }

    private _setSendButtonVisibility(visible: boolean) {
        if (visible) {
            this.sendButton.setVisible()
        } else {
            this.sendButton.setInvisible()
        }
    }

    private _getMessagesComponents(messages: MessageData[]): ComponentChild[] {
        const messagesComponents = messages.map((x, i) => {
            return {
                name: `message__${i}`,
                component: new Message(x)
            }
        })
        // Обновляем children компонента для ререндера
        if(this.props.children) {
            this.props.children = this.props.children.filter(x => !x.name.includes("message"))
            this.props.children.push(...messagesComponents)
        }
        return messagesComponents
    }
}