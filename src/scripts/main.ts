import p5 from "p5"
import { Images } from "./classes/Images"

const sketch = (p5: p5) => {
    let images: Images

    // Init
    p5.preload = () => {
        images = new Images(p5)
    }

    // Loading
    p5.setup = () => {
        images.loadAll()
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
    }

    function testImage(p5: p5) {
        p5.image(images.get(Images.ID_PLAYER_MACHINE), 10, 10)
        p5.image(images.get(Images.ID_ENEMY_ENEMY0), 20, 60)
    }
}

new p5(sketch)
