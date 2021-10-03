import Handlebars from "handlebars"

import './main.scss'
import templ from './main.tmpl'

import {Chats} from "./modules/chats/chats"
import {Chat} from "./modules/chat/chat"

export class MainPage {

    chats
    chat

    constructor() {

    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const mainPage = document.createElement("div")
        mainPage.id = "mainPage"
        mainPage.innerHTML = this.render()
        root.appendChild(mainPage)
    }

    render() {
        this.chats = new Chats()
        Handlebars.registerPartial("chats", this.chats.template)
        this.chat = new Chat()
        Handlebars.registerPartial("chat", this.chat.template)
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}