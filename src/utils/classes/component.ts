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
        FLOW_CDI: "flow:component-did-init",
        FLOW_CDR: "flow:component-did-render",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_RENDER: "flow:render"
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
        Once:    INIT -> FLOW_CDI 

        Repeted: FLOW_CDU -> FLOW_RENDER -> FLOW_INSERT_COMPONENTS -> FLOW_CDM
    */
    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Component.EVENTS.INIT, this._init.bind(this))
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDR, this._componentDidRender.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDI, this._componentDidInit.bind(this))

        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    private _createResources() {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
    }

    // Внутренняя инициализация
    private _init() {
        this._createResources()
        this._eventBus.emit(Component.EVENTS.FLOW_CDI)
    }

    // Компонент проинициализирован
    // Можно планировать события  
    private _componentDidInit() {
        this.componentDidInit()
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    componentDidInit() {}

    // Компонент полностью собран
    // Можно работать с элементами, DOM, событиями
    private _componentDidMount() {
        this.componentDidMount()
    }

    componentDidMount(oldProps?: Object) {}

    // Компонент был обновлен
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
    }

    get element() {
        return this._element
    }

    private _render() {
        const block = this.render()
        this._element.innerHTML = block
        this._eventBus.emit(Component.EVENTS.FLOW_CDR)
    }

    render(): string {
        return ''
    }

    // TODO: Разобраться с контекстом при вызове
    // Шаблон был отренедрен
    // Внедряем другие компоненты в element
    private _componentDidRender() {
        this.componentDidRender()
        this._eventBus.emit(Component.EVENTS.FLOW_CDM)
    }

    componentDidRender() {}

    getContent() {
        return this.element
    }

    private _makePropsProxy(props: Object) {
        return new Proxy(props, {
            get: (target: ProxyObject, prop: string) => {
                const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set: (target: ProxyObject, prop: string, value: any) => {
                target[prop] = value

                // TODO: Добавить cloneDeep
                this._eventBus.emit(Component.EVENTS.FLOW_CDU, {...target}, target)
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
        this.getContent().style.display = "flex"
    }

    hide() {
        this.getContent().style.display = "none"
    }
}