import { Game } from "~/src/scripts/play/game"
import { Keycode } from "~/src/scripts/configs/keycode"
import { Log } from "~/src/scripts/debugs/log"

import { ProcessBase } from "~/src/scripts/play/process/processbase"
import { Title } from "./process/title"

// 出現位置と消える位置、反転した時の描画に調整が必要。
// 画像サイズ分ずらす

export class Process extends ProcessBase {
    private title: Title

    constructor(g: Game) {
        super(g)

        // this.prepare();
        this.title = new Title(this.game)
    }

    prepare() {
        this.title = new Title(this.game)
    }

    do() {
        this.game.updateKeyinputHistory()

        if (this.game.scene().isNone()) {
            // 何もしない
            if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
                this.game.scene().changeLoading()
            }
        } else if (this.game.scene().isLoading()) {
            this.doLoading()
        } else if (this.game.scene().isInitTitle()) {
            this.doPrepareTitle()
            this.game.scene().startTitle()
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

        this.count.counting()
        // Log.info("Process::" + this.count.value)
    }

    doLoading(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeTitle()
            this.count.reset()
        }
    }

    doPrepareTitle(): void {
        this.title.prepare()
    }

    doTitle(): void {
        this.title.do()
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
            this.count.reset()
        }
    }

    doPlaing(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeBombed()
            this.count.reset()
        }
    }
    doBombed(): void {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeGameover()
            this.count.reset()
        }
    }

    doGameover(): void {
        // タイトルへ戻る
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeTitle()
            this.count.reset()
        }
    }
}
