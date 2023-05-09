import { Keycode } from "~/src/scripts/configs/keycode"
import { Keyinput } from "~/src/scripts/classes/keyinput"

describe("Keyinput constructor", () => {
    test("initializes pressKeyBuffer to NONE", () => {
        const keyinput = new Keyinput()
        expect(keyinput["pressKeyBuffer"]).toBe(Keycode.NONE)
    })

    test("initializes keycodeHistory with NONE values", () => {
        const keyinput = new Keyinput()
        expect(keyinput["keycodeHistory"]).toEqual([
            Keycode.NONE,
            Keycode.NONE,
            Keycode.NONE,
            Keycode.NONE,
            Keycode.NONE,
        ])
    })
})

describe("keyPressed", () => {
    let keyinput: Keyinput

    beforeEach(() => {
        keyinput = new Keyinput()
    })

    it("should update pressKeyBuffer with the given keycode", () => {
        // Arrange
        const keycode = Keycode.UP

        // Act
        keyinput.keyPressed(keycode)

        // Assert
        expect(keyinput["pressKeyBuffer"]).toBe(keycode)
    })

    it("should log the given keycode", () => {
        // Arrange
        const logSpy = jest.spyOn(console, "log").mockImplementation()

        const keycode = Keycode.DOWN

        // Act
        keyinput.keyPressed(keycode)

        // Assert
        expect(logSpy).toHaveBeenCalledWith(`Keyinput::keyPressed:${keycode}`)

        // Clean up
        logSpy.mockRestore()
    })
})

describe("isPressKey", () => {
    let keyinput: Keyinput

    beforeEach(() => {
        keyinput = new Keyinput()
    })

    test("returns false when no keys are pressed", () => {
        const result = keyinput.isPressKey()
        expect(result).toBe(false)
    })

    test("returns false when the specified key is not pressed", () => {
        keyinput.updateKeycodeHistory(true, Keycode.UP)
        const result = keyinput.isPressKey(Keycode.DOWN)
        expect(result).toBe(false)
    })

    test("returns true when the specified key is pressed", () => {
        keyinput.updateKeycodeHistory(true, Keycode.UP)
        const result = keyinput.isPressKey(Keycode.UP)
        expect(result).toBe(true)
    })

    test("returns true when any key is pressed", () => {
        keyinput.updateKeycodeHistory(true, Keycode.UP)
        const result = keyinput.isPressKey(Keycode.ANY)
        expect(result).toBe(true)
    })

    test("returns true when any key is held down", () => {
        keyinput.updateKeycodeHistory(true, Keycode.UP)
        keyinput.updateKeycodeHistory(true, Keycode.DOWN)
        const result = keyinput.isPressKey(Keycode.ANY)
        expect(result).toBe(true)
    })
})

describe("isPressKeyNow", () => {
    test("returns false if the specified key has not been pressed", () => {
        const keyinput = new Keyinput()
        expect(keyinput.isPressKeyNow(Keycode.G)).toBe(false)
    })

    test("returns false if the specified key is the same as the second most recently pressed key", () => {
        const keyinput = new Keyinput()
        keyinput.updateKeycodeHistory(true, Keycode.A)
        keyinput.updateKeycodeHistory(true, Keycode.G)
        expect(keyinput.isPressKeyNow(Keycode.A)).toBe(false)
    })

    test("returns true if the specified key is the most recently pressed key", () => {
        const keyinput = new Keyinput()
        keyinput.keyPressed(Keycode.A)
        keyinput.updateKeycodeHistory(false, Keycode.NONE)
        expect(keyinput.isPressKeyNow(Keycode.A)).toBe(true)
    })

    test("returns true if the specified key is Keycode.ANY and any key is pressed", () => {
        const keyinput = new Keyinput()
        keyinput.keyPressed(Keycode.A)
        keyinput.updateKeycodeHistory(false, Keycode.NONE)
        expect(keyinput.isPressKeyNow(Keycode.ANY)).toBe(true)
    })
})

describe("isReleaseKeyNow", () => {
    let keyinput: Keyinput

    beforeEach(() => {
        keyinput = new Keyinput()
    })

    test("should return false when no key is released", () => {
        const result = keyinput.isReleaseKeyNow()
        expect(result).toBeFalsy()
    })

    test("should return false when a key is pressed", () => {
        const result = keyinput.isReleaseKeyNow()
        expect(result).toBeFalsy()
    })

    test("should return true when a key is released after being held down", () => {
        keyinput.keyPressed(Keycode.A)
        keyinput.updateKeycodeHistory(true, Keycode.NONE)
        keyinput.updateKeycodeHistory(false, Keycode.NONE)
        const result = keyinput.isReleaseKeyNow()
        expect(result).toBeTruthy()
    })
})
