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

    componentDidRender() {
        this.hide()
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable
            .fromEvent(this.applyButton.element, "click")
            .subscribe(() => {
                this.props.onApplyButton()
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
                }
                else {
                    this.selectFileLabel.textContent = "Выберите файл"
                    this.fileInput.files = null
                    this.file = null
                    this._snackBar.open("Выберите изображение", SNACKBAR_TYPE.ERROR)
                }
            })
        )
    }
}