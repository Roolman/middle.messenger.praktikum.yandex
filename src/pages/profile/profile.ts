import "./profile.scss"
import templ from "./profile.tmpl"

import { Button } from "../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { ChangeAvatar } from "../../modules/change-avatar"
import Router from "../../services/core/router"
import { PROFILE_DATA } from "../../mock/profile"
import { Component, ComponentProps } from "../../utils/classes/component"
import { ProfileService } from "../../services/state/profile.service"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import { PAGES } from "../../services/core/navigation"
import { ProfileView } from "./components/profile-view"
import { ProfileEdit } from "./components/profile-edit"
import { PasswordEdit } from "./components/password-edit"

type ProfilePageProps = ComponentProps & {
    profileIsEditable: boolean
    changePasswordFormIsShown: boolean
}

export class ProfilePage extends Component {
    props: ProfilePageProps

    // Кнопки
    returnButton: Button
    // Вернуться в профиль
    profileReturn: HTMLElement
    // Модуль смены аватара
    сhangeAvatar: ChangeAvatar

    @Inject(ProfileService)
    private _profileService: ProfileService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ProfilePageProps): ProfilePageProps {
        return {
            ...props,
            profileIsEditable: false,
            changePasswordFormIsShown: false,
            componentClassName: "settings",
            children: [
                {
                    name: "сhangeAvatar",
                    component: new ChangeAvatar(),
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
                        profileData: PROFILE_DATA,
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
                        }
                    })
                },
                {
                    name: "profileEdit",
                    component: new ProfileEdit({
                        profileData: PROFILE_DATA,
                        onSaveButton: () => {
                            // Переходим в режим просмотра
                            this.setProps({
                                changePasswordFormIsShown: false,
                                profileIsEditable: false,
                            })
                        }
                    })
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
                        }
                    })
                }
            ],
        }
    }

    componentDidInit() {
        this._profileService.getProfile()
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