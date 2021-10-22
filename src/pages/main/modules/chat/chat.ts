import * as Handlebars from "handlebars"

import './Chat.scss'
import templ, {emptyChat} from './Chat.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { CHAT, MESSAGES } from "../../../../mock/chat"
import { Component } from "../../../../utils/classes/component"

export class Chat extends Component {

    sendButton: Button

    constructor() {
        super("div")
    }

    render() {
        this.element.classList.add("chat")
        Handlebars.registerPartial("emptyChat", emptyChat)
        Handlebars.registerHelper("chatMessage", function (id, type, value, time, sentByUser) {
            const message = new Message({
                id, type, value, time, sentByUser
            })
            return new Handlebars.SafeString(message.element.outerHTML)
        })
        const template = Handlebars.compile(templ)
        const result = template({
            chatIsEmpty: false,
            chat: CHAT,
            messages: MESSAGES
        })
        return result
    }

    componentDidRender() {
        this.sendButton = new Button({
            type: BUTTON_TYPES.ROUND,
            theme: BUTTON_THEMES.PRIMARY,
            iconClass: "fa fa-arrow-right"
        })
        const chat_input = this.element.getElementsByClassName("chat__input")[0] as HTMLElement
        chat_input.appendChild(this.sendButton.element)
    }

}