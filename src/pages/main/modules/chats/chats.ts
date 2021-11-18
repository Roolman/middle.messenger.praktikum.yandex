import "./chats.scss"
import templ from "./chats.tmpl"

import { Button } from "../../../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"

import { Component } from "../../../../utils/classes/component"
import Router from "../../../../services/core/router"
import { Inject } from "../../../../utils/decorators/inject"
import { ChatData, ChatsService } from "../../../../services/state/chats.service"
import { Observable } from "../../../../utils/classes/observable"
import { ChatPreview } from "./components/chat-preview"
import { PAGES } from "../../../../services/core/navigation"
import { ComponentChild, ComponentProps } from "../../../../types/components/component"
import { RequestChatsParams } from "../../../../api/chats.api"
import { SearchInput } from "./components/search-input"
import { UserService } from "../../../../services/state/user.service"
import { User } from "../../../../types/state/user"

type ChatsProps = ComponentProps & {
    chats?: ComponentChild<ChatPreview>[]
    onAddChatButton: Function
}

export class Chats extends Component {
    props: ChatsProps

    profileLink: HTMLElement
    chatsContainer: HTMLElement

    searchInput: SearchInput
    isInputFocused: boolean

    addChatButton: Button

    @Inject(ChatsService)
    private _chatsService: ChatsService

    @Inject(UserService)
    private _userService: UserService

    constructor(props: ChatsProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: ChatsProps): ChatsProps {
        const chatsChildComponents = this._getChatsPreviewComponents(this._chatsService.chats)
        return {
            ...props,
            componentClassName: "chats",
            chats: chatsChildComponents,
            children: [
                {
                    name: "addChatButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-plus fa-md",
                    }),
                },
                {
                    name: "searchInput",
                    component: new SearchInput({}),
                },
                ...chatsChildComponents,
            ],
        }
    }

    componentDidInit() {
        this._subscriptions.push(this._chatsService.chatsObservable.subscribe(
            (chats: ChatData[]) => {
                this.setProps({ chats: this._getChatsPreviewComponents(chats) })
            },
        ))
        this._subscriptions.push(
            this
                ._userService
                .userObservable
                .subscribe(
                    (x: User) => {
                        if (x) {
                            this._chatsService.getChats()
                        }
                    },
                ),
        )
    }

    componentDidRender() {
        if (this.isInputFocused) {
            this.searchInput.input.focus()
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.profileLink, "click")
                .subscribe(
                    (event: MouseEvent) => {
                        event.preventDefault()
                        Router.go(PAGES.PROFILE)
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.addChatButton.element, "click")
                .subscribe(
                    (event: MouseEvent) => {
                        event.preventDefault()
                        this.props.onAddChatButton()
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.searchInput.input, "input")
                .throttle(500)
                .subscribe(
                    () => {
                        const request: RequestChatsParams = {
                            title: this.searchInput.input.value,
                        }
                        this._chatsService.getChats(request)
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.searchInput.input, "focus")
                .subscribe(
                    () => {
                        this.isInputFocused = true
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.searchInput.input, "blur")
                .subscribe(
                    () => {
                        this.isInputFocused = false
                    },
                ),
        )
    }

    private _getChatsPreviewComponents(chats: ChatData[]): ComponentChild<ChatPreview>[] {
        const chatsPreviewComponents: ComponentChild<ChatPreview>[] = chats.map((x, i) => ({
            name: `chatsPreviewComponent__${i}`,
            component: new ChatPreview(x),
        }))
        // Обновляем children компонента для ререндера
        if (this.props?.children) {
            this.props.children = this.props.children.filter(
                (x) => !x.name.includes("chatsPreviewComponent"),
            )
            this.props.children.push(...chatsPreviewComponents)
        }
        return chatsPreviewComponents
    }
}