import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import './Сheckbox.scss'
import templ from './Сheckbox.tmpl'

type CheckboxProps = {
    name: string
    label: string
}

export class Checkbox extends Component {

    constructor(props: CheckboxProps) {
        super("label", props)
    }

    render() {
        this.element.classList.add("checkbox-container")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

}