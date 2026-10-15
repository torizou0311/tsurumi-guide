// 5か国語の文章はすべてこのファイルにまとまっています。
// 文章を直したいときは、ここだけを直せばOKです（建物共通の文章は1回書くだけで、
// 103・201・202のどの部屋のページにも反映されます）。
//
// {room} {floor} {keyboxSide} などの { } で囲まれた部分は、表示するときに
// 自動で部屋ごとの値に置き換わります（js/app.js が置き換えます）。
// 「運転手さんへ」ページ（#/taxi）の日本語。運転手さんに見せる部分なので、どの言語でも同じ日本語を使う
var TAXI_JA = {
  card: `<div class="taxi-card" lang="ja"><p class="taxi-card__title">運転手さんへ</p><p class="taxi-card__dest"><span class="taxi-card__label">行き先</span>横浜市鶴見区寺谷1-7-40（レイズ寺谷）</p><p>鶴見獅子ヶ谷通りを上り、<strong>On cuesta（オンクエスタ、ピンクの建物）</strong>の信号を過ぎてすぐ右。<strong>白いマンションと茶色いマンションの間の細い上り坂</strong>に入ってください（入口は見落としやすいです）。</p><p>道なりに<strong>約300m</strong>、突き当たりの広い場所が建物の前です（転回できます）。</p><div class="notice notice--warn taxi-card__warn"><p>⚠ 大通り（鶴見獅子ヶ谷通り）では降ろさないでください。下からは急な階段になります。</p></div></div>`,
  p1: `<p class="taxi-photo-cap" lang="ja">① 大通りを上ってくると、右に白いマンション（生垣）、その先に茶色いマンションが見えます。</p>`,
  p2: `<p class="taxi-photo-cap" lang="ja">② 生垣が終わったところで、右へ上がる細い坂に入ります。</p>`,
  p3: `<p class="taxi-photo-cap" lang="ja">③ 細い道を、道なりに約300m進みます。</p>`,
  turn: `<p class="taxi-photo-cap" lang="ja">④ 突き当たりの広い場所が建物の前です。ここで転回して、元の道を戻れます。</p>`,
  map: `<p class="taxi-photo-cap" lang="ja">地図（青い線が行き方、赤い×は降ろさない場所）</p>`
};

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
    nav: { home: `Home`, wifi: `Wi-Fi`, checkout: `Check-in/out`, emergency: `Emergency` },
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
      projector: `Projector`,
      garbage: `Taking Out the Trash`,
      rules: `House Rules`,
      nearby: `Nearby Stores`,
      parking: `Coin Parking`,
      trouble: `If Something Goes Wrong`,
      emergency: `Emergency Contacts & Evacuation`,
      taxi: `Show to Your Taxi Driver`
    },
    taxi: {
      intro: `<p class="taxi-lead">Show this screen to your taxi driver.</p>`,
      card: TAXI_JA.card,
      p1: TAXI_JA.p1,
      p2: TAXI_JA.p2,
      p3: TAXI_JA.p3,
      turn: TAXI_JA.turn,
      map: TAXI_JA.map
    },
    translation: {
      intro: `<p>We recommend <strong>Google Lens</strong> for real-time translation during your stay — just point your camera at any text and it will translate it for you.</p><ul><li>Install the Google app</li><li>Tap the Google Lens icon</li><li>Tap <strong>Translate</strong></li><li>Point your camera at the text you want to translate</li></ul>`
    },
    access: {
      mapIntro: `<p>Tap the address below to open it in Google Maps.</p>`,
      haneda: `<p><strong>From Haneda Airport</strong> (no transfers, about 40 minutes)</p><ol class="route"><li class="route__stop">Haneda Airport<span class="route__ja">羽田空港</span></li><li class="route__ride"><span class="route__line route__line--keikyu">Keikyu Airport Line</span>Take the <strong>Express</strong> bound for Zushi-Hayama (no transfer)<span class="route__time">about 20 min</span><span class="route__note">Please take an "Express" (急行) or "Local" (普通) train. "Limited Express" and "Express Limited" trains do not stop at Keikyu Tsurumi.</span></li><li class="route__stop">Keikyu Tsurumi<span class="route__ja">京急鶴見</span></li><li class="route__walk">Walk <span class="route__time">about 17 min</span><span class="route__note">After the ticket gate, cross the pedestrian bridge over JR Tsurumi Station and head to the west side. There is a gentle uphill slope.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=%E4%BA%AC%E6%80%A5%E9%B6%B4%E8%A6%8B%E9%A7%85&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Walking directions in Google Maps</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Haneda%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>Check current transfers in Google Maps</span></a>`,
      narita: `<p><strong>From Narita Airport</strong> there are two routes (both take about 1 hour 40 minutes to 2 hours).</p>`,
      naritaA: `<p><strong>Route A: Keisei Skyliner + JR</strong> (fastest)</p><ol class="route"><li class="route__stop">Narita Airport<span class="route__ja">成田空港</span></li><li class="route__ride"><span class="route__line route__line--skyliner">Keisei Skyliner</span>To Nippori<span class="route__time">about 40 min</span><span class="route__note">All seats are reserved.</span></li><li class="route__stop">Nippori<span class="route__ja">日暮里</span><span class="route__note">Transfer to JR</span></li><li class="route__ride"><span class="route__line route__line--jr">JR Keihin-Tohoku Line</span>Bound for Ofuna / Isogo<span class="route__time">about 45 min</span></li><li class="route__stop">JR Tsurumi<span class="route__ja">JR鶴見</span></li><li class="route__walk">Walk <span class="route__time">about 11 min</span><span class="route__note">Leave by the West Exit and continue. The road is almost flat.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Walking directions in Google Maps</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol>`,
      naritaB: `<p><strong>Route B: JR Narita Express</strong> (fewer transfers, with space for large luggage)</p><ol class="route"><li class="route__stop">Narita Airport<span class="route__ja">成田空港</span></li><li class="route__ride"><span class="route__line route__line--nex">JR Narita Express</span>To Yokohama<span class="route__time">about 1 hr 30 min</span><span class="route__note">All seats are reserved. Only some trains, such as those bound for Ofuna, stop at Yokohama. If your train does not stop at Yokohama, get off at Shinagawa and transfer to the Keihin-Tohoku Line bound for Ofuna.</span></li><li class="route__stop">Yokohama<span class="route__ja">横浜</span><span class="route__note">Transfer</span></li><li class="route__ride"><span class="route__line route__line--jr">JR Keihin-Tohoku Line</span>Bound for Tokyo / Omiya<span class="route__time">about 10 min</span></li><li class="route__stop">JR Tsurumi<span class="route__ja">JR鶴見</span></li><li class="route__walk">Walk <span class="route__time">about 11 min (West Exit)</span><span class="route__note">Leave by the West Exit and continue. The road is almost flat.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Walking directions in Google Maps</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Narita%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>Check current transfers in Google Maps</span></a>`,
      taxi: `<p>By taxi, please show the driver the address below.</p><ul><li>From Haneda Airport: about 30 minutes, approximately ¥6,000–7,000</li><li>From JR Tsurumi Station: about 3 minutes, approximately ¥500</li><li>A 20% late-night surcharge applies between 10:00 PM and 5:00 AM</li></ul><p><strong>Important:</strong> the building is on a narrow side street off the main road, and drivers often miss the entrance. Once you are in the taxi, please show the driver <a href="#/taxi">this screen for taxi drivers</a>.</p>`,
      taxiStandKeikyu: `<p><strong>Taxi stand at Keikyu-Tsurumi Station:</strong> go to the West Exit, turn left, and go down the stairs — you will see the TAXI sign.</p>`,
      taxiStandJR: `<p><strong>Taxi stand at JR Tsurumi Station:</strong> cross the crosswalk at the bottom of the stairs and turn left — you will see the TAXI sign.</p>`,
      exterior: `<p>The building, seen from outside.</p>`
    },
    checkin: {
      intro: `<p>This is a self check-in property with no staff on site, so please review the steps below in advance.</p>`,
      times: `<p><strong>Check-in:</strong> from 4:00 PM<br><strong>Check-out:</strong> until 10:00 AM</p><p>Our cleaning staff arrive at 10:10 AM, so please vacate the room by 10:00 AM. Checking out later than 10:00 AM may result in an additional night's fee.</p>`,
      checkout: `<p><strong>Before you check out (by 10:00 AM)</strong></p><ul><li>If you used the spare pillows or futons from the closet, please do not put them back in the closet. Leave them in the living room.</li><li>Please put used towels in the washing machine basket.</li><li>You can leave your trash in the room (<a href="#/garbage">How to dispose of trash</a>).</li><li>If you used the key from the key box, please put it back in the key box.</li><li>When you leave, please lock the door by pressing the <strong>lock mark</strong> on the electronic lock.</li></ul>`,
      checkoutProjector: `<p>If you logged in to YouTube, Netflix, etc. on the Room 201 projector, be sure to log out (<a href="#/projector/logout">How to log out</a>).</p>`,
      steps: `<p>Your room is <strong>Room {room}</strong>, on floor {floor}. The door has an electronic lock.</p><ul><li>Enter the passcode and press the unlock button. (The passcode is sent via Airbnb message on the morning of your check-in day.)</li><li><strong>Press the buttons slowly and firmly.</strong> If you tap the unlock button too quickly, the door may not open. Hold it down a little longer and it will open right away.</li></ul>`,
      stepsLock: `<p>Please lock the door whenever you go out, and again at check-out.</p>`,
      keybox: `<p>If the electronic lock does not work, you can take the key from the key box and use it instead. The key box is at the gas meter on the <strong>{keyboxSide}</strong> side of the door. There are two key boxes — either one will work. The key box code is the same as the electronic lock passcode.</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `Scan the QR code, or enter the details below.`,
      tip: `Not sure which to choose? Connect to <strong>5GHz (name ends with "-A")</strong>. If it won't connect or the signal is weak, try <strong>2.4GHz (name ends with "-G")</strong>.`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `Air conditioner`, induction: `Induction cooktop`, microwave: `Microwave`, kettle: `Electric kettle`, coffee: `Drip coffee`, ricecooker: `Rice cooker`, washer: `Washing machine`, wire: `Indoor drying wire`, circulator: `Air circulator`, iron: `Steam iron`, dolcegusto: `Capsule coffee machine (Nescafé Dolce Gusto Genio 2)` },
      ac: `<p>Operate using the remote control provided.</p>`,
      induction: `<p>In the kitchen. The picture below shows the control panel.</p>`,
      inductionSteps: `<p><strong>How to use</strong></p><ul><li>Place a pan in the centre of the cooktop (it will not heat without a pan).</li><li><strong>① Power:</strong> press and hold for at least 2 seconds.</li><li><strong>② Heating ON / OFF:</strong> press it, then press <strong>③ ◀ or ▶</strong> to start heating.</li><li>Use ◀ ▶ to adjust the heat (5 levels: 弱 = low, 1, 2, 3, 強 = high).</li><li>When finished, press “Heating ON / OFF” to stop, then press “Power” to switch off.</li></ul><p><strong>Suitable pans:</strong> flat-bottomed pans that a magnet sticks to, such as iron or stainless steel (base about 12–24 cm across). Clay pots, glass, aluminium and copper pans do not work. If all the heat-level lamps blink and nothing heats, the pan is unsuitable or not in the centre.</p><p><strong>Caution:</strong> the cooktop stays hot after use. Do not touch it until the “Hot surface” lamp (高温注意) goes off. Do not leave it unattended while cooking.</p>`,
      microwave: ``,
      microwaveIris: `<p><strong>Quickest way</strong></p><ul><li>Put the food in, close the door and press <strong>③ Start (あたためスタート)</strong>. It heats for 30 seconds at 500 W. Each extra press adds 30 seconds (up to 5 minutes).</li></ul><p><strong>To set the time yourself</strong></p><ul><li><strong>① Power (レンジ):</strong> press once for 500 W (press again for 200 W).</li><li><strong>② Time:</strong> press +1 min (1分) and +10 sec (10秒) to set the time.</li><li><strong>③ Start (あたためスタート):</strong> press it.</li><li>To stop midway, press Cancel (とりけし).</li></ul><p><strong>Other buttons</strong></p><ul><li>Drink (飲み物): press once for 1 cup, twice for 2 cups, then press Start.</li><li>Rice (ごはん): press it, then press Start.</li><li>Defrost (解凍): press it, set the weight (100–500 g) with the 1分/100g and 10秒/10g buttons, then press Start.</li></ul>`,
      microwaveNitori: `<p><strong>How to use</strong></p><ul><li>Place the food in the centre and close the door.</li><li><strong>① Upper dial (power):</strong> set it to 500W for normal heating, or 200W for defrosting.</li><li><strong>② Lower dial (timer):</strong> turn it to the right to set the time. Heating starts automatically about 3 seconds later (there is no start button).</li><li>To stop midway, turn the lower dial back to 切 (OFF) or open the door.</li><li>It beeps three times when finished.</li></ul><p>On the timer, the first marks “20” and “40” are seconds; from “1” onward they are minutes. Choose the power before setting the time (it cannot be changed afterwards).</p>`,
      microwaveCaution: `<p><strong>Caution:</strong> do not use metal containers, aluminium foil, or dishes with gold or silver decoration. Do not heat eggs in the shell or boiled eggs, sealed containers, cans or retort pouches as they are. Do not run the microwave empty.</p>`,
      kettle: `<p>Please note: once the water boils, the body of the kettle (except the handle) becomes hot too.</p>`,
      kettleNitori: `<p><strong>How to use</strong></p><ul><li>Lift the kettle off its base.</li><li><strong>①</strong> Turn the lid until its mark lines up with the open-padlock symbol, then lift the lid off.</li><li>Fill with water. Do not go above the MAX mark inside (about 0.8 L). It also needs at least 150 mL.</li><li>Put the lid back and turn it until the mark lines up with the closed-padlock symbol. Place the kettle back on the base.</li><li><strong>②</strong> Push the power switch down to ON. The lamp lights up.</li><li>When the water boils, the switch pops back up by itself and the lamp goes off.</li></ul><p>A full kettle (0.8 L) boils in about 5 minutes; one cup (0.15 L) in about a minute and a half.</p><p><strong>Caution:</strong> if the lid is not closed firmly, the kettle may not switch off when it boils. Do not open the lid while it is heating or just after boiling, and keep away from the steam at the spout. Do not put anything other than water in the kettle.</p>`,
      kettleIris: `<p><strong>How to use</strong></p><ul><li>Lift the kettle off its base, take off the lid and fill with water between the MIN and MAX lines inside (0.3–0.6 L).</li><li>Close the lid firmly and place the kettle back on the base.</li><li><strong>① Power:</strong> press the power button.</li><li><strong>② MODE:</strong> press to choose the temperature — 100℃ (boil) / Coffee (90℃) / Green Tea (70℃).</li><li><strong>③ START:</strong> press it. When ready, it beeps three times and stops by itself.</li><li>To stop midway, press START again.</li></ul><p>The − and + buttons change the temperature in 5℃ steps between 60 and 100℃. Pressing KEEP WARM after heating keeps the water warm for up to 1 hour.</p><p><strong>Caution:</strong> do not open the lid while it is heating or just after boiling. The metal body gets hot, so hold it by the handle. Do not put anything other than water in the kettle.</p>`,
      coffee: `<p>There is a <strong>coffee drip bag stand</strong> in the kitchen. Enjoy a cup of drip coffee!</p>`,
      riceCooker: ``,
      washer: `<p>A front-loading washer-dryer that can wash and dry in one go (up to 7 kg for washing, 3.5 kg for drying). Drying also uses water, so please leave the tap connected to the machine open.</p>`,
      washerSteps: `<p><strong>How to use</strong></p><ul><li>Put the laundry deep inside the drum and close the door firmly.</li><li><strong>① Power:</strong> press 入 (ON).</li><li><strong>② Course (コース):</strong> press until the lamp for <strong>標準</strong> (Standard) lights up. Standard is fine for everyday laundry.</li><li><strong>③ Wash / dry mode (運転切換):</strong> press to choose.<br>洗濯 = wash only<br>洗～乾 = wash and dry<br>乾燥 = dry only</li><li><strong>④ Start (スタート):</strong> press it.</li><li>The display shows the suggested amount of detergent (e.g. 0.5 = half a cap) for about 20 seconds. Add the detergent now — it is not added automatically.</li><li>The power switches off automatically when finished. The time left is shown on the display next to 残り.</li></ul><p><strong>Other course lamps:</strong> 時短 = quick wash, 部屋干し = for indoor drying, 毛布 = blankets, 槽洗浄 = drum cleaning (no laundry), おうち流 = custom. <strong>Other mode lamp:</strong> 除菌・消臭 = deodorize without water.</p>`,
      washerDetergent: `<p><strong>Adding detergent</strong></p><ul><li>Pull out the detergent drawer at the top left of the machine.</li><li>Put detergent in the large section at the back (powder in the middle, liquid on the right).</li><li>Fabric softener goes in the small compartment at the front left (marked 柔軟剤), up to the 満量 (max) line.</li><li>Detergent pods go directly into the drum, not into the drawer.</li></ul>`,
      washerAdjust: `<p><strong>To change times or cycles</strong></p><p>Press Wash (洗い), Rinse (すすぎ), Spin (脱水) or Dry (乾かす), then adjust with ∨ ∧. You normally do not need to change anything.</p>`,
      washerNotes: `<p><strong>Please note</strong></p><ul><li>The door locks while the machine is running. To open it midway, press Start / Pause (スタート／一時停止) to pause, then press Unlock (ロック解除).</li><li>The drum is hot after drying. After you press Unlock (ロック解除), it can take 10–20 minutes to cool down before the door opens.</li><li>When drying, load no more than half of a full wash load (3.5 kg). If it is too full, the laundry will not dry.</li><li>Holding Unlock (ロック解除) for 3 seconds or more turns on the child lock (the display shows “L”) and the door will not open. Hold it for 3 seconds again to release.</li></ul>`,
      wire: `<p>A drying wire is provided in the room for hanging laundry.</p>`,
      wireSteps: `<p><strong>How to use</strong></p><ul><li><strong>①</strong> Hold the round knob at the end of the wire and pull the wire out of the white unit on the wall.</li><li><strong>②</strong> Hook the knob into the hole of the plate on the opposite wall.</li><li><strong>③</strong> Turn the round knob on the unit towards LOCK to hold the wire tight.</li></ul><p><strong>To put it away:</strong> turn the knob on the unit the other way to unlock, unhook the end from the plate, and let the wire go back into the unit slowly.</p><p><strong>Caution:</strong> do not hang more than about 20 kg on the wire, and do not pull down or hang on it.</p>`,
      circulator: `<p>The ceilings are high, so cool air tends to settle near the floor while warm air rises. If the air conditioner doesn't feel effective, run the circulator to help circulate the air.</p>`,
      circulatorSteps: `<p><strong>How to use</strong></p><ul><li><strong>① Power (電源 切/入):</strong> press to start; press again to stop.</li><li><strong>② Fan speed (風量):</strong> press &lt; or &gt; to change the strength (5 levels; the strongest is ターボ = turbo).</li><li><strong>③ Swing (首ふり):</strong> each press switches between up-down (上下), left-right (左右), both, and off. The lamps show which is on.</li><li>Off timer (切タイマー): stops automatically after 1, 2 or 4 hours.</li><li>Rhythm (リズム): the strength changes gently, like a natural breeze.</li></ul><p><strong>Caution:</strong> do not move the head by hand. To change the direction, press Swing (首ふり) to let it move, then press again to stop it where you like.</p>`,
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
    projector: {
      titles: { basics: `Power and remote`, youtube: `Watching YouTube`, streaming: `Watching Netflix and Prime Video`, cast: `Showing your phone's screen`, hdmi: `Connecting by HDMI`, speaker: `Using it as a Bluetooth speaker`, logout: `Before you check out`, trouble: `If something doesn't work` },
      intro: `<p>Room 201 has a projector (JMGO PicoPlay+) that shows video on the wall. You can watch YouTube, Netflix, Prime Video and more.</p><div class="notice notice--warn"><p><strong>Please note</strong></p><ul><li>Do not look into the lens; the light is very bright.</li><li>While it is projecting, do not stand the projector on its end directly on a table or shelf. To project vertically, always attach it to the stand provided in the room. The air vent is on the bottom, and if it is blocked the projector overheats and shuts off automatically.</li><li>When someone passes in front of the lens, the picture disappears and only a message saying that eye protection is active is shown. This is not a fault. Move away from the lens and wait a moment, and the picture comes back automatically (or press ③ Back on the remote).</li></ul></div>`,
      basics: `<p>The picture below shows the remote control. The numbers ①–⑬ on this page match the numbers in the picture.</p>`,
      basicsSteps: `<p><strong>Turn on</strong></p><ul><li>Press <strong>① Power</strong> on the remote.</li><li>If it does not turn on, press the power button on the projector itself (see "Power button" in the picture under "Connecting by HDMI" on this page).</li></ul><p><strong>Turn off</strong></p><ul><li>Press <strong>① Power</strong> on the remote.</li></ul><p><strong>How to operate</strong></p><ul><li>Focus and the shape of the picture adjust automatically.</li><li>Use <strong>② Arrow keys</strong> to choose and <strong>⑨ OK</strong> to confirm.</li><li><strong>③ Back</strong> goes back one step.</li><li><strong>⑩ Home</strong> returns to the home screen.</li></ul>`,
      youtube: `<p>Press the <strong>⑥ YouTube</strong> button on the remote. You can watch without logging in.</p><p>If you log in to your own account, be sure to log out before you check out (see <a href="#/projector/logout">Before you check out</a>).</p>`,
      streaming: `<p>Press the <strong>⑦ Netflix</strong> or <strong>⑬ Prime Video</strong> button on the remote and log in with <strong>your own account</strong> (we do not provide an account).</p><p>Be sure to log out before you check out (see <a href="#/projector/logout">Before you check out</a>).</p>`,
      cast: `<p>First, connect your phone to the <strong>5GHz Wi-Fi of this room (the network name ending in "-A")</strong>. It must be the same Wi-Fi as the projector (casting may not work on the network ending in "-G"). The Wi-Fi details are on the <a href="#/wifi">Wi-Fi page</a>.</p><p><strong>Casting from an app</strong></p><ul><li>In apps such as YouTube, Prime Video or Disney+, tap the <strong>Cast icon</strong> and choose <strong>"ysr201"</strong>.</li></ul><p><strong>Mirroring your iPhone screen</strong></p><ul><li>On the projector's home screen, open the <strong>"Screen Casting"</strong> app.</li><li>On your iPhone, open Control Center, tap the <strong>Screen Mirroring</strong> icon, and choose <strong>"ysr201-0101"</strong>.</li></ul><p><strong>Mirroring an Android screen</strong></p><ul><li>You need to install the <strong>"JMGO" app</strong> on your phone. Casting from an app, or connecting by HDMI, is easier.</li></ul><p><strong>Showing vertical videos full-size (Shorts, Reels, etc.)</strong></p><ul><li>Attach the projector to the <strong>stand provided in the room</strong>.</li><li>Mirror your phone screen as described above under "Mirroring" (casting from an app will not switch to vertical).</li><li>Turn the projector 90 degrees so it stands upright, and the picture switches to vertical.</li><li>Never stand the projector directly on a table or shelf without the stand.</li></ul><p><strong>Netflix:</strong> don't cast it from your phone. Use the projector's own Netflix app (the ⑦ button on the remote).</p>`,
      hdmi: `<p>To show video from a laptop or similar, plug an HDMI cable into the HDMI port on the back of the projector ("HDMI" in the picture below).</p><ul><li>If the screen does not switch, press <strong>⑫ Input source</strong> on the remote.</li><li>To return to the projector's home screen, press <strong>⑩ Home</strong>.</li></ul>`,
      speaker: `<p>You can play music from your phone through the projector, with no picture.</p><ul><li><strong>Press and hold the Action button</strong> on the projector (the button with three dots; see the picture under "Connecting by HDMI"). If a menu appears, choose <strong>Bluetooth Speaker（Bluetoothスピーカー）</strong>. The picture stops and the projector becomes a speaker.</li><li>In your phone's Bluetooth settings, choose <strong>"ysr201"</strong> to connect.</li><li>While it is used as a speaker, you may stand the projector upright.</li><li>To go back to the picture, press <strong>③ Back</strong> on the remote, and lay the projector on its side again.</li></ul>`,
      logout: `<div class="notice notice--warn"><p><strong>Please log out before you check out.</strong></p><p>Before you check out, be sure to log out of every app you logged in to (YouTube, Netflix, Prime Video, etc.). If you don't, the next guest can use your account.</p><p>You can log out from the account or settings menu of each app.</p></div>`,
      trouble: `<ul><li><strong>The remote doesn't work:</strong> hold the remote close to the projector and press and hold <strong>③ Back</strong> and <strong>⑩ Home</strong> together for about 5 seconds. When a "connected" message appears at the bottom of the screen, it is ready to use.</li><li><strong>The picture suddenly disappears:</strong> when someone walks in front of the lens, the picture goes off and only a message saying that eye protection is active is shown. It is not broken. Move away from the lens and wait a moment, and the picture comes back automatically (or press ③ Back on the remote).</li><li><strong>The picture is out of focus:</strong> if the light falls on the table, focus may not work. Move the projector toward the front edge of the table, or tilt it up a little. If that doesn't help, try <strong>⑤ Settings（設定）</strong> &gt; Projector Settings（プロジェクター設定） &gt; Focus（フォーカス） &gt; Auto Focus（オートフォーカス）.</li><li><strong>It turned off by itself:</strong> it switches off automatically after a while without any operation. Turn it on again with the power button on the projector.</li><li><strong>It behaves strangely:</strong> press and hold <strong>① Power</strong> and choose <strong>Restart（再起動）</strong>.</li></ul><p><strong>Please do not choose "Reset" (Factory reset（出荷時設定にリセット）).</strong> It erases all settings. If the problem continues, message the host on Airbnb.</p>`
    },
    garbage: {
      sorting: `<p><strong>How to sort in the room:</strong> The trash cans in the room have labels. Please sort your trash according to the labels.</p><ul><li><strong>Burnable</strong></li><li><strong>PET-Bottles</strong></li><li><strong>Bottles &amp; Cans</strong></li></ul>`,
      body: `<p><strong>When a trash can is full:</strong> Please take your sorted trash to the metal containers in the trash area outside the room. As long as it is sorted, you may use any of the containers.</p><p>When you check out, you can leave your trash in the trash cans in the room.</p><p>Please do not put trash at neighborhood collection points or on the street (it will not be collected).</p>`
    },
    rules: {
      packages: `<p>As this property has no on-site staff, we are unable to receive packages before your stay. Receiving packages during your stay is not a problem.</p>`,
      neighborsTitle: `Being Considerate of Neighbors`,
      neighbors: `<p>This is a quiet residential area. Please help our neighbors live in peace.</p><ul><li><strong>Noise:</strong> Please avoid loud voices and loud music. After 9:00 PM, please close the windows and keep quiet. At night, please open and close the entrance door quietly.</li><li><strong>Outdoors:</strong> Please do not gather outdoors to eat, drink, or hold parties, such as in front of the building or in the walkways.</li><li><strong>Musical instruments:</strong> Musical instruments cannot be played inside the room.</li><li><strong>Trash:</strong> Please sort your trash into "Burnable", "PET-Bottles" and "Bottles &amp; Cans" according to the labels on the trash cans in the room. When a trash can is full, please take it to the metal containers in the trash area outside the room. Please do not put it at neighborhood collection points or on the street.</li><li><strong>Smoking:</strong> The room and the entire premises are non-smoking. Please do not smoke on the roads around the building or throw cigarette butts on the ground.</li><li><strong>Cars:</strong> Please do not park on the street. Please use a coin parking lot.</li></ul>`,
      fireTitle: `Preventing Fires`,
      fire: `<ul><li><strong>Stove:</strong> It is an IH (electric) stove. You do not need to touch the gas main valve. Do not leave it while cooking, and turn it off when you are done.</li><li><strong>Open flames:</strong> Candles, incense, fireworks, and other things that use fire cannot be used inside the room.</li><li><strong>Fire extinguisher:</strong> It is in the shared area outside the room (near the hallway and stairs).<br>(1) Pull out the yellow safety pin → (2) Point the hose at the fire → (3) Squeeze the lever firmly</li><li><strong>Evacuation:</strong> If the fire is large (about to reach the ceiling), do not try to put it out. Leave right away. Go outside through the entrance. If your room is on the 2nd floor, use the outside stairs.</li><li><strong>Calling for help:</strong> Call 119. The address to tell them is on the "<a href="#/emergency">Emergency Contacts &amp; Evacuation</a>" page.</li></ul>`,
      prohibitedTitle: `Prohibited`,
      prohibitedList: `<ul><li>Wearing shoes inside the room</li><li>Smoking — the room and the entire premises are strictly non-smoking</li><li>Making noise after 9:00 PM or late at night</li><li>Disturbing neighbors</li><li>Bringing in or hosting guests who are not registered on the reservation</li><li>Intentionally damaging the room or its facilities, or failing to report damage</li></ul>`,
      penaltyTitle: `If rules are broken or damage occurs`,
      penaltyList: `<ul><li><strong>Smoking:</strong> We will end your stay and ask you to leave as soon as it is confirmed (no refund). The actual cost of deodorizing and cleaning will also be charged.</li><li><strong>Noise or disturbing neighbors:</strong> We will first send you a warning. If it does not improve, we will end your stay and ask you to leave (no refund).</li><li><strong>Unregistered guests:</strong> An additional accommodation fee will be charged, or your stay will be ended.</li><li><strong>Heavy mess or stains:</strong> If extra cleaning is needed, for example for stains that normal cleaning cannot remove, the actual cost of that cleaning will be charged.</li><li><strong>Lost keys or damaged facilities or items:</strong> The actual cost of replacement or repair will be charged. If something gets damaged, please tell us right away.</li></ul>`
    },
    nearby: {
      intro: `<p>Walking times below are from JR Tsurumi Station, and from the accommodation.</p><ul><li><strong>FamilyMart Tsurumi Nishiguchi</strong> (24h) — 2 min from JR Tsurumi Sta. / 8 min from the property</li><li><strong>Lawson Tsurumi-Eki Nishiguchi</strong> (24h) — 1 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>7-Eleven Yokohama Toyooka-cho Chuo</strong> (24h) — 2 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>Supermarket SEIYU Tsurumi</strong> (9:00 AM–11:00 PM) — 2 min from JR Tsurumi Sta. / 9 min from the property</li><li><strong>Supermarket Keikyu Store Tsurumi-Nishi</strong> (weekdays 10:00 AM–11:00 PM, holidays 10:00 AM–9:00 PM) — 1 min from JR Tsurumi Sta. / 10 min from the property</li></ul>`
    },
    parking: {
      intro: `<p>The nearest coin parking lots are listed below (all located uphill between the station and the property). Tap an address to open it in Google Maps. Rates may change — please check the sign at the lot.</p><ul><li><strong>Times Tsurumi Teraya No. 3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">Teraya 2-6, Tsurumi-ku</a>. 4 min walk (290m). ¥220/30min. Max ¥1,000/24h; max ¥440 for 19:00–8:00 (max stay 48h).</li><li><strong>Shinkou Park Tsurumi Teraya</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">Teraya 2-1-21</a>. 4 min walk (290m). ¥200/30min. Max ¥900 for 9:00–18:00; max ¥400 for 18:00–9:00.</li><li><strong>Times Tsurumi Teraya</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">Teraya 1-3</a>. 4 min walk (350m). ¥200/20min. Max ¥1,200/24h; max ¥500 for 19:00–8:00.</li><li><strong>Time Parking Tsurumi</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">Tsurumi 2-3-45</a>. 4 min walk (230m), steep stairs. 8:00–20:00: ¥300/30min, max ¥1,200/12h. 20:00–8:00: ¥100/1h, max ¥400/12h.</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>Electronic lock not working:</strong> first, try again, pressing the buttons slowly and firmly (hold the unlock button a little longer). If that doesn't work, take the key from the key box at the gas meter on the <strong>{keyboxSide}</strong> side of the door and use it. The code is the same as the electronic lock passcode (there are two key boxes — either one will work). If it still won't open, please contact us via Airbnb message.</p>`,
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
    nav: { home: `ホーム`, wifi: `Wi-Fi`, checkout: `チェックイン/アウト`, emergency: `緊急` },
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
      projector: `プロジェクター`,
      garbage: `ゴミの出し方`,
      rules: `ハウスルール・禁止事項`,
      nearby: `周辺のお店`,
      parking: `コインパーキング`,
      trouble: `困ったとき`,
      emergency: `緊急連絡先・避難場所`,
      taxi: `タクシーの運転手さんへ`
    },
    taxi: {
      intro: `<p class="taxi-lead">この画面を運転手さんに見せてください。</p>`,
      card: TAXI_JA.card,
      p1: TAXI_JA.p1,
      p2: TAXI_JA.p2,
      p3: TAXI_JA.p3,
      turn: TAXI_JA.turn,
      map: TAXI_JA.map
    },
    translation: {
      intro: `<p>滞在中の翻訳には<strong>Googleレンズ</strong>が便利です。カメラを文字にかざすだけで、その場で翻訳できます。</p><ul><li>Googleアプリをインストールする</li><li>Googleレンズのアイコンをタップする</li><li><strong>「翻訳」</strong>をタップする</li><li>翻訳したい文字にカメラを向ける</li></ul>`
    },
    access: {
      mapIntro: `<p>下の住所をタップするとGoogleマップが開きます。</p>`,
      haneda: `<p><strong>羽田空港から</strong>（乗り換えなし・約40分）</p><ol class="route"><li class="route__stop">羽田空港<span class="route__en">Haneda Airport</span></li><li class="route__ride"><span class="route__line route__line--keikyu">京急空港線</span>「<strong>急行</strong>」逗子・葉山方面行きに乗る（乗り換えなし）<span class="route__time">約20分</span><span class="route__note">「急行」または「普通」に乗ってください。快特・特急は京急鶴見に止まりません。</span></li><li class="route__stop">京急鶴見<span class="route__en">Keikyu Tsurumi</span></li><li class="route__walk">徒歩 <span class="route__time">約17分</span><span class="route__note">改札を出たら歩道橋でJR鶴見駅を越えて、西口側へ進みます。少し上り坂があります。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=%E4%BA%AC%E6%80%A5%E9%B6%B4%E8%A6%8B%E9%A7%85&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Googleマップで道順を見る</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Haneda%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>Googleマップで今の乗り換えを調べる</span></a>`,
      narita: `<p><strong>成田空港から</strong>は、次の2つのルートがあります（どちらも約1時間40分〜2時間）。</p>`,
      naritaA: `<p><strong>ルートA：京成スカイライナー＋JR</strong>（いちばん速い）</p><ol class="route"><li class="route__stop">成田空港<span class="route__en">Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--skyliner">京成スカイライナー</span>日暮里まで<span class="route__time">約40分</span><span class="route__note">全席指定です。</span></li><li class="route__stop">日暮里<span class="route__en">Nippori</span><span class="route__note">JRに乗り換え</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京浜東北線</span>「大船」「磯子」方面<span class="route__time">約45分</span></li><li class="route__stop">JR鶴見<span class="route__en">JR Tsurumi</span></li><li class="route__walk">徒歩 <span class="route__time">約11分</span><span class="route__note">西口を出て進みます。ほぼ平らな道です。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Googleマップで道順を見る</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol>`,
      naritaB: `<p><strong>ルートB：JR成田エクスプレス</strong>（乗り換えが少なく、大きな荷物も置けます）</p><ol class="route"><li class="route__stop">成田空港<span class="route__en">Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--nex">JR成田エクスプレス</span>横浜まで<span class="route__time">約1時間30分</span><span class="route__note">全席指定です。横浜に止まるのは「大船」行きなど一部の列車だけです。横浜に止まらない列車のときは、品川で降りて京浜東北線の「大船」方面に乗り換えてください。</span></li><li class="route__stop">横浜<span class="route__en">Yokohama</span><span class="route__note">乗り換え</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京浜東北線</span>「東京」「大宮」方面<span class="route__time">約10分</span></li><li class="route__stop">JR鶴見<span class="route__en">JR Tsurumi</span></li><li class="route__walk">徒歩 <span class="route__time">約11分（西口）</span><span class="route__note">西口を出て進みます。ほぼ平らな道です。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">Googleマップで道順を見る</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Narita%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>Googleマップで今の乗り換えを調べる</span></a>`,
      taxi: `<p>タクシーをご利用の場合は、運転手さんに下の住所を見せてください。</p><ul><li>羽田空港から：約30分、およそ6,000〜7,000円</li><li>JR鶴見駅から：約3分、およそ500円</li><li>22時〜翌5時は深夜割増料金（2割増）がかかります</li></ul><p><strong>重要：</strong>建物は大通りから1本入った細い道沿いにあり、運転手さんが入口を見落としやすい場所です。乗車したら、<a href="#/taxi">運転手さんに見せる画面</a>を見せてください。</p>`,
      taxiStandKeikyu: `<p><strong>京急鶴見駅のタクシー乗り場：</strong>西口を出て左に曲がり、階段を下りると「TAXI」の看板が見えます。</p>`,
      taxiStandJR: `<p><strong>JR鶴見駅のタクシー乗り場：</strong>階段下の横断歩道を渡って左に曲がると「TAXI」の看板が見えます。</p>`,
      exterior: `<p>建物の外観です。</p>`
    },
    checkin: {
      intro: `<p>スタッフが常駐しないセルフチェックイン方式です。事前に下記の手順をご確認ください。</p>`,
      times: `<p><strong>チェックイン：</strong>16:00〜<br><strong>チェックアウト：</strong>〜10:00</p><p>清掃スタッフは10:10に到着しますので、10:00までにお部屋を出ていただくようお願いします。10:00を過ぎてのチェックアウトは、延泊料金が発生する場合があります。</p>`,
      checkout: `<p><strong>チェックアウト前のお願い（10:00まで）</strong></p><ul><li>クローゼットの予備の枕や布団を使った場合は、クローゼットに戻さず、リビングに置いておいてください。</li><li>使ったタオルは、洗濯機のかごに入れてください。</li><li>ゴミはお部屋に置いたままで大丈夫です（<a href="#/garbage">ゴミの出し方</a>）。</li><li>キーボックスの鍵を使った場合は、キーボックスに戻してください。</li><li>お部屋を出るときは、電子錠の<strong>鍵マーク</strong>を押して施錠してください。</li></ul>`,
      checkoutProjector: `<p>201号室のプロジェクターでYouTube・Netflixなどにログインした場合は、必ずログアウトしてください（<a href="#/projector/logout">ログアウトの方法</a>）。</p>`,
      steps: `<p>お部屋は<strong>{room}号室</strong>、{floor}階です。ドアの鍵は電子錠です。</p><ul><li>パスワードを入力して解錠ボタンを押してください（パスワードはチェックイン当日の朝にAirbnbメッセージでお送りします）。</li><li><strong>ボタンはゆっくり、しっかり押してください。</strong>解錠ボタンを短く押すと開かないことがあります。少し長めに押すと、すぐに開きます。</li></ul>`,
      stepsLock: `<p>外出時・チェックアウト時は必ず施錠をお願いします。</p>`,
      keybox: `<p>電子錠がうまく作動しない場合は、キーボックスから鍵を取り出してお使いください。キーボックスはドアの<strong>{keyboxSide}側</strong>のガスメーターのところにあります。キーボックスは2つありますが、どちらでも構いません。キーボックスの暗証番号は電子錠と同じです。</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `QRコードを読み取るか、下記の情報を入力してください。`,
      tip: `迷ったら<strong>5GHz（名前の最後が「-A」）</strong>につないでください。つながらない・電波が弱いときは<strong>2.4GHz（名前の最後が「-G」）</strong>をお試しください。`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `エアコン`, induction: `IHクッキングヒーター`, microwave: `電子レンジ`, kettle: `電気ケトル`, coffee: `ドリップコーヒー`, ricecooker: `炊飯器`, washer: `洗濯機`, wire: `室内物干しワイヤー`, circulator: `サーキュレーター`, iron: `スチームアイロン`, dolcegusto: `カプセル式コーヒーメーカー（ネスカフェ ドルチェ グスト ジェニオ2）` },
      ac: `<p>付属のリモコンで操作してください。</p>`,
      induction: `<p>キッチンにあります。下の図は操作パネルです。</p>`,
      inductionSteps: `<p><strong>使い方</strong></p><ul><li>鍋をプレートの中央に置きます（鍋を置かないと加熱できません）。</li><li><strong>「電源」</strong>を2秒以上長押しします。</li><li><strong>「加熱 入/切」</strong>を押し、続けて <strong>◀ か ▶</strong> を押すと加熱が始まります。</li><li>◀ ▶ で火力を調節します（弱・1・2・3・強の5段階）。</li><li>終わったら「加熱 入/切」を押して止め、「電源」を押して切ります。</li></ul><p><strong>使える鍋：</strong>鉄やステンレスなど磁石がつく、底が平らな鍋（底の直径 約12〜24cm）。土鍋・ガラス・アルミ・銅の鍋は使えません。火力のランプが全部点滅して加熱されないときは、鍋が合っていないか、中央に置かれていません。</p><p><strong>ご注意：</strong>使用後もプレートは熱くなっています。「高温注意」ランプが消えるまで触らないでください。使用中はそばを離れないでください。</p>`,
      microwave: ``,
      microwaveIris: `<p><strong>いちばん簡単な使い方</strong></p><ul><li>食品を入れてドアを閉め、<strong>「あたためスタート」</strong>を押すと、500Wで30秒あたたまります。押すたびに30秒ずつ増えます（最大5分）。</li></ul><p><strong>時間を決めてあたためる</strong></p><ul><li><strong>「レンジ」</strong>を押します（500W。もう一度押すと200W）。</li><li><strong>「1分」「10秒」</strong>を押して時間を合わせます。</li><li><strong>「あたためスタート」</strong>を押します。</li><li>途中で止めるときは「とりけし」を押します。</li></ul><p><strong>そのほかのボタン</strong></p><ul><li>飲み物：1回押すと1杯、2回押すと2杯。そのあと「あたためスタート」を押します。</li><li>ごはん：押してから「あたためスタート」を押します。</li><li>解凍：押してから「1分/100g」「10秒/10g」で重さ（100〜500g）を合わせ、「あたためスタート」を押します。</li></ul>`,
      microwaveNitori: `<p><strong>使い方</strong></p><ul><li>食品を中央に置き、ドアを閉めます。</li><li><strong>上のダイヤル（出力）</strong>を合わせます。ふつうのあたためは「500W」、解凍は「200W」です。</li><li><strong>下のダイヤル（タイマー）</strong>を右に回して時間を合わせます。合わせると約3秒後に自動で始まります（スタートボタンはありません）。</li><li>途中で止めるときは、下のダイヤルを「切」に戻すか、ドアを開けます。</li><li>終わると「ピーッ」と3回鳴ります。</li></ul><p>タイマーの目盛りは、はじめの「20」「40」が秒、「1」から先が分です。出力は、時間を合わせる前に選んでください（あとからは変わりません）。</p>`,
      microwaveCaution: `<p><strong>ご注意：</strong>金属の容器、アルミホイル、金や銀の模様のある器は使えません。殻つきの卵やゆで卵、ふたを閉めた容器、缶、レトルトの袋は、そのままあたためないでください。何も入れずに動かさないでください。</p>`,
      kettle: `<p>お湯が沸くと、持ち手以外の本体部分も熱くなりますのでご注意ください。</p>`,
      kettleNitori: `<p><strong>使い方</strong></p><ul><li>ケトルを台から外します。</li><li><strong>①</strong> ふたを回して、ふたの印を「開いた鍵」のマークに合わせ、ふたを持ち上げて外します。</li><li>水を入れます。内側の「MAX」の印（約0.8L）を超えないようにしてください。少なすぎても使えません（150mL以上入れてください）。</li><li>ふたを戻し、印を「閉じた鍵」のマークに合わせてロックします。ケトルを台に戻します。</li><li><strong>②</strong> 電源スイッチを下げると「ON」になり、ランプが点きます。</li><li>沸くとスイッチが自動で上がり、ランプが消えます。</li></ul><p>満水（0.8L）で約5分、カップ1杯分（0.15L）で約1分半で沸きます。</p><p><strong>ご注意：</strong>ふたをしっかり閉めていないと、沸いても自動で切れないことがあります。沸かしている間と沸いた直後は、ふたを開けないでください。注ぎ口から出る蒸気にもご注意ください。水以外のものは入れないでください。</p>`,
      kettleIris: `<p><strong>使い方</strong></p><ul><li>ケトルを台から外し、ふたを取って水を入れます。水は内側の「MIN」と「MAX」の線の間まで（0.3〜0.6L）。</li><li>ふたをしっかり閉め、ケトルを台に戻します。</li><li><strong>① 電源ボタン</strong>を押します。</li><li><strong>②「MODE」</strong>を押して温度を選びます。100℃（沸とう）／Coffee（90℃）／Green Tea（70℃）</li><li><strong>③「START」</strong>を押します。沸くとブザーが3回鳴り、自動で止まります。</li><li>途中で止めるときは、もう一度「START」を押します。</li></ul><p>「−」「＋」を押すと、温度を60〜100℃の間で5℃ずつ変えられます。沸いたあとに「KEEP WARM」を押すと、1時間まで保温できます。</p><p><strong>ご注意：</strong>沸かしている間と沸いた直後は、ふたを開けないでください。本体の金属の部分は熱くなるので、取っ手を持ってください。水以外のものは入れないでください。</p>`,
      coffee: `<p>キッチンにドリップバッグ用のスタンドがあります。ドリップコーヒーをお楽しみください。</p>`,
      riceCooker: ``,
      washer: `<p>洗濯から乾燥までできるドラム式の洗濯乾燥機です（洗濯は7kgまで、乾燥は3.5kgまで）。乾燥のときも水を使うので、洗濯機につながっている蛇口は開けたままにしてください。</p>`,
      washerSteps: `<p><strong>使い方</strong></p><ul><li>洗濯物をドラムの奥に入れ、ドアをしっかり閉めます。</li><li><strong>「入」</strong>を押して電源を入れます。</li><li><strong>「コース」</strong>を押して「標準」のランプを点けます（ふだんの洗濯は「標準」で大丈夫です）。</li><li><strong>「運転切換」</strong>を押して選びます。<br>洗濯 … 洗うだけ<br>洗～乾 … 洗って乾燥まで<br>乾燥 … 乾燥だけ</li><li><strong>「スタート」</strong>を押します。</li><li>表示部に洗剤の量の目安（例：0.5杯）が約20秒出るので、洗剤を入れます（洗剤は自動では入りません）。</li><li>終わると電源は自動で切れます。残り時間は表示部の「残り」で確認できます。</li></ul>`,
      washerDetergent: `<p><strong>洗剤の入れ方</strong></p><ul><li>本体の左上にある洗剤ケースを手前に引き出します。</li><li>奥の広いところに洗剤を入れます（粉末は中央、液体は右側）。</li><li>柔軟剤は、手前左の小さい入れ口（「柔軟剤」と書いてあります）に、「満量」の線まで。</li><li>ジェルボール型の洗剤は、ケースではなくドラムの中に直接入れてください。</li></ul>`,
      washerAdjust: `<p><strong>時間や回数を変えたいとき</strong></p><p>「洗い」「すすぎ」「脱水」「乾かす」のボタンを押してから、∨ ∧ で調節できます（ふだんはそのままで大丈夫です）。</p>`,
      washerNotes: `<p><strong>ご注意</strong></p><ul><li>運転中はドアにロックがかかります。途中で開けたいときは「スタート／一時停止」を押して止め、「ロック解除」を押してください。</li><li>乾燥のあとはドラムの中が熱くなっています。「ロック解除」を押してから、冷めてドアが開くまで10〜20分ほどかかることがあります。</li><li>乾燥まで行うときは、洗濯物を洗濯のときの半分（3.5kg）までにしてください。入れすぎると乾きません。</li><li>「ロック解除」を3秒以上押すとチャイルドロックがかかり（表示部に「L」）、ドアが開かなくなります。解除するときも3秒以上押してください。</li></ul>`,
      wire: `<p>室内に洗濯物を干すためのワイヤーがあります。</p>`,
      wireSteps: `<p><strong>使い方</strong></p><ul><li><strong>①</strong> ワイヤーの先の丸いつまみを持って、壁の白い本体からワイヤーを引き出します。</li><li><strong>②</strong> 反対側の壁にあるプレートの穴に、つまみを引っ掛けます。</li><li><strong>③</strong> 本体の丸いつまみを「LOCK」の向きに回して、ワイヤーを固定します。</li></ul><p><strong>しまうとき：</strong>本体のつまみを反対に回してロックを外し、プレートからつまみを外して、ゆっくり本体に戻します。</p><p><strong>ご注意：</strong>掛けられる重さは約20kgまでです。ワイヤーを下に引っ張ったり、ぶら下がったりしないでください。</p>`,
      circulator: `<p>天井が高いため、冷たい空気は下に、暖かい空気は上にたまりやすくなっています。エアコンの効きが弱く感じるときは、サーキュレーターで空気を循環させてください。</p>`,
      circulatorSteps: `<p><strong>使い方</strong></p><ul><li><strong>「電源 切/入」</strong>を押すと動きます。もう一度押すと止まります。</li><li><strong>「＜ 風量 ＞」</strong>で風の強さを変えます（5段階。いちばん強いのが「ターボ」）。</li><li><strong>「首ふり」</strong>を押すたびに、上下・左右・両方・止まる、が切り替わります。どれになっているかはランプでわかります。</li><li>「切タイマー」を押すと、1・2・4時間後に自動で止まります。</li><li>「リズム」は、風の強さがゆっくり変わる、自然の風に近いモードです。</li></ul><p><strong>ご注意：</strong>向きを手で動かさないでください。向きを変えたいときは「首ふり」を押して動かし、好きな位置でもう一度押して止めてください。</p>`,
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
    projector: {
      titles: { basics: `電源とリモコン`, youtube: `YouTubeを見る`, streaming: `Netflix・Prime Videoを見る`, cast: `スマホの映像を映す`, hdmi: `HDMIでつなぐ`, speaker: `スピーカーとして使う`, logout: `チェックアウトの前に`, trouble: `うまくいかないとき` },
      intro: `<p>201号室には、壁に映像を映せるプロジェクター（JMGO PicoPlay+）があります。YouTube・Netflix・Prime Video などをご覧いただけます。</p><div class="notice notice--warn"><p><strong>ご注意</strong></p><ul><li>レンズから出る強い光をのぞき込まないでください。</li><li>映している間は、本体をテーブルや台に直接立てて置かないでください。縦にして映すときは、必ず備え付けのスタンドに取り付けてください。本体の底に通気口があり、ふさぐと熱で自動的に止まります。</li><li>レンズの前を人が横切ると、目を守るために映像が消え、「視力保護機能が稼働しています」という文字だけが表示されます。故障ではありません。レンズの前から離れて少し待つと、自動で元に戻ります（リモコンの③戻るボタンを押しても戻ります）。</li></ul></div>`,
      basics: `<p>下の図は、付属のリモコンです。このページの ①〜⑬ は、図の番号です。</p>`,
      basicsSteps: `<p><strong>つける</strong></p><ul><li>リモコンの<strong>①電源</strong>ボタンを押します。</li><li>つかないときは、本体の電源ボタンを押します（場所は、このページの「HDMIでつなぐ」の図の「電源ボタン」です）。</li></ul><p><strong>消す</strong></p><ul><li>リモコンの<strong>①電源</strong>ボタンを押します。</li></ul><p><strong>操作のしかた</strong></p><ul><li>ピントと画面の形は自動で合います。</li><li><strong>②方向キー</strong>で選び、<strong>⑨決定</strong>で決めます。</li><li><strong>③戻る</strong>で1つ前に戻ります。</li><li><strong>⑩ホーム</strong>でホーム画面に戻ります。</li></ul>`,
      youtube: `<p>リモコンの<strong>⑥YouTube</strong>ボタンを押します。ログインしなくても見られます。</p><p>ご自身のアカウントでログインした場合は、チェックアウトの前に必ずログアウトしてください（<a href="#/projector/logout">チェックアウトの前に</a>をご覧ください）。</p>`,
      streaming: `<p>リモコンの<strong>⑦Netflix</strong>または<strong>⑬Prime Video</strong>ボタンを押し、<strong>ご自身のアカウント</strong>でログインしてご覧ください（アカウントのご用意はありません）。</p><p>チェックアウトの前に、必ずログアウトしてください（<a href="#/projector/logout">チェックアウトの前に</a>をご覧ください）。</p>`,
      cast: `<p>まず、スマートフォンを<strong>お部屋のWi-Fiの5GHz（名前の最後が「-A」のほう）</strong>につないでください。プロジェクターと同じWi-Fiにつながっている必要があります（名前の最後が「-G」のほうでは映せないことがあります）。Wi-Fiの情報は<a href="#/wifi">Wi-Fiのページ</a>にあります。</p><p><strong>アプリから映す</strong></p><ul><li>YouTube・Prime Video・Disney+ などのアプリに表示される<strong>キャストのアイコン</strong>をタップし、<strong>「ysr201」</strong>を選びます。</li></ul><p><strong>iPhoneの画面をそのまま映す</strong></p><ul><li>プロジェクターのホーム画面で、<strong>「Screen Casting」</strong>アプリを開きます。</li><li>iPhoneのコントロールセンターで<strong>画面ミラーリング</strong>のアイコンをタップし、<strong>「ysr201-0101」</strong>を選びます。</li></ul><p><strong>Androidの画面をそのまま映す</strong></p><ul><li>スマホに<strong>「JMGO」アプリ</strong>のインストールが必要です。アプリからのキャストか、HDMIでつなぐほうがかんたんです。</li></ul><p><strong>縦長の動画を大きく映す（ショート動画など）</strong></p><ul><li>本体を<strong>備え付けのスタンド</strong>に取り付けます。</li><li>上の「画面をそのまま映す」の方法で、スマホの画面を映します（アプリからのキャストでは縦長になりません）。</li><li>本体を90度回して縦にすると、映像が縦長に切り替わります。</li><li>スタンドを使わずに、本体をテーブルや台に直接立てないでください。</li></ul><p><strong>Netflix</strong>は、スマホから映さず、プロジェクターのアプリ（リモコンの⑦ボタン）でご覧ください。</p>`,
      hdmi: `<p>パソコンなどの映像を映したいときは、本体の後ろ（下の図の「HDMI」）のHDMI端子にケーブルをつなぎます。</p><ul><li>画面が切り替わらないときは、リモコンの<strong>⑫入力切替</strong>ボタンを押します。</li><li>元の画面（プロジェクターのホーム画面）に戻るときは、<strong>⑩ホーム</strong>ボタンを押します。</li></ul>`,
      speaker: `<p>映像を出さずに、スマートフォンの音楽を流すスピーカーとして使えます。</p><ul><li>本体の<strong>アクションボタン</strong>（点が3つ並んだボタン。場所は「HDMIでつなぐ」の図をご覧ください）を<strong>長押し</strong>します。メニューが出たときは<strong>「Bluetoothスピーカー」</strong>を選びます。映像が止まり、スピーカーに切り替わります。</li><li>スマートフォンのBluetooth設定で<strong>「ysr201」</strong>を選んで接続します。</li><li>スピーカーとして使っている間は、本体を立てて置いても大丈夫です。</li><li>映像に戻すときは、リモコンの<strong>③戻る</strong>を押し、本体を横向きに戻してください。</li></ul>`,
      logout: `<div class="notice notice--warn"><p><strong>チェックアウトの前に、必ずログアウトしてください。</strong></p><p>ログインしたアプリ（YouTube・Netflix・Prime Video など）から、チェックアウトの前に必ずログアウトしてください。ログアウトしないと、次のゲストの方があなたのアカウントを使えてしまいます。</p><p>ログアウトは、各アプリのアカウントまたは設定のメニューからできます。</p></div>`,
      trouble: `<ul><li><strong>リモコンが効かないとき：</strong>リモコンを本体に近づけ、<strong>③戻る</strong>と<strong>⑩ホーム</strong>を同時に約5秒長押ししてください。画面の下に接続完了のメッセージが出れば、使えるようになります。</li><li><strong>映像が急に消えたとき：</strong>レンズの前を人が通ると、目を守るために映像が消え、「視力保護機能が稼働しています」という文字だけが表示されます。故障ではありません。レンズの前から離れて少し待つと、自動で元に戻ります（リモコンの③戻るボタンを押しても戻ります）。</li><li><strong>ピントが合わないとき：</strong>光が机に当たっていると、ピントが合わないことがあります。本体を机の前のほうに置くか、少し上に向けてください。直らないときは、<strong>⑤設定</strong> →「プロジェクター設定」→「フォーカス」→「オートフォーカス」をお試しください。</li><li><strong>勝手に電源が切れたとき：</strong>しばらく操作しないと、自動で切れます。本体の電源ボタンでもう一度つけてください。</li><li><strong>動きがおかしいとき：</strong><strong>①電源</strong>ボタンを長押しし、<strong>「再起動」</strong>を選んでください。</li></ul><p><strong>「リセット」（出荷時設定にリセット）は行わないでください。</strong>設定がすべて消えてしまいます。解決しないときは、Airbnbのメッセージでホストにご連絡ください。</p>`
    },
    garbage: {
      sorting: `<p><strong>お部屋での分け方：</strong>室内のゴミ箱にラベルが貼ってあります。ラベルのとおりに分けて捨ててください。</p><ul><li><strong>可燃ごみ</strong>（Burnable）</li><li><strong>ペットボトル</strong>（PET-Bottles）</li><li><strong>ビン・カン</strong>（Bottles &amp; Cans）</li></ul>`,
      body: `<p><strong>ゴミ箱がいっぱいになったら：</strong>分別した上で、部屋の外にあるゴミ置き場の金属製コンテナに入れてください。分別してあれば、どのコンテナに入れても構いません。</p><p>チェックアウトの際は、ゴミは部屋のゴミ箱に入れたままで構いません。</p><p>近所のゴミ集積所や道路には出さないでください（収集されません）。</p>`
    },
    rules: {
      packages: `<p>当施設はスタッフが常駐していないため、ご宿泊前の荷物のお受け取りはできません。ご滞在中の荷物受け取りは問題ございません。</p>`,
      neighborsTitle: `ご近所へのご配慮`,
      neighbors: `<p>ここは静かな住宅地です。近隣の方が安心して暮らせるよう、ご協力をお願いします。</p><ul><li><strong>音：</strong>大きな声での会話や音楽はお控えください。21時以降は窓を閉めて、お静かにお過ごしください。夜は玄関ドアの開け閉めも静かにお願いします。</li><li><strong>屋外：</strong>建物の前や通路など、屋外で集まっての飲食・宴会はご遠慮ください。</li><li><strong>楽器：</strong>室内で楽器は演奏できません。</li><li><strong>ゴミ：</strong>室内のゴミ箱のラベルのとおり「可燃ごみ」「ペットボトル」「ビン・カン」に分けてください。ゴミ箱がいっぱいになったら、部屋の外にあるゴミ置き場の金属製コンテナに入れてください。近所のゴミ集積所や道路には出さないでください。</li><li><strong>たばこ：</strong>室内・敷地内は禁煙です。建物のまわりの道路での喫煙や、吸い殻のポイ捨てもおやめください。</li><li><strong>お車：</strong>路上駐車はせず、コインパーキングをご利用ください。</li></ul>`,
      fireTitle: `火事を防ぐために`,
      fire: `<ul><li><strong>コンロ：</strong>IH（電気）です。ガスの元栓の操作は必要ありません。調理中はそばを離れず、使い終わったら電源を切ってください。</li><li><strong>火気：</strong>室内では、ろうそく・お香・花火など火を使うものは使用できません。</li><li><strong>消火器：</strong>部屋の外の共用部（廊下・階段付近）にあります。<br>①黄色い安全ピンを抜く → ②ホースを火元に向ける → ③レバーを強く握る</li><li><strong>避難：</strong>火が大きいとき（天井に届きそうなとき）は、消そうとせずにすぐ逃げてください。玄関から外に出ます。2階のお部屋は外階段で下りてください。</li><li><strong>通報：</strong>119 に電話してください。伝える住所は「<a href="#/emergency">緊急連絡先・避難場所</a>」のページにあります。</li></ul>`,
      prohibitedTitle: `禁止事項`,
      prohibitedList: `<ul><li>室内での土足</li><li>喫煙（室内および敷地内は全面禁煙です）</li><li>21時以降・深夜の騒音</li><li>近隣住民への迷惑行為</li><li>宿泊者登録のない方の同伴・宿泊</li><li>設備の故意の破損、または破損を報告しないこと</li></ul>`,
      penaltyTitle: `ルール違反や損害があった場合`,
      penaltyList: `<ul><li><strong>喫煙：</strong>確認した時点でご宿泊を終了し、退去していただきます（返金はありません）。消臭・清掃にかかった実費もご負担いただきます。</li><li><strong>騒音・近隣への迷惑行為：</strong>まずご注意をお送りします。改善されない場合は、ご宿泊を終了し、退去していただきます（返金はありません）。</li><li><strong>登録のない方の宿泊：</strong>追加の宿泊料金をいただくか、ご宿泊を終了していただきます。</li><li><strong>ひどい汚れ：</strong>通常の清掃では落とせない汚れなどで追加の清掃が必要になった場合は、その実費をご負担いただきます。</li><li><strong>鍵の紛失・設備や備品の破損：</strong>交換・修理にかかった実費をご負担いただきます。破損したときは、すぐにお知らせください。</li></ul>`
    },
    nearby: {
      intro: `<p>下記はJR鶴見駅からの徒歩時間と、施設からの徒歩時間です。</p><ul><li><strong>ファミリーマート鶴見西口店</strong>（24時間）— JR鶴見駅から2分／施設から8分</li><li><strong>ローソン鶴見駅西口店</strong>（24時間）— JR鶴見駅から1分／施設から9分</li><li><strong>セブンイレブン横浜豊岡町中央店</strong>（24時間）— JR鶴見駅から2分／施設から9分</li><li><strong>スーパー西友鶴見店</strong>（9:00〜23:00）— JR鶴見駅から2分／施設から9分</li><li><strong>スーパー京急ストア鶴見西口店</strong>（平日10:00〜23:00、休日10:00〜21:00）— JR鶴見駅から1分／施設から10分</li></ul>`
    },
    parking: {
      intro: `<p>最寄りのコインパーキングです（いずれも駅から施設に向かって坂を上る途中にあります）。住所をタップするとGoogleマップが開きます。料金は変更されることがありますので、現地の看板をご確認ください。</p><ul><li><strong>タイムズ鶴見寺谷第3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">鶴見区寺谷2-6</a>。徒歩4分（290m）。220円/30分。最大1,000円/24h、19:00〜8:00は最大440円（最大駐車48h）。</li><li><strong>シンコウパーク鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">寺谷2-1-21</a>。徒歩4分（290m）。200円/30分。9:00〜18:00は最大900円、18:00〜9:00は最大400円。</li><li><strong>タイムズ鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">寺谷1-3</a>。徒歩4分（350m）。200円/20分。最大1,200円/24h、19:00〜8:00は最大500円。</li><li><strong>タイムパーキング鶴見</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">鶴見2-3-45</a>。徒歩4分（230m）、急な階段あり。8:00〜20:00：300円/30分 最大1,200円/12h。20:00〜8:00：100円/1h 最大400円/12h。</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>玄関の電子錠が動かないとき：</strong>まず、ボタンをゆっくり、しっかり押し直してください（解錠ボタンは少し長めに）。それでも開かない場合は、ドアの<strong>{keyboxSide}側</strong>のガスメーターのところにあるキーボックスから鍵を取り出してお使いください。暗証番号は電子錠と同じです（キーボックスは2つありますが、どちらでも構いません）。鍵でも開かない場合は、Airbnbメッセージでご連絡ください。</p>`,
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

  'zh-Hans': {
    meta: { name: '简体中文' },
    common: {
      brand: `YOKOHAMA Still Retreat`,
      tagline: `横滨鹤见的静谧隐居之所`,
      addressLocal: `日本 邮政编码230-0015 神奈川县横滨市鹤见区寺谷1-7-40 Raise寺谷`,
      addressJaLabel: `日文地址（请出示给出租车司机看）`,
      copy: `复制`,
      copied: `已复制`,
      openMaps: `在Google地图中打开`,
      changeRoom: `更换房间`,
      room: `房间`,
      photoPending: `照片准备中`,
      pendingInfo: `此信息仍在准备中，请通过Airbnb消息联系房东，我们会尽快回复您。`,
      ssid5: `5GHz网络名称（SSID）`,
      ssid24: `2.4GHz网络名称（SSID）`,
      password: `密码`,
      side: { left: `左`, right: `右` },
      backHome: `回到首页`
    },
    nav: { home: `首页`, wifi: `Wi-Fi`, checkout: `入住/退房`, emergency: `紧急` },
    home: {
      greeting: `欢迎入住 YOKOHAMA Still Retreat`,
      subtitle: `祝您在横滨鹤见度过宁静舒适的时光。`,
      quickTitle: `常用信息`,
      menuTitle: `完整菜单`
    },
    roomselect: {
      title: `请问您入住哪个房间？`,
      subtitle: `请选择您的房间，查看专属入住指南。`
    },
    menu: {
      translation: `翻译工具`,
      access: `交通方式`,
      checkin: `入住与退房`,
      wifi: `Wi-Fi`,
      appliances: `家电与设备`,
      projector: `投影仪`,
      garbage: `垃圾丢弃方式`,
      rules: `住宿规则与禁止事项`,
      nearby: `附近店家`,
      parking: `投币式停车场`,
      trouble: `常见问题排解`,
      emergency: `紧急联络方式・避难地点`,
      taxi: `给出租车司机看`
    },
    taxi: {
      intro: `<p class="taxi-lead">请将此画面出示给出租车司机。</p>`,
      card: TAXI_JA.card,
      p1: TAXI_JA.p1,
      p2: TAXI_JA.p2,
      p3: TAXI_JA.p3,
      turn: TAXI_JA.turn,
      map: TAXI_JA.map
    },
    translation: {
      intro: `<p>建议使用<strong>Google 镜头</strong>进行即时翻译，只要用相机对准文本，就能立即翻译。</p><ul><li>安装Google App</li><li>点击Google镜头图标</li><li>点击<strong>「翻译」</strong></li><li>将相机对准想翻译的文本</li></ul>`
    },
    access: {
      mapIntro: `<p>点击下方地址即可打开Google地图。</p>`,
      haneda: `<p><strong>从羽田机场出发</strong>（无需换乘，约40分钟）</p><ol class="route"><li class="route__stop">羽田机场<span class="route__ja">羽田空港 / Haneda Airport</span></li><li class="route__ride"><span class="route__line route__line--keikyu">京急机场线</span>乘坐开往逗子・叶山方向的“<strong>急行</strong>”（无需换乘）<span class="route__time">约20分钟</span><span class="route__note">请乘坐“急行”或“普通”列车。“快特”和“特急”不在京急鹤见站停车。</span></li><li class="route__stop">京急鹤见<span class="route__ja">京急鶴見 / Keikyu Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">约17分钟</span><span class="route__note">出检票口后，经人行天桥越过JR鹤见站，走向西口一侧。途中有一小段上坡。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=%E4%BA%AC%E6%80%A5%E9%B6%B4%E8%A6%8B%E9%A7%85&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地图中查看步行路线</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Haneda%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>在Google地图中查询当前换乘方式</span></a>`,
      narita: `<p><strong>从成田机场出发</strong>有以下两条路线（均约需1小时40分钟至2小时）。</p>`,
      naritaA: `<p><strong>路线A：京成Skyliner＋JR</strong>（最快）</p><ol class="route"><li class="route__stop">成田机场<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--skyliner">京成Skyliner</span>到日暮里<span class="route__time">约40分钟</span><span class="route__note">全部为指定座位。</span></li><li class="route__stop">日暮里<span class="route__ja">日暮里 / Nippori</span><span class="route__note">换乘JR</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京滨东北线</span>开往“大船”“矶子”方向<span class="route__time">约45分钟</span></li><li class="route__stop">JR鹤见<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">约11分钟</span><span class="route__note">从西口出站后前行。道路基本平坦。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地图中查看步行路线</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol>`,
      naritaB: `<p><strong>路线B：JR成田特快（N'EX）</strong>（换乘少，可放大件行李）</p><ol class="route"><li class="route__stop">成田机场<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--nex">JR成田特快</span>到横滨<span class="route__time">约1小时30分钟</span><span class="route__note">全部为指定座位。只有开往“大船”等部分列车会在横滨停车。若乘坐的列车不在横滨停车，请在品川下车，换乘京滨东北线开往“大船”方向的列车。</span></li><li class="route__stop">横滨<span class="route__ja">横浜 / Yokohama</span><span class="route__note">换乘</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京滨东北线</span>开往“东京”“大宫”方向<span class="route__time">约10分钟</span></li><li class="route__stop">JR鹤见<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">约11分钟（西口）</span><span class="route__note">从西口出站后前行。道路基本平坦。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地图中查看步行路线</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Narita%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>在Google地图中查询当前换乘方式</span></a>`,
      taxi: `<p>搭乘出租车时，请将下方地址出示给司机看。</p><ul><li>从羽田机场出发：约30分钟，车费约6,000〜7,000日圆</li><li>从JR鹤见站出发：约3分钟，车费约500日圆</li><li>22:00〜翌5:00会加收两成深夜加成费用</li></ul><p><strong>重要提醒：</strong>建筑物位于离开大马路后的一条窄路旁，司机很容易错过入口。上车后，请向司机出示<a href="#/taxi">给司机看的画面</a>。</p>`,
      taxiStandKeikyu: `<p><strong>京急鹤见站出租车乘车点：</strong>从西口出站后左转，走下楼梯即可看到「TAXI」的招牌。</p>`,
      taxiStandJR: `<p><strong>JR鹤见站出租车乘车点：</strong>走下楼梯后穿越斑马线并左转，即可看到「TAXI」的招牌。</p>`,
      exterior: `<p>建筑物外观。</p>`
    },
    checkin: {
      intro: `<p>本住宿采自助入住，现场无工作人员常驻，请提前确认以下步骤。</p>`,
      times: `<p><strong>入住：</strong>16:00起<br><strong>退房：</strong>10:00前</p><p>清洁人员将于10:10抵达，请于10:00前退房。若逾10:00退房，可能会加收一晚的费用。</p>`,
      checkout: `<p><strong>退房前请您配合（10:00前）</strong></p><ul><li>如果使用了衣柜里的备用枕头或被子，请不要放回衣柜，留在客厅即可。</li><li>用过的毛巾请放入洗衣机的篮子里。</li><li>垃圾直接留在房间里即可（<a href="#/garbage">垃圾丢弃方式</a>）。</li><li>若使用了钥匙盒中的钥匙，请放回钥匙盒。</li><li>离开房间时，请按电子锁上的<strong>锁形图标</strong>上锁。</li></ul>`,
      checkoutProjector: `<p>若您在201号房的投影仪上登录了YouTube、Netflix等，请务必退出登录（<a href="#/projector/logout">退出登录的方法</a>）。</p>`,
      steps: `<p>您的房间是<strong>{room}号房</strong>，位于{floor}楼。房门为电子锁。</p><ul><li>输入密码并按下解锁按钮（密码会在入住当天早上通过Airbnb消息发送给您）。</li><li><strong>请慢慢地、用力按下按钮。</strong>如果解锁按钮按得太快，门可能打不开。稍微按久一点，门就会马上打开。</li></ul>`,
      stepsLock: `<p>外出或退房时请务必将门锁上。</p>`,
      keybox: `<p>若电子锁无法使用，可从钥匙盒中取出钥匙使用。钥匙盒位于房门<strong>{keyboxSide}侧</strong>的燃气表处。共有两个钥匙盒，使用任一个皆可。钥匙盒密码与电子锁相同。</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `请扫描QR code，或直接输入下方信息连接。`,
      tip: `不确定选哪个时，请连接<strong>5GHz（名称以「-A」结尾）</strong>。若连不上或信号较弱，请试试<strong>2.4GHz（名称以「-G」结尾）</strong>。`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `空调`, induction: `IH电磁炉`, microwave: `微波炉`, kettle: `电热水壶`, coffee: `挂耳式咖啡`, ricecooker: `电饭煲`, washer: `洗衣机`, wire: `室内晒衣绳`, circulator: `循环扇`, iron: `蒸汽熨斗`, dolcegusto: `胶囊咖啡机（雀巢 Dolce Gusto Genio 2）` },
      ac: `<p>请使用附赠的遥控器操作。</p>`,
      induction: `<p>位于厨房。下图为操作面板。</p>`,
      inductionSteps: `<p><strong>使用方法</strong></p><ul><li>将锅子放在面板中央（没有放锅子时无法加热）。</li><li><strong>① 电源：</strong>长按2秒以上。</li><li><strong>② 加热 开／关：</strong>按下后，再按 <strong>③ ◀ 或 ▶</strong> 即开始加热。</li><li>用 ◀ ▶ 调整火力（共5段：弱、1、2、3、强）。</li><li>使用完毕后，按「加热 开／关」停止，再按「电源」关闭。</li></ul><p><strong>可使用的锅具：</strong>磁铁可吸附的平底锅，例如铁锅、不锈钢锅（锅底直径约12～24厘米）。砂锅、玻璃、铝、铜制锅具无法使用。若火力指示灯全部闪烁且无法加热，表示锅具不适用或没有放在中央。</p><p><strong>注意：</strong>使用后面板仍然很烫，请在「高温注意」（高温注意）指示灯熄灭前不要触摸。使用中请勿离开。</p>`,
      microwave: ``,
      microwaveIris: `<p><strong>最简单的用法</strong></p><ul><li>放入食物、关上门后，按下 <strong>③ 开始（あたためスタート）</strong>，即以500W加热30秒。每多按一次增加30秒（最长5分钟）。</li></ul><p><strong>自行设置时间</strong></p><ul><li><strong>① 火力（レンジ）：</strong>按一次为500W（再按一次为200W）。</li><li><strong>② 时间：</strong>按「＋1分钟（1分）」与「＋10秒（10秒）」设置时间。</li><li><strong>③ 开始（あたためスタート）：</strong>按下。</li><li>中途想停止时，请按「取消（とりけし）」。</li></ul><p><strong>其他按键</strong></p><ul><li>饮料（飲み物）：按一次为1杯、按两次为2杯，再按「开始」。</li><li>白饭（ごはん）：按下后再按「开始」。</li><li>解凍（解凍）：按下后，用「1分/100g」「10秒/10g」设置重量（100～500克），再按「开始」。</li></ul>`,
      microwaveNitori: `<p><strong>使用方法</strong></p><ul><li>将食物放在中央，关上门。</li><li><strong>① 上方旋钮（火力）：</strong>一般加热请转到「500W」，解冻请转到「200W」。</li><li><strong>② 下方旋钮（定时）：</strong>向右转动设置时间。设置后约3秒会自动开始（没有开始键）。</li><li>中途想停止时，请将下方旋钮转回「切」（关），或把门打开。</li><li>结束时会响三声。</li></ul><p>定时刻度中，最前面的「20」「40」是秒，从「1」开始是分钟。请在设置时间之前先选好火力（之后无法更改）。</p>`,
      microwaveCaution: `<p><strong>注意：</strong>不可使用金属容器、铝箔纸，以及有金银花纹的器皿。带壳的蛋、水煮蛋、密封的容器、罐头、调理包请勿直接加热。请勿空烧。</p>`,
      kettle: `<p>请注意：水煮沸后，除握把外的壶身也会变烫，请小心使用。</p>`,
      kettleNitori: `<p><strong>使用方法</strong></p><ul><li>将水壶从底座上取下。</li><li><strong>①</strong> 转动壶盖，使壶盖上的记号对准「开锁」图标，再把壶盖向上取下。</li><li>加水。请勿超过内侧的「MAX」标示（约0.8升），水量也不可太少（至少150毫升）。</li><li>盖回壶盖，转动使记号对准「上锁」图标。将水壶放回底座。</li><li><strong>②</strong> 将电源开关往下压即为「ON」，指示灯亮起。</li><li>水煮沸后，开关会自动弹回，指示灯熄灭。</li></ul><p>装满（0.8升）约5分钟，一杯份（0.15升）约1分半钟即可煮沸。</p><p><strong>注意：</strong>壶盖若未盖紧，煮沸后可能不会自动断电。加热中与刚煮沸时请勿打开壶盖，并小心壶嘴冒出的蒸汽。请勿放入水以外的东西。</p>`,
      kettleIris: `<p><strong>使用方法</strong></p><ul><li>将水壶从底座上取下，拿开壶盖并加水。水量请介于内侧的「MIN」与「MAX」线之间（0.3～0.6升）。</li><li>将壶盖盖紧，把水壶放回底座。</li><li><strong>① 电源：</strong>按下电源键。</li><li><strong>② MODE：</strong>按下选择温度：100℃（煮沸）／Coffee（90℃）／Green Tea（70℃）。</li><li><strong>③ START：</strong>按下。完成后会响三声并自动停止。</li><li>中途想停止时，请再按一次「START」。</li></ul><p>按「−」「＋」可在60～100℃之间以5℃为单位调整温度。加热完成后按「KEEP WARM」，最长可保温1小时。</p><p><strong>注意：</strong>加热中与刚煮沸时请勿打开壶盖。壶身的金属部分会变烫，请握住把手。请勿放入水以外的东西。</p>`,
      coffee: `<p>厨房设有挂耳式咖啡架，欢迎享用手冲咖啡！</p>`,
      dolceIntro: `<p>放入专用胶囊、拨动拨杆，即可一杯一杯地冲煮咖啡。请依照下方步骤 1～7 使用。</p>`,
      dolceWater: `<p><strong>1. 加水</strong></p><ul><li>取下机身后方的水箱，装入自来水。<strong>请勿超过「MAX」线。</strong></li><li>将水箱装回机身。</li><li>请勿加入水以外的东西（热水、牛奶等）。</li></ul>`,
      dolcePower: `<p><strong>2. 打开电源</strong></p><ul><li>插上插头，按下机身上方的电源键。</li><li>电源键<strong>红灯闪烁</strong>时表示正在加热（约30秒），变成<strong>绿灯常亮</strong>后即可使用。</li></ul>`,
      dolceCup: `<p><strong>3. 放置杯子</strong></p><ul><li>将杯子放在出水口下方的托盘上。</li></ul>`,
      dolceLevel: `<p><strong>4. 调整刻度</strong></p><ul><li>胶囊的上盖印有以横线数量表示的<strong>刻度</strong>。</li><li>将机身上方的小拨杆<strong>上下</strong>拨动，使绿灯的数量与胶囊上的刻度相同。</li></ul>`,
      dolceCapsule: `<p><strong>5. 放入胶囊</strong></p><ul><li>抬起正面的银色把手，将胶囊托架向外拉出。</li><li>把胶囊放入托架，推回机身，再把把手压下。</li></ul>`,
      dolceBrew: `<p><strong>6. 拨动拨杆冲煮</strong></p><ul><li>将拨杆拨向<strong>右侧（红色）</strong>，即可冲出热饮。</li><li>达到设置的水量后会自动停止，拨杆回到中间。若想中途停止，请用手将拨杆拨回中间。</li><li>将拨杆拨向<strong>左侧（蓝色）</strong>，会流出水箱内原本温度的水（本机没有冷却功能）。想喝冰饮时，请冲入放有冰块的杯子。</li></ul>`,
      dolceFinish: `<p><strong>7. 取出胶囊</strong></p><ul><li>请等到电源键由红灯闪烁变为<strong>绿灯常亮</strong>（约5秒）。</li><li>抬起把手，取出托架，丢弃用过的胶囊。</li><li>用水冲洗托架后装回机身，并压下把手。</li></ul><p><strong>注意：</strong><strong>电源键红灯闪烁时，请绝对不要抬起把手</strong>（热水可能喷出）。刚冲煮完的胶囊很烫，请勿用手触摸。约5分钟未操作，电源会自动关闭。</p>`,
      riceCooker: ``,
      washer: `<p>可从洗衣一路到烘干的滚筒式洗烘一体机（洗衣最多7公斤，烘干最多3.5公斤）。烘干时也会用水，请让连接洗衣机的水龙头保持打开。</p>`,
      washerSteps: `<p><strong>使用方法</strong></p><ul><li>将衣物放入滚筒深处，并把门确实关好。</li><li><strong>① 电源：</strong>按「入」（开）。</li><li><strong>② 程序（コース）：</strong>按到 <strong>標準</strong> 的灯亮起。一般衣物用「標準」即可。</li><li><strong>③ 洗衣／烘干切换（運転切換）：</strong>按下选择。<br>洗濯 = 只洗衣<br>洗～乾 = 洗衣加烘干<br>乾燥 = 只烘干</li><li><strong>④ 开始（スタート）：</strong>按下。</li><li>显示屏会显示建议的洗涤剂用量（例如 0.5 = 半杯盖）约20秒，请在此时放入洗涤剂（洗涤剂不会自动投入）。</li><li>结束后电源会自动关闭。剩余时间显示在显示屏的「残り」旁。</li></ul><p><strong>其他程序指示灯：</strong>時短 = 快洗、部屋干し = 室内晾干用、毛布 = 毛毯、槽洗浄 = 洗衣槽清洁（不放衣物）、おうち流 = 自订。<strong>其他模式指示灯：</strong>除菌・消臭 = 不用水的除臭。</p>`,
      washerDetergent: `<p><strong>放入洗涤剂</strong></p><ul><li>将机身左上方的洗涤剂盒向外拉出。</li><li>洗涤剂请放入后方较大的区域（洗衣粉放中间，洗衣液放右侧）。</li><li>柔顺剂请倒入左前方的小格（标示「柔軟剤」），最多到「満量」线。</li><li>洗衣凝珠请直接放入滚筒内，不要放进洗涤剂盒。</li></ul>`,
      washerAdjust: `<p><strong>想调整时间或次数时</strong></p><p>先按「洗い」（洗涤）、「すすぎ」（漂洗）、「脱水」（脱水）或「乾かす」（烘干），再用 ∨ ∧ 调整。一般情况下不需要更改。</p>`,
      washerNotes: `<p><strong>注意事项</strong></p><ul><li>运转中门会上锁。中途想开门时，请先按「スタート／一時停止」（开始／暂停）暂停，再按「ロック解除」（解除门锁）。</li><li>烘干后滚筒内很烫。按下「ロック解除」后，可能需要10～20分钟冷却，门才会打开。</li><li>要烘干时，衣物量请不要超过洗衣时的一半（3.5公斤）。放太多会烘不干。</li><li>长按「ロック解除」3秒以上会启动儿童安全锁（显示屏显示「L」），门将无法打开。解除时同样长按3秒以上。</li></ul>`,
      wire: `<p>房内设有晒衣绳，可用来晾晒衣物。</p>`,
      wireSteps: `<p><strong>使用方法</strong></p><ul><li><strong>①</strong> 握住钢丝绳前端的圆形旋钮，从墙上的白色主机拉出钢丝绳。</li><li><strong>②</strong> 将旋钮挂入对面墙上固定片的孔中。</li><li><strong>③</strong> 把主机上的圆形旋钮转向「LOCK」，将钢丝绳固定。</li></ul><p><strong>收纳时：</strong>将主机的旋钮往反方向转以解除锁定，把前端从固定片取下，再让钢丝绳慢慢收回主机。</p><p><strong>注意：</strong>承重约20公斤为止。请勿向下拉扯钢丝绳或悬挂在上面。</p>`,
      circulator: `<p>由于天花板较高，冷空气容易堆积在下方、暖空气则聚集在上方。若感觉空调效果不佳，可打开循环扇帮助空气循环。</p>`,
      circulatorSteps: `<p><strong>使用方法</strong></p><ul><li><strong>① 电源（電源 切/入）：</strong>按一下启动，再按一下停止。</li><li><strong>② 风量（風量）：</strong>按 &lt; 或 &gt; 调整风力（共5段，最强为「ターボ」＝涡轮）。</li><li><strong>③ 摆头（首ふり）：</strong>每按一次，会在上下（上下）、左右（左右）、同时、停止之间切换。可由指示灯确认目前状态。</li><li>关机定时（切タイマー）：1、2或4小时后自动停止。</li><li>自然风（リズム）：风力会缓慢变化，接近自然的风。</li></ul><p><strong>注意：</strong>请勿用手扳动机头。想改变方向时，请按「首ふり」让它摆动，到想要的位置再按一次停止。</p>`,
      iron: `<p>浴室层架上备有蒸汽熨斗，使用时请搭配浴室内的烫衣板。</p>`
    },
    projector: {
      titles: { basics: `电源与遥控器`, youtube: `观看 YouTube`, streaming: `观看 Netflix 与 Prime Video`, cast: `投放手机画面`, hdmi: `以 HDMI 连接`, speaker: `当作蓝牙音箱使用`, logout: `退房前`, trouble: `遇到问题时` },
      intro: `<p>201 号房有一台可将影像投射到墙上的投影仪（JMGO PicoPlay+）。您可以观看 YouTube、Netflix、Prime Video 等。</p><div class="notice notice--warn"><p><strong>注意事项</strong></p><ul><li>请勿直视镜头，光线非常强。</li><li>投影时，请勿将机身直接直立摆放在桌面或台面上。要直立投影时，请务必装在房内备有的支架上。机身底部有散热孔，一旦被挡住，会因过热而自动停止运作。</li><li>有人经过镜头前方时，为了保护眼睛，影像会消失，只显示护眼功能已启动的提示消息。这不是故障。离开镜头前方后稍等一下，影像就会自动恢复（也可以按遥控器的③返回键）。</li></ul></div>`,
      basics: `<p>下图为随附的遥控器。本页中的 ①〜⑬ 对应图中的编号。</p>`,
      basicsSteps: `<p><strong>开机</strong></p><ul><li>按下遥控器的<strong>①电源</strong>键。</li><li>若无法开机，请按投影仪机身上的电源按钮（位置请见本页「以 HDMI 连接」图中的「电源按钮」）。</li></ul><p><strong>关机</strong></p><ul><li>按下遥控器的<strong>①电源</strong>键。</li></ul><p><strong>操作方式</strong></p><ul><li>对焦与画面形状会自动调整。</li><li>用<strong>②方向键</strong>选择，按<strong>⑨确认</strong>决定。</li><li>按<strong>③返回</strong>可回到上一步。</li><li>按<strong>⑩主画面</strong>可回到主画面。</li></ul>`,
      youtube: `<p>按下遥控器的<strong>⑥YouTube</strong>键。不需登录即可观看。</p><p>若您登录了自己的账号，退房前请务必注销（请见<a href="#/projector/logout">退房前</a>）。</p>`,
      streaming: `<p>按下遥控器的<strong>⑦Netflix</strong>或<strong>⑬Prime Video</strong>键，并以<strong>您自己的账号</strong>登录观看（本民宿不提供账号）。</p><p>退房前请务必注销（请见<a href="#/projector/logout">退房前</a>）。</p>`,
      cast: `<p>首先，请将手机连上<strong>房间的 5GHz Wi-Fi（名称结尾为「-A」的那一个）</strong>。必须与投影仪连上同一个 Wi-Fi（连上名称结尾为「-G」的 Wi-Fi 时，可能无法投放）。Wi-Fi 信息请见 <a href="#/wifi">Wi-Fi 页面</a>。</p><p><strong>从应用程序投放</strong></p><ul><li>在 YouTube、Prime Video、Disney+ 等应用程序中，点击<strong>投放图标</strong>，再选择<strong>「ysr201」</strong>。</li></ul><p><strong>直接投放 iPhone 的画面</strong></p><ul><li>在投影仪的主画面打开<strong>「Screen Casting」</strong>应用程序。</li><li>在 iPhone 的控制中心点击<strong>屏幕镜像</strong>图标，再选择<strong>「ysr201-0101」</strong>。</li></ul><p><strong>直接投放 Android 的画面</strong></p><ul><li>需要在手机上安装<strong>「JMGO」应用程序</strong>。从应用程序投放，或以 HDMI 连接会比较简单。</li></ul><p><strong>放大播放竖屏视频（Shorts、Reels 等）</strong></p><ul><li>请将机身装在<strong>房内备有的支架</strong>上。</li><li>依照上方「直接投放画面」的方式投放手机画面（从应用程序投放时，不会切换为竖屏）。</li><li>将机身旋转 90 度直立后，画面会切换为竖屏。</li><li>请勿在不使用支架的情况下，将机身直接直立摆放在桌面或台面上。</li></ul><p><strong>Netflix：</strong>请勿从手机投放，请使用投影仪内置的 Netflix 应用程序（遥控器的⑦键）观看。</p>`,
      hdmi: `<p>若想播放电脑等设备的影像，请将 HDMI 线接到投影仪背面的 HDMI 端口（下图的「HDMI」）。</p><ul><li>画面没有切换时，请按遥控器的<strong>⑫切换输入</strong>键。</li><li>要回到投影仪的主画面时，请按<strong>⑩主画面</strong>键。</li></ul>`,
      speaker: `<p>可以不投射影像，只用来播放手机里的音乐。</p><ul><li><strong>长按</strong>机身上的<strong>动作按钮</strong>（有三个点的按钮，位置请见「以 HDMI 连接」的图）。若出现菜单，请选择<strong>蓝牙音箱（Bluetoothスピーカー）</strong>。影像会停止，并切换为音箱。</li><li>在手机的蓝牙设置中选择<strong>「ysr201」</strong>进行连接。</li><li>当作音箱使用时，可以将机身直立摆放。</li><li>要回到影像时，请按遥控器的<strong>③返回</strong>，并将机身横放回原状。</li></ul>`,
      logout: `<div class="notice notice--warn"><p><strong>退房前，请务必注销。</strong></p><p>退房前，请务必注销您登录过的所有应用程序（YouTube、Netflix、Prime Video 等）。若未注销，下一位住客就能使用您的账号。</p><p>注销可在各应用程序的账号或设置菜单中进行。</p></div>`,
      trouble: `<ul><li><strong>遥控器没反应：</strong>请将遥控器靠近投影仪，同时长按<strong>③返回</strong>与<strong>⑩主画面</strong>约 5 秒。画面下方出现「连接完成」的消息，就可以使用了。</li><li><strong>影像突然消失：</strong>有人经过镜头前方时，为了保护眼睛，影像会消失，只显示护眼功能已启动的提示消息。这不是故障。离开镜头前方后稍等一下，影像就会自动恢复（也可以按遥控器的③返回键）。</li><li><strong>无法对焦：</strong>若光线照到桌面，可能无法对焦。请将投影仪移到桌子前缘，或稍微向上倾斜。若仍无法改善，请试试<strong>⑤设置（設定）</strong> &gt; 投影仪设置（プロジェクター設定） &gt; 对焦（フォーカス） &gt; 自动对焦（オートフォーカス）。</li><li><strong>自己关机了：</strong>一段时间没有操作会自动关机。请按投影仪机身的电源按钮重新开机。</li><li><strong>运行不正常：</strong>长按<strong>①电源</strong>键，选择<strong>「Restart（再起動）」</strong>，即「重新启动」。</li></ul><p><strong>请勿运行「重设」（恢复原厂设置，出荷時設定にリセット）。</strong>所有设置都会被清除。若问题仍未解决，请通过 Airbnb 消息联系房东。</p>`
    },
    garbage: {
      sorting: `<p><strong>房内的分类方式：</strong>房内的垃圾桶贴有标签。请依照标签分类丢弃。</p><ul><li><strong>可燃垃圾</strong>（Burnable）</li><li><strong>塑料瓶</strong>（PET-Bottles）</li><li><strong>玻璃瓶・罐子</strong>（Bottles &amp; Cans）</li></ul>`,
      body: `<p><strong>垃圾桶满了时：</strong>请将分类好的垃圾放入房外垃圾置放处的金属制收纳箱。只要已分类，放入哪一个收纳箱皆可。</p><p>退房时，垃圾留在房内的垃圾桶即可。</p><p>请勿丢到附近的垃圾集中点或马路上（不会被收走）。</p>`
    },
    rules: {
      packages: `<p>由于本住宿无现场工作人员，恕无法于入住前代收包裹。入住期间收取包裹则没有问题。</p>`,
      neighborsTitle: `请体谅左邻右舍`,
      neighbors: `<p>这里是安静的住宅区。为了让附近居民能安心生活，恳请您配合。</p><ul><li><strong>声音：</strong>请避免大声交谈或播放音乐。晚上9点以后，请关上窗户，保持安静。夜间开关玄关门时也请放轻动作。</li><li><strong>户外：</strong>请勿在建筑物前或通道等户外聚集饮食、举办聚会。</li><li><strong>乐器：</strong>室内不可演奏乐器。</li><li><strong>垃圾：</strong>请依照房内垃圾桶上的标签，分为「可燃垃圾」「塑料瓶」「玻璃瓶・罐子」。垃圾桶满了时，请放入房外垃圾置放处的金属制收纳箱。请勿丢到附近的垃圾集中点或马路上。</li><li><strong>吸烟：</strong>室内及整个馆区皆禁烟。也请勿在建筑物周围的马路上吸烟或乱丢烟蒂。</li><li><strong>车辆：</strong>请勿在路边停车，请使用投币式停车场。</li></ul>`,
      fireTitle: `预防火灾`,
      fire: `<ul><li><strong>炉具：</strong>为IH（电磁）炉，不需要操作燃气总阀。烹调时请勿离开，使用完毕后请关闭电源。</li><li><strong>明火：</strong>室内不可使用蜡烛、线香、烟火等会用到火的物品。</li><li><strong>灭火器：</strong>放在房间外的共用空间（走廊・楼梯附近）。<br>①拔掉黄色安全插销 → ②将喷管对准起火处 → ③用力握紧握把</li><li><strong>避难：</strong>火势很大时（快要烧到天花板时），请不要尝试灭火，立刻逃生。请从玄关出去。2楼的房间请走室外楼梯下楼。</li><li><strong>报案：</strong>请拨打119。要告知的地址在「<a href="#/emergency">紧急联络方式・避难地点</a>」页面。</li></ul>`,
      prohibitedTitle: `禁止事项`,
      prohibitedList: `<ul><li>穿鞋进入室内</li><li>吸烟（房间内及整栋建筑范围皆全面禁烟）</li><li>晚上9点后或深夜制造噪音</li><li>造成邻居困扰</li><li>携入或留宿未登记的访客</li><li>故意损坏房间或设备，或未通报损坏情况</li></ul>`,
      penaltyTitle: `若有违反规定或造成损害`,
      penaltyList: `<ul><li><strong>吸烟：</strong>一经确认，将终止住宿并请您退房（不予退款）。除臭及清洁所需的实际费用，也请您负担。</li><li><strong>噪音、对邻居造成困扰：</strong>我们会先向您发出提醒。若未改善，将终止住宿并请您退房（不予退款）。</li><li><strong>未登记的人员留宿：</strong>将酌收额外的住宿费用，或终止住宿。</li><li><strong>严重脏污：</strong>若因一般清洁无法去除的脏污等而需要额外清洁，请负担该清洁的实际费用。</li><li><strong>遗失钥匙、损坏设备或物品：</strong>请负担更换、修理所需的实际费用。若有损坏，请立即告知我们。</li></ul>`
    },
    nearby: {
      intro: `<p>以下为从JR鹤见站及从本住宿出发的步行时间。</p><ul><li><strong>全家便利店 鹤见西口店</strong>（24小时）— 距JR鹤见站2分钟／距本住宿8分钟</li><li><strong>罗森 鹤见站西口店</strong>（24小时）— 距JR鹤见站1分钟／距本住宿9分钟</li><li><strong>7-Eleven 横滨丰冈町中央店</strong>（24小时）— 距JR鹤见站2分钟／距本住宿9分钟</li><li><strong>SEIYU超市 鹤见店</strong>（9:00〜23:00）— 距JR鹤见站2分钟／距本住宿9分钟</li><li><strong>京急超市 鹤见西口店</strong>（平日10:00〜23:00，假日10:00〜21:00）— 距JR鹤见站1分钟／距本住宿10分钟</li></ul>`
    },
    parking: {
      intro: `<p>以下为邻近的投币式停车场（皆位于车站往本住宿的上坡路段）。点击地址即可打开Google地图。费用可能调整，请以现场告示为准。</p><ul><li><strong>Times鹤见寺谷第3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">鹤见区寺谷2-6</a>。步行4分钟（290米）。220日圆/30分。最高1,000日圆/24小时，19:00〜8:00最高440日圆（最长可停48小时）。</li><li><strong>Shinkou Park鹤见寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">寺谷2-1-21</a>。步行4分钟（290米）。200日圆/30分。9:00〜18:00最高900日圆，18:00〜9:00最高400日圆。</li><li><strong>Times鹤见寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">寺谷1-3</a>。步行4分钟（350米）。200日圆/20分。最高1,200日圆/24小时，19:00〜8:00最高500日圆。</li><li><strong>Time Parking鹤见</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">鹤见2-3-45</a>。步行4分钟（230米），有陡峭楼梯。8:00〜20:00：300日圆/30分，最高1,200日圆/12小时。20:00〜8:00：100日圆/1小时，最高400日圆/12小时。</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>玄关电子锁无法使用时：</strong>请先慢慢地、用力重新按一次按钮（解锁按钮稍微按久一点）。如果还是打不开，请从房门<strong>{keyboxSide}侧</strong>燃气表处的钥匙盒中取出钥匙使用。密码与电子锁相同（共有两个钥匙盒，使用任一个皆可）。若仍无法打开，请通过Airbnb消息联系我们。</p>`,
      hotwater: `<p><strong>淋浴间没有热水时：</strong>请按下热水控制面板左上方的电源按钮。若电源按钮的绿灯亮起，即使没有显示数字，热水仍在供应中。</p>`,
      power: `<p><strong>停电时：</strong>电源总开关位于玄关处，请打开盖子并将开关往上扳起。</p>`,
      lostFound: `<p><strong>遗失物品时：</strong>请通过预订平台传消息联系我们，清洁人员会协助确认，若寻获会以货到付款方式为您寄送。退房后3天内若未收到您的联系，遗失物将不另行通知径行处理。雨伞、毛巾等低价值物品将不另行通知直接处理。</p>`
    },
    emergency: {
      numbers: `<p><strong>救护车・火警：</strong>119<br><strong>警察：</strong>110</p>`,
      addressToTell: `<p>如需报案或求助，请告知这个地址：</p>`,
      evacuation: `<p><strong>避难地点</strong>（地震、水灾、土石流）：丰冈小学（横浜市鶴見区豊岡町27-1）— 步行约11分钟</p>`,
      hostContact: `<p>其他事宜请通过Airbnb消息联系房东。</p>`
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
    nav: { home: `首頁`, wifi: `Wi-Fi`, checkout: `入住/退房`, emergency: `緊急` },
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
      projector: `投影機`,
      garbage: `垃圾丟棄方式`,
      rules: `住宿規則與禁止事項`,
      nearby: `附近店家`,
      parking: `投幣式停車場`,
      trouble: `常見問題排解`,
      emergency: `緊急聯絡方式・避難地點`,
      taxi: `給計程車司機看`
    },
    taxi: {
      intro: `<p class="taxi-lead">請將此畫面出示給計程車司機。</p>`,
      card: TAXI_JA.card,
      p1: TAXI_JA.p1,
      p2: TAXI_JA.p2,
      p3: TAXI_JA.p3,
      turn: TAXI_JA.turn,
      map: TAXI_JA.map
    },
    translation: {
      intro: `<p>建議使用<strong>Google 鏡頭</strong>進行即時翻譯，只要用相機對準文字，就能立即翻譯。</p><ul><li>安裝Google App</li><li>點選Google鏡頭圖示</li><li>點選<strong>「翻譯」</strong></li><li>將相機對準想翻譯的文字</li></ul>`
    },
    access: {
      mapIntro: `<p>點選下方住址即可開啟Google地圖。</p>`,
      haneda: `<p><strong>從羽田機場出發</strong>（不需轉乘，約40分鐘）</p><ol class="route"><li class="route__stop">羽田機場<span class="route__ja">羽田空港 / Haneda Airport</span></li><li class="route__ride"><span class="route__line route__line--keikyu">京急機場線</span>搭乘開往逗子・葉山方向的「<strong>急行</strong>」（不需轉乘）<span class="route__time">約20分鐘</span><span class="route__note">請搭乘「急行」或「普通」列車。「快特」與「特急」不會停靠京急鶴見站。</span></li><li class="route__stop">京急鶴見<span class="route__ja">京急鶴見 / Keikyu Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">約17分鐘</span><span class="route__note">出閘門後，經天橋越過JR鶴見站，往西口方向前進。途中有一小段上坡。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=%E4%BA%AC%E6%80%A5%E9%B6%B4%E8%A6%8B%E9%A7%85&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地圖中查看步行路線</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Haneda%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>在Google地圖查詢目前的轉乘方式</span></a>`,
      narita: `<p><strong>從成田機場出發</strong>有以下兩條路線（皆約需1小時40分鐘至2小時）。</p>`,
      naritaA: `<p><strong>路線A：京成Skyliner＋JR</strong>（最快）</p><ol class="route"><li class="route__stop">成田機場<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--skyliner">京成Skyliner</span>到日暮里<span class="route__time">約40分鐘</span><span class="route__note">全為指定席。</span></li><li class="route__stop">日暮里<span class="route__ja">日暮里 / Nippori</span><span class="route__note">轉乘JR</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京濱東北線</span>往「大船」「磯子」方向<span class="route__time">約45分鐘</span></li><li class="route__stop">JR鶴見<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">約11分鐘</span><span class="route__note">從西口出站後直走。路面幾乎平坦。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地圖中查看步行路線</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol>`,
      naritaB: `<p><strong>路線B：JR成田特快（N'EX）</strong>（轉乘少，可放大件行李）</p><ol class="route"><li class="route__stop">成田機場<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--nex">JR成田特快</span>到橫濱<span class="route__time">約1小時30分鐘</span><span class="route__note">全為指定席。只有開往「大船」等部分列車會停靠橫濱。若搭乘的列車不停橫濱，請在品川下車，轉乘京濱東北線往「大船」方向的列車。</span></li><li class="route__stop">橫濱<span class="route__ja">横浜 / Yokohama</span><span class="route__note">轉乘</span></li><li class="route__ride"><span class="route__line route__line--jr">JR京濱東北線</span>往「東京」「大宮」方向<span class="route__time">約10分鐘</span></li><li class="route__stop">JR鶴見<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">步行 <span class="route__time">約11分鐘（西口）</span><span class="route__note">從西口出站後直走。路面幾乎平坦。</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">在Google地圖中查看步行路線</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Narita%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>在Google地圖查詢目前的轉乘方式</span></a>`,
      taxi: `<p>搭乘計程車時，請將下方住址出示給司機看。</p><ul><li>從羽田機場出發：約30分鐘，車資約6,000〜7,000日圓</li><li>從JR鶴見站出發：約3分鐘，車資約500日圓</li><li>22:00〜翌5:00會加收兩成深夜加成費用</li></ul><p><strong>重要提醒：</strong>建築物位於離開大馬路後的一條窄路旁，司機很容易錯過入口。上車後，請向司機出示<a href="#/taxi">給司機看的畫面</a>。</p>`,
      taxiStandKeikyu: `<p><strong>京急鶴見站計程車招呼站：</strong>從西口出站後左轉，走下樓梯即可看到「TAXI」的招牌。</p>`,
      taxiStandJR: `<p><strong>JR鶴見站計程車招呼站：</strong>走下樓梯後穿越斑馬線並左轉，即可看到「TAXI」的招牌。</p>`,
      exterior: `<p>建築物外觀。</p>`
    },
    checkin: {
      intro: `<p>本住宿採自助入住，現場無工作人員常駐，請提前確認以下步驟。</p>`,
      times: `<p><strong>入住：</strong>16:00起<br><strong>退房：</strong>10:00前</p><p>清潔人員將於10:10抵達，請於10:00前退房。若逾10:00退房，可能會加收一晚的費用。</p>`,
      checkout: `<p><strong>退房前請您配合（10:00前）</strong></p><ul><li>如果使用了衣櫃裡的備用枕頭或被子，請不要放回衣櫃，留在客廳即可。</li><li>用過的毛巾請放入洗衣機的籃子裡。</li><li>垃圾直接留在房間裡即可（<a href="#/garbage">垃圾丟棄方式</a>）。</li><li>若使用了鑰匙盒中的鑰匙，請放回鑰匙盒。</li><li>離開房間時，請按電子鎖上的<strong>鎖形圖示</strong>上鎖。</li></ul>`,
      checkoutProjector: `<p>若您在201號房的投影機上登入了YouTube、Netflix等，請務必登出（<a href="#/projector/logout">登出方法</a>）。</p>`,
      steps: `<p>您的房間是<strong>{room}號房</strong>，位於{floor}樓。房門為電子鎖。</p><ul><li>輸入密碼並按下解鎖按鈕（密碼會在入住當天早上透過Airbnb訊息傳送給您）。</li><li><strong>請慢慢地、確實地按下按鈕。</strong>如果解鎖按鈕按得太快，門可能打不開。稍微按久一點，門就會馬上打開。</li></ul>`,
      stepsLock: `<p>外出或退房時請務必將門鎖上。</p>`,
      keybox: `<p>若電子鎖無法使用，可從鑰匙盒中取出鑰匙使用。鑰匙盒位於房門<strong>{keyboxSide}側</strong>的瓦斯錶處。共有兩個鑰匙盒，使用任一個皆可。鑰匙盒密碼與電子鎖相同。</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `請掃描QR code，或直接輸入下方資訊連線。`,
      tip: `不確定選哪個時，請連接<strong>5GHz（名稱以「-A」結尾）</strong>。若連不上或訊號較弱，請試試<strong>2.4GHz（名稱以「-G」結尾）</strong>。`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `冷氣`, induction: `IH電磁爐`, microwave: `微波爐`, kettle: `電熱水壺`, coffee: `掛耳式咖啡`, ricecooker: `電子鍋`, washer: `洗衣機`, wire: `室內曬衣繩`, circulator: `循環扇`, iron: `蒸氣熨斗`, dolcegusto: `膠囊咖啡機（雀巢 Dolce Gusto Genio 2）` },
      ac: `<p>請使用附贈的遙控器操作。</p>`,
      induction: `<p>位於廚房。下圖為操作面板。</p>`,
      inductionSteps: `<p><strong>使用方法</strong></p><ul><li>將鍋子放在面板中央（沒有放鍋子時無法加熱）。</li><li><strong>① 電源：</strong>長按2秒以上。</li><li><strong>② 加熱 開／關：</strong>按下後，再按 <strong>③ ◀ 或 ▶</strong> 即開始加熱。</li><li>用 ◀ ▶ 調整火力（共5段：弱、1、2、3、強）。</li><li>使用完畢後，按「加熱 開／關」停止，再按「電源」關閉。</li></ul><p><strong>可使用的鍋具：</strong>磁鐵可吸附的平底鍋，例如鐵鍋、不鏽鋼鍋（鍋底直徑約12～24公分）。砂鍋、玻璃、鋁、銅製鍋具無法使用。若火力指示燈全部閃爍且無法加熱，表示鍋具不適用或沒有放在中央。</p><p><strong>注意：</strong>使用後面板仍然很燙，請在「高溫注意」（高温注意）指示燈熄滅前不要觸摸。使用中請勿離開。</p>`,
      microwave: ``,
      microwaveIris: `<p><strong>最簡單的用法</strong></p><ul><li>放入食物、關上門後，按下 <strong>③ 開始（あたためスタート）</strong>，即以500W加熱30秒。每多按一次增加30秒（最長5分鐘）。</li></ul><p><strong>自行設定時間</strong></p><ul><li><strong>① 火力（レンジ）：</strong>按一次為500W（再按一次為200W）。</li><li><strong>② 時間：</strong>按「＋1分鐘（1分）」與「＋10秒（10秒）」設定時間。</li><li><strong>③ 開始（あたためスタート）：</strong>按下。</li><li>中途想停止時，請按「取消（とりけし）」。</li></ul><p><strong>其他按鍵</strong></p><ul><li>飲料（飲み物）：按一次為1杯、按兩次為2杯，再按「開始」。</li><li>白飯（ごはん）：按下後再按「開始」。</li><li>解凍（解凍）：按下後，用「1分/100g」「10秒/10g」設定重量（100～500公克），再按「開始」。</li></ul>`,
      microwaveNitori: `<p><strong>使用方法</strong></p><ul><li>將食物放在中央，關上門。</li><li><strong>① 上方旋鈕（火力）：</strong>一般加熱請轉到「500W」，解凍請轉到「200W」。</li><li><strong>② 下方旋鈕（定時）：</strong>向右轉動設定時間。設定後約3秒會自動開始（沒有開始鍵）。</li><li>中途想停止時，請將下方旋鈕轉回「切」（關），或把門打開。</li><li>結束時會響三聲。</li></ul><p>定時刻度中，最前面的「20」「40」是秒，從「1」開始是分鐘。請在設定時間之前先選好火力（之後無法更改）。</p>`,
      microwaveCaution: `<p><strong>注意：</strong>不可使用金屬容器、鋁箔紙，以及有金銀花紋的器皿。帶殼的蛋、水煮蛋、密封的容器、罐頭、調理包請勿直接加熱。請勿空燒。</p>`,
      kettle: `<p>請注意：水煮沸後，除握把外的壺身也會變燙，請小心使用。</p>`,
      kettleNitori: `<p><strong>使用方法</strong></p><ul><li>將水壺從底座上取下。</li><li><strong>①</strong> 轉動壺蓋，使壺蓋上的記號對準「開鎖」圖示，再把壺蓋向上取下。</li><li>加水。請勿超過內側的「MAX」標示（約0.8公升），水量也不可太少（至少150毫升）。</li><li>蓋回壺蓋，轉動使記號對準「上鎖」圖示。將水壺放回底座。</li><li><strong>②</strong> 將電源開關往下壓即為「ON」，指示燈亮起。</li><li>水煮沸後，開關會自動彈回，指示燈熄滅。</li></ul><p>裝滿（0.8公升）約5分鐘，一杯份（0.15公升）約1分半鐘即可煮沸。</p><p><strong>注意：</strong>壺蓋若未蓋緊，煮沸後可能不會自動斷電。加熱中與剛煮沸時請勿打開壺蓋，並小心壺嘴冒出的蒸氣。請勿放入水以外的東西。</p>`,
      kettleIris: `<p><strong>使用方法</strong></p><ul><li>將水壺從底座上取下，拿開壺蓋並加水。水量請介於內側的「MIN」與「MAX」線之間（0.3～0.6公升）。</li><li>將壺蓋蓋緊，把水壺放回底座。</li><li><strong>① 電源：</strong>按下電源鍵。</li><li><strong>② MODE：</strong>按下選擇溫度：100℃（煮沸）／Coffee（90℃）／Green Tea（70℃）。</li><li><strong>③ START：</strong>按下。完成後會響三聲並自動停止。</li><li>中途想停止時，請再按一次「START」。</li></ul><p>按「−」「＋」可在60～100℃之間以5℃為單位調整溫度。加熱完成後按「KEEP WARM」，最長可保溫1小時。</p><p><strong>注意：</strong>加熱中與剛煮沸時請勿打開壺蓋。壺身的金屬部分會變燙，請握住把手。請勿放入水以外的東西。</p>`,
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
      washer: `<p>可從洗衣一路到烘乾的滾筒式洗脫烘洗衣機（洗衣最多7公斤，烘乾最多3.5公斤）。烘乾時也會用水，請讓連接洗衣機的水龍頭保持開啟。</p>`,
      washerSteps: `<p><strong>使用方法</strong></p><ul><li>將衣物放入滾筒深處，並把門確實關好。</li><li><strong>① 電源：</strong>按「入」（開）。</li><li><strong>② 行程（コース）：</strong>按到 <strong>標準</strong> 的燈亮起。一般衣物用「標準」即可。</li><li><strong>③ 洗衣／烘乾切換（運転切換）：</strong>按下選擇。<br>洗濯 = 只洗衣<br>洗～乾 = 洗衣加烘乾<br>乾燥 = 只烘乾</li><li><strong>④ 開始（スタート）：</strong>按下。</li><li>顯示幕會顯示建議的洗劑用量（例如 0.5 = 半杯蓋）約20秒，請在此時放入洗劑（洗劑不會自動投入）。</li><li>結束後電源會自動關閉。剩餘時間顯示在顯示幕的「残り」旁。</li></ul><p><strong>其他行程燈號：</strong>時短 = 快洗、部屋干し = 室內晾乾用、毛布 = 毛毯、槽洗浄 = 洗衣槽清潔（不放衣物）、おうち流 = 自訂。<strong>其他模式燈號：</strong>除菌・消臭 = 不用水的除臭。</p>`,
      washerDetergent: `<p><strong>放入洗劑</strong></p><ul><li>將機身左上方的洗劑盒向外拉出。</li><li>洗劑請放入後方較大的區域（洗衣粉放中間，洗衣精放右側）。</li><li>柔軟精請倒入左前方的小格（標示「柔軟剤」），最多到「満量」線。</li><li>洗衣膠囊請直接放入滾筒內，不要放進洗劑盒。</li></ul>`,
      washerAdjust: `<p><strong>想調整時間或次數時</strong></p><p>先按「洗い」（洗滌）、「すすぎ」（清洗）、「脱水」（脫水）或「乾かす」（烘乾），再用 ∨ ∧ 調整。一般情況下不需要更改。</p>`,
      washerNotes: `<p><strong>注意事項</strong></p><ul><li>運轉中門會上鎖。中途想開門時，請先按「スタート／一時停止」（開始／暫停）暫停，再按「ロック解除」（解除門鎖）。</li><li>烘乾後滾筒內很燙。按下「ロック解除」後，可能需要10～20分鐘冷卻，門才會打開。</li><li>要烘乾時，衣物量請不要超過洗衣時的一半（3.5公斤）。放太多會烘不乾。</li><li>長按「ロック解除」3秒以上會啟動兒童安全鎖（顯示幕顯示「L」），門將無法打開。解除時同樣長按3秒以上。</li></ul>`,
      wire: `<p>房內設有曬衣繩，可用來晾曬衣物。</p>`,
      wireSteps: `<p><strong>使用方法</strong></p><ul><li><strong>①</strong> 握住鋼索前端的圓形旋鈕，從牆上的白色主機拉出鋼索。</li><li><strong>②</strong> 將旋鈕掛入對面牆上固定片的孔中。</li><li><strong>③</strong> 把主機上的圓形旋鈕轉向「LOCK」，將鋼索固定。</li></ul><p><strong>收納時：</strong>將主機的旋鈕往反方向轉以解除鎖定，把前端從固定片取下，再讓鋼索慢慢收回主機。</p><p><strong>注意：</strong>承重約20公斤為止。請勿向下拉扯鋼索或懸掛在上面。</p>`,
      circulator: `<p>由於天花板較高，冷空氣容易堆積在下方、暖空氣則聚集在上方。若感覺冷氣效果不佳，可開啟循環扇幫助空氣循環。</p>`,
      circulatorSteps: `<p><strong>使用方法</strong></p><ul><li><strong>① 電源（電源 切/入）：</strong>按一下啟動，再按一下停止。</li><li><strong>② 風量（風量）：</strong>按 &lt; 或 &gt; 調整風力（共5段，最強為「ターボ」＝渦輪）。</li><li><strong>③ 擺頭（首ふり）：</strong>每按一次，會在上下（上下）、左右（左右）、同時、停止之間切換。可由指示燈確認目前狀態。</li><li>關機定時（切タイマー）：1、2或4小時後自動停止。</li><li>自然風（リズム）：風力會緩慢變化，接近自然的風。</li></ul><p><strong>注意：</strong>請勿用手扳動機頭。想改變方向時，請按「首ふり」讓它擺動，到想要的位置再按一次停止。</p>`,
      iron: `<p>浴室層架上備有蒸氣熨斗，使用時請搭配浴室內的燙衣板。</p>`
    },
    projector: {
      titles: { basics: `電源與遙控器`, youtube: `觀看 YouTube`, streaming: `觀看 Netflix 與 Prime Video`, cast: `投放手機畫面`, hdmi: `以 HDMI 連接`, speaker: `當作藍牙喇叭使用`, logout: `退房前`, trouble: `遇到問題時` },
      intro: `<p>201 號房有一台可將影像投射到牆上的投影機（JMGO PicoPlay+）。您可以觀看 YouTube、Netflix、Prime Video 等。</p><div class="notice notice--warn"><p><strong>注意事項</strong></p><ul><li>請勿直視鏡頭，光線非常強。</li><li>投影時，請勿將機身直接直立擺放在桌面或檯面上。要直立投影時，請務必裝在房內備有的支架上。機身底部有散熱孔，一旦被擋住，會因過熱而自動停止運作。</li><li>有人經過鏡頭前方時，為了保護眼睛，影像會消失，只顯示護眼功能已啟動的提示訊息。這不是故障。離開鏡頭前方後稍等一下，影像就會自動恢復（也可以按遙控器的③返回鍵）。</li></ul></div>`,
      basics: `<p>下圖為隨附的遙控器。本頁中的 ①〜⑬ 對應圖中的編號。</p>`,
      basicsSteps: `<p><strong>開機</strong></p><ul><li>按下遙控器的<strong>①電源</strong>鍵。</li><li>若無法開機，請按投影機機身上的電源按鈕（位置請見本頁「以 HDMI 連接」圖中的「電源按鈕」）。</li></ul><p><strong>關機</strong></p><ul><li>按下遙控器的<strong>①電源</strong>鍵。</li></ul><p><strong>操作方式</strong></p><ul><li>對焦與畫面形狀會自動調整。</li><li>用<strong>②方向鍵</strong>選擇，按<strong>⑨確認</strong>決定。</li><li>按<strong>③返回</strong>可回到上一步。</li><li>按<strong>⑩主畫面</strong>可回到主畫面。</li></ul>`,
      youtube: `<p>按下遙控器的<strong>⑥YouTube</strong>鍵。不需登入即可觀看。</p><p>若您登入了自己的帳號，退房前請務必登出（請見<a href="#/projector/logout">退房前</a>）。</p>`,
      streaming: `<p>按下遙控器的<strong>⑦Netflix</strong>或<strong>⑬Prime Video</strong>鍵，並以<strong>您自己的帳號</strong>登入觀看（本民宿不提供帳號）。</p><p>退房前請務必登出（請見<a href="#/projector/logout">退房前</a>）。</p>`,
      cast: `<p>首先，請將手機連上<strong>房間的 5GHz Wi-Fi（名稱結尾為「-A」的那一個）</strong>。必須與投影機連上同一個 Wi-Fi（連上名稱結尾為「-G」的 Wi-Fi 時，可能無法投放）。Wi-Fi 資訊請見 <a href="#/wifi">Wi-Fi 頁面</a>。</p><p><strong>從應用程式投放</strong></p><ul><li>在 YouTube、Prime Video、Disney+ 等應用程式中，點選<strong>投放圖示</strong>，再選擇<strong>「ysr201」</strong>。</li></ul><p><strong>直接投放 iPhone 的畫面</strong></p><ul><li>在投影機的主畫面開啟<strong>「Screen Casting」</strong>應用程式。</li><li>在 iPhone 的控制中心點選<strong>螢幕鏡像</strong>圖示，再選擇<strong>「ysr201-0101」</strong>。</li></ul><p><strong>直接投放 Android 的畫面</strong></p><ul><li>需要在手機上安裝<strong>「JMGO」應用程式</strong>。從應用程式投放，或以 HDMI 連接會比較簡單。</li></ul><p><strong>放大播放直式影片（Shorts、Reels 等）</strong></p><ul><li>請將機身裝在<strong>房內備有的支架</strong>上。</li><li>依照上方「直接投放畫面」的方式投放手機畫面（從應用程式投放時，不會切換為直式）。</li><li>將機身旋轉 90 度直立後，畫面會切換為直式。</li><li>請勿在不使用支架的情況下，將機身直接直立擺放在桌面或檯面上。</li></ul><p><strong>Netflix：</strong>請勿從手機投放，請使用投影機內建的 Netflix 應用程式（遙控器的⑦鍵）觀看。</p>`,
      hdmi: `<p>若想播放電腦等裝置的影像，請將 HDMI 線接到投影機背面的 HDMI 埠（下圖的「HDMI」）。</p><ul><li>畫面沒有切換時，請按遙控器的<strong>⑫切換輸入</strong>鍵。</li><li>要回到投影機的主畫面時，請按<strong>⑩主畫面</strong>鍵。</li></ul>`,
      speaker: `<p>可以不投射影像，只用來播放手機裡的音樂。</p><ul><li><strong>長按</strong>機身上的<strong>動作按鈕</strong>（有三個點的按鈕，位置請見「以 HDMI 連接」的圖）。若出現選單，請選擇<strong>藍牙喇叭（Bluetoothスピーカー）</strong>。影像會停止，並切換為喇叭。</li><li>在手機的藍牙設定中選擇<strong>「ysr201」</strong>進行連線。</li><li>當作喇叭使用時，可以將機身直立擺放。</li><li>要回到影像時，請按遙控器的<strong>③返回</strong>，並將機身橫放回原狀。</li></ul>`,
      logout: `<div class="notice notice--warn"><p><strong>退房前，請務必登出。</strong></p><p>退房前，請務必登出您登入過的所有應用程式（YouTube、Netflix、Prime Video 等）。若未登出，下一位住客就能使用您的帳號。</p><p>登出可在各應用程式的帳號或設定選單中進行。</p></div>`,
      trouble: `<ul><li><strong>遙控器沒反應：</strong>請將遙控器靠近投影機，同時長按<strong>③返回</strong>與<strong>⑩主畫面</strong>約 5 秒。畫面下方出現「連線完成」的訊息，就可以使用了。</li><li><strong>影像突然消失：</strong>有人經過鏡頭前方時，為了保護眼睛，影像會消失，只顯示護眼功能已啟動的提示訊息。這不是故障。離開鏡頭前方後稍等一下，影像就會自動恢復（也可以按遙控器的③返回鍵）。</li><li><strong>對不到焦：</strong>若光線照到桌面，可能無法對焦。請將投影機移到桌子前緣，或稍微向上傾斜。若仍無法改善，請試試<strong>⑤設定（設定）</strong> &gt; 投影機設定（プロジェクター設定） &gt; 對焦（フォーカス） &gt; 自動對焦（オートフォーカス）。</li><li><strong>自己關機了：</strong>一段時間沒有操作會自動關機。請按投影機機身的電源按鈕重新開機。</li><li><strong>運作怪怪的：</strong>長按<strong>①電源</strong>鍵，選擇<strong>「Restart（再起動）」</strong>，即「重新啟動」。</li></ul><p><strong>請勿執行「重設」（恢復原廠設定，出荷時設定にリセット）。</strong>所有設定都會被清除。若問題仍未解決，請透過 Airbnb 訊息聯絡房東。</p>`
    },
    garbage: {
      sorting: `<p><strong>房內的分類方式：</strong>房內的垃圾桶貼有標籤。請依照標籤分類丟棄。</p><ul><li><strong>可燃垃圾</strong>（Burnable）</li><li><strong>寶特瓶</strong>（PET-Bottles）</li><li><strong>玻璃瓶・罐子</strong>（Bottles &amp; Cans）</li></ul>`,
      body: `<p><strong>垃圾桶滿了時：</strong>請將分類好的垃圾放入房外垃圾置放處的金屬製收納箱。只要已分類，放入哪一個收納箱皆可。</p><p>退房時，垃圾留在房內的垃圾桶即可。</p><p>請勿丟到附近的垃圾集中點或馬路上（不會被收走）。</p>`
    },
    rules: {
      packages: `<p>由於本住宿無現場工作人員，恕無法於入住前代收包裹。入住期間收取包裹則沒有問題。</p>`,
      neighborsTitle: `請體諒左鄰右舍`,
      neighbors: `<p>這裡是安靜的住宅區。為了讓附近居民能安心生活，懇請您配合。</p><ul><li><strong>聲音：</strong>請避免大聲交談或播放音樂。晚上9點以後，請關上窗戶，保持安靜。夜間開關玄關門時也請放輕動作。</li><li><strong>戶外：</strong>請勿在建築物前或通道等戶外聚集飲食、舉辦聚會。</li><li><strong>樂器：</strong>室內不可演奏樂器。</li><li><strong>垃圾：</strong>請依照房內垃圾桶上的標籤，分為「可燃垃圾」「寶特瓶」「玻璃瓶・罐子」。垃圾桶滿了時，請放入房外垃圾置放處的金屬製收納箱。請勿丟到附近的垃圾集中點或馬路上。</li><li><strong>吸菸：</strong>室內及整個館區皆禁菸。也請勿在建築物周圍的馬路上吸菸或亂丟菸蒂。</li><li><strong>車輛：</strong>請勿在路邊停車，請使用投幣式停車場。</li></ul>`,
      fireTitle: `預防火災`,
      fire: `<ul><li><strong>爐具：</strong>為IH（電磁）爐，不需要操作瓦斯總開關。烹調時請勿離開，使用完畢後請關閉電源。</li><li><strong>明火：</strong>室內不可使用蠟燭、線香、煙火等會用到火的物品。</li><li><strong>滅火器：</strong>放在房間外的共用空間（走廊・樓梯附近）。<br>①拔掉黃色安全插銷 → ②將噴管對準起火處 → ③用力握緊握把</li><li><strong>避難：</strong>火勢很大時（快要燒到天花板時），請不要嘗試滅火，立刻逃生。請從玄關出去。2樓的房間請走室外樓梯下樓。</li><li><strong>報案：</strong>請撥打119。要告知的地址在「<a href="#/emergency">緊急聯絡方式・避難地點</a>」頁面。</li></ul>`,
      prohibitedTitle: `禁止事項`,
      prohibitedList: `<ul><li>穿鞋進入室內</li><li>吸菸（房間內及整棟建築範圍皆全面禁菸）</li><li>晚上9點後或深夜製造噪音</li><li>造成鄰居困擾</li><li>攜入或留宿未登記的訪客</li><li>故意損壞房間或設備，或未通報損壞情況</li></ul>`,
      penaltyTitle: `若有違反規定或造成損害`,
      penaltyList: `<ul><li><strong>吸菸：</strong>一經確認，將終止住宿並請您退房（不予退款）。除臭及清潔所需的實際費用，也請您負擔。</li><li><strong>噪音、對鄰居造成困擾：</strong>我們會先向您發出提醒。若未改善，將終止住宿並請您退房（不予退款）。</li><li><strong>未登記的人員留宿：</strong>將酌收額外的住宿費用，或終止住宿。</li><li><strong>嚴重髒污：</strong>若因一般清潔無法去除的髒污等而需要額外清潔，請負擔該清潔的實際費用。</li><li><strong>遺失鑰匙、損壞設備或物品：</strong>請負擔更換、修理所需的實際費用。若有損壞，請立即告知我們。</li></ul>`
    },
    nearby: {
      intro: `<p>以下為從JR鶴見站及從本住宿出發的步行時間。</p><ul><li><strong>全家便利商店 鶴見西口店</strong>（24小時）— 距JR鶴見站2分鐘／距本住宿8分鐘</li><li><strong>羅森 鶴見站西口店</strong>（24小時）— 距JR鶴見站1分鐘／距本住宿9分鐘</li><li><strong>7-Eleven 橫濱豐岡町中央店</strong>（24小時）— 距JR鶴見站2分鐘／距本住宿9分鐘</li><li><strong>SEIYU超市 鶴見店</strong>（9:00〜23:00）— 距JR鶴見站2分鐘／距本住宿9分鐘</li><li><strong>京急超市 鶴見西口店</strong>（平日10:00〜23:00，假日10:00〜21:00）— 距JR鶴見站1分鐘／距本住宿10分鐘</li></ul>`
    },
    parking: {
      intro: `<p>以下為鄰近的投幣式停車場（皆位於車站往本住宿的上坡路段）。點選地址即可開啟Google地圖。費用可能調整，請以現場告示為準。</p><ul><li><strong>Times鶴見寺谷第3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">鶴見區寺谷2-6</a>。步行4分鐘（290公尺）。220日圓/30分。最高1,000日圓/24小時，19:00〜8:00最高440日圓（最長可停48小時）。</li><li><strong>Shinkou Park鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">寺谷2-1-21</a>。步行4分鐘（290公尺）。200日圓/30分。9:00〜18:00最高900日圓，18:00〜9:00最高400日圓。</li><li><strong>Times鶴見寺谷</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">寺谷1-3</a>。步行4分鐘（350公尺）。200日圓/20分。最高1,200日圓/24小時，19:00〜8:00最高500日圓。</li><li><strong>Time Parking鶴見</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">鶴見2-3-45</a>。步行4分鐘（230公尺），有陡峭樓梯。8:00〜20:00：300日圓/30分，最高1,200日圓/12小時。20:00〜8:00：100日圓/1小時，最高400日圓/12小時。</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>玄關電子鎖無法使用時：</strong>請先慢慢地、確實地重新按一次按鈕（解鎖按鈕稍微按久一點）。如果還是打不開，請從房門<strong>{keyboxSide}側</strong>瓦斯錶處的鑰匙盒中取出鑰匙使用。密碼與電子鎖相同（共有兩個鑰匙盒，使用任一個皆可）。若仍無法開啟，請透過Airbnb訊息聯絡我們。</p>`,
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
    nav: { home: `홈`, wifi: `Wi-Fi`, checkout: `체크인/아웃`, emergency: `긴급` },
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
      projector: `프로젝터`,
      garbage: `쓰레기 배출 방법`,
      rules: `하우스 룰・금지 사항`,
      nearby: `주변 편의시설`,
      parking: `코인 주차장`,
      trouble: `문제 해결`,
      emergency: `긴급 연락처・대피 장소`,
      taxi: `택시 기사님께 보여주세요`
    },
    taxi: {
      intro: `<p class="taxi-lead">이 화면을 택시 기사님께 보여주세요.</p>`,
      card: TAXI_JA.card,
      p1: TAXI_JA.p1,
      p2: TAXI_JA.p2,
      p3: TAXI_JA.p3,
      turn: TAXI_JA.turn,
      map: TAXI_JA.map
    },
    translation: {
      intro: `<p>체류 중에는 <strong>구글 렌즈</strong>를 이용한 실시간 번역을 추천드립니다. 카메라를 텍스트에 비추기만 하면 바로 번역해 줍니다.</p><ul><li>구글 앱 설치</li><li>구글 렌즈 아이콘 탭</li><li><strong>'번역'</strong> 탭</li><li>번역하고 싶은 글자에 카메라를 비추기</li></ul>`
    },
    access: {
      mapIntro: `<p>아래 주소를 탭하면 구글 지도가 열립니다.</p>`,
      haneda: `<p><strong>하네다 공항에서</strong> (환승 없음, 약 40분)</p><ol class="route"><li class="route__stop">하네다 공항<span class="route__ja">羽田空港 / Haneda Airport</span></li><li class="route__ride"><span class="route__line route__line--keikyu">게이큐 공항선</span>즈시·하야마 방면 「<strong>급행(急行)</strong>」 승차 (환승 없음)<span class="route__time">약 20분</span><span class="route__note">「급행(急行)」 또는 「보통(普通)」을 타세요. 쾌특(快特)·특급(特急)은 게이큐 쓰루미역에 정차하지 않습니다.</span></li><li class="route__stop">게이큐 쓰루미<span class="route__ja">京急鶴見 / Keikyu Tsurumi</span></li><li class="route__walk">도보 <span class="route__time">약 17분</span><span class="route__note">개찰구를 나와 육교로 JR 쓰루미역을 건너 서쪽 출구 쪽으로 가세요. 약간의 오르막이 있습니다.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=%E4%BA%AC%E6%80%A5%E9%B6%B4%E8%A6%8B%E9%A7%85&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">구글 지도에서 도보 경로 보기</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Haneda%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>구글 지도에서 현재 환승 경로 확인</span></a>`,
      narita: `<p><strong>나리타 공항에서</strong>는 다음 두 가지 경로가 있습니다 (둘 다 약 1시간 40분~2시간).</p>`,
      naritaA: `<p><strong>경로 A: 게이세이 스카이라이너 + JR</strong> (가장 빠름)</p><ol class="route"><li class="route__stop">나리타 공항<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--skyliner">게이세이 스카이라이너</span>닛포리까지<span class="route__time">약 40분</span><span class="route__note">전석 지정석입니다.</span></li><li class="route__stop">닛포리<span class="route__ja">日暮里 / Nippori</span><span class="route__note">JR로 환승</span></li><li class="route__ride"><span class="route__line route__line--jr">JR 게이힌도호쿠선</span>「오후나」「이소고」 방면<span class="route__time">약 45분</span></li><li class="route__stop">JR 쓰루미<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">도보 <span class="route__time">약 11분</span><span class="route__note">서쪽 출구로 나와 직진하세요. 거의 평탄한 길입니다.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">구글 지도에서 도보 경로 보기</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol>`,
      naritaB: `<p><strong>경로 B: JR 나리타 익스프레스</strong> (환승이 적고 큰 짐도 둘 수 있음)</p><ol class="route"><li class="route__stop">나리타 공항<span class="route__ja">成田空港 / Narita Airport</span></li><li class="route__ride"><span class="route__line route__line--nex">JR 나리타 익스프레스</span>요코하마까지<span class="route__time">약 1시간 30분</span><span class="route__note">전석 지정석입니다. 요코하마에 정차하는 것은 「오후나」행 등 일부 열차뿐입니다. 요코하마에 정차하지 않는 열차라면 시나가와에서 내려 게이힌도호쿠선 「오후나」 방면으로 환승하세요.</span></li><li class="route__stop">요코하마<span class="route__ja">横浜 / Yokohama</span><span class="route__note">환승</span></li><li class="route__ride"><span class="route__line route__line--jr">JR 게이힌도호쿠선</span>「도쿄」「오미야」 방면<span class="route__time">약 10분</span></li><li class="route__stop">JR 쓰루미<span class="route__ja">JR鶴見 / JR Tsurumi</span></li><li class="route__walk">도보 <span class="route__time">약 11분 (서쪽 출구)</span><span class="route__note">서쪽 출구로 나와 직진하세요. 거의 평탄한 길입니다.</span><a class="route__link" href="https://www.google.com/maps/dir/?api=1&amp;origin=JR%E9%B6%B4%E8%A6%8B%E9%A7%85%20%E8%A5%BF%E5%8F%A3&amp;destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&amp;travelmode=walking" target="_blank" rel="noopener">구글 지도에서 도보 경로 보기</a></li><li class="route__stop route__stop--goal">YOKOHAMA Still Retreat</li></ol><a class="btn btn--outline btn--block" href="https://www.google.com/maps/dir/?api=1&origin=Narita%20Airport&destination=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-7-40&travelmode=transit" target="_blank" rel="noopener"><span>구글 지도에서 현재 환승 경로 확인</span></a>`,
      taxi: `<p>택시를 이용하실 경우 아래 주소를 기사님께 보여주세요.</p><ul><li>하네다 공항에서: 약 30분, 약 6,000〜7,000엔</li><li>JR 쓰루미역에서: 약 3분, 약 500엔</li><li>22시〜다음날 5시에는 심야 할증(20%)이 적용됩니다</li></ul><p><strong>중요:</strong> 건물은 큰길에서 한 블록 들어간 좁은 길가에 있어 기사님이 입구를 지나치기 쉽습니다. 택시에 타시면 <a href="#/taxi">기사님께 보여드리는 화면</a>을 보여 주세요.</p>`,
      taxiStandKeikyu: `<p><strong>게이큐 쓰루미역 택시 승강장:</strong> 서쪽 출구로 나와 왼쪽으로 돌아 계단을 내려가면 'TAXI' 표지판이 보입니다.</p>`,
      taxiStandJR: `<p><strong>JR 쓰루미역 택시 승강장:</strong> 계단 아래 횡단보도를 건너 왼쪽으로 돌면 'TAXI' 표지판이 보입니다.</p>`,
      exterior: `<p>건물 외관입니다.</p>`
    },
    checkin: {
      intro: `<p>상주 직원이 없는 셀프 체크인 숙소입니다. 아래 절차를 미리 확인해 주세요.</p>`,
      times: `<p><strong>체크인:</strong> 16:00부터<br><strong>체크아웃:</strong> 10:00까지</p><p>청소 스태프가 10:10에 도착하므로 10:00까지 퇴실해 주세요. 10:00 이후 체크아웃 시 추가 숙박 요금이 발생할 수 있습니다.</p>`,
      checkout: `<p><strong>체크아웃 전 부탁드립니다(10:00까지)</strong></p><ul><li>옷장의 여분 베개나 이불을 사용하셨다면 옷장에 다시 넣지 말고 거실에 두세요.</li><li>사용한 수건은 세탁기 바구니에 넣어 주세요.</li><li>쓰레기는 객실에 그대로 두셔도 됩니다(<a href="#/garbage">쓰레기 배출 방법</a>).</li><li>키박스의 열쇠를 사용하셨다면 키박스에 다시 넣어 주세요.</li><li>객실을 나가실 때는 전자 잠금장치의 <strong>열쇠 표시</strong>를 눌러 잠가 주세요.</li></ul>`,
      checkoutProjector: `<p>201호 프로젝터에서 YouTube, Netflix 등에 로그인하셨다면 반드시 로그아웃해 주세요(<a href="#/projector/logout">로그아웃 방법</a>).</p>`,
      steps: `<p>객실은 <strong>{room}호</strong>, {floor}층입니다. 출입문은 전자 잠금장치입니다.</p><ul><li>비밀번호를 입력하고 잠금 해제 버튼을 눌러주세요 (비밀번호는 체크인 당일 아침에 Airbnb 메시지로 전달드립니다).</li><li><strong>버튼은 천천히, 꾹 눌러 주세요.</strong> 잠금 해제 버튼을 짧게 누르면 열리지 않을 수 있습니다. 조금 길게 누르면 바로 열립니다.</li></ul>`,
      stepsLock: `<p>외출 시와 체크아웃 시에는 반드시 문을 잠가주세요.</p>`,
      keybox: `<p>전자 잠금장치가 작동하지 않을 경우, 키박스에서 열쇠를 꺼내 사용하실 수 있습니다. 키박스는 문 <strong>{keyboxSide}편</strong>의 가스 계량기 쪽에 있습니다. 키박스는 두 개가 있으며 어느 쪽을 사용하셔도 됩니다. 키박스 비밀번호는 전자 잠금장치와 동일합니다.</p>`
    },
    wifi: {
      title: `Wi-Fi`,
      scanOrType: `QR코드를 스캔하시거나 아래 정보를 직접 입력해 주세요.`,
      tip: `어느 쪽인지 고민되면 <strong>5GHz(이름이 「-A」로 끝남)</strong>에 연결해 주세요. 연결이 안 되거나 신호가 약하면 <strong>2.4GHz(이름이 「-G」로 끝남)</strong>를 이용해 보세요.`
    },
    appliances: {
      // 各家電の見出し（data/content.js の anchor と対応。見出しはページ内リンクにもなる）
      titles: { ac: `에어컨`, induction: `인덕션 쿡탑`, microwave: `전자레인지`, kettle: `전기 주전자`, coffee: `드립 커피`, ricecooker: `전기밥솥`, washer: `세탁기`, wire: `실내 빨랫줄`, circulator: `서큘레이터`, iron: `스팀다리미`, dolcegusto: `캡슐 커피 머신（네스카페 돌체구스토 지니오 2）` },
      ac: `<p>제공된 리모컨으로 작동하세요.</p>`,
      induction: `<p>주방에 있습니다. 아래 그림은 조작 패널입니다.</p>`,
      inductionSteps: `<p><strong>사용 방법</strong></p><ul><li>냄비를 상판 중앙에 올려놓습니다（냄비가 없으면 가열되지 않습니다）.</li><li><strong>① 전원:</strong> 2초 이상 길게 누릅니다.</li><li><strong>② 가열 켜기 / 끄기:</strong> 누른 다음 <strong>③ ◀ 또는 ▶</strong> 를 누르면 가열이 시작됩니다.</li><li>◀ ▶ 로 화력을 조절합니다（5단계: 弱 = 약, 1, 2, 3, 強 = 강）.</li><li>사용이 끝나면 「가열 켜기 / 끄기」를 눌러 멈추고, 「전원」을 눌러 끕니다.</li></ul><p><strong>사용할 수 있는 냄비:</strong> 자석이 붙는 바닥이 평평한 냄비（철, 스테인리스 등, 바닥 지름 약 12~24cm）. 뚝배기, 유리, 알루미늄, 구리 냄비는 사용할 수 없습니다. 화력 램프가 모두 깜빡이고 가열되지 않으면 냄비가 맞지 않거나 중앙에 놓이지 않은 것입니다.</p><p><strong>주의:</strong> 사용 후에도 상판은 뜨겁습니다. 「고온 주의」（高温注意） 램프가 꺼질 때까지 만지지 마세요. 사용 중에는 자리를 비우지 마세요.</p>`,
      microwave: ``,
      microwaveIris: `<p><strong>가장 간단한 사용법</strong></p><ul><li>음식을 넣고 문을 닫은 뒤 <strong>③ 시작（あたためスタート）</strong>을 누르면 500W로 30초간 데워집니다. 누를 때마다 30초씩 늘어납니다（최대 5분）.</li></ul><p><strong>시간을 직접 맞출 때</strong></p><ul><li><strong>① 출력（レンジ）:</strong> 한 번 누르면 500W（한 번 더 누르면 200W）.</li><li><strong>② 시간:</strong> 「+1분（1分）」과 「+10초（10秒）」를 눌러 시간을 맞춥니다.</li><li><strong>③ 시작（あたためスタート）:</strong> 누릅니다.</li><li>도중에 멈추려면 「취소（とりけし）」를 누릅니다.</li></ul><p><strong>그 밖의 버튼</strong></p><ul><li>음료（飲み物）: 한 번 누르면 1잔, 두 번 누르면 2잔. 그다음 「시작」을 누릅니다.</li><li>밥（ごはん）: 누른 뒤 「시작」을 누릅니다.</li><li>해동（解凍）: 누른 뒤 「1分/100g」「10秒/10g」로 무게（100~500g）를 맞추고 「시작」을 누릅니다.</li></ul>`,
      microwaveNitori: `<p><strong>사용 방법</strong></p><ul><li>음식을 가운데에 놓고 문을 닫습니다.</li><li><strong>① 위쪽 다이얼（출력）:</strong> 일반 데우기는 「500W」, 해동은 「200W」에 맞춥니다.</li><li><strong>② 아래쪽 다이얼（타이머）:</strong> 오른쪽으로 돌려 시간을 맞춥니다. 맞추고 약 3초 뒤에 자동으로 시작됩니다（시작 버튼은 없습니다）.</li><li>도중에 멈추려면 아래쪽 다이얼을 「切」（끄기）로 되돌리거나 문을 엽니다.</li><li>끝나면 삐 소리가 세 번 울립니다.</li></ul><p>타이머 눈금은 처음의 「20」「40」이 초이고, 「1」부터는 분입니다. 출력은 시간을 맞추기 전에 선택해 주세요（나중에는 바뀌지 않습니다）.</p>`,
      microwaveCaution: `<p><strong>주의:</strong> 금속 용기, 알루미늄 포일, 금·은 무늬가 있는 그릇은 사용할 수 없습니다. 껍질째인 달걀이나 삶은 달걀, 뚜껑을 닫은 용기, 캔, 레토르트 파우치는 그대로 데우지 마세요. 아무것도 넣지 않은 채로 작동시키지 마세요.</p>`,
      kettle: `<p>물이 끓으면 손잡이를 제외한 본체도 뜨거워지니 주의해 주세요.</p>`,
      kettleNitori: `<p><strong>사용 방법</strong></p><ul><li>주전자를 받침대에서 들어 올립니다.</li><li><strong>①</strong> 뚜껑을 돌려 뚜껑의 표시를 「열린 자물쇠」 그림에 맞춘 뒤, 뚜껑을 들어 올려 분리합니다.</li><li>물을 넣습니다. 안쪽의 「MAX」 표시（약 0.8L）를 넘지 않도록 해 주세요. 너무 적어도 사용할 수 없습니다（150mL 이상）.</li><li>뚜껑을 다시 덮고 표시를 「잠긴 자물쇠」 그림에 맞춰 잠급니다. 주전자를 받침대에 올려놓습니다.</li><li><strong>②</strong> 전원 스위치를 아래로 내리면 「ON」이 되고 램프가 켜집니다.</li><li>물이 끓으면 스위치가 자동으로 올라가고 램프가 꺼집니다.</li></ul><p>가득（0.8L）은 약 5분, 한 컵 분량（0.15L）은 약 1분 30초면 끓습니다.</p><p><strong>주의:</strong> 뚜껑을 꼭 닫지 않으면 끓어도 자동으로 꺼지지 않을 수 있습니다. 끓이는 중이나 끓은 직후에는 뚜껑을 열지 마세요. 주둥이에서 나오는 증기에도 주의해 주세요. 물 이외의 것은 넣지 마세요.</p>`,
      kettleIris: `<p><strong>사용 방법</strong></p><ul><li>주전자를 받침대에서 들어 올리고, 뚜껑을 열어 물을 넣습니다. 물은 안쪽의 「MIN」과 「MAX」 선 사이까지（0.3~0.6L）.</li><li>뚜껑을 꼭 닫고 주전자를 받침대에 올려놓습니다.</li><li><strong>① 전원:</strong> 전원 버튼을 누릅니다.</li><li><strong>② MODE:</strong> 눌러서 온도를 선택합니다. 100℃（끓임）/ Coffee（90℃）/ Green Tea（70℃）</li><li><strong>③ START:</strong> 누릅니다. 완료되면 삐 소리가 세 번 울리고 자동으로 멈춥니다.</li><li>도중에 멈추려면 「START」를 한 번 더 누릅니다.</li></ul><p>「−」「＋」를 누르면 온도를 60~100℃ 사이에서 5℃씩 바꿀 수 있습니다. 가열이 끝난 뒤 「KEEP WARM」을 누르면 최대 1시간 보온됩니다.</p><p><strong>주의:</strong> 끓이는 중이나 끓은 직후에는 뚜껑을 열지 마세요. 본체의 금속 부분은 뜨거워지니 손잡이를 잡아 주세요. 물 이외의 것은 넣지 마세요.</p>`,
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
      washer: `<p>세탁부터 건조까지 할 수 있는 드럼 세탁건조기입니다（세탁은 7kg까지, 건조는 3.5kg까지）. 건조할 때도 물을 사용하므로, 세탁기에 연결된 수도꼭지는 열어 둔 채로 사용해 주세요.</p>`,
      washerSteps: `<p><strong>사용 방법</strong></p><ul><li>세탁물을 드럼 안쪽 깊숙이 넣고 문을 꼭 닫습니다.</li><li><strong>① 전원:</strong> 「入」(켜기)를 누릅니다.</li><li><strong>② 코스（コース）:</strong> <strong>標準</strong>(표준) 램프가 켜질 때까지 누릅니다. 평소 세탁은 「표준」이면 충분합니다.</li><li><strong>③ 세탁 / 건조 전환（運転切換）:</strong> 눌러서 선택합니다.<br>洗濯 = 세탁만<br>洗～乾 = 세탁 + 건조<br>乾燥 = 건조만</li><li><strong>④ 시작（スタート）:</strong> 누릅니다.</li><li>표시창에 세제량 기준(예: 0.5 = 뚜껑 반 컵)이 약 20초간 표시됩니다. 이때 세제를 넣어 주세요（세제는 자동으로 투입되지 않습니다）.</li><li>끝나면 전원이 자동으로 꺼집니다. 남은 시간은 표시창의 「残り」 옆에 표시됩니다.</li></ul><p><strong>그 밖의 코스 램프:</strong> 時短 = 쾌속, 部屋干し = 실내 건조용, 毛布 = 담요, 槽洗浄 = 세탁조 청소(세탁물 없이), おうち流 = 사용자 설정. <strong>그 밖의 모드 램프:</strong> 除菌・消臭 = 물 없이 탈취.</p>`,
      washerDetergent: `<p><strong>세제 넣는 방법</strong></p><ul><li>본체 왼쪽 위의 세제함을 앞으로 당겨 엽니다.</li><li>세제는 안쪽의 넓은 칸에 넣습니다（가루 세제는 가운데, 액체 세제는 오른쪽）.</li><li>섬유유연제는 왼쪽 앞의 작은 칸（「柔軟剤」 표시）에 「満量」 선까지 넣습니다.</li><li>캡슐형 세제는 세제함이 아니라 드럼 안에 직접 넣어 주세요.</li></ul>`,
      washerAdjust: `<p><strong>시간이나 횟수를 바꾸고 싶을 때</strong></p><p>「洗い」(세탁), 「すすぎ」(헹굼), 「脱水」(탈수), 「乾かす」(건조) 버튼을 누른 뒤 ∨ ∧ 로 조절합니다. 평소에는 바꿀 필요가 없습니다.</p>`,
      washerNotes: `<p><strong>주의</strong></p><ul><li>운전 중에는 문이 잠깁니다. 도중에 열고 싶을 때는 「スタート／一時停止」(시작/일시정지)를 눌러 멈춘 뒤 「ロック解除」(잠금 해제)를 눌러 주세요.</li><li>건조 후에는 드럼 안이 뜨겁습니다. 「ロック解除」를 누른 뒤 식어서 문이 열릴 때까지 10~20분 정도 걸릴 수 있습니다.</li><li>건조까지 할 때는 세탁물을 세탁할 때의 절반（3.5kg）까지만 넣어 주세요. 너무 많이 넣으면 마르지 않습니다.</li><li>「ロック解除」를 3초 이상 누르면 어린이 보호 잠금이 걸려（표시창에 「L」） 문이 열리지 않습니다. 해제할 때도 3초 이상 눌러 주세요.</li></ul>`,
      wire: `<p>객실 내에 빨래를 널 수 있는 빨랫줄이 있습니다.</p>`,
      wireSteps: `<p><strong>사용 방법</strong></p><ul><li><strong>①</strong> 와이어 끝의 둥근 손잡이를 잡고, 벽의 흰색 본체에서 와이어를 당겨 꺼냅니다.</li><li><strong>②</strong> 맞은편 벽에 있는 플레이트의 구멍에 손잡이를 겁니다.</li><li><strong>③</strong> 본체의 둥근 다이얼을 「LOCK」 방향으로 돌려 와이어를 고정합니다.</li></ul><p><strong>정리할 때:</strong> 본체의 다이얼을 반대로 돌려 잠금을 풀고, 플레이트에서 손잡이를 빼낸 뒤 와이어를 천천히 본체로 되돌립니다.</p><p><strong>주의:</strong> 걸 수 있는 무게는 약 20kg까지입니다. 와이어를 아래로 잡아당기거나 매달리지 마세요.</p>`,
      circulator: `<p>천장이 높아 찬 공기는 아래로, 따뜻한 공기는 위로 모이기 쉽습니다. 에어컨 효과가 약하게 느껴지면 서큘레이터로 공기를 순환시켜 주세요.</p>`,
      circulatorSteps: `<p><strong>사용 방법</strong></p><ul><li><strong>① 전원（電源 切/入）:</strong> 누르면 작동하고, 다시 누르면 멈춥니다.</li><li><strong>② 풍량（風量）:</strong> &lt; 또는 &gt; 를 눌러 바람 세기를 바꿉니다（5단계, 가장 강한 것이 「ターボ」= 터보）.</li><li><strong>③ 회전（首ふり）:</strong> 누를 때마다 상하（上下）, 좌우（左右）, 둘 다, 정지로 바뀝니다. 램프로 현재 상태를 확인할 수 있습니다.</li><li>꺼짐 타이머（切タイマー）: 1, 2 또는 4시간 뒤에 자동으로 멈춥니다.</li><li>리듬풍（リズム）: 바람 세기가 천천히 바뀌는, 자연 바람에 가까운 모드입니다.</li></ul><p><strong>주의:</strong> 손으로 머리 부분의 방향을 움직이지 마세요. 방향을 바꾸려면 「首ふり」를 눌러 움직이게 한 뒤, 원하는 위치에서 다시 눌러 멈춰 주세요.</p>`,
      iron: `<p>욕실 선반에 스팀다리미가 있습니다. 사용하실 때는 욕실 내 다리미판을 이용해 주세요.</p>`
    },
    projector: {
      titles: { basics: `전원과 리모컨`, youtube: `YouTube 보기`, streaming: `Netflix·Prime Video 보기`, cast: `스마트폰 화면 띄우기`, hdmi: `HDMI로 연결하기`, speaker: `블루투스 스피커로 사용하기`, logout: `체크아웃 전에`, trouble: `문제가 생겼을 때` },
      intro: `<p>201호에는 벽에 영상을 비출 수 있는 프로젝터(JMGO PicoPlay+)가 있습니다. YouTube, Netflix, Prime Video 등을 보실 수 있습니다.</p><div class="notice notice--warn"><p><strong>주의사항</strong></p><ul><li>렌즈에서 나오는 강한 빛을 들여다보지 마세요.</li><li>영상을 비추는 동안에는 본체를 테이블이나 선반 위에 직접 세워 두지 마세요. 세로로 세워서 비출 때는 반드시 객실에 비치된 스탠드에 장착하세요. 본체 바닥에 환기구가 있어, 막히면 열 때문에 자동으로 꺼집니다.</li><li>렌즈 앞을 사람이 지나가면 눈을 보호하기 위해 영상이 사라지고 시력 보호 기능이 작동 중이라는 안내문만 표시됩니다. 고장이 아닙니다. 렌즈 앞에서 비켜서 잠시 기다리면 자동으로 원래대로 돌아옵니다(리모컨의 ③ 뒤로 버튼을 눌러도 됩니다).</li></ul></div>`,
      basics: `<p>아래 그림은 함께 놓여 있는 리모컨입니다. 이 페이지의 ①〜⑬은 그림의 번호입니다.</p>`,
      basicsSteps: `<p><strong>켜기</strong></p><ul><li>리모컨의 <strong>①전원</strong> 버튼을 누릅니다.</li><li>켜지지 않으면 본체의 전원 버튼을 누릅니다(위치는 이 페이지 「HDMI로 연결하기」 그림의 「전원 버튼」입니다).</li></ul><p><strong>끄기</strong></p><ul><li>리모컨의 <strong>①전원</strong> 버튼을 누릅니다.</li></ul><p><strong>조작 방법</strong></p><ul><li>초점과 화면 모양은 자동으로 맞춰집니다.</li><li><strong>②방향 키</strong>로 선택하고 <strong>⑨확인</strong>으로 결정합니다.</li><li><strong>③뒤로</strong>를 누르면 한 단계 전으로 돌아갑니다.</li><li><strong>⑩홈</strong>을 누르면 홈 화면으로 돌아갑니다.</li></ul>`,
      youtube: `<p>리모컨의 <strong>⑥YouTube</strong> 버튼을 누르세요. 로그인하지 않아도 볼 수 있습니다.</p><p>본인 계정으로 로그인했다면 체크아웃 전에 반드시 로그아웃해 주세요(<a href="#/projector/logout">체크아웃 전에</a> 참고).</p>`,
      streaming: `<p>리모컨의 <strong>⑦Netflix</strong> 또는 <strong>⑬Prime Video</strong> 버튼을 누르고, <strong>본인 계정</strong>으로 로그인해서 시청하세요(숙소에서는 계정을 제공하지 않습니다).</p><p>체크아웃 전에 반드시 로그아웃해 주세요(<a href="#/projector/logout">체크아웃 전에</a> 참고).</p>`,
      cast: `<p>먼저 스마트폰을 <strong>객실의 5GHz Wi-Fi(이름이 「-A」로 끝나는 쪽)</strong>에 연결하세요. 프로젝터와 같은 Wi-Fi여야 합니다(이름이 「-G」로 끝나는 Wi-Fi에서는 화면이 뜨지 않을 수 있습니다). Wi-Fi 정보는 <a href="#/wifi">Wi-Fi 페이지</a>에 있습니다.</p><p><strong>앱에서 띄우기</strong></p><ul><li>YouTube, Prime Video, Disney+ 등의 앱에 나오는 <strong>캐스트 아이콘</strong>을 누르고 <strong>「ysr201」</strong>를 선택하세요.</li></ul><p><strong>iPhone 화면을 그대로 띄우기</strong></p><ul><li>프로젝터의 홈 화면에서 <strong>「Screen Casting」</strong> 앱을 엽니다.</li><li>iPhone의 제어 센터에서 <strong>화면 미러링</strong> 아이콘을 누르고 <strong>「ysr201-0101」</strong>를 선택하세요.</li></ul><p><strong>Android 화면을 그대로 띄우기</strong></p><ul><li>스마트폰에 <strong>「JMGO」 앱</strong>을 설치해야 합니다. 앱에서 캐스트하거나 HDMI로 연결하는 쪽이 더 간단합니다.</li></ul><p><strong>세로 영상을 크게 띄우기(쇼츠, 릴스 등)</strong></p><ul><li>본체를 <strong>객실에 비치된 스탠드</strong>에 장착하세요.</li><li>위의 「화면을 그대로 띄우기」 방법으로 스마트폰 화면을 띄웁니다(앱에서 캐스트하면 세로로 바뀌지 않습니다).</li><li>본체를 90도 돌려 세로로 세우면 화면이 세로로 바뀝니다.</li><li>스탠드 없이 본체를 테이블이나 선반 위에 직접 세워 두지 마세요.</li></ul><p><strong>Netflix:</strong> 스마트폰에서 띄우지 말고 프로젝터의 Netflix 앱(리모컨의 ⑦ 버튼)으로 시청하세요.</p>`,
      hdmi: `<p>노트북 등의 영상을 띄우려면 본체 뒷면의 HDMI 단자(아래 그림의 「HDMI」)에 케이블을 연결하세요.</p><ul><li>화면이 바뀌지 않으면 리모컨의 <strong>⑫입력 전환</strong> 버튼을 누르세요.</li><li>프로젝터의 홈 화면으로 돌아가려면 <strong>⑩홈</strong> 버튼을 누르세요.</li></ul>`,
      speaker: `<p>영상을 비추지 않고, 스마트폰의 음악을 재생하는 스피커로 사용할 수 있습니다.</p><ul><li>본체의 <strong>액션 버튼</strong>(점이 3개 있는 버튼. 위치는 「HDMI로 연결하기」의 그림을 참고하세요)을 <strong>길게 누릅니다</strong>. 메뉴가 나오면 <strong>블루투스 스피커（Bluetoothスピーカー）</strong>를 선택하세요. 영상이 멈추고 스피커로 바뀝니다.</li><li>스마트폰의 블루투스 설정에서 <strong>「ysr201」</strong>를 선택해 연결하세요.</li><li>스피커로 사용하는 동안에는 본체를 세워 두어도 괜찮습니다.</li><li>영상으로 돌아가려면 리모컨의 <strong>③ 뒤로</strong>를 누르고, 본체를 다시 눕혀 주세요.</li></ul>`,
      logout: `<div class="notice notice--warn"><p><strong>체크아웃 전에 반드시 로그아웃해 주세요.</strong></p><p>체크아웃 전에, 로그인한 모든 앱(YouTube, Netflix, Prime Video 등)에서 반드시 로그아웃해 주세요. 로그아웃하지 않으면 다음 투숙객이 회원님의 계정을 사용할 수 있습니다.</p><p>로그아웃은 각 앱의 계정 또는 설정 메뉴에서 할 수 있습니다.</p></div>`,
      trouble: `<ul><li><strong>리모컨이 작동하지 않을 때:</strong> 리모컨을 본체에 가까이 대고 <strong>③뒤로</strong>와 <strong>⑩홈</strong>을 동시에 약 5초 동안 길게 누르세요. 화면 아래에 연결 완료 메시지가 나타나면 사용할 수 있습니다.</li><li><strong>영상이 갑자기 사라질 때:</strong> 렌즈 앞을 사람이 지나가면 눈을 보호하기 위해 영상이 사라지고 시력 보호 기능이 작동 중이라는 안내문만 표시됩니다. 고장이 아닙니다. 렌즈 앞에서 비켜서 잠시 기다리면 자동으로 원래대로 돌아옵니다(리모컨의 ③ 뒤로 버튼을 눌러도 됩니다).</li><li><strong>초점이 맞지 않을 때:</strong> 빛이 책상에 닿으면 초점이 맞지 않을 수 있습니다. 본체를 책상 앞쪽에 두거나 조금 위로 향하게 해 주세요. 그래도 안 되면 <strong>⑤설정（設定）</strong> &gt; 프로젝터 설정（プロジェクター設定） &gt; 포커스（フォーカス） &gt; 오토 포커스（オートフォーカス）를 시도해 보세요.</li><li><strong>저절로 꺼졌을 때:</strong> 한동안 조작하지 않으면 자동으로 꺼집니다. 본체의 전원 버튼으로 다시 켜 주세요.</li><li><strong>작동이 이상할 때:</strong> <strong>①전원</strong> 버튼을 길게 누르고 <strong>「Restart（再起動）」</strong>(다시 시작)를 선택하세요.</li></ul><p><strong>「리셋」(출고 시 설정으로 리셋, 出荷時設定にリセット)은 하지 마세요.</strong> 모든 설정이 지워집니다. 해결되지 않으면 Airbnb 메시지로 호스트에게 연락해 주세요.</p>`
    },
    garbage: {
      sorting: `<p><strong>객실 안에서 분리하는 방법:</strong> 객실 안 쓰레기통에는 라벨이 붙어 있습니다. 라벨에 따라 분리해서 버려주세요.</p><ul><li><strong>타는 쓰레기</strong> (Burnable)</li><li><strong>페트병</strong> (PET-Bottles)</li><li><strong>병・캔</strong> (Bottles &amp; Cans)</li></ul>`,
      body: `<p><strong>쓰레기통이 가득 찼을 때:</strong> 분리수거한 쓰레기를 객실 밖에 있는 금속제 쓰레기 보관함에 넣어주세요. 분리수거가 되어 있다면 어느 보관함에 넣으셔도 괜찮습니다.</p><p>체크아웃 시에는 쓰레기를 객실 안 쓰레기통에 그대로 두셔도 됩니다.</p><p>동네 쓰레기 집하장이나 도로에는 내놓지 말아주세요 (수거되지 않습니다).</p>`
    },
    rules: {
      packages: `<p>본 숙소는 상주 직원이 없어 체크인 전 택배 수령이 불가합니다. 숙박 중 택배 수령은 문제없습니다.</p>`,
      neighborsTitle: `이웃을 배려해 주세요`,
      neighbors: `<p>이곳은 조용한 주택가입니다. 이웃분들이 편안히 지내실 수 있도록 협조 부탁드립니다.</p><ul><li><strong>소음:</strong> 큰 소리로 대화하거나 음악을 크게 트는 것은 삼가주세요. 밤 9시 이후에는 창문을 닫고 조용히 지내주세요. 밤에는 현관문도 조용히 여닫아 주세요.</li><li><strong>실외:</strong> 건물 앞이나 통로 등 실외에서 모여서 먹고 마시거나 파티를 하는 것은 삼가주세요.</li><li><strong>악기:</strong> 실내에서는 악기를 연주할 수 없습니다.</li><li><strong>쓰레기:</strong> 객실 안 쓰레기통의 라벨에 따라 「타는 쓰레기」「페트병」「병・캔」으로 나누어 주세요. 쓰레기통이 가득 차면 객실 밖에 있는 금속제 쓰레기 보관함에 넣어주세요. 동네 쓰레기 집하장이나 도로에는 내놓지 말아주세요.</li><li><strong>흡연:</strong> 실내와 부지 내 전체가 금연입니다. 건물 주변 도로에서의 흡연이나 담배꽁초 무단 투기도 하지 말아주세요.</li><li><strong>차량:</strong> 길가에 주차하지 말고 코인 주차장을 이용해 주세요.</li></ul>`,
      fireTitle: `화재 예방`,
      fire: `<ul><li><strong>조리기구:</strong> IH(전기) 레인지입니다. 가스 밸브를 조작할 필요가 없습니다. 조리 중에는 자리를 비우지 말고, 다 쓰면 전원을 꺼주세요.</li><li><strong>불:</strong> 실내에서는 초, 향, 폭죽 등 불을 사용하는 물건을 사용할 수 없습니다.</li><li><strong>소화기:</strong> 객실 밖 공용 공간(복도・계단 근처)에 있습니다.<br>①노란색 안전핀을 뽑는다 → ②호스를 불이 난 곳으로 향한다 → ③레버를 세게 쥔다</li><li><strong>대피:</strong> 불이 클 때(천장에 닿을 것 같을 때)는 끄려고 하지 말고 바로 대피하세요. 현관으로 나가시면 됩니다. 2층 객실은 외부 계단으로 내려가세요.</li><li><strong>신고:</strong> 119에 전화하세요. 알려야 할 주소는 「<a href="#/emergency">긴급 연락처・대피 장소</a>」 페이지에 있습니다.</li></ul>`,
      prohibitedTitle: `금지 사항`,
      prohibitedList: `<ul><li>실내에서 신발을 신는 행위</li><li>흡연 (객실 내 및 부지 전체 전면 금연)</li><li>밤 9시 이후 또는 심야 시간대의 소음</li><li>이웃에게 피해를 주는 행위</li><li>예약자로 등록되지 않은 인원의 출입 또는 숙박</li><li>객실 또는 시설의 고의적인 파손, 또는 파손 사실을 알리지 않는 행위</li></ul>`,
      penaltyTitle: `규칙 위반이나 손해가 있는 경우`,
      penaltyList: `<ul><li><strong>흡연:</strong> 확인되는 즉시 숙박을 종료하고 퇴실하셔야 합니다(환불 불가). 냄새 제거와 청소에 든 실비도 부담해 주셔야 합니다.</li><li><strong>소음·이웃에 대한 피해:</strong> 먼저 주의를 드립니다. 개선되지 않으면 숙박을 종료하고 퇴실하셔야 합니다(환불 불가).</li><li><strong>등록되지 않은 인원의 숙박:</strong> 추가 숙박 요금이 청구되거나 숙박이 종료됩니다.</li><li><strong>심한 오염:</strong> 일반적인 청소로 지워지지 않는 오염 등으로 추가 청소가 필요한 경우, 그 청소에 든 실비를 부담해 주셔야 합니다.</li><li><strong>열쇠 분실·시설이나 비품 파손:</strong> 교체·수리에 든 실비를 부담해 주셔야 합니다. 파손되었을 때는 바로 알려 주세요.</li></ul>`
    },
    nearby: {
      intro: `<p>아래는 JR 쓰루미역, 그리고 숙소로부터의 도보 시간입니다.</p><ul><li><strong>훼미리마트 쓰루미니시구치점</strong> (24시간) — JR 쓰루미역에서 2분 / 숙소에서 8분</li><li><strong>로손 쓰루미역니시구치점</strong> (24시간) — JR 쓰루미역에서 1분 / 숙소에서 9분</li><li><strong>세븐일레븐 요코하마 도요오카초 주오점</strong> (24시간) — JR 쓰루미역에서 2분 / 숙소에서 9분</li><li><strong>슈퍼마켓 세이유 쓰루미점</strong> (9:00〜23:00) — JR 쓰루미역에서 2분 / 숙소에서 9분</li><li><strong>슈퍼마켓 게이큐스토어 쓰루미니시점</strong> (평일 10:00〜23:00, 휴일 10:00〜21:00) — JR 쓰루미역에서 1분 / 숙소에서 10분</li></ul>`
    },
    parking: {
      intro: `<p>가장 가까운 코인 주차장은 다음과 같습니다 (모두 역에서 숙소로 가는 오르막길에 위치). 주소를 누르면 Google 지도가 열립니다. 요금은 변경될 수 있으니 현장 안내판을 확인해 주세요.</p><ul><li><strong>타임즈 쓰루미데라야 제3</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%E7%AC%AC3%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-6" target="_blank" rel="noopener">쓰루미구 데라야2-6</a>. 도보 4분(290m). 220엔/30분. 최대 1,000엔/24시간, 19:00〜8:00는 최대 440엔(최대 48시간 주차 가능).</li><li><strong>신코파크 쓰루미데라야</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%B7%E3%83%B3%E3%82%B3%E3%82%A6%E3%83%91%E3%83%BC%E3%82%AF%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B72-1-21" target="_blank" rel="noopener">데라야2-1-21</a>. 도보 4분(290m). 200엔/30분. 9:00〜18:00는 최대 900엔, 18:00〜9:00는 최대 400엔.</li><li><strong>타임즈 쓰루미데라야</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%82%BA%E9%B6%B4%E8%A6%8B%E5%AF%BA%E8%B0%B7%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E5%AF%BA%E8%B0%B71-3&amp;query_place_id=ChIJc75tnRJeGGARwiIxxipn0bg" target="_blank" rel="noopener">데라야1-3</a>. 도보 4분(350m). 200엔/20분. 최대 1,200엔/24시간, 19:00〜8:00는 최대 500엔.</li><li><strong>타임파킹 쓰루미</strong> — <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0%E9%B6%B4%E8%A6%8B%20%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E9%B6%B4%E8%A6%8B2-3-45" target="_blank" rel="noopener">쓰루미2-3-45</a>. 도보 4분(230m), 가파른 계단 있음. 8:00〜20:00: 300엔/30분 최대 1,200엔/12시간. 20:00〜8:00: 100엔/1시간 최대 400엔/12시간.</li></ul>`
    },
    trouble: {
      keypad: `<p><strong>현관 전자 잠금장치가 작동하지 않을 때:</strong> 먼저 버튼을 천천히, 꾹 눌러 다시 시도해 주세요(잠금 해제 버튼은 조금 길게). 그래도 열리지 않으면 문 <strong>{keyboxSide}편</strong>의 가스 계량기 쪽에 있는 키박스에서 열쇠를 꺼내 사용해 주세요. 비밀번호는 전자 잠금장치와 동일합니다(키박스는 두 개가 있으며 어느 쪽을 사용하셔도 됩니다). 그래도 열리지 않으면 Airbnb 메시지로 연락해 주세요.</p>`,
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
