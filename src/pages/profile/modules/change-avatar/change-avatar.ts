import * as Handlebars from "handlebars"
import './change-avatar.scss'
import templ from './change-avatar.tmpl'

import { Button } from "../../../../components/Button/index"

export class ChangeAvatar {

    content: string
    // Аргументы входные
    applyButton: Button
    applyButtonName = "applyButton"

    constructor() {
        this.content = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        this.applyButton = new Button({title: "Изменить"})
        Handlebars.registerPartial('applyButton', this.applyButton.render())
        const result = template({})
        return result
    }

    setOnApply() {
        // TODO: Fix AS
        const block = document.getElementsByClassName('change-avatar')[0] as HTMLElement
        const applyButton = document.getElementById(this.applyButtonName)
        if(applyButton && !applyButton.onclick) applyButton.onclick = () => block.style.visibility = "hidden"
    }

    show() {
        // TODO: Fix AS
        const block = document.getElementsByClassName('change-avatar')[0] as HTMLElement
        block.style.visibility = "visible"
    }

}