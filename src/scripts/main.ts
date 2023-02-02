import p5 from "p5"

// TODO:importの書き方に問題がありそう
import { Scene as Scene2 } from "/src/scripts/classes/scene"

// https://p5js.org/reference/#/p5/p5
const s = (p5: p5) => {
    let images: Images
    let game: Game
    let process: Process
    let drawing: Drawing

    // Init
    p5.preload = () => {
        images = new Images(p5)
        game = new Game(p5, images)
        process = new Process(game)
        drawing = new Drawing(game)
        let test = new Scene2()
    }

    // Loading
    p5.setup = () => {
        images.loadAll()

        process.do()
    }

    //
    p5.keyPressed = () => {
        game.keyPressed(p5.keyCode)
    }

    //
    p5.keyReleased = () => {
        game.keyReleased()
    }

    //
    p5.draw = () => {
        p5.fill(255, 0, 0)
        p5.rect(0, 0, 240, 240)

        testImage(p5)

        drawing.do()
    }

    function testImage(p5: p5) {
        p5.image(images.get(Images.ID_PLAYER_MACHINE), 10, 10)
        p5.image(images.get(Images.ID_ENEMY_ENEMY0), 20, 60)
    }
}

// https://p5js.org/reference/#/p5/p5
new p5(s)

//----
// Classes
//----
export class Game {
    p5: p5
    private images: Images
    private scene: Scene
    private counter: number = 0

    keycodeHistory: Array<number> = new Array(5)
    pressKeyBuffer: number = 0 // イベントで取得した最新のキー
    holdDownKey: number = 0 // 押しっぱなしのキー

    constructor(p: p5, img: Images) {
        this.p5 = p
        this.images = img
        this.scene = new Scene()
        this.pressKeyBuffer = Keycode.NONE
        for (let i = 0; i < this.keycodeHistory.length; i++) {
            this.keycodeHistory[i] = Keycode.NONE
        }
        // 乱数の初期化
    }

    // p5のkeyPressedから呼ばれる想定
    keyPressed(p5KeyCode: number) {
        this.pressKeyBuffer = p5KeyCode
    }

    // p5のkeyPressedから呼ばれる想定
    keyReleased() {
        this.pressKeyBuffer = Keycode.NONE
    }

    // キーが押されていないならfalse
    // 調べるキーがANYならtrue
    // 指定されたキーか調べる。
    isPressKey(code: number = Keycode.ANY): boolean {
        if (this.keycodeHistory[0] == Keycode.NONE) return false

        if (code == Keycode.ANY) return true

        // キーが指定されている場合は調べて更新する
        return this.keycodeHistory[0] == code
    }

    // キーが今のフレームで押されたかを調べる
    // 履歴の前が押していなくて今が押していればtrue
    isPressKeyNow(): boolean {
        return (
            this.keycodeHistory[0] != Keycode.NONE &&
            this.keycodeHistory[1] == Keycode.NONE
        )
    }

    // 今キーを離したかを取得する
    isReleaseKeyNow(): boolean {
        return (
            this.keycodeHistory[0] == Keycode.NONE &&
            this.keycodeHistory[1] != Keycode.NONE
        )
    }

    // 最後に押された処理するキーを調べる
    isLastPressKey(code: Keycode): boolean {
        return this.keycodeHistory[0] == code
    }

    // processで使用する
    processUpdateKeycode(p5: p5) {
        this.rotateKeycodeHistory()
        this.updateKeycodeHistory(p5)
    }

    // キー履歴をローテーションする
    rotateKeycodeHistory() {
        // キーコード履歴 を更新する
        // 新しい [MIN] <  [MAX] 古い
        for (let i = 0; i < this.keycodeHistory.length - 1; i++) {
            this.keycodeHistory[i + 1] = this.keycodeHistory[i]
        }
    }

    // 処理するキー入力を更新する
    updateKeycodeHistory(p5: p5) {
        // p5で押しっぱなしと判定されたら上書きする
        if (p5.keyIsPressed) {
            this.pressKeyBuffer = p5.keyCode
        }

        this.keycodeHistory[0] = this.pressKeyBuffer
        this.pressKeyBuffer = Keycode.NONE
    }

