import { GameObject } from "~/src/scripts/classes/abstract/gameobject"

// GameObjectに画像描画やアニメーションが必要なクラス
export abstract class ImageGameObject extends GameObject {
    // "p5.Imageオブジェクト"か"画像インデックス"か悩んだが
    // 読み込みと管理がimagesクラスなので画像インデックスを返すことにした。
    abstract get image(): number

    protected offsetImageNo: number = 0

    protected images: Array<number> = new Array()
    protected animations: Array<number> = new Array()

    public setOffsetImageNo(offset: number) {
        this.offsetImageNo = offset
    }

    public setImages(list: Array<number>) {
        this.images = list
    }

    public setAnimations(list: Array<number>) {
        this.animations = list
    }
}
