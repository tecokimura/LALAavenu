import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/count"
import p5 from "p5"
import { Graphics } from "~/src/scripts/classes/graphics"

// Graphicsを継承してもいいかも
export class Drawing {
    g: Graphics
    game: Game
    time: Count

    // Gameに移動した方が良さそう
    canDo: boolean = true // 動き出してよいか？

    constructor(g: Game, p: p5) {
        this.game = g
        this.g = new Graphics(p)
        this.time = new Count()
    }

    init() {}

    do() {
        if (this.canDo) {
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
