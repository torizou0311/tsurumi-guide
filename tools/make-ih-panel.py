# IHクッキングヒーター（三化工業 SIH-B113B）の操作パネルの説明図を作るスクリプト
#
# 元になる図: images/common/ih-panel-base.png
#   （メーカー作成の取扱説明書の操作部の図から、説明用の線を消し、ボタンの枠に実物と同じ色を付けたもの）
# 作られる図: images/common/appliance-induction-ja.png      … 操作パネルの図だけ（日本語はそのまま読めるので訳なし）
#             images/common/appliance-induction-en.png      … 各ボタンに英語の訳を付けたもの
#             images/common/appliance-induction-zh-Hant.png … 中国語（繁体字）
#             images/common/appliance-induction-ko.png      … 韓国語
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-ih-panel.py
# ①②③ の番号は「押す順番」です（番号は LABELS の文には書かず、自動で付きます）。
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
COMMON = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'en': {
        'font': 'seguisb.ttf',
        'hot': 'Hot surface warning lamp',
        'level': 'Heat level:  ◀ lower   ▶ higher',
        'fry': 'Deep-fry mode ON / OFF',
        'heat': 'Heating ON / OFF',
        'power': 'Power: press and hold for 2 sec.',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'hot': '高溫警示燈（面板很燙）',
        'level': '火力調整： ◀ 調弱   ▶ 調強',
        'fry': '油炸模式 開／關',
        'heat': '加熱 開／關',
        'power': '電源：長按2秒',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'hot': '고온 주의 램프 (상판이 뜨거움)',
        'level': '화력:  ◀ 약하게   ▶ 강하게',
        'fry': '튀김 모드 켜기 / 끄기',
        'heat': '가열 켜기 / 끄기',
        'power': '전원: 2초간 길게 누르기',
    },
}
# 押す順番の番号（付けないものは None）
NUMBER = {'power': 1, 'heat': 2, 'level': 3, 'fry': None, 'hot': None}

PANEL_W = 1000       # 図の中での操作パネルの横幅
PAD = 20
FONT_SIZE = 40
ROW = 60             # 訳の行の間隔
INK = (35, 30, 30)
RED = (228, 52, 52)
LINE_W = 4
BADGE_R = 23

base = Image.open(COMMON / 'ih-panel-base.png').convert('RGB')
S = PANEL_W / base.width
panel = base.resize((PANEL_W, round(base.height * S)), Image.LANCZOS)
PH = panel.height

# 元の図（ih-panel-base.png）の中での、各ボタンの位置（左, 上, 右, 下）
BTN = {
    'hot': (62, 96, 366, 252),
    'level': (382, 34, 1010, 462),
    'fry': (1030, 96, 1338, 462),
    'heat': (1362, 96, 1668, 462),
    'power': (1730, 34, 2028, 462),
}


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 32)
    sym_font = ImageFont.truetype(str(FONTS / 'meiryob.ttc'), FONT_SIZE - 4)
    top_rows, bottom_rows = 2, 3
    ox, oy = PAD, PAD + top_rows * ROW
    W = PANEL_W + PAD * 2
    H = oy + PH + bottom_rows * ROW + PAD
    im = Image.new('RGB', (W, H), (255, 255, 255))
    im.paste(panel, (ox, oy))
    d = ImageDraw.Draw(im)

    def frame(key):
        l, t, r, b = BTN[key]
        box = (ox + l * S, oy + t * S, ox + r * S, oy + b * S)
        d.rounded_rectangle(box, radius=14, outline=RED, width=LINE_W)
        return box

    def pieces(txt):
        # ◀ ▶ は入っていないフォントがあるので、その2文字だけ別のフォント（メイリオ）で書く
        out = []
        for ch in txt:
            f = sym_font if ch in '◀▶' else font
            if out and out[-1][1] is f:
                out[-1][0] += ch
            else:
                out.append([ch, f])
        return out

    def width_of(key):
        w = sum(d.textlength(t, font=f) for t, f in pieces(conf[key]))
        return w + (BADGE_R * 2 + 10 if NUMBER[key] else 0)

    def write(key, x, y):
        # (x, y) を左端・行の中心として、番号（あれば）と訳を書く
        n = NUMBER[key]
        if n:
            d.ellipse((x, y - BADGE_R, x + BADGE_R * 2, y + BADGE_R), fill=RED)
            d.text((x + BADGE_R, y - 1), str(n), font=num_font, fill=(255, 255, 255), anchor='mm')
            x += BADGE_R * 2 + 10
        for t, f in pieces(conf[key]):
            d.text((x, y), t, font=f, fill=INK, anchor='lm')
            x += d.textlength(t, font=f)

    # --- 上側: 線を上に伸ばし、訳は線の右に書く（左のものほど上の行） ---
    for i, key in enumerate(['hot', 'level']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = PAD + ROW * i + ROW / 2
        d.line([(cx, t), (cx, y), (cx + 14, y)], fill=RED, width=LINE_W, joint='curve')
        write(key, cx + 22, y)

    # --- 下側: 線を下に伸ばし、訳は線の左に書く（右のものほど下の行） ---
    for i, key in enumerate(['fry', 'heat', 'power']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = oy + PH + ROW * i + ROW / 2
        d.line([(cx, b), (cx, y), (cx - 14, y)], fill=RED, width=LINE_W, joint='curve')
        w = width_of(key)
        if cx - 22 - w < 4:
            print('  ! 訳が長すぎて左にはみ出します:', lang, key)
        write(key, cx - 22 - w, y)

    for key in ['hot', 'level']:
        l, t, r, b = BTN[key]
        if ox + (l + r) / 2 * S + 22 + width_of(key) > W - 4:
            print('  ! 訳が長すぎて右にはみ出します:', lang, key)

    out = COMMON / ('appliance-induction-%s.png' % lang)
    im.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


def make_ja():
    im = Image.new('RGB', (PANEL_W + PAD * 2, PH + PAD * 2), (255, 255, 255))
    im.paste(panel, (PAD, PAD))
    out = COMMON / 'appliance-induction-ja.png'
    im.quantize(colors=64, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


for lang in LABELS:
    make(lang)
make_ja()
