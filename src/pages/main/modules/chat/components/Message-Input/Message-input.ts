import { FormElement } from "../../../../../../components/form/form"
import { Component, ComponentProps } from "../../../../../../utils/classes/component"
import { Observable } from "../../../../../../utils/classes/observable"
import { Validators } from "../../../../../../utils/classes/validators"
import "./message-input.scss"
import templ from "./message-input.tmpl"

type MessageInputProps = ComponentProps & {
    validators: Validators
}

export class MessageInput extends Component implements FormElement {
    get name(): string {
        return this.element.getAttribute("name") || "chatMessage"
    }
    get value(): string {
        return (this.element as HTMLInputElement).value
    }
    get isValid(): boolean {
        return this._checkInputValidity()
    }

    constructor(props: MessageInputProps) {
        super("input", props, templ)
    }

    setDefaultProps(props: MessageInputProps): MessageInputProps {
        return {
            ...props,
            componentClassName: "chat__input-text",
        }
    }

    componentDidRender() {
        // TODO: Fix
        this.element.setAttribute("type", "text")
        this.element.setAttribute("id", "chatMessage")
        this.element.setAttribute("name", "chatMessage")
        this.element.setAttribute("placeholder", "Сообщение")

        this.props.validators.setValidators(this.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.element, "input")
                .subscribe(() => {
                    this._checkInputValidity()
                }),
        )
    }

    private _checkInputValidity(): boolean {
        const element = this.element as HTMLInputElement
        if (!element.checkValidity()) {
            this.props.validators.checkValidity(this.element)
            return false
        }
        return true
    }
}