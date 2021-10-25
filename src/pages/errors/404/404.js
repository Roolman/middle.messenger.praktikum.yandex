import Handlebars from "handlebars"

import './404.scss'
import templ from './404.tmpl'
import {Button} from "../../../components/button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/navigation"

export class Error404Page {

    goToMainButton
    goToMainButtonName = "goToMainButton"

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const error404Page = document.createElement("div")
        error404Page.id = "error404Page"
        error404Page.innerHTML = this.render()
        root.appendChild(error404Page)
        //
        const goToMain = document.getElementById(this.goToMainButton.id)
        goToMain.onclick = goToMainPage
    }

    render() {
        this.goToMainButton = new Button(this.goToMainButtonName, "Назад к чатам", BUTTON_TYPES.LINK)
        Handlebars.registerPartial("error404goToMainButton", this.goToMainButton.content)
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}