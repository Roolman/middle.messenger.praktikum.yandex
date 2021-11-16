import * as Handlebars from "handlebars"
import { MutationsObservation } from "../../services/core/mutationObserver"
import { ComponentMeta, ComponentProps, ProxyObject } from "../../types/components/component"
import { Inject } from "../decorators/inject"
import { EventBus } from "./event-bus"
import { Subscription } from "./observable"

export abstract class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDI: "flow:component-did-init",
        FLOW_CDR: "flow:component-did-render",
        FLOW_CDU: "flow:component-did-update",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDUM: "flow:component-did-unmount",
        FLOW_RENDER: "flow:render",
    }

    props: ComponentProps

    @Inject(MutationsObservation)
    private _mutationsObservation: MutationsObservation
    private _eventBus: EventBus

    // Подписки, удаляющиеся при FLOW_CDUM
    protected _subscriptions: Subscription[]
    // Подписки, удаляющиеся при FLOW_CDU или при FLOW_CDUM
    // NOTE: Подумать как уйти от этой необходимости
    // NOTE: Обернуть все элементы, требующие подписки в Component
    protected _onMountSubscriptions: Subscription[]

    private _element: HTMLElement
    private _meta: ComponentMeta
    private _template: string
    // Вкл/выкл удаление подписок при unmount
    private _isDefaultDestroyLogicEnabled: boolean

    get element() {
        return this._element
    }

    getContent() {
        return this.element
    }

    constructor(tagName: string = "div", props: ComponentProps = {}, template: string = "") {
        this._eventBus = new EventBus()
        this._subscriptions = []
        this._onMountSubscriptions = []
        this._meta = {
            tagName,
            props,
        }
        this._template = template

        const defaultProps = this.setDefaultProps(props)
        this.props = this._makePropsProxy(defaultProps)

        this._registerEvents(this._eventBus)
        this._eventBus.emit(Component.EVENTS.INIT)
    }

    protected setDefaultProps(props: ComponentProps) {
        return {
            ...props,
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

    private _createResources() {
        const { tagName } = this._meta
        this._element = this._createDocumentElement(tagName)
    }

    // Внутренняя инициализация
    private _init() {
        this._isDefaultDestroyLogicEnabled = true
        this._createResources()
        // Компонент должен быть удален если его нет в дереве
        this._subscriptions.push(this._mutationsObservation.mutationsObservable.subscribe(
            () => {
                if (!document.body.contains(this._element) && this._isDefaultDestroyLogicEnabled) {
                    this._eventBus.emit(Component.EVENTS.FLOW_CDUM)
                }
            },
        ))
        // Отключаем дефолтное уничтожение при отсутствии в дереве для детей
        for (const child of this.props.children || []) {
            child.component.disableDefaultDestroyLogic()
        }
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
    private _componentDidUpdate() {
        // oldProps: ComponentProps, newProps: ComponentProps
        this.componentDidUpdate() // oldProps, newProps
        for (const sub of this._onMountSubscriptions) {
            sub.unsubscribe()
        }
        this._onMountSubscriptions = []
        this._eventBus.emit(Component.EVENTS.FLOW_RENDER)
    }

    componentDidUpdate() {
        // oldProps: ComponentProps, newProps: ComponentProps
        return true
    }

    private _render() {
        const block = this.render()
        this._element.innerHTML = block
        // Добавляем класс для элемента компонента (если есть)
        if (this.props.componentClassName) {
            this._element.classList.add(this.props.componentClassName)
        }
        // Устанавливаем стили
        const styles = Object.entries(this.props.styles || {})
        for (const [styleName, value] of styles) {
            try {
                this._element.style[styleName as any] = value
            } catch (err: any) {
                throw new Error(`Ошибка установки стиля ${styleName} со значением ${value}`)
            }
        }
        // Устанавливаем аттрибуты
        const attributes = Object.entries(this.props.attributes || {})
        for (const [attributeName, value] of attributes) {
            try {
                this._element.setAttribute(attributeName, value)
            } catch (err: any) {
                throw new Error(`Ошибка установки аттрибута ${attributeName} со значением ${value}`)
            }
        }
        // Получаем ссылки на компоненты
        this._getComponentChildrenReferences()
        // Заменяем заглушки на дочерние компоненты
        this._replaceComponentChildren()
        // Вызываем FLOW_CDR
        this._eventBus.emit(Component.EVENTS.FLOW_CDR)
    }

    render(): string {
        const template = Handlebars.compile(this._template)
        const result = template(this.props)
        return result
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

    componentDidMount() {}

    // Компонент исчез из дерева
    // Нужно закрыть подпикси
    private _componentDidUnmount() {
        this.componentDidUnmount()
        // Удаляем все подписки
        for (const sub of this._subscriptions) {
            sub.unsubscribe()
        }
        for (const sub of this._onMountSubscriptions) {
            sub.unsubscribe()
        }
        // Уничтожаем подписки детей
        for (const child of this.props.children || []) {
            child.component.destroy()
        }
    }

    componentDidUnmount() {}

    // TODO: Додумать обработку утечек
    setProps = (nextProps: ComponentProps) => {
        try {
            if (!nextProps) {
                return
            }

            Object.assign(this.props, nextProps)
            this._eventBus.emit(Component.EVENTS.FLOW_CDU)
        } catch (err) {
            console.error(err)
            throw new Error(
                `
                Ошибка установки параметров компоненту.
                Убедитесь, что все подписки были добавлены в this._subscriptions !
                `,
            )
        }
    }

    private _makePropsProxy(props: ComponentProps) {
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
            },
        })
    }

    private _createDocumentElement(tagName: string): HTMLElement {
        return document.createElement(tagName)
    }

    // Получить ссылки на дочерние компоненты внутри
    private _getComponentChildrenReferences() {
        const childrenComponents = this._element.querySelectorAll("[data-ref]")
        for (const child of Array.from(childrenComponents)) {
            const childName = child.getAttribute("data-ref")
            if (childName) {
                (this as any)[childName] = child
            }
        }
    }

    // Заменяем заглушки на дочерние компоненты и сохраняем ссылку на компонент
    private _replaceComponentChildren() {
        if (this.props.children === undefined || !this.props.children.length) {
            return
        }
        const childrenComponents = this._element.querySelectorAll("[data-component]")
        for (const child of Array.from(childrenComponents)) {
            const childName = child.getAttribute("data-component") as string
            const parentNode = child.parentNode as ParentNode

            const componentChild = this.props.children.find((x) => x.name === childName)
            if (!componentChild) {
                throw new Error(`Не существует дочернего компонента с именем ${childName}`)
            }
            // Заменяем заглушку на компонент
            parentNode.replaceChild(componentChild.component.element, child)
        }
        // Отдельно сохраняем компоненты (даже если они не отрендерелись)
        for (const componentChild of this.props.children) {
            // Сохраняем ссылку
            (this as any)[componentChild.name] = componentChild.component
        }
    }

    disableDefaultDestroyLogic() {
        this._isDefaultDestroyLogicEnabled = false
    }

    enableDefaultDestroyLogic() {
        this._isDefaultDestroyLogicEnabled = true
    }

    show() {
        this.getContent().style.display = "flex"
    }

    hide() {
        this.getContent().style.display = "none"
    }

    setDisabled() {
        this.getContent().setAttribute("disabled", "")
    }

    setEnabled() {
        this.getContent().removeAttribute("disabled")
    }

    setVisible() {
        this.getContent().style.visibility = "visible"
    }

    setInvisible() {
        this.getContent().style.visibility = "hidden"
    }

    destroy() {
        this._componentDidUnmount()
    }
}