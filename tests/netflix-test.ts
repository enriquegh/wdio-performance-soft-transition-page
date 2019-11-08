import { TEST_NAME, METRICS } from "../constants";
import { expect } from "chai";
describe("Performance test", () => {
    it("should go to Netflix take you to Plans section", () => {
    
        browser.url("https://www.netflix.com/signup")
        
        const seePlansBtn = $('.nf-btn')
        seePlansBtn.click()

        browser.pause(10000)

        const output = browser.assertPerformance(TEST_NAME, METRICS)

        expect(output.result).to.equal("pass")
    })
})