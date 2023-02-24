import { GameObject } from "~/src/scripts/classes/abstract/gameobject"

export abstract class BackgroundObject extends GameObject {
    abstract get imageNo(): number
    abstract isOverlap(target: GameObject): boolean

    constructor() {
        super()
        this.kind = GameObject.BACKGROUND
    }
}
