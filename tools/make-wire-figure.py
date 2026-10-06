# 室内物干しワイヤー（Remarks Japan）の使い方の図を作るスクリプト
#
# 元になる写真（販売ページ https://www.amazon.co.jp/dp/B0CNYKK9QR の商品画像から、日本語の文字を除いて切り出したもの）:
#   images/common/wire-base-pull.png  … 本体からワイヤーを引き出している写真
#   images/common/wire-base-lock.png  … つまみを回してロックする写真
#   images/common/wire-base-plate.png … 反対側の壁のプレート
# 作られる図: images/common/appliance-wire.png（番号と LOCK / UNLOCK だけなので、全言語で同じ図を使う）
#
#   python tools/make-wire-figure.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
DIR = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')
RED = (228, 52, 52)
WHITE = (255, 255, 255)
INK = (35, 30, 30)
W = 1000
PAD = 16
BADGE_R = 34

num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 46)
tag_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 38)

pull = Image.open(DIR / 'wire-base-pull.png').convert('RGB')
lock = Image.open(DIR / 'wire-base-lock.png').convert('RGB')
plate = Image.open(DIR / 'wire-base-plate.png').convert('RGB')

# 上段: 引き出している写真を横いっぱいに
top = pull.resize((W, round(pull.height * W / pull.width)), Image.LANCZOS)
# 下段: 左にプレート、右にロックの写真（同じ高さにそろえる）
ROW_H = 330
lock_s = lock.resize((round(lock.width * ROW_H / lock.height), ROW_H), Image.LANCZOS)
plate_s = plate.resize((round(plate.width * (ROW_H - 40) / plate.height), ROW_H - 40), Image.LANCZOS)

H = top.height + PAD + ROW_H
im = Image.new('RGB', (W, H), WHITE)
im.paste(top, (0, 0))
y2 = top.height + PAD
gap = (W - plate_s.width - lock_s.width) // 3
px = gap
lx = gap * 2 + plate_s.width
im.paste(plate_s, (px, y2 + 20))
im.paste(lock_s, (lx, y2))
d = ImageDraw.Draw(im)
d.rectangle((lx, y2, lx + lock_s.width - 1, y2 + ROW_H - 1), outline=(190, 190, 190), width=2)


def badge(x, y, n):
    d.ellipse((x - BADGE_R - 4, y - BADGE_R - 4, x + BADGE_R + 4, y + BADGE_R + 4), fill=WHITE)
    d.ellipse((x - BADGE_R, y - BADGE_R, x + BADGE_R, y + BADGE_R), fill=RED)
    d.text((x, y - 2), str(n), font=num_font, fill=WHITE, anchor='mm')


def tag(x, y, text, min_w=0):
    # 元の写真に入っていた文字（LOOK と誤記されている）を隠して、正しい綴りで書き直す
    w = max(d.textlength(text, font=tag_font), min_w)
    d.rounded_rectangle((x - 10, y - 34, x + w + 10, y + 34), radius=12, fill=WHITE, outline=RED, width=3)
    d.text((x + w / 2, y - 2), text, font=tag_font, fill=INK, anchor='mm')


SX = W / pull.width
# ① ワイヤーの先のつまみ（手で持っている所）
badge(round(118 * SX), round(268 * SX), 1)
# ③ 本体のロックのつまみ
badge(round(255 * SX), round(150 * SX), 3)
# ② プレート
badge(px + 10, y2 + 50, 2)
# ロックの写真の中: ③ と、回す向きの LOCK / UNLOCK
LS = ROW_H / lock.height
badge(lx + lock_s.width - 50, y2 + 50, 3)
tag(lx + round(106 * LS), y2 + round(21 * LS) + 6, 'LOCK', 56 * LS)
tag(lx + round(8 * LS) + 6, y2 + round(109 * LS), 'UNLOCK', 90 * LS)

out = DIR / 'appliance-wire.png'
im.save(out, optimize=True)
print(out.name, im.size, out.stat().st_size // 1024, 'KB')
