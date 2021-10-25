import * as Handlebars from "handlebars"
import './Change-avatar.scss'
import templ from './Change-avatar.tmpl'

import { Button } from "../../../../components/Button/index"
import { Component } from "../../../../utils/classes/component"
import { Observable } from "../../../../utils/classes/observable"

export class ChangeAvatar extends Component {

    // Аргументы входные
    applyButton: Button

    constructor() {
        super("div")
    }

    render() {
        this.element.classList.add("change-avatar")
        this.hide()
        const template = Handlebars.compile(templ)
        const result = template({})
        return result
    }

    componentDidRender() {
        this.applyButton = new Button({title: "Изменить"})
        const block = this.element.getElementsByClassName('change-avatar__elements')[0] as HTMLElement
        if(!block) {
            throw new Error("Ошибка рендеринга ChangeAvatar")
        }
        block.appendChild(this.applyButton.element)
    }

    componentDidMount() {
        this._onMountSubscriptions.push(
            Observable.fromEvent(this.applyButton.element, 'click')
                        .subscribe(() => this.hide())   
        )
    }

}