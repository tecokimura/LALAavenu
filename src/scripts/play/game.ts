import { Scene } from "scripts/classes/scene"

export class Game {
    scene: Scene = 0
    counter: number = 0

    pressKey: number = 0 // ゲームで処理するキー
    pressKeyBuffer: number = 0 // イベントで取得した最新のキー
    holdDownKey: number = 0 // 押しっぱなしのキー

    constructor() {
        this.init()
    }

    init() {
        this.pressKey = 0
        this.scene = 0
        // 乱数の初期化
    }

    isSceneLoading(): boolean {
        return this.scene == Scene.LOADING
    }
    isSceneOpening(): boolean {
        return this.scene == Scene.OPENING
    }
    isScenePlaying(): boolean {
        return this.scene == Scene.PLAYING
    }
    isSceneBombed(): boolean {
        return this.scene == Scene.BOMBED
    }
    isSceneGameover(): boolean {
        return this.scene == Scene.GAMEOVER
    }
}
