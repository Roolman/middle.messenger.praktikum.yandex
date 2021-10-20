import * as Handlebars from "handlebars"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { goToError404Page, goToError500Page } from "../../services/navigation"
import { Component } from "../../utils/classes/component"
import { Button } from "../Button"
import './header.scss'
import templ from './Header.tmpl'

export class Header extends Component {

    title: string
    goToError404: Button
    goToError500: Button

    constructor() {
        super("header")
    }

    render() {
        this.element.classList.add("header")
        const template = Handlebars.compile(templ)
        const result = template({title: 'Fast messenger'})
        return result
    }

    componentDidRender() {
        this.goToError404 = new Button({
            title: "Ошибка 404",
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER
        })
        this.goToError500 = new Button({
            title: "Ошибка 500",
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER
        })
        
        const linksBlock = this.element.getElementsByClassName("header__page-links")[0]
        if(!linksBlock) {
            throw new Error("Ошибка рендеринга Header")
        }
        
        linksBlock.appendChild(this.goToError404.element)
        linksBlock.appendChild(this.goToError500.element)
    }

    componentDidMount() {
        this._setHandlers()
    }

    private _setHandlers() {
        this.goToError404.element.onclick = goToError404Page
        this.goToError500.element.onclick = goToError500Page
    }

}