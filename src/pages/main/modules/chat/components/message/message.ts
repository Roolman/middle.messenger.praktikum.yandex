import "./message.scss"
import templ from "./message.tmpl"

import { MESSAGE_TYPE_CLASS } from "../../../../../../constants/message"
import { getDateHoursAndMinutes } from "../../../../../../utils/helpers/date.utils"
import { Component } from "../../../../../../utils/classes/component"
import { ComponentProps } from "../../../../../../types/components/component"
import { Message } from "../../../../../../services/core/messenger"
import { Inject } from "../../../../../../utils/decorators/inject"
import { UserService } from "../../../../../../services/state/user.service"

type MessageViewProps = Message & ComponentProps

export class MessageView extends Component {
    props: MessageViewProps

    @Inject(UserService)
    private _userService: UserService

    constructor(props: MessageViewProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: MessageViewProps): MessageViewProps {
        return {
            ...props,
            componentClassName: "message",
            time: getDateHoursAndMinutes(new Date(props.time)) as any, // TODO: Fix
        }
    }

    componentDidRender() {
        this._defineClass()
    }

    private _defineClass() {
        const messageTypeClass = MESSAGE_TYPE_CLASS[this.props.type]
        let sentByClass: string = ""
        if (this.props.user_id === this._userService.user?.id) {
            sentByClass = "message_sent-by-user"
        } else {
            sentByClass = "message_sent-not-by-user"
        }
        this.element.classList.add(messageTypeClass)
        this.element.classList.add(sentByClass)
    }
}