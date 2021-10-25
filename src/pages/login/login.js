import Handlebars from "handlebars"

import './login.scss'
import templ, { form } from './login.tmpl'

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Checkbox } from "../../components/checkbox/index"
import { Header } from "../../components/header/index"

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
        this.header.setHandlers()
    }

    render() {
        // Создаем компоненты формы
        this.loginInput = new Input("loginInput", "login", "Логин", "text", "")
        Handlebars.registerPartial("loginInput", this.loginInput.content)
        this.passwordInput = new Input("passwordInput", "password", "Пароль", "password", "Неверно указан пароль")
        Handlebars.registerPartial("passwordInput", this.passwordInput.content)
        this.rememberMeCheckbox = new Checkbox("rememberMeCheckbox", "rememberMe", "Запомнить меня")
        Handlebars.registerPartial("rememberMeCheckbox", this.rememberMeCheckbox.content)
        // Создаем шаблон формы
        const formPartial = Handlebars.compile(form)({formId: this.formId})
        Handlebars.registerPartial(this.formId, formPartial)
        // Создаем хэдер
        this.header = new Header()
        Handlebars.registerPartial("header", this.header.content)
        // Объединяем в один компонент
        this.loginBlock = new LoginRegisterBlock(this.blockTitle, this.formId, this.loginButtonTitle, this.loginActionId, this.goToRegisterButtonTitle, this.goToRegisterActionId)
        Handlebars.registerPartial('loginBlock', this.loginBlock.content)
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}