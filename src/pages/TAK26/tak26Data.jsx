export const tak26Data = {
  id: "tak26",
  header: {
    title: "Takamatsu Trip 🇯🇵",
    subtitle: "⛰️ 栗林公園・🍜 烏冬・🏝️ 小豆島 5日4夜"
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
          time: "09:30",
          title: "🚉 高松 → 兒島",
          details: "搭乘 JR 瀨戶大橋線前往兒島站 (約 30 分鐘)"
        },
        {
          time: "10:30",
          title: "👖 兒島牛仔褲街 (Jeans Street)",
          type: "highlight",
          details: "漫步於日本單寧聖地，尋找高品質的牛仔製品，吊掛的牛仔褲是必拍打卡位"
        },
        {
          time: "13:00",
          title: "🍜 午餐：兒島當地料理",
          details: "在牛仔褲街或車站附近享用午餐"
        },
        {
          time: "15:00",
          title: "🌉 鷲羽山展望台",
          type: "highlight",
          details: "搭乘巴士前往鷲羽山，欣賞瀨戶大橋與瀨戶內海群島交織的絕景"
        },
        {
          time: "18:00",
          title: "🚉 返回高松",
          details: "搭乘電車回到高松市區"
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
          title: "🏯 高松城 (玉藻公園)",
          details: "日本三大「水城」之一，欣賞與海相連的護城河"
        },
        {
          time: "下午",
          title: "🎨 屋島 (Yashima)",
          type: "highlight",
          details: "前往屋島展望台，俯瞰瀨戶內海的壯麗景致"
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
