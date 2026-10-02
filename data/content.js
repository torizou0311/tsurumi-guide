// 建物共通の文章の「構成」だけを書く場所です。
// 実際の文章（日本語・英語・中国語・韓国語）は js/i18n.js にまとめてあります。
// ここでは「どの順番で、どのセクションに、どの文章キーと写真を出すか」だけを決めます。
//
// blocks の各項目:
//   key: i18n.js の中の文章キー（セクションIDと結合して "section.key" として参照）
//   rooms: 指定した部屋番号のときだけ表示する（省略時は全部屋共通）
//   image: 写真の指定方法は次の2通りです
//     ・全部屋共通の写真 … 'images/common/ファイル名' のように、場所を直接書く
//     ・部屋ごとに違う写真 … 'room:xxx' と書く（写真の場所は data/rooms.js の photos に書く）
//   rooms: [...] を付けると、その部屋だけに出す項目になります（例: rooms: ['202']）
//
// 新しいセクションを足したいときは、この配列に1項目追加してください。

window.SECTIONS = [
  {
    id: 'translation',
    icon: 'translate',
    inMenu: true,
    blocks: [
      { key: 'intro', image: 'images/common/lens-translate.png' }
    ]
  },
  {
    id: 'access',
    icon: 'map',
    inMenu: true,
    blocks: [
      { key: 'mapIntro', showAddress: true, image: 'images/common/access-walking-map.png' },
      { key: 'haneda', image: 'images/common/access-route-haneda.png' },
      { key: 'narita', image: 'images/common/access-route-narita.png' },
      { key: 'taxi' },
      { key: 'taxiStandKeikyu' },
      { key: 'taxiStandJR' },
      { key: 'exterior', image: 'images/common/exterior.jpg' }
    ]
  },
  {
    id: 'checkin',
    icon: 'key',
    inMenu: true,
    blocks: [
      { key: 'intro' },
      { key: 'times' },
      { key: 'steps', image: 'images/common/unlock1.png' },
      { key: 'stepsLock', image: 'images/common/unlock2.png' },
      { key: 'keybox', image: 'images/common/keybox.jpg' }
    ]
  },
  {
    id: 'wifi',
    icon: 'wifi',
    inMenu: true,
    special: 'wifi'
  },
  {
    id: 'appliances',
    icon: 'appliance',
    inMenu: true,
    // エアコンとIHは全部屋共通。それ以外は rooms で出す部屋を指定（103・201は写真が揃うまで非表示）
    blocks: [
      { key: 'ac', image: 'images/common/appliance-ac.png' },
      { key: 'induction', image: 'images/common/appliance-induction.png' },
      { key: 'microwave', rooms: ['202'], image: 'room:applianceMicrowave' },
      // { key: 'microwaveWattage', rooms: ['103'] }, // 103のレンジのワット数説明。103でレンジの項目を出すときに戻す
      { key: 'kettle', rooms: ['202'], image: 'room:applianceKettle' },
      { key: 'coffee', rooms: ['202'], image: 'room:applianceCoffee' },
      { key: 'riceCooker', rooms: ['202'], image: 'room:applianceRiceCooker' },
      { key: 'washer', rooms: ['202'], image: 'room:applianceWasher' },
      { key: 'wire', rooms: ['202'], image: 'room:applianceWire' },
      { key: 'circulator', rooms: ['202'], image: 'room:applianceCirculator' },
      { key: 'iron', rooms: ['202'], image: 'room:applianceIron' }
    ]
  },
  {
    id: 'garbage',
    icon: 'trash',
    inMenu: true,
    blocks: [
      { key: 'body', image: 'images/common/garbage.jpg' }
    ]
  },
  {
    id: 'rules',
    icon: 'rules',
    inMenu: true,
    blocks: [
      { key: 'important' },
      { key: 'packages' },
      { key: 'prohibitedTitle', heading: true },
      { key: 'prohibitedList' }
    ]
  },
  {
    id: 'nearby',
    icon: 'store',
    inMenu: true,
    blocks: [
      { key: 'intro', image: 'images/common/store-map1.png' }
    ]
  },
  {
    id: 'parking',
    icon: 'parking',
    inMenu: true,
    blocks: [
      { key: 'intro', image: 'images/common/parking1.png' }
    ]
  },
  {
    id: 'trouble',
    icon: 'help',
    inMenu: true,
    blocks: [
      { key: 'keypad', image: 'images/common/keybox-troubleshoot.jpg' },
      { key: 'hotwater', image: 'images/common/hotwater-panel.png' },
      { key: 'power', image: 'images/common/breaker.png' },
      { key: 'lostFound' }
    ]
  },
  {
    id: 'emergency',
    icon: 'emergency',
    inMenu: true,
    blocks: [
      { key: 'numbers' },
      { key: 'addressToTell', showAddress: true },
      { key: 'evacuation' },
      { key: 'hostContact' }
    ]
  }
];

// ホーム画面の「よく使う情報」に出す項目（上の SECTIONS の id を並べるだけ）。
// 並べた順に、左上から右へ3つずつ表示されます。6個で「2行×3列」になります。
// 入れ替えたいときは、ここの id を書き換えてください（例: 'garbage' を 'nearby' に）。
// アクセス計測のデータが溜まったら、よく見られているページに入れ替える予定です。
window.QUICK_SECTIONS = ['access', 'checkin', 'wifi', 'garbage', 'trouble', 'emergency'];
