import { Component, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import "./form.scss"
import templ from "./form.tmpl"

type FormProps = ComponentProps & {
    attributes: {
        id: string
        [key: string]: any
    }
    formElements: Array<FormElement>
}

export interface FormElement extends Component {
    get name(): string
    get value(): string | number | boolean
    get isValid(): boolean
}

export class Form extends Component {
    props: FormProps
    isValid: boolean

    private _onValidityChange: Subject<boolean>
    private _onValidityChangeObservable: Observable

    get formElements(): Array<FormElement> {
        return this.props.formElements
    }

    get onValidityChange(): Observable {
        return this._onValidityChangeObservable
    }

    constructor(props: FormProps) {
        super("form", props, templ)
    }

    setDefaultProps(props: FormProps): FormProps {
        return {
            ...props,
            componentClassName: "form",
        }
    }

    componentDidInit() {
        this._onValidityChange = new Subject()
        this._onValidityChangeObservable = this._onValidityChange.asObservable()

        this.isValid = this._checkValidity()
        this._onValidityChange.next(this.isValid)
    }

    componentDidRender() {
        for (const formElement of this.props.formElements) {
            this.element.appendChild(formElement.element)
        }
    }

    componentDidMount() {
        // TODO: Сделать более эффективно
        // Навешиваем обработчик валидации
        for (const formElement of this.props.formElements) {
            this._onMountSubscriptions.push(
                Observable.fromEvent(formElement.element, "input")
                    .subscribe(
                        () => {
                            const isValid = this._checkValidity()
                            if (this.isValid !== isValid) {
                                this.isValid = isValid
                                this._onValidityChange.next(this.isValid)
                            }
                        },
                    ),
            )
        }
    }

    private _checkValidity(): boolean {
        let isValid = true
        for (const formElement of this.props.formElements) {
            if (!formElement.isValid) isValid = false
        }
        return isValid
    }
}