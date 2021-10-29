import {
    InternalObserver, InternalSubscribe, Observable, Subscription,
} from "./observable"
import { EventBus } from "./event-bus"

export class Subject<T> {
    static EVENTS = {
        NEXT: "NEXT",
        ERROR: "ERROR",
        COMPLETE: "COMPLETE",
    }

    observers: InternalObserver[]

    private _eventBus: EventBus

    constructor() {
        this.observers = []
        this._eventBus = new EventBus()
    }

    subscribe(onNext: Function, onError?: Function, onCompleted?: Function): Subscription {
        const onErrorFn = onError || (() => {})
        const onCompletedFn = onCompleted || (() => {})

        const observer: InternalObserver = {
            onNext,
            onError: onErrorFn,
            onCompleted: onCompletedFn,
        }
        this.observers.push(observer)

        return {
            unsubscribe: () => {
                this.observers = this.observers.filter((o) => o !== observer)
            },
        }
    }

    next(value?: T): void {
        for (const observer of this.observers) {
            observer.onNext(value)
        }
        this._eventBus.emit(Subject.EVENTS.NEXT, value)
    }

    error(err: any): void {
        for (const observer of this.observers) {
            observer.onError(err)
        }
        this._eventBus.emit(Subject.EVENTS.ERROR, err)
    }

    complete(): void {
        for (const observer of this.observers) {
            observer.onCompleted()
        }
        this._eventBus.emit(Subject.EVENTS.COMPLETE)
    }

    asObservable(): Observable {
        const handler: InternalSubscribe = (observer: InternalObserver): Subscription => {
            // Выполнять инструкции при срабатывании функций внутри Subject
            this._eventBus.on(Subject.EVENTS.NEXT, observer.onNext)
            this._eventBus.on(Subject.EVENTS.ERROR, observer.onError)
            this._eventBus.on(Subject.EVENTS.COMPLETE, observer.onCompleted)

            return {
                unsubscribe: () => {
                    // Отписываемся от событий
                    this._eventBus.off(Subject.EVENTS.NEXT, observer.onNext)
                    this._eventBus.off(Subject.EVENTS.ERROR, observer.onError)
                    this._eventBus.off(Subject.EVENTS.COMPLETE, observer.onCompleted)
                    // И очищаем колбэки
                    observer = {
                        onNext: () => {},
                        onError: () => {},
                        onCompleted: () => {},
                    }
                },
            }
        }
        const observable = new Observable(handler)
        return observable
    }
}