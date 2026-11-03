# MonMonMibo Design System

> 將每次旅程整理成一本安靜、精準、值得收藏的數碼旅程冊。

本文件是 MonMonMibo 全站視覺、互動與響應式實作的唯一設計依據。設計方向融合 Airbnb 的旅行溫度、Apple 的克制留白，以及 Stripe 的精準層級；功能與可讀性仍然優先。

## 1. Visual Theme & Atmosphere

**Style**：Beskar Travel Archive（復古太空旅程檔案風）

**Keywords**：克制、風化金屬、舊米白、軍用精準、觸感、旅程感、收藏感、可信賴

**Tone**：像賞金獵人太空船內保存良好的私人旅程檔案——粗獷但精準，不是霓虹科幻介面，也不是常見 AI SaaS。
**Feel**：像打開一冊由風化金屬、舊米紙和皮革保護的星際航行紀錄。

**Interaction Tier**：L2 流暢互動
**Dependencies**：React + CSS Modules + 原生 `IntersectionObserver`；不新增 GSAP、Lenis、Three.js 或 WebGL。動效概念參考 reactbits/vue-bits，但以輕量 CSS 和現有 React 實作。

### Design direction

- 由「藍橙玻璃工具感」轉為「Beskar 銀灰 + 舊米白 + Grogu 橄欖綠點綴」。
- 大部分介面改用近實色 surface；玻璃只保留於 sticky navigation，避免全頁半透明造成廉價感。
- 首頁以大型編輯式標題、旅程數字摘要及有節奏的旅程卡建立第一印象。
- 行程頁維持單欄掃讀，但用更清晰的日期層級、細緻 timeline、酒店資訊卡及目的地 hero 提升質感。
- Emoji 只作快速辨識的輔助訊號，不作主要圖示、標題裝飾或唯一語意來源。

## 2. Color Palette & Roles

```css
:root {
  color-scheme: light;

  /* Canvas and surfaces */
  --color-bg: #cfc7b8;
  --color-bg-rgb: 207, 199, 184;
  --color-surface: #e8e3d9;
  --color-surface-rgb: 232, 227, 217;
  --color-surface-elevated: #f2eee5;
  --color-surface-muted: #d8d0c1;
  --color-surface-hover: #e0d9cc;

  /* Ink */
  --color-text: #252827;
  --color-text-rgb: 37, 40, 39;
  --color-text-secondary: #59605c;
  --color-text-tertiary: #737872;
  --color-text-inverse: #f2eee5;
  --color-text-disabled: #929690;

  /* Brand: Mandalorian helmet charcoal */
  --color-primary: #2a3031;
  --color-primary-rgb: 42, 48, 49;
  --color-primary-hover: #1e2324;
  --color-primary-active: #141718;
  --color-primary-soft: #d8dcda;

  /* Accent: Grogu olive, decorative and selected-state use only */
  --color-accent: #74834d;
  --color-accent-rgb: 116, 131, 77;
  --color-accent-hover: #5f6d3d;
  --color-accent-active: #4a562e;
  --color-accent-soft: #dde2ce;

  /* Leather: high-contrast secondary action */
  --color-leather: #79543e;
  --color-leather-rgb: 121, 84, 62;
  --color-leather-hover: #624130;
  --color-leather-active: #4e3225;

  /* Borders and focus */
  --color-border: #aaa79e;
  --color-border-rgb: 170, 167, 158;
  --color-border-strong: #85847f;
  --color-border-hover: #676b69;
  --color-control-border: #626765;
  --color-focus: #596f3a;
  --color-focus-rgb: 89, 111, 58;

  /* Semantic */
  --color-success: #526233;
  --color-success-rgb: 82, 98, 51;
  --color-success-soft: #dce2cc;
  --color-warning: #8c5a13;
  --color-warning-rgb: 140, 90, 19;
  --color-warning-soft: #eadbbc;
  --color-error: #9a3e35;
  --color-error-rgb: 154, 62, 53;
  --color-error-soft: #f4dfdb;
  --color-info: #52666d;
  --color-info-rgb: 82, 102, 109;
  --color-info-soft: #dce3e4;

  /* Atmospheric layers */
  --gradient-hero:
    radial-gradient(circle at 82% 12%, rgba(var(--color-accent-rgb), 0.18), transparent 34%),
    linear-gradient(145deg, var(--color-primary) 0%, var(--color-primary-active) 100%);
  --gradient-page:
    radial-gradient(circle at 90% 4%, rgba(var(--color-accent-rgb), 0.07), transparent 30%),
    linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface) 100%);

  /* Geometry */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 22px;
  --radius-xl: 30px;
  --radius-pill: 999px;
  --control-height: 44px;

  /* Elevation */
  --shadow-subtle: 0 1px 2px rgba(var(--color-text-rgb), 0.05);
  --shadow-card:
    0 1px 0 rgba(var(--color-surface-rgb), 0.90) inset,
    0 10px 30px rgba(var(--color-text-rgb), 0.07);
  --shadow-raised:
    0 1px 0 rgba(var(--color-surface-rgb), 0.94) inset,
    0 18px 45px rgba(var(--color-text-rgb), 0.11);
  --shadow-floating: 0 22px 60px rgba(var(--color-text-rgb), 0.16);
  --focus-ring: 0 0 0 4px rgba(var(--color-focus-rgb), 0.20);
}
```

