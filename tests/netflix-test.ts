import { TEST_NAME, METRICS } from "../constants";
import { expect } from "chai";
describe(TEST_NAME, () => {
    it("should go to Netflix take you to Plans section", () => {

        browser.throttleNetwork("Regular 4G")
        browser.throttleCPU(4)
    
        browser.url("https://www.netflix.com/signup")
        
        const seePlansBtn = $('.nf-btn')
        seePlansBtn.click()

        browser.pause(10000)

        const output = browser.assertPerformance(TEST_NAME, METRICS)

        expect(output.result).to.equal("pass")
    })
})