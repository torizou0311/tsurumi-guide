# -*- coding: utf-8 -*-
"""洗濯機に貼る「困ったときはQRを読んでね」ラミネート用カード（A4に9x12cm x3枚）を作る。
出力: ../../print/tsurumi-washer-qr.pdf（A4・300dpi・実寸）と確認用PNG"""
import qrcode
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

DPI = 300
mm = lambda v: round(v / 25.4 * DPI)
A4 = (mm(210), mm(297))
CARD = (mm(90), mm(120))
FONTS = Path('C:/Windows/Fonts')
INK = (45, 45, 48)
RED = (200, 40, 40)
BASE = 'https://ysr-guide.neconote.net/index.html?room={}#/appliances/washertrouble'
ROOMS = ['103', '201', '202']

HEAD = [('洗濯機が止まった・エラーが出たときは', 'BIZ-UDGothicB.ttc', 54),
        ('Washer stopped or showing an error?', 'meiryob.ttc', 36),
        ('洗衣机停止或显示错误时', 'msyhbd.ttc', 36),
        ('세탁기가 멈추거나 에러가 표시되면', 'malgunbd.ttf', 36)]
FOOT = [('QRコードを読み取ると、表示ごとの対処法が見られます', 'BIZ-UDGothicB.ttc', 34),
        ('Scan the QR code to see what to do for each code.', 'meiryob.ttc', 29),
        ('扫描二维码，查看各错误代码的处理方法', 'msyhbd.ttc', 31),
        ('QR 코드를 스캔하면 표시별 대처 방법을 볼 수 있습니다', 'malgunbd.ttf', 31)]

def fit(d, text, fname, size, maxw):
    while True:
        f = ImageFont.truetype(str(FONTS / fname), size)
        if d.textlength(text, font=f) <= maxw or size < 20:
            return f
        size -= 1

def qr_img(url, target):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=4, box_size=1)
    q.add_data(url); q.make(fit=True)
    n = len(q.get_matrix())
    box = target // n
    q.box_size = box
    return q.make_image(fill_color='black', back_color='white').convert('RGB')

def card(room):
    W, H = CARD
    im = Image.new('RGB', CARD, 'white')
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, W, 22], fill=RED)
    maxw = W - 80
    y = 70
    for i, (t, fn, sz) in enumerate(HEAD):
        f = fit(d, t, fn, sz, maxw)
        d.text((W / 2, y), t, font=f, fill=INK if i else INK, anchor='mm')
        y += 78 if i == 0 else 52
    d.rectangle([W / 2 - 60, y - 8, W / 2 + 60, y - 2], fill=RED)
    q = qr_img(BASE.format(room), mm(58))
    im.paste(q, ((W - q.width) // 2, y + 20))
    y = y + 20 + q.height + 50
    for i, (t, fn, sz) in enumerate(FOOT):
        f = fit(d, t, fn, sz, maxw)
        d.text((W / 2, y), t, font=f, fill=INK, anchor='mm')
        y += 50 if i == 0 else 42
    nf = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 34)
    d.text((W - 30, H - 26), room, font=nf, fill=(120, 120, 120), anchor='rm')
    return im

def dashed(d, p0, p1):
    (x0, y0), (x1, y1) = p0, p1
    L = max(abs(x1 - x0), abs(y1 - y0)); dash = 14; gap = 10; t = 0
    while t < L:
        e = min(t + dash, L)
        a = (x0 + (x1 - x0) * t / L, y0 + (y1 - y0) * t / L)
        b = (x0 + (x1 - x0) * e / L, y0 + (y1 - y0) * e / L)
        d.line([a, b], fill=(190, 190, 190), width=2); t += dash + gap

page = Image.new('RGB', A4, 'white')
d = ImageDraw.Draw(page)
ox = (A4[0] - CARD[0] * 2) // 2
oy = mm(12)
pos = [(ox, oy), (ox + CARD[0], oy), (ox, oy + CARD[1])]
for room, p in zip(ROOMS, pos):
    page.paste(card(room), p)
xs = [ox, ox + CARD[0], ox + CARD[0] * 2]
ys = [oy, oy + CARD[1], oy + CARD[1] * 2]
for x in xs[:3]:
    dashed(d, (x, oy - 30), (x, ys[2] + 30))
for y in ys:
    dashed(d, (ox - 30, y), (xs[2] + 30, y))
out = Path(__file__).resolve().parents[2] / 'print'
out.mkdir(exist_ok=True)
page.save(out / 'tsurumi-washer-qr.png', dpi=(DPI, DPI))
page.save(out / 'tsurumi-washer-qr.pdf', 'PDF', resolution=DPI)
print(out, page.size)
