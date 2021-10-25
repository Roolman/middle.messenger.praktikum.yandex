import * as Handlebars from "handlebars"

import './Chats.scss'
import templ from './Chats.tmpl'

import {Button} from "../../../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import { Component } from "../../../../utils/classes/component"
import { goToProfilePage } from "../../../../services/core/navigation"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { Observable } from "../../../../utils/classes/observable"
import { ChatPreview } from "./components"

type ChatsProps = {
    chats: ChatData[]
}

export class Chats extends Component {

    props: ChatsProps

    profileLink: HTMLElement
    chatsContainer: HTMLElement
    addChatButton: Button

    private _chatsPreview: ChatPreview[]

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div")
    }

    setDefaultProps(props: ChatsProps): ChatsProps {
        return {
            ...props,
            chats: []
        }
    }

    componentDidInit() {
        this._chatsPreview = []
        this._subscriptions.push(this._chatsService.chatsObservable.subscribe(
            (chats: ChatData[]) => {
                this.setProps({ chats })
            }
        ))
        this._chatsService.getChats()
    }

    componentDidUpdate() {
        this._chatsPreview = []
        return true
    }

    render() {
        this.element.classList.add("chats")
        const template = Handlebars.compile(templ)
        const result = template(this.props)
        return result
    }

    componentDidRender() {
        // Добавляем кнопку добавить чат
        this.profileLink = this.element.getElementsByClassName("chats__profile-link")[0] as HTMLElement
        this.chatsContainer = this.element.getElementsByClassName("chats__chats-list")[0] as HTMLElement
        if(!this.profileLink || !this.profileLink.parentElement || !this.chatsContainer) {
            throw new Error("Ошибка рендеринга Chats")
        }
        this.addChatButton = new Button({
            type: BUTTON_TYPES.ROUND, 
            theme: BUTTON_THEMES.PRIMARY, 
            iconClass: "fa fa-plus"
        })
        this.profileLink.parentElement.insertBefore(this.addChatButton.element, this.profileLink)
        // Добавляем список чатов
        for(let chat of this.props.chats) {
            const chatPreview = new ChatPreview(chat)
            this._chatsPreview.push(chatPreview)
            this.chatsContainer.appendChild(chatPreview.element)
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(Observable.fromEvent(this.profileLink, "click").subscribe(
            (event: MouseEvent) => {
                event.preventDefault()
                goToProfilePage()
            }
        ))

        // Селект/деселект чата
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.chatsContainer, "click")
            .subscribe(
                (event: MouseEvent) => {
                    const target = event.target as Node | null
                    if(!target) return
                    for(let chatPreview of this._chatsPreview) {
                        if(chatPreview.element.contains(target)) {
                            chatPreview.setSelected()
                        }
                        else {
                            chatPreview.resetSelected()
                        }
                    }
                }
        ))
    }

}