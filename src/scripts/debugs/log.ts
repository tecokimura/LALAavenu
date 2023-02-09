export class Log {
    // Logなので直す
    private static isP5: boolean = true
    private static isInfo: boolean = true
    private static isKeycode: boolean = true

    public static p5(mess: string) {
        if (Log.isP5) console.log(mess)
    }

    public static info(mess: string) {
        if (Log.isInfo) console.log(mess)
    }

    public static keycode(mess: string) {
        if (Log.isKeycode) console.log(mess)
    }
}
