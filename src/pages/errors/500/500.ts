import "./500.scss"
import templ from "./500.tmpl"
import { Button } from "../../../components/button"
import { BUTTON_TYPES } from "../../../constants/button"
import Router from "../../../services/core/router"
import { Component } from "../../../utils/classes/component"
import { Observable } from "../../../utils/classes/observable"
import { PAGES } from "../../../services/core/navigation"
import { ComponentProps } from "../../../types/components/component"

export class Error500Page extends Component {
    goToMainButton: Button

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "error500",
            children: [
                {
                    name: "goToMainButton",
                    component: new Button({
                        title: "Назад к чатам",
                        type: BUTTON_TYPES.LINK,
                    })
                }
            ]
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.goToMainButton.element, "click")
                .subscribe(() => Router.go(PAGES.MAIN)),
        )
    }
}