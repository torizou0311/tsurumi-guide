// 4か国語の文章はすべてこのファイルにまとまっています。
// 文章を直したいときは、ここだけを直せばOKです（建物共通の文章は1回書くだけで、
// 103・201・202のどの部屋のページにも反映されます）。
//
// {room} {floor} {keyboxSide} などの { } で囲まれた部分は、表示するときに
// 自動で部屋ごとの値に置き換わります（js/app.js が置き換えます）。
window.I18N = {
  en: {
    meta: { name: 'English' },
    common: {
      brand: `YOKOHAMA Still Retreat`,
      tagline: `A quiet retreat in Tsurumi, Yokohama`,
      addressLocal: `1-7-40 Teraya, Tsurumi-ku, Yokohama-shi, Kanagawa-ken 230-0015, Japan`,
      addressJaLabel: `Japanese address (show this to your taxi driver)`,
      copy: `Copy`,
      copied: `Copied!`,
      openMaps: `Open in Google Maps`,
      changeRoom: `Change room`,
      room: `Room`,
      photoPending: `Photo coming soon`,
      pendingInfo: `This information is still being prepared. Please message your host on Airbnb and we'll get back to you right away.`,
      ssid5: `5GHz network name (SSID)`,
      ssid24: `2.4GHz network name (SSID)`,
      password: `Password`,
      side: { left: `left`, right: `right` },
      backHome: `Back to Home`
    },
    nav: { home: `Home`, wifi: `Wi-Fi`, checkout: `Check-in`, emergency: `Emergency` },
    home: {
      greeting: `Welcome to YOKOHAMA Still Retreat`,
      subtitle: `We hope you enjoy a quiet stay in Tsurumi, Yokohama.`,
      quickTitle: `Quick Info`,
      menuTitle: `All Guides`
    },
    roomselect: {
      title: `Which room are you staying in?`,
      subtitle: `Please select your room to see the guide for your stay.`
    },
    menu: {
      translation: `Translation Tool`,
      access: `Access`,
      checkin: `Check-in & Check-out`,
      wifi: `Wi-Fi`,
      appliances: `Appliances & Facilities`,
      garbage: `Taking Out the Trash`,
      rules: `House Rules`,
      nearby: `Nearby Stores`,
      parking: `Coin Parking`,
      trouble: `If Something Goes Wrong`,
      emergency: `Emergency Contacts & Evacuation`
    },
    translation: {
      intro: `<p>We recommend <strong>Google Lens</strong> for real-time translation during your stay — just point your camera at any text and it will translate it for you.</p><ul><li>Install the Google app</li><li>Tap the Google Lens icon</li><li>Tap <strong>Translate</strong></li><li>Point your camera at the text you want to translate</li></ul>`
    },
    access: {
      mapIntro: `<p>Tap the address below to open it in Google Maps.</p>`,
      haneda: `<p>From <strong>Haneda Airport</strong> by train to Keikyu-Tsurumi Station: about 20 minutes. From Keikyu-Tsurumi Station to the property: about 18 minutes on foot.</p>`,
      narita: `<p>From <strong>Narita Airport</strong> by train to Tsurumi Station (JR Line): about 90 minutes. From JR Tsurumi Station to the property: about 12 minutes on foot.</p>`,
      taxi: `<p>By taxi, please show the driver the address below.</p><ul><li>From Haneda Airport: about 30 minutes, approximately ¥6,000–7,000</li><li>From JR Tsurumi Station: about 3 minutes, approximately ¥500</li><li>A 20% late-night surcharge applies between 10:00 PM and 5:00 AM</li></ul><p><strong>Important:</strong> please ask the driver to turn right at the red-circled spot on the map. If the driver continues straight on the main road instead, you will need to walk up a flight of stairs to reach the building.</p>`,
      taxiStandKeikyu: `<p><strong>Taxi stand at Keikyu-Tsurumi Station:</strong> go to the West Exit, turn left, and go down the stairs — you will see the TAXI sign.</p>`,
      taxiStandJR: `<p><strong>Taxi stand at JR Tsurumi Station:</strong> cross the crosswalk at the bottom of the stairs and turn left — you will see the TAXI sign.</p>`,
      exterior: `<p>The building, seen from outside.</p>`
    },
    checkin: {
      intro: `<p>This is a self check-in property with no staff on site, so please review the steps below in advance.</p>`,
      times: `<p><strong>Check-in:</strong> from 4:00 PM<br><strong>Check-out:</strong> until 10:00 AM</p><p>Our cleaning staff arrive at 10:10 AM, so please vacate the room by 10:00 AM. Checking out later than 10:00 AM may result in an additional night's fee.</p>`,
      steps: `<p>Your room is <strong>Room {room}</strong>, on floor {floor}. The door has an electronic lock.</p><ul><li>Enter the passcode and press the unlock button. (The passcode is sent via Airbnb message on the morning of your check-in day.)</li></ul>`,
      stepsLock: `<p>Please lock the door whenever you go out, and again at check-out.</p>`,
      keybox: `<p>If the electronic lock does not work, you can take the key from the key box and use it instead. The key box is at the gas meter on the <strong>{keyboxSide}</strong> side of the door. There are two key boxes — either one will work. The key box code is the same as the electronic lock passcode.</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `Scan the QR code, or enter the details below.`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `Air conditioner`, induction: `Induction cooktop`, microwave: `Microwave`, kettle: `Electric kettle`, coffee: `Drip coffee`, ricecooker: `Rice cooker`, washer: `Washing machine`, wire: `Indoor drying wire`, circulator: `Air circulator`, iron: `Steam iron`, dolcegusto: `Capsule coffee machine (Nescafé Dolce Gusto Genio 2)` },
      ac: `<p>Operate using the remote control provided.</p>`,
      induction: `<p>In the kitchen.</p>`,
      microwave: ``,
      microwaveWattage: `<p>Power levels: 200W (defrost) / 500W and 700W (reheat). The inner dial sets the timer; the outer dial sets the defrost weight.</p>`,
      kettle: `<p>Please note: once the water boils, the body of the kettle (except the handle) becomes hot too.</p>`,
      coffee: `<p>There is a <strong>coffee drip bag stand</strong> in the kitchen. Enjoy a cup of drip coffee!</p>`,
      riceCooker: ``,
      washer: `<p>It has both washing and drying functions.</p>`,
      wire: `<p>A drying wire is provided in the room for hanging laundry.</p>`,
      circulator: `<p>The ceilings are high, so cool air tends to settle near the floor while warm air rises. If the air conditioner doesn't feel effective, run the circulator to help circulate the air.</p>`,
      iron: `<p>A <strong>steam iron</strong> is on the shelf in the bathroom. Please use the ironing board in the bathroom when ironing.</p>`,
      dolceIntro: `<p>Insert a capsule and push the lever to make coffee, one cup at a time. Follow steps 1–7 below.</p>`,
      dolceWater: `<p><strong>1. Fill the water tank</strong></p><ul><li>Remove the water tank from the back of the machine and fill it with tap water. <strong>Do not fill above the “MAX” line.</strong></li><li>Put the tank back on the machine.</li><li>Do not put in anything other than water (no hot water, milk, etc.).</li></ul>`,
      dolcePower: `<p><strong>2. Switch on</strong></p><ul><li>Plug in the machine and press the power button on top.</li><li>While the button <strong>blinks red</strong>, the machine is heating up (about 30 seconds). When it turns <strong>steady green</strong>, it is ready.</li></ul>`,
      dolceCup: `<p><strong>3. Place your cup</strong></p><ul><li>Put a cup on the tray under the outlet.</li></ul>`,
      dolceLevel: `<p><strong>4. Set the number of bars</strong></p><ul><li>The lid of each capsule shows a number of <strong>bars</strong>.</li><li>Move the small lever on top of the machine <strong>up or down</strong> until the number of green lights matches the bars on your capsule.</li></ul>`,
      dolceCapsule: `<p><strong>5. Insert the capsule</strong></p><ul><li>Lift the silver handle on the front and pull out the capsule holder.</li><li>Place the capsule in the holder, slide it back into the machine, and lower the handle.</li></ul>`,
      dolceBrew: `<p><strong>6. Push the lever to brew</strong></p><ul><li>Push the lever to the <strong>right (red)</strong> for a hot drink.</li><li>It stops automatically at the set amount and the lever returns to the centre. To stop earlier, move the lever back to the centre by hand.</li><li>Pushing the lever to the <strong>left (blue)</strong> dispenses water at tank temperature (the machine does not chill it). For a cold drink, brew into a cup with ice.</li></ul>`,
      dolceFinish: `<p><strong>7. Remove the capsule</strong></p><ul><li>Wait until the power button changes from blinking red to <strong>steady green</strong> (about 5 seconds).</li><li>Lift the handle, take out the holder and throw away the used capsule.</li><li>Rinse the holder with water, put it back and lower the handle.</li></ul><p><strong>Caution:</strong> <strong>never lift the handle while the power button is blinking red</strong> — hot water may spray out. The capsule is hot right after brewing, so do not touch it with your hands. The machine switches off automatically after about 5 minutes without use.</p>`,
    },
    garbage: {
      body: `<p>When the trash can is full, or when you check out, please place your sorted trash in the container outside the room. As long as it is sorted correctly, any of the containers is fine.</p>`
    },
    rules: {
      important: `<p><strong>Important:</strong> if the room is not left in a reasonably clean condition and requires extra cleaning time, an additional cleaning fee of ¥20,000 will be charged.</p>`,
      packages: `<p>As this property has no on-site staff, we are unable to receive packages before your stay. Receiving packages during your stay is not a problem.</p>`,
      prohibitedTitle: `Prohibited (additional charges may apply)`,
      prohibitedList: `<ul><li>Wearing shoes inside the room</li><li>Smoking — the room and the entire premises are strictly non-smoking</li><li>Excessive alcohol consumption</li><li>Making noise after 9:00 PM or late at night</li><li>Bringing in or hosting guests who are not registered on the reservation</li><li>Disturbing neighbors</li><li>Losing the key (if a physical key was used)</li><li>Intentionally damaging the room or its facilities, or failing to report damage</li></ul><p>Violating these rules may result in a penalty of ¥15,000 plus the actual cost of any damage.</p>`
    },
    nearby: {
      intro: `<p>Walking times below are from JR Tsurumi Station, and from the accommodation.</p><ul><li><strong>FamilyMart Tsurumi Nishiguchi</strong> (24h) — 2 min from JR Tsurumi Sta. / 8 min from the property</li><li><strong>Lawson Tsurumi-Eki Nishiguchi</strong> (24h) — 1 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>7-Eleven Yokohama Toyooka-cho Chuo</strong> (24h) — 2 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>Supermarket SEIYU Tsurumi</strong> (9:00 AM–11:00 PM) — 2 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>Supermarket Keikyu Store Tsurumi-Nishi</strong> (weekdays 10:00 AM–11:00 PM, holidays 10:00 AM–9:00 PM) — 1 min from JR Tsurumi Sta. / 10 min from the property</li></ul>`
    },
    parking: {
      intro: `<p>The nearest coin parking lots are listed below (all located uphill between the station and the property). Tap an address to open it in Google Maps. Rates may change — please check the sign at the lot.</p><ul><li><strong>Times Tsurumi Teraya No. 3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">Teraya 2-6, Tsurumi-ku</a>. 4 min walk (290m). ¥220/30min. Max ¥1,000/24h; max ¥440 for 19:00–8:00 (max stay 48h).</li><li><strong>Shinkou Park Tsurumi Teraya</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">Teraya 2-1-21</a>. 4 min walk (290m). ¥200/30min. Max ¥900 for 9:00–18:00; max ¥400 for 18:00–9:00.</li><li><strong>Times Tsurumi Teraya</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">Teraya 1-3</a>. 4 min walk (350m). ¥200/20min. Max ¥1,200/24h; max ¥500 for 19:00–8:00.</li><li><strong>Time Parking Tsurumi</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">Tsurumi 2-3-45</a>. 4 min walk (230m), steep stairs. 8:00–20:00: ¥300/30min, max ¥1,200/12h. 20:00–8:00: ¥100/1h, max ¥400/12h.</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>Entrance keypad not working:</strong> there is a box next to the entrance that contains a spare key. If the keypad isn't working, please contact us via Airbnb chat and we'll send you the box code.</p>`,
      hotwater: `<p><strong>No hot water in the shower room:</strong> press the power button at the upper left of the hot water control panel. If the green light on the power button is lit, hot water is being supplied even if no numbers are displayed.</p>`,
      power: `<p><strong>Power outage:</strong> the breaker is located at the entrance. Open the cover and lift the switch bar up.</p>`,
      lostFound: `<p><strong>Lost something?</strong> Please message us on the reservation platform. Our cleaning staff will check for it, and if found, we'll send it to you cash-on-delivery. If we don't hear from you within 3 days of checkout, items will be disposed of without notice. Low-value items (umbrellas, towels, etc.) are disposed of without notice.</p>`
    },
    emergency: {
      numbers: `<p><strong>Ambulance / Fire:</strong> 119<br><strong>Police:</strong> 110</p>`,
      addressToTell: `<p>If you need to call for help, tell them this address:</p>`,
      evacuation: `<p><strong>Evacuation site</strong> (earthquake, flood, landslide): Toyooka Elementary School (豊岡小学校), 27-1 Toyookacho, Tsurumi-ku — about 11 minutes on foot.</p>`,
      hostContact: `<p>For anything else, please contact your host via Airbnb message.</p>`
    }
  },

  ja: {
    meta: { name: '日本語' },
    common: {
      brand: `YOKOHAMA Still Retreat`,
      tagline: `横浜・鶴見の静かな隠れ家`,
      addressLocal: `〒230-0015 神奈川県横浜市鶴見区寺谷1-7-40 レイズ寺谷`,
      addressJaLabel: `日本語の住所（タクシーの運転手さんに見せてください）`,
      copy: `コピー`,
      copied: `コピーしました`,
      openMaps: `Googleマップで開く`,
      changeRoom: `部屋を変える`,
      room: `部屋`,
      photoPending: `写真準備中`,
      pendingInfo: `この情報はまだ準備中です。Airbnbのメッセージでホストにお問い合わせください。折り返しご連絡します。`,
      ssid5: `5GHzのネットワーク名（SSID）`,
      ssid24: `2.4GHzのネットワーク名（SSID）`,
      password: `パスワード`,
      side: { left: `左`, right: `右` },
      backHome: `ホームに戻る`
    },
    nav: { home: `ホーム`, wifi: `Wi-Fi`, checkout: `入退室`, emergency: `緊急` },
    home: {
      greeting: `YOKOHAMA Still Retreatへようこそ`,
      subtitle: `横浜・鶴見での静かなご滞在をお楽しみください。`,
      quickTitle: `よく使う情報`,
      menuTitle: `メニュー一覧`
    },
    roomselect: {
      title: `お泊まりの部屋を選んでください`,
      subtitle: `お部屋を選ぶと、そのお部屋専用のご案内が表示されます。`
    },
    menu: {
      translation: `翻訳ツール`,
      access: `アクセス`,
      checkin: `チェックイン・チェックアウト`,
      wifi: `Wi-Fi`,
      appliances: `家電・設備`,
      garbage: `ゴミの出し方`,
      rules: `ハウスルール・禁止事項`,
      nearby: `周辺のお店`,
      parking: `コインパーキング`,
      trouble: `困ったとき`,
      emergency: `緊急連絡先・避難場所`
    },
    translation: {
      intro: `<p>滞在中の翻訳には<strong>Googleレンズ</strong>が便利です。カメラを文字にかざすだけで、その場で翻訳できます。</p><ul><li>Googleアプリをインストールする</li><li>Googleレンズのアイコンをタップする</li><li><strong>「翻訳」</strong>をタップする</li><li>翻訳したい文字にカメラを向ける</li></ul>`
    },
    access: {
      mapIntro: `<p>下の住所をタップするとGoogleマップが開きます。</p>`,
      haneda: `<p><strong>羽田空港</strong>から電車で京急鶴見駅まで約20分。京急鶴見駅から施設までは徒歩約18分です。</p>`,
      narita: `<p><strong>成田空港</strong>から電車でJR鶴見駅まで約90分。JR鶴見駅から施設までは徒歩約12分です。</p>`,
      taxi: `<p>タクシーをご利用の場合は、運転手さんに下の住所を見せてください。</p><ul><li>羽田空港から：約30分、およそ6,000〜7,000円</li><li>JR鶴見駅から：約3分、およそ500円</li><li>22時〜翌5時は深夜割増料金（2割増）がかかります</li></ul><p><strong>重要：</strong>地図の赤丸の地点で右折するよう運転手さんにお伝えください。そのまま大通りを直進してしまうと、建物まで階段を上る必要があります。</p>`,
      taxiStandKeikyu: `<p><strong>京急鶴見駅のタクシー乗り場：</strong>西口を出て左に曲がり、階段を下りると「TAXI」の看板が見えます。</p>`,
      taxiStandJR: `<p><strong>JR鶴見駅のタクシー乗り場：</strong>階段下の横断歩道を渡って左に曲がると「TAXI」の看板が見えます。</p>`,
      exterior: `<p>建物の外観です。</p>`
    },
    checkin: {
      intro: `<p>スタッフが常駐しないセルフチェックイン方式です。事前に下記の手順をご確認ください。</p>`,
      times: `<p><strong>チェックイン：</strong>16:00〜<br><strong>チェックアウト：</strong>〜10:00</p><p>清掃スタッフは10:10に到着しますので、10:00までにお部屋を出ていただくようお願いします。10:00を過ぎてのチェックアウトは、延泊料金が発生する場合があります。</p>`,
      steps: `<p>お部屋は<strong>{room}号室</strong>、{floor}階です。ドアの鍵は電子錠です。</p><ul><li>パスワードを入力して解錠ボタンを押してください（パスワードはチェックイン当日の朝にAirbnbメッセージでお送りします）。</li></ul>`,
      stepsLock: `<p>外出時・チェックアウト時は必ず施錠をお願いします。</p>`,
      keybox: `<p>電子錠がうまく作動しない場合は、キーボックスから鍵を取り出してお使いください。キーボックスはドアの<strong>{keyboxSide}側</strong>のガスメーターのところにあります。キーボックスは2つありますが、どちらでも構いません。キーボックスの暗証番号は電子錠と同じです。</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `QRコードを読み取るか、下記の情報を入力してください。`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `エアコン`, induction: `IHクッキングヒーター`, microwave: `電子レンジ`, kettle: `電気ケトル`, coffee: `ドリップコーヒー`, ricecooker: `炊飯器`, washer: `洗濯機`, wire: `室内物干しワイヤー`, circulator: `サーキュレーター`, iron: `スチームアイロン`, dolcegusto: `カプセル式コーヒーメーカー（ネスカフェ ドルチェ グスト ジェニオ2）` },
      ac: `<p>付属のリモコンで操作してください。</p>`,
      induction: `<p>キッチンにあります。</p>`,
      microwave: ``,
      microwaveWattage: `<p>出力：200W（解凍）／500W・700W（温め）。内側のダイヤルでタイマー、外側のダイヤルで解凍する重さを設定します。</p>`,
      kettle: `<p>お湯が沸くと、持ち手以外の本体部分も熱くなりますのでご注意ください。</p>`,
      coffee: `<p>キッチンにドリップバッグ用のスタンドがあります。ドリップコーヒーをお楽しみください。</p>`,
      riceCooker: ``,
      washer: `<p>洗濯・乾燥機能付きです。</p>`,
      wire: `<p>室内に洗濯物を干すためのワイヤーがあります。</p>`,
      circulator: `<p>天井が高いため、冷たい空気は下に、暖かい空気は上にたまりやすくなっています。エアコンの効きが弱く感じるときは、サーキュレーターで空気を循環させてください。</p>`,
      iron: `<p>浴室の棚にスチームアイロンがあります。ご使用の際は浴室内のアイロン台をお使いください。</p>`,
      dolceIntro: `<p>専用カプセルをセットしてレバーを倒すだけで、コーヒーを1杯ずつ作れます。下の ①〜⑦ の順にお使いください。</p>`,
      dolceWater: `<p><strong>① 水を入れる</strong></p><ul><li>本体の後ろにある給水タンクを取り外し、水道水を入れます。<strong>「MAX」の線を超えないように</strong>入れてください。</li><li>タンクを本体に戻します。</li><li>お湯や牛乳など、水以外のものは入れないでください。</li></ul>`,
      dolcePower: `<p><strong>② 電源を入れる</strong></p><ul><li>プラグをコンセントに差し、本体の上にある電源ボタンを押します。</li><li>ボタンが<strong>赤く点滅</strong>している間は準備中です（約30秒）。<strong>緑の点灯</strong>に変わったら使えます。</li></ul>`,
      dolceCup: `<p><strong>③ カップを置く</strong></p><ul><li>抽出口の下のトレイにカップを置きます。</li></ul>`,
      dolceLevel: `<p><strong>④ 目盛りを合わせる</strong></p><ul><li>カプセルのふたに、線の数で<strong>目盛り</strong>が描かれています。</li><li>本体の上にある小さなレバーを<strong>上下</strong>に動かし、緑のランプの数をカプセルの目盛りと同じ数に合わせます。</li></ul>`,
      dolceCapsule: `<p><strong>⑤ カプセルをセットする</strong></p><ul><li>前面の銀色のハンドルを上げ、カプセルホルダーを手前に引き出します。</li><li>ホルダーにカプセルを入れて本体に戻し、ハンドルを下げます。</li></ul>`,
      dolceBrew: `<p><strong>⑥ レバーを倒していれる</strong></p><ul><li>レバーを<strong>右（赤）</strong>に倒すと、温かい飲み物が出ます。</li><li>設定した量が出ると自動で止まり、レバーが真ん中に戻ります。途中で止めたいときは、手でレバーを真ん中に戻してください。</li><li>レバーを<strong>左（青）</strong>に倒すと、タンクの水がそのままの温度で出ます（冷やす機能はありません）。冷たい飲み物は、氷を入れたカップにいれてください。</li></ul>`,
      dolceFinish: `<p><strong>⑦ カプセルを捨てる</strong></p><ul><li>電源ボタンが赤い点滅から<strong>緑の点灯</strong>に変わるまで待ちます（約5秒）。</li><li>ハンドルを上げてホルダーを取り出し、使い終わったカプセルを捨てます。</li><li>ホルダーを水ですすいで本体に戻し、ハンドルを下げます。</li></ul><p><strong>ご注意：</strong>電源ボタンが<strong>赤く点滅している間は、絶対にハンドルを上げないでください</strong>（熱いお湯が噴き出すおそれがあります）。使った直後のカプセルは熱いので、手で触らないでください。約5分操作しないと、電源は自動で切れます。</p>`,
    },
    garbage: {
      body: `<p>ゴミ箱がいっぱいになったとき、またはチェックアウトの際は、分別した上で部屋の外にあるゴミ置き場に出してください。分別さえしていれば、どの容器に入れても構いません。</p>`
    },
    rules: {
      important: `<p><strong>重要：</strong>お部屋の使用状況によっては、通常より清掃に時間がかかる場合があり、その際は追加清掃費として20,000円を申し受けます。</p>`,
      packages: `<p>当施設はスタッフが常駐していないため、ご宿泊前の荷物のお受け取りはできません。ご滞在中の荷物受け取りは問題ございません。</p>`,
      prohibitedTitle: `禁止事項（違反すると追加料金が発生する場合があります）`,
      prohibitedList: `<ul><li>室内での土足での使用</li><li>喫煙（室内および敷地内は全面禁煙です）</li><li>過度の飲酒</li><li>21時以降・深夜の騒音</li><li>宿泊者登録のない方の同伴・宿泊</li><li>近隣住民への迷惑行為</li><li>鍵の紛失（物理鍵をご利用の場合）</li><li>設備の故意の破損、または破損を報告しないこと</li></ul><p>これらに違反した場合、15,000円の違約金に加え、実際の損害額をご負担いただきます。</p>`
    },
    nearby: {
      intro: `<p>下記はJR鶴見駅からの徒歩時間と、施設からの徒歩時間です。</p><ul><li><strong>ファミリーマート鶴見西口店</strong>（24時間）— JR鶴見駅から2分／施設から8分</li><li><strong>ローソン鶴見駅西口店</strong>（24時間）— JR鶴見駅から1分／施設から9分</li><li><strong>セブンイレブン横浜豊岡町中央店</strong>（24時間）— JR鶴見駅から2分／施設から9分</li><li><strong>スーパー西友鶴見店</strong>（9:00〜23:00）— JR鶴見駅から2分／施設から9分</li><li><strong>スーパー京急ストア鶴見西口店</strong>（平日10:00〜23:00、休日10:00〜21:00）— JR鶴見駅から1分／施設から10分</li></ul>`
    },
    parking: {
      intro: `<p>最寄りのコインパーキングです（いずれも駅から施設に向かって坂を上る途中にあります）。住所をタップするとGoogleマップが開きます。料金は変更されることがありますので、現地の看板をご確認ください。</p><ul><li><strong>タイムズ鶴見寺谷第3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">鶴見区寺谷2-6</a>。徒歩4分（290m）。220円/30分。最大1,000円/24h、19:00〜8:00は最大440円（最大駐車48h）。</li><li><strong>シンコウパーク鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">寺谷2-1-21</a>。徒歩4分（290m）。200円/30分。9:00〜18:00は最大900円、18:00〜9:00は最大400円。</li><li><strong>タイムズ鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">寺谷1-3</a>。徒歩4分（350m）。200円/20分。最大1,200円/24h、19:00〜8:00は最大500円。</li><li><strong>タイムパーキング鶴見</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">鶴見2-3-45</a>。徒歩4分（230m）、急な階段あり。8:00〜20:00：300円/30分 最大1,200円/12h。20:00〜8:00：100円/1h 最大400円/12h。</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>玄関の電子錠が動かないとき：</strong>玄関脇に鍵が入ったボックスがあります。電子錠が作動しない場合はAirbnbメッセージでご連絡ください。ボックスの暗証番号をお送りします。</p>`,
      hotwater: `<p><strong>シャワールームのお湯が出ないとき：</strong>給湯パネル左上の電源ボタンを押してください。電源ボタンの緑ランプが点灯していれば、数字が表示されていなくてもお湯は出ています。</p>`,
      power: `<p><strong>停電したとき：</strong>ブレーカーは玄関にあります。カバーを開けてレバーを上に上げてください。</p>`,
      lostFound: `<p><strong>忘れ物をしたとき：</strong>予約サイトのメッセージでご連絡ください。清掃スタッフが確認し、見つかった場合は着払いでお送りします。チェックアウトから3日以内にご連絡がない場合、忘れ物は予告なく処分させていただきます。傘やタオルなど安価な物は予告なく処分いたします。</p>`
    },
    emergency: {
      numbers: `<p><strong>救急・火事：</strong>119<br><strong>警察：</strong>110</p>`,
      addressToTell: `<p>助けを呼ぶときは、この住所を伝えてください。</p>`,
      evacuation: `<p><strong>避難場所</strong>（地震・洪水・土砂災害）：豊岡小学校（横浜市鶴見区豊岡町27-1）— 徒歩約11分</p>`,
      hostContact: `<p>その他のお問い合わせはAirbnbメッセージでホストまでご連絡ください。</p>`
    }
  },

  'zh-Hant': {
    meta: { name: '繁體中文' },
    common: {
      brand: `YOKOHAMA Still Retreat`,
      tagline: `橫濱鶴見的靜謐隱居之所`,
      addressLocal: `日本 郵遞區號230-0015 神奈川縣橫濱市鶴見區寺谷1-7-40 Raise寺谷`,
      addressJaLabel: `日文住址（請出示給計程車司機看）`,
      copy: `複製`,
      copied: `已複製`,
      openMaps: `在Google地圖中開啟`,
      changeRoom: `更換房間`,
      room: `房間`,
      photoPending: `照片準備中`,
      pendingInfo: `此資訊仍在準備中，請透過Airbnb訊息聯絡房東，我們會盡快回覆您。`,
      ssid5: `5GHz網路名稱（SSID）`,
      ssid24: `2.4GHz網路名稱（SSID）`,
      password: `密碼`,
      side: { left: `左`, right: `右` },
      backHome: `回到首頁`
    },
    nav: { home: `首頁`, wifi: `Wi-Fi`, checkout: `入住退房`, emergency: `緊急` },
    home: {
      greeting: `歡迎入住 YOKOHAMA Still Retreat`,
      subtitle: `祝您在橫濱鶴見度過寧靜舒適的時光。`,
      quickTitle: `常用資訊`,
      menuTitle: `完整選單`
    },
    roomselect: {
      title: `請問您入住哪個房間？`,
      subtitle: `請選擇您的房間，查看專屬入住指南。`
    },
    menu: {
      translation: `翻譯工具`,
      access: `交通方式`,
      checkin: `入住與退房`,
      wifi: `Wi-Fi`,
      appliances: `家電與設備`,
      garbage: `垃圾丟棄方式`,
      rules: `住宿規則與禁止事項`,
      nearby: `附近店家`,
      parking: `投幣式停車場`,
      trouble: `常見問題排解`,
      emergency: `緊急聯絡方式・避難地點`
    },
    translation: {
      intro: `<p>建議使用<strong>Google 鏡頭</strong>進行即時翻譯，只要用相機對準文字，就能立即翻譯。</p><ul><li>安裝Google App</li><li>點選Google鏡頭圖示</li><li>點選<strong>「翻譯」</strong></li><li>將相機對準想翻譯的文字</li></ul>`
    },
    access: {
      mapIntro: `<p>點選下方住址即可開啟Google地圖。</p>`,
      haneda: `<p>從<strong>羽田機場</strong>搭電車到京急鶴見站約需20分鐘。從京急鶴見站步行到本住宿約18分鐘。</p>`,
      narita: `<p>從<strong>成田機場</strong>搭電車到JR鶴見站約需90分鐘。從JR鶴見站步行到本住宿約12分鐘。</p>`,
      taxi: `<p>搭乘計程車時，請將下方住址出示給司機看。</p><ul><li>從羽田機場出發：約30分鐘，車資約6,000〜7,000日圓</li><li>從JR鶴見站出發：約3分鐘，車資約500日圓</li><li>22:00〜翌5:00會加收兩成深夜加成費用</li></ul><p><strong>重要提醒：</strong>請告知司機在地圖上紅色圈起處右轉。若直接沿大馬路直行，需要走樓梯才能抵達建築物。</p>`,
      taxiStandKeikyu: `<p><strong>京急鶴見站計程車招呼站：</strong>從西口出站後左轉，走下樓梯即可看到「TAXI」的招牌。</p>`,
      taxiStandJR: `<p><strong>JR鶴見站計程車招呼站：</strong>走下樓梯後穿越斑馬線並左轉，即可看到「TAXI」的招牌。</p>`,
      exterior: `<p>建築物外觀。</p>`
    },
    checkin: {
      intro: `<p>本住宿採自助入住，現場無工作人員常駐，請提前確認以下步驟。</p>`,
      times: `<p><strong>入住：</strong>16:00起<br><strong>退房：</strong>10:00前</p><p>清潔人員將於10:10抵達，請於10:00前退房。若逾10:00退房，可能會加收一晚的費用。</p>`,
      steps: `<p>您的房間是<strong>{room}號房</strong>，位於{floor}樓。房門為電子鎖。</p><ul><li>輸入密碼並按下解鎖按鈕（密碼會在入住當天早上透過Airbnb訊息傳送給您）。</li></ul>`,
      stepsLock: `<p>外出或退房時請務必將門鎖上。</p>`,
      keybox: `<p>若電子鎖無法使用，可從鑰匙盒中取出鑰匙使用。鑰匙盒位於房門<strong>{keyboxSide}側</strong>的瓦斯錶處。共有兩個鑰匙盒，使用任一個皆可。鑰匙盒密碼與電子鎖相同。</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `請掃描QR code，或直接輸入下方資訊連線。`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `冷氣`, induction: `IH電磁爐`, microwave: `微波爐`, kettle: `電熱水壺`, coffee: `掛耳式咖啡`, ricecooker: `電子鍋`, washer: `洗衣機`, wire: `室內曬衣繩`, circulator: `循環扇`, iron: `蒸氣熨斗`, dolcegusto: `膠囊咖啡機（雀巢 Dolce Gusto Genio 2）` },
      ac: `<p>請使用附贈的遙控器操作。</p>`,
      induction: `<p>位於廚房。</p>`,
      microwave: ``,
      microwaveWattage: `<p>功率：200W（解凍）／500W、700W（加熱）。內側旋鈕設定時間，外側旋鈕設定解凍重量。</p>`,
      kettle: `<p>請注意：水煮沸後，除握把外的壺身也會變燙，請小心使用。</p>`,
      coffee: `<p>廚房設有掛耳式咖啡架，歡迎享用手沖咖啡！</p>`,
      dolceIntro: `<p>放入專用膠囊、撥動撥桿，即可一杯一杯地沖煮咖啡。請依照下方步驟 1～7 使用。</p>`,
      dolceWater: `<p><strong>1. 加水</strong></p><ul><li>取下機身後方的水箱，裝入自來水。<strong>請勿超過「MAX」線。</strong></li><li>將水箱裝回機身。</li><li>請勿加入水以外的東西（熱水、牛奶等）。</li></ul>`,
      dolcePower: `<p><strong>2. 開啟電源</strong></p><ul><li>插上插頭，按下機身上方的電源鍵。</li><li>電源鍵<strong>紅燈閃爍</strong>時表示正在加熱（約30秒），變成<strong>綠燈恆亮</strong>後即可使用。</li></ul>`,
      dolceCup: `<p><strong>3. 放置杯子</strong></p><ul><li>將杯子放在出水口下方的托盤上。</li></ul>`,
      dolceLevel: `<p><strong>4. 調整刻度</strong></p><ul><li>膠囊的上蓋印有以橫線數量表示的<strong>刻度</strong>。</li><li>將機身上方的小撥桿<strong>上下</strong>撥動，使綠燈的數量與膠囊上的刻度相同。</li></ul>`,
      dolceCapsule: `<p><strong>5. 放入膠囊</strong></p><ul><li>抬起正面的銀色把手，將膠囊托架向外拉出。</li><li>把膠囊放入托架，推回機身，再把把手壓下。</li></ul>`,
      dolceBrew: `<p><strong>6. 撥動撥桿沖煮</strong></p><ul><li>將撥桿撥向<strong>右側（紅色）</strong>，即可沖出熱飲。</li><li>達到設定的水量後會自動停止，撥桿回到中間。若想中途停止，請用手將撥桿撥回中間。</li><li>將撥桿撥向<strong>左側（藍色）</strong>，會流出水箱內原本溫度的水（本機沒有冷卻功能）。想喝冰飲時，請沖入放有冰塊的杯子。</li></ul>`,
      dolceFinish: `<p><strong>7. 取出膠囊</strong></p><ul><li>請等到電源鍵由紅燈閃爍變為<strong>綠燈恆亮</strong>（約5秒）。</li><li>抬起把手，取出托架，丟棄用過的膠囊。</li><li>用水沖洗托架後裝回機身，並壓下把手。</li></ul><p><strong>注意：</strong><strong>電源鍵紅燈閃爍時，請絕對不要抬起把手</strong>（熱水可能噴出）。剛沖煮完的膠囊很燙，請勿用手觸摸。約5分鐘未操作，電源會自動關閉。</p>`,
      riceCooker: ``,
      washer: `<p>具備洗衣與烘乾功能。</p>`,
      wire: `<p>房內設有曬衣繩，可用來晾曬衣物。</p>`,
      circulator: `<p>由於天花板較高，冷空氣容易堆積在下方、暖空氣則聚集在上方。若感覺冷氣效果不佳，可開啟循環扇幫助空氣循環。</p>`,
      iron: `<p>浴室層架上備有蒸氣熨斗，使用時請搭配浴室內的燙衣板。</p>`
    },
    garbage: {
      body: `<p>垃圾桶滿了或退房時，請將分類好的垃圾放入房外的垃圾置放處。只要有確實分類，放入哪一個垃圾桶皆可。</p>`
    },
    rules: {
      important: `<p><strong>重要提醒：</strong>若房間未保持在應有的整潔狀態、需要額外的清潔時間，將酌收20,000日圓的額外清潔費。</p>`,
      packages: `<p>由於本住宿無現場工作人員，恕無法於入住前代收包裹。入住期間收取包裹則沒有問題。</p>`,
      prohibitedTitle: `禁止事項（違反者可能需支付額外費用）`,
      prohibitedList: `<ul><li>穿鞋進入室內</li><li>吸菸（房間內及整棟建築範圍皆全面禁菸）</li><li>過度飲酒</li><li>晚上9點後或深夜製造噪音</li><li>攜入或留宿未登記的訪客</li><li>造成鄰居困擾</li><li>遺失鑰匙（若使用實體鑰匙）</li><li>故意損壞房間或設備，或未通報損壞情況</li></ul><p>違反上述規定，將收取15,000日圓的違約金，並需負擔實際損害費用。</p>`
    },
    nearby: {
      intro: `<p>以下為從JR鶴見站及從本住宿出發的步行時間。</p><ul><li><strong>全家便利商店 鶴見西口店</strong>（24小時）— 距JR鶴見站2分鐘／距本住宿8分鐘</li><li><strong>羅森 鶴見站西口店</strong>（24小時）— 距JR鶴見站1分鐘／距本住宿9分鐘</li><li><strong>7-Eleven 橫濱豐岡町中央店</strong>（24小時）— 距JR鶴見站2分鐘／距本住宿9分鐘</li><li><strong>SEIYU超市 鶴見店</strong>（9:00〜23:00）— 距JR鶴見站2分鐘／距本住宿9分鐘</li><li><strong>京急超市 鶴見西口店</strong>（平日10:00〜23:00，假日10:00〜21:00）— 距JR鶴見站1分鐘／距本住宿10分鐘</li></ul>`
    },
    parking: {
      intro: `<p>以下為鄰近的投幣式停車場（皆位於車站往本住宿的上坡路段）。點選地址即可開啟Google地圖。費用可能調整，請以現場告示為準。</p><ul><li><strong>Times鶴見寺谷第3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">鶴見區寺谷2-6</a>。步行4分鐘（290公尺）。220日圓/30分。最高1,000日圓/24小時，19:00〜8:00最高440日圓（最長可停48小時）。</li><li><strong>Shinkou Park鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">寺谷2-1-21</a>。步行4分鐘（290公尺）。200日圓/30分。9:00〜18:00最高900日圓，18:00〜9:00最高400日圓。</li><li><strong>Times鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">寺谷1-3</a>。步行4分鐘（350公尺）。200日圓/20分。最高1,200日圓/24小時，19:00〜8:00最高500日圓。</li><li><strong>Time Parking鶴見</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">鶴見2-3-45</a>。步行4分鐘（230公尺），有陡峭樓梯。8:00〜20:00：300日圓/30分，最高1,200日圓/12小時。20:00〜8:00：100日圓/1小時，最高400日圓/12小時。</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>玄關電子鎖無法使用時：</strong>玄關旁有一個放置備用鑰匙的盒子。若電子鎖故障，請透過Airbnb聊天室聯絡我們，我們會提供盒子的密碼。</p>`,
      hotwater: `<p><strong>淋浴間沒有熱水時：</strong>請按下熱水控制面板左上方的電源按鈕。若電源按鈕的綠燈亮起，即使沒有顯示數字，熱水仍在供應中。</p>`,
      power: `<p><strong>停電時：</strong>電源總開關位於玄關處，請打開蓋子並將開關往上扳起。</p>`,
      lostFound: `<p><strong>遺失物品時：</strong>請透過訂房平台傳訊息聯絡我們，清潔人員會協助確認，若尋獲會以貨到付款方式為您寄送。退房後3天內若未收到您的聯絡，遺失物將不另行通知逕行處理。雨傘、毛巾等低價值物品將不另行通知直接處理。</p>`
    },
    emergency: {
      numbers: `<p><strong>救護車・火警：</strong>119<br><strong>警察：</strong>110</p>`,
      addressToTell: `<p>如需報案或求助，請告知這個住址：</p>`,
      evacuation: `<p><strong>避難地點</strong>（地震、水災、土石流）：豐岡小學（横浜市鶴見区豊岡町27-1）— 步行約11分鐘</p>`,
      hostContact: `<p>其他事宜請透過Airbnb訊息聯絡房東。</p>`
    }
  },

  ko: {
    meta: { name: '한국어' },
    common: {
      brand: `YOKOHAMA Still Retreat`,
      tagline: `요코하마 쓰루미의 조용한 은신처`,
      addressLocal: `일본 우편번호 230-0015 가나가와현 요코하마시 쓰루미구 데라야 1-7-40 레이즈 데라야`,
      addressJaLabel: `일본어 주소 (택시 기사님께 보여주세요)`,
      copy: `복사`,
      copied: `복사했습니다`,
      openMaps: `구글 지도에서 열기`,
      changeRoom: `객실 변경`,
      room: `객실`,
      photoPending: `사진 준비 중`,
      pendingInfo: `이 정보는 아직 준비 중입니다. Airbnb 메시지로 호스트에게 문의해 주시면 바로 답변드리겠습니다.`,
      ssid5: `5GHz 네트워크 이름 (SSID)`,
      ssid24: `2.4GHz 네트워크 이름 (SSID)`,
      password: `비밀번호`,
      side: { left: `왼쪽`, right: `오른쪽` },
      backHome: `홈으로 돌아가기`
    },
    nav: { home: `홈`, wifi: `Wi-Fi`, checkout: `체크인`, emergency: `긴급` },
    home: {
      greeting: `YOKOHAMA Still Retreat에 오신 것을 환영합니다`,
      subtitle: `요코하마 쓰루미에서 조용하고 편안한 시간을 보내시길 바랍니다.`,
      quickTitle: `자주 찾는 정보`,
      menuTitle: `전체 메뉴`
    },
    roomselect: {
      title: `어느 객실에 머무르시나요?`,
      subtitle: `객실을 선택하시면 해당 객실 전용 안내를 확인하실 수 있습니다.`
    },
    menu: {
      translation: `번역 도구`,
      access: `오시는 길`,
      checkin: `체크인 · 체크아웃`,
      wifi: `Wi-Fi`,
      appliances: `가전・시설`,
      garbage: `쓰레기 배출 방법`,
      rules: `하우스 룰・금지 사항`,
      nearby: `주변 편의시설`,
      parking: `코인 주차장`,
      trouble: `문제 해결`,
      emergency: `긴급 연락처・대피 장소`
    },
    translation: {
      intro: `<p>체류 중에는 <strong>구글 렌즈</strong>를 이용한 실시간 번역을 추천드립니다. 카메라를 텍스트에 비추기만 하면 바로 번역해 줍니다.</p><ul><li>구글 앱 설치</li><li>구글 렌즈 아이콘 탭</li><li><strong>'번역'</strong> 탭</li><li>번역하고 싶은 글자에 카메라를 비추기</li></ul>`
    },
    access: {
      mapIntro: `<p>아래 주소를 탭하면 구글 지도가 열립니다.</p>`,
      haneda: `<p><strong>하네다 공항</strong>에서 전철로 게이큐 쓰루미역까지 약 20분. 게이큐 쓰루미역에서 숙소까지는 도보 약 18분입니다.</p>`,
      narita: `<p><strong>나리타 공항</strong>에서 전철로 JR 쓰루미역까지 약 90분. JR 쓰루미역에서 숙소까지는 도보 약 12분입니다.</p>`,
      taxi: `<p>택시를 이용하실 경우 아래 주소를 기사님께 보여주세요.</p><ul><li>하네다 공항에서: 약 30분, 약 6,000〜7,000엔</li><li>JR 쓰루미역에서: 약 3분, 약 500엔</li><li>22시〜다음날 5시에는 심야 할증(20%)이 적용됩니다</li></ul><p><strong>중요:</strong> 지도에 빨간 원으로 표시된 지점에서 우회전하도록 기사님께 말씀해 주세요. 그대로 큰길을 직진하면 건물까지 계단을 올라가야 합니다.</p>`,
      taxiStandKeikyu: `<p><strong>게이큐 쓰루미역 택시 승강장:</strong> 서쪽 출구로 나와 왼쪽으로 돌아 계단을 내려가면 'TAXI' 표지판이 보입니다.</p>`,
      taxiStandJR: `<p><strong>JR 쓰루미역 택시 승강장:</strong> 계단 아래 횡단보도를 건너 왼쪽으로 돌면 'TAXI' 표지판이 보입니다.</p>`,
      exterior: `<p>건물 외관입니다.</p>`
    },
    checkin: {
      intro: `<p>상주 직원이 없는 셀프 체크인 숙소입니다. 아래 절차를 미리 확인해 주세요.</p>`,
      times: `<p><strong>체크인:</strong> 16:00부터<br><strong>체크아웃:</strong> 10:00까지</p><p>청소 스태프가 10:10에 도착하므로 10:00까지 퇴실해 주세요. 10:00 이후 체크아웃 시 추가 숙박 요금이 발생할 수 있습니다.</p>`,
      steps: `<p>객실은 <strong>{room}호</strong>, {floor}층입니다. 출입문은 전자 잠금장치입니다.</p><ul><li>비밀번호를 입력하고 잠금 해제 버튼을 눌러주세요 (비밀번호는 체크인 당일 아침에 Airbnb 메시지로 전달드립니다).</li></ul>`,
      stepsLock: `<p>외출 시와 체크아웃 시에는 반드시 문을 잠가주세요.</p>`,
      keybox: `<p>전자 잠금장치가 작동하지 않을 경우, 키박스에서 열쇠를 꺼내 사용하실 수 있습니다. 키박스는 문 <strong>{keyboxSide}편</strong>의 가스 계량기 쪽에 있습니다. 키박스는 두 개가 있으며 어느 쪽을 사용하셔도 됩니다. 키박스 비밀번호는 전자 잠금장치와 동일합니다.</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `QR코드를 스캔하시거나 아래 정보를 직접 입력해 주세요.`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `에어컨`, induction: `인덕션 쿡탑`, microwave: `전자레인지`, kettle: `전기 주전자`, coffee: `드립 커피`, ricecooker: `전기밥솥`, washer: `세탁기`, wire: `실내 빨랫줄`, circulator: `서큘레이터`, iron: `스팀다리미`, dolcegusto: `캡슐 커피 머신（네스카페 돌체구스토 지니오 2）` },
      ac: `<p>제공된 리모컨으로 작동하세요.</p>`,
      induction: `<p>주방에 있습니다.</p>`,
      microwave: ``,
      microwaveWattage: `<p>출력: 200W(해동) / 500W・700W(데우기). 안쪽 다이얼은 시간, 바깥쪽 다이얼은 해동할 중량을 설정합니다.</p>`,
      kettle: `<p>물이 끓으면 손잡이를 제외한 본체도 뜨거워지니 주의해 주세요.</p>`,
      coffee: `<p>주방에 드립백 거치대가 있습니다. 드립 커피를 즐겨보세요!</p>`,
      dolceIntro: `<p>전용 캡슐을 넣고 레버를 밀기만 하면 커피를 한 잔씩 만들 수 있습니다. 아래 1~7 순서대로 사용해 주세요.</p>`,
      dolceWater: `<p><strong>1. 물 넣기</strong></p><ul><li>본체 뒤쪽의 물탱크를 분리해 수돗물을 넣습니다. <strong>「MAX」 선을 넘지 않도록</strong> 넣어 주세요.</li><li>물탱크를 본체에 다시 끼웁니다.</li><li>뜨거운 물, 우유 등 물 이외의 것은 넣지 마세요.</li></ul>`,
      dolcePower: `<p><strong>2. 전원 켜기</strong></p><ul><li>플러그를 콘센트에 꽂고 본체 위쪽의 전원 버튼을 누릅니다.</li><li>버튼이 <strong>빨간색으로 깜빡이는</strong> 동안은 예열 중입니다（약 30초）. <strong>초록색으로 켜지면</strong> 사용할 수 있습니다.</li></ul>`,
      dolceCup: `<p><strong>3. 컵 놓기</strong></p><ul><li>추출구 아래 받침대에 컵을 놓습니다.</li></ul>`,
      dolceLevel: `<p><strong>4. 눈금 맞추기</strong></p><ul><li>캡슐 뚜껑에 줄의 개수로 <strong>눈금</strong>이 표시되어 있습니다.</li><li>본체 위쪽의 작은 레버를 <strong>위아래</strong>로 움직여, 초록색 램프의 개수를 캡슐의 눈금과 같게 맞춥니다.</li></ul>`,
      dolceCapsule: `<p><strong>5. 캡슐 넣기</strong></p><ul><li>앞쪽의 은색 손잡이를 올리고 캡슐 홀더를 앞으로 빼냅니다.</li><li>홀더에 캡슐을 넣어 본체에 다시 끼우고 손잡이를 내립니다.</li></ul>`,
      dolceBrew: `<p><strong>6. 레버를 밀어 추출하기</strong></p><ul><li>레버를 <strong>오른쪽（빨간색）</strong>으로 밀면 따뜻한 음료가 나옵니다.</li><li>설정한 양이 나오면 자동으로 멈추고 레버가 가운데로 돌아옵니다. 중간에 멈추려면 손으로 레버를 가운데로 되돌려 주세요.</li><li>레버를 <strong>왼쪽（파란색）</strong>으로 밀면 물탱크의 물이 그대로의 온도로 나옵니다（냉각 기능은 없습니다）. 차가운 음료는 얼음을 넣은 컵에 추출해 주세요.</li></ul>`,
      dolceFinish: `<p><strong>7. 캡슐 버리기</strong></p><ul><li>전원 버튼이 빨간색 깜빡임에서 <strong>초록색 점등</strong>으로 바뀔 때까지 기다립니다（약 5초）.</li><li>손잡이를 올리고 홀더를 꺼내 사용한 캡슐을 버립니다.</li><li>홀더를 물로 헹군 뒤 본체에 다시 끼우고 손잡이를 내립니다.</li></ul><p><strong>주의:</strong> <strong>전원 버튼이 빨간색으로 깜빡이는 동안에는 절대로 손잡이를 올리지 마세요</strong>（뜨거운 물이 뿜어져 나올 수 있습니다）. 추출 직후의 캡슐은 뜨거우니 손으로 만지지 마세요. 약 5분간 조작하지 않으면 전원이 자동으로 꺼집니다.</p>`,
      riceCooker: ``,
      washer: `<p>세탁・건조 기능이 있습니다.</p>`,
      wire: `<p>객실 내에 빨래를 널 수 있는 빨랫줄이 있습니다.</p>`,
      circulator: `<p>천장이 높아 찬 공기는 아래로, 따뜻한 공기는 위로 모이기 쉽습니다. 에어컨 효과가 약하게 느껴지면 서큘레이터로 공기를 순환시켜 주세요.</p>`,
      iron: `<p>욕실 선반에 스팀다리미가 있습니다. 사용하실 때는 욕실 내 다리미판을 이용해 주세요.</p>`
    },
    garbage: {
      body: `<p>쓰레기통이 가득 찼을 때나 체크아웃 시에는 분리수거한 쓰레기를 객실 밖 쓰레기 보관함에 넣어주세요. 분리수거만 되어 있다면 어느 용기에 넣으셔도 괜찮습니다.</p>`
    },
    rules: {
      important: `<p><strong>중요:</strong> 객실이 적절히 정돈되지 않아 평소보다 청소 시간이 더 필요한 경우, 추가 청소비 20,000엔이 청구됩니다.</p>`,
      packages: `<p>본 숙소는 상주 직원이 없어 체크인 전 택배 수령이 불가합니다. 숙박 중 택배 수령은 문제없습니다.</p>`,
      prohibitedTitle: `금지 사항 (위반 시 추가 요금이 발생할 수 있습니다)`,
      prohibitedList: `<ul><li>실내에서 신발을 신는 행위</li><li>흡연 (객실 내 및 부지 전체 전면 금연)</li><li>과도한 음주</li><li>밤 9시 이후 또는 심야 시간대의 소음</li><li>예약자로 등록되지 않은 인원의 출입 또는 숙박</li><li>이웃에게 피해를 주는 행위</li><li>열쇠 분실 (실물 열쇠를 사용한 경우)</li><li>객실 또는 시설의 고의적인 파손, 또는 파손 사실을 알리지 않는 행위</li></ul><p>위 사항을 위반할 경우 위약금 15,000엔과 실제 손해 비용이 청구됩니다.</p>`
    },
    nearby: {
      intro: `<p>아래는 JR 쓰루미역, 그리고 숙소로부터의 도보 시간입니다.</p><ul><li><strong>훼미리마트 쓰루미니시구치점</strong> (24시간) — JR 쓰루미역에서 2분 / 숙소에서 8분</li><li><strong>로손 쓰루미역니시구치점</strong> (24시간) — JR 쓰루미역에서 1분 / 숙소에서 9분</li><li><strong>세븐일레븐 요코하마 도요오카초 주오점</strong> (24시간) — JR 쓰루미역에서 2분 / 숙소에서 9분</li><li><strong>슈퍼마켓 세이유 쓰루미점</strong> (9:00〜23:00) — JR 쓰루미역에서 2분 / 숙소에서 9분</li><li><strong>슈퍼마켓 게이큐스토어 쓰루미니시점</strong> (평일 10:00〜23:00, 휴일 10:00〜21:00) — JR 쓰루미역에서 1분 / 숙소에서 10분</li></ul>`
    },
    parking: {
      intro: `<p>가장 가까운 코인 주차장은 다음과 같습니다 (모두 역에서 숙소로 가는 오르막길에 위치). 주소를 누르면 Google 지도가 열립니다. 요금은 변경될 수 있으니 현장 안내판을 확인해 주세요.</p><ul><li><strong>타임즈 쓰루미데라야 제3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">쓰루미구 데라야2-6</a>. 도보 4분(290m). 220엔/30분. 최대 1,000엔/24시간, 19:00〜8:00는 최대 440엔(최대 48시간 주차 가능).</li><li><strong>신코파크 쓰루미데라야</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">데라야2-1-21</a>. 도보 4분(290m). 200엔/30분. 9:00〜18:00는 최대 900엔, 18:00〜9:00는 최대 400엔.</li><li><strong>타임즈 쓰루미데라야</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">데라야1-3</a>. 도보 4분(350m). 200엔/20분. 최대 1,200엔/24시간, 19:00〜8:00는 최대 500엔.</li><li><strong>타임파킹 쓰루미</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">쓰루미2-3-45</a>. 도보 4분(230m), 가파른 계단 있음. 8:00〜20:00: 300엔/30분 최대 1,200엔/12시간. 20:00〜8:00: 100엔/1시간 최대 400엔/12시간.</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>현관 키패드가 작동하지 않을 때:</strong> 현관 옆에 여분의 열쇠가 들어있는 박스가 있습니다. 키패드가 작동하지 않으면 Airbnb 채팅으로 연락해 주세요. 박스의 비밀번호를 보내드립니다.</p>`,
      hotwater: `<p><strong>샤워실에 온수가 나오지 않을 때:</strong> 온수 조절판 왼쪽 위의 전원 버튼을 눌러주세요. 전원 버튼의 초록 불이 켜져 있으면 숫자가 표시되지 않아도 온수가 공급되고 있는 것입니다.</p>`,
      power: `<p><strong>정전 시:</strong> 차단기는 현관에 있습니다. 덮개를 열고 스위치 막대를 위로 올려주세요.</p>`,
      lostFound: `<p><strong>분실물이 있을 때:</strong> 예약 플랫폼 메시지로 연락해 주세요. 청소 스태프가 확인하며, 발견 시 착불로 보내드립니다. 체크아웃 후 3일 이내에 연락이 없을 경우 분실물은 예고 없이 처분됩니다. 우산, 수건 등 저가 물품은 예고 없이 처분됩니다.</p>`
    },
    emergency: {
      numbers: `<p><strong>구급・화재:</strong> 119<br><strong>경찰:</strong> 110</p>`,
      addressToTell: `<p>도움을 요청하실 때는 이 주소를 알려주세요.</p>`,
      evacuation: `<p><strong>대피 장소</strong> (지진・홍수・산사태): 도요오카 초등학교(豊岡小学校), 요코하마시 쓰루미구 도요오카초 27-1 — 도보 약 11분</p>`,
      hostContact: `<p>그 외 문의사항은 Airbnb 메시지로 호스트에게 연락해 주세요.</p>`
    }
  }
};