    getImages(): Images {
        return this.images
    }
}

export class Drawing {
    game: Game

    canDo: boolean = true // 動き出してよいか？
    counter: number = 0
    images: Images

    constructor(g: Game) {
        this.game = g
        this.images = g.getImages()
    }

    init() {
        this.counter = 0
    }

    do() {
        if (this.canDo) {
            this.counter++

            this.game.p5.image(this.images.get(27), this.counter % 200, 20)
        }
    }

    // No need to write this because working p5
    // repeat() { ... }
}

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

export class Scene {
    value: number

    constructor() {
        this.value = Scene.NONE
    }

    // 正確に連番である必要はない
    static readonly NONE = 0
    static readonly LOADING = 1
    static readonly TITLE = 2
    static readonly OPENING = 3
    static readonly PLAYING = 4
    static readonly BOMBED = 5
    static readonly GAMEOVER = 6

    isNone(): boolean {
        return this.value == Scene.NONE
    }
    isLoading(): boolean {
        return this.value == Scene.LOADING
    }
    isTitle(): boolean {
        return this.value == Scene.TITLE
    }
    isOpening(): boolean {
        return this.value == Scene.OPENING
    }
    isPlaying(): boolean {
        return this.value == Scene.PLAYING
    }
    isBombed(): boolean {
        return this.value == Scene.BOMBED
    }
    isGameover(): boolean {
        return this.value == Scene.GAMEOVER
    }

    changeNone() {
        this.value = Scene.NONE
    }
    changeLoading() {
        this.value = Scene.LOADING
    }
    changeTitle() {
        this.value = Scene.TITLE
    }
    changeOpening() {
        this.value = Scene.OPENING
    }
    changePlaying() {
        this.value = Scene.PLAYING
    }
    changeBombed() {
        this.value = Scene.BOMBED
    }
    changeGameover() {
        this.value = Scene.GAMEOVER
    }
}

export class Images {
    p5: p5
    images: Array<p5.Image>

    constructor(p5: p5) {
        this.p5 = p5
        this.images = new Array(Images.ID_MAX)
    }

    // 全ての画像を読み込む
    loadAll() {
        for (let i = 0; i < this.images.length; i++) {
            this.images[i] = this.loadImage(i)
        }
    }

    loadImage(id: number): p5.Image {
        return this.p5.loadImage(LIST_PNG_PATHNAME[id])
    }

    get(id: number): p5.Image {
        return this.images[id]
    }

