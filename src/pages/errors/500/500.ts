import * as Handlebars from "handlebars"

import './500.scss'
import templ from './500.tmpl'
import {Button} from "../../../components/button"
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
        const goToMain = document.getElementById(this.goToMainButton.id)
        if(goToMain) goToMain.onclick = goToMainPage
    }

    render() {
        this.goToMainButton = new Button(this.goToMainButtonName, "Назад к чатам", BUTTON_TYPES.LINK)
        Handlebars.registerPartial("error500goToMainButton", this.goToMainButton.content)
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

}