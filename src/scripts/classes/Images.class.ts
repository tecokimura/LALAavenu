import p5 from "p5"

const downloadUrl = new URL("/res/ufo.png", import.meta.url)
// 配列管理を調べる
export class Images {
    p5: p5
    images: p5.Image

    constructor(p5: p5) {
        this.p5 = p5
        console.log("thisis=" + downloadUrl)
    }

    load() {
        this.images = this.p5.loadImage(downloadUrl.pathname)
    }

    get(id: number): p5.Image {
        return this.images
    }
}
