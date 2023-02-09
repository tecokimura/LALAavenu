import p5 from "p5"
import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/count"
import { Graphics } from "~/src/scripts/classes/graphics"
import { Lock } from "~/src/scripts/classes/lock"

// Graphicsを継承してもいいかも
export class Drawing {
    public readonly lock: Lock // 継承した方が良さそうだけど、デザインパターン探す

    private readonly g: Graphics
    private readonly game: Game
    private readonly time: Count

    constructor(g: Game, p: p5) {
        this.game = g
        this.g = new Graphics(p)
        this.lock = new Lock()
        this.time = new Count()
    }

    init() {}

    do() {
        if (this.lock.isUnlocked()) {
            this.g.clearRect(0, 0, 0)

            if (this.game.scene().isNone()) {
                this.g.clearRect(0, 0, 0)

                this.g.drawImage(
                    this.game.image(27),
                    this.time.count() % 100,
                    20
                )
            } else if (this.game.scene().isLoading()) {
                this.g.clearRect(120, 120, 120)

                this.g.drawImage(
                    this.game.image(30),
                    this.time.count() % 100,
                    50
                )
            } else if (this.game.scene().isTitle()) {
                this.g.clearRect(60, 60, 220)
            } else if (this.game.scene().isOpening()) {
                this.g.clearRect(60, 220, 60)
            } else if (this.game.scene().isPlaying()) {
                this.g.clearRect(60, 220, 220)
            } else if (this.game.scene().isBombed()) {
                this.g.clearRect(220, 60, 60)
            } else if (this.game.scene().isGameover()) {
                this.g.clearRect(20, 20, 20)
            }

            this.time.counting()
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}
