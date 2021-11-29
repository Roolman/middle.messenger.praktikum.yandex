import { Button } from "../../../../components/button"
import { Component } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"
import { Inject } from "../../../../utils/decorators/inject"

import tmpl from "./password-edit.tmpl"
import "./password-edit.scss"
import { Input } from "../../../../components/input"
import {
    PASSWORD_MAX_LENGTH_VALIDATOR, PASSWORD_MIN_LENGTH_VALIDATOR,
    PASSWORD_PATTERN_VALIDATOR, REQUIRED_VALIDATOR,
} from "../../../../constants/validators"
import { Validators } from "../../../../utils/classes/validators"
import { Form } from "../../../../components/form"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button"
import { ComponentProps } from "../../../../types/components/component"
import { UserService } from "../../../../services/state/user.service"

type PasswordEditProps = ComponentProps & {
    onSaveButton: Function
}

export class PasswordEdit extends Component {
    props: PasswordEditProps

    // Форма для данных
    passwordForm: Form
    profileSaveButton: Button
    cancelButton: Button

    @Inject(UserService)
    private _userService: UserService

    constructor(props?: PasswordEditProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: PasswordEditProps): PasswordEditProps {
        return {
            ...props,
            componentClassName: "settings__main",
            children: [
                {
                    name: "passwordForm",
                    component: new Form({
                        children: [
                            {
                                name: "oldPassword",
                                component: new Input({
                                    name: "oldPassword",
                                    title: "Старый пароль",
                                    type: "password",
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "newPassword",
                                component: new Input({
                                    name: "newPassword",
                                    title: "Новый пароль",
                                    type: "password",
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        PASSWORD_MIN_LENGTH_VALIDATOR,
                                        PASSWORD_MAX_LENGTH_VALIDATOR,
                                        PASSWORD_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                        ],
                        attributes: {
                            id: "passwordFormId",
                        },
                    }),
                },
                {
                    name: "profileSaveButton",
                    component: new Button({
                        title: "Сохранить",
                        attributes: {
                            type: "submit",
                            form: "passwordFormId",
                            disabled: "",
                        },
                    }),
                },
                {
                    name: "cancelButton",
                    component: new Button({
                        title: "Отмена",
                        type: BUTTON_TYPES.STROKED,
                        theme: BUTTON_THEMES.NORMAL,
                    }),
                },
            ],
        }
    }

    componentDidMount() {
        // Сохранить инфо по нажатию
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileSaveButton.element, "click")
                .subscribe(
                    (e: Event) => {
                        e.preventDefault()

                        const elements = this.passwordForm.formElements
                        const oldPassword = elements.find(
                            (x) => x.name === "oldPassword",
                        )?.value as string
                        const newPassword = elements.find(
                            (x) => x.name === "newPassword",
                        )?.value as string
                        // Меняем значения через сервис
                        this._userService.updatePassword(oldPassword, newPassword)
                        //
                        this.props.onSaveButton()
                        // Сбрасываем значения
                        const oldP = this.passwordForm.formElements[0] as Input
                        const newP = this.passwordForm.formElements[1] as Input
                        oldP.setProps({ value: "" })
                        newP.setProps({ value: "" })
                    },
                ),
        )
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.cancelButton.element, "click")
                .subscribe(
                    (e: Event) => {
                        e.preventDefault()
                        this.props.onSaveButton()
                    },
                ),
        )
        // Валидация кнопки сохранения
        this._onMountSubscriptions.push(
            this.passwordForm.onValidityChange.subscribe(
                (isValid: boolean) => {
                    this._setSaveButtonValidity(isValid)
                },
            ),
        )
    }

    _setSaveButtonValidity(isValid: boolean) {
        if (isValid) {
            this.profileSaveButton.setEnabled()
        } else {
            this.profileSaveButton.setDisabled()
        }
    }
}