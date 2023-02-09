import p5 from "p5"

import { Game } from "~/src/scripts/play/game"
import { Debug } from "~/src/scripts/classes/debug"

// https://p5js.org/reference/#/p5/p5
const s = (p5: p5) => {
    let game: Game

    // Init
    p5.preload = () => {
        Debug.p5("p5.preload.start")

        game = new Game(p5)
        Debug.p5("p5.preload.end")
    }

    // Loading
    p5.setup = () => {
        Debug.p5("p5.setup.start")
        game.setup()

        game.processing()
        Debug.p5("p5.setup.end")
    }

    //
    p5.keyPressed = () => {
        Debug.p5("p5.keyPressed=" + p5.keyCode)
        game.keyinput().keyPressed(p5.keyCode)
    }

    //
    p5.keyReleased = () => {
        Debug.p5("p5.keyReleassed")
        game.keyinput().keyReleased()
    }

    //
    p5.draw = () => {
        // draw sample
        p5.fill(255, 0, 0)
        p5.rect(0, 0, 240, 240)

        game.drawing()
    }
}

// https://p5js.org/reference/#/p5/p5
new p5(s)

//----
// Classes
//----
