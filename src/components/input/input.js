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

    constructor(id, name, title, type, errorMessage) {
        this.id = id
        this.name = name
        this.title = title
        this.type = type
        this.errorMessage = errorMessage
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({
            id: this.id,
            name: this.name,
            title: this.title,
            type: this.type,
            errorMessage: this.errorMessage
        })
        return result
    }

}