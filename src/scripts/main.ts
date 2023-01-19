import p5 from "p5"

import { Images } from "./classes/Images.class"

// ここだとできるけど別のTSに移すと何故かできない
// @ts-ignore
import DIST_IMG_PNGS from "/res/ufo.png"
const dlurl = new URL("/res/ufo.png", import.meta.url)

const sketch = (p5: p5) => {
    let image: p5.Image
    let images: Images

    // init for p5
    p5.setup = () => {}

    // p5
    p5.preload = () => {
        // images.load()
        image = p5.loadImage(DIST_IMG_PNGS)
        image = p5.loadImage(dlurl.pathname)

        images = new Images(p5)
        images.load()
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
        p5.image(image, 40, 40)
        p5.image(images.get(0), 20, 60)
    }
}

new p5(sketch)
