export const ngo26Data = {
  id: "ngo26",
  header: {
    title: "Nagoya Trip 🇯🇵",
    subtitle: "🦀 名古屋 5日4夜 最終完美版"
  },
  days: [
    {
      id: "day1",
      hotel: "名古屋站西口附近民宿",
      hotelQuery: "Nagoya+Station+West+Exit",
      timeline: [
        {
          time: "14:30",
          title: "🛬 抵達中部國際機場 (NGO)",
          type: "highlight",
          details: "搭名鐵 u-sky 到名古屋站 (約28分鐘)"
        },
        {
          time: "16:00",
          title: "🏨 民宿 Check-in",
          details: "名古屋站西口附近"
        },
        {
          time: "19:00",
          title: "🦀 晚餐：名古屋 かに銀 (Kanigin)",
          type: "highlight",
          details: (
            <>
              蟹放題！盡情享受海鮮慶祝第一晚 🎊<br />
              <span className="trip-note-orange">⏳ 限時：90 分鐘</span>
              <span className="trip-subnote">
                🕒 營業時間：<br />
                • 一：16:00 - 23:30<br />
                • 二至五：16:00 - 23:00<br />
                • 六、日及節假日：12:00 - 23:00<br />
                <span className="trip-note-muted">(L.O. 料理22:00 / 飲品22:30)</span><br />
                ✨ 全年無休
              </span>
            </>
          )
        }
      ]
    },
    {
      id: "day2",
      hotel: "名古屋站西口附近民宿",
      timeline: [
        {
          time: "09:30",
          title: "🚇 出發往東山公園",
          details: "搭東山線直達（約20-25分鐘）🐨"
        },
        {
          time: "10:00",
          title: "🦍 東山動植物園",
          type: "highlight",
          details: (
            <>
              10:00 - 16:50 (閉園)<br/>
              探訪帥哥大猩猩 Shabani 🦍<br/>
              <span className="trip-note-muted">*動物通常 16:00 開始回室內</span>
            </>
          )
        },
        {
          time: "19:00",
          title: "🥩 晚餐：馬喰一代 名古屋WEST",
          type: "highlight",
          details: (
            <>
              頂級飛騨牛一頭家 🐄 燒肉/壽喜燒<br />
              <span className="trip-subnote">
                🕒 營業時間：11:30 - 00:00 (每日)
              </span>
            </>
          )
        }
      ]
    },
    {
      id: "day3",
      hotel: "名古屋站西口附近民宿",
      timeline: [
        {
          time: "11:00",
          title: "🚇 出發往榮 (Sakae)",
          details: "搭東山線直達"
        },
        {
          time: "11:30",
          title: "👞 BIRKENSTOCK 名古屋",
          type: "highlight",
          details: "Sakae Place 1F"
        },
        {
          time: "12:30",
          title: "🍜 午餐：山本屋本店 栄本町通店",
          type: "highlight",
          details: "味噌鍋燒烏龍麵 🍲"
        },
        {
          time: "14:00",
          title: "🛍️ LOFT (商場)",
          details: "逛 LOFT 買雜貨文具"
        },
        {
          time: "15:30",
          title: "📚 蔦屋書店",
          details: "睇書 hea 吓"
        },
        {
          time: "19:00",
          title: "🐍 晚餐：炭燒うな富士 (名駅太閤口店)",
          type: "highlight",
          details: "超人氣鰻魚飯 🍱"
        }
      ]
    },
    {
      id: "day4",
      hotel: "名古屋站西口附近民宿",
      timeline: [
        {
          time: "09:30",
          title: "🐋 名古屋港水族館",
          type: "highlight",
          details: "看虎鯨和海豚表演 🐬"
        },
        {
          time: "12:30",
          title: "🍔 午餐：水族館內小食店",
          details: "喺水族館入面醫肚"
        },
        {
          time: "14:30",
          title: "🛍️ 大須商店街 & 古董市",
          type: "highlight",
          details: (
            <>
              • 18號限定：大須觀音古董市 🏺<br />
              • 三輪神社：尋找兔子神像 🐰<br />
              • Jungle Nagoya：玩具模型巡禮 🤖
            </>
          )
        },
        {
          time: "18:00",
          title: "🍣 晚餐：梅丘壽司の美登利 名古屋店",
          type: "highlight",
          details: "東京人氣壽司店 🍣"
        }
      ]
    },
    {
      id: "day5",
      label: "✈️ 回程 (UO685 21:00)",
      timeline: [
        {
          time: "10:00",
          title: "🏨 Check-out & 寄存行李",
          details: "去名古屋站寄存行李 🧳"
        },
        {
          time: "11:30",
          title: "🍜 午餐：麵家獅子丸",
          type: "highlight",
          details: "最後一餐拉麵！"
        },
        {
          time: "13:00",
          title: "🛍️ 名古屋站地下街",
          details: "最後衝刺買手信、零食"
        },
        {
          time: "15:30",
          title: "🧳 取行李",
          details: "準備搭車去機場"
        },
        {
          time: "16:30",
          title: "🚕 出發前往機場 (NGO)",
          type: "highlight",
          details: "名鐵 μ-SKY (約28分鐘)"
        },
        {
          time: "17:30",
          title: "🍽️ 機場晚餐：4F Sky Town",
          type: "highlight",
          details: (
            <>
              上機前最後衝刺！機場 4 樓有超多名古屋名店 🍱<br />
              (矢場丼、雞三和、鰻魚飯等)
            </>
          )
        },
        {
          time: "21:00",
          title: "🛫 起飛回程 (UO685)",
          type: "highlight",
          details: "See you Nagoya!"
        }
      ]
    }
  ],
  todos: [
    { id: 'ngo-todo-1', main: '預約：かに銀 (Kanigin)', sub: 'Day 1 蟹放題' },
    { id: 'ngo-todo-2', main: '預約：馬喰一代 名古屋WEST', sub: 'Day 2 飛驒牛燒肉' },
    { id: 'ngo-todo-3', main: '確認：岩正手打烏龍 營業時間', sub: 'Day 5 必吃味噌麵' },
    { id: 'ngo-todo-4', main: '預約：u-sky 名鐵特急車票', sub: '往返機場' },
    { id: 'ngo-todo-5', main: 'Visit Japan Web', sub: '入境手續' },
    { id: 'ngo-todo-6', main: '換日元 / 準備信用卡', sub: '古董市可能需現金' },
  ],
  mapIframe: "https://www.google.com/maps/d/u/0/embed?mid=1X_1E8hq9SDRejzJisDuQ7c5HNfUMIXI&ehbc=2E312F"
};
