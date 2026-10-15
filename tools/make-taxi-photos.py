# 「運転手さんへ」ページ（#/taxi）の写真3枚に、日本語の注釈（矢印・ラベル）を入れるスクリプト
#
# 元になる写真（Googleストリートビューのスクリーンショット。リポジトリ外の調査フォルダ）:
#   ../_research/taxi-src/1-approach.png … 鶴見獅子ヶ谷通りを上りながら、曲がり角の手前
#   ../_research/taxi-src/2-turn.png     … 曲がり角の直前（生垣の終わりから右へ上がる道）
#   ../_research/taxi-src/3-lane.png     … 細い道の途中
# 左上のGoogle情報パネルや左下のミニマップは切り取る（右下の © Google は残す）。
# 作られる図: images/common/taxi-1-approach.jpg / taxi-2-turn.jpg / taxi-3-lane.jpg
#
#   python tools/make-taxi-photos.py
from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT.parent / '_research' / 'taxi-src'
OUT = ROOT / 'images' / 'common'
FONT = 'C:/Windows/Fonts/meiryob.ttc'
RED = (220, 38, 38)
WHITE = (255, 255, 255)
INK = (30, 30, 30)
YELLOW = (255, 214, 10)
OUT_W = 1000


def font(size):
    return ImageFont.truetype(FONT, size)


def label(d, xy, text, size, bg=RED, fg=WHITE, anchor='la'):
    """色つきの四角に文字を入れたラベル。xy は anchor 基準の位置"""
    f = font(size)
    l, t, r, b = d.textbbox(xy, text, font=f, anchor=anchor)
    pad = size * 0.3
    d.rounded_rectangle((l - pad, t - pad * 0.6, r + pad, b + pad * 0.8), radius=size * 0.25, fill=bg)
    d.text(xy, text, font=f, fill=fg, anchor=anchor)
    return (l - pad, t - pad * 0.6, r + pad, b + pad * 0.8)


def arrow(d, pts, width, color=RED, head=None):
    """折れ線 pts の最後に矢じりをつけた太い矢印。白いふちつき"""
    head = head or width * 2.6
    (x0, y0), (x1, y1) = pts[-2], pts[-1]
    ang = math.atan2(y1 - y0, x1 - x0)
    bx, by = x1 - head * 0.8 * math.cos(ang), y1 - head * 0.8 * math.sin(ang)
    body = list(pts[:-1]) + [(bx, by)]
    tri = [(x1, y1),
           (bx + head * 0.6 * math.sin(ang), by - head * 0.6 * math.cos(ang)),
           (bx - head * 0.6 * math.sin(ang), by + head * 0.6 * math.cos(ang))]
    for col, extra in ((WHITE, 8), (color, 0)):
        d.line(body, fill=col, width=int(width + extra), joint='curve')
        for p in body:
            r = (width + extra) / 2
            d.ellipse((p[0] - r, p[1] - r, p[0] + r, p[1] + r), fill=col)
        if extra:
            cx, cy = (tri[0][0] + tri[1][0] + tri[2][0]) / 3, (tri[0][1] + tri[1][1] + tri[2][1]) / 3
            d.polygon([(cx + (x - cx) * 1.25, cy + (y - cy) * 1.25) for x, y in tri], fill=col)
        else:
            d.polygon(tri, fill=col)


def load(name, box):
    im = Image.open(SRC / name).convert('RGB').crop(box)
    return im


def save(im, name):
    im = im.resize((OUT_W, round(im.height * OUT_W / im.width)), Image.LANCZOS)
    q = 85
    while True:
        im.save(OUT / name, quality=q, optimize=True)
        if (OUT / name).stat().st_size <= 300 * 1024 or q <= 50:
            break
        q -= 5
    print(name, im.size, (OUT / name).stat().st_size // 1024, 'KB')


# --- 1: 曲がり角の手前 ---
im = load('1-approach.png', (0, 0, 910, 834))
d = ImageDraw.Draw(im)
arrow(d, [(430, 700), (500, 520), (560, 360)], 34)
label(d, (455, 790), 'この先 右折', 74, anchor='mm')  # 道路の上
label(d, (735, 150), '白いマンション\n（生垣）', 40, bg=WHITE, fg=INK, anchor='mm')
label(d, (470, 60), '茶色い\nマンション', 40, bg=(120, 72, 36), anchor='mm')
save(im, 'taxi-1-approach.jpg')

# --- 2: 曲がり角の直前（左上パネル・左下ミニマップを切り取る） ---
im = load('2-turn.png', (0, 140, 1166, 798))
d = ImageDraw.Draw(im)
# 切り取り後の座標 = 元の y - 140
arrow(d, [(330, 440), (560, 400), (700, 250)], 46)
label(d, (583, 600), 'ここを右折（細い上り坂）', 72, anchor='mm')
label(d, (960, 40), '白いマンション（生垣）', 38, bg=WHITE, fg=INK, anchor='mm')
label(d, (380, 40), '茶色いマンション', 38, bg=(120, 72, 36), anchor='mm')
save(im, 'taxi-2-turn.jpg')

# --- 3: 細い道の途中（左上パネル・左下ミニマップ・右端ボタンを切り取る） ---
im = load('3-lane.png', (0, 118, 1300, 800))
d = ImageDraw.Draw(im)
arrow(d, [(640, 560), (660, 380), (650, 230)], 40)
label(d, (650, 610), '道なりに約300m', 74, anchor='mm')
save(im, 'taxi-3-lane.jpg')
