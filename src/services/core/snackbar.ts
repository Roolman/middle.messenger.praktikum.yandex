import { Button } from "../../components/button"
import { BUTTON_THEMES, BUTTON_TYPES } from "../../constants/button"
import { Indexed } from "../../types"
import { Observable } from "../../utils/classes/observable"

export enum SNACKBAR_TYPE {
    INFO = "INFO",
    ERROR = "ERROR",
    SUCCESS = "SUCCESS",
}

export const SNACKBAR_TYPE_CLASS: Indexed = {
    [SNACKBAR_TYPE.INFO]: "snackbar-info",
    [SNACKBAR_TYPE.ERROR]: "snackbar-error",
    [SNACKBAR_TYPE.SUCCESS]: "snackbar-success",
}

export class SnackBarService {

    private _overlayContainer: HTMLDivElement
    private _globalOverlayWrapper: HTMLDivElement
    private _overlayElementContainer: HTMLDivElement
    private _element: HTMLDivElement
    private _elementText: HTMLSpanElement
    private _elementButton: Button

    private _title: string
    private _type: string
    private _duration: number

    private _timer: any

    static __instance: SnackBarService

    constructor(rootQuery: string) {
        if (SnackBarService.__instance) {
            return SnackBarService.__instance
        }

        this._title = ''
        this._type = SNACKBAR_TYPE.INFO
        this._duration = 5000

        this._createElement()
        const root = document.querySelector(rootQuery) as HTMLElement
        root.appendChild(this._overlayContainer)

        SnackBarService.__instance = this
    }

    open(title: string, type?: string, duration?: number) {
        this._title = title
        this._type = type || this._type
        this._duration = duration || this._duration

        this._overlayContainer.appendChild(this._globalOverlayWrapper)

        // Для того, чтобы transition срабатывал
        setTimeout(
            () => {
                this._resetSnackBar()
                this._element.classList.add(SNACKBAR_TYPE_CLASS[this._type])
                this._elementText.textContent = this._title
                this._element.classList.add("snackbar-shown")
            },
            5
        )

        this._timer = setTimeout(
            () => this.close(),
            this._duration
        )
    }

    close() {
        this._element.classList.remove("snackbar-shown")
        clearTimeout(this._timer)

        this._overlayContainer.removeChild(this._globalOverlayWrapper)
    }

    private _createElement() {
        this._overlayContainer = document.createElement("div")
        this._overlayContainer.classList.add("overlay-container")

        this._globalOverlayWrapper = document.createElement("div")
        this._globalOverlayWrapper.classList.add("global-overlay")

        this._overlayElementContainer = document.createElement("div")
        this._overlayElementContainer.classList.add("snackbar-overlay-container")

        this._element = document.createElement("div")
        this._element.classList.add("snackbar")
        this._element.classList.add("snackbar-hidden")

        this._elementText = document.createElement("span")

        this._elementButton = new Button({
            title: 'ОК',
            theme: BUTTON_THEMES.PRIMARY,
            type: BUTTON_TYPES.LINK
        })

        Observable
        .fromEvent(this._elementButton.element, "click")
        .subscribe(
            () => {
                this.close()
            }
        )

        this._element.appendChild(this._elementText)
        this._element.appendChild(this._elementButton.element)
        this._overlayElementContainer.appendChild(this._element)
        this._globalOverlayWrapper.appendChild(this._overlayElementContainer)
        this._overlayContainer.appendChild(this._globalOverlayWrapper)
    }

    private _resetSnackBar() {
        this._element.classList.remove("snackbar-error")
        this._element.classList.remove("snackbar-success")
        this._element.classList.remove("snackbar-info")
    }
}