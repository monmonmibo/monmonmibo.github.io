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
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "15:00 check-in",
      timeline: [
        {
          time: "14:00 / 14:20",
          title: "🚌 機場巴士：機場 → 三宮",
          type: "highlight",
          mapQuery: "関西国際空港 第1ターミナル",
          details: (
            <>
              在關西機場第 1 航站樓 <strong>6 號乘車處</strong> 搭乘。<br/>
              • 14:00 / 14:20 班次：預計 15:05 / 15:25 抵達 <strong>神戶三宮</strong>。<br/>
              <a href="https://www.kate.co.jp/tcn/kix_busstop/#terminal1" target="_blank" rel="noreferrer" className="trip-link">🔗 關西機場巴士站地圖 (6 號位)</a>
            </>
          )
        },
        {
          time: "15:30",
          title: "🏨 Hotel Monterey Kobe Check-in & 休息",
          mapQuery: "ホテルモントレ神戸",
          details: "15:00 後辦理入住並放下行李，稍作休息回一回電。"
        },
        {
          time: "17:00",
          title: "🛍️ 三宮站周邊散策",
          mapQuery: "三宮センター街",
          details: "行下 Mint Kobe、三宮中心街或百貨公司，感受神戶市中心的熱鬧氣氛。"
        },
        {
          time: "晚上",
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
      hotel: "Naturelive Rokko (豪華露營)",
      hotelQuery: "ネイチャーライブ六甲",
      timeline: [
        {
          time: "上午",
          title: "🍳 三宮悠閒早餐",
          mapQuery: "神戸三宮駅",
          details: "將大行李寄存在酒店或儲物櫃，輕裝上山（或攜帶必要行李）。"
        },
        {
          time: "13:30",
          title: "🚌 三宮 → 六甲山・停車場接駁車",
          type: "highlight",
          mapQuery: "兵庫県神戸市灘区六甲山町南六甲1034",
          details: (
            <>
              <strong>前往本設施，我們將提供「接駁車」服務，接送地點為下方指定的停車場。</strong><br/>
              無論是開車或搭乘大眾運輸工具前往的賓客，請依照下方停車場的引導看板指示前往。<br/>
              <br/>
              <strong>ネイチャーライブ六甲 駐車場 所在地：</strong><br/>
              兵庫県神戸市灘区六甲山町南六甲1034駐車場<br/>
              Nature Live 六甲停車場位於「六甲山郵局」正對面。<br/>
              （步行前往）從摩耶觀光 Sky Shuttle Bus「紀念碑台」站步行約 3 分鐘<br/>
              <br/>
              <span className="trip-note-red">🔴 重要：請預留充足時間，15:00 前到達停車場集合。</span>
              <span className="trip-note-red">🔴 Check-in 時按官方指示辦理接駁及入住安排。</span>
              <a href="https://naturelive.co.jp/access/" target="_blank" rel="noreferrer" className="trip-link">🔗 官方交通指引</a>
            </>
          )
        },
        {
          time: "15:00",
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
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "15:00 check-in / 再 check-in",
      timeline: [
        {
          time: "11:00",
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
          time: "下午",
          title: "🚠 步行 → 六甲有馬空中纜車 → 有馬溫泉",
          type: "highlight",
          mapQuery: "六甲有馬ロープウェー 六甲山頂駅",
          details: (
            <>
              1. 從 GREENIA 步行約 8-10 分鐘前往 <strong>六甲山頂站</strong>。<br/>
              2. 搭乘索道下山直達有馬溫泉 (約 12 分鐘)。<br/>
              3. 在古老的溫泉街散策，感受大正浪漫氛圍 (不浸溫泉)。<br/>
              ✅ 必試：炭酸煎餅、黑豆甜點、金之湯/銀之湯周邊小店。
              <span className="trip-note-orange">⏳ 三條死線幾乎撞埋一齊：GREENIA 17:00 閉園、纜車尾班 17:10、湯本坂手信舖 17:00 收 —— 玩到閉園先落山，到有馬條街已經散晒。</span>
              <span className="trip-subnote">
                🕒 湯本坂（有馬本街道）手信舖：大部分 10:00 - 17:00，部分老舖到 17:30。<br/>
                <span className="trip-note-muted">Day 3 係星期五，纜車唔延長（10-11 月只有星期六延到 20:30），尾班 17:10。建議 15:00 左右離開 GREENIA，約 15:30 到有馬，仲有個半鐘行街。因為唔浸溫泉，金の湯開到 22:00 對行程冇幫助。</span>
              </span>
            </>
          )
        },
        {
          time: "傍晚",
          title: "🚌 回到三宮酒店",
          mapQuery: "ホテルモントレ神戸",
          details: (
            <>
              從有馬溫泉搭乘「有馬急行巴士」或電車回到三宮 (約 30 分鐘)。<br/>
              抵達後辦理入住並放置行李。
            </>
          )
        },
        {
          time: "晚上",
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
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "淡路島南下 即日來回",
      timeline: [
        {
          time: "07:40 / 08:40",
          title: "🚌 三宮出發 (拼最早入場)",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: (
            <>
              搭乘高速巴士往 <strong>洲本巴士中心</strong>。<br/>
              • 07:40 班次：預計 09:46 抵達農場 (最接近開門時間)<br/>
              • 08:40 班次：預計 10:46 抵達農場<br/>
              <div className="trip-link-group">
                <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/0c50cf8694ae41b6a85e8b00cb1ddbfe/l_1010-1070_current.pdf" target="_blank" rel="noreferrer" className="trip-link">🔗 1. 三宮-洲本 高速巴士時刻表</a>
                <a href="https://www.awaji-kotsu.co.jp/_assets/d762e18f435947a5af53e214e409edf2/aef10707c452426b93836da12d372fba/l_2010_0_current.pdf" target="_blank" rel="noreferrer" className="trip-link">🔗 2. 洲本-農場 轉乘巴士時刻表</a>
              </div>
            </>
          )
        },
        {
          time: "07:55 / 09:08",
          title: "🚌 高速巴士：神姬三宮ＢＴ → 洲本 IC",
          type: "highlight",
          mapQuery: "イングランドの丘",
          details: (
            <>
              <strong>1. 上車地點：</strong>神姬三宮ＢＴ (<strong>神姬三宮ＢＴ</strong> - 鐵路高架橋下)。<br/>
              <strong>2. 落車地點：</strong>在 <strong>洲本 ＩＣ</strong> 落車 (09:08)。<br/>
              <span className="trip-note-green">✅ 原站轉乘 (極之方便)：</span><br/>
              落車位置即為轉乘站，原地等候 <strong>09:30</strong> 往「福良」方向的巴士即可。<br/>
              <strong>3. 抵達農場：</strong>預計 <strong>09:46</strong> 抵達「イングランドの丘」。
            </>
          )
        },
        {
          time: "17:11 / 17:44",
          title: "🏠 回程：農場 → 洲本 IC → 三宮",
          type: "highlight",
          mapQuery: "ミント神戸",
          details: (
            <>
              <strong>1. 農場發車：</strong>17:11 搭乘往洲本方向巴士。<br/>
              <strong>2. 原站轉乘：</strong>17:27 到達 <strong>洲本 ＩＣ</strong>，原地等候 <strong>17:44</strong> 的高速巴士。<br/>
              <strong>3. 回到神戶：</strong>18:45 抵達 <strong>三宮BT(ミント)</strong>。<br/>
              <span className="trip-note-green">✅ 完美對接：無需走路轉站，全家輕鬆即日來回。</span>
            </>
          )
        },
        {
          time: "晚上",
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
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "淡路島洋蔥盛宴 即日來回",
      timeline: [
        {
          time: "09:25",
          title: "🚌 三宮出發 (神姬總站)",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: (
            <>
              在 <strong>神姬三宮ＢＴ</strong> 上車，享受輕鬆的早晨。<br/>
              目的地：<strong>淡路 ＩＣ</strong> (10:02 抵達)。
            </>
          )
        },
        {
          time: "10:15 - 13:30",
          title: "🛍️ Highway Oasis：買物與午餐",
          type: "highlight",
          mapQuery: "淡路ハイウェイオアシス",
          details: (
            <>
              <strong>食：</strong>餐廳選擇極多 (推薦：みけ家和食、Ponte Mar 景觀餐廳、尊拉麵)。<br/>
              <strong>買：</strong>洋蔥湯粉、黑蒜咖哩、真洋蔥大掃貨！🧅<br/>
              <a href="http://www.awajishimahighwayoasis.com/food/" target="_blank" rel="noreferrer" className="trip-link">🔗 Highway Oasis 餐廳一覽</a>
            </>
          )
        },
        {
          time: "12:59 / 14:49",
          title: "⛪ 轉乘：淡路夢舞台",
          type: "highlight",
          mapQuery: "淡路夢舞台",
          details: (
            <>
              在 Highway Oasis 的 <strong>A1 停車場</strong> 搭乘「反時計」方向巴士。<br/>
              • 12:59 班次：13:41 抵達夢舞台<br/>
              • 14:49 班次：15:31 抵達夢舞台<br/>
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
              <a href="https://www.honshi-bus.co.jp/local/view/11" target="_blank" rel="noreferrer" className="trip-link">🔗 北部周遊巴士 (Route 10) 詳情</a>
              <a href="https://www.city.awaji.lg.jp/soshiki/toshisoumu/26263.html" target="_blank" rel="noreferrer" className="trip-link">🔗 あわ神あわ姫バス 路線圖・時刻表（淡路市官方・令和8年3月1日起）</a>
            </>
          )
        },
        {
          time: "18:00",
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
          title: "🚌 夢舞台晚間回神戶",
          type: "highlight",
          mapQuery: "淡路夢舞台前 バス停",
          details: (
            <>
              在「淡路夢舞台前」站搭乘高速巴士。<br/>
              <span className="trip-note-green">✅ 吃飽就走：建議搭乘 20:15 班次，21:02 即可回到三宮。</span><br/>
              • 回程班次：19:15 或 20:15
              <span className="trip-note-muted">Day 5 係星期日 —— 灰色「平日」班次搭唔到，藍色兩行係行程用嗰兩班。</span>
              <details className="trip-collapse">
                <summary>🚌 回程時刻表：夢舞台前 → 三宮（大磯号）</summary>
                <span className="trip-timetable-wrap">
                  <table className="trip-timetable">
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
                <span className="trip-note-muted">只列 16:15 之後 —— 你哋最早 15:31 先到夢舞台。更早班次見下面官方 PDF。</span>
              </details>
              <a href="https://www.yumebutai.co.jp/wp/wp-content/themes/yumebutai/images/access/pdf/bus_timetable_maiko2024_12.pdf" target="_blank" rel="noreferrer" className="trip-link">🔗 淡路夢舞台前 → 三宮 回程時刻表（夢舞台官方 PDF・2024年12月版）</a>
            </>
          )
        }
      ]
    },
    {
      id: "day6",
      label: "Day 6 (一) ✈️",
      hotel: "Hotel Monterey Kobe",
      hotelQuery: "Hotel+Monterey+Kobe",
      hotelNote: "11:00 checkout",
      timeline: [
        {
          time: "11:00",
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
          time: "13:30",
          title: "💼 取回行李 & 往巴士站",
          type: "highlight",
          mapQuery: "神姫バス 神戸三宮バスターミナル",
          details: "回到酒店提取行李，步行前往三宮高速巴士站。"
        },
        {
          time: "13:40",
          title: "🚌 高速巴士：三宮 → 關西機場",
          type: "highlight",
          mapQuery: "関西国際空港 第1ターミナル",
          details: (
            <>
              搭乘 13:40 的機場巴士。<br/>
              <strong>14:45</strong> 抵達關西機場第 1 航站樓，準備登機。
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
