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
          time: "08:30 高松発",
          title: "🚉 高松 → 兒島",
          details: "JR 快速マリンライナー 直達，約 30 分鐘、¥1,090，唔使轉車。09:00 左右到児島。"
        },
        {
          time: "09:00-12:00",
          title: "👖 兒島牛仔褲街 (Jeans Street)",
          type: "highlight",
          mapQuery: "児島ジーンズストリート",
          details: "漫步於日本單寧聖地，尋找高品質牛仔製品，吊掛牛仔褲是必拍打卡位。約 400 米一條街，行足三個鐘綽綽有餘。"
        },
        {
          time: "12:00",
          title: "🍱 午餐：兒島",
          details: "在牛仔褲街周邊享用午餐。13:00 左右出發去倉敷，就有成個下午行美観地区。"
        },
        {
          time: "13:00 児島発",
          title: "🚉 兒島 → 倉敷（行街）",
          mapQuery: "倉敷美観地区",
          details: (
            <>
児島 同 倉敷 雖然同屬倉敷市，但中間隔住山，兩種方法都要約一個鐘：<br/>
              • <strong>JR</strong>：児島→岡山（マリンライナー）→倉敷（山陽本線），約 <strong>56 分鐘</strong>、岡山轉一次車、¥770。<br/>
              • <strong>下電巴士（直達，唔使轉車）</strong>：天城線 [62] 約 55 分鐘／塩生線 [51] 約 57-62 分鐘，JR児島駅前 ↔ 倉敷駅前。
              <span className="trip-note-green">同媽咪去建議搭巴士：時間同 JR 一樣，但一程坐到底，唔使喺岡山搬行李轉車。</span>
              <a href="https://shimoden.net/rosen/rosen/amaki.html" target="_blank" rel="noreferrer" className="trip-link">🔗 下電巴士 天城線 路線案內（官方）</a>
              <a href="https://www.navitime.co.jp/bus/diagram/timelist?departure=00081133&arrival=00448676&line=00072631" target="_blank" rel="noreferrer" className="trip-link">🔗 JR児島駅前 → 倉敷駅前 巴士時刻表</a>
            </>
          )
        },
        {
          time: "14:10 到美観地区",
          title: "🏯 倉敷美観地区",
          type: "highlight",
          mapQuery: "倉敷美観地区",
          details: (
            <>
              白牆倉庫、柳樹同倉敷川，本身行街影相已經夠。由 JR 倉敷駅步行約 15 分鐘。<br/>
              <strong>本町通り</strong>（河北面）係老町屋改成嘅店：mt 紙膠帶、倉敷帆布、國產牛仔褲店同水果 parfait 咖啡室 —— 同上午嘅児島牛仔褲街啱啱好呼應。<br/>
              <strong>倉敷アイビースクエア</strong>：爬滿常春藤嘅紅磚舊紡織廠改建，喺美観地区東南角。
              <span className="trip-note-orange">⏳ 大部分商店 17:00-18:00 收舖，想買嘢就要趁 17:00 前。</span>
              <span className="trip-note-green">☀️ 夜晚唔使急住走 —— 美観地区有石井幹子（東京鐵塔照明設計師）做嘅夜間燈光，食完飯行返轉頭係另一種景。</span>
              <span className="trip-note-muted">＊川舟遊河只賣當日券、朝早 9:00 喺倉敷館開賣，下午到多數已賣晒，唔使白行去問。</span>
              <a href="https://www.kurashiki-tabi.jp/standard/kurashiki-bikan-historical-quarter/" target="_blank" rel="noreferrer" className="trip-link">🔗 倉敷美観地区（倉敷觀光 WEB 官方）</a>
            </>
          )
        },
        {
          time: "14:10-17:00",
          title: "🛍️ 美観地区三間值得行嘅店",
          mapQuery: "倉敷デニムストリート",
          details: (
            <>
              <strong>如竹堂</strong>（本町14-5，10:00-17:30）：倉敷名物紙膠帶，<strong>800 種以上</strong>。星期六仲有貼紙膠帶裝飾襟章／紙盒嘅小手作體驗 —— Day 3 啱啱好係星期六。<br/>
              <strong>倉敷帆布 美観地区店</strong>（本町通り）：倉敷帆布織造廠嘅直營店，袋類手信一流，耐用。<br/>
              <strong>倉敷デニムストリート</strong>：由白壁通り一入美観地区就見到，集合十幾個國產同海外丹寧品牌，仲有藍色嘅丹寧包同軟雪糕。同上午児島牛仔褲街同一條線索。
              <span className="trip-note-green">呢三間行落嚟輕鬆，唔使趕，啱慢慢揀手信。剪走咗児島 RIVETS 嗰杯雪糕？デニムストリート 有藍色丹寧軟雪糕，喺呢度食返都一樣。</span>
              <a href="https://www.kurashiki-tabi.jp/buy/buy-1152/" target="_blank" rel="noreferrer" className="trip-link">🔗 如竹堂（倉敷觀光 WEB 官方）</a>
              <a href="https://www.kurashiki-tabi.jp/buy/buy-12563/" target="_blank" rel="noreferrer" className="trip-link">🔗 倉敷デニムストリート（倉敷觀光 WEB 官方）</a>
            </>
          )
        },
        {
          time: "17:00 一開門",
          title: "🍱 晚餐：うな北 倉敷店（鰻北）",
          type: "highlight",
          mapQuery: "岡山県倉敷市本町1-32",
          details: (
            <>
              地址：岡山県倉敷市本町1-32（〒710-0054）｜電話：086-454-4545｜人均 ¥3,001-4,000<br/>
              就喺美観地区本町通り上，同 如竹堂（本町14-5）同一條街 —— 行完街幾步就到，唔使搭車。由 JR 倉敷駅步行 13 分鐘（美観地区本身離站就 15 分鐘）。
              <span className="trip-badge-warn">⚠️ 不定休 —— 出發前務必網上訂位或打電話</span>
              <span className="trip-note-green">✅ 訂 17:00 一開門嗰轉：唔使排隊，而且肯收訂就代表當日照開，一次過解決人多同不定休兩個問題。</span>
              <span className="trip-subnote">
                🕒 營業時間（每日）：<br/>
                • 午市 11:00 - 15:00（L.O. 14:30）<br/>
                • 晚市 17:00 - 19:30（<strong>L.O. 19:00</strong>）<br/>
                <span className="trip-note-muted">19:30 係關門，唔係落單死線。訂唔到位就最遲 18:30 坐低。</span>
              </span>
              <span className="trip-note-red">訂唔到位又打唔通，就直接去下面嗰間後備，唔好賭。</span>
              <a href="https://unagi-nobori.shop" target="_blank" rel="noreferrer" className="trip-link">🔗 官方選單 / 官網</a>
              <a href="https://www.hotpepper.jp/strJ003560531/" target="_blank" rel="noreferrer" className="trip-link">🔗 うな北 倉敷店（HotPepper 可網上訂位）</a>
            </>
          )
        },
        {
          time: "後備",
          title: "🍱 鰻魚飯後備：ゆうなぎ倉敷本店",
          mapQuery: "ゆうなぎ倉敷本店 倉敷市中央2-1-18",
          details: (
            <>
              うな北 不定休，撲空就轉呢間 —— 倉敷觀光官方網站有介紹，同樣做鰻魚飯。<br/>
              地址：岡山県倉敷市中央2-1-18｜電話：086-427-3100｜由 JR 倉敷駅步行 <strong>7 分鐘</strong>（比うな北仲近）。
              <span className="trip-badge-info">✅ 星期六 17:00-22:00（L.O. 22:00），冇時間壓力</span>
              <span className="trip-subnote">
                🕒 營業時間：<br/>
                • 星期二至六：11:30 - 14:00 ／ 17:00 - 22:00（L.O. 22:00）<br/>
                • 星期日及假日：11:30 - 14:00 ／ 17:00 - 21:30（L.O. 21:00）<br/>
                <span className="trip-note-muted">定休日：星期一（遇假日順延至星期二）—— Day 3 係星期六，照開。</span>
              </span>
              <a href="https://www.kurashiki-tabi.jp/eat/eat-1130/" target="_blank" rel="noreferrer" className="trip-link">🔗 ゆうなぎ倉敷本店（倉敷觀光 WEB 官方）</a>
            </>
          )
        },
        {
          time: "19:00 前後",
          title: "🚉 倉敷 → 高松",
          details: "食完約 18:00，可以再行返轉頭睇美観地区夜燈先走。倉敷 → 岡山（JR 山陽本線約 16 分）→ 高松（マリンライナー約 55 分），連轉車約 1 小時 20 分。19:00 出發約 20:20 到，19:30 出發約 20:50 到。"
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
              A5 級<strong>橄欖牛</strong>，用<strong>備長炭</strong>自己喺枱上燒，配自家製燒肉汁同喜馬拉雅岩鹽。香川縣產品振興協議會認證嘅「三星橄欖餐廳」。<br/>
              有<strong>掘りごたつ個室</strong>（挖低式，腳可以伸直，唔使跪坐）。全店 100 席、全席禁煙。<br/>
              地址：香川県高松市古馬場町5-12｜電話：087-813-9029<br/>
              交通：琴電瓦町站（志度線口）步行 5-6 分鐘、片原町站步行 5 分鐘。<br/>
              WeBase 本身距瓦町站 5 分鐘，所以由酒店直接行過去約 10 分鐘。<strong>但唔使特登由酒店出發</strong> —— 行完丸亀町商店街由北往南落嚟，古馬場就喺瓦町前面，順路；食完再行 10 分鐘返酒店。
              <span className="trip-badge-info">✅ 年中無休．星期日 14:00-23:00（L.O. 22:00）</span>
              <span className="trip-subnote">
                🕒 營業時間：<br/>
                • 星期一至六：14:00 - 24:00（L.O. 23:00）<br/>
                • 星期日：14:00 - 23:00（L.O. 22:00）<br/>
                <span className="trip-note-muted">Day 4 係星期日，照開，但週末夜市中心較旺。打電話留位時<strong>指定要掘りごたつ個室</strong> —— 個室數量有限，唔講多數安排普通枱。</span>
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
  mapText: "🗺️ 高松 & 瀨戶內海地圖",
  mapIframe: "https://www.google.com/maps/d/u/0/embed?mid=1Egg8PNx5OGPt2XjXV1QNvT4hipOHQkg&ehbc=2E312F",
  fares: {
    totalLabel: "五日合計",
    total: "約 ¥8,400-9,000",
    days: [
      {
        day: "Day 1（四）",
        items: [
          { label: "高松機場 → 県庁通り中央公園前（利木津巴士）", amount: "¥1,000" },
          { label: "酒店、兵庫町烏冬 全程步行", amount: "¥0" },
        ],
        total: "¥1,000",
      },
      {
        day: "Day 2（五）",
        items: [
          { label: "高松港 → 土庄港（渡輪）", amount: "¥700" },
          { label: "小豆島巴士 ×3 程（每程上限 ¥500）", amount: "¥900-1,500" },
          { label: "土庄港 → 高松港（渡輪）", amount: "¥700" },
        ],
        total: "¥2,300-2,900",
      },
      {
        day: "Day 3（六）",
        items: [
          { label: "高松 → 児島（マリンライナー）", amount: "¥1,090" },
          { label: "児島 → 倉敷（岡山轉車）", amount: "¥770" },
          { label: "倉敷 → 高松", amount: "¥1,840" },
        ],
        total: "¥3,700",
      },
      {
        day: "Day 4（日）",
        items: [
          { label: "琴電 瓦町 ⇄ 三条（來回）", amount: "¥400" },
          { label: "寶可夢中心、古馬場晚餐 全程步行", amount: "¥0" },
        ],
        total: "¥400",
      },
      {
        day: "Day 5（一）",
        items: [
          { label: "県庁通り中央公園前 → 高松機場", amount: "¥1,000" },
        ],
        total: "¥1,000",
      },
    ],
    notes: [
      "小豆島巴士只公佈「大人運賃上限 ¥500」，冇逐段公佈，所以 Day 2 畀範圍。你哋三程都係中短距離，實際多數平過上限。",
      "小豆島一日券 ¥1,600 唔抵買：只搭三程，最貴都係 ¥1,500。除非臨時加去二十四之瞳映画村或寒霞溪。",
      "Day 3 佔咗全程一半車費，因為過海又過縣。想慳就只有呢日有得減。",
      "未計：酒店（瓦町）去高松港 —— 行路約 20 分鐘，或琴電 瓦町→高松築港 約 ¥200（Day 2 來回 ¥400）。",
      "Day 3 児島→倉敷 用咗 JR ¥770。改搭下電直達巴士嘅話車費未查到，未必一樣。",
    ],
  }
};
