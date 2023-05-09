import { Plane } from "~/src/scripts/classes/background/plane"
import { ImgId } from "~/src/scripts/configs/imgid"

test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Plane(0, 0)

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
})

test("offset image no", () => {
    const obj = new Plane(0, 0)

    expect(obj.image).toBe(ImgId.ID_BG_PLANE)
})
