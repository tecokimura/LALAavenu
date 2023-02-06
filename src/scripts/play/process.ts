import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/count"
import { Keycode } from "~/src/scripts/const/keycode"

export class Process {
    game: Game
    time: Count
    cityTime: Count

    canDo: boolean = true // 動いてよいかどうか

    constructor(g: Game) {
        this.game = g
        this.time = new Count()
        this.cityTime = new Count()
    }

    do() {
        if (this.canDo) {
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
        this.repeat()
    }

    // 関数ポインタを渡したいがうまく行かないので保留
    repeat(time: number = 100) {
        setTimeout(() => {
            this.do()
        }, time)
    }
}
