import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"

export class Train extends Background.Base {
    // 電車の種類
    public readonly type: number = Train.PINK
    static readonly PINK: number = 0
    static readonly GREEN: number = 1
    static readonly PURPLE: number = 2
    static readonly BLUE: number = 3
    static readonly RED: number = 4
    static readonly MAX: number = 5

    static readonly SPEED_RIGHT: number = 5
    static readonly SPEED_LEFT: number = -4

    get image(): number {
        // return Images.ID_BG_TRAIN0 + this.type
        return this.offsetImageNo + this.type
    }

    constructor(type: number, x: number, y: number) {
        super()

        // 電車の色
        this.type = type
        this.pos = new Position(x, y)
    }

    directionRight(): Train {
        this.speed = new Speed(Train.SPEED_RIGHT, 0)
        return this
    }

    directionLeft(): Train {
        this.speed = new Speed(Train.SPEED_LEFT, 0)
        return this
    }
}
