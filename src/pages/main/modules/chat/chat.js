import Handlebars from "handlebars"

import './chat.scss'
import templ, {emptyChat, emptyChat} from './chat.tmpl'

import {MESSAGE_TYPES} from "../../../../constants"
import {Button} from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants"
import { Message } from "./components/message/index"

const CHAT = {
    name: "Вадим",
    avatar: "",
    lastMessageTime: new Date()
}

const MESSAGES = [
    {
        id: 1,
        type: MESSAGE_TYPES.TEXT,
        value: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.`,
        time: new Date(),
        sentByUser: false
    },
    {
        id: 2,
        type: MESSAGE_TYPES.IMAGE,
        value:  "static/img/camera.png",
        time: new Date(),
        sentByUser: false
    },
    {
        id: 3,
        type: MESSAGE_TYPES.TEXT,
        value:  "Круто !",
        time: new Date(),
        sentByUser: true
    }
]

export class Chat {

    template
    //
    sendButton

    constructor() {
        this.init()
    }

    init() {
        Handlebars.registerPartial("emptyChat", emptyChat)
        this.template = this.render()
    }

    render() {
        this.sendButton = new Button("sendButton", "", BUTTON_TYPES.ROUND, BUTTON_THEMES.PRIMARY, "fa fa-arrow-right")
        Handlebars.registerPartial("sendButton", this.sendButton.template)
        Handlebars.registerHelper("chatMessage", function (id, type, value, time, sentByUser) {
            const message = new Message(id, type, value, time, sentByUser)
            return new Handlebars.SafeString(message.template)
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