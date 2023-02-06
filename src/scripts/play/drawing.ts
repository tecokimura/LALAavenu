import { Images } from "~/src/scripts/classes/images"
import { Game } from "~/src/scripts/play/game"

export class Drawing {
    game: Game

    canDo: boolean = true // 動き出してよいか？
    counter: number = 0
    images: Images

    constructor(g: Game) {
        this.game = g
        this.images = g.getImages()
    }

    init() {
        this.counter = 0
    }

    do() {
        if (this.canDo) {
            this.counter++

            this.game.p5.image(this.images.get(27), this.counter % 200, 20)
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}
