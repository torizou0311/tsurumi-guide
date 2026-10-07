# プロジェクター（JMGO PicoPlay+）のリモコンの説明図を作るスクリプト
#
# 元になる図: images/201/projector-remote-base.png
#   （JMGO公式の取扱説明書 PicoPlay User Manual Ver.1.1.31.35 の11ページのリモコン図から、
#    説明用の線・番号・日本語を消したもの。
#    https://cdn.shopify.com/s/files/1/0571/2933/6915/files/JMGO_PicoPlay_User_Manual_Ver.1.1.31.35.pdf?v=1750657659 ）
# 作られる図: images/201/projector-remote-{en,ja,zh-Hant,ko}.png
#   リモコンの各ボタンに ①〜⑬ の番号と、その言語の名称を付けたもの。
#   番号は公式の取扱説明書と同じ（本文の「①電源」などと対応します）。
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-projector-remote.py
# （Windowsのフォントを使います）
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'images' / '201'
FONTS = Path('C:/Windows/Fonts')

# 番号 1〜13 の名称。改行したいところは \n
LABELS = {
    'en': {
        'font': 'seguisb.ttf',
        1: 'Power', 2: 'Arrow keys', 3: 'Back', 4: 'Menu', 5: 'Settings',
        6: 'YouTube', 7: 'Netflix', 8: 'Google Assistant\n(voice)', 9: 'OK / Select',
        10: 'Home', 11: 'Volume', 12: 'Input source', 13: 'Prime Video',
    },
    'ja': {
        'font': 'YuGothB.ttc',
        1: '電源', 2: '方向キー', 3: '戻る', 4: 'メニュー', 5: '設定',
        6: 'YouTube', 7: 'Netflix', 8: 'Google アシスタント\n（音声）', 9: '決定',
        10: 'ホーム', 11: '音量', 12: '入力切替', 13: 'Prime Video',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        1: '電源', 2: '方向鍵', 3: '返回', 4: '選單', 5: '設定',
        6: 'YouTube', 7: 'Netflix', 8: 'Google 助理\n（語音）', 9: '確認',
        10: '主畫面', 11: '音量', 12: '切換輸入', 13: 'Prime Video',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        1: '전원', 2: '방향 키', 3: '뒤로', 4: '메뉴', 5: '설정',
        6: 'YouTube', 7: 'Netflix', 8: 'Google 어시스턴트\n(음성)', 9: '확인',
        10: '홈', 11: '볼륨', 12: '입력 전환', 13: 'Prime Video',
    },
}

SCALE = 2.0
PAD = 16
GAP = 70            # 番号の丸とリモコンの間（線を引くところ）
FONT_SIZE = 44
BADGE_R = 24        # 番号の丸の半径
INK = (35, 30, 30)
RED = (228, 52, 52)
LINE_W = 4
SPACING = 12

# 元の図（projector-remote-base.png）の中での、番号を付ける位置（線の先）と、線を出す高さ
# (左か右か, 線の先の x, y)
POINTS = {
    1: ('L', 31, 78),  2: ('L', 22, 207), 3: ('L', 31, 335), 4: ('L', 31, 408),
    5: ('L', 31, 481), 6: ('L', 30, 542), 7: ('L', 30, 594),
    8: ('R', 188, 78), 9: ('R', 150, 207), 10: ('R', 188, 335), 11: ('R', 190, 439),
    12: ('R', 190, 542), 13: ('R', 190, 594),
}

base = Image.open(OUT / 'projector-remote-base.png').convert('RGB')
remote = base.resize((round(base.width * SCALE), round(base.height * SCALE)), Image.LANCZOS)
RW, RH = remote.size


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    nfont = ImageFont.truetype(str(FONTS / 'segoeuib.ttf'), 30)
    probe = ImageDraw.Draw(Image.new('RGB', (10, 10)))

    def tsize(txt):
        l, t, r, b = probe.multiline_textbbox((0, 0), txt, font=font, spacing=SPACING)
        return r - l, b - t

    left_w = max(tsize(conf[n])[0] for n in range(1, 14) if POINTS[n][0] == 'L')
    right_w = max(tsize(conf[n])[0] for n in range(1, 14) if POINTS[n][0] == 'R')
    # 左: [文字][丸]──線──ボタン   右: ボタン──線──[丸][文字]
    badge_zone = BADGE_R * 2 + 12
    ox = PAD + left_w + 12 + badge_zone + GAP
    W = ox + RW + GAP + badge_zone + 12 + right_w + PAD
    H = RH + PAD * 2
    im = Image.new('RGB', (round(W), H), 'white')
    im.paste(remote, (ox, PAD))
    d = ImageDraw.Draw(im)

    for n in range(1, 14):
        side, px, py = POINTS[n]
        x = ox + px * SCALE
        y = PAD + py * SCALE
        txt = conf[n]
        tw, th = tsize(txt)
        if side == 'L':
            cx = ox - GAP - BADGE_R
            d.line([(cx + BADGE_R, y), (x, y)], fill=RED, width=LINE_W)
            tx = cx - BADGE_R - 12 - tw
            align = 'right'
        else:
            cx = ox + RW + GAP + BADGE_R
            d.line([(x, y), (cx - BADGE_R, y)], fill=RED, width=LINE_W)
            tx = cx + BADGE_R + 12
            align = 'left'
        d.ellipse((cx - BADGE_R, y - BADGE_R, cx + BADGE_R, y + BADGE_R), fill=RED)
        d.text((cx, y), str(n), font=nfont, fill='white', anchor='mm')
        d.multiline_text((tx, y - th / 2 - FONT_SIZE * 0.12), txt, font=font, fill=INK, spacing=SPACING, align=align)
        # 小さな丸でボタンの位置を示す
        d.ellipse((x - 6, y - 6, x + 6, y + 6), fill=RED)

    out = OUT / ('projector-remote-%s.png' % lang)
    im.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


for lang in LABELS:
    make(lang)
