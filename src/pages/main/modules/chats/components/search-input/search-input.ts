import { ComponentProps } from "../../../../../../types/components/component"
import { Component } from "../../../../../../utils/classes/component"
import "./search-input.scss"
import templ from "./search-input.tmpl"

export class SearchInput extends Component {
    props: ComponentProps
    input: HTMLInputElement

    constructor(props: ComponentProps) {
        super("div", props, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            componentClassName: "chats__search",
        }
    }
}