# ドラム式洗濯乾燥機（シャープ ES-S7G）の「乾燥フィルターの場所と取り出し方」の説明図を作るスクリプト
#
# 元になる図（シャープ公式の取扱説明書 https://jp.sharp/support/washer/doc/ess7g_mn.pdf の32ページの線画から、
# 説明書の日本語の文字・引き出し線・ページ参照の丸枠を消して切り出したもの）:
#   images/common/washer-filter-body-base.png  … 本体全体（上面の右奥に乾燥フィルターがある）
#   images/common/washer-filter-lift-base.png  … 乾燥フィルターを真上に引き上げる図
#   images/common/washer-filter-cover-base.png … 底のカバーを開いた図
# 作られる図: images/common/appliance-washer-filter-{lang}.png
#   今は ja だけ作る（他言語は訳が決まってから LABELS の空欄を埋めると作られる）
#
#   python tools/make-washer-filter.py
# ①② の番号は「作業の順番」です（LABELS の文には書かず、自動で付きます）。
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

ROOT = Path(__file__).resolve().parent.parent
COMMON = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

LABELS = {
    'ja': {
        'font': 'meiryob.ttc',
        'where': ['乾燥フィルター', '本体の上面・右奥'],
        'lift': ['真上に', '引き上げる'],
        'open': ['底のカバーを', '開く'],
    },
    'en': {'font': 'meiryob.ttc', 'where': ['', ''], 'lift': ['', ''], 'open': ['', '']},
    'zh-Hant': {'font': 'msjhbd.ttc', 'where': ['', ''], 'lift': ['', ''], 'open': ['', '']},
    'zh-Hans': {'font': 'msyhbd.ttc', 'where': ['', ''], 'lift': ['', ''], 'open': ['', '']},
    'ko': {'font': 'malgunbd.ttf', 'where': ['', ''], 'lift': ['', ''], 'open': ['', '']},
}

W = 1040
PAD = 20
INK = (35, 30, 30)
RED = (228, 52, 52)
WHITE = (255, 255, 255)
LINE_W = 5
BADGE_R = 22

body = Image.open(COMMON / 'washer-filter-body-base.png').convert('RGB')
lift = Image.open(COMMON / 'washer-filter-lift-base.png').convert('RGB')
cover = Image.open(COMMON / 'washer-filter-cover-base.png').convert('RGB')
BS = 0.72
body = body.resize((round(body.width * BS), round(body.height * BS)), Image.LANCZOS)
FILTER_AT = (575 * BS, 48 * BS)   # 乾燥フィルターの位置（body-base の中の座標 → 縮小後）


def make(lang):
    conf = LABELS[lang]
    if not all(conf['where'] + conf['lift'] + conf['open']):
        print('skip', lang, '(訳が未入力)')
        return
    font = ImageFont.truetype(str(FONTS / conf['font']), 36)
    small = ImageFont.truetype(str(FONTS / conf['font']), 30)
    num_font = ImageFont.truetype(str(FONTS / 'seguisb.ttf'), 30)

    TOP = body.height + PAD * 2
    ROWH = max(lift.height, cover.height)
    H = TOP + 30 + 80 + ROWH + PAD
    im = Image.new('RGB', (W, H), WHITE)
    d = ImageDraw.Draw(im)

    # 上: 本体全体と乾燥フィルターの場所
    ox, oy = PAD + 10, PAD
    im.paste(body, (ox, oy))
    fx, fy = ox + FILTER_AT[0], oy + FILTER_AT[1]
    r = 34
    d.ellipse((fx - r, fy - r, fx + r, fy + r), outline=RED, width=LINE_W)
    tx = ox + body.width + 20
    d.line([(fx + r, fy), (tx - 10, fy)], fill=RED, width=LINE_W)
    d.text((tx, fy - 26), conf['where'][0], font=font, fill=INK, anchor='lm')
    d.text((tx, fy + 22), conf['where'][1], font=small, fill=INK, anchor='lm')
    if tx + d.textlength(conf['where'][0], font=font) > W - 4:
        print('  ! 訳が長すぎて右にはみ出します:', lang, 'where')

    # 下: ① 引き上げる ② カバーを開く
    y0 = TOP + 30
    cell = W // 2
    for i, (key, img) in enumerate([('lift', lift), ('open', cover)]):
        cx = cell * i + cell // 2
        # 番号の丸 + 2行の文
        bx = cell * i + 44
        d.ellipse((bx, y0 + 6, bx + BADGE_R * 2, y0 + 6 + BADGE_R * 2), fill=RED)
        d.text((bx + BADGE_R, y0 + 6 + BADGE_R - 1), str(i + 1), font=num_font, fill=WHITE, anchor='mm')
        for j, line in enumerate(conf[key]):
            d.text((bx + BADGE_R * 2 + 12, y0 + 6 + BADGE_R + (j - 0.5) * 40), line, font=font, fill=INK, anchor='lm')
            if bx + BADGE_R * 2 + 12 + d.textlength(line, font=font) > cell * (i + 1) - 4:
                print('  ! 訳が長すぎて右にはみ出します:', lang, key, line)
        im.paste(img, (cx - img.width // 2, y0 + 90 + (ROWH - img.height)))
    d.line([(cell, TOP + 20), (cell, H - PAD)], fill=(210, 210, 210), width=2)

    out = COMMON / ('appliance-washer-filter-%s.png' % lang)
    im.quantize(colors=96, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


for lang in LABELS:
    make(lang)
