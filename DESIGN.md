# MonMonMibo Design System

> 一個在旅途中可以單手操作、快速掃讀、即使戶外強光下仍然清楚可靠的個人行程工具。

本文件是 MonMonMibo 的設計規範與後續 UI 實作依據。

**文件狀態**：本文件記錄的係實際 ship 咗的系統，唔係理想版。色彩 tokens、環境漸層、三級 liquid glass、typography、focus 狀態、觸控區同 760px 閱讀軸都已經喺 code 落實。實作前後均須在真實桌面與手機瀏覽器驗證。

## 1. Visual Theme & Atmosphere

**Style**：Travel Utility Glass（清爽旅行工具感）  
**Keywords**：清楚、可靠、輕盈、親切、快速掃讀、手機優先、旅程感、克制  
**Tone**：像整理完善的隨身旅程卡冊，資訊密集但不壓迫；不是宣傳網站、社交平台或華麗旅遊雜誌。  
**Feel**：像在清晨港口打開一本防水、分頁清楚的小型行程手冊。

**Interaction Tier**：L1 精緻靜態  
**Dependencies**：CSS only；不新增 GSAP、Lenis、WebGL 或其他動畫依賴。

### 現況審視摘要

本節記錄「已經 ship 咗嘅嘢」同「仲要補嘅嘢」，兩者要分開睇。

**已經確立、必須保留的方向：**

- 深海軍藍 `#003366`（header gradient 起點、PWA `theme_color`）、陶紅 `#D94124` accent、圓角卡片同 timeline，已建立可靠的旅行工具辨識度。
- `body` 上的雙 radial-gradient 環境光（右上冷藍 + 左下暖橙）是全站唯一漸層來源，令下層 glass 有嘢可以折射。冇咗佢，所有半透明卡片會變成一片死白。
- 三級 liquid glass（chip / card / nav）已經喺 `TravelLayout.module.css` 同 `Home.module.css` 一致實作，包括 `inset 0 1px 0` 頂部高光。呢個係產品的視覺簽名，唔係要清走的技術債。

**已收斂的落差：**

- 所有產品顏色收斂到 `src/index.css` 的 `:root`；元件內零硬編 hex，`.container` 內重複的本地變數已刪。
- 正文基準 `16px`、行高 `1.7`；輔助文字下限 `15px`（`0.9375rem`），badge 下限 `0.75rem`。
- Noto Sans TC 由 `index.html` 載入，離線時退回 PingFang TC。
- 全站零 JSX inline style；狀態樣式全部由 class 管理。
- 每個互動元件有 focus-visible 環，全域有 `prefers-reduced-motion` block。
- 所有 button、link、tab、checkbox label 觸控區 ≥ `44 × 44px`。
- 行程頁同首頁收窄到 `760px` 單欄閱讀軸。
- 日期列用完整 ARIA tabs pattern（`tablist` / `tab` / `tabpanel`、方向鍵、Home/End、roving tabindex）。
- `header` / `main` / `nav` landmark、skip link、所有外部連結標示「（新視窗）」。
- 已完成的 To-Do 靠勾號、刪除線同較柔文字色表達，唔再用 `opacity`。

**仍然要補的落差：**

- 首頁 `Home.jsx` 的行程卡仍然逐張手寫，未由資料驅動；新增行程要改兩處。
- Emoji 可保留作行程類別與快速辨識，但不可單獨承擔意思；重要按鈕必須同時有文字或 `aria-label`。

## 2. Color Palette & Roles

