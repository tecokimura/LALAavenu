import { Collision } from "~/src/scripts/classes/basis/collision"

export class Display {
    static readonly SCALE = 1
    static readonly X = 0
    static readonly Y = 0
    static readonly WIDTH = 240
    static readonly HEIGHT = 240

    static get collision(): Collision {
        return new Collision(
            Display.X,
            Display.Y,
            Display.WIDTH,
            Display.HEIGHT
        )
    }
}
