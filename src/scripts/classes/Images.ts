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

    // 画像参照様INDEX（scripts/resource/pngs.ts と連動）
    static readonly ID_UFO1 = 0;
    static readonly ID_UFO2 = 1;
    static readonly ID_UFO3 = 3;
    static readonly ID_MAX  = 4;
}
