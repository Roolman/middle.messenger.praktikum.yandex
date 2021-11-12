import "./main.scss"
import templ from "./main.tmpl"

import { Chats } from "./modules/chats/chats"
import { Chat } from "./modules/chat/chat"
import { Component } from "../../utils/classes/component"
import { ComponentProps } from "../../types/components/component"
import { CreateChat } from "./modules/create-chat"

export class MainPage extends Component {
    chats: Chats
    chat: Chat
    createChat: CreateChat

    constructor() {
        super("main", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "main",
            children: [
                {
                    name: "chats",
                    component: new Chats({
                        onAddChatButton: () => {
                            this.createChat.show()
                        }
                    }),
                },
                {
                    name: "chat",
                    component: new Chat(),
                },
                {
                    name: "createChat",
                    component: new CreateChat({})
                },
            ],
        }
    }
}