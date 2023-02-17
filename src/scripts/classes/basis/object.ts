import { Position  } from "src/scripts/classes/basis/position"
import { Speed  } from "src/scripts/classes/basis/speed"
import { Size  } from "src/scripts/classes/basis/size"
import { Collision  } from "src/scripts/classes/basis/collision"

export class Object {
    protected pos : Position = new Position()
    protected sp :Speed = new Speed()
    protected size :Size = new Size()
    protected collision : Collision = new Collision()
}
