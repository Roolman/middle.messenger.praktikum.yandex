import "./confirm-modal.scss"
import templ from "./confirm-modal.tmpl"

import { Button } from "../../components/button/index"
import { Component } from "../../utils/classes/component"
import { ComponentProps } from "../../types/components/component"
import { Observable } from "../../utils/classes/observable"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"

type ConfirmModalProps = ComponentProps & {
    title?: string
    description?: string
    onConfirmTitle?: string
    onDeclineTitle?: string
    onConfirm: Function
    onDecline: Function
}

export class ConfirmModal extends Component {
    props: ConfirmModalProps
    confirmButton: Button
    declineButton: Button

    constructor(props: ConfirmModalProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: ConfirmModalProps): ConfirmModalProps {
        return {
            ...props,
            componentClassName: "modal-container",
            title: props.title || "Подтверждение",
            description: props.description || "Вы уверены?",
            children: [
                {
                    name: "confirmButton",
                    component: new Button({
                        title: props.onConfirmTitle || "Да",
                        type: BUTTON_TYPES.STROKED,
                        theme: BUTTON_THEMES.PRIMARY,
                        styles: {
                            width: "100px",
                        },
                    }),
                },
                {
                    name: "declineButton",
                    component: new Button({
                        title: props.onDeclineTitle || "Отмена",
                        type: BUTTON_TYPES.BASIC,
                        theme: BUTTON_THEMES.DANGER,
                        styles: {
                            width: "100px",
                        },
                    }),
                },
            ],
        }
    }

    componentDidInit() {
        this.hide()
        this._subscriptions.push(
            Observable
                .fromEvent(this.element, "click")
                .subscribe(
                    (e: Event) => {
                        const target = e.target as HTMLElement
                        if (target.classList.contains(this.props.componentClassName as string)) {
                            this.hide()
                        }
                    },
                ),
        )
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.confirmButton.element, "click")
                .subscribe(
                    () => {
                        this.props.onConfirm()
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.declineButton.element, "click")
                .subscribe(
                    () => {
                        this.props.onDecline()
                    },
                ),
        )
    }
}