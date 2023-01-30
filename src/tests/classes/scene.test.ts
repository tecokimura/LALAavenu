import { Scene } from "scripts/classes/scene"

test("check number", () => {
    expect(0).toBe(Scene.NONE)
    expect(1).toBe(Scene.LOADING)
    expect(2).toBe(Scene.TITLE)
    expect(3).toBe(Scene.OPENING)
    expect(4).toBe(Scene.PLAYING)
    expect(5).toBe(Scene.BOMBED)
    expect(6).toBe(Scene.GAMEOVER)
})
