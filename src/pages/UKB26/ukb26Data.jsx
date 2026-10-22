export const ukb26Data = {
  id: "ukb26",
  header: {
    title: "Kobe & Awaji Trip 🇯🇵",
    subtitle: "🚢 神戶・淡路島 6日5夜深度遊"
  },
  days: [
    {
      id: "day1",
      label: "Day 1 (三)",
      presentation: "structured",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "15:00 check-in",
      timeline: [
        {
          time: "14:00 / 14:20",
          category: "交通",
          title: "🚌 機場巴士：機場 → 三宮",
          type: "highlight",
          mapQuery: "関西国際空港 第1ターミナル",
          details: (
            <>
              在關西機場第 1 航站樓 <strong>6 號乘車處</strong> 搭乘。<br/>
              • 14:00 / 14:20 班次：預計 15:05 / 15:25 抵達 <strong>神戶三宮</strong>。<br/>
              <a href="https://www.kate.co.jp/tcn/kix_busstop/#terminal1" target="_blank" rel="noreferrer" className="trip-link" aria-label="關西機場巴士站地圖 (6 號位)（新視窗）">🔗 關西機場巴士站地圖 (6 號位)</a>
            </>
          )
        },
        {
          time: "15:30",
          category: "酒店",
          title: "🏨 Hotel Monterey Kobe Check-in & 休息",
          mapQuery: "ホテルモントレ神戸",
          details: "15:00 後辦理入住並放下行李，稍作休息回一回電。"
        },
        {
          time: "17:00",
          category: "Shopping",
          title: "🛍️ 三宮站周邊散策",
          mapQuery: "三宮センター街",
          details: "行下 Mint Kobe、三宮中心街或百貨公司，感受神戶市中心的熱鬧氣氛。"
        },
        {
          time: "傍晚",
          category: "Shopping",
          title: "🎀 Sanrio 神戸三宮店",
          mapQuery: "Sanrio 神戸三宮店",
          details: (
            <>
              逛完三宮中心街，晚飯前去 Sanrio 神戸三宮店睇下角色精品、買手信。<br/>
              🕒 營業時間：平日、土日祝 11:30 - 20:00。<br/>
              <a href="https://stores.sanrio.co.jp/8420100" target="_blank" rel="noreferrer" className="trip-link" aria-label="Sanrio 神戸三宮店（官方）（新視窗）">🔗 Sanrio 神戸三宮店（官方）</a>
            </>
          )
        },
        {
          time: "晚上",
          category: "晚餐",
          title: "🍱 晚餐：炭燒鰻魚飯",
          type: "highlight",
          mapQuery: "神戸三宮 うなぎ",
          details: "推薦：青葉 (Aoba) 或三宮周邊的名店，品嚐香脆肥美的炭燒鰻魚。"
        }
      ]
    },
    {
      id: "day2",
      label: "Day 2 (四)",
      presentation: "structured",
      hotel: "Naturelive Rokko (豪華露營)",
      hotelQuery: "ネイチャーライブ六甲",
      timeline: [
        {
          time: "上午",
          category: "早餐",
          title: "🍳 三宮悠閒早餐",
          mapQuery: "神戸三宮駅",
          details: "將大行李寄存在酒店或儲物櫃，輕裝上山（或攜帶必要行李）。"
        },
        {
          time: "13:30",
          category: "交通",
          title: "🚌 三宮 → Naturelive 六甲",
          summary: "15:00 前到停車場集合 · 接駁按預約指示",
          type: "highlight",
          mapQuery: "兵庫県神戸市灘区六甲山町南六甲1034",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>三宮出發</strong><span>13:30 為行程預留出發時間，並非指定巴士班次</span></li>
                <li><strong>紀念碑台站</strong><span>原定方案：摩耶觀光 Sky Shuttle Bus 落車後步行約 3 分鐘</span></li>
                <li><strong>Naturelive 六甲停車場</strong><span>六甲山郵局正對面；兵庫県神戸市灘区六甲山町南六甲1034駐車場</span></li>
                <li><strong>Naturelive Rokko</strong><span>按引導看板到停車場集合，再搭設施接駁車入住</span></li>
              </ol>
              <span className="trip-note-red">🔴 重要：請預留充足時間，15:00 前到達停車場集合。</span>
              <span className="trip-note-red">🔴 Check-in 時按官方指示辦理接駁及入住安排。</span>
              <span className="trip-note-muted">官方另提供六甲山上駅接送（須事先預約）；如已安排停車場集合，以住宿預約確認為準。</span>
              <a href="https://naturelive.co.jp/access/" target="_blank" rel="noreferrer" className="trip-link" aria-label="官方交通指引（新視窗）">🔗 官方交通指引</a>
            </>
          )
        },
        {
          time: "15:00",
          category: "酒店",
          title: "✨ Naturelive Rokko Check-in",
          type: "highlight",
          mapQuery: "ネイチャーライブ六甲",
          details: "享受奢華露營、手作晚餐，看「千萬美金」夜景 🌃"
        }
      ]
    },
    {
      id: "day3",
      label: "Day 3 (五)",
      presentation: "structured",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "15:00 check-in / 再 check-in",
      timeline: [
        {
          time: "11:00",
          category: "景點",
          title: "🚠 退房 & 前往六甲空中庭園",
          type: "highlight",
          mapQuery: "六甲ガーデンテラス",
          details: (
            <>
              辦理退房，請酒店職員開車接載前往 <strong>六甲空中庭園 (Rokko Garden Terrace)</strong>。<br/>
              在這裡可以俯瞰神戶與大阪灣的全景。
            </>
          )
        },
        {
          time: "中午",
          category: "戶外活動",
          title: "🏃‍♂️ 六甲山アスレチックパーク GREENIA",
          type: "highlight",
          mapQuery: "六甲山アスレチックパークGREENIA",
          details: (
            <>
              前往日本最大的運動冒險公園 GREENIA (Main Area)。<br/>
              挑戰各種水上、陸上戶外活動，大玩特玩一番！
              <span className="trip-badge-info">✅ 10:00 - 17:00（最終受付 16:30）．Day 3 係星期五，避開咗逢星期四休園</span>
              <span className="trip-note-muted">2026 球季 3/20 - 11/15，之後轉做六甲山スノーパーク。10 月尾去仲有約半個月 buffer。</span>
            </>
          )
        },
        {
          time: "15:30 左右",
          category: "交通",
          title: "🚌 GREENIA → 三宮",
          summary: "預留約 1.5 小時 · 包括等車及轉乘",
          type: "highlight",
          mapQuery: "六甲山上バス アスレチックパークGREENIA",
          details: (
            <>
              <ol className="trip-route" aria-label="GREENIA 返回酒店路線">
                <li><strong>GREENIA 正門</strong><span>步行約 4 分鐘到巴士站</span></li>
                <li><strong>R06 アスレチックパークGREENIA</strong><span><b>山上巴士①系統</b> · 往六甲ケーブル山上駅</span></li>
                <li><strong>R01 六甲ケーブル山上駅</strong><span><b>六甲ケーブル</b> · 下山約 10 分鐘</span></li>
                <li><strong>六甲ケーブル下駅</strong><span><b>神戶市巴士16系統</b> · 往阪神御影方向</span></li>
                <li><strong>阪急六甲（落車轉電車）</strong><span><b>阪急神戶線普通列車</b> · 往神戸三宮方向</span></li>
                <li><strong>神戸三宮站 · 西出口</strong><span>步行約 4 分鐘到酒店</span></li>
                <li><strong>Hotel Monterey Kobe</strong><span>Check-in、放行李，稍作休息</span></li>
              </ol>
              <span className="trip-note-muted">連等車及轉乘預留約 1.5 小時；15:30 左右離開 GREENIA，預計約 17:00 到酒店，實際視乎接駁班次及路況。</span>
              <details className="trip-collapse trip-route-reference">
                <summary>時刻表與官方交通資料</summary>
                <div className="trip-link-group">
                <a href="https://www.rokkosan.com/greenia/access/" target="_blank" rel="noreferrer" className="trip-link" aria-label="GREENIA 官方交通指引（新視窗）">🔗 GREENIA 官方交通指引</a>
                <a href="https://www.rokkocable.com/wp-content/uploads/2026/08/13timetable20260806.pdf" target="_blank" rel="noreferrer" className="trip-link" aria-label="六甲山上巴士①③系統時刻表（①系統見第 1 頁）（新視窗）">🔗 六甲山上巴士①③系統時刻表（①系統見第 1 頁）</a>
                <a href="https://www.rokkocable.com/" target="_blank" rel="noreferrer" className="trip-link" aria-label="六甲ケーブル時刻表・運行狀況（新視窗）">🔗 六甲ケーブル時刻表・運行狀況</a>
                <a href="https://www.rokkocable.com/access/" target="_blank" rel="noreferrer" className="trip-link" aria-label="六甲ケーブル下站・市巴士轉乘指引（新視窗）">🔗 六甲ケーブル下站・市巴士轉乘指引</a>
                <a href="https://kotsu.city.kobe.lg.jp/wp-content/uploads/nextyear/015101.pdf?v=1792486980" target="_blank" rel="noreferrer" className="trip-link" aria-label="神戶市巴士16系統時刻表（六甲ケーブル下 → 阪神御影方向）（新視窗）">🔗 神戶市巴士16系統時刻表（六甲ケーブル下 → 阪神御影方向）</a>
                </div>
              </details>
            </>
          )
        },
        {
          time: "17:00 左右",
          category: "酒店",
          title: "🏨 Hotel Monterey Kobe Check-in & 放行李",
          type: "highlight",
          mapQuery: "ホテルモントレ神戸",
          details: (
            <>
              六甲山玩完後直接回到三宮，前往 <strong>Hotel Monterey Kobe</strong>。<br/>
              15:00 後辦理入住並放低行李，稍作休息再出門。
            </>
          )
        },
        {
          time: "傍晚",
          category: "Shopping",
          title: "🛍️ 三宮 Shopping",
          mapQuery: "三宮センター街",
          details: "放低行李後輕裝出發，行下三宮中心街、Mint Kobe 或百貨公司，慢慢 Shopping、買手信。"
        },
        {
          time: "晚上",
          category: "晚餐",
          title: "🍣 晚餐：新鮮壽司大餐",
          mapQuery: "神戸三宮 寿司",
          details: (
            <>
              回到三宮後，享用高品質的日本壽司。<br/>
              推薦：三宮站周邊的職人手作壽司店或人氣迴轉壽司。
            </>
          )
        }
      ]
    },
    {
      id: "day4",
      label: "Day 4 (六)",
      presentation: "structured",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "淡路島南下 即日來回",
      timeline: [
        {
          time: "07:40 / 08:40",
          category: "交通",
          title: "🚌 淡路島去程・出發前確認",
          summary: "星期六出發 · 先核對高速巴士班次及轉乘站",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: (
            <>
              <span className="trip-note-orange">⚠️ 班次待核對：原計劃列 07:40 / 08:40，下一段列 07:55；轉乘地點亦曾寫洲本巴士中心。下方路線按洲本 IC 方案整理，請先對照官方表確認，唔好將三個出發時間當成已核實班次。</span>
              • 07:40 班次：預計 09:46 抵達農場 (最接近開門時間)<br/>
              • 08:40 班次：預計 10:46 抵達農場<br/>
              <div className="trip-link-group">
                <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/0c50cf8694ae41b6a85e8b00cb1ddbfe/l_1010-1070_current.pdf" target="_blank" rel="noreferrer" className="trip-link" aria-label="1. 三宮-洲本 高速巴士時刻表（新視窗）">🔗 1. 三宮-洲本 高速巴士時刻表</a>
                <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/aef10707c452426b93836da12d372fba/l_2010_0_current.pdf" target="_blank" rel="noreferrer" className="trip-link" aria-label="2. 洲本-農場 轉乘巴士時刻表（新視窗）">🔗 2. 洲本-農場 轉乘巴士時刻表</a>
              </div>
            </>
          )
        },
        {
          time: "去程（班次待核對）",
          category: "交通",
          title: "🚌 高速巴士：神姬三宮ＢＴ → 洲本 IC",
          type: "highlight",
          mapQuery: "イングランドの丘",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>神姬三宮ＢＴ（鐵路高架橋下）</strong><span>原計劃 07:55 出發；與前項 07:40 / 08:40 有出入，待核對</span></li>
                <li><strong>洲本 IC · 原計劃 09:08 到達</strong><span>原站等候 09:30 往「福良」方向巴士</span></li>
                <li><strong>イングランドの丘 · 原計劃 09:46 到達</strong><span>農場遊覽；回程轉乘資料見下一張卡</span></li>
              </ol>
            </>
          )
        },
        {
          time: "17:11 / 17:44",
          category: "交通",
          title: "🏠 回程：農場 → 洲本 IC → 三宮",
          type: "highlight",
          mapQuery: "ミント神戸",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>イングランドの丘 · 17:11</strong><span>搭乘往洲本方向巴士</span></li>
                <li><strong>洲本 IC · 17:27 到達</strong><span>原計劃原站轉乘 17:44 高速巴士</span></li>
                <li><strong>三宮BT（ミント）· 18:45</strong><span>返回神戶，之後食晚餐</span></li>
              </ol>
              <span className="trip-note-muted">以上保留原計劃班次；原站轉乘位置及當日班次請對照官方交通資料，預留延誤緩衝。</span>
            </>
          )
        },
        {
          time: "晚上",
          category: "晚餐",
          title: "🥩 晚餐：日式燒肉大餐",
          mapQuery: "神戸三宮 焼肉",
          details: (
            <>
              回到三宮後，享用豐富的燒肉料理。<br/>
              推薦：三宮站附近的「燒肉一蘭」或其他高品質和牛燒肉店。
            </>
          )
        }
      ]
    },
    {
      id: "day5",
      label: "Day 5 (日)",
      presentation: "structured",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "淡路島洋蔥盛宴 即日來回",
      timeline: [
        {
          time: "09:25",
          category: "交通",
          title: "🚌 三宮出發 (神姬總站)",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>神姬三宮ＢＴ · 09:25</strong><span>搭乘高速巴士往淡路 IC</span></li>
                <li><strong>淡路 IC · 10:02</strong><span>落車後前往 Highway Oasis；原計劃約 10:15 開始逛街</span></li>
              </ol>
            </>
          )
        },
        {
          time: "10:15 起",
          category: "Shopping",
          title: "🛍️ Highway Oasis：買物與午餐",
          summary: "早走：趕 12:59 車 · 慢慢逛：搭 14:49 車",
          type: "highlight",
          mapQuery: "淡路ハイウェイオアシス",
          details: (
            <>
              <strong>食：</strong>餐廳選擇極多 (推薦：みけ家和食、Ponte Mar 景觀餐廳、尊拉麵)。<br/>
              <strong>買：</strong>洋蔥湯粉、黑蒜咖哩、真洋蔥大掃貨！🧅<br/>
              <a href="http://www.awajishimahighwayoasis.com/food/" target="_blank" rel="noreferrer" className="trip-link" aria-label="Highway Oasis 餐廳一覽（新視窗）">🔗 Highway Oasis 餐廳一覽</a>
            </>
          )
        },
        {
          time: "12:59 / 14:49",
          category: "交通",
          title: "⛪ 轉乘：淡路夢舞台",
          type: "highlight",
          mapQuery: "淡路夢舞台",
          details: (
            <>
              <div className="trip-departure-options" aria-label="去夢舞台兩個班次方案">
                <p><strong>早走 · 12:59 → 13:41</strong><span>午餐及購物提早完成，12:59 前到 A1 停車場候車。</span></p>
                <p><strong>慢慢逛 · 14:49 → 15:31</strong><span>可留多啲時間買物、午餐；14:49 前到站。</span></p>
              </div>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>Highway Oasis · A1 停車場</strong><span>搭乘北部周遊巴士「反時計回り」方向，兩個方案擇一</span></li>
                <li><strong>淡路夢舞台前</strong><span>早班 13:41／遲班 15:31 到達，落車後遊覽夢舞台</span></li>
              </ol>
              <span className="trip-note-orange">⚠️ 班次較疏，請務必看準時間上車。</span><br/>
              <span className="trip-badge-warn">⚠️ 「反時計回り」只喺 3-11 月嘅土日祝運行 —— Day 5 係星期日先有車，平日完全冇</span>
              <span className="trip-note-muted">藍色兩行係上車（A1駐車場）同落車（淡路夢舞台前）嘅站，框住嘅 4便 / 5便 就係行程用嗰兩班。</span>
              <details className="trip-collapse">
                <summary>🚌 去程時刻表：反時計回り 全站（3-11 月土日祝限定）</summary>
                <span className="trip-timetable-wrap">
                  <table className="trip-timetable">
                    <thead>
                      <tr>
                        <th scope="col">巴士站</th>
                        <th scope="col">3便</th>
                        <th scope="col" className="is-taken is-taken-start">4便</th>
                        <th scope="col" className="is-taken is-taken-end">5便</th>
                        <th scope="col">6便</th>
                        <th scope="col">7便</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">岩屋PT</th>
                        <td>11:00</td>
                        <td className="is-taken is-taken-start">12:50</td>
                        <td className="is-taken is-taken-end">14:40</td>
                        <td>16:40</td>
                        <td>17:00</td>
                      </tr>
                      <tr>
                        <th scope="row">淡路IC高速バス停前</th>
                        <td>11:08</td>
                        <td className="is-taken is-taken-start">12:58</td>
                        <td className="is-taken is-taken-end">14:48</td>
                        <td>16:48</td>
                        <td>17:08</td>
                      </tr>
                      <tr className="is-key">
                        <th scope="row">淡路ハイウェイオアシス・A1駐車場</th>
                        <td>11:09</td>
                        <td className="is-taken is-taken-start">12:59</td>
                        <td className="is-taken is-taken-end">14:49</td>
                        <td>16:49</td>
                        <td>17:09</td>
                      </tr>
                      <tr>
                        <th scope="row">県立淡路島公園</th>
                        <td>11:14</td>
                        <td className="is-taken is-taken-start">13:04</td>
                        <td className="is-taken is-taken-end">14:54</td>
                        <td>16:54</td>
                        <td>17:14</td>
                      </tr>
                      <tr>
                        <th scope="row">禅坊靖寧前</th>
                        <td>11:16</td>
                        <td className="is-taken is-taken-start">13:06</td>
                        <td className="is-taken is-taken-end">14:56</td>
                        <td>16:56</td>
                        <td>17:16</td>
                      </tr>
                      <tr>
                        <th scope="row">グリナリウム淡路島</th>
                        <td>11:19</td>
                        <td className="is-taken is-taken-start">13:09</td>
                        <td className="is-taken is-taken-end">14:59</td>
                        <td>16:59</td>
                        <td>17:19</td>
                      </tr>
                      <tr>
                        <th scope="row">県立淡路景観園芸学校</th>
                        <td>11:22</td>
                        <td className="is-taken is-taken-start">13:12</td>
                        <td className="is-taken is-taken-end">15:02</td>
                        <td>17:02</td>
                        <td>17:22</td>
                      </tr>
                      <tr>
                        <th scope="row">Awaji Nature Lab & Resort</th>
                        <td>11:23</td>
                        <td className="is-taken is-taken-start">13:13</td>
                        <td className="is-taken is-taken-end">15:03</td>
                        <td>17:03</td>
                        <td>17:23</td>
                      </tr>
                      <tr>
                        <th scope="row">淡路カントリーガーデン</th>
                        <td>11:25</td>
                        <td className="is-taken is-taken-start">13:15</td>
                        <td className="is-taken is-taken-end">15:05</td>
                        <td>17:05</td>
                        <td>17:25</td>
                      </tr>
                      <tr>
                        <th scope="row">あわじ花さじき</th>
                        <td>11:30</td>
                        <td className="is-taken is-taken-start">13:20</td>
                        <td className="is-taken is-taken-end">15:10</td>
                        <td>17:10</td>
                        <td>17:30</td>
                      </tr>
                      <tr>
                        <th scope="row">ハーモニーファーム淡路</th>
                        <td>11:31</td>
                        <td className="is-taken is-taken-start">13:21</td>
                        <td className="is-taken is-taken-end">15:11</td>
                        <td>17:11</td>
                        <td>17:31</td>
                      </tr>
                      <tr>
                        <th scope="row">東浦BT</th>
                        <td>11:43</td>
                        <td className="is-taken is-taken-start">13:33</td>
                        <td className="is-taken is-taken-end">15:23</td>
                        <td>17:23</td>
                        <td>17:43</td>
                      </tr>
                      <tr>
                        <th scope="row">立石川</th>
                        <td>11:45</td>
                        <td className="is-taken is-taken-start">13:35</td>
                        <td className="is-taken is-taken-end">15:25</td>
                        <td>17:25</td>
                        <td>17:45</td>
                      </tr>
                      <tr>
                        <th scope="row">大磯ユーアールエー前</th>
                        <td>11:47</td>
                        <td className="is-taken is-taken-start">13:37</td>
                        <td className="is-taken is-taken-end">15:27</td>
                        <td>17:27</td>
                        <td>17:47</td>
                      </tr>
                      <tr className="is-key">
                        <th scope="row">淡路夢舞台前</th>
                        <td>11:51</td>
                        <td className="is-taken is-taken-start">13:41</td>
                        <td className="is-taken is-taken-end">15:31</td>
                        <td>17:31</td>
                        <td>17:51</td>
                      </tr>
                      <tr>
                        <th scope="row">国営明石海峡公園淡路口前</th>
                        <td>11:56</td>
                        <td className="is-taken is-taken-start">13:46</td>
                        <td className="is-taken is-taken-end">15:36</td>
                        <td>17:36</td>
                        <td>17:56</td>
                      </tr>
                      <tr>
                        <th scope="row">岩屋PT（終點）</th>
                        <td>12:03</td>
                        <td className="is-taken is-taken-start">13:53</td>
                        <td className="is-taken is-taken-end">15:43</td>
                        <td>17:43</td>
                        <td>18:03</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <span className="trip-note-muted">只剪走 1便/2便 —— 佢哋喺你哋到 Highway Oasis（10:15）之前已經開走。6便/7便 留低做保險。</span>
              </details>
              <a href="https://www.honshi-bus.co.jp/local/view/11" target="_blank" rel="noreferrer" className="trip-link" aria-label="北部周遊巴士 (Route 10) 詳情（新視窗）">🔗 北部周遊巴士 (Route 10) 詳情</a>
              <a href="https://www.city.awaji.lg.jp/soshiki/toshisoumu/26263.html" target="_blank" rel="noreferrer" className="trip-link" aria-label="あわ神あわ姫バス 路線圖・時刻表（淡路市官方・令和8年3月1日起）（新視窗）">🔗 あわ神あわ姫バス 路線圖・時刻表（淡路市官方・令和8年3月1日起）</a>
            </>
          )
        },
        {
          time: "18:00",
          category: "晚餐",
          title: "🍽️ 晚餐：夢舞台展望臺餐廳",
          type: "highlight",
          mapQuery: "淡路夢舞台 百段苑",
          details: (
            <>
              就在百段苑旁的大樓內，有多間優質餐廳：<br/>
              • <strong>2F KITORA：</strong>新鮮海鮮、壽司 🍣<br/>
              • <strong>1F YUME TERRACE：</strong>優質淡路牛料理 🥩<br/>
              <span className="trip-note-muted">*營業至 21:00，吃飽後走幾步即達巴士站。</span>
            </>
          )
        },
        {
          time: "19:15 / 20:15",
          category: "交通",
          title: "🚌 夢舞台晚間回神戶",
          type: "highlight",
          mapQuery: "淡路夢舞台前 バス停",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>淡路夢舞台前</strong><span>晚餐後搭高速巴士返三宮</span></li>
                <li><strong>建議 20:15 → 21:02 三宮</strong><span>早走可揀 19:15 → 20:02 三宮；兩班擇一</span></li>
              </ol>
              <span className="trip-note-muted">Day 5 係星期日 —— 灰色「平日」班次搭唔到，藍色兩行係行程用嗰兩班。</span>
              <details className="trip-collapse">
                <summary>🚌 回程時刻表：夢舞台前 → 三宮（大磯号）</summary>
                <span className="trip-timetable-wrap">
                  <table className="trip-timetable trip-timetable-num">
                    <thead>
                      <tr>
                        <th scope="col">夢舞台前</th>
                        <th scope="col">高速舞子</th>
                        <th scope="col">三宮</th>
                        <th scope="col">新神戸</th>
                        <th scope="col">運行日</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">16:15</th>
                        <td>16:35</td>
                        <td>17:02</td>
                        <td>17:12</td>
                        <td>每日</td>
                      </tr>
                      <tr>
                        <th scope="row">16:45</th>
                        <td>17:05</td>
                        <td>17:32</td>
                        <td>17:42</td>
                        <td>每日</td>
                      </tr>
                      <tr>
                        <th scope="row">17:15</th>
                        <td>17:35</td>
                        <td>18:02</td>
                        <td>18:12</td>
                        <td>土日祝</td>
                      </tr>
                      <tr className="is-off">
                        <th scope="row">17:35</th>
                        <td>17:55</td>
                        <td>18:22</td>
                        <td>18:32</td>
                        <td>平日</td>
                      </tr>
                      <tr>
                        <th scope="row">17:45</th>
                        <td>18:05</td>
                        <td>18:32</td>
                        <td>18:42</td>
                        <td>土日祝</td>
                      </tr>
                      <tr>
                        <th scope="row">18:15</th>
                        <td>18:35</td>
                        <td>19:02</td>
                        <td>19:12</td>
                        <td>每日</td>
                      </tr>
                      <tr className="is-off">
                        <th scope="row">18:45</th>
                        <td>19:05</td>
                        <td>—</td>
                        <td>—</td>
                        <td>平日</td>
                      </tr>
                      <tr className="is-key">
                        <th scope="row">19:15</th>
                        <td>19:35</td>
                        <td>20:02</td>
                        <td>20:12</td>
                        <td>每日</td>
                      </tr>
                      <tr className="is-key">
                        <th scope="row">20:15</th>
                        <td>20:35</td>
                        <td>21:02</td>
                        <td>21:12</td>
                        <td>每日</td>
                      </tr>
                      <tr>
                        <th scope="row">21:15</th>
                        <td>21:35</td>
                        <td>22:02</td>
                        <td>22:12</td>
                        <td>每日</td>
                      </tr>
                      <tr>
                        <th scope="row">21:55</th>
                        <td>22:11</td>
                        <td>22:38</td>
                        <td>22:48</td>
                        <td>每日</td>
                      </tr>
                    </tbody>
                  </table>
                </span>
                <span className="trip-note-muted">只列 16:15 之後嘅回程班次；去程早班 13:41、遲班 15:31 到夢舞台。更早回程班次見下面官方 PDF。</span>
              </details>
              <a href="https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2024_12.pdf" target="_blank" rel="noreferrer" className="trip-link" aria-label="淡路夢舞台前 → 三宮 回程時刻表（夢舞台官方 PDF・2024年12月版）（新視窗）">🔗 淡路夢舞台前 → 三宮 回程時刻表（夢舞台官方 PDF・2024年12月版）</a>
            </>
          )
        }
      ]
    },
    {
      id: "day6",
      label: "Day 6 (一) ✈️",
      presentation: "structured",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "11:00 checkout",
      timeline: [
        {
          time: "11:00",
          category: "酒店",
          title: "🏨 Check-out & 午餐",
          mapQuery: "ホテルモントレ神戸",
          details: (
            <>
              11:00 辦理退房並將行李寄存在 Hotel Monterey Kobe。<br/>
              在三宮商圈享用最後一頓午餐（推薦試試神戶沾麵或明石燒）。
            </>
          )
        },
        {
          time: "13:00",
          category: "準備",
          title: "💼 取回行李 & 往巴士站",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: "13:00 回酒店取行李，預留步行、購票及候車時間；建議 13:20 前到機場巴士乘車處，準備搭 13:40 班次。"
        },
        {
          time: "13:40",
          category: "交通",
          title: "🚌 高速巴士：三宮 → 關西機場",
          type: "highlight",
          mapQuery: "関西国際空港 第1ターミナル",
          details: (
            <>
              <ol className="trip-route" aria-label="交通路線">
                <li><strong>神戶三宮 · 13:40 開車</strong><span>機場巴士直達關西機場第 1 航站樓；提早到站候車</span></li>
                <li><strong>關西機場第 1 航站樓 · 14:45</strong><span>預計車程約 65 分鐘，抵達後辦理登機</span></li>
              </ol>
              <a href="https://www.kate.co.jp/tcn/timetable/detail/KB" target="_blank" rel="noreferrer" className="trip-link" aria-label="神戶三宮 → 關西機場時刻表（官方）（新視窗）">🔗 神戶三宮 → 關西機場時刻表（官方）</a>
            </>
          )
        }
      ]
    }
  ],
  todos: [
    { id: 'ukb-todo-onion-1', main: '洋蔥湯粉 / 沙拉醬', sub: 'Highway Oasis 貨最齊' },
    { id: 'ukb-todo-onion-2', main: '黑蒜洋蔥咖哩', sub: '淡路島限定美味' },
    { id: 'ukb-todo-glamp', main: 'Naturelive Rokko 預約', sub: '確認晚餐選擇' },
    { id: 'ukb-todo-vjw', main: 'Visit Japan Web', sub: '入境登記' },
  ],
  mapQuery: "神戸市",
  mapText: "🗺️ 神戶 & 淡路島地圖"
};
