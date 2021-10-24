import * as Handlebars from "handlebars"
import './login-register-block.scss'
import templ from './login-register-block.tmpl'

import { Button } from "../Button/index"
import { BUTTON_TYPES } from "../../constants/button"
import { Component } from "../../utils/classes/component"
import { Form } from "../Form"

type LoginRegisterBlockProps = {
    title: string,
    form: Form,
    mainActionTitle: string,
    secondActionTitle: string,
    [key: string]: any
}

export class LoginRegisterBlock extends Component {

    props: LoginRegisterBlockProps
    mainButton: Button
    secondButton: Button

    constructor(props: LoginRegisterBlockProps) {
        super("div", props)
    }

    render() {
        this.element.classList.add("login-register-block")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    componentDidRender() {
        // Вставляем форму
        const actionsBlock = this.element.getElementsByClassName("login-register-block__actions")[0]
        if(!actionsBlock) {
            throw new Error("Ошибка рендеринга LoginRegisterBlock")
        }
        const actionsBlockParent = actionsBlock.parentElement
        if(!actionsBlockParent) {
            throw new Error("Ошибка рендеринга LoginRegisterBlock")
        }
        actionsBlockParent.insertBefore(this.props.form.element, actionsBlock)
        // Вставляем кнопки
        this.mainButton = new Button({
            title: this.props.mainActionTitle,
            attributes: {
                type: "submit",
                form: this.props.form.element.id
            }
        })
        this.secondButton = new Button({title: this.props.secondActionTitle, type: BUTTON_TYPES.LINK})
        actionsBlock.appendChild(this.mainButton.element)
        actionsBlock.appendChild(this.secondButton.element)

    }

}