    // 画像参照様INDEX（scripts/resource/pngs.ts と連動）
    static readonly ID_UFO = 0
    static readonly ID_BG_BALLOON = 0
    static readonly ID_BG_BALLOON_GIRL = 1
    static readonly ID_BG_BOMBED = 2
    static readonly ID_BG_CLOUD = 3
    static readonly ID_BG_MESSAGEBOX = 4
    static readonly ID_BG_PLANE = 5
    static readonly ID_BG_THEEND = 6
    static readonly ID_BG_TOWN_BACK = 7
    static readonly ID_BG_TOWN_FRONT = 8
    static readonly ID_BG_TRAIN0 = 9
    static readonly ID_BG_TRAIN1 = 0
    static readonly ID_BG_TRAIN2 = 10
    static readonly ID_BG_TRAIN3 = 12
    static readonly ID_BG_TRAIN4 = 13
    static readonly ID_EFFECT_BREAK_AIR0 = 14
    static readonly ID_EFFECT_BREAK_AIR1 = 15
    static readonly ID_EFFECT_BREAK_AIR2 = 16
    static readonly ID_EFFECT_BREAK_AIR3 = 17
    static readonly ID_EFFECT_BREAK_AIR4 = 18
    static readonly ID_EFFECT_BREAK_ENEMY0 = 19
    static readonly ID_EFFECT_BREAK_ENEMY1 = 20
    static readonly ID_EFFECT_BREAK_ENEMY2 = 21
    static readonly ID_EFFECT_BREAK_ENEMY3 = 22
    static readonly ID_EFFECT_SHIELD0 = 23
    static readonly ID_EFFECT_SHIELD1 = 24
    static readonly ID_EFFECT_SHOT0 = 25
    static readonly ID_EFFECT_SHOT1 = 26
    static readonly ID_ENEMY_CURSOR_ENEMY = 27
    static readonly ID_ENEMY_ENEMY0 = 28
    static readonly ID_ENEMY_ENEMY1 = 29
    static readonly ID_ENEMY_ENEMY2 = 30
    static readonly ID_ENEMY_ENEMY3 = 31
    static readonly ID_ENEMY_ENEMY4 = 32
    static readonly ID_FONT_AUTOSHOT = 33
    static readonly ID_FONT_COLON_BLUE = 34
    static readonly ID_FONT_COLON_WHITE = 35
    static readonly ID_FONT_DEFEATED = 36
    static readonly ID_FONT_ENEMY = 37
    static readonly ID_FONT_HISCORE = 38
    static readonly ID_FONT_NOWEAPON = 39
    static readonly ID_FONT_NUMBER_0 = 40
    static readonly ID_FONT_NUMBER_1 = 41
    static readonly ID_FONT_NUMBER_2 = 42
    static readonly ID_FONT_NUMBER_3 = 43
    static readonly ID_FONT_NUMBER_4 = 44
    static readonly ID_FONT_NUMBER_5 = 45
    static readonly ID_FONT_NUMBER_6 = 46
    static readonly ID_FONT_NUMBER_7 = 47
    static readonly ID_FONT_NUMBER_8 = 48
    static readonly ID_FONT_NUMBER_9 = 49
    static readonly ID_FONT_NUMBER_BASE = 50
    static readonly ID_FONT_SCORE = 51
    static readonly ID_FONT_TIMELIMIT = 52
    static readonly ID_FONT_WEAPON = 53
    static readonly ID_FONT_WINDOW_CURSOR = 54
    static readonly ID_FONT_WINDOW_ICON = 55
    static readonly ID_PLAYER_BOM = 56
    static readonly ID_PLAYER_MACHINE = 57
    static readonly ID_PLAYER_MEDAL = 58
    static readonly ID_PLAYER_WEAPON_LASER = 59
    static readonly ID_PLAYER_WEAPON_ROCKET = 60
    static readonly ID_PLAYER_WEAPON_SHOT = 61
    static readonly ID_MAX = 62
}

