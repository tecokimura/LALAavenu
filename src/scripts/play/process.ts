import { Game } from "~/src/scripts/play/game"

export class Process {
    game: Game

    canDo: boolean = true // 動いてよいかどうか
    counter: number = 0
    counterOfTown: number = 0

    constructor(g: Game) {
        this.game = g
    }

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
