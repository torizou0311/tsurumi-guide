# -*- coding: utf-8 -*-
"""Wi-Fi貼り紙の下に並べて貼る横長の帯「Wi-Fiにつながらないとき」（A4横に3枚: 103/201/202）。
出力: ../../print/tsurumi-wifi-trouble.pdf（A4横・300dpi・実寸）と確認用PNG"""
import math
import qrcode
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

DPI = 300
mm = lambda v: round(v / 25.4 * DPI)
A4 = (mm(297), mm(210))
STRIP = (mm(279), mm(62))
FONTS = Path('C:/Windows/Fonts')
BROWN = (157, 126, 98)      # #9D7E62
BEIGE = (231, 224, 214)     # #E7E0D6
TEXT = (140, 110, 82)       # #8C6E52
WHITE = (255, 255, 255)
GRAY = (150, 150, 150)
BASE = 'https://ysr-guide.neconote.net/index.html?room={}#/wifi/trouble'
ROOMS = ['103', '201', '202']
# 部屋ごとの色（今貼ってある「GUEST WiFi」の貼り紙に合わせる。103=水色、201=緑、202=茶）
# main=左の面、light=中央・右の面、text=文字、dot=手順の丸、line=区切り線
THEMES = {
    '103': dict(main=(174, 213, 244), light=(240, 247, 252), text=(74, 144, 214), dot=(90, 159, 224), line=(190, 215, 238)),
    '201': dict(main=(181, 211, 161), light=(232, 239, 224), text=(40, 40, 40), dot=(95, 160, 95), line=(107, 191, 115)),
    '202': dict(main=(157, 126, 98), light=(231, 224, 214), text=(140, 110, 82), dot=(157, 126, 98), line=(205, 196, 184)),
}
EN_B, EN_R = 'segoeuib.ttf', 'segoeui.ttf'
JP_B, JP_R = 'BIZ-UDGothicB.ttc', 'BIZ-UDGothicR.ttc'

def font(fn, size):
    return ImageFont.truetype(str(FONTS / fn), size)

def fit(d, text, fn, size, maxw, minsize=20):
    while True:
        f = font(fn, size)
        if d.textlength(text, font=f) <= maxw or size <= minsize:
            return f
        size -= 1

