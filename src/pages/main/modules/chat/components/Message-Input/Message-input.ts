import { FormElement } from "../../../../../../components/form/form"
import { ComponentProps } from "../../../../../../types/components/component"
import { Component } from "../../../../../../utils/classes/component"
import { Observable } from "../../../../../../utils/classes/observable"
import { Subject } from "../../../../../../utils/classes/subject"
import { Validators } from "../../../../../../utils/classes/validators"
import "./message-input.scss"
import templ from "./message-input.tmpl"

type MessageInputProps = ComponentProps & {
    validators: Validators
}

export class MessageInput extends Component implements FormElement {
    private _onValueChange: Subject<string>
    private _onValueChangeObservable: Observable

    get name(): string {
        return this.element.getAttribute("name") || "chatMessage"
    }
    get value(): string {
        return (this.element as HTMLInputElement).value
    }
    set value(val: string) {
        const element = this.element as HTMLInputElement
        element.value = val
        this._checkInputValidity(element)
        this._onValueChange.next(val)
    }
    get isValid(): boolean {
        return this._checkInputValidity(this.element as HTMLInputElement)
    }
    get inputElement(): HTMLElement {
        return this.element
    }
    get onValueChange(): Observable {
        return this._onValueChangeObservable
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

    componentDidInit() {
        this._onValueChange = new Subject()
        this._onValueChangeObservable = this._onValueChange.asObservable()
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
                    const element = this.element as HTMLInputElement
                    this._checkInputValidity(element)
                    this._onValueChange.next(element.value)
                }),
        )
    }

    private _checkInputValidity(element: HTMLInputElement): boolean {
        if (!element.checkValidity()) {
            this.props.validators.checkValidity(element)
            return false
        }
        return true
    }
}