import p5 from "p5"

export class Graphics {
    p5: p5

    constructor(p: p5) {
        this.p5 = p
    }

    setColor(r: number, g: number, b: number) {
        this.p5.fill(r, g, b)
    }
    fillRect(x: number, y: number, w: number, h: number) {
        this.p5.rect(x, y, w, h)
    }
    drawRect() {}
    drawImage(image: p5.Image, x: number, y: number): void {
        this.p5.image(image, x, y)
    }
}