```css
:root {
  color-scheme: light;

  /* Ambient background —— 全站唯一漸層來源，套喺 body，卡片不得各自加漸層 */
  --color-bg: #edf2ff;
  --color-bg-rgb: 237, 242, 255;
  --gradient-ambient:
    radial-gradient(ellipse at 90% 0%,  rgba(100, 160, 240, 0.30) 0%, transparent 52%),
    radial-gradient(ellipse at 8%  92%, rgba(255, 180, 50,  0.25) 0%, transparent 52%);

  /* Surfaces —— solid 同 glass 並存 */
  --color-surface: #ffffff;
  --color-surface-rgb: 255, 255, 255;
  --color-surface-alt: #f5f8ff;
  --color-surface-hover: #f0f5ff;

  /* Brand and action —— primary 必須同 PWA theme_color 一致 */
  --color-primary: #003366;
  --color-primary-rgb: 0, 51, 102;
  --color-primary-deep: #001f3f;
  --color-primary-hover: #00284f;
  --color-primary-active: #001f3f;
  --color-primary-soft: #e6f2ff;
  --gradient-header: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-deep) 100%);
  --color-accent: #ce3a1d;       /* 白字按鈕底：#d94124 只有 4.44:1，呢個 4.94:1 */
  --color-accent-rgb: 206, 58, 29;
  --color-accent-hover: #b8341a;
  --color-accent-active: #9c2b13;
  --color-accent-soft: #ffebe6;

  /* Text —— 取代散落各處的 #333 / #666 / #888 */
  --color-text: #2c3e50;
  --color-text-rgb: 44, 62, 80;
  --color-text-secondary: #4a5f73;
  --color-text-tertiary: #6b7c8d;
  --color-text-inverse: #ffffff;
  --color-text-disabled: #8d9aaa;

  /* Borders and focus */
  --color-border: #ccd8e5;
  --color-border-strong: #a9bacb;
  --color-border-hover: #7895b2;
  --color-focus: #176fc1;
  --color-focus-rgb: 23, 111, 193;

  /* Semantic */
  --color-success: #247a49;
  --color-success-rgb: 36, 122, 73;
  --color-success-soft: #e6f5ec;
  --color-warning: #9a5b00;
  --color-warning-rgb: 154, 91, 0;
  --color-warning-soft: #fff3d6;
  --color-error: #b52d32;
  --color-error-rgb: 181, 45, 50;
  --color-error-soft: #fde9ea;
  --color-info: #176fc1;
  --color-info-rgb: 23, 111, 193;
  --color-info-soft: #e7f2fd;

  /* Glass tiers —— 只有三級，不得自創第四級 */
  --glass-chip-bg: rgba(var(--color-surface-rgb), 0.55);
  --glass-chip-blur: blur(8px);
  --glass-card-bg: rgba(var(--color-surface-rgb), 0.62);
  --glass-card-blur: blur(16px);
  --glass-nav-bg: rgba(var(--color-surface-rgb), 0.52);
  --glass-nav-blur: saturate(180%) blur(28px);
  --glass-sticky-bg: rgba(var(--color-bg-rgb), 0.70);
  --glass-sticky-blur: saturate(180%) blur(20px);

  /* Glass 外框同頂部高光 —— liquid glass 的簽名細節，缺一不可 */
  --glass-border: 1px solid rgba(var(--color-surface-rgb), 0.70);
  --glass-border-strong: 1px solid rgba(var(--color-surface-rgb), 0.75);
  --glass-highlight: inset 0 1px 0 rgba(var(--color-surface-rgb), 0.90);

  /* Depth —— glass 之下用低 alpha 黑，solid 之下用品牌色 */
  --shadow-subtle: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.06);
  --shadow-raised: 0 6px 20px rgba(0, 0, 0, 0.09);
  --shadow-floating: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-header: 0 4px 24px rgba(var(--color-primary-rgb), 0.40);
  --focus-ring: 0 0 0 3px rgba(var(--color-focus-rgb), 0.24);
}
```

### Color Rules

- 所有產品 UI 顏色必須引用 CSS variables；禁止在元件內新增硬編 hex、named colors 或任意 rgba。現時 `.container` 內重複定義的 `--primary` / `--secondary` / `--accent` / `--bg` / `--text` 要收斂到 `:root`。
- 每一個畫面以海軍藍為主要 action 色；陶紅只標示行程重點、緊急提示或最重要的單一動作。
- 環境漸層 `--gradient-ambient` 只出現喺 `body` 一次。卡片、header 以外的元件不得自行加 gradient，否則多層漸層互相打架，glass 會失去折射對象。
- 卡片正文必須使用 `--color-text` 或 `--color-text-secondary`。半透明底之上禁止用 `#888` 一類低對比灰：glass 背後的環境色會令實際對比比預期低，所有 glass 上的文字要按最淺的可能底色驗算。
- **對比驗算基準底色**：`--gradient-ambient` 最淺處係左下暖橙角，實測像素 `#f0e7da`。任何直接坐喺漸層上（冇 glass 卡承托）的文字，一律以呢個值驗算，唔可以用 `--color-bg` 或白色代替 —— 差別足以令一個色由 PASS 變 FAIL。
- **`--color-border-strong`（`#a9bacb`）不得用作互動元件邊界**：喺白色填充上只有 `1.99:1`，未達 UI 元件所需的 `3:1`。checkbox 圈一類邊界用 `--color-control-border`（`#7e93aa`，`3.16:1`）。
- **`--color-text-tertiary`（`#6b7c8d`）不得用於正文或連結**：喺 `#f0e7da` 上只有 `3.50:1`，未達 AA。佢只可用於已經坐喺實色卡面上的極次要標示。漸層上的次要文字用 `--color-text-secondary`（`#4a5f73`，`5.40:1`）。
- semantic 顏色必須同時配合文字、圖示或形狀，不能只靠顏色傳達狀態。
- finished 行程以中性樣式及清楚標籤表示，不可單靠整張卡片降低 opacity，避免可讀性下降。
- 全站維持 light theme；未有完整暗色 tokens、地圖及 PWA theme 驗證前，不新增 dark mode。

