import p5 from "p5"

import { ImgId } from "~/src/scripts/configs/imgid"
import { LIST_PNG_PATHNAME } from "~/src/scripts/configs/png"

// 配列管理を調べる
export class Images extends ImgId {
    p5: p5
    images: Array<p5.Image>

    constructor(p5: p5) {
        super()
        this.p5 = p5
        this.images = new Array(Images.ID_MAX)
    }

    // 全ての画像を読み込む
    loadAll() {
        for (let i = 0; i < this.images.length; i++) {
            this.images[i] = this.loadImage(i)
        }
    }

    loadImage(id: number): p5.Image {
        return this.p5.loadImage(LIST_PNG_PATHNAME[id])
    }

    get(id: number): p5.Image {
        return this.images[id]
    }
}
