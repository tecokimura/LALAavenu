import { Count } from "~/src/scripts/classes/basis/count"

test("constructor and get", () => {
    const c = new Count()
    expect(c.count()).toBe(0)
})

test("reset", () => {
    const c = new Count()
    c.reset(10)
    expect(c.count()).toBe(10)
    c.reset()
    expect(c.count()).toBe(0)
})

test("counting", () => {
    const c = new Count()

    for (let i = 0; i < 100; i++) {
        c.counting()
    }

    expect(c.count()).toBe(100)
})
