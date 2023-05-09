import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { ImgId } from "~/src/scripts/configs/imgid"

export class Train extends Background.Base {
    // 電車の種類
    public readonly type: number = Train.Types.PINK

    static readonly Types = {
        PINK: 0,
        GREEN: 1,
        PURPLE: 2,
        BLUE: 3,
        RED: 4,
        MAX: 5,
    }

    static readonly Speeds = {
        RIGHT: 5,
        LEFT: -4,
    }

    get image(): number {
        // return Images.ID_BG_TRAIN0 + this.type
        return ImgId.ID_BG_TRAIN0 + this.type
    }

    constructor(type: number, x: number, y: number) {
        super()
        this.objKind = GameObject.BACKGROUND_TRAIN

        // 電車の色
        this.type = type
        this.pos = new Position(x, y)
    }

    direction(spx: number): this {
        this.speed = new Speed(spx, 0)
        return this
    }
    directionRight(): this {
        this.speed = new Speed(Train.Speeds.RIGHT, 0)
        return this
    }

    directionLeft(): this {
        this.speed = new Speed(Train.Speeds.LEFT, 0)
        return this
    }
}
