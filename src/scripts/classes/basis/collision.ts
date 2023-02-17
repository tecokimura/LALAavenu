export class Collision {
    private offset_x: number = 0
    private offset_y: number = 0
    private width: number = 0
    private height: number = 0

    constructor(x: number=0, y: number=0, w: number=0, h: number=0) {
        this.reset(x, y, w, h)
    }

    reset(x: number, y: number, w: number, h: number) {
        this.offset_x = x
        this.offset_y = y
        this.resetWidth(w)
        this.resetHeight(h)
    }

    getX(): number {
        return this.offset_x
    }
    getY(): number {
        return this.offset_y
    }
    getWidth(): number {
        return this.width
    }
    getHeight(): number {
        return this.height
    }

    getHitLeft(): number {
        return this.offset_x
    }
    getHitTop(): number {
        return this.offset_y
    }
    getHitRight(): number {
        return this.offset_x + this.width
    }
    getHitBottom(): number {
        return this.offset_y + this.height
    }

    resetX(x: number) {
        this.offset_x = x
    }

    resetY(y: number) {
        this.offset_y = y
    }

    resetWidth(w: number) {
        if (0 <= w) this.width = w
    }

    resetHeight(h: number) {
        if (0 <= h) this.height = h
    }

    // MEMO: 各クラスで位置などを考慮したCollisionクラスを作って判定することになりそう。
    isOverlap(target: Collision): boolean {
        if (target == null) return false

        if (
            this.getHitLeft() <= target.getHitRight() &&
            target.getHitLeft() <= this.getHitRight() &&
            this.getHitTop() <= target.getHitBottom() &&
            target.getHitTop() <= this.getHitBottom()
        ) {
            return true
        }

        return false
    }
}
