import { Train } from "~/src/scripts/classes/background/train"
import { ImgId } from "~/src/scripts/configs/imgid"

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Train(Train.Types.PINK, 0, 0)

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
})

test("offset image no", () => {
    const obj = new Train(Train.Types.RED, 0, 0)

    expect(obj.image).toBe(ImgId.ID_BG_TRAIN0 + Train.Types.RED)
})
