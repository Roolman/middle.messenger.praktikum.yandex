import "./message.scss"
import templ from "./message.tmpl"

import { MESSAGE_TYPE_CLASS } from "../../../../../../constants/message"
import { getDateHoursAndMinutes } from "../../../../../../utils/helpers/date.utils"
import { Component, ComponentProps } from "../../../../../../utils/classes/component"
import { MessageData } from "../../../../../../services/state/chats.service"

type MessageProps = MessageData & ComponentProps

export class Message extends Component {

    props: MessageProps

    constructor(props: MessageProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: MessageProps): MessageProps {
        return {
            ...props,
            componentClassName: "message",
            time: getDateHoursAndMinutes(props.time) as any, // TODO: Fix
        }
    }

    componentDidRender() {
        this._defineClass()
    }

    private _defineClass() {
        const messageTypeClass = MESSAGE_TYPE_CLASS[this.props.type]
        let sentByClass: string = ""
        if (this.props.sentByUser) {
            sentByClass = "message_sent-by-user"
        } 
        else {
            sentByClass = "message_sent-not-by-user"
        }
        this.element.classList.add(messageTypeClass)
        this.element.classList.add(sentByClass)
    }
}