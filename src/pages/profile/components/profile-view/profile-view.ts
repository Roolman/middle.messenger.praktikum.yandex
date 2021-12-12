import { Button } from "../../../../components/button"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { Component } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"
import { Inject } from "../../../../utils/decorators/inject"

import tmpl from "./profile-view.tmpl"
import "./profile-view.scss"
import { UserService } from "../../../../services/state/user.service"
import { ComponentProps } from "../../../../types/components/component"
import { User } from "../../../../types/state/user"
import { ChatsService } from "../../../../services/state/chats.service"
import { Image } from "../../../../components/image"
import { DEFAULT_USER_AVATAR } from "../../../../constants/files"

type ProfilewViewProps = ComponentProps & {
    user: User | null
    onEditDataButton: Function
    onChangePasswordButton: Function
    onAvatar: Function
}

export class ProfileView extends Component {
    props: ProfilewViewProps

    editDataButton: Button
    changePasswordButton: Button
    logoutButton: Button
    avatar: Image

    avatarContainer: HTMLElement

    @Inject(UserService)
    private _userService: UserService

    @Inject(ChatsService)
    private _chatsService: ChatsService

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
                {
                    name: "avatar",
                    component: new Image({
                        class: "settings__main-avatar",
                        attributes: {
                            src: props.user?.avatar || DEFAULT_USER_AVATAR,
                        },
                    }),
                },
            ],
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._userService.userObservable.subscribe(
                (user: User) => {
                    this.setProps({
                        user,
                    })
                    this.avatar.setProps({
                        attributes: {
                            src: user?.avatar || DEFAULT_USER_AVATAR,
                        },
                    })
                },
            ),
        )
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
                    this._chatsService.destroy()
                }),
        )
        // Аватар
        if (this.avatarContainer) {
            this._onMountSubscriptions.push(
                Observable
                    .fromEvent(this.avatarContainer, "click")
                    .subscribe(() => this.props.onAvatar()),
            )
        }
    }
}