import p5 from "p5"
import { Images } from "classes/Images"

export class Drawing {
    p5: p5 // 引数でクラスに持つ必要ないかも
    count: number = 0
    images: Images

    constructor(p: p5, images: Images) {
        this.p5 = p
        this.images = images
    }

    init() {
        this.count = 0
    }

    do() {
        this.count++

        this.p5.image(this.images.get(27), this.count % 200, 20)
    }

    // No need to write this because working p5
    // repeat() { ... }
}
