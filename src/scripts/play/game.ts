import p5 from "p5"
import { Images } from "~/src/scripts/classes/images"
import { Scene } from "~/src/scripts/classes/scene"
import { Keycode } from "~/src/scripts/const/keycode"

export class Game {
    p5: p5
    private images: Images
    private scene: Scene
    private counter: number = 0

    keycodeHistory: Array<number> = new Array(5)
    pressKeyBuffer: number = 0 // イベントで取得した最新のキー
    holdDownKey: number = 0 // 押しっぱなしのキー

    constructor(p: p5, img: Images) {
        this.p5 = p
        this.images = img
        this.scene = new Scene()
        this.pressKeyBuffer = Keycode.NONE
        for (let i = 0; i < this.keycodeHistory.length; i++) {
            this.keycodeHistory[i] = Keycode.NONE
        }
        // 乱数の初期化
    }

    // p5のkeyPressedから呼ばれる想定
    keyPressed(p5KeyCode: number) {
        this.pressKeyBuffer = p5KeyCode
    }

    // p5のkeyPressedから呼ばれる想定
    keyReleased() {
        this.pressKeyBuffer = Keycode.NONE
    }

    // キーが押されていないならfalse
    // 調べるキーがANYならtrue
    // 指定されたキーか調べる。
    isPressKey(code: number = Keycode.ANY): boolean {
        if (this.keycodeHistory[0] == Keycode.NONE) return false

        if (code == Keycode.ANY) return true

        // キーが指定されている場合は調べて更新する
        return this.keycodeHistory[0] == code
    }

    // キーが今のフレームで押されたかを調べる
    // 履歴の前が押していなくて今が押していればtrue
    isPressKeyNow(): boolean {
        return (
            this.keycodeHistory[0] != Keycode.NONE &&
            this.keycodeHistory[1] == Keycode.NONE
        )
    }

    // 今キーを離したかを取得する
    isReleaseKeyNow(): boolean {
        return (
            this.keycodeHistory[0] == Keycode.NONE &&
            this.keycodeHistory[1] != Keycode.NONE
        )
    }

    // 最後に押された処理するキーを調べる
    isLastPressKey(code: Keycode): boolean {
        return this.keycodeHistory[0] == code
    }

    // processで使用する
    processUpdateKeycode(p5: p5) {
        this.rotateKeycodeHistory()
        this.updateKeycodeHistory(p5)
    }

    // キー履歴をローテーションする
    rotateKeycodeHistory() {
        // キーコード履歴 を更新する
        // 新しい [MIN] <  [MAX] 古い
        for (let i = 0; i < this.keycodeHistory.length - 1; i++) {
            this.keycodeHistory[i + 1] = this.keycodeHistory[i]
        }
    }

    // 処理するキー入力を更新する
    updateKeycodeHistory(p5: p5) {
        // p5で押しっぱなしと判定されたら上書きする
        if (p5.keyIsPressed) {
            this.pressKeyBuffer = p5.keyCode
        }

        this.keycodeHistory[0] = this.pressKeyBuffer
        this.pressKeyBuffer = Keycode.NONE
    }

    getImages(): Images {
        return this.images
    }
}
