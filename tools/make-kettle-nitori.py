# 103・202号室の電気ケトル（ニトリ 電気ドリップケトル AB2G01）の説明図を作るスクリプト
#
# 元になる図（ニトリ公式の取扱説明書の図から、説明用の線と日本語を除いて取り出したもの）:
#   images/common/kettle-nitori-body-base.png   … 本体
#   images/common/kettle-nitori-lock-base.png   … ふたの印が「閉じた鍵」に合っている状態（ロック）
#   images/common/kettle-nitori-unlock-base.png … ふたの印が「開いた鍵」に合っている状態（ロック解除）
#   images/common/kettle-nitori-switch-base.png … 電源スイッチの OFF / ON
#   images/common/kettle-nitori-max-base.png    … 内側の MAX の表示
# 作られる図: images/common/appliance-kettle-nitori-{ja,en,zh-Hant,ko}.png
#   （図の中に日本語がないので、日本語にも説明を付けている）
#
# 説明の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-kettle-nitori.py
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'ja': {'font': 'meiryob.ttc', 'locked': 'ロック', 'unlocked': 'ロック解除 → 持ち上げる',
           'switch': '電源スイッチ', 'lamp': 'ランプ'},
    'en': {'font': 'meiryob.ttc', 'locked': 'Locked', 'unlocked': 'Unlocked → lift the lid',
           'switch': 'Power switch', 'lamp': 'Lamp'},
    'zh-Hant': {'font': 'msjhbd.ttc', 'locked': '鎖定', 'unlocked': '解鎖 → 向上取下蓋子',
                'switch': '電源開關', 'lamp': '指示燈'},
    'ko': {'font': 'malgunbd.ttf', 'locked': '잠금', 'unlocked': '잠금 해제 → 들어 올림',
           'switch': '전원 스위치', 'lamp': '램프'},
}

W = 1040
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 4
BADGE_R = 24


def load(name, height=None, width=None):
    im = Image.open(DIR / name).convert('RGB')
    if height:
        return im.resize((round(im.width * height / im.height), height), Image.LANCZOS)
    return im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)


lock = load('kettle-nitori-lock-base.png', height=250)
unlock = load('kettle-nitori-unlock-base.png', height=250)
mx = load('kettle-nitori-max-base.png', height=230)
body = load('kettle-nitori-body-base.png', width=640)
sw = load('kettle-nitori-switch-base.png', width=270)
BODY_U = 640 / 986.0   # 本体の図の中の位置（横986等分の目盛り）→ ピクセル


def save(im, name):
    out = DIR / name
    im.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(name, im.size, out.stat().st_size // 1024, 'KB')


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), 34)
    big = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 44)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 32)
    row2 = 20 + 250 + 70
    H = row2 + body.height + 20
    im = Image.new('RGB', (W, H), WHITE)
    d = ImageDraw.Draw(im)

    def badge(x, y, n):
        d.ellipse((x - BADGE_R, y - BADGE_R, x + BADGE_R, y + BADGE_R), fill=RED)
        d.text((x, y - 1), str(n), font=num_font, fill=WHITE, anchor='mm')

    # ---- 上の段: ① ふた（ロック → ロック解除）と、水の量（MAX）----
    badge(40, 48, 1)
    x_lock, x_unlock = 80, 300
    im.paste(lock, (x_lock, 20))
    im.paste(unlock, (x_unlock, 20))
    ay = 20 + 125
    d.line([(x_lock + lock.width + 16, ay), (x_unlock - 26, ay)], fill=RED, width=6)
    d.polygon([(x_unlock - 30, ay - 14), (x_unlock - 6, ay), (x_unlock - 30, ay + 14)], fill=RED)
    d.text((x_lock + lock.width / 2, 20 + 250 + 26), conf['locked'], font=font, fill=INK, anchor='mm')
    d.text((x_unlock, 20 + 250 + 26), conf['unlocked'], font=font, fill=INK, anchor='lm')
    if x_unlock + d.textlength(conf['unlocked'], font=font) > 760:
        print('  ! 説明が長すぎて MAX の図に重なります:', lang, 'unlocked')
    x_max = W - mx.width - 40
    im.paste(mx, (x_max, 14))
    d.text((x_max + mx.width / 2, 20 + 250 + 24), 'MAX  0.8 L', font=big, fill=RED, anchor='mm')

    # ---- 下の段: ② 本体のスイッチとランプ ----
    bx, by = 20, row2
    im.paste(body, (bx, by))
    # スイッチ（本体の右下のレバー）
    sl, st, sr, sb = 762, 508, 842, 590
    box = (bx + sl * BODY_U, by + st * BODY_U, bx + sr * BODY_U, by + sb * BODY_U)
    d.rounded_rectangle(box, radius=12, outline=RED, width=LINE_W)
    sx, sy = 730, by + 150
    im.paste(sw, (sx, sy))
    d.rounded_rectangle((sx - 8, sy - 8, sx + sw.width + 8, sy + sw.height + 8), radius=14, outline=RED, width=LINE_W)
    cy = (box[1] + box[3]) / 2
    d.line([(box[2], cy), (sx + sw.width / 2, cy + 60), (sx + sw.width / 2, sy + sw.height + 8)], fill=RED, width=LINE_W, joint='curve')
    badge(sx + 14, sy - 44, 2)
    d.text((sx + 48, sy - 44), conf['switch'], font=font, fill=INK, anchor='lm')
    # ランプ（本体の下のほうの横長の窓）
    ll, lt, lr, lb = 418, 678, 512, 722
    lbox = (bx + ll * BODY_U, by + lt * BODY_U, bx + lr * BODY_U, by + lb * BODY_U)
    d.rounded_rectangle(lbox, radius=10, outline=RED, width=LINE_W)
    ly = (lbox[1] + lbox[3]) / 2
    tx = bx + 600
    d.line([(lbox[2], ly), (tx - 10, ly)], fill=RED, width=LINE_W)
    d.text((tx, ly), conf['lamp'], font=font, fill=INK, anchor='lm')
    if tx + d.textlength(conf['lamp'], font=font) > W - 4:
        print('  ! 説明が長すぎて右にはみ出します:', lang, 'lamp')
    save(im, 'appliance-kettle-nitori-%s.png' % lang)


for lang in LABELS:
    make(lang)
