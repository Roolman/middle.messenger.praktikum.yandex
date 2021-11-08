import { RouteData } from "../../services/core/router"
import { Component } from "../../utils/classes/component"

export type ComponentMeta = {
    tagName: string
    props: ComponentProps
}

export type ProxyObject = {
    [key: string]: any
}

export type ComponentChild = {
    name: string
    component: Component
}

export type ComponentProps = {
    componentClassName?: string
    styles?: Object
    attributes?: Object
    children?: Array<ComponentChild>
    routeData?: RouteData
    [key: string]: any
}