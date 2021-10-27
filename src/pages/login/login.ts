import * as Handlebars from "handlebars"

import './login.scss'
import templ from './login.tmpl'

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Checkbox } from "../../components/checkbox/index"
import { Header } from "../../components/header/index"

import { goToRegisterPage, goToMainPage } from "../../services/core/navigation"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/form"
import { Observable } from "../../utils/classes/observable"
import { Validators, VALIDITY_TYPES } from "../../utils/classes/validators"

export class LoginPage extends Component {

    // Компоненты
    loginBlock: LoginRegisterBlock
    header: Header
    // Форма
    form: Form
    loginInput: Input
    passwordInput: Input
    rememberMeCheckbox: Checkbox

    private _valid: boolean
    get valid(): boolean {
        return this._valid
    }

    constructor() {
        super("div")
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
        this.element.classList.add("login")
        // Создаем форму
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                }
            ]),
            hideValidation: true
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                }
            ]),
            hideValidation: true
        })
        this.rememberMeCheckbox = new Checkbox({
            name: "rememberMe",
            label: "Запомнить меня"
        })
        this.form = new Form({
            id: "loginFormId",
            formElements: [
                this.loginInput,
                this.passwordInput,
                this.rememberMeCheckbox
            ]
        })
        // Объединяем в один компонент
        this.loginBlock = new LoginRegisterBlock({
            title: "Вход",
            form: this.form,
            mainActionTitle: "Авторизоваться",
            secondActionTitle: "Ещё не зарегистрированы?",
        })
        // Определяем состояние кнопки по валидности формы
        this._setLoginButtonValidity(this.form.isValid)
        // Создаем хедер
        this.header = new Header()
        // Вставляем в элемент
        this.element.appendChild(this.header.element)
        this.element.appendChild(this.loginBlock.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.mainButton.element, 'click')
                        .subscribe(() => {
                            if(this.form.isValid) {
                                let values = []
                                for(let formElement of this.form.formElements) {
                                    values.push({name: formElement.name, value: formElement.value})
                                }
                                console.log(values)
                                goToMainPage()
                            }
                        })   
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.secondButton.element, 'click')
                        .subscribe(() => goToRegisterPage())   
        )
        this._onMountSubscriptions.push(
            this.form.onValidityChange.subscribe(
                (isValid: boolean) => this._setLoginButtonValidity(isValid)
            )  
        )
    }

    _setLoginButtonValidity(isValid: boolean) {
        isValid ? this.loginBlock.mainButton.setEnabled() :
                    this.loginBlock.mainButton.setDisabled()
    }

}