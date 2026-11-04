# MonMonMibo project guidance

個人旅遊行程 PWA。React 19 + Vite（rolldown-vite）+ React Router，push 上 `main` 就由
GitHub Actions 部署去 GitHub Pages。

```bash
npm run dev      # Vite dev server（帶 --host，手機同網段入得到）
npm run build    # 出 dist/，順手 copy index.html → 404.html 做 SPA fallback
npm run lint     # ESLint —— 改完一定要跑
```

## 改動 UI 之前：先讀 DESIGN.md

`DESIGN.md` 係由 VoltAgent 原樣複製的 Airbnb 參考規範；`DESIGN.project.md` 係本專案的完整設計規範（九章節：色彩、字體、component、layout、
depth、動效、Do's & Don'ts、responsive）。**任何觸及視覺嘅改動，動手前先讀返相關章節** ——
佢入面有唔少係踩過雷先寫低嘅規則，睇個名估唔到。

改完之後，如果引入咗新 component 或者改咗既有 pattern，要順手更新 DESIGN.project.md（DESIGN.md 保持上游原樣），
保持文檔同 code 同步。

現行 UI 係 **Clean Travel App**：米白頁底、白色卡片、深可可文字、栗棕操作，配下一趟旅程與緊湊過往旅程清單。
舊版玻璃及復古金屬風已退役。`DESIGN.project.md` 係本專案調整規範；實作落點如下：

- `src/pages/Home/Home.jsx`：首頁用 `trips` 陣列渲染旅程卡；`featured` 標示下一趟旅程；其餘項目顯示於過往旅程清單，數量由陣列計算。
- `src/components/TravelLayout/`：共用行程 hero、日期列、時間線、酒店卡、工具同地圖。
- `src/components/Icons.jsx`：共用 SVG 圖示；導航同工具按鈕保留可讀文字或 `aria-label`。
- L1 動效用 CSS，內容保持直接可見；保留 `prefers-reduced-motion` 降級，唔使加動畫套件。

**用戶要求：不使用 Airbnb 品牌配色；栗棕＋米白，少量森林綠點綴為現行配色。保持無旅程照片、無縮圖、無圖片佔位的清爽旅行 App；首頁簡潔、速度優先。只用輕量 SVG 功能圖示與系統字體，不下載外部字體，不為風格範本額外加圖。此要求優先於上游 DESIGN.md 的 photo-first 建議。**

最常撞板嗰幾條，先列喺度：

- **所有視覺值一律用 `src/index.css` 嘅 token**（`--color-*`、`--radius-*`、`--shadow-*`、
  `--space-*`）。唔好為某個行程另開一套顏色、圓角或者陰影。
- **唔好喺 JSX 寫 inline style**，狀態樣式交畀 class 同 token。
- **卡片用近實色 surface**；固定導航亦用實色 surface。PWA 主色目前係 `#79543c`，改色時一併核對 `index.html`、`vite.config.js` 同 `TravelLayout.jsx` 產生嘅行程 manifest。
- **觸控目標最少 44 × 44px**，除非嗰個掣喺 `pointer: coarse` 之下唔會出現。
- **唔好淨係靠顏色表達狀態**，一定要有文字或圖示。
- **唔好隱藏 focus outline** 而冇等效 `focus-visible` 樣式。
- 正文同重要外部連結唔好細過 `15px`。

## 行程資料點寫

Code comments 統一用英文，著重解釋原因及非直觀行為；介面文字、行程內容及中文專案文件保留原有語言。

每個行程一個資料夾：`src/pages/<CODE>/<code>Data.jsx`（例：`TAK26/tak26Data.jsx`），
配一個三行嘅 page component。全部行程共用 `components/TravelLayout` 渲染，
所以**加功能通常改 TravelLayout，唔係逐個行程改**。

資料檔嘅 `details` 欄係 JSX，但佢**唔用 CSS modules** —— 只可以用 `src/index.css`
入面嘅全域 `trip-*` class（`trip-note-red`、`trip-badge-warn`、`trip-subnote`、
`trip-timetable`、`trip-collapse` 等）。要新樣式就喺 `index.css` 加全域 class。

常用欄位：

- `days[].label` —— 日期確定後加星期，例 `"Day 3 (五)"`。重點資訊要用文字寫明；共用版面會清理標題及日期標籤入面嘅 emoji。
- `days[].hotel` / `hotelQuery` —— 有 query 先有導航掣
- `days[].presentation: "structured"` —— 開啟時間、分類同摘要層次；分類與摘要分別用 `timeline[].category` 同 `timeline[].summary`。UKB26 同 CNX26 已用呢個模式。
- `timeline[].mapQuery` —— 每個地點都應該有，Google Maps 搜尋字串
- `fares` —— 金額用**字串**，咁「¥900-1,500」呢類範圍先可以同定額同欄
- `customTools` —— 唔設就 fallback 去日圓匯率；非日本行程記住設返
  （見 `ThbToHkdConverter` / `VndToHkdConverter`）

多段交通可用 `trip-route` 逐站列出，二選一班次可用 `trip-departure-options`。方向、站號、要搭嘅班次同重要提醒要直接可見；完整時刻表或補充參考先用 `trip-collapse`。

新增旅程時，同步更新 `src/App.jsx` 路由、首頁 `trips` 陣列及 `README.md`。`/cnx26` 係 2026 年清邁行程，已加入航班與住宿資料，工具使用 THB → HKD；其餘每日行程待補。

## 寫行程內容嘅原則

呢啲係人喺街上單手㩒嘅資料，**準確度大過一切**：

- 營業時間、定休日、班次，去官方來源查證，唔好靠記憶，並喺條目留低官方連結。
- 凡係同星期掛鈎嘅嘢（定休日、平日／土日祝時刻表、季節性營業），寫低嗰日係星期幾。
  **調動日程之後，逐項重新核對** —— 呢度出過事。
- 唔好為咗版面整齊而刪走班次方向、站號或者後備方案。
- 內容用廣東話寫，同現有條目一致。

## CNX26 My Maps 同步偏好

用戶已授權：之後每次喺 CNX26 行程新增地點，同步更新以下 My Maps，核對正確分店及地圖位置、避免重複標記，放入合適圖層並配對應圖示；未定日子標成候選。酒店外賣地點須標明外賣用途，不當作到店行程。

- 編輯連結：https://www.google.com/maps/d/u/0/edit?mid=1sn628tieMgDbKlki4kzxrjdMt6n10SM
- 不同圖示類型用不同顏色，同類圖示保持一致。預設：機場／飛機藍色、餐廳／餐具橙色、咖啡及甜品／咖啡杯紫色、購物／購物袋青綠色、市集／購物車金黃色、按摩／水療粉紅色；選 My Maps 最接近的內置色。
- 酒店例外沿用用戶已確認的分色：NORN Nimman13 栗棕色、Narinthra Heritage 綠色，兩者均用酒店／床位圖示。
- 2026年11月4日已將現有標記按上述類型統一圖示及顏色：兩間 Daydream 為粉紅水療圖示、Lumi 橙色餐具、Baristro 與 Cake Baan Piemsuk 紫色咖啡杯、Jing Jai 金黃購物車、One Nimman 與 MAYA 青綠購物袋；機場藍色飛機及酒店分色保留。後續同步沿用此規則，仍須按實際操作結果報告。
- 登入失效、無編輯權或地點有歧義時，明確報告尚未同步，不聲稱完成；不要求用戶提供密碼、Cookie 或 Token。
