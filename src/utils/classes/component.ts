import { MutationsObservation } from "../../services/core/mutationObserver"
import { Inject } from "../decorators/inject"
import { EventBus } from "./event-bus"
import { Subscription } from "./observable"

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
        FLOW_CDUM: "flow:component-did-unmount",
        FLOW_RENDER: "flow:render"
    }

    props: Object

    @Inject(MutationsObservation)
    private _mutationsObservation: MutationsObservation
    private _eventBus: EventBus

    // Подписки, удаляющиеся при FLOW_CDUM
    protected _subscriptions: Subscription[]
    // Подписки, удаляющиеся при FLOW_CDU или при FLOW_CDUM
    // NOTE: Подумать как уйти от этой необходимости
    protected _onMountSubscriptions: Subscription[]

    private _element: HTMLElement
    private _meta: ComponentMeta

    get element() {
        return this._element
    }

    getContent() {
        return this.element
    }

    constructor(tagName: string = "div", props: Object = {}) {
        this._eventBus = new EventBus()
        this._subscriptions = []
        this._onMountSubscriptions = []
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
        Once:     INIT -> FLOW_CDI 
        Repetead: FLOW_CDU -> FLOW_RENDER -> FLOW_CDR -> FLOW_CDM
        Once:     -> FLOW_CDUM
    */
    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Component.EVENTS.INIT, this._init.bind(this))
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDR, this._componentDidRender.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDI, this._componentDidInit.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDUM, this._componentDidUnmount.bind(this))
        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    private _unregisterEvents(eventBus: EventBus) {
        eventBus.off(Component.EVENTS.INIT, this._init.bind(this))
        eventBus.off(Component.EVENTS.FLOW_RENDER, this._render.bind(this))
        eventBus.off(Component.EVENTS.FLOW_CDR, this._componentDidRender.bind(this))
        eventBus.off(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
        eventBus.off(Component.EVENTS.FLOW_CDI, this._componentDidInit.bind(this))
        eventBus.off(Component.EVENTS.FLOW_CDUM, this._componentDidUnmount.bind(this))
        eventBus.off(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    }

    private _createResources() {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
    }

    // Внутренняя инициализация
    private _init() {
        this._createResources()
        this._subscriptions.push(this._mutationsObservation.mutationsObservable.subscribe(
            (mutationRecords: MutationRecord[]) => {
                if(!document.body.contains(this._element)) {
                    this._eventBus.emit(Component.EVENTS.FLOW_CDUM)
                }
            }
        ))
        this._eventBus.emit(Component.EVENTS.FLOW_CDI)
    }

    // Компонент проинициализирован
    // Можно планировать события  
    private _componentDidInit() {
        this.componentDidInit()
        this._eventBus.emit(Component.EVENTS.FLOW_CDU)
    }

    componentDidInit() {}
    
    // Компонент был обновлен
    private _componentDidUpdate(oldProps: Object, newProps: Object) {
        this.componentDidUpdate(oldProps, newProps)
        for(let sub of this._onMountSubscriptions) {
            sub.unsubscribe()
        }
        this._onMountSubscriptions = []
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate(oldProps: Object, newProps: Object) {
        return true
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

    // Компонент полностью собран
    // Можно работать с элементами, DOM, событиями
    private _componentDidMount() {
        this.componentDidMount()
    }

    componentDidMount(oldProps?: Object) {}

    // Компонент исчез из дерева
    // Можно закрыть подпикси. Очистить все данные
    private _componentDidUnmount() {
        this.componentDidUnmount()
        // Удаляем все подписки
        for(let sub of this._subscriptions) {
            sub.unsubscribe()
        }
        for(let sub of this._onMountSubscriptions) {
            sub.unsubscribe()
        }
        // Удаляем события из EventBus
        this._unregisterEvents(this._eventBus);
        // Удаляем все свойства
        // TODO: Придумать другой метод
        // NOTE: Возможно это вообще лишнее
        for(let [key, value] of Object.entries(this)) {
            (this as any)[key] = null;
        }
    }

    componentDidUnmount() {}

    // TODO: Додумать обработку утечек
    setProps = (nextProps: Object) => {
        try{
            if (!nextProps) {
                return
            }

            Object.assign(this.props, nextProps)
            this._eventBus.emit(Component.EVENTS.FLOW_CDU)
        }
        catch(err) {
            console.error(err)
            throw new Error(
                `
                Ошибка установки параметров компоненту.
                Убедитесь, что все подписки были добавлены в this._subscriptions !
                `
            )
        }
    }

    private _makePropsProxy(props: Object) {
        return new Proxy(props, {
            get: (target: ProxyObject, prop: string) => {
                const value = target[prop]
                return typeof value === "function" ? value.bind(target) : value
            },
            set: (target: ProxyObject, prop: string, value: any) => {
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
        this.getContent().style.display = "flex"
    }

    hide() {
        this.getContent().style.display = "none"
    }
}