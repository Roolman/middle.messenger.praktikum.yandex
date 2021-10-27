import { Component, ComponentProps } from "../../utils/classes/component"
import { FormElement } from "../form/form"
import "./checkbox.scss"
import templ from "./checkbox.tmpl"

type CheckboxProps = ComponentProps & {
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
        super("label", props, templ)
    }

    setDefaultProps(props: CheckboxProps): CheckboxProps {
        return {
            ...props,
            componentClassName: "checkbox-container"
        }
    }

}