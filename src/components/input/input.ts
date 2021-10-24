import * as Handlebars from "handlebars"
import { Component, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Validators } from "../../utils/classes/validators"
import './Input.scss'
import templ from './Input.tmpl'

type InputProps = ComponentProps & {
    name: string,
    title: string,
    type: string,
    value?: string,
    validators?: Validators
}

export class Input extends Component {

    props: InputProps

    input: HTMLInputElement
    messageContainer: HTMLElement
    errorsContainer: HTMLElement

    touched: boolean

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
        const result = template(this.props)
        return result
    }

    componentDidRender() {
        this.input = this.element.getElementsByClassName("input-container__input")[0] as HTMLInputElement
        this.props.validators?.setValidators(this.input)

        this.messageContainer = this.element.getElementsByClassName("input-container__message")[0] as HTMLElement
        this.errorsContainer = this.element.getElementsByClassName("input-container__errors-block")[0] as HTMLElement
    }

    componentDidMount() {
        const checkInputValidity = (): boolean => {
            if(!this.props.validators) return true
            if(!this.input.checkValidity()) {
                this.props.validators.checkValidity(this.input)
                this.setErrors(this.props.validators.getInvalidities())
                return false
            }
            return true
        }
        if(!this.input) return
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "focus")
                    .subscribe(() => {
                        if(!checkInputValidity() && this.touched) {
                            this.showErrors()
                        }
                    })
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "blur")
                    .subscribe(() => {
                        this.setMessage(checkInputValidity())
                        this.hideErrors()
                    })
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.input, "input")
                    .subscribe(() => {
                        if(!this.touched) {
                            this.touched = true
                            this.input.classList.add("input-container__input-check-validity")
                        }
                        let isValid = checkInputValidity()
                        this.setMessage(isValid)
                        if(isValid) {
                            this.hideErrors()
                        }
                        else {
                            this.showErrors()
                        }
                    })
        )
    }

    setMessage(isValid: boolean) {
        this.messageContainer.style.visibility = "visible"

        this.messageContainer.classList.remove("input-container__message-valid")
        this.messageContainer.classList.remove("input-container__message-invalid")
        this.messageContainer.classList.add(
            isValid ? "input-container__message-valid" : "input-container__message-invalid"
        )

        this.messageContainer.textContent = isValid ? "Все хорошо" : "Поле содержит ошибку"
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

}