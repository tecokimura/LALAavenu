import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { Size } from "~/src/scripts/classes/basis/size"
import { Collision } from "~/src/scripts/classes/basis/collision"

export class BasicObject {
    // TODO: Please consider whether you prefer "public" or "protected".
    protected pos: Position = new Position()
    protected speed: Speed = new Speed()
    protected size: Size = new Size()
    protected collision: Collision = new Collision()

    public move() {
        this.pos.moveX(this.speed.getX())
        this.pos.moveY(this.speed.getY())
    }

    public isOverlap(target: BasicObject): boolean {
        return this.hitRect().isOverlap(target.hitRect())
    }

    get x(): number {
        return this.pos.getX()
    }
    get y(): number {
        return this.pos.getY()
    }
    get spX(): number {
        return this.speed.getX()
    }
    get spY(): number {
        return this.speed.getY()
    }

    // 現在位置と合わせた当たり判定区画を作成
    hitRect(): Collision {
        return new Collision(
            this.x + this.collision.left,
            this.y + this.collision.top,
            this.collision.right,
            this.collision.bottom
        )
    }
}
