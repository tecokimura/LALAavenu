import { Girl } from "~/src/scripts/classes/background/girl"
import { ImgId } from "~/src/scripts/configs/imgid"

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Girl(0, 0)

    expect(obj.isBackground).toBe(true)
    expect(obj.isBackgroundBalloon).toBe(false)
    expect(obj.isBackgroundCloud).toBe(false)
    expect(obj.isBackgroundGirl).toBe(true)
    expect(obj.isBackgroundTrain).toBe(false)

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
})

test("offset image no", () => {
    const obj = new Girl(0, 0)
    expect(obj.image).toBe(ImgId.ID_BG_BALLOON_GIRL)
})
