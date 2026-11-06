# MonMonMibo — 清爽旅行 App

**用戶硬性要求：不用 Airbnb 配色，以栗棕與米白，配少量森林綠建立本身識別；無旅程照片、無縮圖、無圖片佔位，首頁簡潔、優先快速載入。只保留輕量 SVG 功能圖示；不下載外部字體或新增動畫套件。**

本檔係 MonMonMibo 專用規則，配合根目錄原樣複製的 DESIGN.md 使用；衝突時以本檔為準。
套用首頁及共用行程頁；核心驗證 UKB26 Day 3，並檢查其他行程的共用樣式。

## 1. Visual Theme & Atmosphere

白色卡片、米白頁底、深可可文字、14px 圓角與栗棕操作；動作與狀態按本專案無障礙要求調整。手機先看得到目的地、時間、下一個行動。
首頁用「下一趟旅程」作主角；已完成旅程做緊湊清單。行程頁減少 hero 高度，讓日期與首項安排更早出現。
移除金屬、皮革、紙張紋理、英文檔案編號裝飾與大面積深色背景。

## 2. Color Palette & Roles

本專案 tokens（由 src/index.css 統一供應；保留其他現有 semantic token）：

實際完整 tokens 見 `src/index.css`。主色 `#79543c`，hover `#65442f`，active `#503624`，輔助底 `#efe6da`；文字 `#352d28`／`#706258`，頁底 `#faf8f4`、卡片白色、邊框 `#e3dacf`。森林綠 `#526b50` 僅作少量點綴，大面積保持留白。不採用上游品牌色。

栗棕代表操作與選中狀態；警告、錯誤、完成狀態沿用獨立 semantic 色彩並配文字。
PWA theme-color、靜態及行程 manifest 同步改為主色。

## 3. Typography Rules

使用 PingFang TC、Microsoft JhengHei 及系統字體，不發送 Google Fonts 或其他外部字體請求。頁面標題 28–32px、卡片標題 18px、正文 16px、輔助文字及重要連結至少 15px。
正文行高 1.7；時間與金額用 tabular-nums。標題 28px／600，段落以 16px／400 為基準；時間比分類突出；長日文站名自然換行。
標題不加漸層、描邊、陰影；SVG 圖示用現有 Icons.jsx。

## 4. Component Stylings

- 旅程卡：白底、細邊、14px 圓角、輕陰影。主打卡顯示目的地、日期、天數與「查看行程」。
- 行程卡：時間＋分類 → 標題＋導航 → 摘要 → 詳情。導航保留可讀文字；不讓長標題擠壓按鈕。
- 交通：沿用 trip-route 逐站路線；班次選項獨立成區塊；方向、轉乘站、死線直接可見。
- 日期列：只喺「行程」檢視顯示；「工具／地圖」隱藏，切返行程保留原本選中日期。淺底 sticky rail，選中日期用栗棕底白字；可橫向捲動與鍵盤導航。
- 底部導航：固定實色三項「行程／工具／地圖」，預留 safe area 及底部內容空間。
- 時刻表：沿用原生 details/summary。只摺疊完整參考資料，當日要搭的班次留在外面。
- 主要按鈕：default 栗棕底白字；hover 用 primary-hover；active 用 primary-active，無位移或縮放；focus-visible 2px focus outline＋3px offset；disabled 灰底灰字、無陰影、不 lift。
- 卡片連結：hover 邊框與輕陰影增強，active 回位，focus-visible 同按鈕；disabled（如有）不可導航並有文字狀態，不能只加 aria-disabled。
- Disclosure：hover 淺燕麥底、active 顏色加深、focus-visible 清晰；原生 open 狀態箭嘴旋轉。不提供無用途的 disabled 狀態。

### Button 尺寸與間距

尺寸由 `src/components/Button.module.css` 共用，數值與間距由 `src/index.css` tokens 統一供應。尺寸與顏色／用途獨立；`default` 尺寸唔代表一定係主 CTA。

| 尺寸 | Padding（上下／左右） | 最小點擊範圍 | 使用位置 |
| --- | --- | --- | --- |
| `small` | 8px／12px | 44×44px | 主頁連結、日期／To-Do tabs、國家篩選、酒店及行程導航 |
| `default` | 12px／16px | 44×44px | 底部檢視導航、地圖「全部開啟」操作 |
| `icon`（small 變體） | 四邊 8px | 44×44px | 日期捲動箭嘴、匯率清除輸入 |

