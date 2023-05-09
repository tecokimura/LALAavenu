import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { ImgId } from "~/src/scripts/configs/imgid"

export class Plane extends Background.Base {
    // 電車の種類
    static readonly SPEED_RIGHT: number = 0.5
    static readonly SPEED_LEFT: number = -0.4

    get image(): number {
        // return Images.ID_BG_TRAIN0 + this.type
        return ImgId.ID_BG_PLANE
    }

    constructor(x: number, y: number) {
        super()
        this.objKind = GameObject.BACKGROUND_PLANE

        // 電車の色
        this.pos = new Position(x, y)
    }

    direction(spx: number): Plane {
        this.speed = new Speed(spx, 0)
        return this
    }
    directionRight(): Plane {
        this.speed = new Speed(Plane.SPEED_RIGHT, 0)
        return this
    }

    directionLeft(): Plane {
        this.speed = new Speed(Plane.SPEED_LEFT, 0)
        return this
    }
}
