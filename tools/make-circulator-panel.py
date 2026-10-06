# サーキュレーター（アイリスオーヤマ PCF-SCC15T）の操作部の説明図を作るスクリプト
#
# 元になる図: images/common/circulator-base.png
#   （アイリスオーヤマ公式の取扱説明書の操作部の図から、ボタンとランプの部分だけを取り出したもの）
# 作られる図: images/common/appliance-circulator-{ja,en,zh-Hant,ko}.png（ja は訳なし）
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-circulator-panel.py
# ①②③ の番号は「よく使う順番」です（番号は LABELS の文には書かず、自動で付きます）。
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'en': {
        'font': 'meiryob.ttc',
        'timer': 'Off timer: 1 / 2 / 4 hours',
        'fan': 'Fan:  < lower   > higher',
        'power': 'Power ON / OFF',
        'rhythm': 'Rhythm (natural breeze)',
        'swing': 'Swing: up-down / left-right',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'timer': '關機定時：1／2／4小時',
        'fan': '風量： < 調弱   > 調強',
        'power': '電源 開／關',
        'rhythm': '自然風',
        'swing': '擺頭：上下／左右',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'timer': '꺼짐 타이머: 1 / 2 / 4시간',
        'fan': '풍량:  < 약하게   > 강하게',
        'power': '전원 켜기 / 끄기',
        'rhythm': '리듬풍 (자연풍)',
        'swing': '회전: 상하 / 좌우',
    },
}
NUMBER = {'power': 1, 'fan': 2, 'swing': 3}

PANEL_W = 1000
PAD = 20
FONT_SIZE = 38
ROW = 60
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 22

base = Image.open(DIR / 'circulator-base.png').convert('RGB')
panel = base.resize((PANEL_W, round(base.height * PANEL_W / base.width)), Image.LANCZOS)
PH = panel.height
U = PANEL_W / 1700.0   # 下の座標（元の図を横1700等分した目盛り）→ ピクセル
# 各ボタンの位置（左, 上, 右, 下）
BTN = {
    'timer': (230, 158, 500, 274),
    'fan': (519, 158, 891, 274),
    'rhythm': (910, 158, 1182, 274),
    'swing': (1200, 158, 1471, 274),
    'power': (708, 309, 990, 462),
}
# ボタンの上にあるランプの位置（ボタンと一緒に赤枠で囲む）
LAMP = {
    'timer': (148, 36, 494, 156),
    'fan': (498, 36, 940, 156),
    'swing': (1201, 36, 1470, 156),
}


def save(im, name, colors=128):
    out = DIR / name
    im.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(name, im.size, out.stat().st_size // 1024, 'KB')


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 30)
    top_rows, bottom_rows = 2, 3
    ox, oy = PAD, PAD + top_rows * ROW
    W = PANEL_W + PAD * 2
    H = oy + PH + bottom_rows * ROW + PAD
    im = Image.new('RGB', (W, H), WHITE)
    im.paste(panel, (ox, oy))
    d = ImageDraw.Draw(im)

    def frame(key):
        l, t, r, b = BTN[key]
        box = (ox + l * U, oy + t * U, ox + r * U, oy + b * U)
        d.rounded_rectangle(box, radius=14, outline=RED, width=LINE_W)
        if key in LAMP:
            ll, lt, lr, lb = LAMP[key]
            lamp = (ox + ll * U, oy + lt * U, ox + lr * U, oy + lb * U)
            d.rounded_rectangle(lamp, radius=10, outline=RED, width=LINE_W)
            if key in ('timer', 'fan'):
                # 上に線を出すものは、ランプの枠から線を出す
                return (lamp[0], lamp[1], lamp[2], box[3])
        return box

    def width_of(key):
        return d.textlength(conf[key], font=font) + (BADGE_R * 2 + 10 if key in NUMBER else 0)

    def write(key, x, y):
        if key in NUMBER:
            d.ellipse((x, y - BADGE_R, x + BADGE_R * 2, y + BADGE_R), fill=RED)
            d.text((x + BADGE_R, y - 1), str(NUMBER[key]), font=num_font, fill=WHITE, anchor='mm')
            x += BADGE_R * 2 + 10
        d.text((x, y), conf[key], font=font, fill=INK, anchor='lm')

    # --- 上側: 線を上に伸ばし、訳は線の右に書く（左のものほど上の行） ---
    for i, key in enumerate(['timer', 'fan']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = PAD + ROW * i + ROW / 2
        d.line([(cx, t), (cx, y), (cx + 14, y)], fill=RED, width=LINE_W, joint='curve')
        write(key, cx + 22, y)
        if cx + 22 + width_of(key) > W - 4:
            print('  ! 訳が長すぎて右にはみ出します:', lang, key)

    # --- 下側: 線を下に伸ばし、訳は線の左に書く（右のものほど下の行） ---
    for i, key in enumerate(['power', 'rhythm', 'swing']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = oy + PH + ROW * i + ROW / 2
        d.line([(cx, b), (cx, y), (cx - 14, y)], fill=RED, width=LINE_W, joint='curve')
        w = width_of(key)
        if cx - 22 - w < 4:
            print('  ! 訳が長すぎて左にはみ出します:', lang, key)
        write(key, cx - 22 - w, y)

    save(im, 'appliance-circulator-%s.png' % lang)


def make_ja():
    im = Image.new('RGB', (PANEL_W + PAD * 2, PH + PAD * 2), WHITE)
    im.paste(panel, (PAD, PAD))
    save(im, 'appliance-circulator-ja.png', 64)


for lang in LABELS:
    make(lang)
make_ja()
