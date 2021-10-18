import * as Handlebars from "handlebars"

import './main.scss'
import templ from './main.tmpl'

import {Chats} from "./modules/chats/Chats"
import {Chat} from "./modules/chat/Chat"
import {goToProfilePage} from "../../services/navigation"

export class MainPage {

    chats: Chats
    chat: Chat

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const mainPage = document.createElement("div")
        mainPage.id = "mainPage"
        mainPage.innerHTML = this.render()
        if(!root) {
            throw new Error("Не был получен корневой элемент!")
        }
        root.appendChild(mainPage)
        // Вешаем обработчики
        // TODO: Fix AS
        const goToProfileLink: HTMLElement = document.getElementsByClassName('chats__profile-link')[0] as HTMLElement
        if(goToProfileLink) goToProfileLink.onclick = function (event: MouseEvent) {
            event.preventDefault()
            goToProfilePage()
        }
    }

    render() {
        this.chats = new Chats()
        Handlebars.registerPartial("chats", this.chats.content)
        this.chat = new Chat()
        Handlebars.registerPartial("chat", this.chat.content)
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

}