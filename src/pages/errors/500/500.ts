import * as Handlebars from "handlebars"

import './500.scss'
import templ from './500.tmpl'
import {Button} from "../../../components/Button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/navigation"

export class Error500Page {

    goToMainButton: Button
    goToMainButtonName = "goToMainButton"

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const error500Page = document.createElement("div")
        error500Page.id = "error500Page"
        error500Page.innerHTML = this.render()
        if(!root) {
            throw new Error("Не был получен корневой элемент!")
        }
        root.appendChild(error500Page)
        //
        if(this.goToMainButton) this.goToMainButton.getContent().onclick = goToMainPage
    }

    render() {
        this.goToMainButton = new Button({
            title: "Назад к чатам", 
            type: BUTTON_TYPES.LINK
        })
        Handlebars.registerPartial("error500goToMainButton", this.goToMainButton.render())
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

}