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
    subtitle: '清邁 6日5夜｜2026年11–12月',
  },
  days: Array.from({ length: 6 }, (_, index) => placeholderDay(index + 1)),
  mapQuery: 'Chiang Mai, Thailand',
  mapText: '清邁行程地圖',
};
