import p5 from "p5"
import { Images } from "scripts/classes/Images"

export class Drawing {
    p5: p5 // 引数でクラスに持つ必要ないかも
    canDo: boolean = true; // 動き出してよいか？
    counter: number = 0
    images: Images

    constructor(p: p5, images: Images) {
        this.p5 = p
        this.images = images
    }

    init() {
        this.counter = 0
    }

    do() {
        if( this.canDo ) {
            this.counter++

            this.p5.image(this.images.get(27), this.counter % 200, 20)
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}
