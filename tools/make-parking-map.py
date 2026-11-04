# 「近隣の駐車場」ページ（#/parking）の冒頭に出す、部屋と駐車場の位置がわかる地図を作るスクリプト
#
# 道路データ: OpenStreetMap の Overpass API から取得。取得に失敗したときは前回の取得結果
#   ../_research/osm_parking.json を使う（取得に成功するたびに上書き保存する）。
# 座標は Googleマップで確認したもの（2026-11-04）。
# 作られる図: images/common/parking-map.png
#   画像には文字を入れない（全言語共通）。入れるのは道路・部屋の★・各駐車場の実位置の小さな点・著作表示だけ。
#   番号の丸は画像に描かず、HTML側（data/content.js の parkingMap.pins）で重ねる。
#   このスクリプトが最後に print する pins を content.js に貼る（x, y = 丸を置く位置、px, py = 実際の位置。左上からの%）。
#
#   python tools/make-parking-map.py
import json, math, time, urllib.request, urllib.parse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'images' / 'common' / 'parking-map.png'
CACHE = ROOT.parent / '_research' / 'osm_parking.json'
FONT = 'C:/Windows/Fonts/meiryo.ttc'

ROOM = (35.51005, 139.66982)
# (anchor, 番号, 緯度, 経度, 丸を置く位置のずらし量[画像px]。近い所が重ならないように)
LOTS = [
    ('tokup',       1, 35.51068,  139.66969,  (0, 0)),
    ('times3',      2, 35.511456, 139.670997, (0, 0)),
    ('shinko',      3, 35.511007, 139.671979, (-10, -60)),
    ('times',       4, 35.510742, 139.672528, (45, -45)),
    ('timeparking', 5, 35.509684, 139.669919, (0, 0)),
    ('livingpark',  6, 35.510592, 139.666978, (0, 0)),
    ('paraca',      7, 35.510561, 139.672464, (-70, 55)),
    ('toyooka17',   8, 35.510599, 139.672669, (65, 40)),
]

LAT0, LAT1 = 35.50870, 35.51220
LON0, LON1 = 139.66560, 139.67400
W = 1000
S = 2
KX = math.cos(math.radians(35.510))
SCALE = W * S / ((LON1 - LON0) * KX)
H = int((LAT1 - LAT0) * SCALE / S)


def px(p):
    return ((p[1] - LON0) * KX * SCALE, (LAT1 - p[0]) * SCALE)


def fetch():
    q = '[out:json][timeout:60];(way["highway"](%f,%f,%f,%f););out geom tags;' % (
        LAT0 - 0.0005, LON0 - 0.0005, LAT1 + 0.0005, LON1 + 0.0005)
    for url in ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'] * 2:
        try:
            req = urllib.request.Request(url, data=urllib.parse.urlencode({'data': q}).encode(),
                                         headers={'User-Agent': 'houseguide-parking-map/1.0'})
            d = json.load(urllib.request.urlopen(req, timeout=90))
            CACHE.write_text(json.dumps(d), encoding='utf-8')
            print('OSM取得 OK', len(d['elements']), '本')
            return d
        except Exception as ex:
            print('取得失敗', url, ex)
            time.sleep(4)
    print('前回の取得結果を使います')
    return json.loads(CACHE.read_text(encoding='utf-8'))


data = fetch()
ways = [(e['tags'].get('highway'), [(p['lat'], p['lon']) for p in e['geometry']]) for e in data['elements']]

im = Image.new('RGB', (W * S, H * S), (244, 241, 234))
d = ImageDraw.Draw(im)
WHITE = (255, 255, 255)
OUTLINE = (170, 166, 158)
INK = (30, 30, 30)


def line(pts, width, fill):
    xy = [px(p) for p in pts]
    d.line(xy, fill=fill, width=int(width * S), joint='curve')
    r = width * S / 2
    for x, y in xy:
        d.ellipse((x - r, y - r, x + r, y + r), fill=fill)


# 大通り（85号など）は太く、細い道は細く
STYLE = {'primary': 24, 'secondary': 20, 'tertiary': 16, 'residential': 8, 'unclassified': 8,
         'service': 4, 'living_street': 7, 'trunk': 24}
