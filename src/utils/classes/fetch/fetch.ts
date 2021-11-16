import { Indexed } from "../../../types"
import { queryStringify } from "../../helpers/query-stringify"
import {
    InternalObserver, Observable, Subscription,
} from "../observable"

export enum HTTP_METHODS {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
}

export type HTTP_OPTIONS = {
    method?: string,
    headers?: Indexed,
    data?: Object | FormData
    timeout?: number
}

export class HttpClient {

    private _baseUrl: string
    private _xhr: XMLHttpRequest
    private _isTimedOut: boolean

    get xhr(): XMLHttpRequest {
        return this._xhr
    }

    constructor(baseUrl?: string) {
        this._baseUrl = baseUrl || ''
    }

    get = (url: string, options?: HTTP_OPTIONS): Observable => {
        return this.request(
            this._baseUrl + url + queryStringify(options?.data || {}),
            { ...options, method: HTTP_METHODS.GET }, options?.timeout,
        )
    }

    put = (url: string, options?: HTTP_OPTIONS): Observable => {
        return this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.PUT }, options?.timeout)
    }

    post = (url: string, options?: HTTP_OPTIONS): Observable => {
        return this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.POST }, options?.timeout)
    }

    delete = (url: string, options?: HTTP_OPTIONS): Observable => {
        return this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.DELETE }, options?.timeout)
    }

    request(url: string, options: HTTP_OPTIONS, timeout?: number): Observable {
        return new Observable((observer: InternalObserver): Subscription => {
            this._request(url, options, timeout)
                .then((xhr: XMLHttpRequest) => {
                    let response = xhr.response
                    try {
                        response = JSON.parse(response)
                    }
                    catch(err) {}
                    if (xhr.status < 400) {
                        observer.onNext(response)
                    } else {
                        observer.onError(response)
                    }
                })
                .catch((err: any) => {
                    console.log(err)
                    observer.onError(err)
                })
                .finally(() => {
                    observer.onCompleted()
                })

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

    /* eslint-disable */
    private _request = (url: string, options: HTTP_OPTIONS, timeout?: number): Promise<unknown> => new Promise((resolve, reject) => {
    /* eslint-enable */
        if (!options.method) {
            throw new Error("Укажите метод HTTP запроса")
        }
        this._isTimedOut = false

        this._xhr = new XMLHttpRequest()
        // Открываем запрос
        this._xhr.open(options.method, url)
        this._xhr.withCredentials = true
        // Устанавливаем headers
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                this._xhr.setRequestHeader(key, value.toString())
            }
        }
        if(!(options?.data instanceof FormData)) {
            this._xhr.setRequestHeader("content-type", "application/json")
        }

        this._xhr.onload = () => {
            if(!this._isTimedOut) {
                resolve(this._xhr)
            }
        }

        this._xhr.onabort = reject
        this._xhr.onerror = reject
        this._xhr.ontimeout = reject

        if (options.method === HTTP_METHODS.GET || !options.data) {
            this._xhr.send()
        } else {
            let body
            if(options.data instanceof FormData) {
                body = options.data
            }
            else {
                body = JSON.stringify(options.data)
            }
            this._xhr.send(body)
        }

        if (timeout !== undefined) {
            setTimeout(() => {
                if (this._xhr.readyState !== 4) {
                    this._isTimedOut = true
                    reject(this._xhr)
                    console.warn("Таймаут запроса ", url)
                }
            }, timeout)
        }
    })
}