# monlog-dashboard (MonMonMibo)

個人旅遊行程 PWA。React 19 + Vite（rolldown-vite）+ React Router，push 上 `main` 就由
GitHub Actions 部署去 GitHub Pages。

```bash
npm run dev      # Vite dev server（帶 --host，手機同網段入得到）
npm run build    # 出 dist/，順手 copy index.html → 404.html 做 SPA fallback
npm run lint     # ESLint —— 改完一定要跑
```

## 改動 UI 之前：先讀 DESIGN.md

`DESIGN.md` 係呢個專案嘅完整設計規範（九章節：色彩、字體、component、layout、
depth、動效、Do's & Don'ts、responsive）。**任何觸及視覺嘅改動，動手前先讀返相關章節** ——
佢入面有唔少係踩過雷先寫低嘅規則，睇個名估唔到。

改完之後，如果引入咗新 component 或者改咗既有 pattern，要順手更新 DESIGN.md，
保持文檔同 code 同步（參考 commit `b77dfa1`、`1a6b9cc`）。

最常撞板嗰幾條，先列喺度：

- **所有視覺值一律用 `src/index.css` 嘅 token**（`--color-*`、`--radius-*`、`--shadow-*`、
  `--space-*`）。唔好為某個行程另開一套顏色、圓角或者陰影。
- **唔好喺 JSX 寫 inline style**，狀態樣式交畀 class 同 token。
- **Glass 只有三級**（chip / card / sticky-nav），揀最接近嗰級，唔好自創新 alpha 或 blur。
- **觸控目標最少 44 × 44px**，除非嗰個掣喺 `pointer: coarse` 之下唔會出現。
- **唔好淨係靠顏色表達狀態**，一定要有文字或圖示。
- **唔好隱藏 focus outline** 而冇等效 `focus-visible` 樣式。
- 正文同重要外部連結唔好細過 `15px`。

## 行程資料點寫

每個行程一個資料夾：`src/pages/<CODE>/<code>Data.jsx`（例：`TAK26/tak26Data.jsx`），
配一個三行嘅 page component。全部行程共用 `components/TravelLayout` 渲染，
所以**加功能通常改 TravelLayout，唔係逐個行程改**。

資料檔嘅 `details` 欄係 JSX，但佢**唔用 CSS modules** —— 只可以用 `src/index.css`
入面嘅全域 `trip-*` class（`trip-note-red`、`trip-badge-warn`、`trip-subnote`、
`trip-timetable`、`trip-collapse` 等）。要新樣式就喺 `index.css` 加全域 class。

常用欄位：

- `days[].label` —— 要連星期，例 `"Day 3 (五)"`；最後一日加 `✈️`
- `days[].hotel` / `hotelQuery` —— 有 query 先有導航掣
- `timeline[].mapQuery` —— 每個地點都應該有，Google Maps 搜尋字串
- `fares` —— 金額用**字串**，咁「¥900-1,500」呢類範圍先可以同定額同欄
- `customTools` —— 唔設就 fallback 去日圓匯率；非日本行程記住設返
  （見 `ThbToHkdConverter` / `VndToHkdConverter`）

## 寫行程內容嘅原則

呢啲係人喺街上單手㩒嘅資料，**準確度大過一切**：

- 營業時間、定休日、班次，去官方來源查證，唔好靠記憶，並喺條目留低官方連結。
- 凡係同星期掛鈎嘅嘢（定休日、平日／土日祝時刻表、季節性營業），寫低嗰日係星期幾。
  **調動日程之後，逐項重新核對** —— 呢度出過事。
- 唔好為咗版面整齊而刪走班次方向、站號或者後備方案。
- 內容用廣東話寫，同現有條目一致。
