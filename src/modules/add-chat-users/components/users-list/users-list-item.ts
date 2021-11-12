import { Button } from "../../../../components/button"
import { BUTTON_TYPES } from "../../../../constants/button"
import { ComponentProps } from "../../../../types/components/component"
import { User } from "../../../../types/state/user"
import { Component } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"
import "./users-list-item.scss"
import tmpl from "./users-list-item.tmpl"

type UsersListItemProps = ComponentProps & {
    user: User
    onAddButtonFunc: Function
    disabled: boolean
}

export class UsersListItem extends Component {
    props: UsersListItemProps
    addUserButton: Button

    constructor(props?: UsersListItemProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: UsersListItemProps): UsersListItemProps {
        return {
            ...props,
            componentClassName: "add-chat__fetched-user",
            children: [
                {
                    name: "addUserButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        iconClass: "fa fa-plus",
                    })
                }
            ]
        }
    }

    componentDidRender() {
        if(this.props.disabled) {
            this.addUserButton.setDisabled()
        }
        else {
            this.addUserButton.setEnabled()
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.addUserButton.element, "click")
            .subscribe(
                (e: Event) => {
                    e.preventDefault()

                    this.props.onAddButtonFunc()
                    this.addUserButton.setDisabled()
                }
            )
        )
        
    }
}