### Color rules

- 所有產品顏色必須引用 CSS variables；元件 CSS 與 JSX 禁止新增硬編 hex、named color 或任意 rgba 色值。
- 炭黑負責主要操作；Grogu 橄欖綠只佔畫面約 10%，用於 active、upcoming 與 timeline highlight。
- 風化沙灰是主畫布，舊米白只用於卡片；不得將整頁變成純白或大面積軍綠。
- 皮革啡只用於需要白字的次要高對比操作，避免以中亮度 Grogu 綠承托細白字。
- `--gradient-hero` 只用於 hero；`--gradient-page` 只用於全頁環境層。卡片不得各自新增彩色漸層。
- Sticky navigation 可以使用 `rgba(var(--color-surface-rgb), …)` 毛玻璃；其他大面積卡片使用近實色 surface。
- Status 永遠同時用文字或圖示表達，不可只靠顏色。
- PWA `theme_color`、`index.html` theme color 與 hero 深色基準同步使用 `--color-primary` 的實際值。
- 文字對比以最淺 surface 及最暖背景兩者驗算；正文最少達 WCAG AA。

## 3. Typography Rules

**Google Fonts**：

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;600;700&family=Noto+Serif+TC:wght@500;600;700&display=swap');

:root {
  --font-display: "Noto Serif TC", "Songti TC", "PMingLiU", serif;
  --font-sans: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", system-ui, sans-serif;
  --font-mono: ui-monospace, "SFMono-Regular", Consolas, monospace;
}
```

實作時優先在 `index.html` 使用等價 `<link rel="stylesheet">`，避免 CSS `@import` 阻塞；上段 URL 是規範來源。

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---:|---:|---:|---:|
| Home Hero H1 | Display | `clamp(2.6rem, 9vw, 5rem)` | 600 | 1.08 | `-0.035em` |
| Trip Hero H1 | Display | `clamp(2rem, 6vw, 3.4rem)` | 600 | 1.16 | `-0.025em` |
| Section H2 | Display | `clamp(1.45rem, 3.5vw, 2rem)` | 600 | 1.3 | `-0.015em` |
| Card H3 | Sans | `1.0625rem` | 600 | 1.45 | `-0.01em` |
| Body | Sans | `1rem` | 400 | 1.75 | `0.015em` |
| Secondary body | Sans | `0.9375rem` | 400 | 1.65 | `0.015em` |
| Label / Tab | Sans | `0.8125rem` | 600 | 1.35 | `0.055em` |
| Time / Numeric | Sans | `0.875rem` | 600 | 1.4 | `0.01em` |
| Badge | Sans | `0.75rem` | 700 | 1.3 | `0.045em` |
| Mono / fare | Mono | `0.875rem` | 500 | 1.55 | `0` |

### Typography rules

- Display serif 只用於 H1/H2、旅程名稱及少量大數字；操作、正文、日期與表格全部使用 sans-serif。
- 中文正文不得小於 `15px`；主要行程詳情以 `16px`、`line-height: 1.75` 為基準。
- 大標題最多兩行，利用留白與字體對比建立高級感，不靠粗體堆疊。
- 時間、價錢、匯率及日期使用 `font-variant-numeric: tabular-nums`。
- 英文狀態標籤可保留，但不可整段 uppercase；必要時改用「即將出發／旅程完成」。
- **Never use**：純英文字體而無繁中文字體 fallback、手寫字體、正文 italic、超粗 `800/900` 大標題、全段 uppercase。

### Text decoration decision

- Hero H1：無漸變文字、無投影；以 serif、深淺對比與 split reveal 建立層次。
- Section H2：無漸變、無投影；可有 32px Grogu 橄欖綠短線作 eyebrow divider。
- Body：無漸變、無投影、無裝飾背景。
- Link：保留可辨識 underline，hover 改 underline offset 與顏色。

## 4. Component Stylings

以下 selector 是語意規格，實作時映射到現有 CSS Modules class。

### Buttons

```css
.button {
  min-height: var(--control-height);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6875rem 1.125rem;
  border: 1px solid transparent;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-text-inverse);
  font: 600 0.875rem/1.3 var(--font-sans);
  text-decoration: none;
  cursor: pointer;
  box-shadow: var(--shadow-subtle);
  transition: transform 180ms ease, background-color 180ms ease, box-shadow 180ms ease;
}
.button:hover { background: var(--color-primary-hover); transform: translateY(-1px); box-shadow: var(--shadow-card); }
.button:active { background: var(--color-primary-active); transform: translateY(0) scale(0.98); box-shadow: none; }
.button:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; box-shadow: var(--focus-ring); }
.button:disabled,
.button[aria-disabled="true"] { background: var(--color-surface-muted); color: var(--color-text-disabled); cursor: not-allowed; transform: none; box-shadow: none; }

