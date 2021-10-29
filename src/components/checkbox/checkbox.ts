import { Component, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { FormElement } from "../form/form"
import "./checkbox.scss"
import templ from "./checkbox.tmpl"

type CheckboxProps = ComponentProps & {
    name: string
    label: string
}

export class Checkbox extends Component implements FormElement {
    input: HTMLInputElement

    private _onValueChange: Subject<string | number | boolean>
    private _onValueChangeObservable: Observable

    get name(): string {
        return this.input.name
    }
    get value(): string | number | boolean {
        return this.input.checked
    }
    get isValid(): boolean {
        return this.input.validity.valid
    }
    get inputElement(): HTMLElement {
        return this.input
    }
    get onValueChange(): Observable {
        return this._onValueChangeObservable
    }

    constructor(props: CheckboxProps) {
        super("label", props, templ)
    }

    setDefaultProps(props: CheckboxProps): CheckboxProps {
        return {
            ...props,
            componentClassName: "checkbox-container",
        }
    }

    componentDidInit() {
        this._onValueChange = new Subject()
        this._onValueChangeObservable = this._onValueChange.asObservable()
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "input")
                .subscribe(() => {
                    this._onValueChange.next(this.input.value)
                }),
        )
    }
}