# エアコンのリモコンの説明図を作るスクリプト
#
# 元になる図: images/common/ac-remote-base.png
#   （三菱電機公式の取扱説明書 MSZ-GVxx3 のリモコン図から、説明用の線を消したもの）
# 作られる図: images/common/appliance-ac-ja.png      … リモコンの図だけ（日本語はそのまま読めるので訳なし）
#             images/common/appliance-ac-en.png      … 各ボタンに英語の訳を付けたもの
#             images/common/appliance-ac-zh-Hant.png … 中国語（繁体字）
#             images/common/appliance-ac-ko.png      … 韓国語
#
# 訳の文言を直したいときは、下の LABELS を書き換えて、このファイルを実行してください。
#   python tools/make-ac-remote.py
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
COMMON = ROOT / 'images' / 'common'
FONTS = Path('C:/Windows/Fonts')

# 各言語の訳。display は液晶の左にある「冷房／除湿／暖房」の説明（見出し・冷房・除湿・暖房の順）
LABELS = {
    'en': {
        'font': 'seguisb.ttf',
        'display': ['Current mode', 'Cooling', 'Dry', 'Heating'],
        'power': 'Power ON / OFF',
        'mode': 'Change mode',
        'dry': 'Dry level',
        'powerful': 'Powerful (boost)',
        'timer': 'Timer\ntop: setting\nmiddle: time +\nbottom: time −',
        'temp': 'Temperature\n▼ down   ▲ up',
        'fan': 'Fan speed',
        'direction': 'Air direction',
        'clean': 'Self-clean',
    },
    'zh-Hant': {
        'font': 'msjhbd.ttc',
        'display': ['目前的模式', '冷氣', '除濕', '暖氣'],
        'power': '電源 開／關',
        'mode': '切換模式',
        'dry': '除濕強度',
        'powerful': '強力運轉',
        'timer': '定時\n上：定時設定\n中：時間 ＋\n下：時間 －',
        'temp': '溫度\n▼ 調低   ▲ 調高',
        'fan': '風速',
        'direction': '風向',
        'clean': '內部清潔',
    },
    'ko': {
        'font': 'malgunbd.ttf',
        'display': ['현재 모드', '냉방', '제습', '난방'],
        'power': '전원 켜기 / 끄기',
        'mode': '운전 모드 변경',
        'dry': '제습 조절',
        'powerful': '파워풀 (강력)',
        'timer': '타이머\n위: 설정\n가운데: 시간 +\n아래: 시간 -',
        'temp': '온도\n▼ 내림   ▲ 올림',
        'fan': '풍속',
        'direction': '풍향',
        'clean': '내부 클린',
    },
}

SCALE = 0.5          # 元の図を縮める倍率
PAD = 20             # 外側の余白
GAP = 70             # リモコンと訳の文字の間（線を引くところ）
FONT_SIZE = 52
INK = (35, 30, 30)
RED = (228, 52, 52)
BLUE = (60, 100, 235)
GREEN = (60, 160, 60)
LINE_W = 4
SPACING = 6

base = Image.open(COMMON / 'ac-remote-base.png').convert('RGB')
remote = base.resize((round(base.width * SCALE), round(base.height * SCALE)), Image.LANCZOS)
RW, RH = remote.size

# 元の図（ac-remote-base.png）の中での、各ボタンの位置（左, 上, 右, 下）
BTN = {
    'display': (100, 350, 250, 610),
    'power': (188, 826, 344, 982),
    'temp': (400, 846, 812, 966),
    'mode': (181, 1066, 351, 1144),
    'fan': (632, 1066, 803, 1144),
    'dry': (181, 1239, 351, 1316),
    'direction': (632, 1239, 803, 1316),
    'powerful': (181, 1412, 351, 1490),
    'clean': (632, 1412, 803, 1490),
    'timer': (385, 992, 599, 1500),   # 真ん中の列（タイマーのボタン3つ）をまとめて囲む
}


