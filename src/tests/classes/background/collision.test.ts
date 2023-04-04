import { Train } from "~/src/scripts/classes/background/train"
import { Collision } from "~/src/scripts/classes/basis/collision"

test("object collision", () => {
    const display = new Collision(0, 0, 200, 200)

    const train = new Train(Train.PINK, 0, 0)
    train.setCollision(0, 0, 50, 50)
    train.direction(10)

    let is = false
    is = display.isOverlap(train.hitRect())
    expect(is).toBe(true)

    // x=100,w=50
    for (let i = 0; i < 10; i++) {
        train.move()
    }

    expect(display.isOverlap(train.hitRect())).toBe(true)

    // x=200,w=50
    for (let i = 0; i < 10; i++) {
        train.move()
    }
    expect(display.isOverlap(train.hitRect())).toBe(true)

    // x=201,w=50
    train.direction(1)
    train.move()
    expect(display.isOverlap(train.hitRect())).toBe(false)
})

// for で回して移動させて総定数なくなることをチェックする
test("Remove the train from the list when it exits the screen.", () => {
    const TRAIN_NUM = 5
    const display = new Collision(0, 0, 240, 240)

    //------
    // new test
    //=========
    const set = new Set<Train>()

    for (let i = 0; i < TRAIN_NUM; i++) {
        const train = new Train(Train.PINK, i * 20, 0)
        train.setCollision(0, 0, 50, 50)
        train.direction(20)

        set.add(train)
    }

    set.forEach((value, vAgain, set) => {
        for (let i = 0; i < 10; i++) {
            value.move()

            if (display.isOverlap(value.hitRect()) == false) {
                // 画面から出ている（画面に当たっていない）なら削除
                console.log(value)
                set.delete(value)
            }
        }
    })

    // 計算上３つ残る
    expect(set.size).toBe(3)
})
