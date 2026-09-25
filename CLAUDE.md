# 鶴見（YOKOHAMA Still Retreat）ハウスガイド — 作業引き継ぎ

ゲスト向けハウスガイド（静的サイト、HTML/CSS/素のJS、ビルド不要）。旧Canvaマニュアルの置き換え。
- 旧103: https://wakohouse.my.canva.site/103-tsurumi-top
- 旧202: https://wakohouse.my.canva.site/tsurumi-top
- 参考にした構成: https://ebisu-guide.sllstay.com/index.html（デザインは真似しない方針）

## 仕組み
- 4言語: en / ja / zh-Hant / ko（ヘッダーのドロップダウンで切替）
- 部屋: 103(1F) / 201(2F) / 202(2F)。URL `?room=103` で部屋が決まる。なしなら部屋選択画面
- 建物共通の文章は `js/i18n.js` に1か所だけ。部屋ごとの差分は `data/rooms.js`、セクション構成と写真の紐付けは `data/content.js`
- 写真は `images/common/`, `images/103/`, `images/202/`, `images/201/`
- 元原稿（Canvaから抽出した英文）: `docs/manual-source.md`
- 使い方の説明（オーナー向け）: `README.md`
- noindex と robots.txt で検索エンジン除外済み

## 確定したオーナー判断
- 羽田→京急鶴見は「約20分」
- 禁煙は「部屋と敷地内すべて禁煙」
- デザイン（2026-09-25更新）: 白基調＋淡いクールグレーの面にチャコール文字。部屋ごとのテーマカラー（103=マスタード／201=セージグリーン／202=オリーブグリーン、`<html data-room="...">` で切替）。見出しは丸ゴシック（Zen Maru Gothic）、本文はNoto Sans JP（明朝体は使わない）。カードは角丸大きめ・ボタンはピル型で明るく親しみやすい雰囲気（参考サイトと別物にする）

## 未完了（2026-09-24時点）
- [ ] オーナーによる見本の確認・修正依頼待ち
- [ ] 公開方法の決定待ち: GitHub Pages で A=publicリポジトリ(無料・推奨) / B=private(GitHub Pro有料)。リポジトリ名案 `tsurumi-guide`。git init〜pushはオーナー承認後
- [ ] 201号室: Wi-Fi(SSID/PASS)・キーボックスの左右・写真・家電差分が未確定（rooms.jsで null、画面は「準備中」表示）
- [ ] 写真が無い箇所（「写真準備中」表示）: タクシー右折地点（赤丸）の地図、駅のタクシー乗り場、103の目印サイン、ゴミ置き場、202のスチームアイロン
- [ ] 公開後: 部屋ごとのURLをAirbnbのメッセージ/ハウスマニュアル欄に差し替え

## 動作確認の注意
- 確認で `python -m http.server` を起動した場合は、終わったら必ず止める（起動したままだとフォルダが移動・削除できなくなる）
