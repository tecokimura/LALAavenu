import p5 from "p5"
import { Images } from "~/src/scripts/classes/images"
import { Scene } from "~/src/scripts/classes/scene"
import { Keyinput } from "~/src/scripts/classes/keyinput"
import { Process } from "~/src/scripts/play/process"
import { Drawing } from "~/src/scripts/play/drawing"

export class Game {
    private p5: p5

    private _processing: Process
    private _drawing: Drawing
    private _keyinput: Keyinput
    private _images: Images
    private _scene: Scene

    private counter: number = 0

    constructor(p: p5) {
        this.p5 = p

        this._processing = new Process(this)
        this._drawing = new Drawing(this, this.p5)
        this._images = new Images(this.p5)
        this._scene = new Scene()
        this._keyinput = new Keyinput()
        // 乱数の初期化
    }

    setup(): void {
        this._images.loadAll()
    }

    processing() {
        this._processing.do()
    }

    drawing(): void {
        this._drawing.do()
    }

    image(id: number): p5.Image {
        return this._images.get(id)
    }

    keyinput(): Keyinput {
        // 今はkeyのみ
        return this._keyinput
    }

    updateKeyinputHistory() {
        this._keyinput.rotateHistory()
        this._keyinput.updateKeycodeHistory(
            this.p5.keyIsPressed,
            this.p5.keyCode
        )
    }

    scene(): Scene {
        return this._scene
    }
}
