// 部屋ごとのデータ
// 新しい部屋を追加するときは、この配列に1件足すだけでOKです。
// null のままにしている値は「まだ決まっていない情報」です。決まったら埋めてください。
window.ROOMS = [
  {
    id: '103',
    floor: 1,
    keyboxSide: 'right', // ドアに向かって右側
    hero: 'images/listing/103/03.jpg', // トップ画面に大きく出す部屋写真
    wifi: {
      ssid5: 'BCW720J-57CBA-A',
      ssid24: 'BCW720J-57CBA-G',
      pass: '8f358f7fc3ee4'
    },
    hasRiceCooker: false,
    microwaveWattageKnown: true, // 103号室のみ、レンジのワット数を確認済み
    photos: {
      wifiQr5: 'images/103/wifi-qr-5g.png',
      wifiQr24: 'images/103/wifi-qr-24g.png'
    }
  },
  {
    id: '202',
    floor: 2,
    keyboxSide: 'left', // ドアに向かって左側
    hero: 'images/listing/202/01.jpg', // トップ画面に大きく出す部屋写真
    wifi: {
      ssid5: 'BCW720J-0FF68-A',
      ssid24: 'BCW720J-0FF68-G',
      pass: '8478c44eaee58'
    },
    hasRiceCooker: true,
    microwaveWattageKnown: false,
    photos: {
      wifiQr: 'images/202/wifi-qr.png',
      applianceMicrowave: 'images/202/appliance-microwave.png',
      applianceKettle: 'images/202/appliance-kettle.png',
      applianceCoffee: 'images/202/appliance-coffee.png',
      applianceRiceCooker: 'images/202/appliance-ricecooker.png',
      applianceWasher: 'images/202/appliance-washer.png',
      applianceWire: 'images/202/appliance-wire.png',
      applianceCirculator: 'images/202/appliance-circulator.png'
      // 注: アイロンの写真は元サイトに見つかりませんでした（準備中と表示されます）
    }
  },
  {
    id: '201',
    floor: 2,
    hero: 'images/listing/201/01.jpg', // トップ画面に大きく出す部屋写真
    keyboxSide: 'right', // ドアに向かって右側
    wifi: {
      ssid5: 'BCW720J-F04F6-A',
      ssid24: 'BCW720J-F04F6-G',
      pass: '8e8aaa7a4383a'
    },
    hasRiceCooker: false,
    microwaveWattageKnown: false,
    // TODO: エアコン・IH以外の家電は写真がまだ無いため、201では項目ごと非表示にしています
    //       （写真を追加したら、ここに登録し、data/content.js の rooms に '201' を足してください）
    photos: {
      wifiQr5: 'images/201/wifi-qr-5g.png',
      wifiQr24: 'images/201/wifi-qr-24g.png',
      // カプセル式コーヒーメーカー（ドルチェ グスト ジェニオ2）。公式の取扱説明書の図から、イラスト部分だけを切り出したもの。
      // {lang} の付いた図は、図の中の文字を言語ごとに入れた4枚（-en / -ja / -zh-Hant / -ko）がある
      dolceMachine: 'images/201/dolcegusto-machine.png',
      dolceWater: 'images/201/dolcegusto-fig-water.png',
      dolcePower: 'images/201/dolcegusto-fig-power-{lang}.png',
      dolceLevel: 'images/201/dolcegusto-fig-level-{lang}.png',
      dolceCapsule: 'images/201/dolcegusto-fig-capsule.png',
      dolceBrew: 'images/201/dolcegusto-fig-brew.png',
      dolceFinish: 'images/201/dolcegusto-fig-finish.png'
    }
  }
];

window.getRoom = function (id) {
  return window.ROOMS.find(function (r) { return r.id === id; }) || null;
};
