import Handlebars from "handlebars"

import './chats.scss'
import templ from './chats.tmpl'

export class Chats {

    template

    constructor() {
        this.init()
    }

    init() {
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template()
        return result
    }

}