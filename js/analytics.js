/*
 * アクセス計測（Googleアナリティクス GA4）。
 * 「どの言語で・どのページが・どの部屋で見られたか」を数えるためのファイルです。
 *
 * このガイドは画面を切り替えてもURLがほとんど変わらないため、
 * 画面が切り替わるたびに「/言語/ページ名?room=部屋番号」という仮のページ名をGA4に送ります。
 *   例: /ja/wifi?room=103 、 /en/checkin?room=202
 *
 * ページの中の項目（目次・見出しのリンクやQRコードで開いた項目）は、
 * 「/言語/ページ名/項目名?room=部屋番号」として、ページと同じように数えます。
 *   例: /ja/appliances/washer?room=201 （目次から洗濯機を開いた）
 * GA4の「レポート > エンゲージメント > ページとスクリーン」で、ページと並んで項目ごとの回数が見られます。
 *
 * さらに、目次を使わずスクロールして読んだ人も含めて「どの項目が読まれたか」を数えるため、
 * 項目が画面のまん中に3秒以上表示されたら item_view というイベントを送ります
 * （GA4の「レポート > エンゲージメント > イベント」の item_view。項目ごとに見るには、
 *   管理 > カスタム定義 で guide_item をイベントスコープのカスタムディメンションとして登録しておく）。
 *
 * 自分のアクセスを数えたくないとき:
 *   そのスマホ・パソコンで一度だけ URL の最後に ?notrack=1 を付けて開いてください
 *   （例: index.html?room=103&notrack=1）。以後その端末からは計測されません。
 *   元に戻すときは ?notrack=0 を付けて開きます。
 */
(function () {
  'use strict';

  // GA4の測定ID（G- で始まる文字列）。空のままなら計測は一切行いません。
  var GA_MEASUREMENT_ID = 'G-J7SJNN0LLN';

  var lastPath = null;

  function optedOut() {
    try {
      var p = new URLSearchParams(window.location.search).get('notrack');
      if (p === '1') window.localStorage.setItem('tg_notrack', '1');
      if (p === '0') window.localStorage.removeItem('tg_notrack');
      return window.localStorage.getItem('tg_notrack') === '1';
    } catch (e) {
      return false;
    }
  }

  var enabled = !!GA_MEASUREMENT_ID && !optedOut();

  if (enabled) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // 自動のページビューは止め、下の trackPage から自分で送る
    window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
  }

  // 画面が切り替わるたび・目次などで項目に移動するたびに app.js から呼ばれます（itemId は項目名。無いときは null）
  window.trackPage = function (lang, roomId, pageId, itemId) {
    if (!enabled) return;
    var page = pageId + (itemId ? '/' + itemId : '');
    var path = '/' + lang + '/' + page + (roomId ? '?room=' + roomId : '');
    if (path === lastPath) return; // 同じ画面の描き直しは数えない
    lastPath = path;
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + path,
      page_title: page + ' [' + lang + ']',
      guide_lang: lang,
      guide_page: pageId,
      guide_item: itemId ? page : '(none)',
      room: roomId || '(none)'
    });
  };

  // 項目が画面のまん中に3秒以上表示されたときに app.js から呼ばれます（1回の表示につき項目ごとに1度）
  window.trackItemView = function (lang, roomId, pageId, itemId) {
    if (!enabled) return;
    window.gtag('event', 'item_view', {
      guide_lang: lang,
      guide_page: pageId,
      guide_item: pageId + '/' + itemId,
      room: roomId || '(none)'
    });
  };
})();
