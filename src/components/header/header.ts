import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { goToError404Page, goToError500Page } from "../../services/core/navigation"
import { Component, ComponentProps } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { Button } from "../button"
import "./header.scss"
import templ from "./header.tmpl"

export class Header extends Component {
    linksBlock: HTMLDivElement
    goToError404: Button
    goToError500: Button

    constructor() {
        super("header", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            title: "Fast messenger",
            componentClassName: "header"
        }
    }

    componentDidRender() {
        this.goToError404 = new Button({
            title: "Ошибка 404",
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER,
        })
        this.goToError500 = new Button({
            title: "Ошибка 500",
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER,
        })
        this.linksBlock.appendChild(this.goToError404.element)
        this.linksBlock.appendChild(this.goToError500.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.goToError404.element, "click")
                .subscribe(goToError404Page)
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.goToError500.element, "click")
                .subscribe(goToError500Page)
        )
    }
}