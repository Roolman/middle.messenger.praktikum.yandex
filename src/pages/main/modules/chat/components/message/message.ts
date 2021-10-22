import * as Handlebars from "handlebars"
import './Message.scss'
import templ from './Message.tmpl'

import { MESSAGE_TYPES } from "../../../../../../constants/message"
import {getDateHoursAndMinutes} from "../../../../../../utils/helpers/date.utils"
import { Component } from "../../../../../../utils/classes/component"

type MessageProps = {
    id: string,
    type: string,
    value: string,
    time: Date,
    sentByUser: boolean
}

export class Message extends Component {

    props: MessageProps

    constructor(props: MessageProps) {
        super("div", props)
    }

    render() {
        this._defineClass()
        const template = Handlebars.compile(templ)
        const result = template({
            ...this.props,
            time: getDateHoursAndMinutes(this.props.time),
        })
        return result
    }

    _defineClass() {
        this.element.classList.add("message")
        let typeClass: string = ''
        switch(this.props.type) {
            case MESSAGE_TYPES.TEXT:
                typeClass = "message_text"
                break
            case MESSAGE_TYPES.IMAGE:
                typeClass = "message_image"
                break
            default: 
                break
        }
        if(typeClass) {
            this.element.classList.add(typeClass)
        }
        let sentByClass: string = ''
        if(this.props.sentByUser) {
            sentByClass = "message_sent-by-user"
        }
        else {
            sentByClass = "message_sent-not-by-user"
        }
        this.element.classList.add(sentByClass)
    }

}