import Handlebars from "handlebars"

import './chat.scss'
import templ, {emptyChat, emptyChat} from './chat.tmpl'

export class Chat {

    template

    constructor() {
        this.init()
    }

    init() {
        Handlebars.registerPartial("emptyChat", emptyChat)
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({chatIsEmpty: true})
        return result
    }

}