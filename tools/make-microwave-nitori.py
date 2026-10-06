# 103・201号室の電子レンジ（ニトリ BK2G02）の操作部の説明図を作るスクリプト
#
# 元になる図: images/common/microwave-nitori-base.png
#   （ニトリ公式の取扱説明書の操作部の図から、説明用の線と保護フィルムの絵を消したもの）
# 作られる図: images/common/appliance-microwave-nitori-{ja,en,zh-Hant,ko}.png（ja は訳なし）
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-microwave-nitori.py
# ①② の番号は「回す順番」です（上のダイヤル → 下のダイヤル）。
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
        'defrost': 'Defrost', 'high': 'High (520 W)',
        'off': 'OFF', 'sec': 'seconds', 'min': 'minutes',
        'power': 'Power', 'timer': 'Timer', 'timerHint': 'turn to start',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'defrost': '解凍', 'high': '強（520W）',
        'off': '關', 'sec': '秒', 'min': '分鐘',
        'power': '火力', 'timer': '定時', 'timerHint': '轉動即開始',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'defrost': '해동', 'high': '강 (520W)',
        'off': '끄기', 'sec': '초', 'min': '분',
        'power': '출력', 'timer': '타이머', 'timerHint': '돌리면 시작',
    },
}
LEFT = ['defrost', 'off']
RIGHT = ['high', 'sec', 'min']

PANEL_W = 400
PAD = 20
GAP = 46
FONT_SIZE = 40
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 23

base = Image.open(DIR / 'microwave-nitori-base.png').convert('RGB')
U = PANEL_W / base.width
panel = base.resize((PANEL_W, round(base.height * U)), Image.LANCZOS)
# 元の図の中での位置（左, 上, 右, 下）
BTN = {
    'defrost': (118, 285, 332, 500),
    'high': (742, 352, 868, 500),
    'off': (468, 1335, 562, 1425),
    'sec': (625, 1280, 730, 1352),
    'min': (872, 1458, 982, 1532),
}
# ダイヤルの中心（上＝出力、下＝タイマー）
DIAL = {'power': (513, 711), 'timer': (513, 1807)}


def save(im, name, colors=128):
    out = DIR / name
    im.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(name, im.size, out.stat().st_size // 1024, 'KB')


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    dial_font = ImageFont.truetype(str(FONTS / conf['font']), 34)
    hint_font = ImageFont.truetype(str(FONTS / conf['font']), 24)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 32)
    probe = ImageDraw.Draw(Image.new('RGB', (10, 10)))
    left_w = max(probe.textlength(conf[k], font=font) for k in LEFT)
    right_w = max(probe.textlength(conf[k], font=font) for k in RIGHT)
    ox = PAD + left_w + GAP
    oy = PAD
    W = round(ox + PANEL_W + GAP + right_w + PAD)
    im = Image.new('RGB', (W, panel.height + PAD * 2), WHITE)
    im.paste(panel, (round(ox), oy))
    d = ImageDraw.Draw(im)

    for key in LEFT + RIGHT:
        l, t, r, b = BTN[key]
        box = (ox + l * U, oy + t * U, ox + r * U, oy + b * U)
        d.rounded_rectangle(box, radius=10, outline=RED, width=LINE_W)
        cy = (box[1] + box[3]) / 2
        if key in LEFT:
            d.line([(ox - GAP + 10, cy), (box[0], cy)], fill=RED, width=LINE_W)
            d.text((ox - GAP, cy), conf[key], font=font, fill=INK, anchor='rm')
        else:
            d.line([(box[2], cy), (ox + PANEL_W + GAP - 10, cy)], fill=RED, width=LINE_W)
            d.text((ox + PANEL_W + GAP, cy), conf[key], font=font, fill=INK, anchor='lm')

    # ダイヤルの中に、番号と名前を書く
    for n, key in ((1, 'power'), (2, 'timer')):
        cx, cy = ox + DIAL[key][0] * U, oy + DIAL[key][1] * U
        top = cy - (34 if key == 'power' else 50)
        d.ellipse((cx - BADGE_R, top - BADGE_R, cx + BADGE_R, top + BADGE_R), fill=RED)
        d.text((cx, top - 1), str(n), font=num_font, fill=WHITE, anchor='mm')
        d.text((cx, top + 50), conf[key], font=dial_font, fill=INK, anchor='mm')
        if key == 'timer':
            d.text((cx, top + 92), conf['timerHint'], font=hint_font, fill=RED, anchor='mm')
    save(im, 'appliance-microwave-nitori-%s.png' % lang)


def make_ja():
    side = 200   # 左右の余白（小さくすると操作部が大きく表示される）
    im = Image.new('RGB', (PANEL_W + side * 2, panel.height + PAD * 2), WHITE)
    im.paste(panel, (side, PAD))
    save(im, 'appliance-microwave-nitori-ja.png', 64)


for lang in LABELS:
    make(lang)
make_ja()
