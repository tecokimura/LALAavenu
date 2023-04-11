import p5 from "p5"

import { Images } from "~/src/scripts/classes/images"
import { Scene } from "~/src/scripts/classes/scene"
import { Keyinput } from "~/src/scripts/classes/keyinput"
import { Process } from "~/src/scripts/play/process"
import { Drawing } from "~/src/scripts/play/drawing"
import { Background } from "~/src/scripts/classes/background/base"
import { Display } from "../configs/display"

export class Game {
    private p5: p5

    private _processing: Process
    private _drawing: Drawing
    private _keyinput: Keyinput
    private _images: Images
    private _scene: Scene

    private counter: number = 0

    public backgrounds: Set<Background.Base>

    constructor(p: p5) {
        this.p5 = p

        this._processing = new Process(this)
        this._drawing = new Drawing(this, this.p5)
        this._images = new Images(this.p5)
        this._scene = new Scene()
        this._keyinput = new Keyinput()
        // 乱数の初期化

        this.backgrounds = new Set<Background.Base>()
    }

    setup(): void {
        // キャンバス作成
        this.p5.createCanvas(Display.WIDTH, Display.HEIGHT)

        // 画像の読み込み
        this._images.loadAll()

        this.scene().changeLoading()
    }

    // 何かを処理中に中途半端に描画されないようにロックする
    processing() {
        if (this._processing.lock.isUnlocked()) {
            this._drawing.lock.lock()
            if (this._scene.updateScene()) {
                // シーンが変わる時のアップデート
                this._keyinput = new Keyinput()
            }
            this._processing.do()
            this._drawing.lock.unlock()
        }

        this.repeat()
    }

    // 何かを処理中に中途半端に描画されないようにロックする
    drawing(): void {
        if (this._drawing.lock.isUnlocked()) {
            // this._processing.lock.lock()
            this._drawing.do()
            // this._processing.lock.unlock()
        }
    }

    image(id: number): p5.Image {
        return this._images.get(id)
    }

    keyinput(): Keyinput {
        // 今はkeyのみ
        return this._keyinput
    }

    // キー履歴を循環させて最新のキーを保存する。
    updateKeyinputHistory() {
        this._keyinput.updateKeycodeHistory(
            this.p5.keyIsPressed,
            this.p5.keyCode
        )
    }

    scene(): Scene {
        return this._scene
    }

    // 関数ポインタを渡したいがうまく行かないので保留
    repeat(time: number = 100) {
        setTimeout(() => {
            this.processing()
        }, time)
    }

    public lockProcess() {
        this._processing.lock.lock()
    }

    public unlockProcess() {
        this._processing.lock.unlock()
    }

    public lockDrawing() {
        this._drawing.lock.lock()
    }

    public unlockDrawing() {
        this._drawing.lock.unlock()
    }
}