// ファイル名を定義
// scripts/classes/images.ts と連動
export const LIST_PNG_PATHNAME = new Array<string>(
    new URL("/res/bg/balloon.png", import.meta.url).pathname,
    new URL("/res/bg/balloon_girl.png", import.meta.url).pathname,
    new URL("/res/bg/bombed.png", import.meta.url).pathname,
    new URL("/res/bg/cloud.png", import.meta.url).pathname,
    new URL("/res/bg/messagebox.png", import.meta.url).pathname,
    new URL("/res/bg/plane.png", import.meta.url).pathname,
    new URL("/res/bg/theend.png", import.meta.url).pathname,
    new URL("/res/bg/town_back.png", import.meta.url).pathname,
    new URL("/res/bg/town_front.png", import.meta.url).pathname,
    new URL("/res/bg/train0.png", import.meta.url).pathname,
    new URL("/res/bg/train1.png", import.meta.url).pathname,
    new URL("/res/bg/train2.png", import.meta.url).pathname,
    new URL("/res/bg/train3.png", import.meta.url).pathname,
    new URL("/res/bg/train4.png", import.meta.url).pathname,
    new URL("/res/effect/break_air0.png", import.meta.url).pathname,
    new URL("/res/effect/break_air1.png", import.meta.url).pathname,
    new URL("/res/effect/break_air2.png", import.meta.url).pathname,
    new URL("/res/effect/break_air3.png", import.meta.url).pathname,
    new URL("/res/effect/break_air4.png", import.meta.url).pathname,
    new URL("/res/effect/break_enemy0.png", import.meta.url).pathname,
    new URL("/res/effect/break_enemy1.png", import.meta.url).pathname,
    new URL("/res/effect/break_enemy2.png", import.meta.url).pathname,
    new URL("/res/effect/break_enemy3.png", import.meta.url).pathname,
    new URL("/res/effect/shield0.png", import.meta.url).pathname,
    new URL("/res/effect/shield1.png", import.meta.url).pathname,
    new URL("/res/effect/shot0.png", import.meta.url).pathname,
    new URL("/res/effect/shot1.png", import.meta.url).pathname,
    new URL("/res/enemy/cursor_enemy.png", import.meta.url).pathname,
    new URL("/res/enemy/enemy0.png", import.meta.url).pathname,
    new URL("/res/enemy/enemy1.png", import.meta.url).pathname,
    new URL("/res/enemy/enemy2.png", import.meta.url).pathname,
    new URL("/res/enemy/enemy3.png", import.meta.url).pathname,
    new URL("/res/enemy/enemy4.png", import.meta.url).pathname,
    new URL("/res/font/autoshot.png", import.meta.url).pathname,
    new URL("/res/font/colon_blue.png", import.meta.url).pathname,
    new URL("/res/font/colon_white.png", import.meta.url).pathname,
    new URL("/res/font/defeated.png", import.meta.url).pathname,
    new URL("/res/font/enemy.png", import.meta.url).pathname,
    new URL("/res/font/hiscore.png", import.meta.url).pathname,
    new URL("/res/font/noweapon.png", import.meta.url).pathname,
    new URL("/res/font/number_0.png", import.meta.url).pathname,
    new URL("/res/font/number_1.png", import.meta.url).pathname,
    new URL("/res/font/number_2.png", import.meta.url).pathname,
    new URL("/res/font/number_3.png", import.meta.url).pathname,
    new URL("/res/font/number_4.png", import.meta.url).pathname,
    new URL("/res/font/number_5.png", import.meta.url).pathname,
    new URL("/res/font/number_6.png", import.meta.url).pathname,
    new URL("/res/font/number_7.png", import.meta.url).pathname,
    new URL("/res/font/number_8.png", import.meta.url).pathname,
    new URL("/res/font/number_9.png", import.meta.url).pathname,
    new URL("/res/font/number_base.png", import.meta.url).pathname,
    new URL("/res/font/score.png", import.meta.url).pathname,
    new URL("/res/font/timelimit.png", import.meta.url).pathname,
    new URL("/res/font/weapon.png", import.meta.url).pathname,
    new URL("/res/font/window_cursor.png", import.meta.url).pathname,
    new URL("/res/font/window_icon.png", import.meta.url).pathname,
    new URL("/res/player/bom.png", import.meta.url).pathname,
    new URL("/res/player/machine.png", import.meta.url).pathname,
    new URL("/res/player/medal.png", import.meta.url).pathname,
    new URL("/res/player/weapon_laser.png", import.meta.url).pathname,
    new URL("/res/player/weapon_rocket.png", import.meta.url).pathname,
    new URL("/res/player/weapon_shot.png", import.meta.url).pathname
)

// https://p5js.org/reference/#/p5/keyCode
export class Keycode {
    // Original keycode
    static readonly NONE: number = 0 // Original for No push
    static readonly ANY: number = 1 // Original for any key

    //
    // https://keycode.info/
    static readonly ENTER: number = 13
    static readonly SPACE: number = 32
    static readonly LEFT: number = 37
    static readonly UP: number = 38
    static readonly RIGHT: number = 39
    static readonly DOWN: number = 40
    static readonly A: number = 65
    static readonly G: number = 71
    static readonly H: number = 72
    static readonly I: number = 73
    static readonly O: number = 79
    static readonly S: number = 83
    static readonly T: number = 84
    static readonly X: number = 88
    static readonly Z: number = 90
}
