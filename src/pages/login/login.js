import Handlebars from "handlebars"

import './login.scss'
import templ, { form } from './login.tmpl'

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Checkbox } from "../../components/checkbox/index"

import { goToRegisterPage, goToMainPage } from "../../services/navigation"

export class LoginPage {

    // Основные надписи и параметры компонентов
    blockTitle = "Вход"
    loginButtonTitle ="Авторизоваться"
    loginActionId = "loginButton"
    goToRegisterButtonTitle = "Ещё не зарегистрированы?"
    goToRegisterActionId = "goToRegisterButton"
    // Форма
    formId = "loginForm"
    // Компонент логина (форма + кнопки)
    loginBlock
    // Компоненты формы
    loginInput
    passwordInput
    rememberMeCheckbox

    constructor() {

    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        const loginPage = document.createElement("div")
        loginPage.id = "loginPage"
        loginPage.innerHTML = this.render()
        root.appendChild(loginPage)
        // Навешиваем обработичики
        const loginButton = document.getElementById(this.loginActionId)
        loginButton.onclick = () => goToMainPage()
        const goToRegisterButton = document.getElementById(this.goToRegisterActionId)
        goToRegisterButton.onclick = () => goToRegisterPage()
    }

    render() {
        // Создаем компоненты формы
        this.loginInput = new Input("loginInput", "login", "Логин", "text", "")
        Handlebars.registerPartial("loginInput", this.loginInput.template)
        this.passwordInput = new Input("passwordInput", "password", "Пароль", "password", "Неверно указан пароль")
        Handlebars.registerPartial("passwordInput", this.passwordInput.template)
        this.rememberMeCheckbox = new Checkbox("rememberMeCheckbox", "rememberMe", "Запомнить меня")
        Handlebars.registerPartial("rememberMeCheckbox", this.rememberMeCheckbox.template)
        // Создаем шаблон формы
        const formPartial = Handlebars.compile(form)({formId: this.formId})
        Handlebars.registerPartial(this.formId, formPartial)
        // Объединяем в один компонент
        this.loginBlock = new LoginRegisterBlock(this.blockTitle, this.formId, this.loginButtonTitle, this.loginActionId, this.goToRegisterButtonTitle, this.goToRegisterActionId)
        Handlebars.registerPartial('loginBlock', this.loginBlock.template)
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}