### Browser chrome and PWA

- `index.html` 的 `<meta name="theme-color">` 同 `vite.config.js` PWA manifest 的 `theme_color` 必須同 `--color-primary`（`#003366`）一致；三者任何一個改動，其餘兩個要同步。
- `html` 元素保留實色 `--color-bg` 背景，負責 iOS safe-area 同 overscroll 回彈區；漸層只加喺 `body`，避免回彈時露出漸層邊界。
- manifest `background_color` 用 `--color-bg`（`#edf2ff`），令 splash screen 過渡到 app 時唔會閃白。

## 3. Typography Rules

**Font import and stack**：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700;800&display=swap');

:root {
  --font-sans: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif;
  --font-mono: ui-monospace, "SFMono-Regular", Consolas, monospace;
}

body {
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.7;
  letter-spacing: 0.02em;
}
```

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---:|---:|---:|---:|
| Home H1 | Noto Sans TC | `clamp(1.75rem, 5vw, 2.25rem)` | 800 | 1.25 | `-0.01em` |
| Trip H1 | Noto Sans TC | `clamp(1.5rem, 4.5vw, 2rem)` | 800 | 1.3 | `0` |
| Section H2 | Noto Sans TC | `clamp(1.25rem, 3vw, 1.5rem)` | 700 | 1.4 | `0` |
| Card H3 / item title | Noto Sans TC | `1rem` | 700 | 1.5 | `0` |
| Body / details | Noto Sans TC | `1rem` | 400 | 1.7 | `0.02em` |
| Secondary body | Noto Sans TC | `0.9375rem` | 400 | 1.65 | `0.02em` |
| Label / tab | Noto Sans TC | `0.875rem` | 600 | 1.4 | `0.02em` |
| Badge | Noto Sans TC | `0.75rem` | 700 | 1.3 | `0.04em` |
| Time / numeric | Noto Sans TC + tabular nums | `0.875rem` | 700 | 1.4 | `0.01em` |
| Mono / code | system monospace | `0.875rem` | 500 | 1.55 | `0` |

### Typography Rules

- 中文正文不得小於 `15px`；主要行程詳情以 `16px` 為目標。
- 時間、價錢、匯率使用 `font-variant-numeric: tabular-nums`，方便垂直比較。
- 標題最多兩行；行程名稱過長時自然換行，不截斷關鍵地名。
- 中英混排先用繁體中文字族，再以 system sans-serif fallback。
- **Never use**：純英文字體而沒有中文字體 fallback、超幼字重、全段 uppercase、正文 italic、手寫字體。

### Text Decoration

- 所有 H1/H2：無漸變、無文字投影，以字重、留白和色彩建立層級。
- 正文：不加投影、漸變或裝飾底線。
- 文字連結：預設有可辨識底線，hover 只改顏色和 underline offset。
- 小標籤可用底色或左側色條，不以 letter spacing 過大的全大寫字作裝飾。

## 4. Component Stylings

### Shared geometry

```css
:root {
  --radius-xs: 6px;   /* inline badge */
  --radius-sm: 8px;
  --radius-md: 14px;  /* timeline card、hotel header、spot row */
  --radius-lg: 16px;  /* todo label、date chip */
  --radius-xl: 20px;  /* home trip card */
  --radius-pill: 999px;
  --control-height: 44px;
}

*, *::before, *::after { box-sizing: border-box; }

:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}
```

### Buttons

```css
.button {
  min-height: var(--control-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font: 700 0.875rem/1.3 var(--font-sans);
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow-subtle);
  transition: background-color 160ms ease, border-color 160ms ease,
              box-shadow 160ms ease, transform 120ms ease;
}

.button:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-card);
  transform: translateY(-1px);
}

.button:active {
  background: var(--color-primary-active);
  box-shadow: var(--shadow-subtle);
  transform: translateY(0) scale(0.98);
}

