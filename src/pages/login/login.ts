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
    // Форма
    form: Form
    loginInput: Input
    passwordInput: Input
    rememberMeCheckbox: Checkbox

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
            componentClassName: "login"
        }
    }

    componentDidRender() {
        // Создаем форму
        this.loginInput = new Input({
            name: "login",
            title: "Логин",
            type: "text",
            validators: new Validators([REQUIRED_VALIDATOR]),
            isValidationHidden: true,
        })
        this.passwordInput = new Input({
            name: "password",
            title: "Пароль",
            type: "password",
            validators: new Validators([REQUIRED_VALIDATOR]),
            isValidationHidden: true,
        })
        this.rememberMeCheckbox = new Checkbox({
            name: "rememberMe",
            label: "Запомнить меня",
        })
        this.form = new Form({
            formElements: [
                this.loginInput,
                this.passwordInput,
                this.rememberMeCheckbox,
            ],
            attributes: {
                id: "loginFormId"
            }
        })
        // Объединяем в один компонент
        this.loginBlock = new LoginRegisterBlock({
            title: "Вход",
            form: this.form,
            mainActionTitle: "Авторизоваться",
            secondActionTitle: "Ещё не зарегистрированы?",
        })
        // Определяем состояние кнопки по валидности формы
        this._setLoginButtonValidity(this.form.isValid)
        // Создаем хедер
        this.header = new Header()
        // Вставляем в элемент
        this.element.appendChild(this.header.element)
        this.element.appendChild(this.loginBlock.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.loginBlock.mainButton.element, "click")
                .subscribe(() => {
                    if (this.form.isValid) {
                        const values = []
                        for (const formElement of this.form.formElements) {
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
            this.form.onValidityChange.subscribe(
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