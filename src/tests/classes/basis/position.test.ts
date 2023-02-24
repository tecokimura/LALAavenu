import { Position } from "~/src/scripts/classes/basis/position"

test("constructor", () => {
    const pos = new Position(10, 20)
    expect(pos.getX()).toBe(10)
    expect(pos.getY()).toBe(20)
})

test("reset", () => {
    const pos = new Position(11, 22)
    expect(pos.getX()).toBe(11)
    expect(pos.getY()).toBe(22)

    pos.reset()

    expect(pos.getX()).toBe(0)
    expect(pos.getY()).toBe(0)

    pos.resetX(1)
    expect(pos.getX()).toBe(1)
    expect(pos.getY()).toBe(0)
    pos.resetY(10)
    expect(pos.getX()).toBe(1)
    expect(pos.getY()).toBe(10)
})

test("move", () => {
    const pos = new Position(10, 20)

    pos.moveX(1)
    pos.moveY(2)

    expect(pos.getX()).toBe(11)
    expect(pos.getY()).toBe(22)

    pos.moveX(-1)
    pos.moveY(-2)

    expect(pos.getX()).toBe(10)
    expect(pos.getY()).toBe(20)
})
