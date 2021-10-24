import * as Handlebars from "handlebars"

import './login.scss'
import templ from './Login.tmpl'

import { LoginRegisterBlock } from "../../components/Login-register-block/index"
import { Input } from "../../components/Input/index"
import { Checkbox } from "../../components/Сheckbox/index"
import { Header } from "../../components/Header/index"

import { goToRegisterPage, goToMainPage } from "../../services/core/navigation"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/Form"
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
        // Создаем форму
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 3,
                    error: "Не менее 3 символов"
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 20,
                    error: "Не более 20 символов"
                }
            ])
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password"
        })
        this.rememberMeCheckbox = new Checkbox({
            name: "rememberMe",
            label: "Запомнить меня"
        })
        this.form = new Form({
            id: "loginFormId",
            formElements: [
                this.loginInput.element,
                this.passwordInput.element,
                this.rememberMeCheckbox.element
            ]
        })
        // Объединяем в один компонент
        this.loginBlock = new LoginRegisterBlock({
            title: "Вход",
            form: this.form,
            mainActionTitle: "Авторизоваться",
            secondActionTitle: "Ещё не зарегистрированы?",
        })
        // Создаем хедер
        this.header = new Header()
        // Вставляем в элемент
        this.element.appendChild(this.header.element)
        this.element.appendChild(this.loginBlock.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.mainButton.element, 'click')
                        .subscribe(() => goToMainPage())   
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.secondButton.element, 'click')
                        .subscribe(() => goToRegisterPage())   
        )
    }

}