.button:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
  box-shadow: var(--focus-ring);
}

.button:disabled,
.button[aria-disabled="true"] {
  background: var(--color-border);
  color: var(--color-text-disabled);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}

.buttonSecondary {
  background: var(--color-surface);
  color: var(--color-primary);
  border-color: var(--color-border);
}

.buttonSecondary:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-border-hover);
}
```

### Cards and timeline items

```css
/* Glass card recipe —— 四個部分缺一不可：半透明底、blur、亮邊、頂部高光 */
.card {
  padding: var(--space-3) var(--space-4);
  border: var(--glass-border-strong);
  border-radius: var(--radius-md);
  background: var(--glass-card-bg);
  backdrop-filter: var(--glass-card-blur);
  -webkit-backdrop-filter: var(--glass-card-blur);
  color: var(--color-text);
  box-shadow: var(--shadow-card), var(--glass-highlight);
  transition: border-color 180ms ease, box-shadow 180ms ease,
              transform 180ms ease;
}

/* 無 backdrop-filter 支援時的後備：加厚實色底，唔可以留半透明 */
@supports not (backdrop-filter: blur(1px)) {
  .card { background: rgba(var(--color-surface-rgb), 0.94); }
}

a.card:hover,
button.card:hover {
  background: rgba(var(--color-surface-rgb), 0.72);
  box-shadow: var(--shadow-raised), var(--glass-highlight);
  transform: translateY(-2px);
}

a.card:active,
button.card:active { transform: translateY(0) scale(0.99); }

a.card:focus-visible,
button.card:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
  box-shadow: var(--focus-ring);
}

.card[aria-disabled="true"] {
  background: var(--color-surface-alt);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  border-color: var(--color-border);
  color: var(--color-text-disabled);
  box-shadow: none;
  pointer-events: none;
}

.timeline {
  border-inline-start: 3px solid var(--color-border-strong);
}

.timelineMarker {
  background: var(--color-surface);
  border: 3px solid var(--color-primary);
}

.timelineItem[data-highlight="true"] .timelineMarker {
  background: var(--color-accent);
  border-color: var(--color-accent);
}
```

### Navigation, date tabs and bottom navigation

```css
.stickyNav {
  position: sticky;
  inset-block-start: 0;
  z-index: 100;
  background: var(--glass-sticky-bg);
  border-block-end: 1px solid rgba(var(--color-surface-rgb), 0.50);
  backdrop-filter: var(--glass-sticky-blur);
  -webkit-backdrop-filter: var(--glass-sticky-blur);
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
}

/* Fixed bottom navigation —— 全站最強一級 glass，只此一處 */
.bottomNav {
  position: fixed;
  inset-block-end: calc(var(--space-5) + env(safe-area-inset-bottom));
  z-index: 1000;
  border: 1px solid rgba(var(--color-surface-rgb), 0.55);
  border-radius: var(--radius-pill);
  background: var(--glass-nav-bg);
  backdrop-filter: var(--glass-nav-blur);
  -webkit-backdrop-filter: var(--glass-nav-blur);
  box-shadow: var(--shadow-floating), var(--glass-highlight);
}

.navItem {
  min-width: 44px;
  min-height: 44px;
  padding: 0.625rem 1rem;
  border: var(--glass-border);
  border-radius: var(--radius-lg);
  background: var(--glass-chip-bg);
  backdrop-filter: var(--glass-chip-blur);
  -webkit-backdrop-filter: var(--glass-chip-blur);
  color: var(--color-text-secondary);
  font: 600 0.9rem/1.3 var(--font-sans);
  box-shadow: var(--shadow-subtle);
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease,
              border-color 160ms ease, transform 120ms ease;
}

.navItem:hover {
  background: rgba(var(--color-surface-rgb), 0.75);
  color: var(--color-primary);
}

.navItem:active { transform: scale(0.97); }

.navItem:focus-visible {
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
  box-shadow: var(--focus-ring);
}

/* Active chip 轉為實色，喺漸層背景上先夠對比同夠明確 */
.navItem[aria-pressed="true"],
.navItem[aria-current="page"] {
  background: var(--color-primary);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  color: var(--color-text-inverse);
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(var(--color-primary-rgb), 0.30);
}

.navItem:disabled {
  background: var(--color-surface-alt);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  color: var(--color-text-disabled);
  border-color: var(--color-border);
  box-shadow: none;
  cursor: not-allowed;
  transform: none;
}
```

### Links

```css
.textLink {
  color: var(--color-info);
  font-weight: 600;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
  transition: color 160ms ease, text-underline-offset 160ms ease;
}

