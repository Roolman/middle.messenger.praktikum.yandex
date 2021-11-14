import { Component } from "../../../../utils/classes/component";

import tmpl from "./chat-user-item.tmpl"
import "./chat-user-item.scss"
import { ComponentProps } from "../../../../types/components/component";
import { User } from "../../../../types/state/user";
import { Observable } from "../../../../utils/classes/observable";

type ChatUserItemProps = ComponentProps & {
    user: User
    isChatCreator: boolean
    onUserDelete: Function
}

export class ChatUserItem extends Component {
    props: ChatUserItemProps
    deleteElement: HTMLElement

    constructor(props: ChatUserItemProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatUserItemProps): ChatUserItemProps {
        return {
            ...props,
            componentClassName: "chat__user-container",
            children: [
            ]
        }
    }

    componentDidInit() {
    }

    componentDidMount() {
        if(!this.props.isChatCreator) {
            this._onMountSubscriptions.push(
                Observable
                .fromEvent(this.deleteElement, "click")
                .subscribe(
                    () => {
                        this.props.onUserDelete()
                    }
                )
            )
        }
    }
}