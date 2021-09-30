import Handlebars from "handlebars"

import { Header } from "../../components/header/index"

import './login.scss'
import templ from './login.tmpl'

export class LoginPage {

    constructor() {

    }

    init() {
        const root = document.getElementById("root")
        const loginPage = document.createElement("div")
        loginPage.id = "loginPage"
        loginPage.innerHTML = this.render()
        root.appendChild(loginPage)
    }

    render() {
        const headerInstance = new Header()
        const headerTmpl = headerInstance.init()
        console.log(headerTmpl)
        const template = Handlebars.compile(`${headerTmpl} ${templ}`)
        const result = template({header: headerTmpl})
        return result
    }

}