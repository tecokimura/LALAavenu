export abstract class Random {
    private static readonly DEFAULT_MAX_RANDOM_NUMBER = 10000

    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // The maximum is inclusive and the minimum is inclusive
    private static getRandomIntInclusive(
        lowerBound: number = 0,
        upperBound: number = Random.DEFAULT_MAX_RANDOM_NUMBER
    ) {
        lowerBound = Math.ceil(lowerBound)
        upperBound = Math.floor(upperBound)
        return Math.floor(
            Math.random() * (upperBound - lowerBound + 1) + lowerBound
        )
    }

    // 乱数のベース
    public static between(
        min: number = 0,
        max: number = Random.DEFAULT_MAX_RANDOM_NUMBER
    ): number {
        return Random.getRandomIntInclusive(min, max)
    }

    // 乱数のベース 0からMAX-1の値を返す
    // default の 1は
    public static range(
        range: number = Random.DEFAULT_MAX_RANDOM_NUMBER
    ): number {
        if (range <= 0) return 0
        return Random.getRandomIntInclusive(0, range - 1)
    }

    // 0,1をランダムで返す
    public static binary(): number {
        return Random.getRandomIntInclusive(0, 1)
    }

    // 0,1のランダム値をbooleanとして返す
    public static isZeroBinary(): boolean {
        return Random.getRandomIntInclusive(0, 1) == 1
    }
}
