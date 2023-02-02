export class Scene {
    value: number

    constructor() {
        this.value = Scene.NONE
    }

    // 正確に連番である必要はない
    static readonly NONE = 0
    static readonly LOADING = 1
    static readonly TITLE = 2
    static readonly OPENING = 3
    static readonly PLAYING = 4
    static readonly BOMBED = 5
    static readonly GAMEOVER = 6

    isNone(): boolean {
        return this.value == Scene.NONE
    }
    isLoading(): boolean {
        return this.value == Scene.LOADING
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

    changeNone() {
        this.value = Scene.NONE
    }
    changeLoading() {
        this.value = Scene.LOADING
    }
    changeTitle() {
        this.value = Scene.TITLE
    }
    changeOpening() {
        this.value = Scene.OPENING
    }
    changePlaying() {
        this.value = Scene.PLAYING
    }
    changeBombed() {
        this.value = Scene.BOMBED
    }
    changeGameover() {
        this.value = Scene.GAMEOVER
    }
}
