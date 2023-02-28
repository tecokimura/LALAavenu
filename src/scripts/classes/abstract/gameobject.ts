import { BasicObject } from "~/src/scripts/classes/basis/basicobject"

// GameObject
// 全ての根底クラス
// 一回継承したのをテストしてみる
// 背景、プライヤー、敵などのをまとめる根底クラス

export abstract class GameObject extends BasicObject {
    // Kind
    // そのオブジェクトが何の種類か
    protected objKind: number
    static readonly NONE: number = 0
    static readonly INTERFACE: number = 1
    static readonly BACKGROUND: number = 2
    static readonly PLAYER: number = 3
    static readonly SHOT: number = 4
    static readonly ENEMY: number = 5
    public isInterface(): boolean {
        return this.objKind == GameObject.INTERFACE
    }
    public isBackground(): boolean {
        return this.objKind == GameObject.BACKGROUND
    }
    public isPlayer(): boolean {
        return this.objKind == GameObject.PLAYER
    }
    public isShot(): boolean {
        return this.objKind == GameObject.SHOT
    }
    public isEnemy(): boolean {
        return this.objKind == GameObject.ENEMY
    }

    constructor() {
        super()
        this.objKind = GameObject.NONE
    }
}
