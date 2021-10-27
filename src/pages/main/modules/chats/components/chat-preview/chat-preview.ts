import * as Handlebars from "handlebars"

import { Component } from "../../../../../../utils/classes/component"
import templ from "./chat-preview.tmpl"
import "./chat-preview.scss"
import { ChatData, ChatsService } from "../../../../../../services/state/chats.service"
import { Observable } from "../../../../../../utils/classes/observable"
import { Inject } from "../../../../../../utils/decorators/inject"

export class ChatPreview extends Component {
    props: ChatData

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ChatData) {
        super("li", props)
    }

    render() {
        this.element.classList.add("chats__chat-container")
        const template = Handlebars.compile(templ)
        const result = template(this.props)
        return result
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.element, "click")
                .subscribe(
                    () => {
                        this._chatsService.setChat(this.props as ChatData)
                    },
                ),
        )
    }

    setSelected() {
        this.element.classList.add("chats__chat-selected")
    }

    resetSelected() {
        this.element.classList.remove("chats__chat-selected")
    }
}