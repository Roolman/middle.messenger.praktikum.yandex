
import { ComponentProps } from "../../../../../../types/components/component"
import { Component } from "../../../../../../utils/classes/component"

import tmpl from "./chat-name.tmpl"
import "./chat-name.scss"
import { Input } from "../../../../../../components/input"
import { REQUIRED_VALIDATOR } from "../../../../../../constants/validators"
import { Validators } from "../../../../../../utils/classes/validators"
import { Button } from "../../../../../../components/button"
import { Observable } from "../../../../../../utils/classes/observable"

type ChatNameProps = ComponentProps & {
    onNextButton: Function
}

export class ChatName extends Component {
    props: ChatNameProps

    titleInput: Input
    nextButton: Button

    constructor(props: ChatNameProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ChatNameProps): ChatNameProps {
        return {
            ...props,
            componentClassName: "modal-content",
            children: [
                {
                    name: "titleInput",
                    component: new Input({
                        name: "chatTitle",
                        title: "Название",
                        type: "text",
                        validators: new Validators([
                            REQUIRED_VALIDATOR
                        ]),
                        isValidationHidden: true,
                        styles: {
                            width: "100%"
                        }
                    })
                },
                {
                    name: "nextButton",
                    component: new Button({
                        title: "Далее",
                        styles: {
                            width: "100%"
                        },
                        attributes: {
                            disabled: ''
                        }
                    })
                }
            ]
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
        Observable
        .fromEvent(this.nextButton.element, 'click')
        .subscribe(
            (e: Event) => {
                e.preventDefault()

                this.props.onNextButton()
            }
        ))
        this._onMountSubscriptions.push(
        this.titleInput.onValueChange
        .subscribe(
            () => {
                const isValid = this.titleInput.isValid
                if(isValid) {
                    this.nextButton.setEnabled()
                }
                else {
                    this.nextButton.setDisabled()
                }
            }
        ))
    }

}