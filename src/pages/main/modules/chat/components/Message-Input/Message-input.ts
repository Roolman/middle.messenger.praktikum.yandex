import { Component } from "../../../../../../utils/classes/component"
import "./Message-input.scss"

export class MessageInput extends Component {

    constructor() {
        super("input")
    }

    componentDidRender() {
        this.element.classList.add("chat__input-text")
        this.element.setAttribute("type", "text")
        this.element.setAttribute("id", "chatMessage")
        this.element.setAttribute("name", "chatMessage")
        this.element.setAttribute("placeholder", "Сообщение")
    }
}