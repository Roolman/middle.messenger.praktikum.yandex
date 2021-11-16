import { expect } from "chai"

describe("Test testing", () => {

  it("should run test correctly", () => {
    const string = "Hello mocha"
    expect("Hello mocha").to.equal(string)
  })

})