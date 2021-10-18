import Handlebars from "handlebars"

import './main.scss'
import templ from './main.tmpl'

import {Chats} from "./modules/chats/chats"
import {Chat} from "./modules/chat/chat"
import {goToProfilePage} from "../../services/navigation"

export class MainPage {

    chats
    chat

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const mainPage = document.createElement("div")
        mainPage.id = "mainPage"
        mainPage.innerHTML = this.render()
        root.appendChild(mainPage)
        // Вешаем обработчики
        const goToProfileLink = document.getElementsByClassName('chats__profile-link')[0]
        goToProfileLink.onclick = function (event) {
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
        const result = template()
        return result
    }

}