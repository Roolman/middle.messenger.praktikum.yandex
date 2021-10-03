import Handlebars from "handlebars"

import './register.scss'
import templ, { form } from './register.tmpl'

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"

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
    registerBlock
    // Компоненты формы
    emailInput
    loginInput
    firstNameInput
    secondNameInput
    phoneInput
    passwordInput
    passwordCheckInput
    
    constructor() {

    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const registerPage = document.createElement("div")
        registerPage.id = "registerPage"
        registerPage.innerHTML = this.render()
        root.appendChild(registerPage)
        // Навешиваем обработичики
        const registerButton = document.getElementById(this.registerActionId)
        registerButton.onclick = () => alert("Зареган!")
        const goToLoginButton = document.getElementById(this.goToLoginActionId)
        goToLoginButton.onclick = () => goToLoginPage()
    }

    render() {
        // Создаем компоненты формы
        this.emailInput = new Input("emailInput", "email", "Почта", "text", "Неверно указана почта")
        Handlebars.registerPartial("emailInput", this.emailInput.template)
        this.loginInput = new Input("loginInput", "login", "Логин", "text", "")
        Handlebars.registerPartial("loginInput", this.loginInput.template)
        this.firstNameInput = new Input("firstNameInput", "first_name", "Имя", "text", "")
        Handlebars.registerPartial("firstNameInput", this.firstNameInput.template)
        this.secondNameInput = new Input("secondNameInput", "second_name", "Фамилия", "text", "")
        Handlebars.registerPartial("secondNameInput", this.secondNameInput.template)
        this.phoneInput = new Input("phoneInput", "phone", "Телефон", "text", "Неверный формат номера")
        Handlebars.registerPartial("phoneInput", this.phoneInput.template)
        this.passwordInput = new Input("passwordInput", "password", "Пароль", "password", "Введите пароль")
        Handlebars.registerPartial("passwordInput", this.passwordInput.template)
        this.passwordCheckInput = new Input("passwordCheckInput", "password_check", "Пароль еще раз", "password", "Пароли не совпадают")
        Handlebars.registerPartial("passwordCheckInput", this.passwordCheckInput.template)
        // Создаем шаблон формы
        const formPartial = Handlebars.compile(form)({formId: this.formId})
        Handlebars.registerPartial(this.formId, formPartial)
        // Объединяем в один компонент
        this.registerBlock = new LoginRegisterBlock(this.blockTitle, this.formId, this.registerButtonTitle, this.registerActionId, this.goToLoginButtonTitle, this.goToLoginActionId)
        Handlebars.registerPartial('registerBlock', this.registerBlock.template)
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}