# MonMonMibo — 清爽旅行 App 設計提案

狀態：歷史提案，已由 Airbnb 參考版取代。現行規範見 DESIGN.md 與 DESIGN.project.md。
首輪頁面：首頁與 UKB26 Day 3；共用 tokens 的正式切換會影響其他頁面，實作時須一併驗證。

## 1. Visual Theme & Atmosphere

白色卡片、淺灰背景、清楚文字與克制的藍色操作。手機先看得到目的地、時間、下一個行動。
首頁用「下一趟旅程」作主角；已完成旅程做緊湊清單。行程頁減少 hero 高度，讓日期與首項安排更早出現。
移除金屬、皮革、紙張紋理、英文檔案編號裝飾與大面積深色背景。

## 2. Color Palette & Roles

候選 tokens（由 src/index.css 統一供應；正式落地要保留其他現有 semantic token）：

```css
:root {
  --color-bg: #f5f7fa;
  --color-bg-rgb: 245, 247, 250;
  --color-surface: #ffffff;
  --color-surface-rgb: 255, 255, 255;
  --color-text: #172b3a;
  --color-text-rgb: 23, 43, 58;
  --color-text-secondary: #526372;
  --color-primary: #1765cc;
  --color-primary-rgb: 23, 101, 204;
  --color-primary-hover: #1254ad;
  --color-primary-active: #10458c;
  --color-primary-soft: #eaf2ff;
  --color-text-inverse: #ffffff;
  --color-border: #dce3eb;
  --color-control-border: #758494;
  --color-focus: #1765cc;
}
```

藍色代表操作與選中狀態；警告、錯誤、完成狀態沿用獨立 semantic 色彩並配文字。
PWA theme-color、靜態及行程 manifest 同步改為主色。

## 3. Typography Rules

沿用現有中文字體及系統 fallback，不新增字體下載。頁面標題 28–32px、卡片標題 18px、正文 16px、輔助文字及重要連結至少 15px。
正文行高 1.7；時間與金額用 tabular-nums。時間比分類突出；長日文站名自然換行。
標題不加漸層、描邊、陰影；SVG 圖示用現有 Icons.jsx。

## 4. Component Stylings

- 旅程卡：白底、細邊、16px 圓角、輕陰影。主打卡顯示目的地、日期、天數與「查看行程」。
- 行程卡：時間＋分類 → 標題＋導航 → 摘要 → 詳情。導航保留可讀文字；不讓長標題擠壓按鈕。
- 交通：沿用 trip-route 逐站路線；班次選項獨立成區塊；方向、轉乘站、死線直接可見。
- 日期列：淺底 sticky rail，選中日期用藍底白字；可橫向捲動與鍵盤導航。
- 底部導航：固定實色三項「行程／工具／地圖」，預留 safe area 及底部內容空間。
- 時刻表：沿用原生 details/summary。只摺疊完整參考資料，當日要搭的班次留在外面。
- 按鈕：default 藍底白字；hover 用 primary-hover；active 用 primary-active 及輕微縮放；focus-visible 2px focus outline＋3px offset；disabled 灰底灰字、無陰影、不 lift。
- 卡片連結：hover 邊框與輕陰影增強，active 回位，focus-visible 同按鈕；disabled（如有）不可導航並有文字狀態，不能只加 aria-disabled。
- Disclosure：hover 淺藍底、active 顏色加深、focus-visible 清晰；原生 open 狀態箭嘴旋轉。不提供無用途的 disabled 狀態。

## 5. Layout Principles

行程維持約 760px 單欄閱讀軸；首頁桌面可用雙欄，手機單欄。
內容間距用既有 spacing tokens；手機左右 16px、緊湊手機 12px。主題資訊先於裝飾。
首屏優先顯示「下一趟旅程」；旅程摘要只保留有用且來源明確的數字，不新增無根據的下一站或即時狀態。

## 6. Depth & Elevation

卡片以細邊與輕陰影區分；導航靠邊框和層級區分。移除大面積玻璃、光暈、厚重浮雕與紋理。
所有陰影、圓角經 tokens 定義，不因旅程建立另一套主題。

## 7. Animation & Interaction

建議 L1：150–200ms 的按鈕／日期狀態回饋，約 240ms 的短距離淡入。不要滾動 parallax 或逐卡等待 reveal 才看得到內容。
沿用 React + CSS Modules；不加依賴。prefers-reduced-motion 下取消入場位移及縮放，狀態即時生效。
切日後回到內容頂部；展開班次資料不應丟失當前日期或檢視狀態。

## 8. Do's and Don'ts

- 優先手機單手查路線，保持所有觸控目標至少 44×44px。
- 保留行程內容、地圖、匯率、待辦與離線功能。
- 重要狀態用文字及圖示共同表達。
- 用 semantic HTML、現有 ARIA tabs 與 focus-visible。
- 不用純顏色或 emoji 單獨傳遞重要意思。
- 不新增假班次、假預約狀態或依日期猜測「下一站」。
- 不隱藏方向、站號、地址、要搭班次與死線。
- 不改動用戶確認的日期、餐廳、時間來配合版面。
- 不把靜態卡片全部變成可點擊元素。
- 不加大圖下載、動畫或新依賴拖慢離線旅行工具。

## 9. Responsive Behavior

320–600px：單欄，長標題和導航可分行；日期 rail 橫捲，頁面本身不可橫向溢出。
601–1024px：行程維持單欄，首頁可雙欄；增加外圍留白。
>1024px：固定可讀寬度，不將交通步驟拉闊成橫向流程。
驗證 320、375、430、768、1280px；鍵盤日期切換、details、長站名、底部 safe area、離線匯率同 reduced-motion 均須可用。
