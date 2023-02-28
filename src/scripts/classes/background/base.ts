import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { ImageGameObject } from "~/src/scripts/classes/abstract/imagegameobject"

export namespace Background {
    export abstract class Base extends ImageGameObject {
        constructor() {
            super()
            this.objKind = GameObject.BACKGROUND
        }
    }
}
