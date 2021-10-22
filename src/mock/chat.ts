import { MESSAGE_TYPES } from "../constants/message"
import { Message } from "../services/state/chats.service"

export const CHAT = {
    name: "Вадим",
    avatar: "",
    lastMessageTime: new Date()
}

export const MESSAGES: Message[] = [
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