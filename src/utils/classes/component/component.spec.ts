import { expect } from "chai"
import { ComponentProps } from "../../../types/components/component"
import { Observable } from "../observable"
import { Component } from "./component"

// NOTE: Decorators don't work
describe("Component base class", () => {
    it("should have DIV tag by default", () => {
        class RealComponent extends Component {}
        const component = new RealComponent()
        expect(component.element.tagName).to.equal("DIV")
    })

    it("should set props correctly", () => {
        class RealComponent extends Component {
            constructor(props?: ComponentProps) {
                super("div", props)
            }
        }
        const testProps: ComponentProps = {
            disabled: true,
            data: [1, 2, 3],
            child: {
                value: "any",
            },
        }
        const component = new RealComponent({
            disabled: true,
            data: [1, 2, 3],
            child: {
                value: "any",
            },
        })
        expect(component.props).to.eql(testProps)
    })

    it("provides access to element using element ref", () => {
        class RealComponent extends Component {
            testSpan: HTMLSpanElement

            constructor(props: ComponentProps, templ: string) {
                super("div", props, templ)
            }
        }
        const textContent = "Test"
        const component = new RealComponent({}, `<span data-ref="testSpan">${textContent}</span>`)

        expect(component.testSpan.textContent).to.equal(textContent)
    })

    it("creates child component", () => {
        class ChildComponent extends Component {}
        const testChild = new ChildComponent()

        class RealComponent extends Component {
            testChild: ChildComponent

            constructor(props: ComponentProps, templ: string) {
                super("div", props, templ)
            }

            setDefaultProps(props: ComponentProps): ComponentProps {
                return {
                    ...props,
                    children: [
                        {
                            name: "testChild",
                            component: testChild,
                        },
                    ],
                }
            }
        }

        const component = new RealComponent({}, `<div data-component="testChild"></div>`)

        expect(component.testChild).to.equal(testChild)
    })

    it("unsubcsribes on destroy", () => {
        class RealComponent extends Component {
            componentDidInit() {
                this._subscriptions.push(
                    Observable
                        .of([1, 2, 3])
                        .subscribe(() => {}),
                )
            }

            componentDidMount() {
                this._onMountSubscriptions.push(
                    Observable
                        .of([1, 2, 3])
                        .subscribe(() => {}),
                )
            }
        }
        const component = new RealComponent()

        component.destroy()

        const subs = (component as any)._subscriptions
        const oSubs = (component as any)._onMountSubscriptions
        const subsLength = subs.length + oSubs.length

        expect(subsLength).to.equal(0)
    })
})