.textLink:hover {
  color: var(--color-primary-hover);
  text-underline-offset: 0.3em;
}

.textLink:active { color: var(--color-primary-active); }

.textLink:focus-visible {
  border-radius: 2px;
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
}

.textLink[aria-disabled="true"] {
  color: var(--color-text-disabled);
  text-decoration: none;
  pointer-events: none;
}
```

### Tags and badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  min-height: 24px;
  padding: 0.25rem 0.625rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background: var(--color-surface-alt);
  color: var(--color-text-secondary);
  font: 700 0.75rem/1.3 var(--font-sans);
  letter-spacing: 0.04em;
}

.badge[data-tone="success"] {
  background: var(--color-success-soft);
  border-color: rgba(var(--color-success-rgb), 0.28);
  color: var(--color-success);
}

.badge[data-tone="warning"] {
  background: var(--color-warning-soft);
  border-color: rgba(var(--color-warning-rgb), 0.28);
  color: var(--color-warning);
}

.badge[data-tone="error"] {
  background: var(--color-error-soft);
  border-color: rgba(var(--color-error-rgb), 0.28);
  color: var(--color-error);
}

.badge[data-tone="info"] {
  background: var(--color-info-soft);
  border-color: rgba(var(--color-info-rgb), 0.28);
  color: var(--color-info);
}
```

### Data tables

用於車費、匯率、班次一類「標籤 + 數值」資料。承載喺 card 級 glass 上，數值右對齊並使用 tabular numerals。

```css
.dataTable {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: var(--glass-border-strong);
  border-radius: var(--radius-md);
  background: var(--glass-card-bg);
  backdrop-filter: var(--glass-card-blur);
  -webkit-backdrop-filter: var(--glass-card-blur);
  box-shadow: var(--shadow-card), var(--glass-highlight);

  /* 必須係 separate。用 collapse 嘅話瀏覽器會完全忽略 table 自身的
     padding（CSS 規範明文規定），padding 宣告唔會報錯但亦唔會生效。 */
  border-collapse: separate;
  border-spacing: 0;
}

.dataTable caption {
  padding-bottom: var(--space-2);
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: left;
}

.dataTable th[scope="row"] {
  padding: 5px 0;
  font-size: 0.9375rem;
  font-weight: 400;
  color: var(--color-text-secondary);
  text-align: left;
}

.dataTable td {
  padding: 5px 0;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--color-text);
  text-align: right;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}

/* 小計行靠一條上邊線分隔，唔靠底色 */
.dataTableTotal th,
.dataTableTotal td {
  padding-top: var(--space-2);
  border-top: 1px solid var(--color-border);
  color: var(--color-text);
  font-weight: 700;
}
```

### Data table rules

- 用真 `<table>`：`<caption>` 做分組標題、`<th scope="row">` 做標籤欄。唔好用 `<div>` 砌格仔 —— 螢幕閱讀器會讀唔到行列關係。
- 數值欄一律 `text-align: right` + `font-variant-numeric: tabular-nums` + `white-space: nowrap`，方便垂直比較同避免金額斷行。
- 金額用字串儲存，唔好用數字：咁「¥900-1,500」一類範圍先可以同定額排喺同一欄，唔使兩套渲染邏輯。
- 總計橫額用實色 `--color-primary` + `--color-text-inverse`，同表身區分；唔好靠加粗或者放大字體嚟做總計。

### Forms and checklist controls

```css
.field {
  width: 100%;
  min-height: 48px;
  padding: 0.75rem 0.875rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  font: 500 1rem/1.4 var(--font-sans);
  font-variant-numeric: tabular-nums;
  transition: border-color 160ms ease, box-shadow 160ms ease;
}

.field:hover { border-color: var(--color-border-hover); }

.field:focus {
  border-color: var(--color-focus);
  outline: none;
  box-shadow: var(--focus-ring);
}

.field:disabled {
  background: var(--color-surface-alt);
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

.field[aria-invalid="true"] {
  border-color: var(--color-error);
}

.checkControl {
  inline-size: 26px;
  block-size: 26px;
  border: 2px solid var(--color-border-strong);
  border-radius: 50%;
  background: var(--color-surface);
}

input:checked + .checkControl {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: var(--color-text-inverse);
}

input:focus-visible + .checkControl {
  outline: 2px solid var(--color-focus);
  outline-offset: 3px;
  box-shadow: var(--focus-ring);
}
```

