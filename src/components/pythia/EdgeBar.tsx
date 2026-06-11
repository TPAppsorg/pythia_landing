interface Props {
  label: string;
  ai: number; // 0..100
  market: number; // 0..100
}

export function EdgeBar({ label, ai, market }: Props) {
  const edge = ai - market;
  const edgeStr = `${edge >= 0 ? "+" : ""}${edge.toFixed(1)}%`;
  return (
    <div className="rounded-lg border border-border/70 bg-surface-elevated/60 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="truncate text-[13px] font-medium text-foreground/90">{label}</span>
        <span
          className={
            "tabular text-[12px] font-semibold " +
            (edge >= 0 ? "text-mint" : "text-foreground/60")
          }
        >
          {edgeStr}
        </span>
      </div>

      <div className="space-y-1.5">
        <Row label="AI" value={ai} accent />
        <Row label="MKT" value={market} />
      </div>
    </div>
  );
}

function Row({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span className="tabular w-8 text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-foreground/5">
        <div
          className={
            "absolute inset-y-0 left-0 rounded-full " +
            (accent ? "bg-mint" : "bg-foreground/40")
          }
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="tabular w-12 text-right text-[11px] text-foreground/80">
        {value.toFixed(1)}%
      </span>
    </div>
  );
}
