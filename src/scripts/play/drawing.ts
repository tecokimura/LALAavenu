import p5 from "p5"
import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/basis/count"
import { Graphics } from "~/src/scripts/classes/graphics"
import { Lock } from "~/src/scripts/classes/basis/lock"
import { Images } from "../classes/images"

// Graphicsを継承してもいいかも
export class Drawing {
    public readonly lock: Lock // 継承した方が良さそうだけど、デザインパターン探す

    private readonly grap: Graphics
    private readonly game: Game
    private readonly count: Count

    constructor(g: Game, p: p5) {
        this.game = g
        this.grap = new Graphics(p)
        this.lock = new Lock()
        this.count = new Count()
    }

    init() {}

    do() {
        if (this.lock.isUnlocked()) {
            this.grap.clearRect(0, 0, 0)

            if (this.game.scene().isNone()) {
                this.grap.clearRect(0, 0, 0)

                this.grap.drawImage(
                    this.game.image(27),
                    this.count.value % 100,
                    20
                )
            } else if (this.game.scene().isLoading()) {
                this.grap.clearRect(120, 120, 120)

                this.grap.drawImage(
                    this.game.image(30),
                    this.count.value % 100,
                    50
                )
            } else if (this.game.scene().isInitTitle()) {
                // タイトル画面初期化中の描画
                this.grap.clearRectBlack()
            } else if (this.game.scene().isTitle()) {
                this.grap.clearRect(60, 60, 220)

                this.grap.drawImage(
                    this.game.image(Images.ID_BG_TOWN_BACK),
                    0,
                    169
                )

                this.game.backgrounds.forEach((bg) => {
                    this.grap.drawImage(this.game.image(bg.image), bg.x, bg.y)
                })

                this.grap.drawImage(
                    this.game.image(Images.ID_BG_TOWN_FRONT),
                    0,
                    208
                )
            } else if (this.game.scene().isOpening()) {
                this.grap.clearRect(60, 220, 60)
            } else if (this.game.scene().isPlaying()) {
                this.grap.clearRect(60, 220, 220)
            } else if (this.game.scene().isBombed()) {
                this.grap.clearRect(220, 60, 60)
            } else if (this.game.scene().isGameover()) {
                this.grap.clearRect(20, 20, 20)
            }

            this.count.counting()
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}
