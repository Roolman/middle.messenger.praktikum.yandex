import * as Handlebars from "handlebars"

import './chats.scss'
import templ from './Chats.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import {getShortChatDate} from "../../../../utils/helpers/date.utils"

import {CHATS} from "../../../../mock/chats"
import { Component } from "../../../../utils/classes/component"
import { goToProfilePage } from "../../../../services/navigation"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatsService } from "../../../../services/chats.service"

export class Chats extends Component {

    profileLink: HTMLElement
    addChatButton: Button

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div")
    }

    render() {
        console.log(this._chatsService)

        this.element.classList.add("chats")
        const template = Handlebars.compile(templ)
        // TODO: Fix AS
        const chatsViewData = CHATS.map(x => {
            return {...x, lastMessageTime: getShortChatDate(x.lastMessageTime as Date)}
        })
        const result = template({chats: chatsViewData})
        return result
    }

    insertComponents() {
        this.profileLink = this.element.getElementsByClassName("chats__profile-link")[0] as HTMLElement
        if(!this.profileLink || !this.profileLink.parentElement) {
            throw new Error("Ошибка рендеринга Chats")
        }
        this.addChatButton = new Button({
            type: BUTTON_TYPES.ROUND, 
            theme: BUTTON_THEMES.PRIMARY, 
            iconClass: "fa fa-plus"
        })
        this.profileLink.parentElement.insertBefore(this.addChatButton.element, this.profileLink)
    }

    componentDidMount() {
        this.profileLink.onclick = function (event: MouseEvent) {
            event.preventDefault()
            goToProfilePage()
        }
    }

}