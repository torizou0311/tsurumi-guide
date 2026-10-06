# 鶴見（YOKOHAMA Still Retreat）ハウスガイド — 作業引き継ぎ

ゲスト向けハウスガイド（静的サイト、HTML/CSS/素のJS、ビルド不要）。旧Canvaマニュアルの置き換え。
- 旧103: https://wakohouse.my.canva.site/103-tsurumi-top
- 旧202: https://wakohouse.my.canva.site/tsurumi-top
- 参考にした構成: https://ebisu-guide.sllstay.com/index.html（デザインは真似しない方針）

## 仕組み
- 4言語: en / ja / zh-Hant / ko（ヘッダーのドロップダウンで切替）
- 部屋: 103(1F) / 201(2F) / 202(2F)。URL `?room=103` で部屋が決まる。なしなら部屋選択画面
- 建物共通の文章は `js/i18n.js` に1か所だけ。部屋ごとの差分は `data/rooms.js`、セクション構成と写真の紐付けは `data/content.js`
- 写真は `images/common/`（全部屋共通。チェックイン/困ったときの写真 unlock1・unlock2・keybox・keybox-troubleshoot・hotwater-panel・breaker、共通家電の appliance-ac-{lang}・appliance-induction-{lang}（どちらも言語別）、ゴミ置き場 garbage.jpg も1組だけここ）, `images/103/`, `images/202/`, `images/201/`（部屋別: Wi-Fi QR・家電）
- content.js の写真指定: 共通は `images/common/…` を直接書く／部屋別だけ `room:xxx`／特定部屋だけに出す項目は `rooms: [...]`
- ホームの「よく使う情報」は、メニュー一覧の一部を上に並べているだけ（2026-10-02変更）。出す項目は `data/content.js` 末尾の `QUICK_SECTIONS`（セクションidの配列、6個で2行×3列のタイル表示）。当面はオーナー指定の6個（access/checkin/wifi/garbage/trouble/emergency の順）。GA4のデータが溜まったら、よく見られているページに入れ替える方針
- 家電ごとの見出しとQR用リンク（2026-10-06追加）: `data/content.js` の家電の項目に `anchor: '名前'` を付けると、家電名の見出し（文字は `js/i18n.js` の `appliances.titles`）が出て、`…/index.html?room=201#/appliances/名前` でその家電の位置を直接開ける。家電のそばに貼るQRはこのURLで作る（部屋番号 `?room=` も必ず入れる）。**anchor の名前は貼ったQRが使えなくなるので変えない**。現在の名前: ac / induction / microwave / kettle / coffee / ricecooker / washer / wire / circulator / iron / dolcegusto
- エアコンのリモコンの図（2026-10-06作り直し）: `images/common/appliance-ac-{lang}.png`（ja はリモコンの図だけ、en / zh-Hant / ko は各ボタンの訳付き）。元の図 `images/common/ac-remote-base.png` は、三菱電機公式の取扱説明書（MSZ-GVxx3、https://dl.mitsubishielectric.co.jp/dl/ldg/wink/ssl/wink_doc/m_contents/k_ibim/MSZ-GVxx3_H01.pdf の6ページ）のリモコン図から説明用の線を消したもの。訳の文言や配置を直すときは `tools/make-ac-remote.py` の LABELS を書き換えて `python tools/make-ac-remote.py` を実行する（Windowsのフォントを使う）。現物のリモコンは RH151 系と推定（裏のシールでは未確認）。図は「入/切」、現物は「切/入」と表記の順が違うが、ボタンの配置は同じ。「電流切換」「リセット」はゲストが触る必要がないので訳を付けていない。以前の図（オーナーが写真に英語を入れたもの、appliance-ac.png）は削除済み（git の履歴には残っている）
- IHクッキングヒーターの図（2026-10-06作り直し）: 機種は三化工業 SIH-B113B（オーナー申告）。`images/common/appliance-induction-{lang}.png`（ja は操作パネルの図だけ、en / zh-Hant / ko は訳付き。①電源 ②加熱 ③火力 の番号は押す順番）。元の図 `images/common/ih-panel-base.png` は、メーカー作成の取扱説明書（資料番号 I-0397-06、https://biz.housetec.co.jp/ で配布されている SIH-B113B_B213B 取説の6ページ）の操作部の図から説明用の線を消し、左のロゴ・型番を切り落とし、ボタンの枠に実物と同じ色を付けたもの。訳を直すときは `tools/make-ih-panel.py` の LABELS を書き換えて実行。本文（使い方・使える鍋・注意）は i18n.js の `appliances.inductionSteps`、内容は同じ取扱説明書に基づく（火力5段階、電源2秒長押し、鍋の底径約12〜24cm、土鍋・ガラス・アルミ・銅は不可）。揚げ物モードの手順は載せていない（ボタンの訳だけ）。以前の図（オーナーが写真に英語を入れたもの、appliance-induction.png）は削除済み（git の履歴には残っている）
- ドラム式洗濯乾燥機の図と使い方（2026-10-06追加）: 機種はシャープ ES-S7G（オーナー申告）。**201 と 202 に表示**（content.js の rooms。202 は以前の写真の操作パネルが同じ並びだったため同機種と判断。**103 の機種は未確認で非表示のまま**）。図は `images/common/appliance-washer-main-{lang}.png`（電源・コース・運転切換・スタート・ロック解除。①〜④は押す順番）と `appliance-washer-sub-{lang}.png`（予約・洗い〜乾かす・∨∧・表示部）、`appliance-washer-detergent.png`（洗剤ケースを引き出す絵）。元の図 `washer-main-base.png`・`washer-sub-base.png` は、シャープ公式の取扱説明書（https://jp.sharp/support/washer/doc/ess7g_mn.pdf の4〜5ページ）の操作パネルの図から、ボタンと文字の部分だけを取り出して並べたもの（説明書の点線や枠は取り込んでいない。左右のグループの間隔は実物と違う）。訳を直すときは `tools/make-washer-panel.py` の LABELS を書き換えて実行。本文は i18n.js の `appliances.washer` / `washerSteps` / `washerDetergent` / `washerAdjust` / `washerNotes`、内容は同じ取扱説明書に基づく。載せていないもの: 所要時間の数字（説明書の表の読み取りが不確かなため）、乾燥フィルター・糸くずフィルターの掃除、エラー表示、乾燥できない衣類の一覧。202 の以前の写真（英語入り、images/202/appliance-washer.png と rooms.js の applianceWasher）は使わなくなったが、ファイルと登録は残してある
- 元原稿（Canvaから抽出した英文）: `docs/manual-source.md`
- 使い方の説明（オーナー向け）: `README.md`
- noindex と robots.txt で検索エンジン除外済み

