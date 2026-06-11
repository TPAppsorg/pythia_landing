import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  href?: string;
  glow?: boolean;
  compact?: boolean;
}

const APP_STORE_URL = "https://apps.apple.com/app/id6776549138";

export function AppStoreBadge({
  className,
  href = APP_STORE_URL,
  glow = true,
  compact = false,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Pythia on the App Store"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl bg-black ring-1 ring-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:ring-mint/60 active:scale-[0.98]",
        compact ? "px-3 py-2" : "px-5 py-3 sm:gap-3",
        glow &&
          "hover:shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--mint)_55%,transparent)]",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn("fill-white", compact ? "h-5 w-5" : "h-7 w-7")}
        aria-hidden
      >
        <path d="M16.365 1.43c0 1.14-.43 2.23-1.15 3.05-.77.88-2.03 1.56-3.07 1.48-.13-1.1.4-2.25 1.1-3.04.77-.88 2.13-1.55 3.12-1.49zM20.5 17.06c-.55 1.27-.82 1.84-1.53 2.96-1 1.56-2.4 3.51-4.14 3.52-1.55.02-1.95-.99-4.05-.97-2.1.01-2.54.99-4.09.97-1.74-.02-3.07-1.78-4.07-3.34C-.21 16.34-.5 11.04 2.1 8.16 3.45 6.65 5.42 5.7 7.36 5.7c1.95 0 3.17.99 4.78.99 1.56 0 2.51-.99 4.77-.99 1.71 0 3.52.93 4.81 2.55-4.22 2.32-3.53 8.34-1.22 8.81z" />
      </svg>
      {compact ? (
        <span className="text-sm font-semibold text-white">App Store</span>
      ) : (
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] font-medium uppercase tracking-wider text-white/70">
            Download on the
          </span>
          <span className="text-base font-semibold text-white sm:text-lg">
            App Store
          </span>
        </div>
      )}
    </a>
  );
}
