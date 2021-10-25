import Handlebars from "handlebars"
import './change-avatar.scss'
import templ from './change-avatar.tmpl'

import { Button } from "../../../../components/button/index"

export class ChangeAvatar {

    content
    // Аргументы входные
    applyButton
    applyButtonName = "applyButton"

    constructor() {
        this.content = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        this.applyButton = new Button(this.applyButtonName, "Изменить")
        Handlebars.registerPartial('applyButton', this.applyButton.content)
        const result = template({
            title: this.title
        })
        return result
    }

    setOnApply() {
        const block = document.getElementsByClassName('change-avatar')[0]
        const applyButton = document.getElementById(this.applyButtonName)
        if(!applyButton.onclick) applyButton.onclick = () => block.style.visibility = "hidden"
    }

    show() {
        const block = document.getElementsByClassName('change-avatar')[0]
        block.style.visibility = "visible"
    }

}