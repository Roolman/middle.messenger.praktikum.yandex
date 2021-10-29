import "./login.scss"
import templ from "./login.tmpl"

import { LoginRegisterBlock } from "../../components/login-register-block/index"
import { Input } from "../../components/input/index"
import { Checkbox } from "../../components/checkbox/index"
import { Header } from "../../components/header/index"

import { goToRegisterPage, goToMainPage } from "../../services/core/navigation"
import { Component, ComponentProps } from "../../utils/classes/component"
import { Form } from "../../components/form"
import { Observable } from "../../utils/classes/observable"
import { Validators } from "../../utils/classes/validators"
import { REQUIRED_VALIDATOR } from "../../constants/validators"

export class LoginPage extends Component {
    // Компоненты
    loginBlock: LoginRegisterBlock
    header: Header

    private _valid: boolean
    get valid(): boolean {
        return this._valid
    }

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
                    component: new Header()
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
                                    })
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
                                    component:  new Checkbox({
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
                    })
                }
            ]
        }
    }

    componentDidRender() {
        // Определяем состояние кнопки по валидности формы
        this._setLoginButtonValidity(this.loginBlock.form.isValid)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.mainButton.element, "click")
                .subscribe(() => {
                    if (this.loginBlock.form.isValid) {
                        const values = []
                        for (const formElement of this.loginBlock.form.formElements) {
                            values.push({ name: formElement.name, value: formElement.value })
                        }
                        console.log(values)
                        goToMainPage()
                    }
                }),
        )
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.secondButton.element, "click")
                .subscribe(() => goToRegisterPage()),
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