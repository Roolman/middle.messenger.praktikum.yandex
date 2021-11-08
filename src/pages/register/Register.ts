import "./register.scss"
import templ from "./register.tmpl"

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Header } from "../../components/header/index"

import Router from "../../services/core/router"
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
import { PAGES } from "../../services/core/navigation"
import { ComponentProps } from "../../types/components/component"
import { Indexed } from "../../types"
import { Inject } from "../../utils/decorators/inject"
import { UserService } from "../../services/state/user.service"

export class RegisterPage extends Component {
    registerBlock: LoginRegisterBlock
    // Форма
    passwordInput: Input
    passwordCheckInput: Input

    @Inject(UserService)
    private _userService: UserService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "register",
            children: [
                {
                    name: "header",
                    component: new Header(),
                },
                {
                    name: "registerBlock",
                    component: new LoginRegisterBlock({
                        title: "Регистрация",
                        form: new Form({
                            children: [
                                {
                                    name: "email",
                                    component: new Input({
                                        name: "email",
                                        title: "Почта",
                                        type: "email",
                                        validators: new Validators([
                                            REQUIRED_VALIDATOR,
                                            EMAIL_VALIDATOR,
                                        ]),
                                    }),
                                },
                                {
                                    name: "login",
                                    component: new Input({
                                        name: "login",
                                        title: "Логин",
                                        type: "text",
                                        validators: new Validators([
                                            REQUIRED_VALIDATOR,
                                            LOGIN_PATTERN_VALIDATOR,
                                            LOGIN_MIN_LENGTH_VALIDATOR,
                                            LOGIN_MAX_LENGTH_VALIDATOR,
                                        ]),
                                    }),
                                },
                                {
                                    name: "first_name",
                                    component: new Input({
                                        name: "first_name",
                                        title: "Имя",
                                        type: "text",
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
                                        validators: new Validators([
                                            REQUIRED_VALIDATOR,
                                            PHONE_MIN_LENGTH_VALIDATOR,
                                            PHONE_MAX_LENGTH_VALIDATOR,
                                            PHONE_PATTERN_VALIDATOR,
                                        ]),
                                    }),
                                },
                                {
                                    name: "password",
                                    component: new Input({
                                        name: "password",
                                        title: "Пароль",
                                        type: "password",
                                        validators: new Validators([
                                            REQUIRED_VALIDATOR,
                                            PASSWORD_MAX_LENGTH_VALIDATOR,
                                            PASSWORD_MIN_LENGTH_VALIDATOR,
                                            PASSWORD_PATTERN_VALIDATOR,
                                        ]),
                                    }),
                                },
                                {
                                    name: "password_check",
                                    component: new Input({
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
                                    }),
                                },
                            ],
                            attributes: {
                                id: "registerFormId",
                            },
                        }),
                        mainActionTitle: "Зарегистрироваться",
                        secondActionTitle: "Войти",
                    }),
                },
            ],
        }
    }

    componentDidRender() {
        // Определяем состояние кнопки по валидности формы
        this._setRegisterButtonValidity(this.registerBlock.form.isValid)
        this.passwordInput = this.registerBlock.form.props.children[5].component as Input
        this.passwordCheckInput = this.registerBlock.form.props.children[6].component as Input
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.mainButton.element, "click")
                .subscribe((e: Event) => {
                    e.preventDefault()

                    if (this.registerBlock.form.isValid) {
                        const registerData: Indexed = {}
                        for (const formElement of this.registerBlock.form.formElements) {
                            registerData[formElement.name] = formElement.value
                        }
                        this._userService.signUp({
                            first_name: registerData.first_name,
                            second_name: registerData.second_name,
                            login: registerData.login,
                            email: registerData.email,
                            password: registerData.password,
                            phone: registerData.phone,
                        })
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.registerBlock.secondButton.element, "click")
                .subscribe(() => Router.go(PAGES.LOGIN)),
        )
        this._onMountSubscriptions.push(
            this.registerBlock.form.onValidityChange.subscribe(
                (isValid: boolean) => {
                    this._setRegisterButtonValidity(isValid)
                },
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