import Handlebars from "handlebars"
import './input.scss'
import templ from './input.tmpl'

export class Input {

    template
    // Параметры
    id
    name
    title
    type
    errorMessage
    defaultValue

    constructor(id, name, title, type, errorMessage, defaultValue = "") {
        this.id = id
        this.name = name
        this.title = title
        this.type = type
        this.errorMessage = errorMessage
        this.defaultValue = defaultValue
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({
            id: this.id,
            name: this.name,
            title: this.title,
            type: this.type,
            errorMessage: this.errorMessage,
            defaultValue: this.defaultValue
        })
        return result
    }

}