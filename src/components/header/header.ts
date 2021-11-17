import { ComponentProps } from "../../types/components/component"
import { Component } from "../../utils/classes/component"
import "./header.scss"
import templ from "./header.tmpl"

export class Header extends Component {

    constructor() {
        super("header", {}, templ)
    }

    setDefaultProps(props: ComponentProps): ComponentProps {
        return {
            ...props,
            title: "Fast messenger",
            componentClassName: "header",
            children: [
            ],
        }
    }
}