## 確定したオーナー判断
- 羽田→京急鶴見は「約20分」
- 禁煙は「部屋と敷地内すべて禁煙」
- 共通/個別の区分: 翻訳ツール・アクセス・チェックイン・ゴミ・ルール・周辺のお店・駐車場・困ったとき・緊急は全部屋共通。部屋ごとに違うのは部屋番号・階・キーボックスがドアの左右どちらか（103と201は右、202は左。キーボックスは全部屋ともガスメーターのところに2つ）。Wi-Fiは部屋別。家電はエアコンとIHが全部屋共通（写真は images/common/）。それ以外は部屋別で、content.js の rooms で出す部屋を指定（現在 202 のみ。103・201は写真が無いので項目ごと非表示）
- デザイン（2026-09-25更新）: 白基調＋淡いクールグレーの面にチャコール文字。部屋ごとのテーマカラー（103=マスタード／201=セージグリーン／202=オリーブグリーン、`<html data-room="...">` で切替）。見出しは丸ゴシック（Zen Maru Gothic）、本文はNoto Sans JP（明朝体は使わない）。カードは角丸大きめ・ボタンはピル型で明るく親しみやすい雰囲気（参考サイトと別物にする）

## コインパーキングの記載（2026-10-02 確認）
- 住所にGoogleマップのリンクあり（i18n.js の parking.intro、4言語）。「タイムズ鶴見寺谷」は「第3」と検索結果が紛れるため query_place_id を付けている
- 料金の出典: タイムズ2か所は公式（times-info.net）で確認。シンコウパーク鶴見寺谷は NAVITIME・特P の掲載（昼間最大900円）。タイムパーキング鶴見はネット上に料金の掲載が見つからず**未確認**（旧マニュアルの記載のまま。運営の電話 0120-123-638）。タイムズ第3の「最大駐車48h」も公式ページには記載なし（旧マニュアル由来）
- 料金は変わるので、定期的に（半年に1回程度）見直すとよい

