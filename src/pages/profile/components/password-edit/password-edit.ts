import { Button } from "../../../../components/button";
import { ProfileFieldValue, ProfileService } from "../../../../services/state/profile.service";
import { Component, ComponentProps } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./password-edit.tmpl"
import "./password-edit.scss"
import { Input } from "../../../../components/input";
import { PASSWORD_MAX_LENGTH_VALIDATOR, PASSWORD_MIN_LENGTH_VALIDATOR, 
    PASSWORD_PATTERN_VALIDATOR, REQUIRED_VALIDATOR 
} from "../../../../constants/validators";
import { Validators } from "../../../../utils/classes/validators";
import { Form } from "../../../../components/form";

type PasswordEditProps = ComponentProps & {
    onSaveButton: Function
}

export class PasswordEdit extends Component {
    props: PasswordEditProps

    // Форма для данных
    passwordForm: Form
    profileSaveButton: Button


    @Inject(ProfileService)
    private _profileService: ProfileService

    constructor(props?: PasswordEditProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: PasswordEditProps): PasswordEditProps {
        return {
            ...props,
            componentClassName: "profile__main",
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
                            form: "profileEditFormId",
                        },
                    }),
                },
            ]
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

                        const fieldValues: ProfileFieldValue[] = []
                        let form = this.passwordForm
                        const elements = form.formElements
                        for (const el of elements) {
                            fieldValues.push({
                                name: el.name,
                                value: el.value,
                            })
                        }
                        console.log(fieldValues)
                        // Меняем значения через сервис
                        this._profileService.setProfile(fieldValues)
                        //
                        this.props.onSaveButton()
                    },
                ),
        )
        // Валидация кнопки сохранения
        this._onMountSubscriptions.push(
            this.passwordForm.onValidityChange.subscribe(
                (isValid: boolean) => {
                    this._setSaveButtonValidity(isValid)
                    console.log(isValid)
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