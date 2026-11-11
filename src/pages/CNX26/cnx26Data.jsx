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
      summary: '呢日暫時未有景點、交通同用餐安排。',
      details: '等航班、住宿同想去嘅地方確定咗，再補返當日行程。',
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
      date: '2026-11-26',
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
          details: '16:45 起飛，預計 18:50 到清邁。起飛同抵達時間都以當地時間為準。',
        },
        {
          time: '18:50',
          category: '抵達',
          title: '抵達清邁機場',
          mapQuery: 'Chiang Mai International Airport',
          details: '落機後辦入境同拎行李，再去清邁晚安寧曼13精品酒店。去酒店嘅交通稍後再定。',
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
          time: 'Check-in 後（建議20:30–21:00）',
          category: '晚餐',
          title: 'Lumi - Italian Restaurant',
          summary: '11月26日（四）· 寧曼Soi 9 · 未訂位',
          mapQuery: 'Lumi Italian Restaurant 22/2 Nimman Soi 9 Chiang Mai',
          details: '18:50落機後先到酒店Check-in、放低行李，再前往寧曼Soi 9的Lumi食意大利菜。20:30–21:00為建議到店範圍，按航班、入境及交通調整；預約時確認最遲入座及廚房截單時間，未訂位。',
        },
      ],
    },
    {
      ...placeholderDay(2),
      date: '2026-11-27',
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
              One Nimman 行完再去附近 MAYA 行商場，之後按腳休息，再前往晚餐；購物時間可按按摩預約調整。<br />
              營業時間：10:00–22:00。<br />
              <a href="https://mayashoppingcenter.com/" target="_blank" rel="noreferrer" className="trip-link">MAYA Lifestyle Shopping Center（官方）</a>
            </>
          ),
        },
        {
          time: 'Shopping 後、晚餐前（建議約18:00）',
          category: '按摩',
          title: '腳底按摩（店舖待定）',
          summary: '11月27日（五）· 建議45–60分鐘 · 未預約',
          details: 'One Nimman 同 MAYA shopping 後按腳休息，建議預留45–60分鐘；先考慮寧曼購物區附近店舖，實際店舖、價格及可約時段待確認。按摩後再食晚飯，餐廳及用餐時間待定。',
        },
        {
          time: '按摩後（時間待定）',
          category: '晚餐',
          title: '晚餐待定',
          details: 'One Nimman同MAYA逛街、腳底按摩後食晚飯，餐廳待定。Baan Landai改去Day 5湄林分店。',
        },
      ],
    },
    {
      id: 'day3',
      date: '2026-11-28',
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
          time: '18:00（已預約）',
          category: '按摩',
          title: 'Giving Tree Massage 古城店 · 2小時按摩／腳底按摩',
          mapQuery: 'Giving Tree Massage 5/13 Rachadamnoen Road Old Town Chiang Mai',
          summary: '11月28日（六）· 4人 · 已預約18:00',
          details: '已訂 11 月 28 日（星期六）18:00，4 人到 Giving Tree Old Town 古城店（5/13 Rachadamnoen Road，電話 +66 53 326 185）。店舖確認咗兩個安排。2 人做 2 小時按摩，預計 20:00 完成。另 2 人做 1 小時腳底按摩，預計 19:00 完成。原本要求香薰油按摩，確認訊息冇寫明按摩種類，要再問店舖。記得預留提早到店、更衣同去食晚飯嘅交通時間。',
        },
        {
          time: '按摩後（建議20:30左右）',
          category: '晚餐',
          title: 'Kung Yim Shop (2nd Branch)',
          summary: '11月28日（六）· 第二分店 · 未訂位',
          mapQuery: 'Kung Yim Shop 2nd Branch 90 Ratchawong Road Chiang Mai',
          details: 'Giving Tree 古城店按摩後，等齊4人，預留更衣及交通時間前往 Kung Yim 第二分店（90 Ratchawong Road），建議20:30左右食晚飯；實際入座及最後點餐時間待確認，未訂位。',
        },
      ],
    },
    ...[4, 5].map((number) => ({
      ...placeholderDay(number),
      date: number === 4 ? '2026-11-29' : '2026-11-30',
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
          {
            time: '18:15（已預約）',
            category: 'Head Spa',
            title: 'Daydream Sleep Salon · Suriwong 分店洗頭',
            summary: '11月29日（日）· 4人 · 已預約18:15',
            mapQuery: 'Daydream sleep salon at Suriwong 99/1-2 Sridonchai Road Chiang Mai',
            details: '已訂 11 月 29 日（星期日）18:15，4 人到 Suriwong 分店洗頭同做頭部護理。預留車程，提早到店。已確認 3 人做 Better Sleep，1 人做 Head to Toe。兩款都係 100 分鐘，預計 19:55 完成，之後去 OWL 食晚飯。訂金係 THB 1,200，付款狀態未記錄。',
          },
          {
            time: '洗頭後（入座時間待確認）',
            category: '晚餐',
            title: 'OWL brasserie',
            summary: '11月29日（日）· 古城 Arak Road · 未訂位',
            mapQuery: 'OWL brasserie 65/1 Arak Road Chiang Mai',
            details: (
              <>
                喺 Daydream Suriwong 做完 18:15 開始嘅療程後，預留車程去 OWL。晚餐未訂位，先按已訂套餐嘅時間，向餐廳確認幾點可以入座同廚房幾點截單。<br />
                地址：65/1 Arak Road。星期二至日11:00–22:00，星期一休息；Day 4係星期日。<br />
                <a href="https://www.owlbrasserie.com/location" target="_blank" rel="noreferrer" className="trip-link">OWL（官方・位置及營業時間）</a>
              </>
            ),
          },
        ],
      } : {
        timeline: [
          {
            time: '09:00 酒店出發（包車已預訂）',
            category: '包車',
            title: '一日包車：酒店 → Mon Jam／湄林山區',
            summary: '11月30日（一）· JunoAndMe.Travel 蒙占山包車 · 已預訂 · 預留OT至21:00',
            details: (
              <>
                已預訂 JunoAndMe.Travel 清邁在地包車蒙占山方案，09:00由 Narinthra Heritage 出發，晚餐後送返酒店，預留OT至21:00；付款狀態未記錄。以下價錢及條款按你提供的資料記錄。<br />
                HKD950／車，包油費、司機10小時服務、行程路線諮詢、餐廳預約協助及廣東話客服跟進；不包括門票及餐飲。<br />
                基本服務09:00–19:00共10小時；19:00後延續每小時THB200，預留至21:00，2小時OT預算THB400／車。建議21:00前結束，保障司機休息；不足一小時計法及跨區補油費向公司確認。<br />
                行程路線：網紅餐廳早餐 → 山上花田 → 苗族木頭車（額外加入）→ 羊農場 → 過山車 → 文青市集 → Baan Landai Mae Rim晚餐 → 酒店。木頭車暫放花田後，最終順序及各站停留時間由包車公司確認，19:00晚餐後由司機等候及送返酒店，計劃21:00前結束。<br />
                出發前核對車型、人數、接送及停車／過路費安排，並請公司確認是否包含指定羊農場與苗族木頭車。
              </>
            ),
          },
          {
            time: '上車後（時間待確認）',
            category: '早餐',
            title: '網紅餐廳早餐（店名待確認）',
            summary: '海報路線第1站 · 餐費自付',
            details: '按包車海報安排早餐，餐廳名稱及位置待公司提供；未訂位。',
          },
          {
            time: '早餐後（時間待確認）',
            category: '景點',
            title: '山上花田（名稱待確認）',
            summary: '海報路線第2站 · 門票自付',
            details: '按海報安排山上花田，實際園區、星期一開放情況、花況及門票待公司確認。',
          },
          {
            time: '花田後（次序待確認）',
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
            time: '中午（時間待確認）',
            category: '午餐',
            title: 'Mon Jam／湄林山區午餐',
            details: '睇早餐食得幾晏、到時肚唔肚餓同司機路線，再決定去邊度食午餐、需唔需要加站。餐費自付。',
          },
          {
            time: '下午（時間待確認）',
            category: '農場',
            title: 'Maekee Sheep House 綿羊農場',
            summary: '指定 Maekee Sheep House · 待公司確認接送路線',
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
            time: '羊農場後（時間待確認）',
            category: '體驗',
            title: '過山車（場地待確認）',
            summary: '海報路線 · 與苗族木頭車分開安排 · 費用自付',
            details: '保留海報的過山車體驗，場地名稱、星期一開放情況、票價及乘坐限制待公司確認；不代替 Formula Hmong 苗族木頭車。',
          },
          {
            time: '過山車後（時間待確認）',
            category: '市集',
            title: '文青市集（名稱待確認）',
            summary: '海報路線最後一站 · 11月30日星期一',
            details: '等包車公司提供市集名稱同位置，確認星期一有開，再定留幾耐同幾點回程。',
          },
          {
            time: '19:00 晚餐（待訂位）',
            category: '晚餐',
            title: 'Baan Landai Mae Rim · 湄林分店',
            summary: '11月30日（一）· 司機接送及等候 · 未訂位',
            mapQuery: 'Baan Landai Mae Rim 225 Kad Farang Mae Sa Mae Rim Chiang Mai',
            details: (
              <>
                包車行程後由司機送去湄林分店食晚飯，食完再送返 Narinthra Heritage；不先回酒店。安排19:00晚餐，餐廳訂位待確認。<br />
                地址：225 Kad Farang, Mae Sa, Mae Rim。電話：+66 64 469 2929。<br />
                官方時間11:00–22:00，最後點餐21:00，星期二休息；Day 5係星期一。<br />
                19:00後用餐等候及送返酒店按OT計費，THB200／小時，預留至21:00共THB400／車；同司機協調用餐及回程時間。<br />
                <a href="https://www.baan-landai.com/en/mae-rim/" target="_blank" rel="noreferrer" className="trip-link">Baan Landai Mae Rim（官方・位置及營業時間）</a>
              </>
            ),
          },
          {
            time: '晚餐後 · 預留OT至21:00',
            category: '包車',
            title: 'Baan Landai Mae Rim → Narinthra Heritage',
            summary: '司機等候及送返酒店 · OT預算THB400／車',
            mapQuery: `${heritageHotel} Chiang Mai`,
            details: '19:00晚餐後由司機直接送返酒店。包車已預訂09:00開始，基本10小時至19:00，另預留OT至21:00，按THB200／小時計，2小時預算THB400／車。與司機協調離店時間，目標21:00前結束行程。',
          },
        ],
      }),
    })),
    {
      id: 'day6',
      date: '2026-12-01',
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
          details: '10:35 由清邁起飛，預計 14:20 抵達。起飛同抵達時間都以當地時間為準。',
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
