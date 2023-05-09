import { Balloon } from "~/src/scripts/classes/background/balloon"
import { ImgId } from "~/src/scripts/configs/imgid"

describe("Balloon", () => {
    describe("constructor", () => {
        it("should set the object kind to GameObject.BACKGROUND_BALLOON", () => {
            const balloon = new Balloon(0, 0)
            expect(balloon.isBackgroundBalloon).toBe(true)
        })

        it("should set the position with the given x and y coordinates", () => {
            const balloon = new Balloon(10, 20)
            expect(balloon.x).toEqual(10)
            expect(balloon.y).toEqual(20)
        })

        it("should set the speed with Balloon.SPEED_X and Balloon.SPEED_Y", () => {
            const balloon = new Balloon(0, 0)
            expect(balloon.spX).toEqual(Balloon.SPEED_X)
            expect(balloon.spY).toEqual(Balloon.SPEED_Y)
        })
    })

    describe("reversalSpeed", () => {
        it("should reverse the horizontal speed of the balloon", () => {
            const balloon = new Balloon(0, 0)
            balloon.reversalSpeed()
            expect(balloon.spX).toEqual(Balloon.SPEED_X * -1)
            expect(balloon.spY).toEqual(Balloon.SPEED_Y)
        })
    })

    describe("image", () => {
        it("should return the ID_BG_BALLOON constant from ImgId", () => {
            const balloon = new Balloon(0, 0)
            expect(balloon.image).toBe(ImgId.ID_BG_BALLOON)
        })
    })
})
