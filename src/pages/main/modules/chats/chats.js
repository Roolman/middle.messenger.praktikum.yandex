import Handlebars from "handlebars"

import './chats.scss'
import templ from './chats.tmpl'

import {Button} from "../../../../components/button/index"
import { BUTTON_TYPES } from "../../../../constants"

const CHATS = [
    {
        id: 1,
        name: "Андрей",
        avatar: "",
        lastMessage: "Изображение",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setDate(4),
        unreadCount: 2
    },
    {
        id: 2,
        name: "Киноклуб",
        avatar: "",
        lastMessage: "стикер",
        lastMessageSentByUser: true,
        lastMessageTime: new Date().setDate(3),
        unreadCount: 0
    },
    {
        id: 3,
        name: "Илья",
        avatar: "",
        lastMessage: "Друзья, у меня для вас особенный выпуск новостей! Сегодня случился случай бла-бла-бла",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setDate(3),
        unreadCount: 4
    },
    {
        id: 4,
        name: "Вадим",
        avatar: "",
        lastMessage: "Круто!",
        lastMessageSentByUser: true,
        lastMessageTime: new Date().setDate(2),
        unreadCount: 0
    },
    {
        id: 5,
        name: "тет-а-теты",
        avatar: "",
        lastMessage: "И Human Interface Guidelines и Material Design рекомендуют делать сразу несколько важных пометок",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setDate(1),
        unreadCount: 0
    },
    {
        id: 6,
        name: "1, 2, 3",
        avatar: "",
        lastMessage: "Миллионы россиян ежедневно проводят десятки часов своего времени в настолках",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setDate(0),
        unreadCount: 0
    },
    {
        id: 7,
        name: "Design Destroyer",
        avatar: "",
        lastMessage: "В 2008 году художник Jon Rafman  начал собирать макет",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setMonth(8),
        unreadCount: 0
    },
    {
        id: 8,
        name: "Day.",
        avatar: "",
        lastMessage: "Так увлекся работой по курсу, что совсем забыл его анонсировать",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setMonth(8),
        unreadCount: 0
    },
    {
        id: 9,
        name: "Стас Рогозин",
        avatar: "",
        lastMessage: "Можно или сегодня или завтра вечером.",
        lastMessageSentByUser: false,
        lastMessageTime: new Date().setMonth(7),
        unreadCount: 0
    },
]

export class Chats {

    template
    //
    addChatButton

    constructor() {
        this.init()
    }

    init() {
        this.template = this.render()
    }

    render() {
        this.addChatButton = new Button("addChatButton", "", BUTTON_TYPES.ROUND, "fa fa-plus")
        Handlebars.registerPartial("addChatButton", this.addChatButton.template)
        const template = Handlebars.compile(templ)
        const result = template({chats: CHATS})
        return result
    }

}