order = ['service', 'living_street', 'residential', 'unclassified', 'tertiary', 'secondary', 'primary', 'trunk']
for hw in order:
    for h2, g in ways:
        if h2 == hw:
            line(g, STYLE[hw] + 4, OUTLINE)
    for h2, g in ways:
        if h2 == hw:
            line(g, STYLE[hw], (255, 233, 160) if hw in ('primary', 'trunk') else WHITE)
# 階段は赤い点線、歩道は細い灰色の点線
for hw, g in ways:
    if hw in ('steps', 'footway', 'path', 'pedestrian'):
        col, wd = ((190, 60, 60), 3) if hw == 'steps' else ((190, 186, 178), 2)
        xy = [px(p) for p in g]
        for (x0, y0), (x1, y1) in zip(xy, xy[1:]):
            n = max(2, int(math.hypot(x1 - x0, y1 - y0) / (7 * S)))
            for i in range(0, n, 2):
                a, b = i / n, (i + 1) / n
                d.line([(x0 + (x1 - x0) * a, y0 + (y1 - y0) * a), (x0 + (x1 - x0) * b, y0 + (y1 - y0) * b)],
                       fill=col, width=wd * S)

# 実際の位置の小さな点と、ずらした丸への細い線
pins = []
for anchor, n, lat, lon, (ox, oy) in LOTS:
    ax, ay = px((lat, lon))
    ax, ay = ax / S, ay / S
    dx, dy = ax + ox, ay + oy
    if ox or oy:
        d.line([(ax * S, ay * S), (dx * S, dy * S)], fill=(60, 60, 60), width=2 * S)
    r = 4.5 * S
    d.ellipse((ax * S - r, ay * S - r, ax * S + r, ay * S + r), fill=(40, 40, 40), outline=WHITE, width=2 * S)
    pins.append((anchor, n, dx, dy, ax, ay))

# 部屋のある建物: ★
bx, by = px(ROOM)
bx, by = bx / S, by / S
pts = []
for i in range(10):
    r = 20 if i % 2 == 0 else 8.5
    a = -math.pi / 2 + i * math.pi / 5
    pts.append(((bx + r * math.cos(a)) * S, (by + r * math.sin(a)) * S))
d.polygon(pts, fill=(255, 196, 0), outline=(150, 90, 0))

# 縮尺バー（100m。数字だけなので全言語共通）・北・著作表示。北は矢印だけ。著作表示は必須
m100 = 100 / 111320 * SCALE / S
x0, y0 = 40, H - 60
d.line([(x0 * S, y0 * S), ((x0 + m100) * S, y0 * S)], fill=INK, width=4 * S)
d.line([(x0 * S, (y0 - 7) * S), (x0 * S, (y0 + 7) * S)], fill=INK, width=3 * S)
d.line([((x0 + m100) * S, (y0 - 7) * S), ((x0 + m100) * S, (y0 + 7) * S)], fill=INK, width=3 * S)
nx, ny = W - 40, 50
d.polygon([(nx * S, (ny - 26) * S), ((nx - 12) * S, (ny + 10) * S), (nx * S, (ny + 3) * S), ((nx + 12) * S, (ny + 10) * S)], fill=INK)
f = ImageFont.truetype(FONT, 17 * S)
fb = ImageFont.truetype('C:/Windows/Fonts/meiryob.ttc', 20 * S)
d.text(((x0 + m100 / 2) * S, (y0 - 10) * S), '100m', font=fb, fill=INK, anchor='md')
d.text(((W - 8) * S, (H - 10) * S), '© OpenStreetMap contributors', font=f, fill=(70, 70, 70), anchor='rd')

im = im.resize((W, H), Image.LANCZOS)
im.save(OUT, optimize=True)
print(OUT, im.size, OUT.stat().st_size // 1024, 'KB')

pct = lambda v, t: round(v / t * 100, 1)
print('部屋(★): x=%s y=%s' % (pct(bx, W), pct(by, H)))
print('pins: [')
for anchor, n, dx, dy, ax, ay in pins:
    print("  { anchor: '%s', n: %d, x: %s, y: %s, px: %s, py: %s }," % (
        anchor, n, pct(dx, W), pct(dy, H), pct(ax, W), pct(ay, H)))
print(']')
print('room: { x: %s, y: %s }' % (pct(bx, W), pct(by, H)))
