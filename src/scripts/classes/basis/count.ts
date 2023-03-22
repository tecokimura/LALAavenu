export class Count {
    private num: number = 0

    constructor() {
        this.reset(0)
    }

    reset(value = 0) {
        if (0 <= value) this.num = value
    }

    get value(): number {
        return this.num
    }

    counting(n: number = 1) {
        this.num += n
    }
}
