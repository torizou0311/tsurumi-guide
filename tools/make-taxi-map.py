# 「運転手さんへ」ページ（#/taxi）の、最後の約500mだけの簡単な地図を作るスクリプト
#
# 道路データ: OpenStreetMap の Overpass API（https://overpass-api.de/api/interpreter）から
#   建物の周辺の道路（highway）を取得する。取得に失敗したときは前回の取得結果
#   ../_research/osm_taxi.json を使う（取得に成功するたびに上書き保存する）。
# 細い道のルートは、OSMの道路網で「曲がり角の入口 → 建物の北のT字路」を最短経路で求めたもの。
#   T字路から建物まで（約25m）はOSMに道が無いので、点線でつないでいる。
# 作られる図: images/common/taxi-map.png（日本語のみ。運転手向けなので全言語で同じ図）
#
#   python tools/make-taxi-map.py
import json, math, heapq, time, urllib.request, urllib.parse
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'images' / 'common' / 'taxi-map.png'
CACHE = ROOT.parent / '_research' / 'osm_taxi.json'
FONT = 'C:/Windows/Fonts/meiryob.ttc'

# ---- 座標（緯度, 経度） ----
BUILDING = (35.51005, 139.66982)
MOUTH = (35.50885, 139.67150)       # 細い道の入口（曲がり角）
ONCUESTA = (35.50859, 139.67188)    # On cuesta の信号
TJUNC = (35.51026, 139.66977)       # 建物北のT字路
STAIRS = (35.5098, 139.6698)        # 85号の階段付近

# ---- 描く範囲 ----
LAT0, LAT1 = 35.50690, 35.51100
LON0, LON1 = 139.66860, 139.67330
W = 1000
S = 2  # 2倍で描いて縮小（ぎざぎざ防止）
KX = math.cos(math.radians(35.509))
SCALE = W * S / ((LON1 - LON0) * KX)   # 度 -> 描画px（S倍）
H = int((LAT1 - LAT0) * SCALE / S)


def px(p):
    return ((p[1] - LON0) * KX * SCALE, (LAT1 - p[0]) * SCALE)


def meters(a, b):
    return math.hypot((a[0] - b[0]) * 111000, (a[1] - b[1]) * 90000)


# ---- 道路の取得 ----
def fetch():
    q = '[out:json][timeout:60];(way["highway"](%f,%f,%f,%f););out geom tags;' % (
        LAT0 - 0.0005, LON0 - 0.0005, LAT1 + 0.0005, LON1 + 0.0005)
    for url in ['https://overpass-api.de/api/interpreter', 'https://overpass.kumi.systems/api/interpreter'] * 2:
        try:
            req = urllib.request.Request(url, data=urllib.parse.urlencode({'data': q}).encode(),
                                         headers={'User-Agent': 'houseguide-taxi-map/1.0'})
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

# ---- 最短経路（階段・歩道は通らない） ----
G = {}
for hw, g in ways:
    if hw in ('steps', 'footway', 'path', 'pedestrian'):
        continue
    for a, b in zip(g, g[1:]):
        G.setdefault(a, []).append((b, meters(a, b)))
        G.setdefault(b, []).append((a, meters(a, b)))


def near(p):
    return min(G, key=lambda n: meters(n, p))


s, t = near(MOUTH), near(TJUNC)
dist, prev, heap = {s: 0}, {}, [(0, s)]
while heap:
    c, u = heapq.heappop(heap)
    if c > dist[u]:
        continue
    for v, w in G[u]:
        if c + w < dist.get(v, 1e9):
            dist[v] = c + w
            prev[v] = u
            heapq.heappush(heap, (c + w, v))
route = [t]
while route[-1] != s:
    route.append(prev[route[-1]])
route.reverse()
print('細い道の長さ: 約%d m（+建物まで約%d m）' % (dist[t], meters(t, BUILDING)))

# 85号（primary）: 入口より東側（駅方面）の部分を、ルートの手前に足す
primary = max([g for hw, g in ways if hw == 'primary'], key=len)
if primary[0][1] < primary[-1][1]:
    primary = primary[::-1]  # 東（駅側）が先頭になるよう並べる
approach = [p for p in primary if s[1] - 1e-6 <= p[1] <= LON1 + 0.0005]

# ---- 描画 ----
im = Image.new('RGB', (W * S, H * S), (244, 241, 234))
d = ImageDraw.Draw(im)
BLUE = (22, 96, 214)
WHITE = (255, 255, 255)
RED = (214, 32, 32)
INK = (30, 30, 30)
OUTLINE = (170, 166, 158)


