import isEqual from "../helpers/isEqual"
import { Component } from "./component"

type RouteProps = {
    rootQuery: string
    [key: string | symbol]: any
}

export class Route {

    private _pathname: string
    private _blockClass: any
    private _block: Component
    private _props: RouteProps 

    constructor(pathname: string, view: Function, props: RouteProps) {
        this._pathname = pathname
        this._blockClass = view
        this._props = props
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave() {
        if (this._block) {
            const root = document.querySelector(this._props.rootQuery) as HTMLElement
            root.removeChild(this._block.getContent())
        }
    }

    match(pathname: string) {
        return isEqual({pathname}, {pathname: this._pathname})
    }

    render() {
        this._block = new this._blockClass() as Component
        this._render(this._props.rootQuery, this._block)
    }

    private _render(query: string, block: Component) {
        const root = document.querySelector(query) as HTMLElement
        root.appendChild(block.getContent())
        return root
    }
}