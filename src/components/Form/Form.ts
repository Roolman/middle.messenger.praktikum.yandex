import * as Handlebars from "handlebars"
import { Component } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Subject } from "../../utils/classes/subject"
import './form.scss'
import templ from './form.tmpl'

type FormProps = {
    id: string,
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

    constructor(props: FormProps) {
        super("form", props)
    }

    get formElements(): Array<FormElement> {
        return this.props.formElements
    }

    get onValidityChange(): Observable {
        return this._onValidityChangeObservable
    }

    componentDidInit() {
        this._onValidityChange = new Subject()
        this._onValidityChangeObservable = this._onValidityChange.asObservable()

        this.isValid = this._checkValidity()
        this._onValidityChange.next(this.isValid)
    }

    render() {
        this.element.classList.add("form")
        this.element.id = this.props.id
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    componentDidRender() {
        for(let formElement of this.props.formElements) {
            this.element.appendChild(formElement.element)
        }
    }

    componentDidMount() {
        // TODO: Сделать более эффективно
        // Навешиваем обработчик валидации
        for(let formElement of this.props.formElements) {
            // TODO: Добавить единый интерфейс FormElement // if((formElement instanceof Input)) {}
            this._onMountSubscriptions.push(
                Observable.fromEvent(formElement.element, "input")
                            .subscribe(
                                () => {
                                    const isValid = this._checkValidity()
                                    if(this.isValid != isValid) {
                                        this.isValid = isValid
                                        this._onValidityChange.next(this.isValid)
                                    }
                                }
                            )
            )
        }
    }

    private _checkValidity(): boolean {
        let isValid = true
        for(let formElement of this.props.formElements) {
            if(!formElement.isValid) isValid = false
        }    
        return isValid
    }

}