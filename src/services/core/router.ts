import { Route } from "../../utils/classes/route"

class Router {

    routes: Route[]
    history: History

    private _currentRoute: Route
    private _rootQuery: string

    static __instance: Router

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance
        }

        this.routes = [];
        this.history = window.history
        this._rootQuery = rootQuery

        Router.__instance = this
    }

    use(pathname: string, block: Function) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery})
        this.routes.push(route)
        return this
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = event => {
            const location = (event.currentTarget as any).location.pathname
            this._onRoute(location)
        }

        this._onRoute(window.location.pathname)
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname)

        if (this._currentRoute) {
            this._currentRoute.leave()
        }

        // TODO: Добавить Guards
        if(route) {
            this._currentRoute = route
            route.render()
        }
        else {
            this.go('/')
        }
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname)
        this._onRoute(pathname)
    }

    back() {
        this.history.back()
    }

    forward() {
        this.history.forward()
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname))
    }
}

export default (new Router("#root"))