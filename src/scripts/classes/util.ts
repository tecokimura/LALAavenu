export class Util {
    // 乱数のベース
    public static rand(range: number = 1000, digit: number = 1000): number {
        return (Math.floor(Math.random() * digit) + 1) % range
    }

    // 0,1をランダムで返す
    public static randZeroOne(
        range: number = 1000,
        digit: number = 1000
    ): number {
        return Util.rand(2)
    }

    // 0,1を返したときに0の場合
    public static isRand50per(
        range: number = 1000,
        digit: number = 1000
    ): boolean {
        return Util.rand(2) == 0
    }
}
