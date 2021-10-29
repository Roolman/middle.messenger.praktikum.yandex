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

    form: Form
    mainButton: Button
    secondButton: Button

    constructor(props: LoginRegisterBlockProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: LoginRegisterBlockProps): LoginRegisterBlockProps {
        return {
            ...props,
            componentClassName: "login-register-block",
            children: [
                {
                    name: "form",
                    component: props.form,
                },
                {
                    name: "mainButton",
                    component: new Button({
                        title: props.mainActionTitle,
                        attributes: {
                            type: "submit",
                            form: props.form.element.id,
                        },
                    }),
                },
                {
                    name: "secondButton",
                    component: new Button({
                        title: props.secondActionTitle,
                        type: BUTTON_TYPES.LINK,
                    }),
                },
            ],
        }
    }
}