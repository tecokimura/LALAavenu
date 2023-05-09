import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"

// 動かない絵を固定位置で描画するもの
export class Scenery extends Background.Base {
    get image(): number {
        throw new Error("Method not implemented.")
    }

    constructor(imgNo: number, x: number, y: number) {
        super()

        this.pos = new Position(x, y)
    }
}
