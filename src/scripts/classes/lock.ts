export class Lock {
    private value: boolean

    constructor() {
        this.value = false
    }

    public isLocked(): boolean {
        return this.value == true
    }

    public isUnlocked(): boolean {
        return this.value == false
    }

    public lock(): void {
        this.value = true
    }

    public unlock(): void {
        this.value = false
    }
}