兩級只靠 padding 區分密度，唔縮細觸控範圍；hover／active 不位移或縮放按鈕；內容可以令高度超過 44px，不固定文字按鈕高度。圖示按鈕用 44×44px，保留原有 aria-label。底部導航沿用圖示在上、文字在下。
按鈕內容 gap 同按鈕組 gap 統一 8px（`--button-content-gap`／`--button-group-gap`）；日期 rail 上下留 8px，避免裁切 focus outline；底部容器沿用上下 8px、左右 16px，另加 safe area。
日期捲動控制與日期列放在同一行，採用 `44px minmax(0, 1fr) 44px` 三欄：左按鈕、可橫向捲動日期、右按鈕，欄間距 8px，外側留白跟內容對齊。兩個按鈕一直顯示，到達對應邊界時用原生 disabled 停用；不隱藏留空、不絕對定位疊在日期上、不另外加一行。日期文字只在中間 scrollport 內裁切，不能伸到按鈕下面。保留原生橫向捲動、方向鍵、Home／End 切換及選中日期捲入可視範圍；reduced-motion 下按鈕捲動即時完成。
日期列所有裝置均隱藏捲軸但保持可捲動；左右箭嘴與日期按鈕的垂直中心對齊。箭嘴預設透明底、`--color-border` 淡邊框、無陰影，保持 44×44px 點擊範圍；hover／active 沿用淺底回饋，disabled 保持透明底並用 `--color-text-disabled` 表達停用。保留清晰 focus-visible 外框。
兩級 padding 使用 `--button-small-padding-*`／`--button-default-padding-*`，最小尺寸用 `--control-height`。手機不再另行覆寫導航 padding；卡片連結、待辦列與 disclosure 保留各自內容版面，唔當文字按鈕套尺寸。

## 5. Layout Principles

行程維持約 760px 單欄閱讀軸；首頁桌面可用雙欄，手機單欄。
內容間距用既有 spacing tokens；手機左右 16px、緊湊手機 12px。主題資訊先於裝飾。
首屏優先顯示「下一趟旅程」；旅程摘要只保留有用且來源明確的數字，不新增無根據的下一站或即時狀態。

## 6. Depth & Elevation

卡片預設靠細邊區分，hover 使用上游唯一輕陰影；導航靠邊框和層級區分。移除大面積玻璃、光暈、厚重浮雕與紋理。
所有陰影、圓角經 tokens 定義，不因旅程建立另一套主題。

## 7. Animation & Interaction

L1：150–200ms 的按鈕／日期狀態回饋；首頁內容直接可見，無入場動畫。不要滾動 parallax 或逐卡等待 reveal 才看得到內容。
沿用 React + CSS Modules；不加依賴。prefers-reduced-motion 下取消入場位移及縮放，狀態即時生效。
切日後回到內容頂部；展開班次資料不應丟失當前日期或檢視狀態。
行程／工具／地圖各自保留頁面捲動位置；首次開啟檢視由頁頂開始，切返時恢復原本位置，不沿用另一個檢視的捲動高度。
地圖首次切入先建立 iframe，之後切換檢視只隱藏，保留已載入內容與地圖縮放位置；唔喺行程首次載入時預先下載地圖。

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

320–743px：單欄，長標題和導航可分行；日期 rail 橫捲，頁面本身不可橫向溢出。
744–1024px：行程維持單欄，首頁可雙欄；增加外圍留白。
>1024px：固定可讀寬度，不將交通步驟拉闊成橫向流程。
驗證 320、375、430、768、1280px；鍵盤日期切換、details、長站名、底部 safe area、離線匯率同 reduced-motion 均須可用。

## Reference source and deliberate adaptations

- Source: https://github.com/voltagent/awesome-design-md/blob/fcc70284932276d085f01ef9f83edde90b1258cb/design-md/airbnb/DESIGN.md
- 原檔逐位元複製至根目錄 DESIGN.md；來源記錄及 MIT 授權見 docs/design-sources/。
- 使用系統繁中字體，唔下載 Noto Sans TC 或 Airbnb 專有 Cereal 字體；不使用 Airbnb 商標。
- 不採用上游 photo-first 卡片。主打卡與過往旅程均用目的地文字、日期、天數及導航箭嘴呈現；不可補上照片、縮圖或圖片佔位。
- 國家膠囊篩選只作用於過往旅程，不假裝提供訂房、搜索航班或評分收藏。
- 日期選中用 primary 栗棕底白字，底部檢視選中用淺燕麥底＋栗棕文字；導航按鈕白底深灰邊框，主 CTA 才用栗棕。
- 陰影只用上游同一個輕量 shadow；不增加多級浮雕或玻璃。
- 不採用上游 8–14px 微字、32px 圖示點擊區；重要資訊保持 ≥15px、觸控目標 ≥44px。
- 效能優先：無旅程圖片請求、無外部字體請求、不加新依賴；保留既有 PWA icons 與離線支援。

- 用戶不希望抄襲 Airbnb 品牌配色。上游 DESIGN.md 只保留作原始參考與來源記錄；實際 UI 配色以本檔及 src/index.css 為準。

共用行程卡統一用時間、標題及導航、摘要、詳情層次；分類與摘要只顯示資料已有欄位，不為舊行程推測內容。工具頁首次開啟後保留輸入；匯率標題及方向使用共用 SVG，標籤與狀態文字至少15px。
