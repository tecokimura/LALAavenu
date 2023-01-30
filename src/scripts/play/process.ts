import p5 from "p5"

export class Process {
    p5: p5
    canDraw: boolean = false
    count: number = 0

    constructor(p: p5) {
        this.p5 = p
        this.init()
    }

    init() {}

    do() {
        this.count++
        console.log(this.count)

        this.canDraw = true
        this.repeat()
    }

    // 関数ポインタを渡したいがうまく行かないので保留
    repeat(time: number = 100) {
        setTimeout(() => {
            this.do()
        }, time)
    }
}
