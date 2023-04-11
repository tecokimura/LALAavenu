import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { ImgId } from "~/src/scripts/configs/imgid"

export class Balloon extends Background.Base {
    static readonly SPEED_X: number = 1
    static readonly SPEED_Y: number = 0

    get image(): number {
        return ImgId.ID_BG_BALLOON
    }

    constructor(x: number, y: number) {
        super()
        this.pos = new Position(x, y)
        this.speed = new Speed(Balloon.SPEED_X, Balloon.SPEED_Y)
    }

    public harfMove(random: number = 0) {
        if (random % 2 == 0) {
            super.move()
        }
    }
}
