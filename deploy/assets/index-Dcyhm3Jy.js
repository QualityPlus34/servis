import { N as reactExports, G as jsxRuntimeExports } from "./server-HYuKCKEH.js";
import { T as TG_HREF, Y as YA_HREF } from "./router-DTRguZIH.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useReveal() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = el.querySelectorAll(".reveal");
    if (targets.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
  return ref;
}
const logo = "/assets/logo-BP9EGwiH.jpg";
const hero = "/assets/hero-DWqtdMhi.jpg";
const washer = "/assets/washer-BKhO_BOv.jpg";
const dishwasher = "/assets/dishwasher-DSMqn7nW.jpg";
const dryer = "/assets/dryer-d6PFha-z.jpg";
const parts = "/assets/parts-B4b8oELx.jpg";
const PHONE_DISPLAY = "+7 (977) 184-12-87";
const PHONE_HREF = "tel:+79771841287";
function Index() {
  const ref = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "bg-graphite text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Advantages, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Categories, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Social, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function Header() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-graphite/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Quality Plus", width: 36, height: 36, className: "h-9 w-9 rounded-sm object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-sm font-medium tracking-[0.32em] sm:inline", children: "QUALITY PLUS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 text-xs uppercase tracking-[0.24em] text-muted-foreground md:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#advantages", className: "transition-colors hover:text-foreground", children: "Преимущества" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#services", className: "transition-colors hover:text-foreground", children: "Техника" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#process", className: "transition-colors hover:text-foreground", children: "Процесс" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "transition-colors hover:text-foreground", children: "Контакты" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE_HREF, className: "hidden rounded-sm border border-bronze px-4 py-2 text-xs uppercase tracking-[0.18em] text-bronze transition-colors hover:bg-bronze hover:text-bronze-foreground sm:inline-block", children: PHONE_DISPLAY })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative h-[100svh] min-h-[640px] w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero, alt: "Премиальный кухонный интерьер с встроенной техникой", width: 1920, height: 1080, className: "absolute inset-0 h-full w-full object-cover animate-ken-burns" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
      background: "var(--gradient-fade-top)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-graphite/30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "Сервисный центр премиум-класса · С 2014 года" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display-xl text-balance text-foreground", children: [
          "Точность. Надёжность.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bronze", children: "Ремонт," }),
          " которому доверяют."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg", children: "Обслуживаем стиральные, посудомоечные и сушильные машины ведущих мировых брендов. Выезд мастера в течение 30 минут. Гарантия на работы — до 2 лет." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_HREF, className: "group inline-flex items-center justify-center gap-3 rounded-sm bg-bronze px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-bronze-foreground shadow-bronze transition-transform hover:-translate-y-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneIcon, { className: "h-4 w-4" }),
            PHONE_DISPLAY
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_HREF, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center justify-center gap-3 rounded-sm border border-foreground/30 bg-foreground/5 px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground backdrop-blur-md transition-colors hover:bg-foreground/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TelegramIcon, { className: "h-4 w-4" }),
            "Написать в Telegram"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal mt-16 grid grid-cols-2 gap-6 border-t border-border/40 pt-8 md:grid-cols-4 md:gap-12", children: [{
        v: "10+",
        l: "лет на рынке"
      }, {
        v: "5 000+",
        l: "успешных ремонтов"
      }, {
        v: "30 мин",
        l: "среднее время выезда"
      }, {
        v: "2 года",
        l: "гарантия на работы"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-foreground md:text-4xl", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] })
  ] });
}
const advantages = [{
  n: "01",
  t: "10 лет на рынке",
  d: "Команда инженеров с многолетней практикой обслуживания премиальной техники в Москве и области."
}, {
  n: "02",
  t: "Оригинальные запчасти",
  d: "Собственный склад с оригинальными комплектующими Bosch, Siemens, Miele, LG, Samsung, Electrolux."
}, {
  n: "03",
  t: "Бесплатная диагностика",
  d: "При выполнении ремонта диагностика и выезд мастера предоставляются без оплаты."
}, {
  n: "04",
  t: "Гарантия до 2 лет",
  d: "Письменная гарантия на все виды работ и установленные детали — каждый клиент защищён договором."
}];
function Advantages() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "advantages", className: "relative bg-anthracite py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "Преимущества" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-lg text-balance", children: [
          "Больше, чем",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "просто ремонт."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:pt-8", children: "Мы относимся к каждому вызову как к ответственному инженерному проекту: точная диагностика, оригинальные запчасти и прозрачная работа от заявки до запуска машины." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 grid gap-px overflow-hidden rounded-sm border border-border/40 bg-border/40 md:grid-cols-2 lg:grid-cols-4", children: advantages.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal group relative flex flex-col justify-between bg-anthracite p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs tracking-[0.32em] text-bronze", children: a.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-bold text-foreground", children: a.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: a.d })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 h-px w-12 bg-bronze transition-all duration-500 group-hover:w-24" })
    ] }, a.n)) })
  ] }) });
}
const cats = [{
  img: washer,
  t: "Стиральные машины",
  d: "Замена подшипников, ТЭНов, насосов, модулей управления. Восстановление барабана и амортизации."
}, {
  img: dishwasher,
  t: "Посудомоечные машины",
  d: "Чистка и замена циркуляционных насосов, прессостатов, нагревательных элементов и форсунок."
}, {
  img: dryer,
  t: "Сушильные машины",
  d: "Конденсационные и тепловые насосы, замена термостатов, ремней, очистка вентиляционной системы."
}];
function Categories() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative bg-graphite py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-20 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "Обслуживаемая техника" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-lg text-balance", children: [
        "Мы знаем о вашей ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bronze", children: "технике" }),
        " всё."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "reveal group relative aspect-[3/4] overflow-hidden rounded-sm bg-anthracite", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: c.t, width: 1280, height: 1600, loading: "lazy", className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-graphite via-graphite/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold md:text-3xl", children: c.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: c.d }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-[0.2em] text-bronze", children: "Bosch · Siemens · Miele · LG · Samsung · Electrolux" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-bronze", children: [
          "Выезд за 30 минут ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, { className: "h-3 w-3" })
        ] })
      ] })
    ] }, c.t)) })
  ] }) });
}
const steps = [{
  n: "01",
  t: "Заявка",
  d: "Звонок или сообщение в Telegram. Согласуем удобное время визита мастера."
}, {
  n: "02",
  t: "Бесплатная диагностика",
  d: "Мастер приедет с оборудованием, проведёт диагностику и согласует точную смету."
}, {
  n: "03",
  t: "Ремонт с гарантией",
  d: "Используем оригинальные запчасти. Выдаём акт работ и гарантию до 2 лет."
}];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "process", className: "relative overflow-hidden bg-anthracite py-28 md:py-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: parts, alt: "", "aria-hidden": true, width: 1920, height: 1080, loading: "lazy", className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-anthracite via-anthracite/80 to-anthracite" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1400px] px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-20 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "Процесс работы" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg text-balance", children: "Сервис, который вы заслуживаете." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid gap-12 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-12 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-bronze/40 to-transparent md:block" }),
        steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 w-24 items-center justify-center rounded-full border border-bronze/40 bg-anthracite font-display text-2xl font-bold text-bronze", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-2xl font-bold", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground", children: s.d })
        ] }, s.n))
      ] })
    ] })
  ] });
}
function Social() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "reviews", className: "relative bg-graphite py-28 md:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mb-20 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "Социальное доказательство" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg text-balance", children: "О нас говорят." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: YA_HREF, target: "_blank", rel: "noopener noreferrer", className: "reveal group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border/60 bg-anthracite p-10 transition-all duration-500 hover:-translate-y-1 hover:border-bronze/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-6xl font-bold text-bronze md:text-7xl", children: "4.9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm uppercase tracking-[0.2em] text-muted-foreground", children: "/ 5.0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-1 text-bronze", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StarIcon, { className: "h-4 w-4" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground", children: "Сотни проверенных отзывов от клиентов в Яндекс.Картах. Прозрачный рейтинг, реальные истории, реальная репутация." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-bronze", children: [
          "Читать отзывы на Яндексе ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, { className: "h-3 w-3" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: TG_HREF, target: "_blank", rel: "noopener noreferrer", className: "reveal group relative flex flex-col justify-between overflow-hidden rounded-sm bg-foreground p-10 text-primary-foreground transition-all duration-500 hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TelegramIcon, { className: "h-10 w-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mt-8 text-3xl font-bold leading-tight md:text-4xl", children: [
            "Присоединяйтесь",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "к нашему Telegram-сообществу."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-sm leading-relaxed opacity-70", children: "Бесплатные консультации мастера, разбор типичных поломок и советы по уходу за премиальной техникой." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-transform group-hover:translate-x-1", children: [
          "Подписаться ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, { className: "h-3 w-3" })
        ] })
      ] })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "relative overflow-hidden bg-graphite pt-28 pb-12 md:pt-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "reveal mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-8", children: "Доверьте ремонт профессионалам" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-xl text-balance", children: [
        "Один звонок —",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-bronze", children: "и техника снова работает." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: PHONE_HREF, className: "group relative inline-flex items-center gap-4 rounded-sm bg-bronze px-10 py-6 text-base font-semibold uppercase tracking-[0.18em] text-bronze-foreground shadow-bronze animate-pulse-ring", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneIcon, { className: "h-5 w-5" }),
        PHONE_DISPLAY
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: TG_HREF, target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-bronze", children: "Telegram" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: YA_HREF, target: "_blank", rel: "noopener noreferrer", className: "transition-colors hover:text-bronze", children: "Яндекс.Карты" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: PHONE_HREF, className: "transition-colors hover:text-bronze", children: PHONE_DISPLAY })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-28 flex flex-col items-center justify-between gap-6 border-t border-border/40 pt-8 text-xs text-muted-foreground md:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "", width: 28, height: 28, className: "h-7 w-7 rounded-sm object-cover", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tracking-[0.32em]", children: [
          "QUALITY PLUS · © ",
          (/* @__PURE__ */ new Date()).getFullYear()
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-center md:text-right", children: "Дизайн вдохновлён эстетикой ведущих мировых брендов премиум-класса. Все торговые марки принадлежат их правообладателям." })
    ] })
  ] }) });
}
function PhoneIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }) });
}
function TelegramIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21.94 4.5 18.7 19.74c-.24 1.08-.88 1.35-1.78.84l-4.92-3.63-2.37 2.28c-.26.26-.48.48-.99.48l.36-5.02L17.99 6c.4-.35-.09-.55-.62-.2l-11.3 7.12-4.87-1.52c-1.06-.33-1.08-1.06.22-1.57L20.6 3c.88-.33 1.65.2 1.34 1.5z" }) });
}
function ArrowIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "12 5 19 12 12 19" })
  ] });
}
function StarIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) });
}
export {
  Index as component
};
