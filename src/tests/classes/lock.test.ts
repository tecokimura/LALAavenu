import { Lock } from "~/src/scripts/classes/lock"

test("constructor", () => {
    const lock = new Lock()
    expect(lock.isLocked()).toBe(false)
    expect(lock.isUnlocked()).toBe(true)
})

test("lock unlock", () => {
    const lock = new Lock()
    expect(lock.isLocked()).toBe(false)
    expect(lock.isUnlocked()).toBe(true)
    lock.lock()
    expect(lock.isLocked()).toBe(true)
    expect(lock.isUnlocked()).toBe(false)
    lock.unlock()
    expect(lock.isLocked()).toBe(false)
    expect(lock.isUnlocked()).toBe(true)
})
