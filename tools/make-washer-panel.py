# ドラム式洗濯乾燥機（シャープ ES-S7G）の操作パネルの説明図を作るスクリプト
#
# 元になる図（シャープ公式の取扱説明書の操作パネルの図から、ボタンと文字の部分だけを取り出して並べたもの）:
#   images/common/washer-main-base.png … 右側（電源・コース・運転切換・スタート・ロック解除）
#   images/common/washer-sub-base.png  … 左側（予約・槽クリーン・おしゃれ着、洗い〜乾かす、∨∧、表示部）
# 作られる図（言語ごとに2枚ずつ。ja は訳なし）:
#   images/common/appliance-washer-main-{ja,en,zh-Hant,ko}.png
#   images/common/appliance-washer-sub-{ja,en,zh-Hant,ko}.png
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-washer-panel.py
# ①〜④ の番号は「押す順番」です（番号は LABELS の文には書かず、自動で付きます）。
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = Path(__file__).resolve().parent.parent
COMMON = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'en': {
        'font': 'meiryob.ttc',
        # 右側の図
        'power': ['Power', '入 = ON   切 = OFF'],
        'course': 'Course (press to change)',
        'mode': 'Wash / dry mode',
        'start': ['Start /', 'Pause'],
        'unlock': ['Unlock', 'door'],
        # 左側の図
        'reserve': 'Timer', 'clean': 'Anti-mold', 'delicate': 'Delicate',
        'wash': 'Wash', 'rinse': 'Rinse', 'spin': 'Spin', 'dry': 'Dry',
        'less': 'less', 'more': 'more',
        'display': 'Display: time left / detergent amount',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'power': ['電源', '入 = 開   切 = 關'],
        'course': '行程（每按一次切換）',
        'mode': '洗衣／烘乾 切換',
        'start': ['開始／', '暫停'],
        'unlock': ['解除', '門鎖'],
        'reserve': '預約', 'clean': '防霉', 'delicate': '精緻衣物',
        'wash': '洗滌', 'rinse': '清洗', 'spin': '脫水', 'dry': '烘乾',
        'less': '減少', 'more': '增加',
        'display': '顯示：剩餘時間／洗劑用量',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'power': ['전원', '入 켜기 / 切 끄기'],
        'course': '코스 (누를 때마다 변경)',
        'mode': '세탁 / 건조 전환',
        'start': ['시작 /', '일시정지'],
        'unlock': ['도어', '잠금 해제'],
        'reserve': '예약', 'clean': '곰팡이 방지', 'delicate': '섬세 의류',
        'wash': '세탁', 'rinse': '헹굼', 'spin': '탈수', 'dry': '건조',
        'less': '줄이기', 'more': '늘리기',
        'display': '표시: 남은 시간 / 세제량',
    },
}
NUMBER = {'power': 1, 'course': 2, 'mode': 3, 'start': 4}

W = 1040
PAD = 20
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 22


