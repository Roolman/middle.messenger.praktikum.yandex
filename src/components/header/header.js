import Handlebars from "handlebars"
import './header.scss'
import templ from './header.tmpl'

export class Header {

    title = 'Fast messenger'
    template

    constructor() {
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({title: this.title})
        return result
    }

}