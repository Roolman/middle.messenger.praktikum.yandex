import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import { FormElement } from "../form/form"
import './checkbox.scss'
import templ from './checkbox.tmpl'

type CheckboxProps = {
    name: string
    label: string
}

export class Checkbox extends Component implements FormElement {

    input: HTMLInputElement

    get name(): string {
        return this.input.name
    }
    get value(): string | number | boolean {
        return this.input.checked
    }
    get isValid(): boolean {
        return this.input.validity.valid
    }

    constructor(props: CheckboxProps) {
        super("label", props)
    }

    render() {
        this.element.classList.add("checkbox-container")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    componentDidRender() {
        this.input = this.element.getElementsByClassName("checkbox__input")[0] as HTMLInputElement
    }

}