def F(size):
    return ImageFont.truetype(FONT, size * S)


def line(pts, width, fill):
    xy = [px(p) for p in pts]
    d.line(xy, fill=fill, width=int(width * S), joint='curve')
    r = width * S / 2
    for x, y in xy:
        d.ellipse((x - r, y - r, x + r, y + r), fill=fill)


STYLE = {  # 種類: 幅
    'primary': 22, 'secondary': 18, 'tertiary': 14,
    'residential': 9, 'unclassified': 9, 'service': 6, 'living_street': 8,
}
order = ['service', 'residential', 'unclassified', 'living_street', 'tertiary', 'secondary', 'primary']
for hw in order:
    for h2, g in ways:
        if h2 == hw:
            line(g, STYLE[hw] + 4, OUTLINE)
    for h2, g in ways:
        if h2 == hw:
            line(g, STYLE[hw], (255, 233, 160) if hw == 'primary' else WHITE)
# 階段は赤い点線
for hw, g in ways:
    if hw == 'steps':
        xy = [px(p) for p in g]
        for (x0, y0), (x1, y1) in zip(xy, xy[1:]):
            n = max(2, int(math.hypot(x1 - x0, y1 - y0) / (7 * S)))
            for i in range(0, n, 2):
                a, b = i / n, (i + 1) / n
                d.line([(x0 + (x1 - x0) * a, y0 + (y1 - y0) * a), (x0 + (x1 - x0) * b, y0 + (y1 - y0) * b)],
                       fill=(190, 60, 60), width=3 * S)


def arrow_head(p0, p1, size, fill):
    (x0, y0), (x1, y1) = px(p0), px(p1)
    a = math.atan2(y1 - y0, x1 - x0)
    sz = size * S
    pts = [(x1, y1),
           (x1 - sz * math.cos(a) + sz * 0.55 * math.sin(a), y1 - sz * math.sin(a) - sz * 0.55 * math.cos(a)),
           (x1 - sz * math.cos(a) - sz * 0.55 * math.sin(a), y1 - sz * math.sin(a) + sz * 0.55 * math.cos(a))]
    d.polygon(pts, fill=fill)


def text(xy, s_, size, fill=INK, anchor='mm'):
    f = F(size)
    x, y = xy[0] * S, xy[1] * S
    for dx in (-1, 0, 1):
        for dy in (-1, 0, 1):
            d.text((x + dx * 2 * S, y + dy * 2 * S), s_, font=f, fill=WHITE, anchor=anchor, align='center')
    d.text((x, y), s_, font=f, fill=fill, anchor=anchor, align='center')


def tag(xy, s_, size, bg, fg=WHITE, anchor='mm'):
    f = F(size)
    l, tp, r, b = d.textbbox((xy[0] * S, xy[1] * S), s_, font=f, anchor=anchor, align='center')
    pad = size * 0.35 * S
    d.rounded_rectangle((l - pad, tp - pad * 0.7, r + pad, b + pad * 0.8), radius=size * 0.3 * S, fill=bg)
    d.text((xy[0] * S, xy[1] * S), s_, font=f, fill=fg, anchor=anchor, align='center')


# ルート: 85号を上ってくる部分 + 細い道 + 建物まで（点線）
line(approach, 9, BLUE)
line(route, 11, BLUE)
line([route[-1], BUILDING], 8, BLUE)
(xa, ya), (xb, yb) = px(route[-1]), px(BUILDING)
for i in (1, 3, 5):
    cx, cy = xa + (xb - xa) * i / 6, ya + (yb - ya) * i / 6
    d.ellipse((cx - 3 * S, cy - 3 * S, cx + 3 * S, cy + 3 * S), fill=WHITE)
arrow_head(approach[-4], approach[-1], 18, BLUE)
for i in range(1, len(route) - 1, 3):
    arrow_head(route[i], route[i + 1], 15, BLUE)

# On cuesta の信号（ピンクの建物と信号）
ox, oy = px(ONCUESTA)
ox, oy = ox / S, oy / S
d.rectangle(((ox - 20) * S, (oy + 18) * S, (ox + 28) * S, (oy + 52) * S), fill=(244, 150, 190), outline=(190, 80, 120), width=2 * S)
d.rounded_rectangle(((ox - 8) * S, (oy - 34) * S, (ox + 8) * S, (oy - 4) * S), radius=5 * S, fill=(50, 50, 50))
for i, c in enumerate([(230, 60, 60), (240, 200, 40), (60, 190, 90)]):
    cy = oy - 29 + i * 10
    d.ellipse(((ox - 3.5) * S, (cy - 3.5) * S, (ox + 3.5) * S, (cy + 3.5) * S), fill=c)
