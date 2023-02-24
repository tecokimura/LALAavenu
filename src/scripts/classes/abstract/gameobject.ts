import { BasicObject } from "~/src/scripts/classes/basis/basicobject"

// GameObject
// 全ての根底クラス
// 一回継承したのをテストしてみる
// 背景、プライヤー、敵などのをまとめる根底クラス

export abstract class GameObject extends BasicObject {
    // "p5.Imageオブジェクト"か"画像インデックス"か悩んだが
    // 読み込みと管理がimagesクラスなので画像インデックスを返すことにした。
    abstract get imageNo(): number

    // Kind
    // そのオブジェクトが何の種類か
    protected kind: number
    static readonly NONE: number = 0
    static readonly INTERFACE: number = 1
    static readonly BACKGROUND: number = 2
    static readonly PLAYER: number = 3
    static readonly SHOT: number = 4
    static readonly ENEMY: number = 5
    public isInterface(): boolean {
        return this.kind == GameObject.INTERFACE
    }
    public isBackground(): boolean {
        return this.kind == GameObject.BACKGROUND
    }
    public isPlayer(): boolean {
        return this.kind == GameObject.PLAYER
    }
    public isShot(): boolean {
        return this.kind == GameObject.SHOT
    }
    public isEnemy(): boolean {
        return this.kind == GameObject.ENEMY
    }

    constructor() {
        super()
        this.kind = GameObject.NONE
    }
}
