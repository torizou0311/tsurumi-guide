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
      unlock1: 'images/103/unlock1.png',
      unlock2: 'images/103/unlock2.png',
      keybox: 'images/103/keybox.jpg',
      keyboxTrouble: 'images/103/keybox-troubleshoot.jpg',
      wifiQr5: 'images/103/wifi-qr-5g.png',
      wifiQr24: 'images/103/wifi-qr-24g.png',
      applianceAc: 'images/103/appliance-ac.png',
      applianceInduction: 'images/103/appliance-induction.png',
      hotwaterPanel: 'images/103/hotwater-panel.png',
      breaker: 'images/103/breaker.png'
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
      unlock1: 'images/202/unlock1.png',
      unlock2: 'images/202/unlock2.png',
      keybox: 'images/202/keybox.jpg',
      keyboxTrouble: 'images/202/keybox-troubleshoot.jpg',
      wifiQr: 'images/202/wifi-qr.png',
      applianceAc: 'images/202/appliance-ac.png',
      applianceInduction: 'images/202/appliance-induction.png',
      applianceMicrowave: 'images/202/appliance-microwave.png',
      applianceKettle: 'images/202/appliance-kettle.png',
      applianceCoffee: 'images/202/appliance-coffee.png',
      applianceRiceCooker: 'images/202/appliance-ricecooker.png',
      applianceWasher: 'images/202/appliance-washer.png',
      applianceWire: 'images/202/appliance-wire.png',
      applianceCirculator: 'images/202/appliance-circulator.png',
      // 注: アイロンの写真は元サイトに見つかりませんでした（準備中と表示されます）
      hotwaterPanel: 'images/202/hotwater-panel.png',
      breaker: 'images/202/breaker.png'
    }
  },
  {
    id: '201',
    floor: 2,
    hero: 'images/listing/201/01.jpg', // トップ画面に大きく出す部屋写真
    // TODO: 要記入 - 201号室のキーボックスの位置がまだ確認できていません
    keyboxSide: null,
    // TODO: 要記入 - 201号室のWi-Fi情報（SSID・パスワード）がまだ確認できていません
    wifi: null,
    hasRiceCooker: false,
    microwaveWattageKnown: false,
    // TODO: 要記入 - 201号室の写真がまだありません（撮影・追加してください）
    photos: {}
  }
];

window.getRoom = function (id) {
  return window.ROOMS.find(function (r) { return r.id === id; }) || null;
};
