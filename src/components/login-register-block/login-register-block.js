import Handlebars from "handlebars"
import './login-register-block.scss'
import templ from './login-register-block.tmpl'

import { Button } from "../../components/button/index"
import { BUTTON_TYPES } from "../../constants/button"

export class LoginRegisterBlock {

    content
    // Аргументы входные
    title
    formPartialName
    mainActionTitle
    mainAction
    secondActionTitle
    secondAction
    // Компоненты блока
    mainButton
    secondButton

    constructor(title, formPartialName, mainActionTitle, mainActionId, secondActionTitle, secondActionId) {
        this.title = title
        this.formPartialName = () => formPartialName
        this.mainActionTitle = mainActionTitle
        this.mainActionId = mainActionId
        this.secondActionId = secondActionId
        this.secondActionTitle = secondActionTitle
        this.content = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        this.mainButton = new Button(this.mainActionId, this.mainActionTitle)
        this.secondButton = new Button(this.secondActionId, this.secondActionTitle, BUTTON_TYPES.LINK)
        Handlebars.registerPartial('mainButton', this.mainButton.content)
        Handlebars.registerPartial('secondButton', this.secondButton.content)
        const result = template({
            title: this.title,
            formPartialName: this.formPartialName,
            mainActionId: this.mainActionId,
            mainActionTitle: this.mainActionTitle,
            secondActionId: this.secondActionId,
            secondActionTitle: this.secondActionTitle
        })
        return result
    }

}