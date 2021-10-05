import Handlebars from "handlebars"

import './profile.scss'
import templ from './profile.tmpl'

import {Input} from "../../components/input/index"
import {Button} from "../../components/button/index"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants"

import {goToMainPage} from "../../services/navigation"
import {goToLoginPage} from "../../services/navigation"

let PROFILE_DATA = [
    {
        name: "email",
        type: "email",
        title: "Почта",
        value: "pochta@yandex.ru",
        errorMessage: "Неверно указана почта"
    },
    {
        name: "login",
        type: "text",
        title: "Логин",
        value: "ivanovivan",
        errorMessage: "Укажите логин"
    },
    {
        name: "first_name",
        type: "text",
        title: "Имя",
        value: "Иван",
        errorMessage: "Укажите имя"
    },
    {
        name: "second_name",
        type: "text",
        title: "Фамилия",
        value: "Иванов",
        errorMessage: "Укажите фамилию"
    },
    {
        name: "dispalay_name",
        type: "text",
        title: "Имя в чате",
        value: "Иван",
        errorMessage: "Укажите имя в чате"
    },
    {
        name: "phone",
        type: "text",
        title: "Телефон",
        value: "+7 (909) 967 30 30",
        errorMessage: "Укажите телефон"
    }
]

export class ProfilePage {

    profilePage
    // Кнопки
    returnButton
    editDataButton
    changePasswordButton
    logoutButton
    profileSaveButton
    // Форма для данных
    profileEditForm
    profileFormName = "profileEditForm"
    // Форма для пароля
    passwordChangeFormName = "passwordChangeForm"
    //
    profileIsEditable
    changePasswordFormIsShown
    
    constructor() {
        this.profileEditForm = {}
        this.profileIsEditable = false
        this.changePasswordFormIsShown = false
    }

    init() {
        // Вставляем шаблон
        const root = document.getElementById("root")
        this.profilePage = document.createElement("div")
        this.profilePage.id = "profilePage"
        this.profilePage.innerHTML = this.render()
        root.appendChild(this.profilePage)
        // Вешаем обработчики
        this._setHandlers()
    }

    render() {
        // Кнопочки
        this.returnButton = new Button("returnButton", '', BUTTON_TYPES.ROUND, BUTTON_THEMES.PRIMARY, 'fa fa-arrow-left')
        Handlebars.registerPartial("returnButton", this.returnButton.template)
        this.editDataButton = new Button("editDataButton", 'Изменить данные', BUTTON_TYPES.LINK)
        Handlebars.registerPartial("editDataButton", this.editDataButton.template)
        this.changePasswordButton = new Button("changePasswordButton", 'Изменить пароль', BUTTON_TYPES.LINK)
        Handlebars.registerPartial("changePasswordButton", this.changePasswordButton.template)
        this.logoutButton = new Button("logoutButton", 'Выйти', BUTTON_TYPES.LINK, BUTTON_THEMES.DANGER)
        Handlebars.registerPartial("logoutButton", this.logoutButton.template)
        this.profileSaveButton = new Button("profileSaveButton", 'Сохранить')
        Handlebars.registerPartial("profileSaveButton", this.profileSaveButton.template)
        // Инпут
        Handlebars.registerHelper("profileInput", function(name, title, type, errorMessage, defaultValue) {
            const input = new Input(name, name, title, type, errorMessage, defaultValue)
            return new Handlebars.SafeString(input.template)
        })
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
        this.profilePage.innerHTML = this.render()
        this._setHandlers()
    }

    _setHandlers = () => {
        const goToMain = document.getElementsByClassName('profile__return')[0]
        if(!goToMain.onclick) goToMain.onclick = goToMainPage
        if(this.profileIsEditable) {
            const saveButton = document.getElementById(this.profileSaveButton.id)
            if(!saveButton.onclick) saveButton.onclick = () => {
                // Тестовый код
                if(!this.changePasswordFormIsShown) {
                    const elements = document.getElementById(this.profileFormName).elements
                    for(let i=0; i < elements.length; i++){
                        let item = elements.item(i)
                        const field = PROFILE_DATA.find(x => x.name == item.name) 
                        field.value = item.value
                    }
                }
                this.changePasswordFormIsShown = false
                this._switchProfileEditable()
            }
        }
        else {
            const editButton = document.getElementById(this.editDataButton.id)
            if(!editButton.onclick) editButton.onclick = this._switchProfileEditable
            const changPasswordButton = document.getElementById(this.changePasswordButton.id)
            if(!changPasswordButton.onclick) changPasswordButton.onclick = () => {
                this.changePasswordFormIsShown = true
                this._switchProfileEditable()
            }
            const logoutButton = document.getElementById(this.logoutButton.id)
            if(!logoutButton.onclick) logoutButton.onclick = goToLoginPage
        }
    }

}