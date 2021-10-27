import "./500.scss"
import templ from "./500.tmpl"
import { Button } from "../../../components/button"
import { BUTTON_TYPES } from "../../../constants/button"
import { goToMainPage } from "../../../services/core/navigation"
import { Component, ComponentProps } from "../../../utils/classes/component"
import { Observable } from "../../../utils/classes/observable"

export class Error500Page extends Component {
    goToMainButton: Button

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "error500",
        }
    }

    componentDidRender() {
        this.goToMainButton = new Button({
            title: "Назад к чатам",
            type: BUTTON_TYPES.LINK,
        })
        this.element.appendChild(this.goToMainButton.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.goToMainButton.element, "click")
                .subscribe(goToMainPage),
        )
    }
}