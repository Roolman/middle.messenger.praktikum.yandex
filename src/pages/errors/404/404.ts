import * as Handlebars from "handlebars"

import './404.scss'
import templ from './404.tmpl'
import {Button} from "../../../components/Button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/navigation"

export class Error404Page {

    goToMainButton: Button
    goToMainButtonName = "goToMainButton"

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const error404Page = document.createElement("div")
        error404Page.id = "error404Page"
        error404Page.innerHTML = this.render()
        if(!root) {
            throw new Error("Не был получен корневой элемент!")
        }
        root.appendChild(error404Page)
        //
        if(this.goToMainButton) this.goToMainButton.getContent().onclick = goToMainPage
    }

    render() {
        this.goToMainButton = new Button({
            title: "Назад к чатам", 
            type: BUTTON_TYPES.LINK
        })
        Handlebars.registerPartial("error404goToMainButton", this.goToMainButton.render())        
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

}