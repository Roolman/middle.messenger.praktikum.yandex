import * as Handlebars from "handlebars"

import './profile.scss'
import templ from './profile.tmpl'

import {Input} from "../../components/input/index"
import {Button} from "../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import {ChangeAvatar} from "./modules/change-avatar"

import {goToMainPage} from "../../services/navigation"
import {goToLoginPage} from "../../services/navigation"
import { PROFILE_DATA } from "../../mock/profile"


export class ProfilePage {

    page: HTMLElement
    // Кнопки
    returnButton: Button
    editDataButton: Button
    changePasswordButton: Button
    logoutButton: Button
    profileSaveButton: Button
    // Форма для данных
    profileEditForm
    profileFormName = "profileEditForm"
    // Форма для пароля
    passwordChangeFormName = "passwordChangeForm"
    // Состояния страницы
    profileIsEditable
    changePasswordFormIsShown
    // Модуль смены аватара
    сhangeAvatar: ChangeAvatar
    
    constructor() {
        this.profileEditForm = {}
        this.profileIsEditable = false
        this.changePasswordFormIsShown = false
    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        this.page = document.createElement("div")
        this.page.id = "profilePage"
        this.page.innerHTML = this.render()
        if(!root) {
            throw new Error("Не был получен корневой элемент!")
        }
        root.appendChild(this.page)
        // Вешаем обработчики
        this._setHandlers()
    }

    render() {
        // Кнопочки
        this.returnButton = new Button("returnButton", '', BUTTON_TYPES.ROUND, BUTTON_THEMES.PRIMARY, 'fa fa-arrow-left')
        Handlebars.registerPartial("returnButton", this.returnButton.content)
        this.editDataButton = new Button("editDataButton", 'Изменить данные', BUTTON_TYPES.LINK)
        Handlebars.registerPartial("editDataButton", this.editDataButton.content)
        this.changePasswordButton = new Button("changePasswordButton", 'Изменить пароль', BUTTON_TYPES.LINK)
        Handlebars.registerPartial("changePasswordButton", this.changePasswordButton.content)
        this.logoutButton = new Button("logoutButton", 'Выйти', BUTTON_TYPES.LINK, BUTTON_THEMES.DANGER)
        Handlebars.registerPartial("logoutButton", this.logoutButton.content)
        this.profileSaveButton = new Button("profileSaveButton", 'Сохранить')
        Handlebars.registerPartial("profileSaveButton", this.profileSaveButton.content)
        // Инпут
        Handlebars.registerHelper("profileInput", function(name, title, type, errorMessage, defaultValue) {
            const input = new Input(name, name, title, type, errorMessage, defaultValue)
            return new Handlebars.SafeString(input.content)
        })
        // Смена аватара
        this.сhangeAvatar = new ChangeAvatar()
        Handlebars.registerPartial("сhangeAvatar", this.сhangeAvatar.content)
        //
        const template = Handlebars.compile(templ)
        const result = template({
            profileData: PROFILE_DATA,
            profileFormName: this.profileFormName,
            passwordChangeFormName: this.passwordChangeFormName,
            profileIsEditable: this.profileIsEditable,
            changePasswordFormIsShown: this.changePasswordFormIsShown
        })
        return result
    }

    _switchProfileEditable = () => {
        this.profileIsEditable = !this.profileIsEditable
        this.page.innerHTML = this.render()
        this._setHandlers()
    }

    _setHandlers = () => {
        // TODO: Fix AS
        const goToMain = document.getElementsByClassName('profile__return')[0] as HTMLElement
        if(!goToMain.onclick) goToMain.onclick = goToMainPage
        if(this.profileIsEditable) {
            const saveButton = document.getElementById(this.profileSaveButton.id)
            if(saveButton && !saveButton.onclick) saveButton.onclick = () => {
                // Тестовый код
                if(!this.changePasswordFormIsShown) {
                    const form: HTMLFormElement = document.getElementById(this.profileFormName) as HTMLFormElement
                    const elements = form.elements
                    for(let i=0; i < elements.length; i++){
                        let item = elements.item(i)
                        if(!item) continue
                        const field = PROFILE_DATA.find(x => x.name == item?.getAttribute('name')) 
                        if(field) field.value = item?.getAttribute('value') || ''
                    }
                }
                this.changePasswordFormIsShown = false
                this._switchProfileEditable()
            }
        }
        else {
            // TODO: Fix AS
            const editButton = document.getElementById(this.editDataButton.id)
            if(editButton && !editButton.onclick) editButton.onclick = this._switchProfileEditable
            const changPasswordButton = document.getElementById(this.changePasswordButton.id)
            if(changPasswordButton && !changPasswordButton.onclick) changPasswordButton.onclick = () => {
                this.changePasswordFormIsShown = true
                this._switchProfileEditable()
            }
            const logoutButton = document.getElementById(this.logoutButton.id)
            if(logoutButton && !logoutButton.onclick) logoutButton.onclick = goToLoginPage
            const avatar = document.getElementsByClassName('profile__main-avatar-container')[0] as HTMLFormElement
            if(!avatar.onclick) avatar.onclick = () => {
                this._showChangeAvatar()
            }
            this.сhangeAvatar.setOnApply()
        }
    }

    _showChangeAvatar = () => {
        this.сhangeAvatar.show()
    }
}