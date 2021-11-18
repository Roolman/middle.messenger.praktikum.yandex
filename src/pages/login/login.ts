import "./login.scss"
import templ from "./login.tmpl"

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
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

type LoginPageProps = ComponentProps & {
    logInLoading?: boolean
}

export class LoginPage extends Component {
    props: LoginPageProps
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

    setDefaultProps(props: LoginPageProps): LoginPageProps {
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

    componentDidInit() {
        this._subscriptions.push(
            this._userService
                .logInLoadingObservable
                .subscribe(
                    (isLoading: boolean) => {
                        if (isLoading) {
                            this.loginBlock.mainButton.setDisabled()
                        } else {
                            this.loginBlock.mainButton.setEnabled()
                        }
                    },
                ),
        )
    }

    componentDidRender() {
        // Определяем состояние кнопки по валидности формы
        this._setLoginButtonValidity(this.loginBlock.form.isValid)
        // Фокусируемся для корректного отображения autofill
        this.loginBlock.element.focus()
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
                            password: logInData.password,
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