import p5 from "p5"

import { Images } from "~/src/scripts/classes/images"
import { Game } from "~/src/scripts/play/game"

// https://p5js.org/reference/#/p5/p5
const s = (p5: p5) => {
    let images: Images
    let game: Game

    // Init
    p5.preload = () => {
        game = new Game(p5)
    }

    // Loading
    p5.setup = () => {
        game.setup()

        game.processing()
    }

    //
    p5.keyPressed = () => {
        game.keyinput().keyPressed(p5.keyCode)
    }

    //
    p5.keyReleased = () => {
        game.keyinput().keyReleased()
    }

    //
    p5.draw = () => {
        // draw sample
        p5.fill(255, 0, 0)
        p5.rect(0, 0, 240, 240)
        testImage(p5)

        game.drawing()
    }

    function testImage(p5: p5) {
        p5.image(game.image(Images.ID_PLAYER_MACHINE), 10, 10)
        p5.image(game.image(Images.ID_ENEMY_ENEMY0), 20, 60)
    }
}

// https://p5js.org/reference/#/p5/p5
new p5(s)

//----
// Classes
//----
