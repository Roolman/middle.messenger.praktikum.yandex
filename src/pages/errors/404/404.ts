import * as Handlebars from "handlebars"

import './404.scss'
import templ from './404.tmpl'
import {Button} from "../../../components/Button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/navigation"
import { Component } from "../../../utils/classes/component"

export class Error404Page extends Component {

    goToMainButton: Button

    constructor() {
        super("div")
    }

    render() {
        this.element.classList.add("error404")
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
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