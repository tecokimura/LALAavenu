import { Collision } from "~/src/scripts/classes/basis/collision"

export class Display {
    static readonly SCALE = 1
    static readonly X = 0
    static readonly Y = 0
    static readonly WIDTH = 240
    static readonly HEIGHT = 240
    static readonly MARGIN = 50

    // 画面ぴったりではなくて多少外側に余裕を持たせる
    // 当たり判定をとって当たってなければ画面に入っていないと判別する
    static get collision(): Collision {
        return new Collision(
            Display.X - Display.MARGIN,
            Display.Y - Display.MARGIN,
            Display.WIDTH + Display.MARGIN,
            Display.HEIGHT + Display.MARGIN
        )
    }
}
