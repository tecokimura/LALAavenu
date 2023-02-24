export class Collision {
    private offset_x: number = 0
    private offset_y: number = 0
    private width: number = 0
    private height: number = 0

    constructor(x: number = 0, y: number = 0, w: number = 0, h: number = 0) {
        this.reset(x, y, w, h)
    }

    reset(x: number, y: number, w: number, h: number) {
        this.offset_x = x
        this.offset_y = y
        this.width = w
        this.height = h
    }

    get left(): number {
        return this.offset_x
    }
    get top(): number {
        return this.offset_y
    }
    get right(): number {
        return this.offset_x + this.width
    }
    get bottom(): number {
        return this.offset_y + this.height
    }

    // MEMO: 各クラスで位置などを考慮したCollisionクラスを作って判定することになりそう。
    isOverlap(target: Collision): boolean {
        if (target == null) return false

        if (
            this.left <= target.right &&
            target.left <= this.right &&
            this.top <= target.bottom &&
            target.top <= this.bottom
        ) {
            return true
        }

        return false
    }
}
