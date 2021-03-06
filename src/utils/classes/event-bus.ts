export class EventBus {
    private _listeners: Map<string, Array<Function>>

    constructor() {
        this._listeners = new Map()
    }

    on(event: string, callback: Function): void {
        const events = this._listeners.get(event) || []
        events.push(callback)
        this._listeners.set(event, events)
    }

    off(event: string, callback: Function): void {
        const events = this._listeners.get(event)

        if (!events) {
            return
        }

        this._listeners.set(event, events.filter((listener) => listener !== callback))
    }

    emit(event: string, ...args: unknown[]) {
        const events = this._listeners.get(event)

        if (!events) {
            return
        }
        events.forEach((listener) => {
            listener(...args)
        })
    }
}