.buttonSecondary { background: transparent; color: var(--color-primary); border-color: var(--color-border-strong); box-shadow: none; }
.buttonSecondary:hover { background: var(--color-primary-soft); border-color: var(--color-primary); }
.buttonSecondary:active { background: var(--color-surface-muted); }
```

### Trip cards

```css
.tripCard {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  padding: clamp(1.25rem, 4vw, 2rem);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  color: var(--color-text);
  text-decoration: none;
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease, box-shadow 280ms ease;
}
.tripCard:hover { transform: translateY(-3px); border-color: var(--color-border-hover); box-shadow: var(--shadow-raised); }
.tripCard:active { transform: translateY(-1px) scale(0.995); }
.tripCard:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 4px; box-shadow: var(--focus-ring), var(--shadow-raised); }
.tripCard[aria-disabled="true"] { color: var(--color-text-disabled); background: var(--color-surface-muted); cursor: not-allowed; transform: none; box-shadow: none; }
```

Finished trips use a neutral status badge, never whole-card opacity. Upcoming trips may use one restrained bronze rule or badge.

### Date navigation

```css
.dateRail {
  position: sticky;
  top: 0;
  z-index: 100;
  padding-block: 0.625rem;
  background: rgba(var(--color-surface-rgb), 0.76);
  border-bottom: 1px solid transparent;
  backdrop-filter: saturate(140%) blur(12px);
  -webkit-backdrop-filter: saturate(140%) blur(12px);
  transition: background-color 240ms ease, border-color 240ms ease, box-shadow 240ms ease;
}
.dateRail.isScrolled { border-bottom-color: var(--color-border); box-shadow: var(--shadow-subtle); }

.dateChip {
  min-height: var(--control-height);
  padding: 0.625rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  color: var(--color-text-secondary);
  font: 600 0.8125rem/1 var(--font-sans);
  cursor: pointer;
  transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}
