import Handlebars from "handlebars"
import './checkbox.scss'
import templ from './checkbox.tmpl'

export class Checkbox {

    template
    //
    id
    name
    label

    constructor(id, name, label) {
        this.id = id
        this.name = name
        this.label = label
        this.template = this.render()
    }

    render() {
        const template = Handlebars.compile(templ)
        const result = template({
            id: this.id,
            name: this.name,
            label: this.label
        })
        return result
    }

}