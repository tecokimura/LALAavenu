import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { Images } from "~/src/scripts/classes/images"
import { Util } from "~/src/scripts/classes/util"

export class Train extends Background.Base {
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
        return Images.ID_BG_TRAIN0
    }

    constructor(y: number) {
        super()

        this.type = Util.rand(Train.MAX)

        if (Util.isRand50per()) {
            // 右向きに進む
            this.pos = new Position(0, y)
            this.speed = new Speed(Train.SPEED_RIGHT, 0)
        } else {
            // 左向きに進む
            this.pos = new Position(10, y)
            this.speed = new Speed(Train.SPEED_LEFT, 0)
        }
    }
}
