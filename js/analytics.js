/*
 * アクセス計測（Googleアナリティクス GA4）。
 * 「どの言語で・どのページが・どの部屋で見られたか」を数えるためのファイルです。
 *
 * このガイドは画面を切り替えてもURLがほとんど変わらないため、
 * 画面が切り替わるたびに「/言語/ページ名?room=部屋番号」という仮のページ名をGA4に送ります。
 *   例: /ja/wifi?room=103 、 /en/checkin?room=202
 *
 * 自分のアクセスを数えたくないとき:
 *   そのスマホ・パソコンで一度だけ URL の最後に ?notrack=1 を付けて開いてください
 *   （例: index.html?room=103&notrack=1）。以後その端末からは計測されません。
 *   元に戻すときは ?notrack=0 を付けて開きます。
 */
(function () {
  'use strict';

  // GA4の測定ID（G- で始まる文字列）。空のままなら計測は一切行いません。
  var GA_MEASUREMENT_ID = '';

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

  // 画面が切り替わるたびに app.js から呼ばれます
  window.trackPage = function (lang, roomId, pageId) {
    if (!enabled) return;
    var path = '/' + lang + '/' + pageId + (roomId ? '?room=' + roomId : '');
    if (path === lastPath) return; // 同じ画面の描き直しは数えない
    lastPath = path;
    window.gtag('event', 'page_view', {
      page_location: window.location.origin + path,
      page_title: pageId + ' [' + lang + ']',
      guide_lang: lang,
      guide_page: pageId,
      room: roomId || '(none)'
    });
  };
})();
