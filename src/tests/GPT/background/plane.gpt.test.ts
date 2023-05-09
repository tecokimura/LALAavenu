import { Plane } from "~/src/scripts/classes/background/plane"
import { ImgId } from "~/src/scripts/configs/imgid"

describe("Plane", () => {
    test("should have correct image id", () => {
        const plane = new Plane(0, 0)
        expect(plane.image).toBe(ImgId.ID_BG_PLANE)
    })

    test("should have correct object kind", () => {
        const plane = new Plane(0, 0)
        expect(plane.isBackgroundPlane).toBe(true)
    })

    test("should have correct speed when going right", () => {
        const plane = new Plane(0, 0)
        plane.directionRight()
        expect(plane.spX).toBe(Plane.SPEED_RIGHT)
    })

    test("should have correct speed when going left", () => {
        const plane = new Plane(0, 0)
        plane.directionLeft()
        expect(plane.spX).toBe(Plane.SPEED_LEFT)
    })
})
