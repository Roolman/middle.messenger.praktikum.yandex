import * as Handlebars from "handlebars"

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
        super("div")
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
        this.element.classList.add("register")
        // Создаем компоненты формы
        this.emailInput = new Input({
            name: "email",
            title: "Почта",
            type: "email",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^.+@[A-Za-z]+\\.[A-za-z]+$",
                    error: "Введите e-mail корректно",
                },
            ]),
        })
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 3,
                    error: "Не менее 3 символов",
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 20,
                    error: "Не более 20 символов",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я0-9\_\-]+$",
                    error: "Логин должен содержать только символы [A-z][0-9]-_ и начинаться с буквы",
                },
            ]),
        })
        this.firstNameInput = new Input({
            name: "first_name",
            title: "Имя",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$",
                    error: "Латиница или кириллица. Допустим дефис. Первая буква заглавная",
                },
            ]),
        })
        this.secondNameInput = new Input({
            name: "second_name",
            title: "Фамилия",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^[A-ZА-Я]{1}[A-Za-zА-Яа-я\-]+$",
                    error: "Латиница или кириллица. Допустим дефис. Первая буква заглавная",
                },
            ]),
        })
        this.phoneInput = new Input({
            name: "phone",
            title: "Телефон",
            type: "text",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 10,
                    error: "Не менее 10 символов",
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 15,
                    error: "Не более 15 символов",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^\\+{0,1}[0-9]+$",
                    error: "Только цифры. Может начинаться с +",
                },
            ]),
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.minLength,
                    value: 8,
                    error: "Не менее 8 символов",
                },
                {
                    type: VALIDITY_TYPES.maxLength,
                    value: 40,
                    error: "Не более 40 символов",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "^(?=.*[\\p{Lu}])(?=.*\\d).*$",
                    error: "Обязательно хотя бы одна заглавная буква и цифра",
                },
            ]),
        })
        this.passwordCheckInput = new Input({
            name: "password_check",
            title: "Пароль еще раз",
            type: "password",
            validators: new Validators([
                {
                    type: VALIDITY_TYPES.required,
                    value: "",
                },
                {
                    type: VALIDITY_TYPES.pattern,
                    value: "",
                    error: "Пароли не совпадают",
                },
            ]),
        })
        // Форма
        this.form = new Form({
            id: "registerFormId",
            formElements: [
                this.emailInput,
                this.loginInput,
                this.firstNameInput,
                this.secondNameInput,
                this.phoneInput,
                this.passwordInput,
                this.passwordCheckInput,
            ],
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
                            {
                                type: VALIDITY_TYPES.required,
                                value: "",
                            },
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
        isValid ? this.registerBlock.mainButton.setEnabled()
            : this.registerBlock.mainButton.setDisabled()
    }
}