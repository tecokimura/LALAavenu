export class Debug {
    // Logなので直す
    private static isP5: boolean = true
    private static isInfo: boolean = true
    private static isKeycode: boolean = true

    public static p5(mess: string) {
        if (Debug.isP5) console.log(mess)
    }

    public static info(mess: string) {
        if (Debug.isInfo) console.log(mess)
    }

    public static keycode(mess: string) {
        if (Debug.isKeycode) console.log(mess)
    }
}
