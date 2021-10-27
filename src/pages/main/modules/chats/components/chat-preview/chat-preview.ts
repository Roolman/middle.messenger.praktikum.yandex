import { Component, ComponentProps } from "../../../../../../utils/classes/component"
import templ from "./chat-preview.tmpl"
import "./chat-preview.scss"
import { ChatData, ChatsService } from "../../../../../../services/state/chats.service"
import { Observable } from "../../../../../../utils/classes/observable"
import { Inject } from "../../../../../../utils/decorators/inject"

type ChatPreviewProps = ComponentProps & ChatData

export class ChatPreview extends Component {
    props: ChatPreviewProps

    @Inject(ChatsService)
    private _chatsService: ChatsService

    constructor(props: ChatPreviewProps) {
        super("li", props, templ)
    }

    setDefaultProps(props: ChatPreviewProps): ChatPreviewProps {
        return {
            ...props,
            componentClassName: "chats__chat-container"
        }
    }

    componentDidRender() {
        if(this.props.selected) {
            this.element.classList.add("chats__chat-selected")
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.element, "click")
                .subscribe(
                    () => {
                        this._chatsService.setChat(this.props.id)
                    },
                ),
        )
    }
}