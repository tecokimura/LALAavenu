import p5 from "p5"

const sketch = (p5: p5) => {
    // init for p5
    p5.setup = () => {}

    // p5
    p5.preload = () => {}

    //
    p5.keyPressed = () => {}

    //
    p5.keyReleased = () => {}

    //
    p5.draw = () => {
        p5.fill(255, 0, 0)
        p5.rect(0, 0, 240, 240)
    }
}

new p5(sketch)
