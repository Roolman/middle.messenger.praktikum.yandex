import "./register.scss"
import templ from "./register.tmpl"

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Header } from "../../components/header/index"

import { goToLoginPage } from "../../services/core/navigation"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/form"
import { Observable } from "../../utils/classes/observable"
import { Validators, VALIDITY_TYPES } from "../../utils/classes/validators"
import {
    EMAIL_VALIDATOR, LOGIN_MAX_LENGTH_VALIDATOR, LOGIN_MIN_LENGTH_VALIDATOR,
    LOGIN_PATTERN_VALIDATOR, NAME_PATTERN_VALIDATOR, PASSWORD_MAX_LENGTH_VALIDATOR,
    PASSWORD_MIN_LENGTH_VALIDATOR, PASSWORD_PATTERN_VALIDATOR, PHONE_MAX_LENGTH_VALIDATOR,
    PHONE_MIN_LENGTH_VALIDATOR, PHONE_PATTERN_VALIDATOR, REQUIRED_VALIDATOR,
} from "../../constants/validators"

export class RegisterPage extends Component {
    registerBlock: LoginRegisterBlock
    // Форма
    form: Form
    emailInput: Input
    loginInput: Input
    firstNameInput: Input
    secondNameInput: Input
    phoneInput: Input
    passwordInput: Input
    passwordCheckInput: Input

    constructor() {
        super("div", {}, templ)
    }

    componentDidRender() {
        this.element.classList.add("register")
        // Создаем компоненты формы
        this.emailInput = new Input({
            name: "email",
            title: "Почта",
            type: "email",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                EMAIL_VALIDATOR,
            ]),
        })
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                LOGIN_PATTERN_VALIDATOR,
                LOGIN_MIN_LENGTH_VALIDATOR,
                LOGIN_MAX_LENGTH_VALIDATOR,
            ]),
        })
        this.firstNameInput = new Input({
            name: "first_name",
            title: "Имя",
            type: "text",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                NAME_PATTERN_VALIDATOR,
            ]),
        })
        this.secondNameInput = new Input({
            name: "second_name",
            title: "Фамилия",
            type: "text",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                NAME_PATTERN_VALIDATOR,
            ]),
        })
        this.phoneInput = new Input({
            name: "phone",
            title: "Телефон",
            type: "text",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                PHONE_MIN_LENGTH_VALIDATOR,
                PHONE_MAX_LENGTH_VALIDATOR,
                PHONE_PATTERN_VALIDATOR,
            ]),
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                PASSWORD_MAX_LENGTH_VALIDATOR,
                PASSWORD_MIN_LENGTH_VALIDATOR,
                PASSWORD_PATTERN_VALIDATOR,
            ]),
        })
        this.passwordCheckInput = new Input({
            name: "password_check",
            title: "Пароль еще раз",
            type: "password",
            validators: new Validators([
                REQUIRED_VALIDATOR,
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "",
                    error: "Пароли не совпадают",
                },
            ]),
        })
        // Форма
        this.form = new Form({
            formElements: [
                this.emailInput,
                this.loginInput,
                this.firstNameInput,
                this.secondNameInput,
                this.phoneInput,
                this.passwordInput,
                this.passwordCheckInput,
            ],
            attributes: {
                id: "registerFormId",
            },
        })
        const header = new Header()
        // Объединяем в один компонент
        this.registerBlock = new LoginRegisterBlock({
            title: "Регистрация",
            form: this.form,
            mainActionTitle: "Зарегистрироваться",
            secondActionTitle: "Войти",
        })
        // Определяем состояние кнопки по валидности формы
        this._setRegisterButtonValidity(this.form.isValid)
        // Вставляем в элемент
        this.element.appendChild(header.element)
        this.element.appendChild(this.registerBlock.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.mainButton.element, "click")
                .subscribe((e: Event) => {
                    e.preventDefault()

                    if (this.form.isValid) {
                        const values = []
                        for (const formElement of this.form.formElements) {
                            values.push({ name: formElement.name, value: formElement.value })
                        }
                        console.log(values)
                        alert("Зареган!")
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.secondButton.element, "click")
                .subscribe(() => goToLoginPage()),
        )
        this._onMountSubscriptions.push(
            this.form.onValidityChange.subscribe(
                (isValid: boolean) => this._setRegisterButtonValidity(isValid),
            ),
        )
        this._onMountSubscriptions.push(
            this.passwordInput.onValueChange.subscribe(
                (value: string) => {
                    this.passwordCheckInput.setProps({
                        validators: new Validators([
                            REQUIRED_VALIDATOR,
                            {
                                type: VALIDITY_TYPES.pattern,
                                value,
                                error: "Пароли не совпадают",
                            },
                        ]),
                    })
                },
            ),
        )
    }

    _setRegisterButtonValidity(isValid: boolean) {
        if (isValid) {
            this.registerBlock.mainButton.setEnabled()
        } else {
            this.registerBlock.mainButton.setDisabled()
        }
    }
}