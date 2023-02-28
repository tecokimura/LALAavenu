import { Background } from "~/src/scripts/classes/background/base"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { Images } from "~/src/scripts/classes/images"
import { Util } from "~/src/scripts/classes/util"

export class Balloon extends Background.Base {
    get image(): number {
        throw new Error("Method not implemented.")
    }

    constructor() {
        super()
    }
}
