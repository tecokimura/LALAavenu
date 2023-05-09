import { ImageGameObject } from "~/src/scripts/classes/abstract/imagegameobject"
import { Collision } from "~/src/scripts/classes/basis/collision"
import { Position } from "~/src/scripts/classes/basis/position"
import { Size } from "~/src/scripts/classes/basis/size"
import { Speed } from "~/src/scripts/classes/basis/speed"

// TODO:定数使った方がよさそう
class Test_ImageGameObject extends ImageGameObject {
    constructor() {
        super()
        this.pos = new Position(10, 20)
        this.speed = new Speed(1, 4)
        this.size = new Size(20, 20)
        this.collision = new Collision(0, 0, 10, 10)
    }

    get image(): number {
        return 0
    }

    get x(): number {
        return this.pos.getX()
    }
    get y(): number {
        return this.pos.getY()
    }
    get spX(): number {
        return this.speed.getX()
    }
    get spY(): number {
        return this.speed.getY()
    }
    get imageNo(): number {
        return 0
    }
}

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Test_ImageGameObject()

    expect(obj.x).toBe(10)
    expect(obj.y).toBe(20)
    expect(obj.spX).toBe(1)
    expect(obj.spY).toBe(4)

    expect(obj.image).toBe(0)
})
