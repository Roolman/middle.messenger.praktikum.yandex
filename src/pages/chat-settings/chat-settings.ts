import { Component } from "../../utils/classes/component";

import tmpl from "./chat-settings.tmpl"
import "./chat-settings.scss"

export class ChatSettings extends Component {

    constructor() {
        super("div", {}, tmpl)
    }

}