import { Scene } from "~/src/scripts/classes/scene"

describe("Scene", () => {
    let scene: Scene

    beforeEach(() => {
        scene = new Scene()
    })

    it("isNone", () => {
        expect(scene.isNone()).toBe(true)
        scene.changeLoading().updateScene()
        expect(scene.isNone()).toBe(false)
    })

    it("isLoading", () => {
        expect(scene.isLoading()).toBe(false)
        scene.changeLoading().updateScene()
        expect(scene.isLoading()).toBe(true)
    })

    it("isInitTitle", () => {
        expect(scene.isInitTitle()).toBe(false)
        scene.changeTitle().updateScene()
        expect(scene.isInitTitle()).toBe(true)
    })

    it("isTitle", () => {
        expect(scene.isTitle()).toBe(false)
        scene.startTitle().updateScene()
        expect(scene.isTitle()).toBe(true)
    })

    it("isOpening", () => {
        expect(scene.isOpening()).toBe(false)
        scene.changeOpening().updateScene()
        expect(scene.isOpening()).toBe(true)
    })

    it("isPlaying", () => {
        expect(scene.isPlaying()).toBe(false)
        scene.changePlaying().updateScene()
        expect(scene.isPlaying()).toBe(true)
    })

    it("isBombed", () => {
        expect(scene.isBombed()).toBe(false)
        scene.changeBombed().updateScene()
        expect(scene.isBombed()).toBe(true)
    })

    it("isGameover", () => {
        expect(scene.isGameover()).toBe(false)
        scene.changeGameover().updateScene()
        expect(scene.isGameover()).toBe(true)
    })

    it("count", () => {
        expect(scene.count()).toBe(0)
        scene.updateScene()
        expect(scene.count()).toBeGreaterThan(0)
    })
})
