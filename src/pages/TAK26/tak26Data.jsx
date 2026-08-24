export const tak26Data = {
  id: "tak26",
  header: {
    title: "Takamatsu Trip 🇯🇵",
    subtitle: "👖 兒島牛仔・🏝️ 小豆島・⚡ Pokémon Center 5日4夜"
  },
  days: [
    {
      id: "day1",
      label: "Day 1 (四)",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "下午",
          title: "🛬 抵達高松機場 (TAK)",
          type: "highlight",
          mapQuery: "高松空港",
          details: (
            <>
              搭機場利木津巴士入市區，坐到「県庁通り中央公園前」下車，步行 6 分鐘就到 WeBase 高松 —— 比坐到 JR 高松站再折返更快更順。車程約 35-40 分鐘。<br/>
              巴士班次按航班每月調整，出發前請再對一次官方時刻表。
              <a href="https://www.kotoden.co.jp/publichtm/bus/limousine/index.html" target="_blank" rel="noreferrer" className="trip-link">🔗 高松機場利木津巴士 時刻表（ことでんバス官方）</a>
              <a href="https://www.takamatsu-airport.com/access/bus/index.php" target="_blank" rel="noreferrer" className="trip-link">🔗 高松機場 巴士交通指南（機場官方）</a>
            </>
          )
        },
        {
          time: "16:00",
          title: "🏨 酒店 Check-in：WeBase 高松",
          mapQuery: "WeBase 高松",
          details: (
            <>
              地址：香川県高松市瓦町1-2-3｜電話：087-813-4415<br/>
              交通：琴電「瓦町」站步行 5 分鐘；機場利木津巴士可在「県庁通り中央公園前」下車步行 6 分鐘（JR 高松站車程約 6 分鐘）。位置就在中央商店街旁，出入食飯購物都方便。
            </>
          )
        },
        {
          time: "17:00",
          title: "🍜 晚餐：うどん市場 兵庫町店（烏龍麵市場）",
          type: "highlight",
          mapQuery: "うどん市場 兵庫町店",
          details: (
            <>
              落機第一碗讚岐烏冬，人均 ¥1,000 以下。<br/>
              地址：香川県高松市兵庫町2-8 <strong>ひらのやビル</strong>（〒760-0024）｜電話：087-823-0388<br/>
              由 WeBase 沿中央商店街一路往北行約 15 分鐘，全程有上蓋，落雨都唔怕。認住幢樓個名，門口係暖簾。
              <span className="trip-badge-info">✅ Day 1 星期四：11:00-20:00 照常營業</span>
              <span className="trip-subnote">
                🕒 營業時間：<br/>
                • 星期一：11:00 - 16:00<br/>
                • 星期二至六：11:00 - 20:00<br/>
                <span className="trip-note-muted">星期日全日休息（今程唔撞正）</span>
              </span>
              <span className="trip-note-orange">⏳ 20:00 收工，唔好拖得太夜；16:00 check-in 後直接行過去最順。</span>
              <a href="https://www.udon-ichiba.jp/hyogo/shopinfo.html" target="_blank" rel="noreferrer" className="trip-link">🔗 うどん市場 兵庫町店 官方店舖資訊</a>
            </>
          )
        }
      ]
    },
    {
      id: "day2",
      label: "Day 2 (五)",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "08:02 → 09:02",
          title: "⛴️ 高松港 → 土庄港",
          type: "highlight",
          mapQuery: "高松港 小豆島フェリーのりば",
          details: (
            <>
              一早先去高松のりば（高松港・小豆島行き営業所），建議班次：08:02 由高松港出發，09:02 抵達土庄港。落船後步行到巴士站，先前往天使之路，再轉車去 Olive Park。
              <a href="https://www.shikokuferry.com/route2#schedule" target="_blank" rel="noreferrer" className="trip-link">🔗 高松↔土庄 船班時刻表（官方）</a>
            </>
          )
        },
        {
          time: "上午",
          title: "👼 先去天使之路 (Angel Road)",
          type: "highlight",
          mapQuery: "エンジェルロード 土庄町",
          details: (
            <>
              主方案（直達）：西浦線 U（東廻り）「9:20（U1 土庄港）→ 9:33（U9 国際ホテル・エンジェルロード前）」。<br/>
              第二後備：坂手線 S（坂手港方面）「9:40（S1 土庄港）→ 9:45（S4 土庄本町）」，再步行約 13 分鐘。<br/>
              第三後備：田ノ浦映画村線 T「10:10（T1 土庄港）→ 10:21（T7 国際ホテル・エンジェルロード前）」。建議配合當日退潮可見時段，停留約 45-60 分鐘。
              <a href="https://www.town.tonosho.kagawa.jp/kanko/index.html" target="_blank" rel="noreferrer" className="trip-link">🔗 天使之路官方資訊（土庄町觀光）</a>
              <a href="https://www.shodoshima-olive-bus.com/" target="_blank" rel="noreferrer" className="trip-link">🔗 小豆島全島巴士路線總覽（官方）</a>
              <a href="https://www.shodoshima-olive-bus.com/wp/wp-content/uploads/2021/09/dia_nishiura.pdf" target="_blank" rel="noreferrer" className="trip-link">🔗 西浦線時刻表（官方 PDF）</a>
              <a href="https://www.shodoshima-olive-bus.com/wp/wp-content/uploads/2021/09/dia_tanoura.pdf" target="_blank" rel="noreferrer" className="trip-link">🔗 田ノ浦映画村線時刻表（官方 PDF）</a>
            </>
          )
        },
        {
          time: "中午前後",
          title: "🚌 土庄本町（S4/F4）→ オリーブ公園口",
          type: "highlight",
          details: (
            <>
              玩完天使之路後，直接步行到土庄本町上車去 Olive Park，避免回頭返土庄港。建議 2 個班次：11:35（坂手線 S4）→ 11:58（S22 オリーブ公園口），或 12:05（南廻り福田線 F4）→ 12:30（F22 オリーブ公園口）。<br/>
              <a href="https://www.shodoshima-olive-bus.com/" target="_blank" rel="noreferrer" className="trip-link">🔗 小豆島全島巴士路線總覽（官方）</a>
            </>
          )
        },
        {
          time: "下午",
          title: "🧹 小豆島オリーブ公園（魔女宅急便掃把飛天）",
          type: "highlight",
          mapQuery: "道の駅 小豆島オリーブ公園",
          details: "先到雑貨コリコ借掃把，再去希臘風車草坡位拍連拍飛天照；之後可慢行園區、食輕食，保留充足時間回程"
        },
        {
          time: "下午",
          title: "🚌 オリーブ公園口(F22) → 土庄港(F1)",
          details: "回程首選：南廻り福田線 F「16:00（F22 オリーブ公園口）→ 16:30（F1 土庄港）」。後備：田ノ浦映画村線 T「16:36（T25 オリーブ公園口）→ 17:09（T1 土庄港）」。"
        },
        {
          time: "傍晚",
          title: "⛴️ 土庄港 → 高松港",
          mapQuery: "土庄港",
          details: "建議回程班次：17:30 由土庄港出發，18:30 抵達高松港。"
        },
        {
          time: "19:00",
          title: "🍣 晚餐：瀬戸の祭寿し 兵庫町店（瀨戶祭迴轉壽司）",
          type: "highlight",
          mapQuery: "瀬戸の祭寿し 兵庫町店",
          details: (
            <>
              瀨戶內海當造魚生迴轉壽司，人均 ¥2,000-3,000。玩足一日小豆島返到高松，落船直接食。<br/>
              地址：香川県高松市兵庫町11-5 <strong>中島ビル</strong>（〒760-0024）｜電話：087-813-2880<br/>
              由高松港沿海岸行返市區約 10 分鐘就到兵庫町商店街，同 Day 1 嗰間うどん市場 同一條街。106 席，係成條商店街最大間，唔使點排隊。
              <span className="trip-badge-info">✅ 11:00-22:00 年中無休</span>
              <a href="https://yumekubo.com/store/hyogomachi/" target="_blank" rel="noreferrer" className="trip-link">🔗 瀬戸の祭寿し 兵庫町店（夢喰房官方）</a>
              <a href="http://www.hyougomachi.com/shop/food/entry-144.html" target="_blank" rel="noreferrer" className="trip-link">🔗 兵庫町商店街 店舖介紹</a>
            </>
          )
        }
      ]
    },
    {
      id: "day3",
      label: "Day 3 (六)",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "上午",
          title: "🚉 高松 → 兒島",
          details: "建議早一點由高松出發，搭 JR 瀨戶大橋線前往兒島站"
        },
        {
          time: "上午",
          title: "👖 兒島牛仔褲街 (Jeans Street)",
          type: "highlight",
          mapQuery: "児島ジーンズストリート",
          details: "漫步於日本單寧聖地，尋找高品質牛仔製品，吊掛牛仔褲是必拍打卡位"
        },
        {
          time: "中午",
          title: "🍱 午餐：兒島",
          details: "在牛仔褲街周邊享用午餐，節奏更輕鬆"
        },
        {
          time: "午後",
          title: "🍦 RIVETS 雪糕休息",
          mapQuery: "岡山県倉敷市児島味野2-5-3 RIVETS",
          details: "到 RIVETS（岡山県倉敷市児島味野2-5-3）食雪糕，作為兒島行程中段休息"
        },
        {
          time: "下午",
          title: "🚉 兒島 → 倉敷（行街）",
          mapQuery: "倉敷美観地区",
          details: "由兒島移動到倉敷，於美觀地區與商店街散策"
        },
        {
          time: "晚上",
          title: "🍱 晚餐：鰻北倉敷店",
          type: "highlight",
          mapQuery: "岡山県倉敷市本町1-32",
          details: (
            <>
              地址：1-32 Honmachi, Kurashiki, Okayama 710-0054 日本<br/>
              電話：+81 86-454-4545<br/>
              營業時間：11:00-15:00，17:00-19:30（每天）<br/>
              建議提早到店或先預約。
              <a href="https://unagi-nobori.shop" target="_blank" rel="noreferrer" className="trip-link">🔗 官方選單 / 官網</a>
              <a href="https://www.hotpepper.jp/" target="_blank" rel="noreferrer" className="trip-link">🔗 預約（Hotpepper）</a>
            </>
          )
        },
        {
          time: "晚間",
          title: "🚉 倉敷 → 高松",
          details: "晚餐後由倉敷返回高松"
        }
      ]
    },
    {
      id: "day4",
      label: "Day 4 (日)",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "上午",
          title: "🎀 Sanrio ゆめタウン高松店",
          type: "highlight",
          mapQuery: "ゆめタウン高松",
          details: (
            <>
              由酒店步行 5 分鐘到瓦町站，搭琴電琴平線去「三条」站（約 5 分鐘），落車再步行約 13 分鐘到ゆめタウン高松，Sanrio 專門店在 2/F。<br/>
              地址：香川県高松市三条町608-1 ゆめタウン高松 2F｜電話：087-868-5689<br/>
              商場營業時間：本館 9:30-21:30，專門店 10:00-21:00。四國最大規模商場（約 170 間專門店），可順道逛百貨、生活雜貨與藥妝。
              <a href="https://stores.sanrio.co.jp/8474100" target="_blank" rel="noreferrer" className="trip-link">🔗 Sanrio ゆめタウン高松店（官方）</a>
              <a href="https://www.izumi.jp/tenpo/takamatsu/access" target="_blank" rel="noreferrer" className="trip-link">🔗 ゆめタウン高松 交通指南（官方）</a>
            </>
          )
        },
        {
          time: "中午",
          title: "🍜 午餐：ゆめタウン高松",
          details: "在商場內解決：フードコート 10:00-21:00，レストラン街 11:00-21:00，不用走出走入"
        },
        {
          time: "下午",
          title: "⚡ Pokémon Center KAGAWA",
          type: "highlight",
          mapQuery: "ポケモンセンターカガワ 丸亀町グリーン",
          details: (
            <>
              搭琴電返回瓦町站，之後沿中央商店街（有蓋）向北行約 7 分鐘就到丸亀町グリーン東館 1F —— 由 WeBase 行過去同樣是這條街，落雨都唔怕。四國第一間 Pokémon Center，門口有比卡超與呆呆獸迎賓。<br/>
              地址：香川県高松市丸亀町8番地23 丸亀町グリーン東館 1F｜營業時間：10:00-20:00
              <span className="trip-note-orange">⏳ Day 4 係星期日，四國唯一一間 Pokémon Center 週日人最多；想影門口比卡超同呆呆獸，一開門就到最穩陣。</span>
              <a href="https://www.pokemon.co.jp/sp/kagawa_2025/" target="_blank" rel="noreferrer" className="trip-link">🔗 Pokémon Center KAGAWA（官方）</a>
            </>
          )
        },
        {
          time: "傍晚",
          title: "☕ 丸亀町 / 中央商店街散步",
          mapQuery: "高松丸亀町商店街",
          details: "Pokémon Center 就在高松中央商店街內，沿住條街行返落瓦町即回到酒店，一路行一路睇舖"
        },
        {
          time: "19:00",
          title: "🥩 晚餐：炭焼き 肉の近どう 高松古馬場店（橄欖牛炭火燒肉）",
          type: "highlight",
          mapQuery: "炭焼き 肉の近どう 高松古馬場店",
          details: (
            <>
              A5 級<strong>橄欖牛</strong>炭火燒肉，配自家製燒肉汁。香川縣產品振興協議會認證嘅「三星橄欖餐廳」。<br/>
              地址：香川県高松市古馬場町5-12｜電話：087-813-9029<br/>
              交通：琴電瓦町站（志度線口）步行 5-6 分鐘、片原町站步行 5 分鐘。<br/>
              WeBase 本身距瓦町站 5 分鐘，所以由酒店直接行過去約 10 分鐘。<strong>但唔使特登由酒店出發</strong> —— 行完丸亀町商店街由北往南落嚟，古馬場就喺瓦町前面，順路；食完再行 10 分鐘返酒店。
              <span className="trip-badge-info">✅ 年中無休．星期日 14:00-23:00（L.O. 22:00）</span>
              <span className="trip-subnote">
                🕒 營業時間：<br/>
                • 星期一至六：14:00 - 24:00（L.O. 23:00）<br/>
                • 星期日：14:00 - 23:00（L.O. 22:00）<br/>
                <span className="trip-note-muted">Day 4 係星期日，照開，但週末夜市中心較旺，建議去之前打電話留位。</span>
              </span>
              <a href="https://www.kensanpin.org/umaimon/oliverestaurant/food/olive_gyu/%E7%82%AD%E7%84%BC-%E8%82%89%E3%81%AE%E8%BF%91%E3%81%A9%E3%81%86-%E5%AE%87%E5%A4%9A%E6%B4%A5%E5%BA%97-2/" target="_blank" rel="noreferrer" className="trip-link">🔗 三星橄欖餐廳認證頁（香川縣產品振興協議會）</a>
            </>
          )
        }
      ]
    },
    {
      id: "day5",
      label: "Day 5 (一) ✈️",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      hotelNote: "Check-out",
      timeline: [
        {
          time: "上午",
          title: "🛍️ 最後購物",
          details: "高松站周邊買手信"
        },
        {
          time: "下午",
          title: "🚌 前往高松機場",
          type: "highlight",
          mapQuery: "県庁通り中央公園前 バス停 高松",
          details: (
            <>
              由酒店步行約 6 分鐘到「県庁通り中央公園前」站，直接搭機場利木津巴士去高松機場（約 35-40 分鐘），唔使特登返 JR 高松站轉車。<br/>
              建議班次前 10 分鐘到站排隊；行李多亦可由酒店直接叫的士（約 30 分鐘）。班次每月按航班調整，出發前請再確認。結束瀨戶內海悠閒之旅。
              <a href="https://www.kotoden.co.jp/publichtm/bus/limousine/index.html" target="_blank" rel="noreferrer" className="trip-link">🔗 高松機場利木津巴士 時刻表（ことでんバス官方）</a>
            </>
          )
        }
      ]
    }
  ],
  todos: [
    { id: 'tak-todo-1', main: '預約餐廳：骨付鳥 一鶴', sub: '晚餐熱門選' },
    { id: 'tak-todo-2', main: '查閱渡輪時間', sub: '前往小豆島/直島' },
    { id: 'tak-todo-3', main: 'Visit Japan Web', sub: '入境手續' },
  ],
  mapQuery: "高松市",
  mapText: "🗺️ 高松 & 瀨戶內海地圖"
};
