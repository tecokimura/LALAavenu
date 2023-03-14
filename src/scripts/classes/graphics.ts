import p5 from "p5"
import { Display } from "~/src/scripts/configs/display"

export class Graphics {
    p5: p5

    static readonly RGB_MIN = 0
    static readonly RGB_MAX = 255

    constructor(p: p5) {
        this.p5 = p
    }

    setColor(r: number, g: number, b: number): boolean {
        // 設定できる範囲外なら終了
        if (
            r < Graphics.RGB_MIN ||
            Graphics.RGB_MAX < r ||
            g < Graphics.RGB_MIN ||
            Graphics.RGB_MAX < g ||
            b < Graphics.RGB_MIN ||
            Graphics.RGB_MAX < b
        ) {
            return false
        }

        this.p5.fill(r, g, b)
        return true
    }

    fillRect(x: number, y: number, w: number, h: number) {
        this.p5.rect(x, y, w * Display.SCALE, h * Display.SCALE)
    }

    // ?
    drawRect(x: number, y: number, w: number, h: number) {
        this.p5.rect(x, y, w * Display.SCALE, h * Display.SCALE)
    }

    clearRect(r: number = 255, g: number = 255, b: number = 255) {
        this.setColor(r, b, g)
        this.fillRect(
            Display.X,
            Display.Y,
            Display.WIDTH * Display.SCALE,
            Display.HEIGHT * Display.SCALE
        )
    }

    clearRectBlack() {
        this.setColor(0, 0, 0)
        this.fillRect(
            Display.X,
            Display.Y,
            Display.WIDTH * Display.SCALE,
            Display.HEIGHT * Display.SCALE
        )
    }

    drawImage(
        image: p5.Image,
        x: number,
        y: number,
        isFlip: boolean = false
    ): void {
        let imgWidthHalf = image.width / 2
        let imgHeightHalf = image.height / 2

        this.p5.push()
        this.p5.translate(x + imgWidthHalf, y + imgHeightHalf)

        if (isFlip) this.p5.scale(-1, 1)

        this.p5.image(image, -1 * imgWidthHalf, -1 * imgHeightHalf)
        this.p5.pop()
    }
}
