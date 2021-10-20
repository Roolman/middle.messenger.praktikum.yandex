import * as Handlebars from "handlebars"

import './chats.scss'
import templ from './Chats.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import { Component } from "../../../../utils/classes/component"
import { goToProfilePage } from "../../../../services/navigation"
import { Inject } from "../../../../utils/decorators/inject"
import { Chat, ChatsService } from "../../../../services/chats.service"

type ChatsProps = {
    chats: Chat[]
}

export class Chats extends Component {

    props: ChatsProps

    profileLink: HTMLElement
    addChatButton: Button

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div")
    }

    componentDidInit() {
        this._chatsService.chatsObservable.subscribe(
            (chats: Chat[]) => {
                this.setProps({ chats })
            }
        )
        this._chatsService.getChats()
    }

    render() {
        this.element.classList.add("chats")
        const template = Handlebars.compile(templ)
        const result = template({...this.props})
        return result
    }

    componentDidRender() {
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