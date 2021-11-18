import { expect } from "chai"
import { JSDOM } from "jsdom"
import { ComponentProps } from "../../../types/components/component"
import { Component } from "../../../utils/classes/component"
import { Router } from "./router"

describe("Router", () => {
    const base_url = "http://localhost"

    class PageDefault extends Component {
        constructor(props?: ComponentProps) {
            super("div", props)
        }
    }
    class PageOne extends PageDefault {}
    class PageTwo extends PageDefault {}
    const DEFAULT_PAGE = "/"
    const FIRST_PAGE = "/first"
    const SECOND_PAGE = "/second"

    function initRouter(): Router {
        const router = new Router("#root")
        router.use(DEFAULT_PAGE, PageDefault)
        router.use(FIRST_PAGE, PageOne)
        router.use(SECOND_PAGE, PageTwo)
        router.start()
        return router
    }

    beforeEach(() => {
        const dom = new JSDOM("<div id=\"root\"></div>", { url: base_url })
        global.window = dom.window.document.defaultView as Window & typeof globalThis
    })

    it("should increase history length on transition", () => {
        const router = initRouter()
        router.go(FIRST_PAGE)
        router.go(SECOND_PAGE)

        expect(window.history.length).to.equal(3)
    })

    it("should create routes", () => {
        const router = initRouter()

        expect(router.routes.length).to.equal(3)
    })

    it("should be singletone", () => {
        const router = initRouter()
        const router2 = initRouter()

        expect(router).to.equal(router2)
    })
})