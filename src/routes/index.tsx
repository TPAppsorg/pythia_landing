import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  TrendingUp,
  Brain,
  BellRing,
  ShieldCheck,
  Activity,
  Radio,
  ChevronDown,
} from "lucide-react";
import { Navbar } from "@/components/pythia/Navbar";
import { AppStoreBadge } from "@/components/pythia/AppStoreBadge";
import { Logo } from "@/components/pythia/Logo";
import { PhoneFrame } from "@/components/pythia/PhoneFrame";
import { AppMockScreen } from "@/components/pythia/AppMockScreen";
import { Carousel } from "@/components/pythia/Carousel";
import { EdgeBar } from "@/components/pythia/EdgeBar";
import { useReveal } from "@/hooks/use-reveal";

const PRIVACY_URL = "https://experts-draw-9pm.craft.me/Fn1YY4DyNmYzhg";
const TERMS_URL = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pythia",
  operatingSystem: "iOS",
  applicationCategory: "FinanceApplication",
  offers: [
    {
      "@type": "Offer",
      price: "8.99",
      priceCurrency: "USD",
      description: "Pythia Pro — weekly subscription",
    },
    {
      "@type": "Offer",
      price: "19.99",
      priceCurrency: "USD",
      description: "Pythia Pro — monthly subscription",
    },
  ],
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pythia — AI probabilities for Kalshi prediction markets" },
      {
        name: "description",
        content:
          "Pythia computes an independent AI probability for live Kalshi markets, highlights the biggest daily edges, and alerts you the moment prices cross.",
      },
      { property: "og:title", content: "Pythia — See the edge before the market does." },
      {
        property: "og:description",
        content:
          "AI-powered prediction-market intelligence for Kalshi. Independent probabilities, daily edges, smart alerts.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd,
      },
    ],
  }),
  component: Landing,
});

const slides = [
  {
    image: "/screens/screen1.jpg",
    caption: "Browse 1,200+ live Kalshi markets, analyzed daily.",
  },
  {
    image: "/screens/screen2.jpg",
    caption: "AI probability vs market price — spot the edge.",
  },
  {
    image: "/screens/screen3.jpg",
    caption: "Price-cross and resolution alerts, never miss a move.",
  },
  {
    image: "/screens/screen4.jpg",
    caption: "Deep AI insights flag overvalued and undervalued markets.",
  },
  {
    image: "/screens/screen5.jpg",
    caption: "Full price history, from one day to all-time.",
  },
  {
    image: "/screens/screen6.jpg",
    caption: "Every call argued for and against — you decide.",
  },
  {
    image: "/screens/screen7.jpg",
    caption: "Best, likely, and worst scenarios — mapped before resolution.",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "AI vs Market",
    body: "An independent AI probability set side-by-side with the live price, so mispricing is visible at a glance.",
  },
  {
    icon: TrendingUp,
    title: "Daily Edges",
    body: "The biggest opportunities of the day, ranked and ready each morning.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    body: "Plain-language reasoning behind each market's AI probability.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    body: "Get notified instantly on price crosses and market resolutions.",
  },
];

const categories = [
  "Politics",
  "Financials",
  "Economics",
  "Climate",
  "Crypto",
  "Sports",
  "World",
  "Culture",
  "Tech",
  "Health",
  "Science",
];

const stats = [
  { value: "20+", label: "daily AI edges" },
  { value: "1,200+", label: "markets analyzed daily" },
  { value: "11", label: "categories covered" },
  { value: "Seconds", label: "to a full AI insight" },
];

const faqs = [
  {
    q: "Is Pythia a trading app?",
    a: "No. Pythia is analytics only — AI probabilities, edges, and alerts. Trading happens on the regulated Kalshi exchange.",
  },
  {
    q: "Do I need a Kalshi account?",
    a: "No. You can browse markets and read AI insights without any Kalshi account.",
  },
  {
    q: "How does the AI work?",
    a: "For each market, the AI forms an independent probability from news, context, and base rates — then compares it against the live market price to surface the edge.",
  },
  {
    q: "How much does Pro cost?",
    a: "Pythia Pro is $8.99/week or $19.99/month (Save 49% on monthly). Auto-renewing, cancel anytime. You get 1 free AI insight to try before subscribing.",
  },
  {
    q: "Is this financial advice?",
    a: "No. Everything in Pythia is for informational purposes only. AI probabilities are estimates, not recommendations.",
  },
];

