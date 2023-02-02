import p5 from "p5"

export class Graphics {
    p5: p5

    constructor(p: p5) {
        this.p5 = p
    }

    setColor(r: number, g: number, b: number) {}
    fillRect() {}
    drawRect() {}
}