def make(lang):
    conf = LABELS[lang]
    font = ImageFont.truetype(str(FONTS / conf['font']), FONT_SIZE)
    probe = ImageDraw.Draw(Image.new('RGB', (10, 10)))

    def text_size(txt):
        l, t, r, b = probe.multiline_textbbox((0, 0), txt, font=font, spacing=SPACING)
        return r - l, b - t

    head, cool, dry, heat = conf['display']
    left_texts = ['[' + head + ']', cool, dry, heat, conf['power'], conf['mode'], conf['dry'], conf['powerful'], conf['timer']]
    right_texts = [conf['temp'], conf['fan'], conf['direction'], conf['clean']]
    # 余白は、その言語でいちばん長い訳に合わせる（文字をできるだけ大きく見せるため）
    left_w = max(text_size(x)[0] for x in left_texts)
    right_w = max(text_size(x)[0] for x in right_texts)
    ox = PAD + left_w + GAP
    oy = PAD
    W = ox + RW + GAP + right_w + PAD
    H = RH + PAD * 2
    im = Image.new('RGB', (round(W), H), (255, 255, 255))
    im.paste(remote, (round(ox), oy))
    d = ImageDraw.Draw(im)
    left_edge = ox - GAP        # 左側の訳の右端
    right_edge = ox + RW + GAP  # 右側の訳の左端

    def frame(key):
        l, t, r, b = BTN[key]
        box = (ox + l * SCALE, oy + t * SCALE, ox + r * SCALE, oy + b * SCALE)
        d.rounded_rectangle(box, radius=14, outline=RED, width=LINE_W)
        return box

    def label_left(txt, y_center_first_line, fill=INK):
        # 1行目の中心が y_center_first_line に来るように、右寄せで書く
        w, _ = text_size(txt)
        d.multiline_text((left_edge - w, y_center_first_line - FONT_SIZE * 0.72), txt, font=font, fill=fill, spacing=SPACING, align='right')

    def label_right(txt, y_center, fill=INK):
        _, h = text_size(txt)
        d.multiline_text((right_edge, y_center - h / 2 - FONT_SIZE * 0.15), txt, font=font, fill=fill, spacing=SPACING, align='left')

    # --- 液晶の左の「冷房／除湿／暖房」 ---
    l, t, r, b = frame('display')
    y0 = t + 4
    label_left('[' + head + ']', y0)
    label_left(cool, y0 + 68, BLUE)
    label_left(dry, y0 + 136, GREEN)
    label_left(heat, y0 + 204, RED)
    d.line([(left_edge + 12, y0), (l, y0)], fill=RED, width=LINE_W)

    # --- 左側のボタン ---
    for key in ['power', 'mode', 'dry', 'powerful']:
        l, t, r, b = frame(key)
        cy = (t + b) / 2
        label_left(conf[key], cy)
        d.line([(left_edge + 12, cy), (l, cy)], fill=RED, width=LINE_W)

    # --- 真ん中の列（タイマー）: 下から線を出して左へ ---
    l, t, r, b = frame('timer')
    cx = (l + r) / 2
    turn_y = b + 16          # ボタンの列のすぐ下で横に曲げる（下の「電流切換」の文字に重ならない高さ）
    y = b + 62               # 訳の1行目の高さ（上の「パワフル」の訳と重ならないよう少し下げる）
    label_left(conf['timer'], y)
    d.line([(left_edge + 12, y), (ox - 4, turn_y), (cx, turn_y), (cx, b)], fill=RED, width=LINE_W, joint='curve')

    # --- 右側のボタン ---
    for key in ['temp', 'fan', 'direction', 'clean']:
        l, t, r, b = frame(key)
        cy = (t + b) / 2
        d.line([(r, cy), (right_edge - 12, cy)], fill=RED, width=LINE_W)
        label_right(conf[key], cy)

    out = COMMON / ('appliance-ac-%s.png' % lang)
    im.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


def make_ja():
    # 日本語はリモコンの図だけ
    side = 200  # 左右の余白（小さくするとリモコンが大きく表示される）
    im = Image.new('RGB', (RW + side * 2, RH + PAD * 2), (255, 255, 255))
    im.paste(remote, (side, PAD))
    out = COMMON / 'appliance-ac-ja.png'
    im.quantize(colors=64, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE).save(out, optimize=True)
    print(out.name, im.size, out.stat().st_size // 1024, 'KB')


for lang in LABELS:
    make(lang)
make_ja()
