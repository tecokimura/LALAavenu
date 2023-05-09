export class Collision {
    private _offset_x: number = 0
    private _offset_y: number = 0
    private _width: number = 0
    private _height: number = 0

    constructor(x: number = 0, y: number = 0, w: number = 0, h: number = 0) {
        this.reset(x, y, w, h)
    }

    reset(x: number, y: number, w: number, h: number) {
        this._offset_x = x
        this._offset_y = y
        this._width = w
        this._height = h
    }

    get width(): number {
        return this._width
    }
    get height(): number {
        return this._height
    }

    get left(): number {
        return this._offset_x
    }
    get top(): number {
        return this._offset_y
    }
    get right(): number {
        return this._offset_x + this._width
    }
    get bottom(): number {
        return this._offset_y + this._height
    }

    isEnable(): boolean {
        if (this._width == 0 && this._height == 0) return false

        if (this.left == this.right && this.top == this.bottom) return false

        return true
    }

    isDisable(): boolean {
        return this.isEnable() == false
    }

    // MEMO: 各クラスで位置などを考慮したCollisionクラスを作って判定することになりそう。
    isOverlap(target: Collision): boolean {
        // 設定されていない場合は当たっていない判定を返す
        if (target == null) return false
        if (target.isDisable()) return false
        if (this.isDisable()) return false

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
