import * as Handlebars from "handlebars"

import './Register.scss'
import templ from './Register.tmpl'

import { LoginRegisterBlock } from "../../components/Login-register-block/index"
import { Input } from "../../components/Input/index"
import { Header } from "../../components/Header/index"

import { goToLoginPage } from "../../services/core/navigation"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/Form"
import { Observable } from "../../utils/classes/observable"

export class RegisterPage extends Component {

    registerBlock: LoginRegisterBlock
    // Форма
    form: Form
    emailInput: Input
    loginInput: Input
    firstNameInput: Input
    secondNameInput: Input
    phoneInput: Input
    passwordInput: Input
    passwordCheckInput: Input
    
    constructor() {
        super("div")
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
        // Создаем компоненты формы
        this.emailInput = new Input({
            name: "email",
            title: "Почта",
            type: "email",
            errorMessage: "Неверно указана почта"
        })
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            errorMessage: ""
        })
        this.firstNameInput = new Input({
            name: "first_name",
            title: "Имя",
            type: "text",
            errorMessage: ""
        })
        this.secondNameInput = new Input({
            name: "second_name",
            title: "Фамилия",
            type: "text",
            errorMessage: ""
        })
        this.phoneInput = new Input({
            name: "phone",
            title: "Телефон",
            type: "text",
            errorMessage: "Неверный формат номера"
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            errorMessage: "Введите пароль"
        })
        this.passwordCheckInput = new Input({
            name: "password_check",
            title: "Пароль еще раз",
            type: "password",
            errorMessage: "Пароли не совпадают"
        })
        // Форма
        this.form = new Form({
            formElements: [
                this.emailInput.element,
                this.loginInput.element,
                this.firstNameInput.element,
                this.secondNameInput.element,
                this.phoneInput.element,
                this.passwordInput.element,
                this.passwordCheckInput.element
            ]
        })
        const header = new Header()
        // Объединяем в один компонент
        this.registerBlock = new LoginRegisterBlock({
            title: "Регистрация",
            form: this.form,
            mainActionTitle: "Зарегистрироваться",
            secondActionTitle: "Войти",
        })
        // Вставляем в элемент
        this.element.appendChild(header.element)
        this.element.appendChild(this.registerBlock.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.mainButton.element, 'click')
                        .subscribe(() => alert("Зареган!"))   
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.secondButton.element, 'click')
                        .subscribe(() => goToLoginPage())   
        )
    }

}