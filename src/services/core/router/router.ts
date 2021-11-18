import { Route } from "../../../utils/classes/route"
import { Guard } from "../../../utils/guards/auth.guard"

export type RouteData = {
    data: string
}

type PathParams = {
    path: string
    params: RouteData
}

export class Router {
    routes: Route[]
    history: History

    private _currentRoute: Route
    private _rootQuery: string
    private _defaultRoute: string

    static __instance: Router

    get currentRoute(): Route {
        return this._currentRoute
    }

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance
        }

        this.routes = []
        this.history = window.history
        this._rootQuery = rootQuery
        this._defaultRoute = "/"

        Router.__instance = this
    }

    use(pathname: string, block: Function, guards?: Guard[]) {
        const route = new Route(pathname, block, { rootQuery: this._rootQuery }, guards)
        // Если путь существует, то заменяем
        const pathNames = this.routes.map((x) => x.pathname)
        if (pathNames.includes(pathname)) {
            this.routes = this.routes.filter((x) => x.pathname !== pathname)
        }
        this.routes.push(route)
        return this
    }

    start() {
        // Реагируем на изменения в адресной строке и вызываем перерисовку
        window.onpopstate = (event) => {
            const location = (event.currentTarget as any).location.pathname
            const { path, params } = this._getPathParams(location)
            this._onRoute(path, params)
        }

        const { path, params } = this._getPathParams(window.location.pathname)
        this._onRoute(path, params)
    }

    private _onRoute(pathname: string, data: RouteData) {
        const route = this.getRoute(pathname)

        if (this._currentRoute) {
            this._currentRoute.leave()
        }

        if (route) {
            this._currentRoute = route
            route.render(data)
        } else if (pathname !== "/") {
            this.go(this._defaultRoute)
        } else {
            throw Error("Задайте страницу для дефолтного пути")
        }
    }

    go(fullPathName: string) {
        const { path, params } = this._getPathParams(fullPathName)
        this.history.pushState({ path, params }, "", fullPathName)
        this._onRoute(path, params)
    }

    back() {
        this.history.back()
    }

    forward() {
        this.history.forward()
    }

    getRoute(pathname: string): Route | undefined {
        return this.routes.find((route) => route.match(pathname))
    }

    setDefault(defaulteRoute: string) {
        this._defaultRoute = defaulteRoute
    }

    private _getPathParams(pathname: string): PathParams {
        const [_, pathName, param] = pathname.split("/")
        const path = `/${pathName}`
        const params: RouteData = { data: param }
        return {
            path,
            params,
        }
    }
}