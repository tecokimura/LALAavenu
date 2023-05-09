import { Game } from "~/src/scripts/play/game"
import { Count } from "~/src/scripts/classes/basis/count"
import { Lock } from "~/src/scripts/classes/basis/lock"

export abstract class ProcessBase {
    protected readonly game: Game
    protected count: Count
    public readonly lock: Lock

    constructor(g: Game) {
        this.game = g

        this.count = new Count()

        this.lock = new Lock()
    }

    abstract prepare(): void
    abstract do(): void
}
