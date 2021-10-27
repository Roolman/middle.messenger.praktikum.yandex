import "./login-register-block.scss"
import templ from "./login-register-block.tmpl"

import { Button } from "../button/index"
import { BUTTON_TYPES } from "../../constants/button"
import { Component, ComponentProps } from "../../utils/classes/component"
import { Form } from "../form"

type LoginRegisterBlockProps = ComponentProps & {
    title: string
    form: Form
    mainActionTitle: string
    secondActionTitle: string
}

export class LoginRegisterBlock extends Component {
    props: LoginRegisterBlockProps

    blockContainer: HTMLElement
    actionsBlock: HTMLElement
    mainButton: Button
    secondButton: Button

    constructor(props: LoginRegisterBlockProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: LoginRegisterBlockProps): LoginRegisterBlockProps {
        return {
            ...props,
            componentClassName: "login-register-block"
        }
    }

    componentDidRender() {
        // Вставляем форму
        this.blockContainer.insertBefore(this.props.form.element, this.actionsBlock)
        // Вставляем кнопки
        this.mainButton = new Button({
            title: this.props.mainActionTitle,
            attributes: {
                type: "submit",
                form: this.props.form.element.id,
            },
        })
        this.secondButton = new Button({ title: this.props.secondActionTitle, type: BUTTON_TYPES.LINK })
        this.actionsBlock.appendChild(this.mainButton.element)
        this.actionsBlock.appendChild(this.secondButton.element)
    }
}