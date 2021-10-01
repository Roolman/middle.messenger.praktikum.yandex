import Handlebars from "handlebars"
import './login-register-block.scss'
import templ from './login-register-block.tmpl'

export class LoginRegisterBlock {

    template
    // Аргументы входные
    title
    form
    mainActionTitle
    mainAction
    secondActionTitle
    secondAction

    constructor(title, form, mainActionTitle, mainActionId, secondActionTitle, secondActionId) {
        this.title = title
        this.form = form
        this.mainActionTitle = mainActionTitle
        this.mainActionId = mainActionId
        this.secondActionId = secondActionId
        this.secondActionTitle = secondActionTitle
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ.replace('{{ form }}', this.form))
        const result = template({
            title: this.title,
            mainActionId: this.mainActionId,
            mainActionTitle: this.mainActionTitle,
            secondActionId: this.secondActionId,
            secondActionTitle: this.secondActionTitle
        })
        console.log(result)
        return result
    }

}