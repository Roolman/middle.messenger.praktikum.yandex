import * as Handlebars from "handlebars"

import './register.scss'
import templ, { form } from './register.tmpl'

import { LoginRegisterBlock } from "../../components/Login-register-block/index"
import { Input } from "../../components/Input/index"
import { Header } from "../../components/Header/index"

import { goToLoginPage } from "../../services/navigation"

export class RegisterPage {

    // Основные надписи и параметры компонентов
    blockTitle = "Регистрация"
    registerButtonTitle ="Зарегистрироваться"
    registerActionId = "registerButton"
    goToLoginButtonTitle = "Войти"
    goToLoginActionId = "goToLoginButton"
    // Форма
    formId = "registerForm"
    // Компонент страницы
    registerBlock: LoginRegisterBlock
    // Компоненты формы
    emailInput: Input
    loginInput: Input
    firstNameInput: Input
    secondNameInput: Input
    phoneInput: Input
    passwordInput: Input
    passwordCheckInput: Input
    
    constructor() {

    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const registerPage = document.createElement("div")
        registerPage.id = "registerPage"
        registerPage.innerHTML = this.render()
        if(!root) {
            throw new Error("Не был получен корневой элемент!")
        }
        root.appendChild(registerPage)
        // Навешиваем обработичики
        const registerButton = document.getElementById(this.registerActionId)
        if(registerButton) registerButton.onclick = () => alert("Зареган!")
        const goToLoginButton = document.getElementById(this.goToLoginActionId)
        if(goToLoginButton) goToLoginButton.onclick = () => goToLoginPage()
    }

    render() {
        // Создаем компоненты формы
        this.emailInput = new Input("emailInput", "email", "Почта", "email", "Неверно указана почта")
        Handlebars.registerPartial("emailInput", this.emailInput.content)
        this.loginInput = new Input("loginInput", "login", "Логин", "text", "")
        Handlebars.registerPartial("loginInput", this.loginInput.content)
        this.firstNameInput = new Input("firstNameInput", "first_name", "Имя", "text", "")
        Handlebars.registerPartial("firstNameInput", this.firstNameInput.content)
        this.secondNameInput = new Input("secondNameInput", "second_name", "Фамилия", "text", "")
        Handlebars.registerPartial("secondNameInput", this.secondNameInput.content)
        this.phoneInput = new Input("phoneInput", "phone", "Телефон", "text", "Неверный формат номера")
        Handlebars.registerPartial("phoneInput", this.phoneInput.content)
        this.passwordInput = new Input("passwordInput", "password", "Пароль", "password", "Введите пароль")
        Handlebars.registerPartial("passwordInput", this.passwordInput.content)
        this.passwordCheckInput = new Input("passwordCheckInput", "password_check", "Пароль еще раз", "password", "Пароли не совпадают")
        Handlebars.registerPartial("passwordCheckInput", this.passwordCheckInput.content)
        // Создаем шаблон формы
        const formPartial = Handlebars.compile(form)({formId: this.formId})
        Handlebars.registerPartial(this.formId, formPartial)
        //
        const header = new Header()
        Handlebars.registerPartial("header", header.content)
        // Объединяем в один компонент
        this.registerBlock = new LoginRegisterBlock(this.blockTitle, this.formId, this.registerButtonTitle, this.registerActionId, this.goToLoginButtonTitle, this.goToLoginActionId)
        Handlebars.registerPartial('registerBlock', this.registerBlock.content)
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

}