function Landing() {
  return (
    <div id="top" className="bg-pythia min-h-screen overflow-x-hidden text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-40 sm:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-8">
          <div className="reveal text-center lg:col-span-7 lg:text-left">
            <h1 className="text-balance text-[2rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              See the edge <span className="text-mint text-glow-mint">before the market</span> does.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:mx-0">
              Pythia computes an independent AI probability for live Kalshi markets, highlights the
              biggest daily edges, and alerts you the moment prices cross.
            </p>
            <div className="mt-7 flex justify-center lg:justify-start">
              <AppStoreBadge />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground lg:justify-start">
              <Activity className="h-4 w-4 text-mint" />
              <span className="tabular">
                <span className="text-foreground">1,200+</span> live markets analyzed daily
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="reveal reveal-delay-2 relative lg:col-span-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-[80%] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, color-mix(in oklab, var(--mint) 35%, transparent), transparent 65%)",
              }}
            />
            <div className="float-soft">
              <PhoneFrame className="max-w-[240px] sm:max-w-[300px]">
                <AppMockScreen />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOT CAROUSEL */}
      <Section
        eyebrow="Inside the app"
        title="Designed like a terminal. Feels like an app."
        subtitle="Swipe through Pythia. Every screen is dense, precise, and tuned for fast decisions."
      >
        <div className="mt-12">
          <Carousel slides={slides} />
        </div>
      </Section>

      {/* FEATURES */}
      <Section
        eyebrow="Features"
        title="Signal, not noise."
        subtitle="Four pillars that turn live prediction markets into actionable edge."
      >
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-pythia reveal reveal-delay-${i + 1} group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-mint/40`}
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-mint/30 bg-mint/10 text-mint transition-colors group-hover:bg-mint/15">
                <f.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section eyebrow="How it works" title="Three steps from open to edge.">
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <StepCard
            n={1}
            title="Browse live Kalshi markets"
            body="Every active market, organized by category and trending edge."
            visual={
              <div className="space-y-2">
                <MiniRow label="Politics" v={42} />
                <MiniRow label="Economics" v={67} accent />
                <MiniRow label="Crypto" v={28} />
              </div>
            }
          />
          <StepCard
            n={2}
            title="See the AI edge vs market price"
            body="A side-by-side meter showing where the market may be mispriced."
            visual={<EdgeBar label="Fed cuts in Dec" ai={72.4} market={58.0} />}
          />
          <StepCard
            n={3}
            title="Set alerts and act with confidence"
            body="Notifications fire the moment prices cross your threshold."
            visual={
              <div className="flex items-center gap-3 rounded-lg border border-mint/30 bg-mint/5 p-3">
                <BellRing className="h-5 w-5 text-mint" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-foreground">Price crossed 65%</div>
                  <div className="tabular text-[10px] text-muted-foreground">
                    Fed cuts in Dec · 2 min ago
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </Section>

      {/* WHY PYTHIA */}
      <Section eyebrow="Why Pythia" title="Independent. Real-time. Quiet by design.">
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="card-pythia p-5 text-center">
              <div className="tabular text-2xl font-semibold text-mint sm:text-3xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <Pill icon={ShieldCheck} text="Independent AI estimates" />
          <Pill icon={Radio} text="Real-time market data" />
          <Pill icon={Activity} text="No noise, just signal" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Straight answers.">
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} className="card-pythia group overflow-hidden">
              <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <span className="tabular text-[11px] font-semibold text-mint">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground sm:text-base">
                  {f.q}
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="px-5 pb-5 pl-[52px] text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-32">
        <div
          className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-mint/30 px-5 py-12 text-center sm:px-12 sm:py-16"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--mint) 12%, transparent), color-mix(in oklab, var(--mint) 4%, transparent))",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at top, color-mix(in oklab, var(--mint) 25%, transparent), transparent 60%)",
            }}
          />
          <h2 className="text-balance text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Start finding your <span className="text-mint">edge</span> today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
            Pythia is free to download and includes 1 free AI insight. Pythia Pro unlocks the
            full experience — $8.99/week or $19.99/month.
          </p>
          <div className="mt-7 flex justify-center sm:mt-8">
            <AppStoreBadge />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/70 px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
          <Logo />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href={TERMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-mint transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="mailto:mobile.suppt.team@gmail.com"
              className="hover:text-mint transition-colors"
            >
              Support
            </a>
          </nav>
          <div className="tabular text-[11px] text-muted-foreground sm:text-xs">
            © {new Date().getFullYear()} Pythia. Not affiliated with or endorsed by Kalshi, Inc.
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-6xl text-center text-[11px] leading-relaxed text-muted-foreground/70 sm:text-left">
          Pythia provides AI-generated market analysis for informational purposes only; it is not
          financial advice.
        </p>
      </footer>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className={"reveal-on-scroll px-4 py-16 sm:px-6 sm:py-28 " + (visible ? "is-visible" : "")}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="tabular text-[11px] font-semibold uppercase tracking-[0.2em] text-mint">
            {eyebrow}
          </div>
          <h2 className="mt-3 text-balance text-[26px] font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-balance text-sm text-muted-foreground sm:text-base">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function StepCard({
  n,
  title,
  body,
  visual,
}: {
  n: number;
  title: string;
  body: string;
  visual: React.ReactNode;
}) {
  return (
    <div className="card-pythia reveal p-6">
      <div className="tabular mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-mint/30 bg-mint/10 text-sm font-semibold text-mint">
        {n.toString().padStart(2, "0")}
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      <div className="mt-5">{visual}</div>
    </div>
  );
}

function MiniRow({ label, v, accent }: { label: string; v: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-xs text-muted-foreground">{label}</span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/5">
        <div
          className={"absolute inset-y-0 left-0 " + (accent ? "bg-mint" : "bg-foreground/40")}
          style={{ width: `${v}%` }}
        />
      </div>
      <span className="tabular w-10 text-right text-[11px] text-foreground/80">{v}%</span>
    </div>
  );
}

function Pill({ icon: Icon, text }: { icon: typeof ShieldCheck; text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="h-4 w-4 text-mint" />
      <span className="text-foreground/90">{text}</span>
    </span>
  );
}
