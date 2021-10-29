import { Component, ComponentChild, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import "./form.scss"
import templ from "./form.tmpl"

type FormProps = ComponentProps & {
    attributes: {
        id: string
        [key: string]: any
    }
    children: (ComponentChild & { component: FormElement })[] 
}

export interface FormElement extends Component {
    get name(): string
    get value(): string | number | boolean
    get isValid(): boolean
    get inputElement(): HTMLElement
    get onValueChange(): Observable
}

export class Form extends Component {
    props: FormProps
    isValid: boolean

    private _onValidityChange: Subject<boolean>
    private _onValidityChangeObservable: Observable

    get formElements(): Array<FormElement> {
        return this.props.children.map(x => x.component as FormElement)
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

    componentDidMount() {
        // TODO: Сделать более эффективно
        // NOTE: Абстрагировать логику от события на валидность
        // Навешиваем обработчик валидации
        for (const formChild of this.props.children) {
            this._onMountSubscriptions.push(
                formChild.component.onValueChange.subscribe(
                    () => {
                        const isValid = this._checkValidity()
                        if (this.isValid !== isValid) {
                            this.isValid = isValid
                            this._onValidityChange.next(this.isValid)
                        }
                    },
                )
            )
        }
    }

    private _checkValidity(): boolean {
        let isValid = true
        for (const formChild of this.props.children) {
            if (!formChild.component.isValid) isValid = false
        }
        return isValid
    }
}