import { Count } from "~/src/scripts/classes/basis/count"

export class Scene {
    private readonly time: Count

    private buffer: number
    private value: number

    constructor() {
        this.value = Scene.NONE
        this.buffer = Scene.NONE
        this.time = new Count()
    }

    // 正確に連番である必要はない
    static readonly NONE = 0
    static readonly LOADING = 10
    static readonly INIT_TITLE = 19
    static readonly TITLE = 20
    static readonly OPENING = 30
    static readonly PLAYING = 40
    static readonly BOMBED = 50
    static readonly GAMEOVER = 60

    isNone(): boolean {
        return this.value == Scene.NONE
    }
    isLoading(): boolean {
        return this.value == Scene.LOADING
    }
    isInitTitle(): boolean {
        return this.value == Scene.INIT_TITLE
    }
    isTitle(): boolean {
        return this.value == Scene.TITLE
    }
    isOpening(): boolean {
        return this.value == Scene.OPENING
    }
    isPlaying(): boolean {
        return this.value == Scene.PLAYING
    }
    isBombed(): boolean {
        return this.value == Scene.BOMBED
    }
    isGameover(): boolean {
        return this.value == Scene.GAMEOVER
    }

    // 処理の途中で状態が変わるとif分が複雑になるので処理の開始時点で更新されるように一度bufferに入れupdateSceneで更新する。
    changeNone() {
        this.buffer = Scene.NONE
    }
    changeLoading() {
        this.buffer = Scene.LOADING
    }
    changeTitle() {
        this.buffer = Scene.INIT_TITLE
    }
    startTitle() {
        this.buffer = Scene.TITLE
    }
    changeOpening() {
        this.buffer = Scene.OPENING
    }
    changePlaying() {
        this.buffer = Scene.PLAYING
    }
    changeBombed() {
        this.buffer = Scene.BOMBED
    }
    changeGameover() {
        this.buffer = Scene.GAMEOVER
    }

    updateScene(): boolean {
        if (this.value == this.buffer) {
            this.time.counting()
            return false
        }

        // scene update
        this.value = this.buffer
        this.time.reset()
        this.time.counting()
        return true
    }

    count(): number {
        return this.time.count()
    }
}
