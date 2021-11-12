import { RouteData } from "../../services/core/router"
import { Component } from "../../utils/classes/component"

export type ComponentMeta = {
    tagName: string
    props: ComponentProps
}

export type ProxyObject = {
    [key: string]: any
}

export type ComponentChild<T> = {
    name: string
    component: T
}

export type ComponentProps = {
    componentClassName?: string
    styles?: Object
    attributes?: Object
    children?: Array<ComponentChild<Component>>
    routeData?: RouteData
    [key: string]: any
}