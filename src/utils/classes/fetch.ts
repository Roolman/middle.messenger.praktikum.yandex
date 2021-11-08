import {
    InternalObserver, Observable, Subscription,
} from "./observable"

export enum HTTP_METHODS {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE",
}

export type HTTP_OPTIONS = {
    method?: string,
    headers?: Object,
    data?: Object
    timeout?: number
}

function queryStringify(data: Object): string {
    const entriesArray = Object.entries(data)
    if (!entriesArray.length) {
        return ""
    }
    let output = "?"
    for (const [index, [key, value]] of entriesArray.entries()) {
        output += `${key}=${value.toString()}`
        if (index !== entriesArray.length - 1) output += "&"
    }
    return output
}

export class HttpClient {

    private _baseUrl: string

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
                    if (xhr.status < 400) {
                        observer.onNext(JSON.parse(xhr.response))
                    } else {
                        observer.onError(JSON.parse(xhr.response))
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

    /* eslint-disable */
    private _request = (url: string, options: HTTP_OPTIONS, timeout?: number): Promise<unknown> => new Promise((resolve, reject) => {
    /* eslint-enable */
        if (!options.method) {
            throw new Error("Укажите метод HTTP запроса")
        }

        const xhr = new XMLHttpRequest()
        // Открываем запрос
        xhr.open(options.method, url)

        // Устанавливаем headers
        // TODO: Проверить не будет ли мешать отправке файла
        xhr.setRequestHeader("content-type", "application/json")
        if (options.headers) {
            for (const [key, value] of Object.entries(options.headers)) {
                xhr.setRequestHeader(key, value.toString())
            }
        }

        xhr.onload = () => {
            resolve(xhr)
        }

        xhr.onabort = reject
        xhr.onerror = reject
        xhr.ontimeout = reject

        if (options.method === HTTP_METHODS.GET || !options.data) {
            xhr.send()
        } else {
            const body = JSON.stringify(options.data) as XMLHttpRequestBodyInit | null | undefined
            xhr.send(body)
        }

        if (timeout) {
            setTimeout(() => {
                if (xhr.readyState !== 4) {
                    reject(xhr)
                    console.warn("Таймаут запроса ", url)
                }
            }, timeout)
        }
    })
}