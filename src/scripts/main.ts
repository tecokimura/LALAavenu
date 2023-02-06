import p5 from "p5"

import { Images } from "~/src/scripts/classes/images"
import { Game } from "~/src/scripts/play/game"
import { Drawing } from "~/src/scripts/play/drawing"
import { Process } from "~/src/scripts/play/process"

// https://p5js.org/reference/#/p5/p5
const s = (p5: p5) => {
    let images: Images
    let game: Game
    let process: Process
    let drawing: Drawing

    // Init
    p5.preload = () => {
        images = new Images(p5)
        game = new Game(p5, images)
        process = new Process(game)
        drawing = new Drawing(game)
    }

    // Loading
    p5.setup = () => {
        images.loadAll()

        process.do()
    }

    //
    p5.keyPressed = () => {
        game.keyPressed(p5.keyCode)
    }

    //
    p5.keyReleased = () => {
        game.keyReleased()
    }

    //
    p5.draw = () => {
        p5.fill(255, 0, 0)
        p5.rect(0, 0, 240, 240)

        testImage(p5)

        drawing.do()
    }

    function testImage(p5: p5) {
        p5.image(images.get(Images.ID_PLAYER_MACHINE), 10, 10)
        p5.image(images.get(Images.ID_ENEMY_ENEMY0), 20, 60)
    }
}

// https://p5js.org/reference/#/p5/p5
new p5(s)

//----
// Classes
//----
