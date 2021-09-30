import Handlebars from "handlebars"
import './header.scss'
import templ from './header.tmpl'

export class Header {

    title = 'Fast messenger'

    constructor(){

    }

    init() {
        return this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({title: this.title})
        return result
    }

}