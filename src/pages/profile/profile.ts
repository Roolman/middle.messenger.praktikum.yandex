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
    profileActions: HTMLElement
    profileMainInfo: HTMLElement
    avatar: HTMLElement
    // Форма для данных
    profileEditForm: Form
    profileEmail: Input
    profileFirstName: Input
    profileSecondName: Input
    profileDisplayName: Input
    profilePhone: Input
    // Форма для пароля
    passwordForm: Form
    passwordOld: Input
    passwordNew: Input
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

    componentDidRender() {
        // Форма профиля
        this.profileEmail = new Input({
            name: "email",
            title: "Почта",
            type: "email",
            value: this.props.profileData.find((x) => x.name === "email")?.value,
            validators: new Validators([
                REQUIRED_VALIDATOR,
                EMAIL_VALIDATOR,
            ]),
        })
        this.profileFirstName = new Input({
            name: "first_name",
            title: "Имя",
            type: "text",
            value: this.props.profileData.find((x) => x.name === "first_name")?.value,
            validators: new Validators([
                REQUIRED_VALIDATOR,
                NAME_PATTERN_VALIDATOR,
            ]),
        })
        this.profileSecondName = new Input({
            name: "second_name",
            title: "Фамилия",
            type: "text",
            value: this.props.profileData.find((x) => x.name === "second_name")?.value,
            validators: new Validators([
                REQUIRED_VALIDATOR,
                NAME_PATTERN_VALIDATOR,
            ]),
        })
        this.profileDisplayName = new Input({
            name: "dispalay_name",
            title: "Имя в чате",
            type: "text",
            value: this.props.profileData.find((x) => x.name === "dispalay_name")?.value,
            validators: new Validators([
                REQUIRED_VALIDATOR,
                NAME_PATTERN_VALIDATOR,
            ]),
        })
        this.profilePhone = new Input({
            name: "phone",
            title: "Телефон",
            type: "text",
            value: this.props.profileData.find((x) => x.name === "phone")?.value,
            validators: new Validators([
                REQUIRED_VALIDATOR,
                PHONE_MIN_LENGTH_VALIDATOR,
                PHONE_MAX_LENGTH_VALIDATOR,
                PHONE_PATTERN_VALIDATOR,
            ]),
        })
        this.profileEditForm = new Form({
            formElements: [
                this.profileEmail,
                this.profileFirstName,
                this.profileSecondName,
                this.profileDisplayName,
                this.profilePhone,
            ],
            attributes: {
                id: "profileEditFormId",
            },
        })
        // Форма пароля
        this.passwordOld = new Input({
            name: "oldPassword",
            title: "Старый пароль",
            type: "password",
            validators: new Validators([
                REQUIRED_VALIDATOR,
            ]),
        })
        this.passwordNew = new Input({
            name: "newPassword",
            title: "Новый пароль",
            type: "password",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                PASSWORD_MIN_LENGTH_VALIDATOR,
                PASSWORD_MAX_LENGTH_VALIDATOR,
                PASSWORD_PATTERN_VALIDATOR,
            ]),
        })
        this.passwordForm = new Form({
            formElements: [
                this.passwordOld,
                this.passwordNew,
            ],
            attributes: {
                id: "passwordFormId",
            },
        })
        // Смена аватара
        this.сhangeAvatar = new ChangeAvatar()
        // Кнопочки
        this.returnButton = new Button({
            type: BUTTON_TYPES.ROUND,
            theme: BUTTON_THEMES.PRIMARY,
            iconClass: "fa fa-arrow-left",
        })
        this.editDataButton = new Button({
            title: "Изменить данные",
            type: BUTTON_TYPES.LINK,
        })
        this.changePasswordButton = new Button({
            title: "Изменить пароль",
            type: BUTTON_TYPES.LINK,
        })
        this.logoutButton = new Button({
            title: "Выйти",
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER,
        })
        this.profileSaveButton = new Button({
            title: "Сохранить",
            attributes: {
                type: "submit",
                form: this.profileEditForm.props.id,
            },
        })

        // Вставляем в DOM

        // Кнопка вернуться к чатам
        this.profileReturn.appendChild(this.returnButton.element)
        // Дествия с профилем
        if (this.props.profileIsEditable) {
            this.profileActions.appendChild(this.profileSaveButton.element)
        } else {
            this.profileActions.appendChild(this.editDataButton.element)
            this.profileActions.appendChild(this.changePasswordButton.element)
            this.profileActions.appendChild(this.logoutButton.element)
        }
        // Форма
        if (this.props.profileIsEditable) {
            if (this.props.changePasswordFormIsShown) {
                this.profileMainInfo.appendChild(this.passwordForm.element)
            } else {
                this.profileMainInfo.appendChild(this.profileEditForm.element)
            }
        }

        // Смена аватара
        this.element.appendChild(this.сhangeAvatar.element)
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
                        if (!this.props.changePasswordFormIsShown) {
                            const elements = this.profileEditForm.formElements
                            for (const el of elements) {
                                fieldValues.push({
                                    name: el.name,
                                    value: el.value,
                                })
                            }
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
                (isValid: boolean) => this._setSaveButtonValidity(isValid),
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