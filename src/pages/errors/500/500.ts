import * as Handlebars from "handlebars"

import './500.scss'
import templ from './500.tmpl'
import {Button} from "../../../components/Button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/navigation"
import { Component } from "../../../utils/classes/component"

export class Error500Page extends Component {

    goToMainButton: Button

    constructor() {
        super("div")
    }

    render() {
        this.element.classList.add("error500")
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    insertComponents() {
        this.goToMainButton = new Button({
            title: "Назад к чатам", 
            type: BUTTON_TYPES.LINK
        })
        this.element.appendChild(this.goToMainButton.element)
    }

    componentDidMount() {
        this.goToMainButton.element.onclick = goToMainPage
    }
}