import { Balloon } from "~/src/scripts/classes/background/balloon"
import { ImgId } from "~/src/scripts/configs/imgid"

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Balloon(0, 0)

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
})

test("offset image no", () => {
    const obj = new Balloon(0, 0)
    expect(obj.image).toBe(ImgId.ID_BG_BALLOON)
})
