# 201号室の電気ケトル（アイリスオーヤマ IKE-C601T・温度調節付き）の説明図を作るスクリプト
#
# 元になる図（アイリスオーヤマ公式の取扱説明書の図から、必要な部分だけを取り出したもの）:
#   images/201/kettle-iris-panel-base.png … 台座の操作パネル
#   images/201/kettle-iris-level-base.png … ケトルの内側の水量の目盛り
# 作られる図:
#   images/201/appliance-kettle-{ja,en,zh-Hant,ko}.png … 操作パネルに各言語の説明を付けたもの
#       （パネルの文字が英語なので、日本語にも説明を付けている）
#   images/201/appliance-kettle-level.png              … 水量の目盛り（MAX / MIN。全言語で同じ図）
#
# 説明の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-kettle-iris.py
# ①②③ の番号は「押す順番」です（番号は LABELS の文には書かず、自動で付きます）。
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / 'images' / '201'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'ja': {
        'font': 'meiryob.ttc',
        'mode': '温度を選ぶ（押すたびに切り替わる）',
        'power': '電源',
        'keep': '保温',
        'temp': '温度を変える（－／＋）',
        'start': 'スタート／ストップ',
    },
    'en': {
        'font': 'meiryob.ttc',
        'mode': 'Choose temperature',
        'power': 'Power',
        'keep': 'Keep warm',
        'temp': 'Temperature  - / +',
        'start': 'Start / Stop',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'mode': '選擇溫度（每按一次切換）',
        'power': '電源',
        'keep': '保溫',
        'temp': '調整溫度（－／＋）',
        'start': '開始／停止',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'mode': '온도 선택 (누를 때마다 변경)',
        'power': '전원',
        'keep': '보온',
        'temp': '온도 조절 ( - / + )',
        'start': '시작 / 정지',
    },
}
NUMBER = {'power': 1, 'mode': 2, 'start': 3}

PANEL_W = 1000
PAD = 20
FONT_SIZE = 36
ROW = 60
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 22

base = Image.open(DIR / 'kettle-iris-panel-base.png').convert('RGB')
panel = base.resize((PANEL_W, round(base.height * PANEL_W / base.width)), Image.LANCZOS)
PH = panel.height
U = PANEL_W / 1370.0   # 下の座標（元の図を横1370等分した目盛り）→ ピクセル
BTN = {
    'mode': (280, 41, 553, 256),
    'power': (968, 88, 1067, 187),
    'keep': (286, 283, 416, 378),
    'temp': (500, 285, 870, 378),
    'start': (946, 298, 1089, 367),
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
        return box

    def width_of(key):
        return d.textlength(conf[key], font=font) + (BADGE_R * 2 + 10 if key in NUMBER else 0)

    def write(key, x, y):
        if key in NUMBER:
            d.ellipse((x, y - BADGE_R, x + BADGE_R * 2, y + BADGE_R), fill=RED)
            d.text((x + BADGE_R, y - 1), str(NUMBER[key]), font=num_font, fill=WHITE, anchor='mm')
            x += BADGE_R * 2 + 10
        d.text((x, y), conf[key], font=font, fill=INK, anchor='lm')

    # --- 上側 ---
    # MODE: 線を上に伸ばし、説明は線の右（上の行）
    l, t, r, b = frame('mode')
    cx = (l + r) / 2
    y = PAD + ROW / 2
    d.line([(cx, t), (cx, y), (cx + 14, y)], fill=RED, width=LINE_W, joint='curve')
    write('mode', cx + 22, y)
    if cx + 22 + width_of('mode') > W - 4:
        print('  ! 説明が長すぎて右にはみ出します:', lang, 'mode')
    # 電源: 線を上に伸ばし、説明は線の左（下の行）
    l, t, r, b = frame('power')
    cx = (l + r) / 2
    y = PAD + ROW + ROW / 2
    d.line([(cx, t), (cx, y), (cx - 14, y)], fill=RED, width=LINE_W, joint='curve')
    write('power', cx - 22 - width_of('power'), y)

    # --- 下側: 線を下に伸ばし、説明は線の左に書く（右のものほど下の行） ---
    for i, key in enumerate(['keep', 'temp', 'start']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = oy + PH + ROW * i + ROW / 2
        d.line([(cx, b), (cx, y), (cx - 14, y)], fill=RED, width=LINE_W, joint='curve')
        w = width_of(key)
        if cx - 22 - w < 4:
            print('  ! 説明が長すぎて左にはみ出します:', lang, key)
        write(key, cx - 22 - w, y)
    save(im, 'appliance-kettle-%s.png' % lang)


def make_level():
    lv = Image.open(DIR / 'kettle-iris-level-base.png').convert('RGB')
    S = 1.0
    W, H = 1080, lv.height + 40
    im = Image.new('RGB', (W, H), WHITE)
    ox, oy = 40, 20
    im.paste(lv, (ox, oy))
    d = ImageDraw.Draw(im)
    d.ellipse((ox + 2, oy + 2, ox + lv.width - 3, oy + lv.height - 3), outline=(60, 60, 60), width=5)
    font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 52)
    u = lv.width / 480.0   # 丸の中の位置（丸を480等分した目盛り）
    for text, (mx, my) in (('MAX  0.6 L', (292, 212)), ('MIN  0.3 L', (292, 292))):
        x0, y0 = ox + mx * u, oy + my * u
        tx = ox + lv.width + 40
        d.line([(x0, y0), (tx - 12, y0)], fill=RED, width=LINE_W)
        d.ellipse((x0 - 7, y0 - 7, x0 + 7, y0 + 7), fill=RED)
        d.text((tx, y0), text, font=font, fill=RED, anchor='lm')
    save(im, 'appliance-kettle-level.png', 64)


for lang in LABELS:
    make(lang)
make_level()
