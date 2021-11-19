import { expect } from "chai"
import sinon, { SinonFakeXMLHttpRequest } from "sinon"
import regRunt from "regenerator-runtime"
import { HttpClient } from "."
import { Observable } from "../observable"
import { HTTP_METHODS } from "./fetch"

describe("HttpClient", () => {
    // NOTE: Для async в timeoute тесте
    const regeneratorRuntime = regRunt
    const TestApiUrl = "http://jsonplaceholder.typicode.com/posts"

    it("should return Observable on request", () => {
        const httpClient = new HttpClient()
        const returnedObject = httpClient.request("", {})
        expect(returnedObject).to.be.an.instanceOf(Observable)
    })

    it("should abort when method not specified", () => {
        const httpClient = new HttpClient()
        const request = (httpClient as any)._request("", {})
        expect(httpClient.xhr).to.equal(undefined)
    })

    it("should set content-type to application/json by default", () => {
        const xhr = sinon.useFakeXMLHttpRequest()
        const requests: SinonFakeXMLHttpRequest[] = []
        xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
            requests.push(request)
        }

        const httpClient = new HttpClient()
        httpClient.get("https://google.com").subscribe(() => {})

        const request = requests[0]
        const contentType = request.requestHeaders["content-type"]
        expect(contentType).to.contain("application/json")

        xhr.restore()
    })

    it("should reject on timeout", async () => {
        const httpClient = new HttpClient()
        const request = (httpClient as any)._request
        const timedOut = "timed out"
        let result

        await request(
            TestApiUrl,
            {
                method: HTTP_METHODS.GET,
            },
            0,
        )
            .then(
                (val: any) => {
                    result = "successfull xhr"
                },
            )
            .catch(
                (val: any) => {
                    result = timedOut
                },
            )

        expect(result).to.equal(timedOut)
    })

    it("should always set withCredentials", () => {
        const httpClient = new HttpClient()
        httpClient
            .get(TestApiUrl)
            .subscribe(() => {})

        expect(httpClient.xhr.withCredentials).to.equal(true)
    })
})