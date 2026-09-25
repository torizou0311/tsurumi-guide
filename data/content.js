// 建物共通の文章の「構成」だけを書く場所です。
// 実際の文章（日本語・英語・中国語・韓国語）は js/i18n.js にまとめてあります。
// ここでは「どの順番で、どのセクションに、どの文章キーと写真を出すか」だけを決めます。
//
// blocks の各項目:
//   key: i18n.js の中の文章キー（セクションIDと結合して "section.key" として参照）
//   rooms: 指定した部屋番号のときだけ表示する（省略時は全部屋共通）
//   image: 共通写真は images/common/、部屋別写真は room.photos.xxx を使う
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
      { key: 'signNote', rooms: ['103'], image: true },
      { key: 'haneda', image: 'images/common/access-route-haneda.png' },
      { key: 'narita', image: 'images/common/access-route-narita.png' },
      { key: 'taxi' },
      { key: 'taxiStandKeikyu', image: true },
      { key: 'taxiStandJR', image: true },
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
      { key: 'steps', image: 'room:unlock1' },
      { key: 'stepsLock', image: 'room:unlock2' },
      { key: 'keybox', image: 'room:keybox' }
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
    blocks: [
      { key: 'ac', image: 'room:applianceAc' },
      { key: 'induction', image: 'room:applianceInduction' },
      { key: 'microwave', image: 'room:applianceMicrowave' },
      { key: 'microwaveWattage', rooms: ['103'] },
      { key: 'kettle', image: 'room:applianceKettle' },
      { key: 'coffee', image: 'room:applianceCoffee' },
      { key: 'riceCooker', rooms: ['202'], image: 'room:applianceRiceCooker' },
      { key: 'washer', image: 'room:applianceWasher' },
      { key: 'wire', image: 'room:applianceWire' },
      { key: 'circulator', image: 'room:applianceCirculator' },
      { key: 'iron', image: 'room:applianceIron' }
    ]
  },
  {
    id: 'garbage',
    icon: 'trash',
    inMenu: true,
    blocks: [
      { key: 'body', image: true }
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
      { key: 'keypad', image: 'room:keyboxTrouble' },
      { key: 'hotwater', image: 'room:hotwaterPanel' },
      { key: 'power', image: 'room:breaker' },
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
