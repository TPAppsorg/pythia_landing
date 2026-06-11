export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={"flex items-center gap-2 " + (className ?? "")}>
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <path
          d="M4 20V4h7a5 5 0 0 1 0 10H8v6H4z"
          className="fill-mint"
        />
        <circle cx="18" cy="6" r="2" className="fill-mint" />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-mint">Pythia</span>
    </a>
  );
}
