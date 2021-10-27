import "./chats.scss"
import templ from "./chats.tmpl"

import { Button } from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import { Component, ComponentProps } from "../../../../utils/classes/component"
import { goToProfilePage } from "../../../../services/core/navigation"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { Observable } from "../../../../utils/classes/observable"
import { ChatPreview } from "./components/chat-preview"

type ChatsProps = ComponentProps & {
    chats: ChatData[]
}

export class Chats extends Component {
    props: ChatsProps

    chatsActions: HTMLElement
    profileLink: HTMLElement
    chatsContainer: HTMLElement
    addChatButton: Button

    private _chatsPreview: ChatPreview[]

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ChatsProps): ChatsProps {
        return {
            ...props,
            componentClassName: "chats",
            chats: [],
        }
    }

    componentDidInit() {
        this._chatsPreview = []
        this._subscriptions.push(this._chatsService.chatsObservable.subscribe(
            (chats: ChatData[]) => {
                this.setProps({ chats })
            },
        ))
        this._chatsService.getChats()
    }

    componentDidUpdate() {
        this._chatsPreview = []
        return true
    }

    componentDidRender() {
        // Добавляем кнопку добавить чат
        this.addChatButton = new Button({
            type: BUTTON_TYPES.ROUND,
            theme: BUTTON_THEMES.PRIMARY,
            iconClass: "fa fa-plus",
        })
        this.chatsActions.insertBefore(this.addChatButton.element, this.profileLink)
        // Добавляем список чатов
        for (const chat of this.props.chats) {
            const chatPreview = new ChatPreview(chat)
            this._chatsPreview.push(chatPreview)
            this.chatsContainer.appendChild(chatPreview.element)
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.profileLink, "click")
                .subscribe(
                    (event: MouseEvent) => {
                        event.preventDefault()
                        goToProfilePage()
                    },
                ),
        )
    }
}