def save(im, name, colors=128):
    out = COMMON / name
    im.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(name, im.size, out.stat().st_size // 1024, 'KB')


# ================= 右側の図（おもな操作） =================
main_base = Image.open(COMMON / 'washer-main-base.png').convert('RGB')
MAIN_W = 700
MS = MAIN_W / main_base.width
main_img = main_base.resize((MAIN_W, round(main_base.height * MS)), Image.LANCZOS)
MU = MAIN_W / 738.0   # 下の座標（縮小前の図を738等分した目盛り）→ 図の中のピクセル
# 各ボタンの位置（左, 上, 右, 下）
MAIN_BTN = {
    'power': (464, 8, 703, 154),
    'course': (10, 108, 208, 380),
    'mode': (212, 108, 411, 380),
    'start': (434, 207, 726, 499),
    'unlock': (566, 516, 726, 603),
}


def make_main(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), 36)
    small = ImageFont.truetype(str(FONTS / conf['font']), 28)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 30)
    ROW = 60
    ox, oy = PAD, PAD
    H = oy + main_img.height + ROW * 2 + PAD
    im = Image.new('RGB', (W, H), WHITE)
    im.paste(main_img, (ox, oy))
    d = ImageDraw.Draw(im)

    def frame(key, round_=14):
        l, t, r, b = MAIN_BTN[key]
        box = (ox + l * MU, oy + t * MU, ox + r * MU, oy + b * MU)
        d.rounded_rectangle(box, radius=round_, outline=RED, width=LINE_W)
        return box

    def badge(x, y, n):
        d.ellipse((x, y - BADGE_R, x + BADGE_R * 2, y + BADGE_R), fill=RED)
        d.text((x + BADGE_R, y - 1), str(n), font=num_font, fill=WHITE, anchor='mm')
        return x + BADGE_R * 2 + 10

    tx = ox + MAIN_W + 44   # 右側の訳を書き始める位置

    # 電源
    l, t, r, b = frame('power')
    cy = (t + b) / 2
    d.line([(r, cy), (tx - 8, cy)], fill=RED, width=LINE_W)
    x = badge(tx, cy - 24, NUMBER['power'])
    d.text((x, cy - 24), conf['power'][0], font=font, fill=INK, anchor='lm')
    d.text((tx, cy + 26), conf['power'][1], font=small, fill=INK, anchor='lm')

    # スタート
    l, t, r, b = frame('start', 40)
    cy = (t + b) / 2
    d.line([(r, cy), (tx - 8, cy)], fill=RED, width=LINE_W)
    x = badge(tx, cy - 24, NUMBER['start'])
    d.text((x, cy - 24), conf['start'][0], font=font, fill=INK, anchor='lm')
    d.text((x, cy + 24), conf['start'][1], font=font, fill=INK, anchor='lm')

    # ロック解除
    l, t, r, b = frame('unlock')
    cy = (t + b) / 2
    d.line([(r, cy), (tx - 8, cy)], fill=RED, width=LINE_W)
    d.text((tx, cy - 22), conf['unlock'][0], font=font, fill=INK, anchor='lm')
    d.text((tx, cy + 22), conf['unlock'][1], font=font, fill=INK, anchor='lm')

    # 運転切換（下の1行目）・コース（下の2行目）
    for i, key in enumerate(['mode', 'course']):
        l, t, r, b = frame(key)
        cx = (l + r) / 2
        y = oy + main_img.height + ROW * i + ROW / 2
        d.line([(cx, b), (cx, y), (cx + 14, y)], fill=RED, width=LINE_W, joint='curve')
        x = badge(cx + 22, y, NUMBER[key])
        d.text((x, y), conf[key], font=font, fill=INK, anchor='lm')
        if x + d.textlength(conf[key], font=font) > W - 4:
            print('  ! 訳が長すぎて右にはみ出します:', lang, key)
    for key in ['power', 'start', 'unlock']:
        for line, f in zip(conf[key], [font, small if key == 'power' else font]):
            extra = BADGE_R * 2 + 10 if (key in NUMBER and f is font) else 0
            if tx + extra + d.textlength(line, font=f) > W - 4:
                print('  ! 訳が長すぎて右にはみ出します:', lang, key, line)

    save(im, 'appliance-washer-main-%s.png' % lang)


# ================= 左側の図（時間や回数の調節） =================
sub_base = Image.open(COMMON / 'washer-sub-base.png').convert('RGB')
SUB_W = 1000
SS = SUB_W / sub_base.width
sub_img = sub_base.resize((SUB_W, round(sub_base.height * SS)), Image.LANCZOS)
SU = SUB_W / 1012.0   # 縮小前の図を1012等分した目盛り → ピクセル
# 訳を書く位置: (横の中心, 縦)。上段のボタンは上に、それ以外は下に書く
SUB_POS = {
    'reserve': (264, 23, 'above'), 'clean': (432, 23, 'above'), 'delicate': (601, 23, 'above'),
    'wash': (94, 252, 'below'), 'rinse': (262, 252, 'below'), 'spin': (431, 252, 'below'), 'dry': (600, 252, 'below'),
    'less': (820, 252, 'below'), 'more': (941, 252, 'below'),
    'display': (470, 523, 'below'),
}


def make_sub(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), 32)
    TOP = 44
    ox, oy = PAD, PAD + TOP
    H = oy + sub_img.height + 50 + PAD
    im = Image.new('RGB', (W, H), WHITE)
    im.paste(sub_img, (ox, oy))
    d = ImageDraw.Draw(im)
    spans = []
    for key, (cx, y, where) in SUB_POS.items():
        x = ox + cx * SU
        yy = oy + y * SU + (-26 if where == 'above' else 28)
        d.text((x, yy), conf[key], font=font, fill=RED, anchor='mm')
        w = d.textlength(conf[key], font=font)
        spans.append((round(yy), x - w / 2, x + w / 2, key))
    # 隣どうしの訳が重なっていないか確認
    spans.sort()
    for a in spans:
        for b in spans:
            if a is not b and a[0] == b[0] and a[1] < b[1] < a[2] + 6:
                print('  ! 訳が重なります:', lang, a[3], b[3])
    save(im, 'appliance-washer-sub-%s.png' % lang)


def make_ja():
    im = Image.new('RGB', (MAIN_W + PAD * 2, main_img.height + PAD * 2), WHITE)
    im.paste(main_img, (PAD, PAD))
    save(im, 'appliance-washer-main-ja.png', 64)
    im = Image.new('RGB', (W, sub_img.height + PAD * 2), WHITE)
    im.paste(sub_img, (PAD, PAD))
    save(im, 'appliance-washer-sub-ja.png', 64)


for lang in LABELS:
    make_main(lang)
    make_sub(lang)
make_ja()
