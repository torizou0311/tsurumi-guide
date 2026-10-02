# 鶴見（YOKOHAMA Still Retreat）ハウスガイド — 作業引き継ぎ

ゲスト向けハウスガイド（静的サイト、HTML/CSS/素のJS、ビルド不要）。旧Canvaマニュアルの置き換え。
- 旧103: https://wakohouse.my.canva.site/103-tsurumi-top
- 旧202: https://wakohouse.my.canva.site/tsurumi-top
- 参考にした構成: https://ebisu-guide.sllstay.com/index.html（デザインは真似しない方針）

## 仕組み
- 4言語: en / ja / zh-Hant / ko（ヘッダーのドロップダウンで切替）
- 部屋: 103(1F) / 201(2F) / 202(2F)。URL `?room=103` で部屋が決まる。なしなら部屋選択画面
- 建物共通の文章は `js/i18n.js` に1か所だけ。部屋ごとの差分は `data/rooms.js`、セクション構成と写真の紐付けは `data/content.js`
- 写真は `images/common/`（全部屋共通。チェックイン/困ったときの写真 unlock1・unlock2・keybox・keybox-troubleshoot・hotwater-panel・breaker、共通家電の appliance-ac・appliance-induction、ゴミ置き場 garbage.jpg も1組だけここ）, `images/103/`, `images/202/`, `images/201/`（部屋別: Wi-Fi QR・家電）
- content.js の写真指定: 共通は `images/common/…` を直接書く／部屋別だけ `room:xxx`／特定部屋だけに出す項目は `rooms: [...]`
- ホームの「よく使う情報」は、メニュー一覧の一部を上に並べているだけ（2026-10-02変更）。出す項目は `data/content.js` 末尾の `QUICK_SECTIONS`（セクションidの配列、6個で2行×3列のタイル表示）。当面はオーナー指定の6個（access/checkin/wifi/garbage/trouble/emergency の順）。GA4のデータが溜まったら、よく見られているページに入れ替える方針
- 元原稿（Canvaから抽出した英文）: `docs/manual-source.md`
- 使い方の説明（オーナー向け）: `README.md`
- noindex と robots.txt で検索エンジン除外済み

## 確定したオーナー判断
- 羽田→京急鶴見は「約20分」
- 禁煙は「部屋と敷地内すべて禁煙」
- 共通/個別の区分: 翻訳ツール・アクセス・チェックイン・ゴミ・ルール・周辺のお店・駐車場・困ったとき・緊急は全部屋共通。部屋ごとに違うのは部屋番号・階・キーボックスがドアの左右どちらか（103と201は右、202は左。キーボックスは全部屋ともガスメーターのところに2つ）。Wi-Fiは部屋別。家電はエアコンとIHが全部屋共通（写真は images/common/）。それ以外は部屋別で、content.js の rooms で出す部屋を指定（現在 202 のみ。103・201は写真が無いので項目ごと非表示）
- デザイン（2026-09-25更新）: 白基調＋淡いクールグレーの面にチャコール文字。部屋ごとのテーマカラー（103=マスタード／201=セージグリーン／202=オリーブグリーン、`<html data-room="...">` で切替）。見出しは丸ゴシック（Zen Maru Gothic）、本文はNoto Sans JP（明朝体は使わない）。カードは角丸大きめ・ボタンはピル型で明るく親しみやすい雰囲気（参考サイトと別物にする）

## 未完了（2026-09-24時点）
- [ ] オーナーによる見本の確認・修正依頼待ち
- [x] 公開済み（2026-09-25）: GitHub Pages / publicリポジトリ https://github.com/torizou0311/tsurumi-guide → 独自ドメイン https://ysr-guide.neconote.net/ （2026-10-02設定。お名前.comのDNSに CNAME ysr-guide → torizou0311.github.io。リポジトリ直下の CNAME ファイルは消さないこと。旧URL https://torizou0311.github.io/tsurumi-guide/ は自動転送。main に push すると1〜2分で自動反映）
- [x] 201号室: キーボックスは右で確定・Wi-Fi登録済み（チェックイン/困ったときの写真は共通のものを使用）
- [ ] 201号室: エアコン・IH以外の家電（レンジ・ケトル・コーヒー・洗濯機・ワイヤー・サーキュレーター・アイロン）は写真が無く非表示中。写真が入ったら rooms.js に登録し content.js の rooms に '201' を追加
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
