import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { ImgId } from "~/src/scripts/configs/imgid"

export class Girl extends Background.Base {
    static readonly SPEED_X = 0.02
    static readonly SPEED_Y = -0.3

    readonly image = ImgId.ID_BG_BALLOON_GIRL

    constructor(x: number, y: number) {
        super()
        this.objKind = GameObject.BACKGROUND_GIRL
        this.pos = new Position(x, y)
        this.speed = new Speed(Girl.SPEED_X, Girl.SPEED_Y)
    }
}
