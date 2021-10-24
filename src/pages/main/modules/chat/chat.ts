import * as Handlebars from "handlebars"

import './Chat.scss'
import templ, {emptyChat} from './Chat.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/Message/index"
import { Component } from "../../../../utils/classes/component"
import { ChatData, ChatsService, MessageData } from "../../../../services/state/chats.service"
import { Inject } from "../../../../utils/decorators/inject"
import { Form } from "../../../../components/Form"
import { MessageInput } from "./components/Message-Input/Message-input"
import { Observable } from "../../../../utils/classes/observable"

export class Chat extends Component {

    props: ChatData

    sendForm: Form
    sendInput: HTMLInputElement
    sendButton: Button

    messagesContainer: HTMLElement
    messages: Message[]

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div")
    }

    componentDidInit() {
        this.messages = []

        this._subscriptions.push(
            this._chatsService
                .chatObservable
                .subscribe(
                    (chat: ChatData) => {
                        this.setProps({...chat})
                    }
                )
        )
        Handlebars.registerPartial("emptyChat", emptyChat)
    }

    componentDidUpdate() {
        this.messages = []
        return true
    }

    render() {
        this.element.classList.add("chat")
        if(!this.props.id) {
            this.element.classList.add("chat_empty")
        }
        else {
            this.element.classList.remove("chat_empty")
        }
        const template = Handlebars.compile(templ)
        const result = template(this.props)
        return result
    }

    componentDidRender() {
        if(this.props.id) {
            // Создаем форму для инпута сообщения
            this.sendInput = new MessageInput().element as HTMLInputElement
            this.sendForm = new Form({
                id: "sendMessageFormId",
                formElements: [
                    this.sendInput
                ]
            })
            this.sendForm.element.classList.add("chat__input-width")
            // Кнопка отправки
            this.sendButton = new Button({
                type: BUTTON_TYPES.ROUND,
                theme: BUTTON_THEMES.PRIMARY,
                iconClass: "fa fa-arrow-right",
                attributes: {
                    form: this.sendForm.element.id,
                    type: "submit"
                }
            })
            const chat_input = this.element.getElementsByClassName("chat__input")[0] as HTMLElement
            chat_input.appendChild(this.sendForm.element)
            chat_input.appendChild(this.sendButton.element)
            // Сообщения
            this.messagesContainer = this.element.getElementsByClassName("chat__messages")[0] as HTMLElement
            for(let message of this.props.messages) {
                const mes = new Message(message)
                this.messages.push(mes)
                this.messagesContainer.appendChild(mes.element)
            }
        }
    }

    // TODO: Добавление сообщения со скролом
    componentDidMount() {
        if(this.props.id) { 
            console.log(this.messagesContainer.scrollHeight)

            this._onMountSubscriptions.push(
                Observable.fromEvent(this.sendButton.element, "click")
                          .subscribe(
                              (e: Event) => {
                                  e.preventDefault()
                                  let message = this.sendInput.value
                                  console.log(message)
                                  // this._chatsService.addMessage(message)
                                  message = ""
                              }
                          )
            )
        }
    }

}