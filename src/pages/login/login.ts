import "./login.scss"
import templ from "./login.tmpl"

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Checkbox } from "../../components/checkbox/index"
import { Header } from "../../components/header/index"

import Router from "../../services/core/router"
import { Component } from "../../utils/classes/component"
import { Form } from "../../components/form"
import { Observable } from "../../utils/classes/observable"
import { Validators } from "../../utils/classes/validators"
import { REQUIRED_VALIDATOR } from "../../constants/validators"
import { PAGES } from "../../services/core/navigation"
import { Inject } from "../../utils/decorators/inject"
import { UserService } from "../../services/state/user.service"
import { ComponentProps } from "../../types/components/component"
import { Indexed } from "../../types"

export class LoginPage extends Component {
    // Компоненты
    loginBlock: LoginRegisterBlock
    header: Header

    private _valid: boolean
    get valid(): boolean {
        return this._valid
    }

    @Inject(UserService)
    private _userService: UserService

    constructor() {
        super("div", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "login",
            children: [
                {
                    name: "header",
                    component: new Header(),
                },
                {
                    name: "loginBlock",
                    component: new LoginRegisterBlock({
                        title: "Вход",
                        form: new Form({
                            children: [
                                {
                                    name: "login",
                                    component: new Input({
                                        name: "login",
                                        title: "Логин",
                                        type: "text",
                                        validators: new Validators([REQUIRED_VALIDATOR]),
                                        isValidationHidden: true,
                                    }),
                                },
                                {
                                    name: "password",
                                    component: new Input({
                                        name: "password",
                                        title: "Пароль",
                                        type: "password",
                                        validators: new Validators([REQUIRED_VALIDATOR]),
                                        isValidationHidden: true,
                                    }),
                                },
                                {
                                    name: "rememberMe",
                                    component: new Checkbox({
                                        name: "rememberMe",
                                        label: "Запомнить меня",
                                    }),
                                },
                            ],
                            attributes: {
                                id: "loginFormId",
                            },
                        }),
                        mainActionTitle: "Авторизоваться",
                        secondActionTitle: "Ещё не зарегистрированы?",
                    }),
                },
            ],
        }
    }

    componentDidRender() {
        // Определяем состояние кнопки по валидности формы
        this._setLoginButtonValidity(this.loginBlock.form.isValid)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.mainButton.element, "click")
                .subscribe((e: Event) => {
                    e.preventDefault()

                    if (this.loginBlock.form.isValid) {
                        const logInData: Indexed = {}
                        for (const formElement of this.loginBlock.form.formElements) {
                            logInData[formElement.name] = formElement.value
                        }
                        this._userService.logIn({
                            login: logInData.login,
                            password: logInData.password
                        })
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.secondButton.element, "click")
                .subscribe(() => Router.go(PAGES.REGISTER)),
        )
        this._onMountSubscriptions.push(
            this.loginBlock.form.onValidityChange.subscribe(
                (isValid: boolean) => this._setLoginButtonValidity(isValid),
            ),
        )
    }

    _setLoginButtonValidity(isValid: boolean) {
        if (isValid) {
            this.loginBlock.mainButton.setEnabled()
        } else {
            this.loginBlock.mainButton.setDisabled()
        }
    }
}