import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { ImageGameObject } from "~/src/scripts/classes/abstract/imagegameobject"

export namespace Background {
    export abstract class Base extends ImageGameObject {
        // TODO: これ必要？
        constructor() {
            super()
            this.objKind = GameObject.BACKGROUND_TRAIN
        }
    }
}