### Details disclosure

```css
.detailsToggle {
  min-height: 44px;
  padding: 0.5rem 0;
  border: 0;
  background: transparent;
  color: var(--color-primary);
  font: 700 0.875rem/1.4 var(--font-sans);
  cursor: pointer;
}

.detailsToggle:hover { color: var(--color-primary-hover); }
.detailsToggle:active { color: var(--color-primary-active); }
.detailsToggle:focus-visible {
  border-radius: var(--radius-sm);
  outline: 2px solid var(--color-focus);
  outline-offset: 2px;
}
.detailsToggle:disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}
```

## 5. Layout Principles

### Container

- Application max width：`760px`，讓桌面版保持單一、易追蹤的行程閱讀軸。
- Home card list max width：`360px`（現況 `350px`／匯率工具 `360px`，統一到 `360px`）。行程卡係掃讀用的入口，唔需要拉闊。
- Text-heavy narrow variant：`680px`。
- Desktop inline padding：`clamp(1.5rem, 4vw, 2rem)`。
- Mobile inline padding：`16px`，最窄裝置可降至 `12px`。
- 必須計算 `env(safe-area-inset-top)` 與 `env(safe-area-inset-bottom)`。

### Spacing scale

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
}
```

- Page section gap：`var(--space-8)`。
- Timeline item gap：`var(--space-6)`。
- Card internal padding：mobile `var(--space-4)`；desktop `var(--space-5)`。
- Related text gap：`var(--space-2)`；unrelated content不得只靠換行分隔。

### Grid and reading flow

```css
.pageShell {
  width: min(100%, 760px);
  min-height: 100dvh;
  margin-inline: auto;
}

.tripGrid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-4);
}

