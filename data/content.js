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
    // anchor を付けた項目には、家電名の見出しが付きます（見出しの文字は js/i18n.js の appliances.titles）。
    // 見出しはページ内リンクになっていて、URL の最後に「/anchorの名前」を付けると、その家電の位置を直接開けます。
    //   例: https://ysr-guide.neconote.net/index.html?room=201#/appliances/dolcegusto
    // 家電のそばに貼るQRコードはこのURLで作ります。anchor の名前を変えるとQRが使えなくなるので、変えないでください。
    // エアコンとIHは全部屋共通。それ以外は rooms で出す部屋を指定（103・201は写真が揃うまで非表示）
    blocks: [
      { key: 'ac', anchor: 'ac', image: 'images/common/appliance-ac-{lang}.png' }, // {lang} は表示中の言語に置き換わる（図は tools/make-ac-remote.py で作る）
      { key: 'induction', anchor: 'induction', image: 'images/common/appliance-induction-{lang}.png' }, // 図は tools/make-ih-panel.py で作る
      { key: 'inductionSteps' },
      // 電子レンジは部屋で機種が違う（202＝アイリスオーヤマ IMB-T178、103・201＝ニトリ BK2G02）。
      // 図は data/rooms.js の applianceMicrowave、使い方の文章は機種ごとに出し分ける
      { key: 'microwave', anchor: 'microwave', image: 'room:applianceMicrowave' },
      { key: 'microwaveIris', rooms: ['202'] },
      { key: 'microwaveNitori', rooms: ['103', '201'] },
      { key: 'microwaveCaution' },
      // 電気ケトルは部屋で機種が違う（103・202＝ニトリ AB2G01、201＝アイリスオーヤマ IKE-C601T）。
      // 図は data/rooms.js の applianceKettle、使い方の文章は機種ごとに出し分ける
      { key: 'kettle', anchor: 'kettle', image: 'room:applianceKettle' },
      { key: 'kettleNitori', rooms: ['103', '202'] },
      { key: 'kettleIris', rooms: ['201'], image: 'images/201/appliance-kettle-level.png', medium: true },
      { key: 'coffee', anchor: 'coffee', rooms: ['202'], image: 'room:applianceCoffee' },
      { key: 'riceCooker', anchor: 'ricecooker', rooms: ['202'], image: 'room:applianceRiceCooker' },
      // ドラム式洗濯乾燥機。全部屋共通（103・201はシャープ ES-S7G、202は ES-S7F。操作パネルと使い方は同じ）。図は tools/make-washer-panel.py で作る
      { key: 'washer', anchor: 'washer', image: 'images/common/appliance-washer-main-{lang}.png' },
      { key: 'washerSteps' },
      { key: 'washerDetergent', image: 'images/common/appliance-washer-detergent.png', narrow: true },
      { key: 'washerAdjust', image: 'images/common/appliance-washer-sub-{lang}.png' },
      { key: 'washerNotes' },
      // 室内物干しワイヤー（Remarks Japan）。全部屋共通。図は tools/make-wire-figure.py で作る（番号だけなので全言語で同じ図）
      { key: 'wire', anchor: 'wire', image: 'images/common/appliance-wire.png' },
      { key: 'wireSteps' },
      // サーキュレーター（アイリスオーヤマ PCF-SCC15T）。全部屋共通。図は tools/make-circulator-panel.py で作る
      { key: 'circulator', anchor: 'circulator', image: 'images/common/appliance-circulator-{lang}.png' },
      { key: 'circulatorSteps' },
      { key: 'iron', anchor: 'iron', rooms: ['202'], image: 'room:applianceIron' },
      // 201のカプセル式コーヒーメーカー（ネスカフェ ドルチェ グスト ジェニオ2）。図は公式の取扱説明書からイラスト部分だけを切り出したもの（電源と目盛りの図だけ、図の中の文字を4言語で入れてある）。
      // narrow: true は図を小さめに、medium: true は中くらいに出す指定（小さい図が引き伸ばされてぼやけるのを防ぐ）
      { key: 'dolceIntro', anchor: 'dolcegusto', rooms: ['201'], image: 'room:dolceMachine', narrow: true },
      { key: 'dolceWater', rooms: ['201'], image: 'room:dolceWater', medium: true },
      { key: 'dolcePower', rooms: ['201'], image: 'room:dolcePower', medium: true },
      { key: 'dolceCup', rooms: ['201'] },
      { key: 'dolceLevel', rooms: ['201'], image: 'room:dolceLevel', medium: true },
      { key: 'dolceCapsule', rooms: ['201'], image: 'room:dolceCapsule', medium: true },
      { key: 'dolceBrew', rooms: ['201'], image: 'room:dolceBrew', narrow: true },
      { key: 'dolceFinish', rooms: ['201'], image: 'room:dolceFinish', narrow: true }
    ]
  },
  {
    // 201号室だけのプロジェクター（JMGO PicoPlay+）。rooms: ['201'] を付けたセクションは、その部屋のメニュー・URLだけに出る
    // anchor（見出しの名前）は、QRなどで直接開けるように決めてあります。変えないでください。
    //   例: https://ysr-guide.neconote.net/index.html?room=201#/projector/cast
    // 図は tools/make-projector-remote.py と tools/make-projector-ports.py で作る（data/rooms.js の photos に登録）
    id: 'projector',
    icon: 'projector',
    inMenu: true,
    rooms: ['201'],
    blocks: [
      { key: 'intro' },
      { key: 'basics', anchor: 'basics', image: 'room:projectorRemote' },
      { key: 'basicsSteps' },
      { key: 'youtube', anchor: 'youtube' },
      { key: 'streaming', anchor: 'streaming' },
      { key: 'cast', anchor: 'cast' },
      { key: 'hdmi', anchor: 'hdmi', image: 'room:projectorPorts' },
      { key: 'logout', anchor: 'logout' },
      { key: 'trouble', anchor: 'trouble' }
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
