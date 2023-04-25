import p5, { Color } from "p5"
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
        this.clearRect(0, 0, 0)
    }

    drawRectGradient(startColor: Color, endColor: Color) {
        // 上端を赤、下端を青にグラデーションするための設定
        const c1 = this.p5.color(255, 0, 0)
        const c2 = this.p5.color(0, 0, 255)
        const gradient = this.p5.drawingContext.createLinearGradient(
            0,
            0,
            0,
            this.p5.height
        )
        gradient.addColorStop(0, c1.toString())
        gradient.addColorStop(1, c2.toString())

        // 四角形を描画
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
