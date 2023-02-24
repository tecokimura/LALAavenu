import { Collision } from "~/src/scripts/classes/basis/collision"

test("Constructor", () => {
    const init_x: number = 10
    const init_y: number = 20
    const init_w: number = 30
    const init_h: number = 40

    const col = new Collision(init_x, init_y, init_w, init_h)

    expect(col.left).toBe(init_x)
    expect(col.right).toBe(init_x + init_w)
    expect(col.top).toBe(init_y)
    expect(col.bottom).toBe(init_y + init_h)
})

test("isOverlap is true", () => {
    var col1 = new Collision(0, 0, 5, 5)
    var col2 = new Collision(2, 2, 5, 5)
    expect(col1.isOverlap(col2)).toBe(true)

    col2 = new Collision(5, 5, 5, 5)
    expect(col1.isOverlap(col2)).toBe(true)

    col2 = new Collision(6, 6, 5, 5)
    expect(col1.isOverlap(col2)).toBe(false)

    col1 = new Collision(10, 10, 5, 5)
    expect(col1.isOverlap(col2)).toBe(true)
})

test("isOverlap is false", () => {
    const col1 = new Collision(0, 0, 5, 5)
    const col2 = new Collision(5 + 1, 5 + 1, 5, 5)
    expect(col1.isOverlap(col2)).toBe(false)

    const col3 = new Collision(0, 5 + 1, 5, 5)
    expect(col1.isOverlap(col3)).toBe(false)

    const col4 = new Collision(5 + 1, 0, 5, 5)
    expect(col1.isOverlap(col4)).toBe(false)
})
