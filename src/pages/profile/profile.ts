import "./profile.scss"
import templ from "./profile.tmpl"

import { Button } from "../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { ChangeAvatar } from "../../modules/change-avatar"
import Router from "../../services/core/router"
import { Component } from "../../utils/classes/component"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import { PAGES } from "../../services/core/navigation"
import { ProfileView } from "./components/profile-view"
import { ProfileEdit } from "./components/profile-edit"
import { PasswordEdit } from "./components/password-edit"
import { ComponentProps } from "../../types/components/component"
import { UserService } from "../../services/state/user.service"
import { User } from "../../types/state/user"

type ProfilePageProps = ComponentProps & {
    profileIsEditable: boolean
    changePasswordFormIsShown: boolean
    user: User | null
}

export class ProfilePage extends Component {
    props: ProfilePageProps

    // Кнопки
    returnButton: Button
    // Вернуться в профиль
    profileReturn: HTMLElement
    // Модуль смены аватара
    сhangeAvatar: ChangeAvatar

    @Inject(UserService)
    private _userService: UserService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ProfilePageProps): ProfilePageProps {
        return {
            ...props,
            profileIsEditable: false,
            changePasswordFormIsShown: false,
            componentClassName: "settings",
            user: this._userService.user,
            children: [
                {
                    name: "сhangeAvatar",
                    component: new ChangeAvatar({
                        onApplyButton: (file: File) => {
                            // Обновить аватар
                            this._userService.updateProfileAvatar(file)
                            this.сhangeAvatar.hide()
                        },
                        applyButtonText: "Загрузить",
                        headerTitle: "Выберите аватар",
                        isModal: true,
                        isFileRequired: true,
                    }),
                },
                {
                    name: "returnButton",
                    component: new Button({
                        type: BUTTON_TYPES.ROUND,
                        theme: BUTTON_THEMES.PRIMARY,
                        iconClass: "fa fa-arrow-left",
                    }),
                },
                {
                    name: "profileView",
                    component: new ProfileView({
                        user: this._userService.user,
                        onEditDataButton: () => {
                            // Переходим в режим редактирования
                            this.setProps({
                                changePasswordFormIsShown: false,
                                profileIsEditable: true,
                            })
                        },
                        onChangePasswordButton: () => {
                            this.setProps({
                                changePasswordFormIsShown: true,
                                profileIsEditable: true,
                            })
                        },
                        onAvatar: () => {
                            this.сhangeAvatar.show()
                        },
                    }),
                },
                {
                    name: "profileEdit",
                    component: new ProfileEdit({
                        user: this._userService.user,
                        onSaveButton: () => {
                            // Переходим в режим просмотра
                            this.setProps({
                                changePasswordFormIsShown: false,
                                profileIsEditable: false,
                            })
                        },
                    }),
                },
                {
                    name: "passwordEdit",
                    component: new PasswordEdit({
                        onSaveButton: () => {
                            // Переходим в режим просмотра
                            this.setProps({
                                changePasswordFormIsShown: false,
                                profileIsEditable: false,
                            })
                        },
                    }),
                },
            ],
        }
    }

    componentDidMount() {
        // Перейти к чатам
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileReturn, "click")
                .subscribe(
                    () => Router.go(PAGES.MAIN),
                ),
        )
    }
}