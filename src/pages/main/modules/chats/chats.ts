import "./chats.scss"
import templ from "./chats.tmpl"

import { Button } from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import { Component, ComponentChild, ComponentProps } from "../../../../utils/classes/component"
import { goToProfilePage } from "../../../../services/core/navigation"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { Observable } from "../../../../utils/classes/observable"
import { ChatPreview } from "./components/chat-preview"

type ChatsProps = ComponentProps & {
    chats: ComponentChild[]
}

export class Chats extends Component {
    props: ChatsProps

    profileLink: HTMLElement
    chatsContainer: HTMLElement
    addChatButton: Button

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
            children: [
                {
                    name: "addChatButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-plus",
                    })
                }
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(this._chatsService.chatsObservable.subscribe(
            (chats: ChatData[]) => {
                this.setProps({ chats: this._getChatsPreviewComponents(chats) })
            },
        ))
        this._chatsService.getChats()
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

    private _getChatsPreviewComponents(chats: ChatData[]): ComponentChild[] {
        const chatsPreviewComponents = chats.map((x, i) => {
            return {
                name: `chatsPreviewComponent__${i}`,
                component: new ChatPreview(x)
            }
        })
        // Обновляем children компонента для ререндера
        if(this.props.children) {
            this.props.children = this.props.children.filter(x => !x.name.includes("chatsPreviewComponent"))
            this.props.children.push(...chatsPreviewComponents)
        }
        return chatsPreviewComponents
    }
}