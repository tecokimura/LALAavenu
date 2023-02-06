import { Keycode } from "../const/keycode"

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
    }

    // p5のkeyPressedから呼び出される想定
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
    // 同時押しと押しっぱなしが若干怪しい
    isPressKeyNow(code: number = Keycode.ANY): boolean {
        const first = this.keycodeHistory[0]
        const second = this.keycodeHistory[1]

        // 連続して同じキーなので今押したわけではない
        if (first == second) return false

        if (code == Keycode.ANY && first != Keycode.NONE) return true

        if (first == code) return true

        return false
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

    // キー履歴をローテーションする
    rotateHistory() {
        // キーコード履歴 を更新する
        // 新しい [0] <  [length-1] 古い
        for (let i = 0; i < this.keycodeHistory.length - 1; i++) {
            this.keycodeHistory[i + 1] = this.keycodeHistory[i]
        }
    }

    // 処理するキー入力を更新する
    updateKeycodeHistory(p5KeyIsPressed: boolean, p5Keycode: number) {
        // p5で押しっぱなしと判定されたら上書きする
        if (p5KeyIsPressed) {
            this.pressKeyBuffer = p5Keycode
        }

        this.keycodeHistory[0] = this.pressKeyBuffer
        this.pressKeyBuffer = Keycode.NONE
    }
}
