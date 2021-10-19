import '../node_modules/font-awesome/scss/font-awesome.scss'
import './styles/index.scss'
import * as Handlebars from "handlebars"

import { LoginPage } from './pages/login/index'

window.onload = () => {
    const loginPage = new LoginPage()
    const root = document.getElementById("root")
    if(!root) {
        throw new Error("Не был получен корневой элемент!")
    }
    root.appendChild(loginPage.element)
}

// Глобальный хэлпер
Handlebars.registerHelper('if_eq', function(a: unknown, b: unknown, opts: Handlebars.HelperOptions) {
    if (a === b) {
        return opts.fn(this)
    } else {
        return opts.inverse(this)
    }
})