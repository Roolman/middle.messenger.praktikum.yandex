import "./change-avatar.scss"
import templ from "./change-avatar.tmpl"

import { Button } from "../../../../components/button/index"
import { Component, ComponentProps } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"

export class ChangeAvatar extends Component {
    applyButton: Button
    block: HTMLElement

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "change-avatar"
        }
    }

    componentDidRender() {
        this.applyButton = new Button({ title: "Изменить" })
        this.block.appendChild(this.applyButton.element)
        this.hide()
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.applyButton.element, "click")
                .subscribe(() => this.hide()),
        )
    }
}