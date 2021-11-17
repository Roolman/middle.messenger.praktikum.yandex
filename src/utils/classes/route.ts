import { RouteData } from "../../services/core/router/router"
import { ComponentProps } from "../../types/components/component"
import { Guard } from "../guards/auth.guard"
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
    private _guards: Guard[]

    get pathname(): string {
        return this._pathname
    }

    constructor(pathname: string, view: Function, props: RouteProps, guards?: Guard[]) {
        this._pathname = pathname
        this._blockClass = view
        this._props = props
        this._guards = guards || []
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname
            this.render()
        }
    }

    leave() {
        if (this._block) {
            const root = window.document.querySelector(this._props.rootQuery) as HTMLElement
            if(root.contains(this._block.getContent())) {
                root.removeChild(this._block.getContent())
            }
        }
    }

    match(pathname: string) {
        return isEqual({pathname}, {pathname: this._pathname})
    }

    render(data?: RouteData) {
        // Проверяем Guards перед рендером
        let accessApproved = true
        for(let guard of this._guards) {
            if(!guard.checkAccess()) {
                accessApproved = false
                guard.actionOnNoAccess()
                break
            }
        }
        if(!accessApproved) {
            return
        }
        const props: ComponentProps = {
            routeData: data
        }
        this._block = new this._blockClass(props) as Component
        this._render(this._props.rootQuery, this._block)
    }

    private _render(query: string, block: Component) {
        const root = window.document.querySelector(query) as HTMLElement
        root.appendChild(block.getContent())
        return root
    }
}