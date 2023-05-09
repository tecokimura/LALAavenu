import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { ImgId } from "~/src/scripts/configs/imgid"

export class Cloud extends Background.Base {
    static readonly SPEED_X: number = -0.02
    static readonly SPEED_Y: number = 0

    get image(): number {
        return ImgId.ID_BG_CLOUD
    }

    constructor(x: number, y: number) {
        super()
        this.objKind = GameObject.BACKGROUND_CLOUD
        this.pos = new Position(x, y)
        this.speed = new Speed(Cloud.SPEED_X, Cloud.SPEED_Y)
    }

    setPosX(): Cloud {
        return this
    }
}
