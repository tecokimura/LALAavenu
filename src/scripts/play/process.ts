import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/count"
import { Keycode } from "~/src/scripts/configs/keycode"
import { Lock } from "~/src/scripts/classes/lock"
import { Debug } from "~/src/scripts/classes/debug"

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
            // 何もしない
            if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
                this.game.scene().changeLoading()
                this.time.reset()
            }
        } else if (this.game.scene().isLoading()) {
            this.doLoading()
        } else if (this.game.scene().isTitle()) {
            this.doTitle()
        } else if (this.game.scene().isOpening()) {
            this.doOpening()
        } else if (this.game.scene().isPlaying()) {
            this.doPlaing()
        } else if (this.game.scene().isBombed()) {
            this.doBombed()
        } else if (this.game.scene().isGameover()) {
            this.doGameover()
        }

        this.time.counting()
        Debug.info("Process::" + this.time.count())
    }

    doLoading(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeTitle()
            this.time.reset()
        }
    }
    doTitle(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeOpening()
            this.time.reset()
        }
    }
    doOpening(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changePlaying()
            this.time.reset()
        }
    }

    doPlaing(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeBombed()
            this.time.reset()
        }
    }
    doBombed(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeGameover()
            this.time.reset()
        }
    }

    doGameover(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeTitle()
            this.time.reset()
        }
    }
}
