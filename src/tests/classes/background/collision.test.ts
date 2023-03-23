import { Train } from "~/src/scripts/classes/background/train"
import { Collision } from "~/src/scripts/classes/basis/collision"

test("object collision", () => {
    const col = new Collision(0, 0, 200, 200)

    const train = new Train(Train.PINK, 0, 0)
    train.setCollision(0, 0, 50, 50)
    train.direction(10)

    let is = false
    is = col.isOverlap(train.hitRect())
    expect(is).toBe(true)

    // x=100,w=50
    for (let i = 0; i < 10; i++) {
        train.move()
    }

    expect(col.isOverlap(train.hitRect())).toBe(true)

    // x=200,w=50
    for (let i = 0; i < 10; i++) {
        train.move()
    }
    expect(col.isOverlap(train.hitRect())).toBe(true)

    // x=201,w=50
    train.direction(1)
    train.move()
    expect(col.isOverlap(train.hitRect())).toBe(false)
})

// for で回して移動させて総定数なくなることをチェックする
test("for test", () => {
    const col = new Collision(0, 0, 200, 200)

    const list = new Array()

    for (let i = 0; i < 5; i++) {
        const train = new Train(Train.PINK, i * 10, 0)
        train.setCollision(0, 0, 50, 50)
        train.direction(20)

        list.push(train)
    }

    for (let i = 0; i < 10; i++) {
        list.forEach((train, index) => {
            train.move()

            if (col.isOverlap(train.hitRect()) == false) {
                // 画面から出ている（画面に当たっていない）なら削除
                delete list[index]
            }
        })
    }

    // 配列のメモリは変更されないので５のまま
    expect(list.length).toBe(1)
})