.dateChip:hover { color: var(--color-primary); border-color: var(--color-border-hover); transform: translateY(-1px); }
.dateChip:active { transform: scale(0.97); }
.dateChip[aria-selected="true"] { background: var(--color-primary); color: var(--color-text-inverse); border-color: var(--color-primary); }
.dateChip:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; box-shadow: var(--focus-ring); }
.dateChip:disabled { background: var(--color-surface-muted); color: var(--color-text-disabled); cursor: not-allowed; transform: none; }
```

### Timeline cards

```css
.timelineCard {
  padding: 1rem 1.125rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-subtle);
  transition: border-color 200ms ease, box-shadow 240ms ease, transform 240ms ease;
}
.timelineCard:hover { border-color: var(--color-border-hover); box-shadow: var(--shadow-card); transform: translateX(2px); }
.timelineCard:focus-within { border-color: var(--color-focus); box-shadow: var(--focus-ring); }
.timelineCard[data-highlight="true"] { border-left: 3px solid var(--color-accent); }
```

### Links

```css
.textLink {
  color: var(--color-primary);
  text-decoration-line: underline;
  text-decoration-color: rgba(var(--color-primary-rgb), 0.36);
  text-underline-offset: 0.2em;
  transition: color 180ms ease, text-decoration-color 180ms ease, text-underline-offset 180ms ease;
}
.textLink:hover { color: var(--color-accent-hover); text-decoration-color: currentColor; text-underline-offset: 0.3em; }
.textLink:active { color: var(--color-accent-active); }
.textLink:focus-visible { outline: 2px solid var(--color-focus); outline-offset: 3px; border-radius: var(--radius-xs); }
.textLink[aria-disabled="true"] { color: var(--color-text-disabled); text-decoration-color: transparent; pointer-events: none; }
```

### Tags and badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  min-height: 1.75rem;
  padding-inline: 0.625rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  background: var(--color-surface-muted);
  color: var(--color-text-secondary);
  font: 700 0.75rem/1.3 var(--font-sans);
  letter-spacing: 0.045em;
}
.badge[data-tone="upcoming"] { background: var(--color-accent-soft); color: var(--color-accent-active); border-color: rgba(var(--color-accent-rgb), 0.28); }
.badge[data-tone="done"] { background: var(--color-success-soft); color: var(--color-success); border-color: rgba(var(--color-success-rgb), 0.24); }
```

### Todo controls

```css
.todoControl {
  min-height: var(--control-height);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
}
.todoControl:hover { background: var(--color-surface-hover); border-color: var(--color-border-hover); }
.todoControl:active { transform: scale(0.995); }
.todoControl:focus-within { border-color: var(--color-focus); box-shadow: var(--focus-ring); }
.todoControl[data-complete="true"] { color: var(--color-text-secondary); text-decoration: line-through; background: var(--color-surface-muted); }
.todoControl[aria-disabled="true"] { color: var(--color-text-disabled); cursor: not-allowed; }
```

## 5. Layout Principles

### Containers

- App max width：`960px`，畀首頁 hero 與旅程卡更多呼吸空間。
- 行程內容 reading column：`760px`，timeline、備註及表格維持單欄掃讀。
- Desktop inline padding：`32px`；tablet：`24px`；mobile：`16px`。
- Hero 可 full-bleed 至 app container 邊緣，但內容文字仍跟 reading grid 對齊。

### Spacing scale

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4.5rem;
  --page-max: 60rem;
  --reading-max: 47.5rem;
}
```

- Section gap：`clamp(3rem, 8vw, 5.5rem)`。
- Card gap：`16px` mobile、`20px` desktop。
- Card padding：最少 `20px`，重要卡 desktop 可到 `32px`。
- Timeline 每站垂直距離：`28–36px`；同一日內容不可被過多細卡切碎。

### Grid

```css
.tripGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}
.tripGrid > :first-child { grid-column: 1 / -1; }

