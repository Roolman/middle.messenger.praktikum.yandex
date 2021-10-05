import Handlebars from "handlebars"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants"
import { goToError404Page, goToError500Page } from "../../services/navigation"
import { Button } from "../button"
import './header.scss'
import templ from './header.tmpl'

export class Header {

    title = 'Fast messenger'
    template
    //
    goToError404
    goToError500

    constructor() {
        this.template = this.render()
    }

    render() {
        this.goToError404 = new Button("goToError404", "Ошибка 404", BUTTON_TYPES.LINK, BUTTON_THEMES.DANGER)
        Handlebars.registerPartial("goToError404", this.goToError404.template)
        this.goToError500 = new Button("goToError500", "Ошибка 500", BUTTON_TYPES.LINK, BUTTON_THEMES.DANGER)
        Handlebars.registerPartial("goToError500", this.goToError500.template)
        const template = Handlebars.compile(templ)
        const result = template({title: this.title})
        return result
    }

    setHandlers = () => {
        const goToError404 = document.getElementById(this.goToError404.id)
        goToError404.onclick = goToError404Page
        const goToError500 = document.getElementById(this.goToError500.id)
        goToError500.onclick = goToError500Page
    }

}