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
