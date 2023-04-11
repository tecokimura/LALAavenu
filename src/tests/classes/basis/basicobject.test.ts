import { BasicObject } from "~/src/scripts/classes/basis/basicobject"

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new BasicObject()

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
    expect(obj.spX).toBe(0)
    expect(obj.spY).toBe(0)
})

test("move", () => {
    const obj = new BasicObject()

    obj.move()

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
    expect(obj.spX).toBe(0)
    expect(obj.spX).toBe(0)
})

test("isOverlap do not set collision", () => {
    //
    const obj1 = new BasicObject()
    const obj2 = new BasicObject()

    obj1.move()
    obj2.move()

    expect(obj1.isOverlap(obj2)).toBe(false)
})

test("isOverlap set collision", () => {
    //
    // true
    let obj1 = new BasicObject().setCollision(0, 0, 10, 10)
    let obj2 = new BasicObject().setCollision(5, 5, 10, 10)
    expect(obj1.isOverlap(obj2)).toBe(true)

    obj1 = new BasicObject().setCollision(0, 0, 10, 10)
    obj2 = new BasicObject().setCollision(10, 10, 10, 10)
    expect(obj1.isOverlap(obj2)).toBe(true)

    //
    // false
    obj1 = new BasicObject().setCollision(0, 0, 0, 0)
    obj2 = new BasicObject().setCollision(10, 10, 10, 10)
    expect(obj1.isOverlap(obj2)).toBe(false)

    obj1 = new BasicObject().setCollision(0, 0, 10, 10)
    obj2 = new BasicObject().setCollision(10, 10, 0, 0)
    expect(obj1.isOverlap(obj2)).toBe(false)

    obj1 = new BasicObject().setCollision(0, 0, 10, 10)
    obj2 = new BasicObject().setCollision(11, 11, 10, 10)
    expect(obj1.isOverlap(obj2)).toBe(false)
})
