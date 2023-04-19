import { Random as Random } from "~/src/scripts/classes/random"

test("all function success", () => {
    const test_num = 100
    let i,
        num = 0

    for (i = 0; i < test_num; i++) {
        num = Random.between(0, 0)
        expect(num).toEqual(0)
        num = Random.between(1, 1)
        expect(num).toEqual(1)
    }

    for (i = 0; i < test_num; i++) {
        num = Random.range(10)
        expect(0 <= num && num <= 9).toEqual(true)
        num = Random.range(5)
        expect(0 <= num && num <= 5).toEqual(true)
    }

    for (i = 0; i < test_num; i++) {
        num = Random.binary()
        expect(num == 0 || num == 1).toEqual(true)
    }
})

test("Number is minus", () => {
    const test_num = 100
    let i,
        num = 0

    for (i = 0; i < test_num; i++) {
        num = Random.between(-10, -1)
        expect(-10 <= num && num <= 1).toEqual(true)
        num = Random.between(-1, -1)
        expect(num).toEqual(-1)
    }

    for (i = 0; i < test_num; i++) {
        num = Random.range(-1)
        expect(num).toEqual(0)
        num = Random.range(0)
        expect(num).toEqual(0)
    }
})

test("The left number is smaller than the right number.", () => {
    const test_num = 100
    let i,
        num = 0

    for (i = 0; i < test_num; i++) {
        num = Random.between(-1, -10)
        expect(-10 <= num && num <= 1).toEqual(true)
    }
})
