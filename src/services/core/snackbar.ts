import { Indexed } from "../../types"

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


class SnackBar {

    private _elementContainer: HTMLDivElement
    private _element: HTMLDivElement
    private _title: string
    private _type: string
    private _duration: number

    static __instance: SnackBar

    constructor(rootQuery: string) {
        if (SnackBar.__instance) {
            return SnackBar.__instance
        }

        this._elementContainer = document.createElement("div")
        this._elementContainer.classList.add("snackbar-container")
        this._element = document.createElement("div")
        this._element.classList.add("snackbar")
        this._element.classList.add("snackbar-hidden")

        this._title = ''
        this._type = SNACKBAR_TYPE.INFO
        this._duration = 2500

        this._elementContainer.appendChild(this._element)
        const root = document.querySelector(rootQuery) as HTMLElement
        root.appendChild(this._elementContainer)

        SnackBar.__instance = this
    }

    open(title: string, type?: string, duration?: number) {
        this._title = title
        this._type = type || this._type
        this._duration = duration || this._duration

        this._resetSnackBar()
        this._element.classList.add(SNACKBAR_TYPE_CLASS[this._type])
        this._element.textContent = this._title
        this._element.classList.remove("snackbar-hidden")
        this._element.classList.add("snackbar-shown")

        setTimeout(
            () => {
                this._element.classList.remove("snackbar-shown")
                this._element.classList.add("snackbar-hidden")
            },
            this._duration
        )
    }


    private _resetSnackBar() {
        this._element.classList.remove("snackbar-error")
        this._element.classList.remove("snackbar-success")
        this._element.classList.remove("snackbar-info")
    }
}

export default (new SnackBar("body"))