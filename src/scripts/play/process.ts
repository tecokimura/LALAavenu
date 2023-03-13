import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/basis/count"
import { Keycode } from "~/src/scripts/configs/keycode"
import { Lock } from "~/src/scripts/classes/basis/lock"
import { Log } from "~/src/scripts/debugs/log"
import { Train } from "../classes/background/train"
import { Balloon } from "../classes/background/balloon"
import { Util } from "~/src/scripts/classes/util"

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
        Log.info("Process::" + this.time.count())
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

        // test
        if (this.game.backgrounds.length == 0) {
            this.game.backgrounds.push(new Train(Util.rand(Train.MAX), 0, 224))
        }

        /**
         * a train
         * a gril
         * a ballorn
         * a plane
         * cloud
         */
        this.game.backgrounds.forEach((train) => {
            train.move()
            console.log("x=" + train.x + ",y=" + train.y)
        })
    }
    doOpening(): void {
        /**
         * ゲーム中のメッセージボックス処理
         * 電車
         * 女の子
         * 気球
         * 飛行機の移動と反転
         */

        // キーを押したらゲームへ
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
        // タイトルへ戻る
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeTitle()
            this.time.reset()
        }
    }
}