.cardHead {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: var(--space-3);
}
```

- 行程頁維持 header → 日期 tabs → 酒店提示 → timeline → bottom navigation 的固定順序。
- 每張 timeline card 只突出一個主要時間和一個主要行動；外部資料連結排列在詳情之後。
- 日期 tabs 可水平捲動，但首個、目前及下一個日期必須容易看見；不可壓縮文字至難以點按。
- Bottom navigation 最多四個頂層目的地，優先保留行程、工具、地圖。
- Desktop 不強行轉為多欄 dashboard；行程是線性時間資訊，單欄較易追蹤。

## 6. Depth & Elevation

深度由**三級 glass**同**四級陰影**兩個獨立軸組成。Glass 決定「隔幾遠」，陰影決定「浮幾高」，唔可以混淆。

### Glass tiers

| Tier | Background | Blur | Border | Use |
|---|---|---|---|---|
| Chip | `--glass-chip-bg`（0.55） | `blur(8px)` | `--glass-border` | date chip、header 上的 home link、小 pill |
| Card | `--glass-card-bg`（0.62） | `blur(16px)` | `--glass-border-strong` | timeline card、hotel header、todo label、spot row、home trip card |
| Nav | `--glass-nav-bg`（0.52） | `saturate(180%) blur(28px)` | `rgba(255,255,255,0.55)` | fixed bottom navigation |
| Nav（sticky） | `--glass-sticky-bg`（bg 色 0.70） | `saturate(180%) blur(20px)` | 底邊 `rgba(255,255,255,0.50)` | sticky date navigation |

### Shadow levels

| Level | Treatment | Use |
|---|---|---|
| Flat | 無陰影；`1px` border | badges、時間標籤、內容分隔 |
| Subtle | `var(--shadow-subtle)` | date chip、input、列表列 |
| Card | `var(--shadow-card)` | 一般 glass card 靜止態 |
| Raised | `var(--shadow-raised)` | 可點擊 card 的 hover 態 |
| Floating | `var(--shadow-floating)` | fixed bottom navigation、必要浮層 |

### Depth rules

- Glass 只有上表三級（sticky nav 是 nav 級的變體）。要新 surface 時揀最接近的一級，唔可以自訂新的 alpha / blur 組合。
- 每個 glass 元件的 `box-shadow` 必須以 `, var(--glass-highlight)` 結尾。缺咗頂部高光，半透明面會扁塌，睇落似降低咗 opacity 的實色卡而唔係玻璃。
- Blur 上限 `28px`，而且只有 fixed bottom navigation 用到。捲動內容區內的 glass 一律 `16px` 或以下，控制手機繪製成本。
- 每個 glass 元件都要有 `-webkit-` 前綴同 `@supports not (backdrop-filter: blur(1px))` 後備；後備一律加厚到 `0.94` alpha 實色，唔可以留半透明。
- Glass 之上的陰影用低 alpha 純黑（`0.04`–`0.12`）。呢度係本規範對「陰影不用純黑」的唯一例外：品牌色陰影透過半透明白面會偏藍變濁。實色元件（header、active chip、accent 按鈕）仍然用 `rgba(var(--color-primary-rgb), …)` 或 accent 色。
- Active / selected / disabled 狀態一律轉實色並 `backdrop-filter: none`。狀態要靠對比講清楚，唔可以靠玻璃厚度分辨。
- 同一元件不可同時使用厚 border、強陰影和最高一級玻璃三種效果。
- timeline 層級主要靠線、marker、間距和字重表達，不靠多層陰影。

## 7. Animation & Interaction

**Motion Philosophy**：動效只用來確認操作及維持方向感；旅途中資訊速度永遠比視覺表演重要。  
**Tier**：L1 精緻靜態  
**Dependencies**：無外部依賴。

### Page and section entrance

```css
@keyframes pageEnter {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.pageEnter {
  animation: pageEnter 320ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

.dayPanel[aria-hidden="false"] {
  animation: pageEnter 240ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
```

### Scroll behavior

```css
html { scroll-behavior: smooth; }
[id] { scroll-margin-top: 80px; }
```

- 不使用 scroll reveal、parallax、scroll-jacking 或 pinned narrative。
- 切換日期後可回到內容起點，但須避免蓋過 sticky navigation；焦點管理應跟隨新內容。

### Hover, press and state feedback

```css
@media (hover: hover) {
  .interactiveCard:hover { transform: translateY(-2px); }
}

.pressable:active { transform: scale(0.98); }

.interactiveCard,
.pressable {
  transition: transform 160ms ease, box-shadow 180ms ease,
              background-color 160ms ease, border-color 160ms ease;
}
```

- Checkbox、日期 tab 及 bottom navigation 的狀態切換應在 `120–200ms` 完成。
- 行程詳情一律完整顯示，不設「睇多啲」摺疊。實測 105 張卡只有 20% 會觸發摺疊，而嗰批正正係交通班次、後備方案同外部連結最密嘅卡 —— 摺疊藏起咗 20 條連結。頁面本來就要捲動，摺疊慳唔到捲動，只係喺捲動之前加一下點擊。
- Loading 狀態使用靜態文字或低調 opacity pulse；error 狀態不可震動或持續閃爍。

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 8. Do's and Don'ts

### Do

- 以使用者在街上單手查班次、地址和導航為主要情境。
- 先顯示時間、地點與下一個行動，再顯示補充說明和外部連結。
- 保持 Home、所有 trip pages、converter、map list 使用同一套 tokens。
- 所有 icon-only control 提供可讀的 `aria-label`，可見文字優先。
- 日期、價錢與匯率使用 tabular numerals。
- 每個互動元件提供 default、hover、active、focus-visible 和 disabled 狀態。
- 使用 semantic HTML。日期列用完整 tabs pattern：`role="tablist"` + `role="tab"` + `aria-selected` + `aria-controls`，配方向鍵、Home/End 同 roving tabindex（只有選中的 tab 進入 Tab 次序）。`role="tab"` 一旦加上就必須連鍵盤行為一齊做，否則等於向螢幕閱讀器承諾一個唔存在的操作方式。
- 底部檢視切換用 `aria-pressed` toggle button，唔用 tabs —— 佢哋切換的係整個 view，唔係同一組 tabpanel。
- 每頁提供 skip link 同 `header` / `main` / `nav` landmark。
- 會開新視窗的連結必須喺可存取名稱內註明「（新視窗）」。
- 在真實 iPhone safe area、窄螢幕、桌面 keyboard navigation 下驗證。
- 對交通警告、後備方案和離線資料使用一致的 semantic badge。
- 保留旅程 Emoji 作掃讀提示，但配合清楚文字。
- 保持 glass 只用喺三級 token，並喺深色照片、純白區同淺色漸層邊緣三種底色上驗證可讀性。
- 保持 `theme-color`、manifest `theme_color` 同 `--color-primary` 三者同步。

### Don't

- ❌ 不要為每個旅程另建一套顏色、陰影或圓角。
- ❌ 不要在 JSX inline styles 內硬編視覺值；狀態樣式應由 class 和 tokens 管理。
- ❌ 不要以整張卡 opacity 降低來表示 finished，這會令文字對比不足。
- ❌ 不要讓正文或重要外部連結小於 `15px`。
- ❌ 不要自創第三級以外的 glass（新 alpha、新 blur 值）；揀最接近的既有 tier。
- ❌ 不要喺捲動內容區內用超過 `blur(16px)`，亦不要層層疊 glass on glass。
- ❌ 不要慳走 `--glass-highlight` 頂部高光或 `-webkit-` 前綴同 `@supports` 後備。
- ❌ 不要喺卡片或 header 以外再加 gradient；環境漸層全站只有 `body` 一個。
- ❌ 不要加入自動播放影片、parallax、WebGL、自訂 cursor 或 scroll-jacking。
- ❌ 不要用顏色作唯一狀態提示；必須有文字或圖示。
- ❌ 不要隱藏原生 focus outline 而沒有等效 `focus-visible` 樣式。
- ❌ 不要令按鈕或可點擊列的觸控區小於 `44 × 44px`。
- ❌ 不要把固定 bottom navigation 疊在最後一張卡、keyboard 或 safe area 上。
- ❌ 不要以 hover 才顯示關鍵資訊，手機沒有可靠 hover。
- ❌ 不要把班次、地址、外部連結摺疊喺展開掣後面。掃讀靠的是時間標籤同標題，唔係靠收起內文。
- ❌ 表格不要用 `border-collapse: collapse` —— 佢會令 `<table>` 自身的 padding 靜靜地失效，文字會貼住卡邊。用 `separate` + `border-spacing: 0`。
- ❌ 不要為視覺一致而刪減班次方向、站號或後備方案等實用資料。

## 9. Responsive Behavior

### Breakpoints

| Name | Width | Key changes |
|---|---:|---|
| Wide desktop | `> 1024px` | 內容維持 `760px` 單欄置中；加大頁面外圍留白，不拉闊 card |
| Tablet / small desktop | `601–1024px` | `24–32px` inline padding；header、tabs 和 timeline 對齊同一內容軸 |
| Mobile | `≤ 600px` | `16px` inline padding；日期 tabs 橫向捲動；bottom navigation 固定並計算 safe area |
| Compact mobile | `≤ 360px` | `12px` inline padding；次要 nav 文字可縮短但不只剩 icon；card action 可換到下一行 |

**Touch targets**：所有 button、link、tab、checkbox label 最少 `44 × 44px`；主要導航建議 `48px` 高。  
**Collapsing strategy**：保持單欄；先換行，再移動次要 action 到新一行，最後才縮短非必要副文案。不可水平壓縮正文。

```css
.pageShell {
  width: min(100%, 760px);
  margin-inline: auto;
  padding-block-end: calc(96px + env(safe-area-inset-bottom));
}

.dateTabs {
  display: flex;
  gap: var(--space-2);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  scrollbar-width: none;
  scroll-padding-inline: var(--space-4);
}

.dateTabs::-webkit-scrollbar { display: none; }

@media (max-width: 600px) {
  .contentGutter { padding-inline: var(--space-4); }

  .cardHead {
    grid-template-columns: minmax(0, 1fr) auto;
    gap: var(--space-2);
  }

  /* 置中膠囊，唔拉到成行闊 —— 讓最後一張卡兩側仍然睇到內容 */
  .bottomNav {
    inset-inline-start: 50%;
    transform: translateX(-50%);
    inset-block-end: calc(var(--space-5) + env(safe-area-inset-bottom));
    width: max-content;
    max-width: calc(100% - var(--space-6));
  }

  .bottomNav > * {
    min-width: 0;
    min-height: 44px;
  }
}

@media (max-width: 360px) {
  .contentGutter { padding-inline: var(--space-3); }

  .cardHead { grid-template-columns: 1fr; }

  .cardHead .button {
    justify-self: start;
    width: auto;
  }
}

@media (min-width: 601px) {
  .contentGutter { padding-inline: clamp(1.5rem, 4vw, 2rem); }
  .card { padding: var(--space-5); }
}
```

### Verification gate before implementation is complete

- Mobile：`320px`、`375px`、`430px` 寬度無橫向 overflow。
- Desktop：`768px`、`1280px` 寬度保持清楚單欄閱讀軸。
- iOS standalone / browser mode：header、sticky tabs、bottom navigation 均不撞 safe area。
- Keyboard：所有 links、buttons、tabs、checkboxes 的 focus 次序清楚可見。
- Content stress：長地名、兩行標題、四位數時間／金額、離線及 error 狀態不破版。
- Contrast：正文、secondary text、badges、disabled state 以 WCAG AA 為最低目標。
