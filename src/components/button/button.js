import Handlebars from "handlebars"
import './button.scss'
import templ from './button.tmpl'

import { BUTTON_TYPES } from "../../constants"

export class Button {

    template
    // Стили кнопки
    width
    height
    type
    // Параметры template
    buttonClass = "button"
    id
    title

    constructor(id, title, type = BUTTON_TYPES.BASIC, width = "100%", height = "auto") {
        this.id = id
        this.title = title
        this.type = type
        this.width = width
        this.height = height
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        this._defineClass()
        const result = template({
            id: this.id,
            title: this.title,
            buttonClass: this.buttonClass
        })
        return result
    }

    _defineClass() {
        switch(this.type) {
            case BUTTON_TYPES.BASIC:
                this.buttonClass += " button_basic"
                break
            case BUTTON_TYPES.STROKED:
                this.buttonClass += " button_stroked"
                break
            case BUTTON_TYPES.LINK:
                this.buttonClass += " button_link"
                break
            default: 
                break
        }
    }

    _defineStyle(props) {
        const button = document.getElementById(this.id)
        for(let [prop, value] of Object.entries(props)) button.style[prop] = value
    }

}