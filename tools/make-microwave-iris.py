# 202号室の電子レンジ（アイリスオーヤマ IMB-T178）の操作パネルの説明図を作るスクリプト
#
# 元になる図: images/202/microwave-iris-base.png
#   （アイリスオーヤマ公式の取扱説明書の操作パネルの図から、ボタンと文字の部分だけを取り出したもの）
# 作られる図: images/202/appliance-microwave-{ja,en,zh-Hant,ko}.png（ja は訳なし）
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-microwave-iris.py
# ①②③ の番号は「押す順番」です（番号は LABELS の文には書かず、自動で付きます）。
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / 'images' / '202'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'en': {
        'font': 'meiryob.ttc',
        'drink': 'Drink (auto)', 'rice': 'Rice (auto)', 'auto': 'Auto-cook menu',
        'min': '+1 min', 'sec': '+10 sec',
        'range': 'Power', 'defrost': 'Defrost',
        'cancel': 'Cancel / Stop', 'start': 'Start',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'drink': '飲料（自動）', 'rice': '白飯（自動）', 'auto': '自動烹調',
        'min': '＋1分鐘', 'sec': '＋10秒',
        'range': '火力', 'defrost': '解凍',
        'cancel': '取消／停止', 'start': '開始',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'drink': '음료 (자동)', 'rice': '밥 (자동)', 'auto': '자동 조리',
        'min': '+1분', 'sec': '+10초',
        'range': '출력', 'defrost': '해동',
        'cancel': '취소 / 정지', 'start': '시작',
    },
}
NUMBER = {'range': 1, 'min': 2, 'sec': 2, 'start': 3}
# 左に訳を書くボタン／右に訳を書くボタン
LEFT = ['min', 'range', 'cancel']
RIGHT = ['drink', 'rice', 'auto', 'sec', 'defrost', 'start']

PANEL_W = 400
PAD = 20
GAP = 46             # パネルと訳の間（線を引くところ）
FONT_SIZE = 40
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 23

base = Image.open(DIR / 'microwave-iris-base.png').convert('RGB')
panel = base.resize((PANEL_W, round(base.height * PANEL_W / base.width)), Image.LANCZOS)
U = PANEL_W / 610.0   # 下の座標（元の図を横610等分した目盛り）→ ピクセル
# 各ボタンの位置（左, 上, 右, 下）
BTN = {
    'drink': (119, 326, 491, 471), 'rice': (119, 494, 491, 639), 'auto': (119, 662, 491, 807),
    'min': (41, 864, 297, 1004), 'sec': (312, 864, 568, 1004),
    'range': (41, 1034, 297, 1220), 'defrost': (312, 1034, 568, 1220),
    'cancel': (41, 1250, 297, 1436), 'start': (312, 1250, 568, 1436),
}


def save(im, name, colors=128):
    out = DIR / name
    im.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(name, im.size, out.stat().st_size // 1024, 'KB')


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 32)
    probe = ImageDraw.Draw(Image.new('RGB', (10, 10)))

    def width_of(key):
        return probe.textlength(conf[key], font=font) + (BADGE_R * 2 + 10 if key in NUMBER else 0)

    left_w = max(width_of(k) for k in LEFT)
    right_w = max(width_of(k) for k in RIGHT)
    ox = PAD + left_w + GAP
    oy = PAD
    W = round(ox + PANEL_W + GAP + right_w + PAD)
    H = panel.height + PAD * 2
    im = Image.new('RGB', (W, H), WHITE)
    im.paste(panel, (round(ox), oy))
    d = ImageDraw.Draw(im)

    def write(key, x, y):
        if key in NUMBER:
            d.ellipse((x, y - BADGE_R, x + BADGE_R * 2, y + BADGE_R), fill=RED)
            d.text((x + BADGE_R, y - 1), str(NUMBER[key]), font=num_font, fill=WHITE, anchor='mm')
            x += BADGE_R * 2 + 10
        d.text((x, y), conf[key], font=font, fill=INK, anchor='lm')

    for key in LEFT + RIGHT:
        l, t, r, b = BTN[key]
        box = (ox + l * U, oy + t * U, ox + r * U, oy + b * U)
        d.rounded_rectangle(box, radius=14, outline=RED, width=LINE_W)
        cy = (box[1] + box[3]) / 2
        if key in LEFT:
            d.line([(ox - GAP + 10, cy), (box[0], cy)], fill=RED, width=LINE_W)
            write(key, ox - GAP - width_of(key), cy)
        else:
            d.line([(box[2], cy), (ox + PANEL_W + GAP - 10, cy)], fill=RED, width=LINE_W)
            write(key, ox + PANEL_W + GAP, cy)
    save(im, 'appliance-microwave-%s.png' % lang)


def make_ja():
    side = 200   # 左右の余白（小さくするとパネルが大きく表示される）
    im = Image.new('RGB', (PANEL_W + side * 2, panel.height + PAD * 2), WHITE)
    im.paste(panel, (side, PAD))
    save(im, 'appliance-microwave-ja.png', 64)


for lang in LABELS:
    make(lang)
make_ja()
