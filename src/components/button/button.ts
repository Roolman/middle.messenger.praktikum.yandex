import * as Handlebars from "handlebars"
import './Button.scss'
import templ from './Button.tmpl'

import { BUTTON_TYPES, BUTTON_THEMES } from "../../constants/button"
import { Component } from "../../utils/classes/component"

type ButtonProps = {
    title?: string,
    type?: string,
    theme?: string,
    [key: string]: any
}

export class Button extends Component {

    props: ButtonProps
    
    constructor(props: ButtonProps) {
        super("button", props)
    }

    setDefaultProps(props: ButtonProps): ButtonProps {
        return {
            ...props,
            title: props.title || '',
            type: props.type || BUTTON_TYPES.BASIC,
            theme: props.theme || BUTTON_THEMES.PRIMARY
        }
    }

    setDisabled() {
        this.element.setAttribute("disabled", "")
    }

    setEnabled() {
        this.element.removeAttribute("disabled")
    }

    setVisible() {
        this.element.style.visibility = "visible"
    }

    setInvisible() {
        this.element.style.visibility = "hidden"
    }

    render() {
        this._defineClass()
        const template = Handlebars.compile(templ)
        const result = template({
            ...this.props
        })
        return result
    }

    private _defineClass() {
        this.element.classList.add("button")
        let typeClass: string = ''
        switch(this.props.type) {
            case BUTTON_TYPES.BASIC:
                typeClass = "button_basic"
                break
            case BUTTON_TYPES.STROKED:
                typeClass = "button_stroked"
                break
            case BUTTON_TYPES.LINK:
                typeClass = "button_link"
                break
            case BUTTON_TYPES.ROUND:
                typeClass = "button_round"
                break
            default: 
                break
        }
        if(typeClass) {
            this.element.classList.add(typeClass)
        }
        let themeClass: string = ''
        switch(this.props.theme) {
            case BUTTON_THEMES.PRIMARY:
                themeClass = "button_primary"
                break
            case BUTTON_THEMES.DANGER:
                themeClass = "button_danger"
                break
            case BUTTON_THEMES.BASIC:
                themeClass = "button_basic"
                break
            default: 
                break
        }
        if(themeClass) {
            this.element.classList.add(themeClass)
        }
    }

}