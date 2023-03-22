import { ProcessBase } from "~/src/scripts/play/process/base"

import { Game } from "~/src/scripts/play/game"
import { Images } from "~/src/scripts/classes/images"
import { Util } from "~/src/scripts/classes/util"
import { Keycode } from "~/src/scripts/configs/keycode"
import { Count } from "~/src/scripts/classes/basis/count"

import { Train } from "~/src/scripts/classes/background/train"
import { Display } from "../../configs/display"

// タイトル画面の処理
export class Title extends ProcessBase {
    constructor(g: Game) {
        super(g)
    }

    // 初期化
    prepare() {
        this.game.clearBackgrounds()
        const train = new Train(Util.rand(Train.MAX), 0, 224).directionRight()
        this.game.backgrounds.push(train)

        this.count = new Count()
    }

    do() {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeOpening()
        }

        // 追加
        if (this.count.value % 100 == 0) {
            this.game.backgrounds.push(this.newTrain(1))
        }

        /**
         * a train
         * a gril
         * a ballorn
         * a plane
         * cloud
         */
        this.game.backgrounds.forEach((train, index) => {
            train.move()

            if (Display.collision.isOverlap(train.hitRect()) == false) {
                // 画面から出ている（画面に当たっていない）なら削除
                delete this.game.backgrounds[index]
                console.log("train delete =" + index)
            }
        })

        this.count.counting()
    }

    newTrain(spX: number): Train {
        let x,
            y,
            sp = 0
        let type = Util.rand(Train.MAX)
        let train = new Train(type, 0, 0)
        let image_width = this.game.image(train.image).width

        train.setCollision(
            0,
            0,
            image_width,
            this.game.image(train.image).height
        )

        console.log("train type=" + type)

        if (0 < spX) {
            // 進行方向右
            x = Display.X - image_width
            y = 224
            sp = Train.SPEED_RIGHT
        } else {
            // 進行方向左
            x = Display.WIDTH
            y = 222
            sp = Train.SPEED_LEFT
        }

        train.setPotision(x, y)
        train.direction(sp)

        return train
    }
}
