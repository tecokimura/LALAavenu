import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/count"
import { Keycode } from "~/src/scripts/const/keycode"
import { Lock } from "~/src/scripts/classes/lock"

export class Process {
    public readonly lock: Lock // 継承した方が良さそうだけど、デザインパターン探す

    private readonly game: Game
    private time: Count
    private cityTime: Count

    constructor(g: Game) {
        this.game = g
        this.lock = new Lock()
        this.time = new Count()
        this.cityTime = new Count()
    }

    do() {
        this.game.updateKeyinputHistory()

        if (this.game.scene().isNone()) {
            if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
                this.game.scene().changeLoading()
                this.time.reset()
            }
        } else if (this.game.scene().isLoading()) {
            if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
                this.game.scene().changeNone()
                this.time.reset()
            }
        }

        this.time.counting()
        console.log(this.time.count())
    }
}
