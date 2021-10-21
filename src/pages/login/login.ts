import * as Handlebars from "handlebars"

import './login.scss'
import templ from './Login.tmpl'

import { LoginRegisterBlock } from "../../components/Login-register-block/index"
import { Input } from "../../components/Input/index"
import { Checkbox } from "../../components/Сheckbox/index"
import { Header } from "../../components/Header/index"

import { goToRegisterPage, goToMainPage } from "../../services/navigation"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/Form"
import { Observable } from "../../utils/classes/observable"

export class LoginPage extends Component {

    // Компоненты
    loginBlock: LoginRegisterBlock
    header: Header
    // Форма
    form: Form
    loginInput: Input
    passwordInput: Input
    rememberMeCheckbox: Checkbox

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
            errorMessage: ""
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            errorMessage: "Неверно указан пароль"
        })
        this.rememberMeCheckbox = new Checkbox({
            name: "rememberMe",
            label: "Запомнить меня"
        })
        this.form = new Form({
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