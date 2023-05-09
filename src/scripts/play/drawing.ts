import p5 from "p5"
import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/basis/count"
import { Graphics } from "~/src/scripts/classes/graphics"
import { Lock } from "~/src/scripts/classes/basis/lock"
import { Images } from "~/src/scripts/classes/images"
import { Display } from "~/src/scripts/configs/display"

// Graphicsを継承してもいいかも
export class Drawing {
    public readonly lock: Lock // 継承した方が良さそうだけど、デザインパターン探す

    private readonly grap: Graphics
    private readonly game: Game
    private readonly count: Count

    private readonly BG_RGB_ARRAY: number[][] = [
        [67, 174, 215],
        [67, 174, 215],
        [67, 175, 217],
        [74, 179, 221],
        [84, 184, 224],

        [91, 188, 226],
        [101, 195, 230],
        [108, 198, 233],
        [121, 205, 235],
        [127, 211, 237],

        [138, 216, 240],
        [150, 221, 243],
        [160, 226, 245],
        [169, 229, 246],
        [176, 229, 245],

        [179, 226, 243],
        [179, 226, 243],
        [179, 226, 243],
        [179, 226, 243],
        [179, 226, 243],
    ]

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
                this.grap.clearRect(190, 240, 250)
                this.grap.drawRectGradient(this.BG_RGB_ARRAY, 11)

                this.grap.drawImage(
                    this.game.image(Images.ID_BG_TOWN_BACK),
                    0,
                    169
                )

                this.game.backgrounds.forEach((bg) => {
                    this.grap.drawImage(
                        this.game.image(bg.image),
                        bg.x,
                        bg.y,
                        bg.isDrawFlip
                    )
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
}