def qr_img(url, target):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=0, box_size=1)
    q.add_data(url); q.make(fit=True)
    n = len(q.get_matrix())
    q.box_size = max(1, target // n)
    return q.make_image(fill_color='black', back_color='white').convert('RGB')

def wifi_icon(d, cx, cy, r, w):
    # 白い線の弧3本＋点（扇形）
    for k in (1, 2, 3):
        rr = r * k / 3
        d.arc([cx - rr, cy - rr, cx + rr, cy + rr], 225, 315, fill=WHITE, width=w)
    dr = w * 0.9
    d.ellipse([cx - dr, cy - dr, cx + dr, cy + dr], fill=WHITE)

def strip(room):
    global BROWN, BEIGE, TEXT, DOT, LINE
    th = THEMES[room]
    BROWN, BEIGE, TEXT, DOT, LINE = th['main'], th['light'], th['text'], th['dot'], th['line']
    W, H = STRIP
    im = Image.new('RGB', STRIP, WHITE)
    d = ImageDraw.Draw(im)
    LW = mm(75)          # 左の茶色の面
    RW = mm(50)          # 右のQR面
    d.rectangle([0, 0, LW, H], fill=BROWN)
    d.rectangle([LW, 0, W - RW, H], fill=BEIGE)
    d.rectangle([W - RW, 0, W, H], fill=BEIGE)

    # 左: アイコン＋見出し
    pad = mm(7)
    maxw = LW - pad * 2
    wifi_icon(d, LW / 2, mm(24), mm(15), 11)
    f = fit(d, "Can't connect?", EN_B, 90, maxw)
    d.text((LW / 2, mm(38)), "Can't connect?", font=f, fill=WHITE, anchor='mm')
    t = 'Wi-Fiにつながらないとき'
    f = fit(d, t, JP_B, 44, maxw)
    d.text((LW / 2, mm(49)), t, font=f, fill=WHITE, anchor='mm')

    # 中央
    x0 = LW + mm(9)
    x1 = W - RW - mm(8)
    cw = x1 - x0
    y = mm(7)
    f = fit(d, 'Restart the router', EN_B, 64, cw)
    d.text((x0, y), 'Restart the router', font=f, fill=TEXT, anchor='lt')
    hw = d.textlength('Restart the router', font=f)
    fj = fit(d, '/ ルーターの再起動', JP_B, 44, cw - hw - 30)
    d.text((x0 + hw + 30, y + 14), '/ ルーターの再起動', font=fj, fill=TEXT, anchor='lt')
    y += mm(11.5)
    steps = [("Unplug the router's power cord (on the wall by the window)",
              'ルーター（窓際の壁）の電源コードを抜く'),
             ('Wait 10 seconds, then plug it back in', '10秒待ってから差し直す'),
             ('Wait 5 minutes, then connect again', '5分待ってから、もう一度つなぐ')]
    cr = 27
    tx = x0 + cr * 2 + 26
    for i, (en, ja) in enumerate(steps, 1):
        cy = y + 38
        d.ellipse([x0, cy - cr, x0 + cr * 2, cy + cr], fill=DOT)
        d.text((x0 + cr, cy), str(i), font=font(EN_B, 38), fill=WHITE, anchor='mm')
        fe = fit(d, en, EN_B, 52, x1 - tx, 48)
        d.text((tx, y), en, font=fe, fill=TEXT, anchor='lt')
        fj = fit(d, ja, JP_R, 34, x1 - tx)
        d.text((tx, y + 62), ja, font=fj, fill=TEXT, anchor='lt')
        y += mm(10.3)
    y += mm(0.5)
    d.line([x0, y, x1, y], fill=LINE, width=3)
    y += mm(2.2)
    en = 'Still not working? Please send us a message.'
    ja = '直らないときはメッセージでご連絡ください'
    d.text((x0, y), en, font=fit(d, en, EN_R, 32, cw), fill=TEXT, anchor='lt')
    d.text((x0, y + 40), ja, font=fit(d, ja, JP_R, 28, cw), fill=TEXT, anchor='lt')

    # 右: QR
    box = mm(38)
    bx = W - RW + (RW - box) // 2
    by = mm(5)
    d.rectangle([bx, by, bx + box, by + box], fill=WHITE)
    q = qr_img(BASE.format(room), mm(33))
    im.paste(q, (bx + (box - q.width) // 2, by + (box - q.height) // 2))
    cx = W - RW / 2
    f = fit(d, 'More help', EN_B, 40, RW - 40)
    d.text((cx, by + box + 30), 'More help', font=f, fill=TEXT, anchor='mm')
    f = fit(d, '詳しくはこちら', JP_B, 32, RW - 40)
    d.text((cx, by + box + 72), '詳しくはこちら', font=f, fill=TEXT, anchor='mm')

    # 部屋番号（目立たない）
    d.text((mm(4), H - mm(2.5)), room, font=font(EN_R, 30), fill=GRAY, anchor='lb')
    return im

def dashed(d, p0, p1):
    (x0, y0), (x1, y1) = p0, p1
    L = max(abs(x1 - x0), abs(y1 - y0)); t = 0
    while t < L:
        e = min(t + 14, L)
        d.line([(x0 + (x1 - x0) * t / L, y0 + (y1 - y0) * t / L),
                (x0 + (x1 - x0) * e / L, y0 + (y1 - y0) * e / L)], fill=(190, 190, 190), width=2)
        t += 24

page = Image.new('RGB', A4, 'white')
d = ImageDraw.Draw(page)
ox = (A4[0] - STRIP[0]) // 2
gap = mm(7)
oy = (A4[1] - (STRIP[1] * 3 + gap * 2)) // 2
for i, room in enumerate(ROOMS):
    y = oy + i * (STRIP[1] + gap)
    page.paste(strip(room), (ox, y))
    print(room, BASE.format(room))
for i in range(1, 3):
    yc = oy + i * STRIP[1] + (2 * i - 1) * gap // 2
    dashed(d, (mm(8), yc), (A4[0] - mm(8), yc))
out = Path(__file__).resolve().parents[2] / 'print'
out.mkdir(exist_ok=True)
page.save(out / 'tsurumi-wifi-trouble.png', dpi=(DPI, DPI))
page.save(out / 'tsurumi-wifi-trouble.pdf', 'PDF', resolution=DPI)
print(out, page.size)
