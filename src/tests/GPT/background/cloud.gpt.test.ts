import { Cloud } from "~/src/scripts/classes/background/cloud"

describe("Cloud", () => {
    describe("constructor", () => {
        test("initializes position and speed correctly", () => {
            const x = 10
            const y = 20
            const cloud = new Cloud(x, y)

            expect(cloud.isBackgroundCloud).toBe(true)
            expect(cloud.x).toEqual(x)
            expect(cloud.y).toEqual(y)
            expect(cloud.spX).toEqual(-0.02)
            expect(cloud.spY).toEqual(0)
        })
    })
})
