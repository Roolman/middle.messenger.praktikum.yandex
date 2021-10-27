import * as Handlebars from "handlebars"

import './main.scss'
import templ from './main.tmpl'

import {Chats} from "./modules/chats/chats"
import {Chat} from "./modules/chat/chat"
import { Component } from "../../utils/classes/component"

export class MainPage extends Component {

    chats: Chats
    chat: Chat

    constructor() {
        super("main")
    }

    render() {
        this.element.classList.add("main")
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
        this.chats = new Chats()
        this.chat = new Chat()
        this.element.appendChild(this.chats.element)
        this.element.appendChild(this.chat.element)
    }

    componentDidUnmount() {
        
    }

}