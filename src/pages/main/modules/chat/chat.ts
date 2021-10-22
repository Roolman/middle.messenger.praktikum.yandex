import * as Handlebars from "handlebars"

import './Chat.scss'
import templ, {emptyChat} from './Chat.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { Component } from "../../../../utils/classes/component"
import { ChatData, ChatsService, MessageData } from "../../../../services/state/chats.service"
import { Inject } from "../../../../utils/decorators/inject"

export class Chat extends Component {

    props: ChatData

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
                        console.time('Chat setProps')
                        this.setProps({...chat})
                        console.timeEnd('Chat setProps')
                    }
                )
        )
        Handlebars.registerPartial("emptyChat", emptyChat)
    }

    componentDidUpdate() {
        this.messages = []
        return true
    }

    // TODO: Переверстать список сообщений
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

    // TODO: Сделать добавление сообщения в список сообщений
    componentDidRender() {
        if(this.props.id) {
            // Кнопка отправки
            this.sendButton = new Button({
                type: BUTTON_TYPES.ROUND,
                theme: BUTTON_THEMES.PRIMARY,
                iconClass: "fa fa-arrow-right"
            })
            const chat_input = this.element.getElementsByClassName("chat__input")[0] as HTMLElement
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

}