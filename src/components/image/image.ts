import { ComponentProps } from "../../types/components/component"
import { Component } from "../../utils/classes/component"
import templ from "./image.tmpl"
import "./image.scss"
import { Indexed } from "../../types"

type ImageProps = ComponentProps & {
    class: string
    attributes: Indexed & {
        src: string
    }
}

export class Image extends Component {
    props: ImageProps

    constructor(props: ImageProps) {
        super("img", props, templ)
    }

    setDefaultProps(props: ImageProps): ImageProps {
        return {
            ...props,
            componentClassName: props.class,
            attributes: {
                ...props.attributes,
                crossorigin: "use-credentials",
            },
        }
    }
}