.readingColumn {
  width: min(100%, var(--reading-max));
  margin-inline: auto;
}
```

首頁第一個 upcoming trip 可跨兩欄，形成不等大但克制的編輯式節奏；已完成旅程保持相同可讀性，不降低整卡 opacity。

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | 無陰影，使用背景與留白分層 | Page canvas、section、表格底層 |
| Hairline | `--shadow-subtle` + `--color-border` | 日期 chip、todo、簡單資訊列 |
| Card | `--shadow-card` | 旅程卡、timeline card、酒店卡 |
| Raised | `--shadow-raised` | Hovered trip card、重要資訊卡 |
| Floating | `--shadow-floating` | 臨時 overlay、離線提示；一般內容禁用 |

### Elevation rules

- 高級感主要靠排版、材質色與留白，不靠大面積 blur 或重陰影。
- 同一畫面最多兩級可見陰影；不能每個 nested element 都浮起。
- Shadow 色帶炭黑灰，不使用純黑硬陰影或霓虹 glow。
- Border 與 shadow 二選一作主要分隔；不可同時過重。

## 7. Animation & Interaction

**Motion philosophy**：慢半拍、短距離、先清晰後華麗；所有動效只使用 `opacity` 與 `transform` 作主要動畫屬性。
**Tier**：L2 流暢互動。

### Signature moments

1. **Hero H1 — restrained SplitText**：首頁與行程標題按行淡入上移，總長不超過 `700ms`。
2. **Section H2 — ScrollFloat**：章節標題進入 viewport 時由 `12px` 下方回位。
3. **Body / label — ScrollReveal**：旅程 metadata 與 timeline body 以整行為單位 reveal，中文不逐字彈跳。
4. **Element feedback**：trip card、日期 chip、導航按鈕有細微 lift/press；無磁吸光標與粒子。
5. **Interactive component — CardNav/PillNav**：日期 rail 在滾動後由透明變成緊湊毛玻璃，active pill 平滑換位。
6. **Atmosphere — lightweight Grainient**：hero 使用靜態 radial grain/gradient pseudo-element，只有極慢位置漂移；mobile 及 reduced-motion 完全靜止。

### Entrance and reveal

```css
@keyframes heroReveal {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.heroReveal { animation: heroReveal 680ms cubic-bezier(0.16, 1, 0.3, 1) both; }
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 620ms cubic-bezier(0.16, 1, 0.3, 1), transform 620ms cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.isInView { opacity: 1; transform: translateY(0); }
.reveal.isInView:nth-child(2) { transition-delay: 70ms; }
.reveal.isInView:nth-child(3) { transition-delay: 140ms; }
```

### Intersection observer

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('isInView');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
```

React 實作使用等價 hook，必須在 unmount 時 `disconnect()`。

### Navigation change and subtle parallax

```js
let ticking = false;
const updateScrollState = () => {
  document.documentElement.classList.toggle('hasScrolled', window.scrollY > 24);
  const heroArt = document.querySelector('[data-parallax]');
  if (heroArt && window.matchMedia('(hover: hover)').matches) {
    heroArt.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.08, 24)}px, 0)`;
  }
  ticking = false;
};

window.addEventListener('scroll', () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(updateScrollState);
}, { passive: true });
```

Parallax 最大位移 `24px`，只作用於 hero 裝飾層，不能令正文或操作控制飄移。

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .heroReveal,
  .reveal { opacity: 1 !important; transform: none !important; }
  [data-parallax] { transform: none !important; }
}
```

### Motion performance limits

- 不使用 `filter: blur()` 動畫、scroll-jacking、全局 custom cursor 或持續 WebGL render。
- `backdrop-filter` 最大 `12px`，只限 sticky date rail。
- 所有 scroll/pointer listener 必須 passive 並以 `requestAnimationFrame` 節流。
- 一頁同時進行的長時間 ambient animation 最多一個。

## 8. Do's and Don'ts

### Do

