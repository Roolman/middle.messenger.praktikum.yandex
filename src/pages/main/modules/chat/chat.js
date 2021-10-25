import Handlebars from "handlebars"

import './chat.scss'
import templ, {emptyChat, emptyChat} from './chat.tmpl'

import {Button} from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Message } from "./components/message/index"
import { CHAT, MESSAGES } from "../../../../mock/chat"

export class Chat {

    content
    //
    sendButton

    constructor() {
        this.init()
    }

    init() {
        Handlebars.registerPartial("emptyChat", emptyChat)
        this.content = this.render()
    }

    render() {
        this.sendButton = new Button("sendButton", "", BUTTON_TYPES.ROUND, BUTTON_THEMES.PRIMARY, "fa fa-arrow-right")
        Handlebars.registerPartial("sendButton", this.sendButton.content)
        Handlebars.registerHelper("chatMessage", function (id, type, value, time, sentByUser) {
            const message = new Message(id, type, value, time, sentByUser)
            return new Handlebars.SafeString(message.content)
        })
        const template = Handlebars.compile(templ)
        const result = template({
            chatIsEmpty: false,
            chat: CHAT,
            messages: MESSAGES
        })
        return result
    }

}