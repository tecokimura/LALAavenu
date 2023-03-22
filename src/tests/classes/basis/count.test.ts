import { Count } from "~/src/scripts/classes/basis/count"

test("constructor and get", () => {
    const c = new Count()
    expect(c.value).toBe(0)
})

test("reset", () => {
    const c = new Count()
    c.reset(10)
    expect(c.value).toBe(10)
    c.reset()
    expect(c.value).toBe(0)
})

test("counting", () => {
    const c = new Count()

    for (let i = 0; i < 100; i++) {
        c.counting()
    }

    expect(c.value).toBe(100)
})
