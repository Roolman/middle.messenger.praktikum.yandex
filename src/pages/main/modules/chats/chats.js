import Handlebars from "handlebars"

import './chats.scss'
import templ from './chats.tmpl'

import {Button} from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import {getShortChatDate} from "../../../../utils/date.utils"

import {CHATS} from "../../../../mock/chats"

export class Chats {

    content
    //
    addChatButton

    constructor() {
        this.init()
    }

    init() {
        this.content = this.render()
    }

    render() {
        this.addChatButton = new Button("addChatButton", "", BUTTON_TYPES.ROUND, BUTTON_THEMES.PRIMARY, "fa fa-plus")
        Handlebars.registerPartial("addChatButton", this.addChatButton.content)
        const template = Handlebars.compile(templ)
        const chatsViewData = CHATS.map(x => {
            return {...x, lastMessageTime: getShortChatDate(x.lastMessageTime)}
        })
        const result = template({chats: chatsViewData})
        return result
    }

}