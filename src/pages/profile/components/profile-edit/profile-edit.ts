import { Button } from "../../../../components/button";
import { ProfileField, ProfileFieldValue, ProfileService } from "../../../../services/state/profile.service";
import { Component, ComponentProps } from "../../../../utils/classes/component";
import { Observable } from "../../../../utils/classes/observable";
import { Inject } from "../../../../utils/decorators/inject";

import tmpl from "./profile-edit.tmpl"
import "./profile-edit.scss"
import { Input } from "../../../../components/input";
import { EMAIL_VALIDATOR, NAME_PATTERN_VALIDATOR, PHONE_MAX_LENGTH_VALIDATOR, 
    PHONE_MIN_LENGTH_VALIDATOR, PHONE_PATTERN_VALIDATOR, REQUIRED_VALIDATOR 
} from "../../../../constants/validators";
import { Validators } from "../../../../utils/classes/validators";
import { Form } from "../../../../components/form";

type ProfileEditProps = ComponentProps & {
    profileData: Array<ProfileField>
    onSaveButton: Function
}

export class ProfileEdit extends Component {
    props: ProfileEditProps

    // Форма для данных
    profileEditForm: Form
    profileSaveButton: Button


    @Inject(ProfileService)
    private _profileService: ProfileService

    constructor(props: ProfileEditProps) {
        super("div", props, tmpl)
    }

    setDefaultProps(props: ProfileEditProps): ProfileEditProps {
        return {
            ...props,
            componentClassName: "profile__main",
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
                                    value: props.profileData.find((x) => x.name === "email")?.value,
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
                                    value: props.profileData.find((x) => x.name === "first_name")?.value,
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
                                    value: props.profileData.find(
                                        (x) => x.name === "second_name",
                                    )?.value,
                                    validators: new Validators([
                                        REQUIRED_VALIDATOR,
                                        NAME_PATTERN_VALIDATOR,
                                    ]),
                                }),
                            },
                            {
                                name: "dispalay_name",
                                component: new Input({
                                    name: "dispalay_name",
                                    title: "Имя в чате",
                                    type: "text",
                                    value: props.profileData.find(
                                        (x) => x.name === "dispalay_name",
                                    )?.value,
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
                                    value: props.profileData.find((x) => x.name === "phone")?.value,
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
            ]
        }
    }

    componentDidInit() {
        this._subscriptions.push(this._profileService.profileObservable.subscribe(
            (profile: ProfileField[]) => {
                this.setProps({
                    profileData: profile,
                })
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

                        const fieldValues: ProfileFieldValue[] = []
                        let form = this.profileEditForm
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
            this.profileEditForm.onValidityChange.subscribe(
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