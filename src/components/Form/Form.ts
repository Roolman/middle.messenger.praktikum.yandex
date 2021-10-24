import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import './Form.scss'
import templ from './Form.tmpl'

type FormProps = {
    id: string,
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
        this.element.id = this.props.id
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    componentDidRender() {
        for(let element of this.props.formElements) {
            this.element.appendChild(element)
        }
    }

}