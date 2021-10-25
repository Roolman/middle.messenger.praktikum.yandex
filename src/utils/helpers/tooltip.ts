type TooltipListener = {
    fn: Function, 
    element: HTMLElement, 
    eventName: string
}

export class Tooltip {

    el: HTMLDivElement
    listeners: Array<TooltipListener>

    constructor() {
        this.el = document.createElement('div')
        this.el.style.position = 'absolute'

        this.el.classList.add(this.name)
        document.body.appendChild(this.el)

        this.onHide = this.onHide.bind(this)

        this.listeners = []
    }

    get name() {
        return 'tooltip'
    }

    get indent() {
        return 5
    }

    delegate(eventName: string, element: HTMLElement, cssSelector: string, callback: Function) {
        const fn = (event: Event) => {
            const target = event.target as HTMLElement
            if(!target) return
            if (target.matches(cssSelector)) {
                return
            }

            callback(event)
        }

        element.addEventListener(eventName, fn)
        this.listeners.push({ fn, element, eventName })

        return this
    }

    onShow = (event: MouseEvent) => {
        if(this.el.classList.contains('tooltip_active')) return
        const target = event.target as HTMLElement
        if(!target) return
        const dataset = (target as any).dataset
        if(!dataset) return
        const text = dataset.tooltip
        this.el.textContent = text
        const {x, y, height} = target.getBoundingClientRect()
        const shouldShowUnderElement = y <= (screen.height / 2)
        this.el.style.left = `${x > 5 ? x : 5}px`
        this.el.style.top = `${shouldShowUnderElement ? 
                                y + height + this.indent :
                                y - 30 - this.indent}px` // 25 - высота tooltip
        this.el.classList.add('tooltip_active')
    }

    onHide() {
        this.el.classList.remove('tooltip_active')
    }

    attach(root: HTMLElement) {
        this
            .delegate('mouseover', root, '[data-tooltip]', this.onShow)
            .delegate('mouseout', root, '[data-tooltip]', this.onHide);
    }

    detach() {
        for(let l of this.listeners) {
            l.element.removeEventListener(l.eventName, l.fn as any)
        }
    }
}
