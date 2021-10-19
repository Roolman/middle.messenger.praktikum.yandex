import { EventBus } from "./event-bus"

type ComponentMeta = {
    tagName: string
    props: Object
}

type ProxyObject = {
    [key: string]: any
}

export abstract class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
        FLOW_INSERT_COMPONENTS: "flow:insert-components"
    }

    props: Object

    private _eventBus: EventBus
    private _element: HTMLElement
    private _meta: ComponentMeta

    constructor(tagName: string = "div", props: Object = {}) {
        this._eventBus = new EventBus()
        this._meta = {
            tagName,
            props
        }

        const defaultProps = this.setDefaultProps(props)
        this.props = this._makePropsProxy(defaultProps)

        this._registerEvents(this._eventBus)
        this._eventBus.emit(Component.EVENTS.INIT)
    }

    protected setDefaultProps(props: Object) {
        return {
            ...props
        }
    }

    /*
        Lifecycle:
            INIT -> FLOW_RENDER -> FLOW_INSERT_COMPONENTS -> FLOW_CDM
    */
    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Component.EVENTS.INIT, this._init.bind(this))
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Component.EVENTS.FLOW_INSERT_COMPONENTS, this._insertComponents.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))

        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    private _createResources() {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
    }

    private _init() {
        this._createResources()
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    private _componentDidMount() {
        this.componentDidMount()
    }

    componentDidMount(oldProps?: Object) {}

    private _componentDidUpdate(oldProps: Object, newProps: Object) {
        this.componentDidUpdate(oldProps, newProps)
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate(oldProps: Object, newProps: Object) {
        return true
    }

    setProps = (nextProps: Object) => {
        if (!nextProps) {
            return
        }

        Object.assign(this.props, nextProps)
        this._eventBus.emit(Component.EVENTS.FLOW_CDU)
    }

    get element() {
        return this._element
    }

    private _render() {
        const block = this.render()
        this._element.innerHTML = block
        this._eventBus.emit(Component.EVENTS.FLOW_INSERT_COMPONENTS)
    }

    render(): string {
        return ''
    }

    // TODO: Разобраться с контекстом при вызове
    // Внедрить другие компоненты в element
    private _insertComponents() {
        this.insertComponents()
        this._eventBus.emit(Component.EVENTS.FLOW_CDM)
    }

    insertComponents() {}

    getContent() {
        return this.element
    }

    private _makePropsProxy(props: Object) {
        return new Proxy(props, {
            set(target: ProxyObject, prop: string, value: any) {
                target[prop] = value
                return true
            },
            deleteProperty() {
                throw new Error("Нельзя удалять свойства блока")
            }
        })
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName)
    }

    show() {
        this.getContent().style.display = "block"
    }

    hide() {
        this.getContent().style.display = "none"
    }
}