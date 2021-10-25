import * as Handlebars from "handlebars"

import './Profile.scss'
import templ from './Profile.tmpl'

import {Input} from "../../components/Input/index"
import {Button} from "../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import {ChangeAvatar} from "./modules/change-avatar"

import {goToMainPage} from "../../services/core/navigation"
import {goToLoginPage} from "../../services/core/navigation"
import { PROFILE_DATA } from "../../mock/profile"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/Form"
import { ProfileField, ProfileFieldValue, ProfileService } from "../../services/state/profile.service"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"
import { Validators, VALIDITY_TYPES } from "../../utils/classes/validators"

type ProfilePageProps = {
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
        super("div", {})
    }

    setDefaultProps(props: ProfilePageProps): ProfilePageProps {
        return {
            ...props,
            profileData: PROFILE_DATA,
            profileIsEditable: false,
            changePasswordFormIsShown: false
        }
    }

    componentDidInit() {
        this._profileService.getProfile()
        this._subscriptions.push(this._profileService.profileObservable.subscribe(
            (profile: ProfileField[]) => {
                this.setProps({
                    profileData: profile
                })
            }
        ))
    }

    render() {
        this.element.classList.add("profile")
        const template = Handlebars.compile(templ)
        const result = template({ ...this.props })
        return result
    }

    componentDidRender() {
        // Форма профиля
        this.profileEmail = new Input({
            name: "email",
            title: "Почта",
            type: "email",
            value: this.props.profileData.find(x => x.name == "email")?.value,
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^.+@[A-Za-z]+\\.[A-za-z]+$',
                    error: 'Введите e-mail корректно'
                }
            ])
        })
        this.profileFirstName = new Input({
            name: "first_name",
            title: "Имя",
            type: "text",
            value: this.props.profileData.find(x => x.name == "first_name")?.value,
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$',
                    error: 'Латиница или кириллица. Допустим дефис. Первая буква заглавная'
                }
            ])
        })
        this.profileSecondName = new Input({
            name: "second_name",
            title: "Фамилия",
            type: "text",
            value: this.props.profileData.find(x => x.name == "second_name")?.value,
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$',
                    error: 'Латиница или кириллица. Допустим дефис. Первая буква заглавная'
                }
            ])
        })
        this.profileDisplayName = new Input({
            name: "dispalay_name",
            title: "Имя в чате",
            type: "text",
            value: this.props.profileData.find(x => x.name == "dispalay_name")?.value,
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$',
                    error: 'Латиница или кириллица. Допустим дефис. Первая буква заглавная'
                }
            ])
        })
        this.profilePhone = new Input({
            name: "phone",
            title: "Телефон",
            type: "text",
            value: this.props.profileData.find(x => x.name == "phone")?.value,
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 10,
                    error: "Не менее 10 символов"
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 15,
                    error: "Не более 15 символов"
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^\\+{0,1}[0-9]+$',
                    error: 'Только цифры. Может начинаться с +'
                }
            ])
        })
        this.profileEditForm = new Form({
            id: "profileEditFormId",
            formElements: [
                this.profileEmail,
                this.profileFirstName,
                this.profileSecondName,
                this.profileDisplayName,
                this.profilePhone
            ]
        })
        // Форма пароля
        this.passwordOld = new Input({
            name: "oldPassword", 
            title: "Старый пароль", 
            type: "password",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                }
            ])
        })
        this.passwordNew = new Input({
            name: "newPassword", 
            title: "Новый пароль", 
            type: "password",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: ''
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 8,
                    error: "Не менее 8 символов"
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 40,
                    error: "Не более 40 символов"
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: '^(?=.*[\\p{Lu}])(?=.*\\d).*$',
                    error: 'Обязательно хотя бы одна заглавная буква и цифра'
                }
            ])
        })
        this.passwordForm = new Form({
            id: "passwordFormId",
            formElements: [
                this.passwordOld,
                this.passwordNew
            ]
        })
        // Смена аватара
        this.сhangeAvatar = new ChangeAvatar()
        // Кнопочки
        this.returnButton = new Button({
            title: '',
            type: BUTTON_TYPES.ROUND,
            theme: BUTTON_THEMES.PRIMARY,
            iconClass:'fa fa-arrow-left'
        })
        this.editDataButton = new Button({
            title: "Изменить данные",
            type: BUTTON_TYPES.LINK
        })
        this.changePasswordButton = new Button({
            title: 'Изменить пароль',
            type: BUTTON_TYPES.LINK
        })
        this.logoutButton = new Button({
            title: 'Выйти',
            type: BUTTON_TYPES.LINK,
            theme: BUTTON_THEMES.DANGER
        })
        this.profileSaveButton = new Button({
            title: "Сохранить",
            attributes: {
                type: "submit",
                form: this.profileEditForm.props.id
            }
        })

        // Вставляем в DOM

        // Кнопка вернуться к чатам
        this.profileReturn = this.element.getElementsByClassName('profile__return')[0] as HTMLElement
        this.profileReturn.appendChild(this.returnButton.element)
        
        // Дествия с профилем
        const profileActions = this.element.getElementsByClassName('profile__main-actions')[0] as HTMLElement
        if(this.props.profileIsEditable) {
            profileActions.appendChild(this.profileSaveButton.element)
        }
        else {
            profileActions.appendChild(this.editDataButton.element)
            profileActions.appendChild(this.changePasswordButton.element)
            profileActions.appendChild(this.logoutButton.element)
        }

        // Форма
        const profileMainInfo = this.element.getElementsByClassName('profile__main-info')[0] as HTMLElement
        if(this.props.profileIsEditable) {
            if(this.props.changePasswordFormIsShown) {
                profileMainInfo.appendChild(this.passwordForm.element)
            }
            else {
                profileMainInfo.appendChild(this.profileEditForm.element)
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
                () => goToMainPage()
        ))
        // Сохранить инфо по нажатию
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.profileSaveButton.element, "click")
            .subscribe(
                () => {
                    const fieldValues: ProfileFieldValue[] = [] 
                    if(!this.props.changePasswordFormIsShown) {
                        const elements = this.profileEditForm.formElements
                        for(let el of elements) {
                            fieldValues.push({
                                name: el.name,
                                value: el.value
                            })
                        }
                    }
                    console.log(fieldValues)
                    // Меняем значения через сервис
                    this._profileService.setProfile(fieldValues)
                    // Переходим в режим просмотра
                    this.setProps({
                        changePasswordFormIsShown: false,
                        profileIsEditable: false
                    })
                }
        ))
        // Валидация кнопки сохранения
        this._onMountSubscriptions.push(
            this.profileEditForm.onValidityChange.subscribe(
                (isValid: boolean) => this._setSaveButtonValidity(isValid)
            )  
        )
        // Кнопки
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.editDataButton.element, "click")
            .subscribe(() => {
                // Переходим в режим редактирования
                this.setProps({
                    changePasswordFormIsShown: false,
                    profileIsEditable: true
                })
            })
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.changePasswordButton.element, "click")
            .subscribe(() => {
                this.setProps({
                    changePasswordFormIsShown: true,
                    profileIsEditable: true
                })
            })
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.logoutButton.element, "click")
            .subscribe(() => goToLoginPage())
        )
        // Аватар
        if(!this.props.profileIsEditable) {
            const avatar = this.element.getElementsByClassName('profile__main-avatar-container')[0] as HTMLFormElement
            this._onMountSubscriptions.push(
                Observable
                .fromEvent(avatar, "click")
                .subscribe(() => this.сhangeAvatar.show())
            )
        }
    }

    
    _setSaveButtonValidity(isValid: boolean) {
        isValid ? this.profileSaveButton.setEnabled() :
                    this.profileSaveButton.setDisabled()
    }
}