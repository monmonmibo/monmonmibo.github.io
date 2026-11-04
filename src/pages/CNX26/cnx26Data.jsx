import ThbToHkdConverter from '../../components/ThbToHkdConverter';

const nimmanHotel = '清邁晚安寧曼13精品酒店';
const nimmanHotelQuery = encodeURIComponent(nimmanHotel);
const heritageHotel = 'Narinthra Heritage';
const heritageHotelQuery = encodeURIComponent(`${heritageHotel} Chiang Mai`);

const placeholderDay = (number) => ({
  id: `day${number}`,
  label: `Day ${number}`,
  presentation: 'structured',
  timeline: [
    {
      time: '待定',
      category: '待編排',
      title: `Day ${number} 行程待編排`,
      summary: '暫未加入景點、交通或用餐安排。',
      details: '確定航班、住宿及想去的地方後，再補充這一日的詳細行程。',
    },
  ],
});

export const cnx26Data = {
  id: 'cnx26',
  header: {
    title: 'Chiang Mai Trip',
    subtitle: '清邁 6日5夜｜2026年11月26日–12月1日',
  },
  days: [
    {
      id: 'day1',
      label: 'Day 1 (四)',
      presentation: 'structured',
      hotel: nimmanHotel,
      hotelQuery: nimmanHotelQuery,
      hotelNote: '11月26日入住 → 11月28日退房 · 共2晚',
      timeline: [
        {
          time: '16:45',
          category: '航班',
          title: '去程航班起飛',
          summary: '出發前往清邁',
          details: '16:45 起飛，預計 18:50 抵達清邁；航班時間按各地當地時間顯示。',
        },
        {
          time: '18:50',
          category: '抵達',
          title: '抵達清邁機場',
          mapQuery: 'Chiang Mai International Airport',
          details: '落機後辦理入境、領取行李，再前往清邁晚安寧曼13精品酒店；交通安排待補。',
        },
        {
          time: '抵達酒店後',
          category: '酒店',
          title: '清邁晚安寧曼13精品酒店 Check-in ＆ 放行李',
          mapQuery: nimmanHotel,
          summary: '入住後直接食晚飯',
          details: '2026年11月26日 14:00 後可辦理入住（酒店當地時間）。當日 18:50 落機，抵達酒店後 Check-in、放低行李，再去食晚飯。',
        },
        {
          time: 'Check-in 後',
          category: '晚餐',
          title: '清邁第一晚晚餐',
          details: 'Check-in 後食晚飯，餐廳待定。',
        },
      ],
    },
    {
      ...placeholderDay(2),
      label: 'Day 2 (五)',
      hotel: nimmanHotel,
      hotelQuery: nimmanHotelQuery,
      hotelNote: '11月27日續住 · 翌日12:00前退房',
      timeline: [
        {
          time: '14:00–15:30（建議）',
          category: '下午茶',
          title: 'The Baristro Asian Style · 飲抹茶',
          summary: '必去 · 入店坐低飲抹茶',
          mapQuery: 'The Baristro Asian Style Chiang Mai',
          details: (
            <>
              寧曼住宿期間安排去清邁大學附近的 The Baristro Asian Style，入店坐低飲抹茶、慢慢休息。<br />
              營業時間：08:00–18:00；以上為建議到訪時間，並非預約。<br />
              <a href="https://www.thailandtravel.or.jp/thebaristroasianstyle/" target="_blank" rel="noreferrer" className="trip-link">The Baristro Asian Style（泰國觀光局）</a>
            </>
          ),
        },
        {
          time: '16:00–17:00（建議）',
          category: 'Shopping',
          title: '尼曼一號 One Nimman',
          summary: '寧曼逛街 · 商店、手作及市集空間',
          mapQuery: 'One Nimman Chiang Mai',
          details: (
            <>
              Baristro 飲完抹茶後，搭車返寧曼區行 One Nimman，睇下設計小店、手信同市集空間。<br />
              營業時間：每日 11:00–21:00，夜市區至22:00；當日有咩市集或活動以官方公告為準。<br />
              <a href="https://www.onenimman.com/en/" target="_blank" rel="noreferrer" className="trip-link">One Nimman（官方）</a>
            </>
          ),
        },
        {
          time: '17:00–18:00（建議）',
          category: 'Shopping',
          title: 'MAYA Lifestyle Shopping Center',
          summary: '接住行附近商場 · 時間可按購物興趣調整',
          mapQuery: 'MAYA Lifestyle Shopping Center Chiang Mai',
          details: (
            <>
              One Nimman 行完再去附近 MAYA 行商場，之後前往晚餐；如果想慢慢行，可縮短其中一站。<br />
              營業時間：10:00–22:00。<br />
              <a href="https://mayashoppingcenter.com/" target="_blank" rel="noreferrer" className="trip-link">MAYA Lifestyle Shopping Center（官方）</a>
            </>
          ),
        },
        {
          time: '晚上（暫定）',
          category: '晚餐候選',
          title: 'Lumi - Italian Restaurant',
          summary: '想食清單 · 建議寧曼住宿期間去，日期未定',
          mapQuery: 'Lumi Italian Restaurant 22/2 Nimman Soi 9 Chiang Mai',
          details: '餐廳位於寧曼 Soi 9，先暫放 Day 2 晚餐候選，方便之後按其他行程調動；未訂位，晚餐時間及營業安排待確認。',
        },
      ],
    },
    {
      id: 'day3',
      label: 'Day 3 (六)',
      presentation: 'structured',
      hotel: heritageHotel,
      hotelQuery: heritageHotelQuery,
      hotelNote: '11月28日入住 → 12月1日退房 · 共3晚',
      timeline: [
        {
          time: '12:00 前',
          category: '酒店',
          title: '清邁晚安寧曼13精品酒店 Check-out',
          summary: '11月28日退房 · 酒店當地時間',
          mapQuery: nimmanHotel,
          details: '2026年11月28日 12:00 前辦理退房，之後轉住 Narinthra Heritage；轉酒店交通及行李安排待補。',
        },
        {
          time: '入住時間待確認',
          category: '酒店',
          title: 'Narinthra Heritage Check-in ＆ 放行李',
          summary: '11月28日至12月1日 · 連住3晚',
          mapQuery: `${heritageHotel} Chiang Mai`,
          details: '11月28日轉住 Narinthra Heritage，住到12月1日。酒店可辦理入住及退房的時間待確認。',
        },
        {
          time: '16:00–17:30（建議・未預約）',
          category: '按摩',
          title: 'Giving Tree Massage 古城店 · 熱石按摩90分鐘',
          mapQuery: 'Giving Tree Massage 5/13 Rachadamnoen Road Old Town Chiang Mai',
          summary: '1.5小時 · Old Town 古城店 · 晚餐前放鬆',
          details: '轉酒店、放低行李後，安排1.5小時熱石按摩。選定 Old Town 古城店（5/13 Rachadamnoen Road，電話+66 53 326 185），配合 Narinthra Heritage 住宿；預約時確認90分鐘療程是否包含全程熱石或組合按摩、價格及可預約時段。預留到店及更衣時間，晚餐安排18:00後；未訂位。',
        },
      ],
    },
    ...[4, 5].map((number) => ({
      ...placeholderDay(number),
      label: `Day ${number} (${number === 4 ? '日' : '一'})`,
      hotel: heritageHotel,
      hotelQuery: heritageHotelQuery,
      hotelNote: `11月${number === 4 ? 29 : 30}日續住 · 12月1日退房`,
      ...(number === 4 ? {
        timeline: [
          {
            time: '08:30–11:30（建議）',
            category: '市集',
            title: 'Jing Jai Market（真心市集）',
            summary: '必去 · 11月29日星期日 · 週末早市',
            mapQuery: 'Jing Jai Market Chiang Mai',
            details: (
              <>
                早上去真心市集食早餐、行手作同農夫攤檔，預留約3小時慢慢行。<br />
                週末市集：星期六、日 06:30–15:00；園區商店時間另計。<br />
                <a href="https://www.jingjaicentralchiangmai.com/market" target="_blank" rel="noreferrer" className="trip-link">Jing Jai Market（官方時間）</a>
              </>
            ),
          },
          {
            time: '下午（建議約15:00）',
            category: '下午茶',
            title: '酒店下午茶：Cake Baan Piemsuk 椰子批',
            summary: '必食 Coconut Pie · 叫外賣返 Narinthra Heritage',
            details: '返酒店休息，叫 Cake Baan Piemsuk 招牌 Coconut Pie（椰子批）外賣喺酒店食，唔安排到店。當日先確認外賣平台／店舖有貨、送達範圍同時間，亦可請酒店協助查詢；未落單。',
          },
        ],
      } : {
        timeline: [
          {
            time: '08:30（建議出發）',
            category: '包車',
            title: '一日包車：酒店 → Mon Jam／湄林山區',
            summary: '11月30日（一）· 預留08:30–17:00 · 包車待預訂',
            details: '由 Narinthra Heritage 出發，一日包車去晒苗族木頭車同 Maekee Sheep House，包含司機等候及回程。預訂時確認服務時數、山區附加費、停車／過路費及超時收費；以下時間為建議安排，按司機路線、車程及現場情況調整。',
          },
          {
            time: '10:00–11:30（建議）',
            category: '體驗',
            title: '必玩：Formula Hmong 苗族木頭車',
            summary: 'Mon Jam 山區 · 預留排隊及體驗時間',
            mapQuery: 'Formula Hmong Mon Jam Mae Raem Mae Rim Chiang Mai',
            details: (
              <>
                玩苗族傳統木造 Go-kart，預留排隊及現場活動時間。當日開放時間、收費及乘坐規則仍待營運方確認，出發前先查詢；未預約。<br />
                <a href="https://maps.google.com/?cid=14049603271662662961" target="_blank" rel="noreferrer" className="trip-link">Formula Hmong 地點資料（Google Maps）</a>
              </>
            ),
          },
          {
            time: '12:00–13:00（建議）',
            category: '午餐',
            title: 'Mon Jam／湄林山區午餐',
            details: '木頭車玩完後喺山區食午餐，餐廳待定，再由包車前往綿羊農場。',
          },
          {
            time: '13:30–15:00（建議）',
            category: '農場',
            title: 'Maekee Sheep House 綿羊農場',
            summary: '睇羊、餵羊、山景 · 預留約1.5小時',
            mapQuery: 'Maekee Sheep House 72 Mae Raem Mae Rim Chiang Mai',
            details: (
              <>
                慢慢行農場、餵羊同睇山景，亦可喺咖啡店休息。<br />
                地址：บ้านแม่ขิ 72 Mae Raem, Mae Rim District, Chiang Mai 50180。<br />
                電話：+66 84 206 4536。<br />
                營業時間：每日07:30–18:00（按你提供的 Google 商家資料；Day 5 係星期一）。門票及當日安排出發前再確認。<br />
                <a href="https://maps.google.com/?cid=11157055430989473519" target="_blank" rel="noreferrer" className="trip-link">Maekee Sheep House（Google Maps）</a>
                <a href="https://www.facebook.com/100094733004940" target="_blank" rel="noreferrer" className="trip-link">Maekee Sheep House（店家 Facebook）</a>
              </>
            ),
          },
          {
            time: '15:00後回程 · 約17:00返酒店（預留）',
            category: '包車',
            title: 'Maekee Sheep House → Narinthra Heritage',
            summary: '返市區休息 · 晚餐待定',
            mapQuery: `${heritageHotel} Chiang Mai`,
            details: '由包車接返酒店，抵達時間視山路及市區交通而定。傍晚休息後再出去食晚飯；當日下午不安排固定時間的 Daydream 預約。',
          },
        ],
      }),
    })),
    {
      id: 'day6',
      label: 'Day 6 (二)',
      presentation: 'structured',
      hotel: heritageHotel,
      hotelQuery: heritageHotelQuery,
      hotelNote: '12月1日早上退房 · 前往機場',
      timeline: [
        {
          time: '早上',
          category: '交通',
          title: 'Narinthra Heritage Check-out → 清邁機場',
          mapQuery: 'Chiang Mai International Airport',
          details: '12月1日早上由 Narinthra Heritage 退房後前往清邁機場，準備搭乘10:35航班；酒店出發時間及交通安排待補。',
        },
        {
          time: '10:35',
          category: '航班',
          title: '回程航班起飛',
          summary: '清邁出發 · 14:20 抵達',
          details: '10:35 由清邁起飛，預計 14:20 抵達；航班時間按各地當地時間顯示。',
        },
        {
          time: '14:20',
          category: '抵達',
          title: '回程航班抵達',
          details: '落機後辦理入境及領取行李，結束清邁旅程。',
        },
      ],
    },
  ],
  customTools: <ThbToHkdConverter />,
  mapQuery: 'Chiang Mai, Thailand',
  mapText: '清邁行程地圖',
  mapIframe: 'https://www.google.com/maps/d/u/0/embed?mid=1sn628tieMgDbKlki4kzxrjdMt6n10SM&ehbc=2E312F',
};
