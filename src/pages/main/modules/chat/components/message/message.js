import Handlebars from "handlebars"
import './message.scss'
import templ from './message.tmpl'

import { MESSAGE_TYPES } from "../../../../../../constants"
import {getDateHoursAndMinutes} from "../../../../../../utils/date.utils"

export class Message {

    template
    type
    // Параметры template
    messageClass = ""
    id
    value
    time
    sentByUser

    constructor(id, type = MESSAGE_TYPES.TEXT, value, time, sentByUser) {
        this.id = id
        this.value = value
        this.type = type
        this.time = time
        this.sentByUser = sentByUser
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        this._defineClass()
        const result = template({
            id: this.id,
            type: this.type,
            value: this.value,
            time: getDateHoursAndMinutes(this.time),
            messageClass: this.messageClass
        })
        return result
    }

    _defineClass() {
        switch(this.type) {
            case MESSAGE_TYPES.TEXT:
                this.messageClass += "message_text"
                break
            case MESSAGE_TYPES.IMAGE:
                this.messageClass += "message_image"
                break
            default: 
                break
        }
        if(this.sentByUser) {
            this.messageClass += " message_sent-by-user"
        }
        else {
            this.messageClass += " message_sent-not-by-user"
        }
    }

}