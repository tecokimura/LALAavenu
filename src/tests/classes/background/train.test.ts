import { Train } from "~/src/scripts/classes/background/train"

// 環境変数を伴うテスト（画像関連）はエラーになるので改めて調査する
//  The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.
test("constructor", () => {
    // 初期値は全て０なので関数を読んでも変化しないはず
    const obj = new Train(Train.PINK, 0, 0)

    expect(obj.x).toBe(0)
    expect(obj.y).toBe(0)
})

test("offset image no", () => {
    const obj = new Train(Train.RED, 0, 0)

    expect(obj.image).toBe(Train.RED)

    obj.setOffsetImageNo(10)

    expect(obj.image).toBe(10 + Train.RED)
})
