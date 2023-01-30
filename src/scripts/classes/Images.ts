import p5 from "p5"
import { LIST_PNG_PATHNAME } from "scripts/configs/png"

// 配列管理を調べる
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