- 使用風化沙灰 canvas、Beskar 米白卡片與 Grogu 綠小面積點綴建立統一材質感。
- 用 serif display + sans body 的對比建立層級，保持正文高可讀性。
- 讓 upcoming trip 成為首頁視覺焦點，其他旅程保持安靜但完整。
- 保留 760px 行程閱讀軸、44px 觸控區、ARIA tabs、skip link 及 keyboard navigation。
- 用旅程地點、日期、住宿與交通資訊建立內容層級，不用無意義裝飾。
- 使用真實目的地圖片時，加明確 alt；無圖片時用克制的 tonal hero，而非純色 placeholder。
- 所有狀態以文字 + 色彩／形狀共同表達。
- 每次改色同步檢查 PWA browser chrome、manifest 與 WCAG 對比。

### Don't

- ❌ 不要恢復全頁 glassmorphism、藍紫科技漸層或每張卡獨立 gradient。
- ❌ 不要以 emoji 取代導航圖示、按鈕文字或狀態說明。
- ❌ 不要加入霓虹、glow、粒子、3D tilt、custom cursor 或浮誇 cursor effect。
- ❌ 不要使用超粗標題、全大寫英文、過度 letter-spacing 或細於 15px 的中文正文。
- ❌ 不要用整卡 opacity 表示 finished；文字對比及可點擊性必須保持。
- ❌ 不要同時使用三種以上圓角尺度或為每個元件自創 shadow。
- ❌ 不要把桌面版拉成寬闊 dashboard；行程內容仍是線性閱讀工具。
- ❌ 不要用 hover 才能發現的重要資訊；mobile 必須完整可用。
- ❌ 不要做會推動 layout 的動畫，亦不要 animation `width/height/top/left`。
- ❌ 不要引入新 animation library，除非現有 CSS/IntersectionObserver 無法完成並另行確認。

## 9. Responsive Behavior

### Breakpoints

| Name | Width | Key changes |
|---|---:|---|
| Large desktop | `> 1024px` | 960px app canvas；首頁兩欄 trip grid；featured trip 跨兩欄 |
| Tablet / small desktop | `641–1024px` | 760px 單欄內容；trip grid 可保持兩欄至 760px，再按內容自然收窄 |
| Mobile | `≤ 640px` | 全部單欄；16px gutter；hero 收短；日期 rail 橫向 swipe；卡片取消 hover 位移 |
| Small mobile | `≤ 380px` | 標題再收細；metadata 分行；酒店 CTA 移到下一行但維持 44px |

**Touch targets**：所有 button、link、tab、checkbox label 最少 `44 × 44px`。

**Safe areas**：header、sticky rail、bottom navigation 必須包含 `env(safe-area-inset-*)`。
**Overflow**：`≤ 600px` 不得有 page-level 橫向 overflow；只有 timetable 與 date rail 可以局部橫向捲動。

```css
@media (max-width: 640px) {
  .pageShell { padding-inline: 1rem; }
  .tripGrid { grid-template-columns: 1fr; gap: 1rem; }
  .tripGrid > :first-child { grid-column: auto; }
  .tripCard { grid-template-columns: 1fr; padding: 1.25rem; }
  .tripCard:hover { transform: none; }
  .hero { min-height: auto; padding: 2.5rem 1.25rem 2rem; border-radius: 0 0 var(--radius-lg) var(--radius-lg); }
  .dateRail { overflow: hidden; }
  .dateTabs { overflow-x: auto; scroll-snap-type: x proximity; scrollbar-width: none; }
  .dateChip { scroll-snap-align: start; }
  .hotelCard { align-items: flex-start; flex-direction: column; }
}

@media (max-width: 380px) {
  .tripMeta { display: grid; gap: 0.25rem; }
  .button,
  .buttonSecondary { width: 100%; }
}

@media (hover: none) {
  .tripCard:hover,
  .timelineCard:hover,
  .button:hover { transform: none; }
}
```

### Accessibility and offline behavior

- Focus-visible ring 不得被 overflow container 裁走。
- ARIA tab semantics、方向鍵、Home/End、roving `tabIndex` 維持現有行為。
- 圖片未載入或 PWA 離線時，layout 不可塌陷；使用固定 aspect-ratio 與 `--color-surface-muted` fallback。
- 字體離線時使用系統繁中 serif/sans fallback，不能出現 FOIT 白畫面。
