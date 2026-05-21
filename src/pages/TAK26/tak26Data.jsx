export const tak26Data = {
  id: "tak26",
  header: {
    title: "Takamatsu Trip 🇯🇵",
    subtitle: "👖 兒島牛仔・🏝️ 小豆島・⚡ Pokémon Center 5日4夜"
  },
  days: [
    {
      id: "day1",
      label: "Day 1",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "下午",
          title: "🛬 抵達高松機場 (TAK)",
          type: "highlight",
          details: "搭乘機場利木津巴士前往高松站 (約40分鐘)"
        },
        {
          time: "16:00",
          title: "🏨 酒店 Check-in",
          details: "在高松站或瓦町站附近辦理入住"
        },
        {
          time: "19:00",
          title: "🍗 晚餐：骨付鳥 一鶴",
          type: "highlight",
          details: "香川縣名物，外脆內嫩的帶骨烤雞腿"
        }
      ]
    },
    {
      id: "day2",
      label: "Day 2",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "08:02 → 09:02",
          title: "⛴️ 高松港 → 土庄港",
          type: "highlight",
          details: (
            <>
              一早先去高松のりば（高松港・小豆島行き営業所），建議班次：08:02 由高松港出發，09:02 抵達土庄港。落船後步行到巴士站，先前往天使之路，再轉車去 Olive Park。
              <a href="https://www.shikokuferry.com/route2#schedule" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 高松↔土庄 船班時刻表（官方）</a>
            </>
          )
        },
        {
          time: "上午",
          title: "👼 先去天使之路 (Angel Road)",
          type: "highlight",
          details: (
            <>
              主方案（直達）：西浦線 U「9:20（U1 土庄港）→ 9:33（U9 国際ホテル・エンジェルロード前）」。<br/>
              第二後備：坂手線 S「9:40（S1 土庄港）→ 9:46（S4 土庄本町）」，再步行約 13 分鐘。<br/>
              第三後備：田ノ浦映画村線 T「10:10（T1 土庄港）→ 10:21（T7 国際ホテル・エンジェルロード前）」。建議配合當日退潮可見時段，停留約 45-60 分鐘。
              <a href="https://www.town.tonosho.kagawa.jp/kanko/index.html" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 天使之路官方資訊（土庄町觀光）</a>
              <a href="https://www.shodoshima-olive-bus.com/" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 小豆島全島巴士路線總覽（官方）</a>
              <a href="https://www.shodoshima-olive-bus.com/wp/wp-content/uploads/2021/09/dia_nishiura.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 西浦線時刻表（官方 PDF）</a>
              <a href="https://www.shodoshima-olive-bus.com/wp/wp-content/uploads/2021/09/dia_tanoura.pdf" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '4px', display: 'block' }}>🔗 田ノ浦映画村線時刻表（官方 PDF）</a>
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
              <a href="https://www.shodoshima-olive-bus.com/" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 小豆島全島巴士路線總覽（官方）</a>
            </>
          )
        },
        {
          time: "下午",
          title: "🧹 小豆島オリーブ公園（魔女宅急便掃把飛天）",
          type: "highlight",
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
          details: "建議回程班次：17:30 由土庄港出發，18:30 抵達高松港；之後可安排高松站周邊晚餐。"
        }
      ]
    },
    {
      id: "day3",
      label: "Day 3",
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
          details: "到 RIVETS（岡山県倉敷市児島味野2-5-3）食雪糕，作為兒島行程中段休息"
        },
        {
          time: "下午",
          title: "🚉 兒島 → 倉敷（行街）",
          details: "由兒島移動到倉敷，於美觀地區與商店街散策"
        },
        {
          time: "晚上",
          title: "🍱 晚餐：鰻北倉敷店",
          type: "highlight",
          details: (
            <>
              地址：1-32 Honmachi, Kurashiki, Okayama 710-0054 日本<br/>
              電話：+81 86-454-4545<br/>
              營業時間：11:00-15:00，17:00-19:30（每天）<br/>
              建議提早到店或先預約。
              <a href="https://unagi-nobori.shop" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '6px', display: 'block' }}>🔗 官方選單 / 官網</a>
              <a href="https://www.hotpepper.jp/" target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#3498DB', textDecoration: 'underline', marginTop: '4px', display: 'block' }}>🔗 預約（Hotpepper）</a>
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
      label: "Day 4",
      hotel: "WeBase 高松 (WeBase TAKAMATSU)",
      hotelQuery: "WeBase+TAKAMATSU",
      timeline: [
        {
          time: "上午",
          title: "🛍️ 高松市內百貨 / 商場行街",
          type: "highlight",
          details: "高松站與瓦町一帶自由購物，可先逛百貨公司、生活雜貨與藥妝"
        },
        {
          time: "中午",
          title: "🍜 午餐：高松市區",
          details: "於商場或市區餐廳用餐，保持慢節奏"
        },
        {
          time: "下午",
          title: "⚡ Pokémon Center KAGAWA",
          type: "highlight",
          details: "到 Pokémon Center KAGAWA 朝聖，選購限定周邊與手信"
        },
        {
          time: "傍晚",
          title: "☕ 市區散步 + 晚餐",
          details: "傍晚可在高松港/商店街散步，晚餐安排於高松站或瓦町周邊"
        }
      ]
    },
    {
      id: "day5",
      label: "Day 5 (✈️)",
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
          title: "🚕 前往高松機場",
          type: "highlight",
          details: "結束瀨戶內海悠閒之旅"
        }
      ]
    }
  ],
  todos: [
    { id: 'tak-todo-1', main: '預約餐廳：骨付鳥 一鶴', sub: '晚餐熱門選' },
    { id: 'tak-todo-2', main: '查閱渡輪時間', sub: '前往小豆島/直島' },
    { id: 'tak-todo-3', main: 'Visit Japan Web', sub: '入境手續' },
  ],
  mapText: "🗺️ 高松 & 瀨戶內海地圖"
};
