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
    static readonly USER_INTERFACE: number = 10
    static readonly BACKGROUND_TRAIN: number = 20
    static readonly BACKGROUND_BALLOON: number = 21
    static readonly BACKGROUND_GIRL: number = 22
    static readonly BACKGROUND_CLOUD: number = 23
    static readonly PLAYER: number = 30
    static readonly SHOT: number = 40
    static readonly ENEMY: number = 50
    public isUserInterface(): boolean {
        return this.objKind == GameObject.USER_INTERFACE
    }
    public isBackground(): boolean {
        return (
            this.objKind == GameObject.BACKGROUND_TRAIN ||
            this.objKind == GameObject.BACKGROUND_BALLOON ||
            this.objKind == GameObject.BACKGROUND_GIRL ||
            this.objKind == GameObject.BACKGROUND_CLOUD
        )
    }
    public isBackgroundTrain(): boolean {
        return this.objKind == GameObject.BACKGROUND_TRAIN
    }
    public isBackgroundBalloon(): boolean {
        return this.objKind == GameObject.BACKGROUND_BALLOON
    }
    public isBackgroundGirl(): boolean {
        return this.objKind == GameObject.BACKGROUND_GIRL
    }
    public isBackgroundCloud(): boolean {
        return this.objKind == GameObject.BACKGROUND_CLOUD
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
