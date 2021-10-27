export interface Subscription {
    unsubscribe: () => void
}

export type InternalObserver = {
    onNext: Function,
    onError: Function,
    onCompleted: Function
}

export type InternalSubscribe = (obs: InternalObserver) => Subscription

export class Observable {
    protected _subscribe: InternalSubscribe

    constructor(subcribe?: InternalSubscribe) {
        if (subcribe) {
            this._subscribe = subcribe
        }
    }

    subscribe(onNext: Function, onError?: Function, onCompleted?: Function): Subscription {
        return this._subscribe({
            onNext,
            onError: onError || (() => {}),
            onCompleted: onCompleted || (() => {}),
        })
    }

    static of(...args: any[]): Observable {
        return new Observable((observer: InternalObserver): Subscription => {
            args.forEach((val) => observer.onNext(val))
            observer.onCompleted()

            return {
                unsubscribe: () => {
                    observer = {
                        onNext: () => {},
                        onError: () => {},
                        onCompleted: () => {},
                    }
                },
            }
        })
    }

    static from(iterable: Iterable<any>): Observable {
        return new Observable((observer: InternalObserver): Subscription => {
            for (const item of iterable) {
                observer.onNext(item)
            }
            observer.onCompleted()

            return {
                unsubscribe: () => {
                    observer = {
                        onNext: () => {},
                        onError: () => {},
                        onCompleted: () => {},
                    }
                },
            }
        })
    }

    static fromEvent(source: HTMLElement, eventName: string): Observable {
        return new Observable((observer: InternalObserver): Subscription => {
            const callbackFn = (e: Event) => observer.onNext(e)

            source.addEventListener(eventName, callbackFn)

            return {
                unsubscribe: () => source.removeEventListener(eventName, callbackFn),
            }
        })
    }
}
