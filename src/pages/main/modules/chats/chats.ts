import * as Handlebars from "handlebars"

import './chats.scss'
import templ from './chats.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import {getShortChatDate} from "../../../../utils/helpers/date.utils"

import {CHATS} from "../../../../mock/chats"

export class Chats {

    content: string
    //
    addChatButton: Button

    constructor() {
        this.init()
    }

    init() {
        this.content = this.render()
    }

    render() {
        this.addChatButton = new Button({
            title: '', 
            type: BUTTON_TYPES.ROUND, 
            theme: BUTTON_THEMES.PRIMARY, 
            iconClass: "fa fa-plus"
        })
        Handlebars.registerPartial("addChatButton", this.addChatButton.render())
        const template = Handlebars.compile(templ)
        // TODO: Fix AS
        const chatsViewData = CHATS.map(x => {
            return {...x, lastMessageTime: getShortChatDate(x.lastMessageTime as Date)}
        })
        const result = template({chats: chatsViewData})
        return result
    }

}