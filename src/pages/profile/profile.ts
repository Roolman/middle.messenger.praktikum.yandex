import * as Handlebars from "handlebars"

import './Profile.scss'
import templ from './Profile.tmpl'

import {Input} from "../../components/Input/index"
import {Button} from "../../components/Button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import {ChangeAvatar} from "./modules/change-avatar"

import {goToMainPage} from "../../services/navigation"
import {goToLoginPage} from "../../services/navigation"
import { PROFILE_DATA } from "../../mock/profile"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/Form"
import { ProfileField, ProfileFieldValue, ProfileService } from "../../services/profile.service"
import { Inject } from "../../utils/decorators/inject"
import { Observable } from "../../utils/classes/observable"

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
    profileEditFormInputs: Array<Input>
    // Форма для пароля
    passwordForm: Form
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
            title: "Сохранить"
        })
        // Форма профиля
        this.profileEditFormInputs = []
        for(let element of this.props.profileData) {
            const input = new Input({ ...element }) 
            this.profileEditFormInputs.push(input)
        }
        this.profileEditForm = new Form({
            formElements: this.profileEditFormInputs.map(x => x.element)
        })
        // Форма пароля
        this.passwordForm = new Form({
            formElements: [
                new Input({name: "oldPassword", title: "Старый пароль", type: "password", errorMessage: "Введите старый пароль"}).element,
                new Input({name: "newPassword", title: "Новый пароль", type: "password", errorMessage: "Пароли не совпадают"}).element
            ]
        })
        // Смена аватара
        this.сhangeAvatar = new ChangeAvatar()

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
                    // Тестовый код
                    if(!this.props.changePasswordFormIsShown) {
                        const elements = this.profileEditForm.formElements
                        for(let i=0; i < elements.length; i++){
                            // TODO: Переписать или убрать
                            let input = Array.from(Array.from(elements[i].children)[0].children)[0] as HTMLInputElement
                            fieldValues.push({
                                name: input.getAttribute('name') as string,
                                value: input.value
                            })
                        }
                    }
                    // Меняем значения через сервис
                    this._profileService.setProfile(fieldValues)
                    // Переходим в режим просмотра
                    this.setProps({
                        changePasswordFormIsShown: false,
                        profileIsEditable: false
                    })
                }
        ))
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
}