/*
 * アプリ本体。ハッシュルーティングの1ファイルSPAです。
 * 文章を直したいときは js/i18n.js、部屋の情報は data/rooms.js、
 * セクションの構成は data/content.js を見てください。
 * このファイル（app.js）は「表示の仕組み」だけを持っています。
 */
(function () {
  'use strict';

  var LANGS = ['en', 'ja', 'zh-Hant', 'ko'];
  var LANG_SHORT = { en: 'EN', ja: '日本語', 'zh-Hant': '中文', ko: '한국어' };
  var VALID_ROOMS = ['103', '201', '202'];

  var JP_ADDRESS_FULL = '神奈川県横浜市鶴見区寺谷1-7-40 レイズ寺谷';
  var JP_ADDRESS_SHORT = '横浜市鶴見区寺谷1-7-40';
  var MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(JP_ADDRESS_FULL);

  var state = {
    lang: 'en',
    roomId: null
  };

  // ---------- ローカルストレージ（失敗しても落ちないようtry/catchで囲む） ----------
  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignore */ }
  }

  // ---------- 初期言語の推定 ----------
  function detectLang() {
    var saved = safeGet('tg_lang');
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var nav = (window.navigator.language || window.navigator.userLanguage || 'en').toLowerCase();
    if (nav.indexOf('ja') === 0) return 'ja';
    if (nav.indexOf('ko') === 0) return 'ko';
    if (nav.indexOf('zh') === 0) return 'zh-Hant';
    return 'en';
  }

  // ---------- URLパラメータ ----------
  function getRoomFromUrl() {
    try {
      var params = new URLSearchParams(window.location.search);
      var r = params.get('room');
      if (r && VALID_ROOMS.indexOf(r) !== -1) return r;
    } catch (e) { /* ignore */ }
    return null;
  }

  function setRoomInUrl(roomId) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set('room', roomId);
      window.history.replaceState(null, '', url.toString());
    } catch (e) { /* ignore */ }
  }

  // ---------- アイコン（絵文字は使わず、シンプルな線画SVG） ----------
  var ICONS = {
    home: '<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h5v-5h2v5h5v-9"/>',
    map: '<path d="M9 4 4 6.5v13L9 17l6 2.5 5-2.5v-13L15 6.5 9 4Z"/><path d="M9 4v13M15 6.5v13"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12 19 4M16 7l2.5 2.5M14 9l2 2"/>',
    wifi: '<path d="M3.5 9.5a13 13 0 0 1 17 0"/><path d="M6.5 13a9 9 0 0 1 11 0"/><path d="M9.5 16.5a5 5 0 0 1 5 0"/><circle cx="12" cy="19.3" r="1"/>',
    appliance: '<rect x="4.5" y="3.5" width="15" height="17" rx="1.5"/><circle cx="12" cy="13" r="4.2"/><path d="M7 7h1.2M11 7h6"/>',
    trash: '<path d="M5 7h14M9.5 7V5.2h5V7M7 7l1 12.5h8L17 7"/><path d="M10.2 10.5v6M13.8 10.5v6"/>',
    rules: '<path d="M6.5 3.5h9L19 7v13.5h-13V3.5Z"/><path d="M15.5 3.5V7H19"/><path d="M9 11h6M9 14h6M9 17h3.5"/>',
    store: '<path d="M4.5 9.5 5.5 4.5h13l1 5"/><path d="M4.5 9.5v10h15v-10"/><path d="M4.5 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"/><path d="M10 19v-5h4v5"/>',
    parking: '<circle cx="12" cy="12" r="8.5"/><path d="M9.8 16V8h2.8a2.6 2.6 0 0 1 0 5.2H9.8"/>',
    help: '<circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.3a2.4 2.4 0 1 1 3.4 2.2c-.9.5-1.4 1-1.4 2"/><circle cx="12" cy="16.3" r="0.2" fill="currentColor"/>',
    emergency: '<path d="M12 3.5 4.5 6.7v5.6c0 4.8 3.2 7.7 7.5 9 4.3-1.3 7.5-4.2 7.5-9V6.7L12 3.5Z"/><path d="M12 8.3v4.4M12 15.3v.1"/>',
    copy: '<rect x="9" y="9" width="10.5" height="10.5" rx="1.5"/><path d="M6.5 15H5.5a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 5.5 3h9A1.5 1.5 0 0 1 16 4.5v1"/>',
    check: '<path d="M4.5 12.5 9.5 18 20 6"/>',
    change: '<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5M20 4v4.5h-4.5"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5M4 20v-4.5h4.5"/>',
    external: '<path d="M9 5.5h9.5V15"/><path d="M18.5 5.5 5.5 18.5"/><path d="M14 18.5H5.5V10"/>',
    pin: '<path d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.4"/>',
    translate: '<path d="M3 6h10"/><path d="M8 3.5V6"/><path d="M11 6c-.8 3.6-3.4 6.6-7.5 8.5"/><path d="M5.5 9.5c1.3 2.2 3.3 3.9 6 5"/><path d="m12.5 20.5 4.2-9.5 4.3 9.5"/><path d="M14 17.3h5.5"/>',
    globe: '<circle cx="12" cy="12" r="8.3"/><path d="M3.7 12h16.6"/><path d="M12 3.7c2.4 2.3 3.7 5.3 3.7 8.3s-1.3 6-3.7 8.3c-2.4-2.3-3.7-5.3-3.7-8.3S9.6 6 12 3.7Z"/>'
  };
  function icon(name, cls) {
    var body = ICONS[name] || '';
    return '<svg class="icon' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }

  // ---------- ユーティリティ ----------
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function t(lang) { return window.I18N[lang]; }

  function applyPlaceholders(str, room, lang) {
    if (!str) return '';
    var dict = t(lang);
    return str
      .replace(/\{room\}/g, esc(room.id))
      .replace(/\{floor\}/g, esc(String(room.floor)))
      .replace(/\{keyboxSide\}/g, room.keyboxSide ? esc(dict.common.side[room.keyboxSide]) : '');
  }

  function resolveImage(spec, room) {
    if (spec === true) return null; // 意図的に「未取得」を示す
    if (typeof spec !== 'string') return null;
    if (spec.indexOf('room:') === 0) {
      var key = spec.slice(5);
      return (room.photos && room.photos[key]) || null;
    }
    return spec;
  }

  function photoHtml(spec, room, lang, altText) {
    if (!spec) return '';
    var src = resolveImage(spec, room);
    // パスの中の {lang} は表示中の言語（en / ja / zh-Hant / ko）に置き換える（図の中に文字がある画像用）
    if (src) src = src.replace('{lang}', lang);
    if (src) {
      return '<div class="guide-photo"><img src="' + esc(src) + '" alt="' + esc(altText || '') + '" loading="lazy"></div>';
    }
    return '<div class="guide-photo guide-photo--pending"><span>' + esc(t(lang).common.photoPending) + '</span></div>';
  }

  // ---------- コピー可能な行 ----------
  var copyIdCounter = 0;
  function copyRow(label, value, lang) {
    copyIdCounter += 1;
    var id = 'copy-' + copyIdCounter;
    return '' +
      '<div class="copy-row">' +
        '<div class="copy-row__text">' +
          '<div class="copy-row__label">' + esc(label) + '</div>' +
          '<div class="copy-row__value" id="' + id + '-val">' + esc(value) + '</div>' +
        '</div>' +
        '<button type="button" class="copy-btn" data-copy-target="' + id + '-val" aria-label="' + esc(t(lang).common.copy) + '">' +
          icon('copy') +
        '</button>' +
      '</div>';
  }

  function addressBlock(lang, room, withRoomSuffix) {
    var d = t(lang);
    var jaLine = withRoomSuffix ? (JP_ADDRESS_SHORT + ' ' + room.id + '号室') : JP_ADDRESS_FULL;
    return '' +
      '<div class="address-block">' +
        '<div class="address-block__local">' + esc(d.common.addressLocal) + '</div>' +
        '<div class="address-block__ja-label">' + esc(d.common.addressJaLabel) + '</div>' +
        '<div class="copy-row">' +
          '<div class="copy-row__text">' +
            '<div class="copy-row__value address-block__ja" id="addr-ja-val">' + esc(jaLine) + '</div>' +
          '</div>' +
          '<button type="button" class="copy-btn" data-copy-target="addr-ja-val" aria-label="' + esc(d.common.copy) + '">' + icon('copy') + '</button>' +
        '</div>' +
        '<a class="btn btn--outline btn--block" href="' + MAPS_URL + '" target="_blank" rel="noopener">' +
          icon('pin') + '<span>' + esc(d.common.openMaps) + '</span>' + icon('external') +
        '</a>' +
      '</div>';
  }

  // ---------- ヘッダー ----------
  function renderHeader(room) {
    var d = t(state.lang);
    var langItems = LANGS.map(function (l) {
      var active = l === state.lang ? ' is-active' : '';
      return '<button type="button" class="lang-menu__item' + active + '" data-lang="' + l + '">' + esc(window.I18N[l].meta.name) + '</button>';
    }).join('');
    var langSwitch = '' +
      '<details class="lang-switch">' +
        '<summary class="lang-switch__btn">' + icon('globe') + '<span>' + esc(LANG_SHORT[state.lang]) + '</span></summary>' +
        '<div class="lang-menu" role="menu">' + langItems + '</div>' +
      '</details>';

    var roomTag = room
      ? '<button type="button" class="room-tag" data-action="change-room">' +
          '<span class="room-tag__num">' + esc(d.common.room) + ' ' + esc(room.id) + '</span>' +
          icon('change', 'room-tag__icon') +
          '<span class="room-tag__change">' + esc(d.common.changeRoom) + '</span>' +
        '</button>'
      : '';

    return '' +
      '<header class="site-header">' +
        '<div class="site-header__top">' +
          '<a class="brand" href="#/">' +
            '<img class="brand__mark" src="images/common/logo.png" alt="" width="40" height="40">' +
            '<span class="brand__name">' + esc(d.common.brand) + '</span>' +
          '</a>' +
          langSwitch +
        '</div>' +
        (roomTag ? '<div class="site-header__bottom">' + roomTag + '</div>' : '') +
      '</header>';
  }

  // ---------- ボトムナビ ----------
  function renderBottomNav(hash) {
    var d = t(state.lang);
    var items = [
      { id: '', route: '#/', icon: 'home', label: d.nav.home },
      { id: 'wifi', route: '#/wifi', icon: 'wifi', label: d.nav.wifi },
      { id: 'checkin', route: '#/checkin', icon: 'key', label: d.nav.checkout },
      { id: 'emergency', route: '#/emergency', icon: 'emergency', label: d.nav.emergency }
    ];
    var norm = hash === '' || hash === '#' ? '#/' : hash;
    var html = items.map(function (it) {
      var active = norm === it.route ? ' is-active' : '';
      return '<a class="bottom-nav__item' + active + '" href="' + it.route + '">' + icon(it.icon) + '<span>' + esc(it.label) + '</span></a>';
    }).join('');
    return '<nav class="bottom-nav" aria-label="Quick navigation">' + html + '</nav>';
  }

  // ---------- 部屋選択画面 ----------
  function renderRoomSelect() {
    var d = t(state.lang);
    var cards = window.ROOMS.map(function (r) {
      var photo = r.hero
        ? '<span class="room-card__photo"><img src="' + esc(r.hero) + '" alt="" loading="lazy"></span>'
        : '<span class="room-card__photo room-card__photo--pending"><span>' + esc(t(state.lang).common.photoPending) + '</span></span>';
      return '<button type="button" class="room-card" data-select-room="' + r.id + '">' +
        photo +
        '<span class="room-card__body">' +
          '<span class="room-card__num">' + esc(r.id) + '</span>' +
          '<span class="room-card__floor">' + esc(d.common.room) + ' ' + esc(r.id) + '</span>' +
        '</span>' +
      '</button>';
    }).join('');
    return '' +
      '<div class="page page--roomselect">' +
        '<div class="roomselect">' +
          '<h1>' + esc(d.roomselect.title) + '</h1>' +
          '<p class="roomselect__subtitle">' + esc(d.roomselect.subtitle) + '</p>' +
          '<div class="room-card-grid">' + cards + '</div>' +
        '</div>' +
      '</div>';
  }

  // メニューのラベル。長いときは「・」の後ろで改行し、単語の途中では切れないようにする
  function labelHtml(text) {
    var parts = String(text).split('・');
    if (parts.length < 2) return esc(text);
    return parts.map(function (p, i) {
      return '<span class="label-chunk">' + esc(p) + (i < parts.length - 1 ? '・' : '') + '</span>';
    }).join('');
  }

  // ---------- ホーム画面 ----------
  function renderHome(room) {
    var d = t(state.lang);
    // 「よく使う情報」は、メニュー一覧の中から data/content.js の QUICK_SECTIONS で
    // 指定したものを上に並べているだけです（中身はメニュー一覧と同じ項目）。
    var quickCards = (window.QUICK_SECTIONS || []).map(function (id) {
      var s = window.SECTIONS.filter(function (x) { return x.id === id; })[0];
      if (!s) return '';
      return '<a class="quick-card" href="#/' + s.id + '">' +
        '<span class="quick-card__icon">' + icon(s.icon) + '</span>' +
        '<span class="quick-card__label">' + labelHtml(d.menu[s.id]) + '</span>' +
      '</a>';
    }).join('');

    var menuItems = window.SECTIONS.filter(function (s) { return s.inMenu; }).map(function (s) {
      return '<a class="menu-item" href="#/' + s.id + '">' +
        '<span class="menu-item__icon">' + icon(s.icon) + '</span>' +
        '<span class="menu-item__label">' + labelHtml(d.menu[s.id]) + '</span>' +
      '</a>';
    }).join('');

    var heroPhoto = room.hero
      ? '<section class="hero hero--photo">' +
          '<div class="hero__media"><img src="' + esc(room.hero) + '" alt="' + esc(d.common.brand) + '" loading="lazy"></div>' +
          '<div class="hero__scrim"></div>' +
          '<div class="hero__caption">' +
            '<span class="hero__roomtag">' + esc(d.common.room) + ' ' + esc(room.id) + '</span>' +
            '<span class="hero__title">' + esc(d.common.brand) + '</span>' +
          '</div>' +
        '</section>'
      : '';

    return '' +
      '<div class="page page--home">' +
        heroPhoto +
        '<section class="hero hero--intro">' +
          '<h1><span class="h-dot"></span>' + esc(d.home.greeting) + '</h1>' +
          '<p>' + esc(d.home.subtitle) + '</p>' +
        '</section>' +
        '<section class="quick-section">' +
          '<h2>' + esc(d.home.quickTitle) + '</h2>' +
          '<div class="quick-grid">' + quickCards + '</div>' +
        '</section>' +
        '<section class="menu-section">' +
          '<h2>' + esc(d.home.menuTitle) + '</h2>' +
          '<div class="menu-grid">' + menuItems + '</div>' +
        '</section>' +
      '</div>';
  }

  // ---------- Wi-Fiセクション（部屋データに依存する特殊セクション） ----------
  function renderWifiSection(room) {
    var d = t(state.lang);
    var body;
    if (!room.wifi) {
      body = '<div class="notice">' + esc(d.common.pendingInfo) + '</div>';
    } else {
      var qrCombo = room.photos && room.photos.wifiQr;
      var qr5 = qrCombo ? null : (room.photos && room.photos.wifiQr5);
      var qr24 = qrCombo ? null : (room.photos && room.photos.wifiQr24);
      body = '' +
        '<p class="section-lead">' + esc(d.wifi.scanOrType) + '</p>' +
        (qrCombo ? '<div class="guide-photo guide-photo--qr"><img src="' + esc(qrCombo) + '" alt="Wi-Fi QR" loading="lazy"></div>' : '') +
        '<div class="wifi-card">' +
          '<div class="wifi-card__title">5GHz</div>' +
          (qr5 ? '<div class="guide-photo guide-photo--qr"><img src="' + esc(qr5) + '" alt="Wi-Fi QR 5GHz" loading="lazy"></div>' : '<div class="guide-photo guide-photo--pending guide-photo--qr"><span>' + esc(d.common.photoPending) + '</span></div>') +
          copyRow(d.common.ssid5, room.wifi.ssid5, state.lang) +
          copyRow(d.common.password, room.wifi.pass, state.lang) +
        '</div>' +
        '<div class="wifi-card">' +
          '<div class="wifi-card__title">2.4GHz</div>' +
          (qr24 ? '<div class="guide-photo guide-photo--qr"><img src="' + esc(qr24) + '" alt="Wi-Fi QR 2.4GHz" loading="lazy"></div>' : '<div class="guide-photo guide-photo--pending guide-photo--qr"><span>' + esc(d.common.photoPending) + '</span></div>') +
          copyRow(d.common.ssid24, room.wifi.ssid24, state.lang) +
          copyRow(d.common.password, room.wifi.pass, state.lang) +
        '</div>';
    }
    return '' +
      '<div class="page page--section">' +
        sectionHeader(d.menu.wifi, icon('wifi')) +
        '<div class="section-body">' + body + '</div>' +
      '</div>';
  }

  function sectionHeader(title, iconHtml) {
    var d = t(state.lang);
    return '' +
      '<div class="section-header">' +
        '<a class="back-link" href="#/">' + icon('home') + '<span>' + esc(d.common.backHome) + '</span></a>' +
        '<h1>' + iconHtml + '<span class="h-dot"></span><span>' + esc(title) + '</span></h1>' +
      '</div>';
  }

  // ---------- 通常セクション（data/content.js のブロック定義から組み立て） ----------
  function renderSection(section, room) {
    var d = t(state.lang);
    var lang = state.lang;
    var dict = d[section.id] || {};

    var blocksHtml = section.blocks.map(function (block) {
      if (block.rooms && block.rooms.indexOf(room.id) === -1) return '';

      // checkin.keybox / trouble.keypad は「部屋のキーボックス情報が未確定」の場合、
      // 通常文の代わりに「準備中」メッセージを出す
      if (section.id === 'checkin' && block.key === 'keybox' && !room.keyboxSide) {
        return '<div class="block"><div class="notice">' + esc(d.common.pendingInfo) + '</div></div>';
      }

      var raw = dict[block.key] || '';
      var text = applyPlaceholders(raw, room, lang);
      var photo = photoHtml(block.image, room, lang, d.menu[section.id]);
      // narrow: true の項目は、縦長の図が大きくなりすぎないよう小さめに出す
      if (block.narrow) photo = photo.replace('class="guide-photo', 'class="guide-photo guide-photo--narrow');
      // medium: true の項目は、小さめの図が画面いっぱいに引き伸ばされてぼやけないよう中くらいで出す
      if (block.medium) photo = photo.replace('class="guide-photo', 'class="guide-photo guide-photo--medium');

      if (block.heading) {
        return '<div class="block"><h3 class="block-heading"><span class="h-dot"></span>' + esc(text) + '</h3></div>';
      }
      if (block.showAddress) {
        return '<div class="block">' +
          '<div class="block-text">' + text + '</div>' +
          addressBlock(lang, room, section.id === 'emergency') +
          photo +
        '</div>';
      }
      return '<div class="block"><div class="block-text">' + text + '</div>' + photo + '</div>';
    }).join('');

    return '' +
      '<div class="page page--section">' +
        sectionHeader(d.menu[section.id], icon(section.icon)) +
        '<div class="section-body">' + blocksHtml + '</div>' +
      '</div>';
  }

  // ---------- ルーター ----------
  function currentHash() {
    var h = window.location.hash;
    return h === '' ? '#/' : h;
  }

  function render() {
    var app = document.getElementById('app');
    var room = state.roomId ? window.getRoom(state.roomId) : null;
    document.documentElement.setAttribute('lang', state.lang);
    if (room) {
      document.documentElement.setAttribute('data-room', room.id);
    } else {
      document.documentElement.removeAttribute('data-room');
    }

    if (!room) {
      app.innerHTML = renderHeader(null) + renderRoomSelect();
      bindGlobalEvents();
      window.scrollTo(0, 0);
      trackPage(null, 'roomselect');
      return;
    }

    var hash = currentHash();
    var body;
    var pageId = 'home';
    if (hash === '#/' || hash === '#/home') {
      body = renderHome(room);
    } else if (hash === '#/wifi') {
      body = renderWifiSection(room);
      pageId = 'wifi';
    } else if (hash === '#/roomselect') {
      body = renderRoomSelect();
      pageId = 'roomselect';
    } else {
      var sectionId = hash.replace('#/', '');
      var section = window.SECTIONS.filter(function (s) { return s.id === sectionId; })[0];
      body = section ? renderSection(section, room) : renderHome(room);
      if (section) pageId = section.id;
    }

    app.innerHTML = renderHeader(room) + '<main class="main">' + body + '</main>' + renderBottomNav(hash);
    bindGlobalEvents();
    window.scrollTo(0, 0);
    trackPage(room.id, pageId);
  }

  // アクセス計測（js/analytics.js）。計測が無効・読み込み失敗でも表示には影響させない
  function trackPage(roomId, pageId) {
    try {
      if (window.trackPage) window.trackPage(state.lang, roomId, pageId);
    } catch (e) { /* ignore */ }
  }

  // ---------- イベント ----------
  function bindGlobalEvents() {
    var app = document.getElementById('app');

    var langBtns = app.querySelectorAll('[data-lang]');
    for (var i = 0; i < langBtns.length; i++) {
      langBtns[i].addEventListener('click', function (e) {
        var lang = e.currentTarget.getAttribute('data-lang');
        state.lang = lang;
        safeSet('tg_lang', lang);
        render();
      });
    }

    var changeRoomBtn = app.querySelector('[data-action="change-room"]');
    if (changeRoomBtn) {
      changeRoomBtn.addEventListener('click', function () {
        window.location.hash = '#/roomselect';
        render();
      });
    }

    var roomCards = app.querySelectorAll('[data-select-room]');
    for (var j = 0; j < roomCards.length; j++) {
      roomCards[j].addEventListener('click', function (e) {
        var roomId = e.currentTarget.getAttribute('data-select-room');
        state.roomId = roomId;
        setRoomInUrl(roomId);
        window.location.hash = '#/';
        render();
      });
    }

    var copyBtns = app.querySelectorAll('[data-copy-target]');
    for (var k = 0; k < copyBtns.length; k++) {
      copyBtns[k].addEventListener('click', function (e) {
        var btn = e.currentTarget;
        var targetId = btn.getAttribute('data-copy-target');
        var el = document.getElementById(targetId);
        if (!el) return;
        doCopy(el.textContent, btn);
      });
    }
  }

  function doCopy(text, btn) {
    function onSuccess() {
      btn.classList.add('is-copied');
      var original = btn.innerHTML;
      btn.innerHTML = icon('check');
      window.setTimeout(function () {
        btn.innerHTML = original;
        btn.classList.remove('is-copied');
      }, 1400);
    }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(onSuccess, function () { fallbackCopy(text, onSuccess); });
      } else {
        fallbackCopy(text, onSuccess);
      }
    } catch (e) {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, cb) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      if (cb) cb();
    } catch (e) { /* ignore */ }
  }

  // ---------- 起動 ----------
  function init() {
    state.lang = detectLang();
    var urlRoom = getRoomFromUrl();
    if (urlRoom) {
      state.roomId = urlRoom;
      safeSet('tg_room', urlRoom);
    } else {
      state.roomId = null;
    }
    window.addEventListener('hashchange', render);
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
