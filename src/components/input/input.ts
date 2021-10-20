import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import './input.scss'
import templ from './Input.tmpl'

type InputProps = {
    name: string,
    title: string,
    type: string,
    value?: string,
    errorMessage: string,
}

export class Input extends Component {

    constructor(props: InputProps) {
        super("div", props)
    }

    setDefaultProps(props: InputProps) {
        return {
            ...props,
            value: props.value || ''
        }
    }

    render() {
        this.element.classList.add("input-container")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

}