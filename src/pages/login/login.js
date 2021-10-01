import Handlebars from "handlebars"

import './login.scss'
import templ from './login.tmpl'

export class LoginPage {

    blockTitle = "Войти"
    loginButtonTitle ="Авторизоваться"
    loginActionId = "loginButton"
    goToRegisterButtonTitle = "Ещё не зарегистрировались?"
    goToRegisterActionId = "goToRegisterButton"

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
        loginButton.onclick = () => alert("Вошел!")
        const goToRegisterButton = document.getElementById(this.goToRegisterActionId)
        goToRegisterButton.onclick = () => alert("Перешел на зарегаться!")
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({
            blockTitle: this.blockTitle,
            loginActionId: this.loginActionId,
            loginButtonTitle: this.loginButtonTitle,
            goToRegisterActionId: this.goToRegisterActionId,
            goToRegisterButtonTitle: this.goToRegisterButtonTitle
        })
        return result
    }

}