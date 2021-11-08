import "./button.scss"
import templ from "./button.tmpl"

import {
    BUTTON_TYPES, BUTTON_THEMES, BUTTON_TYPE_CLASS, BUTTON_THEME_CLASS,
} from "../../constants/button"
import { Component, ComponentProps } from "../../utils/classes/component"

type ButtonProps = ComponentProps & {
    title?: string
    type?: string
    theme?: string
    iconClass?: string
}

export class Button extends Component {
    props: ButtonProps

    constructor(props: ButtonProps) {
        super("button", props, templ)
    }

    setDefaultProps(props: ButtonProps): ButtonProps {
        return {
            ...props,
            componentClassName: "button",
            title: props.title || "",
            type: props.type || BUTTON_TYPES.BASIC,
            theme: props.theme || BUTTON_THEMES.PRIMARY,
        }
    }

    componentDidRender() {
        const buttonTypeClass = BUTTON_TYPE_CLASS[this.props.type || BUTTON_TYPES.BASIC]
        const buttonThemeClass = BUTTON_THEME_CLASS[this.props.theme || BUTTON_THEMES.PRIMARY]
        this.element.classList.add(buttonTypeClass, buttonThemeClass)
    }
}