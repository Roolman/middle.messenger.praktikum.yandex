import "./profile.scss"
import templ from "./profile.tmpl"

import { Input } from "../../components/input/index"
import { Button } from "../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { ChangeAvatar } from "./modules/change-avatar"
import { goToMainPage, goToLoginPage } from "../../services/core/navigation"
import { PROFILE_DATA } from "../../mock/profile"
import { Component, ComponentProps } from "../../utils/classes/component"
import { Form } from "../../components/form"
import {
    ProfileField,
    ProfileFieldValue,
    ProfileService,
} from "../../services/state/profile.service"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import { Validators } from "../../utils/classes/validators"
import {
    EMAIL_VALIDATOR, NAME_PATTERN_VALIDATOR, PASSWORD_MAX_LENGTH_VALIDATOR,
    PASSWORD_MIN_LENGTH_VALIDATOR, PASSWORD_PATTERN_VALIDATOR, PHONE_MAX_LENGTH_VALIDATOR,
    PHONE_MIN_LENGTH_VALIDATOR, PHONE_PATTERN_VALIDATOR, REQUIRED_VALIDATOR,
} from "../../constants/validators"

type ProfilePageProps = ComponentProps & {
    profileData: Array<ProfileField>
    profileIsEditable: boolean
    changePasswordFormIsShown: boolean
}

export class ProfilePage extends Component {
    props: ProfilePageProps

    // Кнопки
    returnButton: Button
    editDataButton: Button
    changePasswordButton: Button
    logoutButton: Button
    profileSaveButton: Button
    // Вернуться в профиль
    profileReturn: HTMLElement
    avatar: HTMLElement
    // Форма для данных
    profileEditForm: Form
    // Форма для пароля
    passwordForm: Form
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
            profileData: PROFILE_DATA,
            profileIsEditable: false,
            changePasswordFormIsShown: false,
            componentClassName: "profile",
            children: [
                {
                    name: "profileEditForm",
                    component: new Form({
                        children: [
                            {
                                name: "email",
                                component: new Input({
                                    name: "email",
                                    title: "Почта",
                                    type: "email",
                                    value: PROFILE_DATA.find((x) => x.name === "email")?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        EMAIL_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "first_name",
                                component: new Input({
                                    name: "first_name",
                                    title: "Имя",
                                    type: "text",
                                    value: PROFILE_DATA.find((x) => x.name === "first_name")?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        NAME_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "second_name",
                                component: new Input({
                                    name: "second_name",
                                    title: "Фамилия",
                                    type: "text",
                                    value: PROFILE_DATA.find(
                                        (x) => x.name === "second_name",
                                    )?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        NAME_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "dispalay_name",
                                component: new Input({
                                    name: "dispalay_name",
                                    title: "Имя в чате",
                                    type: "text",
                                    value: PROFILE_DATA.find(
                                        (x) => x.name === "dispalay_name",
                                    )?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        NAME_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "phone",
                                component: new Input({
                                    name: "phone",
                                    title: "Телефон",
                                    type: "text",
                                    value: PROFILE_DATA.find((x) => x.name === "phone")?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        PHONE_MIN_LENGTH_VALIDATOR,
                                        PHONE_MAX_LENGTH_VALIDATOR,
                                        PHONE_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                        ],
                        attributes: {
                            id: "profileEditFormId",
                        },
                    }),
                },
                {
                    name: "passwordForm",
                    component: new Form({
                        children: [
                            {
                                name: "oldPassword",
                                component: new Input({
                                    name: "oldPassword",
                                    title: "Старый пароль",
                                    type: "password",
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "newPassword",
                                component: new Input({
                                    name: "newPassword",
                                    title: "Новый пароль",
                                    type: "password",
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        PASSWORD_MIN_LENGTH_VALIDATOR,
                                        PASSWORD_MAX_LENGTH_VALIDATOR,
                                        PASSWORD_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                        ],
                        attributes: {
                            id: "passwordFormId",
                        },
                    }),
                },
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
                    name: "profileSaveButton",
                    component: new Button({
                        title: "Сохранить",
                        attributes: {
                            type: "submit",
                            form: "profileEditFormId",
                        },
                    }),
                },
            ],
        }
    }

    componentDidInit() {
        this._profileService.getProfile()
        this._subscriptions.push(this._profileService.profileObservable.subscribe(
            (profile: ProfileField[]) => {
                this.setProps({
                    profileData: profile,
                })
            },
        ))
    }

    componentDidMount() {
        // Перейти к чатам
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileReturn, "click")
                .subscribe(
                    () => goToMainPage(),
                ),
        )
        // Сохранить инфо по нажатию
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileSaveButton.element, "click")
                .subscribe(
                    () => {
                        const fieldValues: ProfileFieldValue[] = []
                        let form
                        if (!this.props.changePasswordFormIsShown) {
                            form = this.profileEditForm
                        } else {
                            form = this.passwordForm
                        }
                        const elements = form.formElements
                        for (const el of elements) {
                            fieldValues.push({
                                name: el.name,
                                value: el.value,
                            })
                        }
                        console.log(fieldValues)
                        // Меняем значения через сервис
                        this._profileService.setProfile(fieldValues)
                        // Переходим в режим просмотра
                        this.setProps({
                            changePasswordFormIsShown: false,
                            profileIsEditable: false,
                        })
                    },
                ),
        )
        // Валидация кнопки сохранения
        this._onMountSubscriptions.push(
            this.profileEditForm.onValidityChange.subscribe(
                (isValid: boolean) => {
                    this._setSaveButtonValidity(isValid)
                    console.log(isValid)
                },
            ),
        )
        // Кнопки
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.editDataButton.element, "click")
                .subscribe(() => {
                // Переходим в режим редактирования
                    this.setProps({
                        changePasswordFormIsShown: false,
                        profileIsEditable: true,
                    })
                }),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.changePasswordButton.element, "click")
                .subscribe(() => {
                    this.setProps({
                        changePasswordFormIsShown: true,
                        profileIsEditable: true,
                    })
                }),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.logoutButton.element, "click")
                .subscribe(() => goToLoginPage()),
        )
        // Аватар
        if (!this.props.profileIsEditable) {
            this._onMountSubscriptions.push(
                Observable
                    .fromEvent(this.avatar, "click")
                    .subscribe(() => this.сhangeAvatar.show()),
            )
        }
    }

    _setSaveButtonValidity(isValid: boolean) {
        if (isValid) {
            this.profileSaveButton.setEnabled()
        } else {
            this.profileSaveButton.setDisabled()
        }
    }
}