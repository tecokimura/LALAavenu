import { ProcessBase } from "~/src/scripts/play/process/processbase"

import { Game } from "~/src/scripts/play/game"
import { Random } from "~/src/scripts/classes/random"
import { Keycode } from "~/src/scripts/configs/keycode"
import { Count } from "~/src/scripts/classes/basis/count"
import { Display } from "~/src/scripts/configs/display"

import { Train } from "~/src/scripts/classes/background/train"
import { Balloon } from "~/src/scripts/classes/background/balloon"
import { Girl } from "~/src/scripts/classes/background/girl"
import { Cloud } from "~/src/scripts/classes/background/cloud"
import { Plane } from "~/src/scripts/classes/background/plane"

// タイトル画面の処理
export class Title extends ProcessBase {
    constructor(g: Game) {
        super(g)
    }

    // 初期化
    prepare() {
        this.count = new Count()
        this.game.backgrounds.clear()

        this.game.backgrounds.add(this.newBalloon(-30, 160))
        this.game.backgrounds.add(this.newGirl(180, 300))
        this.game.backgrounds.add(this.newCloud(200, 150))
        this.game.backgrounds.add(this.newPlane())
    }

    do() {
        if (this.game.keyinput().isPressKeyNow(Keycode.ENTER)) {
            this.game.scene().changeOpening()
        }

        // 定期的に電車を追加して発車させる
        if (this.count.value % 70 == 0) {
            this.game.backgrounds.add(this.newTrain())
        }

        /**
         * a gril
         * a plane
         * clouds
         */
        this.game.backgrounds.forEach((bgobj, index) => {
            bgobj.move()

            if (bgobj.isBackgroundTrain) {
                if (Display.collision.isOverlap(bgobj.hitRect()) == false) {
                    // 画面から出ている（画面に当たっていない）なら削除
                    this.game.backgrounds.delete(bgobj)
                    console.log("train delete =" + index)
                }
            } else if (bgobj.isBackgroundBalloon) {
                let balloon: Balloon = bgobj as Balloon
                if (Display.collision.isOverlap(balloon.hitRect()) == false) {
                    if (
                        (Display.centerOfTheWidth < balloon.x &&
                            0 < balloon.spX) ||
                        (balloon.x < Display.centerOfTheWidth &&
                            balloon.spX < -1)
                    ) {
                        balloon.reversalSpeed()
                    }
                }
            }
        })

        this.count.counting()
    }

    newTrain(): Train {
        let x,
            y,
            sp = 0
        let isRight: boolean = Random.binary() == 0
        let type = Random.range(Train.MAX)
        let train = new Train(type, 0, 0)
        let image_width = this.game.image(train.image).width

        train.setCollision(
            0,
            0,
            image_width,
            this.game.image(train.image).height
        )

        console.log("newTrain type=" + type)

        if (isRight) {
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

    // 初期化に画像サイズあればもういらなそう・・・
    newBalloon(x: number, y: number): Balloon {
        let balloon = new Balloon(x, y)

        balloon.setCollision(
            0,
            0,
            this.game.image(balloon.image).width,
            this.game.image(balloon.image).height
        )

        return balloon
    }

    // Collisionが必要なさそうなので特に何もする必要がなかった・・・
    newGirl(x: number, y: number): Girl {
        let girl = new Girl(x, y)

        return girl
    }

    // TODO: これいらないかも
    newCloud(x: number, y: number): Cloud {
        return new Cloud(x, y)
    }

    newPlane(): Plane {
        let x,
            y,
            sp = 0
        let isRight: boolean = Random.binary() == 0
        let plane = new Plane(0, 0)
        let image_width = this.game.image(plane.image).width

        plane.setCollision(
            0,
            0,
            image_width,
            this.game.image(plane.image).height
        )

        if (isRight) {
            // 進行方向右
            x = Display.X - image_width
            y = 60
            sp = Plane.SPEED_RIGHT
        } else {
            // 進行方向左
            x = Display.WIDTH
            y = 62
            sp = Plane.SPEED_LEFT
        }

        plane.setPotision(x, y)
        plane.direction(sp)

        return plane
    }
}
