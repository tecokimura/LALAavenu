import p5 from "p5"
import { Process } from "play/process"
import { Drawing } from "play/drawing"
import { Images } from "classes/Images"

// https://p5js.org/reference/#/p5/p5
const s = (p5: p5) => {
    let process: Process
    let drawing: Drawing
    let images: Images

    // Init
    p5.preload = () => {
        process = new Process(p5)
        images = new Images(p5)
        drawing = new Drawing(p5, images)
    }

    // Loading
    p5.setup = () => {
        images.loadAll()

        process.do()
    }

    //
    p5.keyPressed = () => {}

    //
    p5.keyReleased = () => {}

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
