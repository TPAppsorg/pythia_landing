## Что сделаю

### 1. App Store ссылка (id 6776549138)
- В `AppStoreBadge.tsx` сменю дефолт `href` на `https://apps.apple.com/app/id6776549138`, добавлю `target="_blank"` и `rel="noopener noreferrer"`.
- Уберу необходимость прокидывать `href` вручную — все бейджи на странице сразу начнут вести в App Store.

### 2. Privacy Policy + футер
- В футере `src/routes/index.tsx` ссылка **Privacy** будет указывать на `https://experts-draw-9pm.craft.me/Fn1YY4DyNmYzhg` (target=_blank, rel=noopener).
- Terms/Support оставлю как есть (placeholder `#`), если не нужно — скажи, уберу.

### 3. Адаптив для мобил и узких экранов
Главные проблемы текущей версии на ≤390px:
- Бейдж App Store в навбаре сжат скейлом и подрезается — заменю на компактный вариант (иконка + "App Store" без верхней строки) для `< sm`, полноразмерный — с `sm:`.
- Hero: уменьшу размер H1 на самых узких экранах (`text-[2rem]` → `sm:text-5xl` → `lg:text-6xl`), подтяну `leading`, добавлю `px-1` для бейджа «Live on Kalshi».
- Hero-телефон: ограничу `max-w-[240px]` на мобиле, чтобы не давил на текст; пересмотрю порядок (телефон под текстом — уже так, но добавлю `gap` поменьше).
- Карусель: добавлю горизонтальные паддинги контейнера, уменьшу размер `PhoneFrame` на мобиле, проверю что свайп не выходит за viewport (overflow-x-hidden на секции).
- Feature/Step карточки: `p-6` → `p-5 sm:p-6`, заголовки секций `text-3xl` → `text-2xl sm:text-4xl`.
- Pricing: на узких экранах бейдж «Save · Best value» наезжает — поставлю его `left-1/2 -translate-x-1/2` сверху по центру.
- Final CTA: `py-24` → `py-16 sm:py-24`, `text-3xl sm:text-5xl` → `text-[26px] sm:text-5xl`, паддинги `px-5`.
- Футер: `flex-col` уже на мобиле, добавлю `text-center` и сокращу зазоры.
- Глобально: на корне `<div>` добавлю `overflow-x-hidden`, чтобы убрать горизонтальный скролл от свечений/каруселя.

### 4. Лёгкие анимации (ничего навязчивого)
- Подключу IntersectionObserver-хук `useReveal` и применю `.reveal` к секциям при попадании во вьюпорт (сейчас `reveal` срабатывает только при первичной отрисовке — на длинной странице блоки появляются мгновенно при скролле). Лёгкий fade-up 400–500ms, `prefers-reduced-motion` → отключение.
- Hover-lift уже есть на карточках — добавлю такой же на `PriceCard` и на iconbox внутри features (scale 1.05, 200ms).
- App Store бейдж: добавлю `active:scale-[0.98]` для тактильного фидбэка на тапе.
- Hero телефон: лёгкое `float` (translateY ±4px, 6s ease-in-out infinite) — почти незаметное, добавит «жизни».
- Mint-точка в hero-бейдже уже пульсирует — оставлю.

### 5. Технические детали
- Файлы под правку: `src/components/pythia/AppStoreBadge.tsx`, `src/components/pythia/Navbar.tsx`, `src/routes/index.tsx`, `src/styles.css` (новые keyframes `float`, утилита `.reveal-on-scroll`), новый хук `src/hooks/use-reveal.ts`.
- Без изменений в бизнес-логике/бэке — только фронт.
- Проверю в превью на 375px и 414px шириной.

Скажи «го» — иду внедрять.