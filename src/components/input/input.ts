import { Component, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import { Validators } from "../../utils/classes/validators"
import { FormElement } from "../form/form"
import "./input.scss"
import templ from "./input.tmpl"

type InputProps = ComponentProps & {
    name: string
    title: string
    type: string
    value?: string | boolean | number
    validators?: Validators
    isValidationHidden?: boolean
}

export class Input extends Component implements FormElement {
    props: InputProps

    input: HTMLInputElement
    messageContainer: HTMLElement
    errorsContainer: HTMLElement
    requiredSymbol: HTMLElement

    touched: boolean

    private _onValueChange: Subject<string | number | boolean>
    private _onValueChangeObservable: Observable

    get isValid(): boolean {
        return this._checkInputValidity()
    }
    get name(): string {
        return this.input.name
    }
    get value(): string | number | boolean {
        return this.input.value
    }
    get onValueChange(): Observable {
        return this._onValueChangeObservable
    }

    constructor(props: InputProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: InputProps): InputProps {
        return {
            ...props,
            value: props.value || "",
            componentClassName: "input-container"
        }
    }

    componentDidInit() {
        this._onValueChange = new Subject()
        this._onValueChangeObservable = this._onValueChange.asObservable()
    }

    componentDidRender() {
        this.props.validators?.setValidators(this.input)

        if (this.props.isValidationHidden) {
            this.requiredSymbol.style.display = "none"
        }
    }

    componentDidMount() {
        if (!this.input) return
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "focus")
                .subscribe(() => {
                    if (!this._checkInputValidity() && this.touched && !this.props.isValidationHidden) {
                        this.showErrors()
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "blur")
                .subscribe(() => {
                    if (!this.props.isValidationHidden) {
                        this.setMessage(this._checkInputValidity())
                        this.hideErrors()
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "input")
                .subscribe(() => {
                    if (!this.props.isValidationHidden) {
                        if (!this.touched) {
                            this.touched = true
                            this.input.classList.add("input-container__input-check-validity")
                        }
                        const isValid = this._checkInputValidity()
                        this.setMessage(isValid)
                        if (isValid) {
                            this.hideErrors()
                        } else {
                            this.showErrors()
                        }
                    }
                    this._onValueChange.next(this.input.value)
                }),
        )
    }

    componentDidUpdate() {
        this.touched = false
        return true
    }

    setMessage(isValid: boolean) {
        this.messageContainer.style.visibility = "visible"

        this.messageContainer.classList.remove("input-container__message-valid")
        this.messageContainer.classList.remove("input-container__message-invalid")

        if(isValid) {
            this.messageContainer.classList.add("input-container__message-valid")
            this.messageContainer.textContent = "Все хорошо"
        }
        else {
            this.messageContainer.classList.add("input-container__message-invalid")
            this.messageContainer.textContent = "Поле содержит ошибку"
        }
    }

    setErrors(errors: string) {
        this.errorsContainer.textContent = errors
    }

    showErrors() {
        this.errorsContainer.style.visibility = "visible"
    }

    hideErrors() {
        this.errorsContainer.style.visibility = "hidden"
    }

    private _checkInputValidity(): boolean {
        if (!this.props.validators) return true
        if (!this.input.checkValidity()) {
            this.props.validators.checkValidity(this.input)
            this.setErrors(this.props.validators.getInvalidities())
            return false
        }
        return true
    }
}