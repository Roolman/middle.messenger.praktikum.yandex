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
    timeout?: number
}

export type HTTP_REQUEST_DATA = Object | FormData

export class HttpClient {
    private _baseUrl: string
    private _xhr: XMLHttpRequest

    get xhr(): XMLHttpRequest {
        return this._xhr
    }

    constructor(baseUrl?: string) {
        this._baseUrl = baseUrl || ""
    }

    /* eslint-disable */
    get = (url: string, data?: HTTP_REQUEST_DATA, options?: HTTP_OPTIONS): Observable => this.request(
        this._baseUrl + url + queryStringify(data || {}),
        { ...options, method: HTTP_METHODS.GET },
        data,
        options?.timeout,
    )

    put = (url: string, data?: HTTP_REQUEST_DATA, options?: HTTP_OPTIONS): Observable => this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.PUT }, data, options?.timeout)

    post = (url: string, data?: HTTP_REQUEST_DATA, options?: HTTP_OPTIONS): Observable => this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.POST }, data, options?.timeout)

    delete = (url: string, data?: HTTP_REQUEST_DATA, options?: HTTP_OPTIONS): Observable => this.request(this._baseUrl + url, { ...options, method: HTTP_METHODS.DELETE }, data, options?.timeout)

    request(url: string, options: HTTP_OPTIONS, data?: HTTP_REQUEST_DATA, timeout?: number): Observable {
        return new Observable((observer: InternalObserver): Subscription => {
            this._request(url, options, data, timeout)
                .then((xhr: XMLHttpRequest) => {
                    let { response } = xhr
                    try {
                        response = JSON.parse(response)
                    } catch (err) {}
                    if (xhr.status < 400) {
                        observer.onNext(response)
                    } else {
                        observer.onError(response)
                    }
                })
                .catch((err: any) => {
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

    private _request = (url: string, options: HTTP_OPTIONS, data?: HTTP_REQUEST_DATA, timeout?: number): Promise<unknown> => new Promise((resolve, reject) => {
    /* eslint-enable */
        if (!options.method) {
            throw new Error("Укажите метод HTTP запроса")
        }

        const xhr = new XMLHttpRequest()
        this._xhr = xhr
        // Открываем запрос
        xhr.open(options.method, url)
        xhr.withCredentials = true

        // Устанавливаем headers
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                xhr.setRequestHeader(key, value.toString())
            }
        }
        if (!(data instanceof FormData)) {
            xhr.setRequestHeader("content-type", "application/json")
        }

        xhr.onload = () => {
            resolve(xhr)
        }

        xhr.onabort = reject
        xhr.onerror = reject
        xhr.ontimeout = reject

        if (options.method === HTTP_METHODS.GET || !data) {
            xhr.send()
        } else {
            let body
            if (data instanceof FormData) {
                body = data
            } else {
                body = JSON.stringify(data)
            }
            xhr.send(body)
        }

        if (timeout !== undefined) {
            setTimeout(() => {
                if (xhr.readyState !== 4) {
                    reject(xhr)
                    console.warn("Таймаут запроса ", url)
                }
            }, timeout)
        }
    })
}