tag((ox - 150, oy + 85),'On cuesta（ピンクの建物）\nの信号', 21, (214, 90, 140))

# 曲がり角
mx, my = px(MOUTH)
mx, my = mx / S, my / S
# 入口の両側のマンション（北側。東＝右が白、西＝左が茶色）
d.rectangle(((mx + 14) * S, (my - 62) * S, (mx + 50) * S, (my - 28) * S), fill=WHITE, outline=(120, 120, 120), width=2 * S)
d.rectangle(((mx - 52) * S, (my - 62) * S, (mx - 16) * S, (my - 28) * S), fill=(150, 100, 60), outline=(100, 60, 30), width=2 * S)
d.text(((mx + 32) * S, (my - 45) * S), '白', font=F(18), fill=INK, anchor='mm')
d.text(((mx - 34) * S, (my - 45) * S), '茶', font=F(18), fill=WHITE, anchor='mm')
tag((mx + 105, my - 125), '② ここを右折\n（細い上り坂）', 26, BLUE)
d.line([((mx + 70) * S, (my - 98) * S), ((mx + 4) * S, (my - 4) * S)], fill=BLUE, width=3 * S)

# 85号の名前と駅方向
ay = px(approach[0])[1] / S
text((W - 170, ay + 60), '① 駅（JR鶴見・京急鶴見）\n方面から上ってくる', 23, BLUE)
text((330, 640), '鶴見獅子ヶ谷通り\n（85号・大通り）', 24, (120, 100, 20))

# 建物
bx, by = px(BUILDING)
bx, by = bx / S, by / S
pts = []
for i in range(10):
    r = (20 if i % 2 == 0 else 8.5)
    a = -math.pi / 2 + i * math.pi / 5
    pts.append(((bx + r * math.cos(a)) * S, (by + r * math.sin(a)) * S))
d.polygon(pts, fill=(255, 196, 0), outline=(150, 90, 0))
tag((bx - 90, by - 70), '③ ここ（目的地）\n寺谷1-7-40', 25, (20, 130, 70))
tag((bx - 128, by + 8), '突き当たりの広い場所\n（ここで転回できます）', 19, (90, 90, 100))
d.line([((bx - 28) * S, (by + 6) * S), ((bx - 16) * S, (by + 4) * S)], fill=(90, 90, 100), width=3 * S)

# 階段付近: 赤い×
sx, sy = px(STAIRS)
sx, sy = sx / S, sy / S
r = 15
d.line([((sx - r) * S, (sy - r) * S), ((sx + r) * S, (sy + r) * S)], fill=RED, width=7 * S)
d.line([((sx - r) * S, (sy + r) * S), ((sx + r) * S, (sy - r) * S)], fill=RED, width=7 * S)
tag((sx - 20, sy + 62), '×ここで降ろさない\n（急な階段）', 25, RED)

# 縮尺・北・クレジット
m100 = 100 / 111320 * SCALE / S  # 100m の長さ（px）
x0, y0 = 40, H - 70
d.line([(x0 * S, y0 * S), ((x0 + m100) * S, y0 * S)], fill=INK, width=4 * S)
d.line([(x0 * S, (y0 - 7) * S), (x0 * S, (y0 + 7) * S)], fill=INK, width=3 * S)
d.line([((x0 + m100) * S, (y0 - 7) * S), ((x0 + m100) * S, (y0 + 7) * S)], fill=INK, width=3 * S)
text((x0 + m100 / 2, y0 - 20), '100m', 20)
nx, ny = W - 50, 190
d.polygon([(nx * S, (ny - 30) * S), ((nx - 13) * S, (ny + 10) * S), (nx * S, (ny + 2) * S), ((nx + 13) * S, (ny + 10) * S)], fill=INK)
text((nx, ny + 28), '北', 22)
text((W - 8, H - 12), '© OpenStreetMap contributors', 17, fill=(70, 70, 70), anchor='rm')

im = im.resize((W, H), Image.LANCZOS)
im.save(OUT, optimize=True)
print(OUT, im.size, OUT.stat().st_size // 1024, 'KB')
