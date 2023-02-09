import { Keycode } from "~/src/scripts/configs/keycode"
import { Debug } from "~/src/scripts/classes/debug"

export class Keyinput extends Keycode {
    // GameのKey関連を巻き取る
    private keycodeHistory: Array<number> = new Array(5)
    private pressKeyBuffer: number = 0 // イベントで取得した最新のキー
    private holdDownKey: number = 0 // 押しっぱなしのキー

    constructor() {
        super()
        this.pressKeyBuffer = Keycode.NONE
        for (let i = 0; i < this.keycodeHistory.length; i++) {
            this.keycodeHistory[i] = Keycode.NONE
        }
    }

    // p5のkeyPressedから呼び出される想定
    keyPressed(p5Keycode: number): void {
        this.pressKeyBuffer = p5Keycode
        Debug.keycode("Keyinput::keyPressed:" + p5Keycode)
    }

    // p5のkeyPressedから呼び出される想定
    keyReleased() {
        // 離したタイミングは必要ないので何もしない
        // 押しっぱなしは isHoldKey() で調べる
    }

    // 指定されたキーが押されてたか、押しっぱなしの時にtrue
    isPressKey(code: number = Keycode.ANY): boolean {
        return (this.isPressKeyNow(code) || this.isHoldKey(code))
    }

    // キーが今のフレームで押されたかを調べる
    // 履歴の前が押していなくて今が押していればtrue
    // 押しっぱなしは対象外
    isPressKeyNow(code: number = Keycode.ANY): boolean {
        const first = this.keycodeHistory[0]

        if( first == Keycode.NONE) return false;
        if (first == code) return true

        const second = this.keycodeHistory[1]

        // 連続して同じキーなので今押したわけではない
        if (first == second) return false

        // 何かキーが押されていることを判定するときは
        // first は既にNONE以外が入っているのでtrue
        if (code == Keycode.ANY ) return true

        return false
    }

    // 最後に押された処理するキーを調べる
    // isLastPressKey(code: Keycode): boolean {
    //    return this.keycodeHistory[0] == code
    //}

    // 今キーを離したかを取得する
    isReleaseKeyNow(): boolean {
        return (
            this.keycodeHistory[0] == Keycode.NONE &&
            this.keycodeHistory[1] != Keycode.NONE
        )
    }

    isHoldKey(code: number = Keycode.ANY): boolean {
        if (this.holdDownKey == code) return true

        if (code == Keycode.ANY && this.holdDownKey != Keycode.NONE) return true

        return false
    }

    // 処理するキー入力を更新する
    updateKeycodeHistory(p5KeyIsPressed: boolean, p5Keycode: number) {
        // キーコード履歴 を更新する
        // 新しい [0] <  [length-1] 古い
        for (let i = 0; i < this.keycodeHistory.length - 1; i++) {
            this.keycodeHistory[i + 1] = this.keycodeHistory[i]
        }

        // p5で押しっぱなしと判定されたら上書きする
        this.holdDownKey = Keycode.NONE
        if (p5KeyIsPressed) {
            this.holdDownKey = p5Keycode
        }

        this.keycodeHistory[0] = this.pressKeyBuffer
        this.pressKeyBuffer = Keycode.NONE
    }
}
