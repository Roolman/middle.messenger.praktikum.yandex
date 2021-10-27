import * as Handlebars from "handlebars"

import './chat.scss'
import templ, {emptyChat} from './chat.tmpl'

import {Button} from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { Component } from "../../../../utils/classes/component"
import { ChatData, ChatsService, } from "../../../../services/state/chats.service"
import { Inject } from "../../../../utils/decorators/inject"
import { Form } from "../../../../components/form"
import { MessageInput } from "./components/message-input"
import { Observable } from "../../../../utils/classes/observable"
import { Validators, VALIDITY_TYPES } from "../../../../utils/classes/validators"

export class Chat extends Component {

    props: ChatData

    sendForm: Form
    sendInput: MessageInput
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
            this.sendInput = new MessageInput({
                validators: new Validators([
                    {
                        type: VALIDITY_TYPES.required,
                        value: ''
                    }
                ])
            })
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
                },
                styles: {
                    visibility: "hidden"
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
            this._onMountSubscriptions.push(
                Observable.fromEvent(this.sendButton.element, "click")
                          .subscribe(
                              (e: Event) => {
                                  e.preventDefault()

                                  if(this.sendForm.isValid) {
                                    let message = this.sendInput.value
                                    console.log(message)
                                    // this._chatsService.addMessage(message)
                                    message = ""
                                  }
                              }
                          )
            )
            this._onMountSubscriptions.push(
                this.sendForm.onValidityChange.subscribe(
                    (isValid: boolean) => this._setSendButtonVisibility(isValid)
                )  
            )
        }
    }

    _setSendButtonVisibility(visible: boolean) {
        visible ? this.sendButton.setVisible() :
                  this.sendButton.setInvisible()
    }

}