## 未完了（2026-09-24時点）
- [ ] オーナーによる見本の確認・修正依頼待ち
- [x] 公開済み（2026-09-25）: GitHub Pages / publicリポジトリ https://github.com/torizou0311/tsurumi-guide → 独自ドメイン https://ysr-guide.neconote.net/ （2026-10-02設定。お名前.comのDNSに CNAME ysr-guide → torizou0311.github.io。リポジトリ直下の CNAME ファイルは消さないこと。旧URL https://torizou0311.github.io/tsurumi-guide/ は自動転送。main に push すると1〜2分で自動反映）
- [x] 201号室: キーボックスは右で確定・Wi-Fi登録済み（チェックイン/困ったときの写真は共通のものを使用）
- [ ] 201号室: エアコン・IH以外の家電（レンジ・ケトル・コーヒー・洗濯機・ワイヤー・サーキュレーター・アイロン）は写真が無く非表示中。写真が入ったら rooms.js に登録し content.js の rooms に '201' を追加
- [x] 201号室: カプセル式コーヒーメーカー（ネスカフェ ドルチェ グスト ジェニオ2）の使い方を追加（2026-10-06）。図は公式の取扱説明書PDF（https://shop.nestle.jp/contents/pdf/brand/ndg/product/pdf/genio2.pdf 、型番MD9771、2018年3月版）の図から、イラスト部分だけを切り出した `images/201/dolcegusto-fig-*.png`（2026-10-06 オーナー指示: 図の中の日本語は外国語ゲストにわかりにくいので、文字を含めず絵だけにし、4言語の本文と併せて読む形にする）。ただし電源の図の「約30秒」と目盛りの図の「カプセルの目盛り表示」だけは、オーナー指示で図の中に4言語で入れてある（`dolcegusto-fig-power-{lang}.png`・`dolcegusto-fig-level-{lang}.png`。rooms.js の画像パスに `{lang}` と書くと表示中の言語に置き換わる仕組みを app.js に追加）。ラテ・カプチーノなどカプセルを2個使う飲み物は用意しないので、その説明は載せない。水は「MAXの線を超えない」と書く（「MAXまで入れる」ではない）。`dolcegusto-parts.png`・`dolcegusto-capsule.png` は保存のみで未使用。実機の色・カプセルの置き場所・使用済みカプセルの捨て場所は未確認のため本文に書いていない
- [ ] 103号室: 上記と同じ家電7点も写真が無く非表示中（レンジのワット数説明 microwaveWattage も content.js でコメントアウト中。レンジを出すときに戻す）
- [ ] 写真が無い箇所（「写真準備中」表示）: タクシー右折地点（赤丸）の地図、202のスチームアイロン（駅のタクシー乗り場2か所は写真の入手に時間がかかるため、写真枠を一旦外して文章のみ表示。入手できたら content.js の該当ブロックに image を戻す）
- [ ] 公開後: 部屋ごとのURLをAirbnbのメッセージ/ハウスマニュアル欄に差し替え（新URL: https://ysr-guide.neconote.net/index.html?room=103 / 201 / 202）
- [ ] アクセス計測（GA4）: オーナーのGA4登録待ち（2026-10-02 中断。時間が取れるときに再開）
  - 目的: 「どの言語で・どのページが・どの部屋で」見られているかを知る
  - 実装済み・公開済み（2026-10-02。ただし測定IDが空なので計測は止まっている）: `js/analytics.js`（新規）、`js/app.js`（render の最後で trackPage を呼ぶ）、`index.html`（script タグ追加）
  - 仕組み: 画面切替ごとに page_view を手動送信。page_location を仮のパス `/言語/ページ?room=部屋`（例 `/ja/wifi?room=103`）にして、GA4標準の「ページとスクリーン」で言語×ページが見えるようにしている。追加パラメータ guide_lang / guide_page / room も送信（カスタムディメンションは未登録）
  - 自分のアクセス除外: その端末で一度 `?notrack=1` を付けて開く（解除は `?notrack=0`）
  - 再開手順: ①オーナーが https://analytics.google.com/ でプロパティ作成（ウェブ、URL `ysr-guide.neconote.net`。利用規約の同意は本人操作）→ ②測定ID（G-…）を `js/analytics.js` の `GA_MEASUREMENT_ID` に入れる → ③GA4のデータストリーム「拡張計測機能 > ページビュー数 > ブラウザの履歴イベントに基づくページの変更」をオフ（二重計測防止）→ ④公開し、GA4のリアルタイムで言語・ページ・部屋が届くか確認
  - 未対応の論点: GA4はCookieを使うため、欧州からのゲスト向けには本来同意バナーが必要（オーナーには説明済み。バナーは未実装）

## 動作確認の注意
- 確認で `python -m http.server` を起動した場合は、終わったら必ず止める（起動したままだとフォルダが移動・削除できなくなる）
