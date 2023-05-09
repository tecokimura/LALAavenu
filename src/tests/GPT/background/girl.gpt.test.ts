import { Girl } from "~/src/scripts/classes/background/girl"
import { Position } from "~/src/scripts/classes/basis/position"
import { Speed } from "~/src/scripts/classes/basis/speed"
import { GameObject } from "~/src/scripts/classes/abstract/gameobject"
import { ImgId } from "~/src/scripts/configs/imgid"

describe("Girl", () => {
    describe("constructor", () => {
        const x = 100
        const y = 200
        const girl = new Girl(x, y)

        test("has correct objKind", () => {
            expect(girl.isBackgroundGirl).toBe(true)
        })

        test("has correct pos", () => {
            expect(girl.x).toEqual(x)
            expect(girl.y).toEqual(y)
        })
    })

    describe("image", () => {
        const girl = new Girl(0, 0)

        test("returns the correct image ID", () => {
            expect(girl.image).toBe(ImgId.ID_BG_BALLOON_GIRL)
        })
    })
})
