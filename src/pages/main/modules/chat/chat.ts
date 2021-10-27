import * as Handlebars from "handlebars"

import "./chat.scss"
import templ, { emptyChat } from "./chat.tmpl"

import { Button } from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { Component, ComponentProps } from "../../../../utils/classes/component"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { Inject } from "../../../../utils/decorators/inject"
import { Form } from "../../../../components/form"
import { MessageInput } from "./components/message-input"
import { Observable } from "../../../../utils/classes/observable"
import { Validators } from "../../../../utils/classes/validators"
import { REQUIRED_VALIDATOR } from "../../../../constants/validators"

Handlebars.registerPartial("emptyChat", emptyChat)

type ChatProps = ComponentProps & ChatData

export class Chat extends Component {
    props: ChatProps

    sendForm: Form
    sendInput: MessageInput
    sendButton: Button

    chatInput: HTMLElement
    messagesContainer: HTMLElement
    messages: Message[]

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ChatProps): ChatProps {
        return {
            ...props,
            componentClassName: "chat",
        }
    }

    componentDidInit() {
        this.messages = []

        this._subscriptions.push(
            this._chatsService
                .chatObservable
                .subscribe(
                    (chat: ChatData) => {
                        this.setProps(chat)
                    },
                ),
        )
    }

    componentDidUpdate() {
        this.messages = []
        return true
    }

    componentDidRender() {
        if (!this.props.id) {
            this.element.classList.add("chat_empty")
        } 
        else {
            this.element.classList.remove("chat_empty")
            // Создаем форму для инпута сообщения
            this.sendInput = new MessageInput({
                validators: new Validators([REQUIRED_VALIDATOR]),
            })
            this.sendForm = new Form({
                formElements: [
                    this.sendInput,
                ],
                attributes: {
                    id: "sendMessageFormId",
                }
            })
            this.sendForm.element.classList.add("chat__input-width")
            // Кнопка отправки
            this.sendButton = new Button({
                type: BUTTON_TYPES.ROUND,
                theme: BUTTON_THEMES.PRIMARY,
                iconClass: "fa fa-arrow-right",
                attributes: {
                    form: this.sendForm.element.id,
                    type: "submit",
                },
                styles: {
                    visibility: "hidden",
                },
            })
            this.chatInput.appendChild(this.sendForm.element)
            this.chatInput.appendChild(this.sendButton.element)
            // Сообщения
            for (const message of this.props.messages) {
                const mes = new Message(message)
                this.messages.push(mes)
                this.messagesContainer.appendChild(mes.element)
            }
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
                                let message = this.sendInput.value
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

    _setSendButtonVisibility(visible: boolean) {
        if (visible) {
            this.sendButton.setVisible()
        } else {
            this.sendButton.setInvisible()
        }
    }
}