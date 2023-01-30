import p5 from "p5"

export class Process {
    p5: p5 // 引数でクラスに持つ必要ないかも
    canDo: boolean = true // 動いてよいかどうか
    counter: number = 0
    counterOfTown: number = 0

    constructor(p: p5) {
        this.p5 = p
        this.init()
    }

    init() {}

    do() {
        if (this.canDo) {
            this.counter++
            console.log(this.counter)
        }
        this.repeat()
    }

    // 関数ポインタを渡したいがうまく行かないので保留
    repeat(time: number = 100) {
        setTimeout(() => {
            this.do()
        }, time)
    }
}
