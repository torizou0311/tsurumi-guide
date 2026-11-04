# 駐車場の写真に写った車のナンバーを塗りつぶすスクリプト（2026-11-04 オーナー指示）
# 対象は images/common/ の parking-*.jpg（全体＋看板を並べた後の画像）と parking1.jpg。
# 箱の位置はその画像のピクセル座標（左, 上, 右, 下）。写真を並べ直したら、ここの位置も見直してから実行する。
# 箱の中を、まわりの平均色で塗り、ふちを少しぼかしてなじませる。
#   python tools/mask-plates.py
from pathlib import Path
from PIL import Image, ImageFilter, ImageStat

IMG = Path(__file__).resolve().parent.parent / 'images' / 'common'
BOXES = {
    'parking-shinko.jpg': [(230, 405, 255, 423), (382, 413, 410, 430), (539, 417, 567, 434), (681, 418, 707, 435)],
    'parking-times.jpg': [(146, 540, 190, 566), (630, 518, 663, 544)],
    'parking-toyooka17.jpg': [(594, 252, 636, 278)],
    'parking-paraca.jpg': [(33, 334, 49, 349), (246, 327, 263, 341), (281, 340, 295, 357)],
    'parking-livingpark.jpg': [(653, 349, 672, 364), (704, 354, 724, 371), (759, 369, 781, 387)],
    'parking1.jpg': [(808, 520, 846, 540)],
}

for name, boxes in BOXES.items():
    p = IMG / name
    im = Image.open(p).convert('RGB')
    for b in boxes:
        ring = im.crop((b[0] - 4, b[1] - 4, b[2] + 4, b[3] + 4))
        col = tuple(int(v) for v in ImageStat.Stat(ring).mean)
        patch = Image.new('RGB', (b[2] - b[0], b[3] - b[1]), col)
        im.paste(patch, b[:2])
        area = (b[0] - 3, b[1] - 3, b[2] + 3, b[3] + 3)
        im.paste(im.crop(area).filter(ImageFilter.GaussianBlur(2)), area[:2])
    im.save(p, quality=85, optimize=True)
    print(name, len(boxes), '箇所')
