import { Random as Random } from "~/src/scripts/classes/random"

describe("GPT Utilクラス", () => {
    describe("randBetweenメソッド", () => {
        test("引数が指定されなかった場合、0〜10000のランダムな数値が返されること", () => {
            const result = Random.between()
            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(10000)
        })

        test("引数に1と3を渡した場合、1〜3のランダムな数値が返されること", () => {
            const result = Random.between(1, 3)
            expect(result).toBeGreaterThanOrEqual(1)
            expect(result).toBeLessThanOrEqual(3)
        })
    })

    describe("randRangeメソッド", () => {
        test("引数が指定されなかった場合、0〜9999のランダムな数値が返されること", () => {
            const result = Random.range()
            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(9999)
        })

        test("引数に5を渡した場合、0〜4のランダムな数値が返されること", () => {
            const result = Random.range(5)
            expect(result).toBeGreaterThanOrEqual(0)
            expect(result).toBeLessThanOrEqual(4)
        })

        test("引数に-1を渡した場合、0が返されること", () => {
            const result = Random.range(-1)
            expect(result).toBe(0)
        })
    })

    describe("randBinaryメソッド", () => {
        test("0または1のどちらかが返されること", () => {
            const result = Random.binary()
            expect([0, 1]).toContain(result)
        })
    })
})
