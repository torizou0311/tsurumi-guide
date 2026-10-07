# プロジェクター（JMGO PicoPlay+）本体の端子・ボタンの説明図を作るスクリプト
#
# 元になる図: images/201/projector-ports-base.png
#   （JMGO公式の取扱説明書 PicoPlay User Manual Ver.1.1.31.35 の10ページ下の図から、
#    説明用の線と日本語を消したもの。
#    https://cdn.shopify.com/s/files/1/0571/2933/6915/files/JMGO_PicoPlay_User_Manual_Ver.1.1.31.35.pdf?v=1750657659 ）
# 作られる図: images/201/projector-ports-{en,ja,zh-Hant,ko}.png
#   端子とボタンに ①〜⑤ の番号を付け、図の下に各言語の名称の一覧を付けたもの。
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-projector-ports.py
# （Windowsのフォントを使います）
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'images' / '201'
FONTS = Path('C:/Windows/Fonts')

# 左から順に 1〜5（電源ボタン／アクションボタン／USB／HDMI／電源の差し込み口）
LABELS = {
    'en': {
        'font': 'seguisb.ttf',
        'items': ['Power button', 'Action button', 'USB', 'HDMI', 'Power input (USB Type-C)'],
    },
    'ja': {
        'font': 'YuGothB.ttc',
        'items': ['電源ボタン', 'アクションボタン', 'USB', 'HDMI', '電源（USB Type-C）'],
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'items': ['電源按鈕', '動作按鈕', 'USB', 'HDMI', '電源插孔（USB Type-C）'],
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'items': ['전원 버튼', '액션 버튼', 'USB', 'HDMI', '전원 단자 (USB Type-C)'],
    },
}

# 元の図（projector-ports-base.png）の中での、各端子の x と、線の先の y
PORTS_X = [335, 466, 615, 776, 937]
PORT_TOP_Y = 36

PAD = 20
TOP = 110            # 番号の丸を置く高さ（図の上の余白）
BADGE_R = 32
FONT_SIZE = 58
ROW_H = 92
INK = (35, 30, 30)
RED = (228, 52, 52)
LINE_W = 5

base = Image.open(OUT / 'projector-ports-base.png').convert('RGB')


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    nfont = ImageFont.truetype(str(FONTS / 'segoeuib.ttf'), 40)
    W = base.width + PAD * 2
    H = TOP + base.height + 30 + ROW_H * 5 + PAD
    im = Image.new('RGB', (W, H), 'white')
    im.paste(base, (PAD, TOP))
    d = ImageDraw.Draw(im)
    for i, px in enumerate(PORTS_X):
        x = PAD + px
        cy = TOP - BADGE_R - 6
        ty = TOP + PORT_TOP_Y
        d.line([(x, cy), (x, ty)], fill=RED, width=LINE_W)
        d.ellipse((x - 7, ty - 7, x + 7, ty + 7), fill=RED)
        d.ellipse((x - BADGE_R, cy - BADGE_R, x + BADGE_R, cy + BADGE_R), fill=RED)
        d.text((x, cy), str(i + 1), font=nfont, fill='white', anchor='mm')
    y0 = TOP + base.height + 30
    for i, name in enumerate(conf['items']):
        cy = y0 + ROW_H * i + ROW_H / 2
        cx = PAD + 20 + BADGE_R
        d.ellipse((cx - BADGE_R, cy - BADGE_R, cx + BADGE_R, cy + BADGE_R), fill=RED)
        d.text((cx, cy), str(i + 1), font=nfont, fill='white', anchor='mm')
        d.text((cx + BADGE_R + 24, cy), name, font=font, fill=INK, anchor='lm')
    out = OUT / ('projector-ports-%s.png' % lang)
    im.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


for lang in LABELS:
    make(lang)
