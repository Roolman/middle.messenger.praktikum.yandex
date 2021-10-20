import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import './Form.scss'
import templ from './Form.tmpl'

type FormProps = {
    formElements: Array<HTMLElement>
}

export class Form extends Component {

    props: FormProps

    constructor(props: FormProps) {
        super("form", props)
    }

    get formElements() {
        return this.props.formElements
    }

    render() {
        this.element.classList.add("form")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    insertComponents() {
        for(let element of this.props.formElements) {
            this.element.appendChild(element)
        }
    }

}