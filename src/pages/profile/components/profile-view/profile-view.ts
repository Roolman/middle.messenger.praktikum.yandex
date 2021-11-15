import { Button } from "../../../../components/button";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button";
import { Component } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./profile-view.tmpl"
import "./profile-view.scss"
import { UserService } from "../../../../services/state/user.service";
import { ComponentProps } from "../../../../types/components/component";
import { User } from "../../../../types/state/user";

type ProfilewViewProps = ComponentProps & {
    user: User |  null
    onEditDataButton: Function
    onChangePasswordButton: Function
    onAvatar: Function
}

export class ProfileView extends Component {
    props: ProfilewViewProps

    editDataButton: Button
    changePasswordButton: Button
    logoutButton: Button
    avatar: HTMLElement

    @Inject(UserService)
    private _userService: UserService

    constructor(props: ProfilewViewProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ProfilewViewProps): ProfilewViewProps {
        return {
            ...props,
            componentClassName: "settings__main",
            children: [
                {
                    name: "editDataButton",
                    component: new Button({
                        title: "Изменить данные",
                        type: BUTTON_TYPES.LINK,
                    }),
                },
                {
                    name: "changePasswordButton",
                    component: new Button({
                        title: "Изменить пароль",
                        type: BUTTON_TYPES.LINK,
                    }),
                },
                {
                    name: "logoutButton",
                    component: new Button({
                        title: "Выйти",
                        type: BUTTON_TYPES.LINK,
                        theme: BUTTON_THEMES.DANGER,
                    }),
                },
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._userService.userObservable.subscribe(
            (user: User) => {
                this.setProps({
                    user
                })
            },
        ))
    }

    componentDidMount() {
        // Кнопки
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.editDataButton.element, "click")
            .subscribe(() => this.props.onEditDataButton()),
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.changePasswordButton.element, "click")
            .subscribe(() => this.props.onChangePasswordButton()),
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.logoutButton.element, "click")
            .subscribe(() => {
                this._userService.logOut()
            }),
        )
        // Аватар
        if(this.avatar) {
            this._onMountSubscriptions.push(
                Observable
                .fromEvent(this.avatar, "click")
                .subscribe(() => this.props.onAvatar()),
            )
        }
    }
}