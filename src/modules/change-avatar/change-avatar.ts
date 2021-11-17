import "./change-avatar.scss"
import templ from "./change-avatar.tmpl"

import { Button } from "../../components/button/index"
import { Component } from "../../utils/classes/component"
import { Observable } from "../../utils/classes/observable"
import { ComponentProps } from "../../types/components/component"
import { Inject } from "../../utils/decorators/inject"
import { SnackBarService, SNACKBAR_TYPE } from "../../services/core/snackbar"

const ACCEPT_TYPE = "image/"

type ChangeAvatarProps = ComponentProps & {
    onApplyButton: Function
    applyButtonText: string
    headerTitle: string
    isModal?: boolean
    isFileRequired?: boolean
}

export class ChangeAvatar extends Component {
    props: ChangeAvatarProps
    applyButton: Button
    fileInput: HTMLInputElement
    file: File | null
    selectFileLabel: HTMLLabelElement

    @Inject(SnackBarService)
    private _snackBar: SnackBarService

    constructor(props: ChangeAvatarProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: ChangeAvatarProps): ChangeAvatarProps {
        return {
            ...props,
            componentClassName: props.isModal ? "modal-container" : "",
            children: [
                {
                    name: "applyButton",
                    component: new Button({ 
                        title: props.applyButtonText,
                        styles: {
                            width: "100%"
                        }
                    })
                }
            ]
        }
    }

    componentDidInit() {
        this.hide()
        if(this.props.isModal) {
            this._subscriptions.push(
                Observable
                .fromEvent(this.element, "click")
                .subscribe(
                    (e: Event) => {
                        const target = e.target as HTMLElement
                        if(target.classList.contains(this.props.componentClassName  as string)) {
                            this.hide()
                        }
                    }
                )
            )
        }
    }

    componentDidRender() {
        if(this.props.isFileRequired) {
            this.applyButton.setDisabled()
        }
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.applyButton.element, "click")
            .subscribe(() => {
                this.props.onApplyButton(this.file)
            }),
        )
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.fileInput, "input")
            .subscribe(() => {
                const file: File = this.fileInput.files?.item(0) as File
                if(file.type.startsWith(ACCEPT_TYPE)) {
                    this.selectFileLabel.textContent = file.name
                    this.file = file
                    if(this.props.isFileRequired) {
                        this.applyButton.setEnabled()
                    }
                }
                else {
                    this.selectFileLabel.textContent = "Выберите файл"
                    this.fileInput.files = null
                    this.file = null
                    this._snackBar.open("Выберите изображение", SNACKBAR_TYPE.ERROR)
                    if(this.props.isFileRequired) {
                        this.applyButton.setDisabled()
                    }
                }
            })
        )
    }
}