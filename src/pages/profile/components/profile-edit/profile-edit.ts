import { Button } from "../../../../components/button";
import { Component } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./profile-edit.tmpl"
import "./profile-edit.scss"
import { Input } from "../../../../components/input";
import { EMAIL_VALIDATOR, LOGIN_MAX_LENGTH_VALIDATOR, LOGIN_MIN_LENGTH_VALIDATOR, LOGIN_PATTERN_VALIDATOR, NAME_PATTERN_VALIDATOR, PHONE_MAX_LENGTH_VALIDATOR, 
    PHONE_MIN_LENGTH_VALIDATOR, PHONE_PATTERN_VALIDATOR, REQUIRED_VALIDATOR 
} from "../../../../constants/validators";
import { Validators } from "../../../../utils/classes/validators";
import { Form } from "../../../../components/form";
import { BUTTON_THEMES, BUTTON_TYPES } from "../../../../constants/button";
import { ComponentProps } from "../../../../types/components/component";
import { User } from "../../../../types/state/user";
import { UserService } from "../../../../services/state/user.service";

type ProfileEditProps = ComponentProps & {
    user: User | null
    onSaveButton: Function
}

export class ProfileEdit extends Component {
    props: ProfileEditProps

    // Форма для данных
    profileEditForm: Form
    profileSaveButton: Button
    cancelButton: Button

    @Inject(UserService)
    private _userService: UserService

    constructor(props: ProfileEditProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ProfileEditProps): ProfileEditProps {
        return {
            ...props,
            componentClassName: "settings__main",
            children: [
                {
                    name: "profileEditForm",
                    component: new Form({
                        children: [
                            {
                                name: "email",
                                component: new Input({
                                    name: "email",
                                    title: "Почта",
                                    type: "email",
                                    value: props.user?.email,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        EMAIL_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "first_name",
                                component: new Input({
                                    name: "first_name",
                                    title: "Имя",
                                    type: "text",
                                    value: props.user?.first_name,
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
                                    value: props.user?.second_name,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        NAME_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "login",
                                component: new Input({
                                    name: "login",
                                    title: "Логин",
                                    type: "text",
                                    value: props.user?.login,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        LOGIN_PATTERN_VALIDATOR,
                                        LOGIN_MIN_LENGTH_VALIDATOR,
                                        LOGIN_MAX_LENGTH_VALIDATOR
                                    ]),
                                }),
                            },
                            {
                                name: "display_name",
                                component: new Input({
                                    name: "display_name",
                                    title: "Имя в чате",
                                    type: "text",
                                    value: props.user?.display_name,
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
                                    value: props.user?.phone,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        PHONE_MIN_LENGTH_VALIDATOR,
                                        PHONE_MAX_LENGTH_VALIDATOR,
                                        PHONE_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                        ],
                        attributes: {
                            id: "profileEditFormId",
                        },
                    }),
                },
                {
                    name: "profileSaveButton",
                    component: new Button({
                        title: "Сохранить",
                        attributes: {
                            type: "submit",
                            form: "profileEditFormId",
                        },
                    }),
                },
                {
                    name: "cancelButton",
                    component: new Button({
                        title: "Отмена",
                        type: BUTTON_TYPES.STROKED,
                        theme: BUTTON_THEMES.NORMAL
                    }),
                },
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(
            this._userService.userObservable.subscribe(
            (user: User) => {
                this.setProps({user})
                if(user) {
                    this._updateFormValue(user)
                }
            },
        ))
    }

    componentDidMount() {
        // Сохранить инфо по нажатию
        this._onMountSubscriptions.push(
            Observable
                .fromEvent(this.profileSaveButton.element, "click")
                .subscribe(
                    (e: Event) => {
                        e.preventDefault()

                        const user: any = {}
                        const elements = this.profileEditForm.formElements
                        for (const el of elements) {
                            user[el.name] = el.value
                        }
                        // Меняем значения через сервис
                        this._userService.updateProfile(user)
                        //
                        this.props.onSaveButton()
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
            this.profileEditForm.onValidityChange.subscribe(
                (isValid: boolean) => {
                    this._setSaveButtonValidity(isValid)
                },
            ),
        )
    }

    
    private _setSaveButtonValidity(isValid: boolean) {
        if (isValid) {
            this.profileSaveButton.setEnabled()
        } else {
            this.profileSaveButton.setDisabled()
        }
    }

    private _updateFormValue(user: User) {
        const formElements = this.profileEditForm.formElements
        for(let element of formElements) {
            const userFieldValue = (user as any)[element.name]
            element.value = userFieldValue
        }
    }
}