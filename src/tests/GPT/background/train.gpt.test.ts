import { Train } from "~/src/scripts/classes/background/train"

describe("Train", () => {
    describe("constructor", () => {
        it("should create a train object with the given type, x and y position", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            expect(train).toBeDefined()
            expect(train.type).toEqual(Train.Types.PINK)
            expect(train.x).toEqual(10)
            expect(train.y).toEqual(20)
        })
    })

    describe("direction", () => {
        it("should set the speed to the given value", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            const speed = 3
            train.direction(speed)
            expect(train.spX).toEqual(speed)
            expect(train.spY).toEqual(0)
        })

        it("should return this", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            expect(train.direction(2)).toBe(train)
        })
    })

    describe("directionRight", () => {
        it("should set the speed to Train.Speeds.RIGHT", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            train.directionRight()
            expect(train.spX).toEqual(Train.Speeds.RIGHT)
            expect(train.spY).toEqual(0)
        })

        it("should return this", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            expect(train.directionRight()).toBe(train)
        })
    })

    describe("directionLeft", () => {
        it("should set the speed to Train.Speeds.LEFT", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            train.directionLeft()
            expect(train.spX).toEqual(Train.Speeds.LEFT)
            expect(train.spY).toEqual(0)
        })

        it("should return this", () => {
            const train = new Train(Train.Types.PINK, 10, 20)
            expect(train.directionLeft()).toBe(train)
        })
    })
})
