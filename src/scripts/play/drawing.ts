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
            this.g.setColor(0, 0, 0)
            this.g.fillRect(0, 0, 240, 240)

            if (this.game.scene().isNone()) {
                this.g.setColor(100, 100, 100)
                this.g.fillRect(0, 0, 240, 240)

                this.g.drawImage(
                    this.game.image(27),
                    this.time.count() % 100,
                    20
                )
            } else if (this.game.scene().isLoading()) {
                this.g.setColor(200, 200, 200)
                this.g.fillRect(0, 0, 240, 240)

                this.g.drawImage(
                    this.game.image(30),
                    this.time.count() % 100,
                    50
                )
            }

            this.time.counting()
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}
