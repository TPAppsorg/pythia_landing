import { EdgeBar } from "./EdgeBar";

/** A faux "Edges" screen used inside the hero phone. */
export function AppMockScreen() {
  return (
    <div className="flex h-full flex-col bg-background px-3 pb-3 pt-9">
      {/* Status row */}
      <div className="tabular mb-2 flex items-center justify-between px-1 text-[10px] text-muted-foreground">
        <span>9:41</span>
        <span>Updated today</span>
      </div>

      {/* Header */}
      <div className="mb-3 flex items-end justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Today's Edges
          </div>
          <div className="text-base font-semibold text-foreground">12 opportunities</div>
        </div>
        <div className="tabular rounded-md border border-mint/30 bg-mint/10 px-2 py-1 text-[10px] font-semibold text-mint">
          Top 10 ranked
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-3 flex gap-1 text-[10px]">
        <span className="rounded-full bg-mint/15 px-2 py-1 font-medium text-mint">All</span>
        <span className="rounded-full px-2 py-1 text-muted-foreground">Politics</span>
        <span className="rounded-full px-2 py-1 text-muted-foreground">Econ</span>
        <span className="rounded-full px-2 py-1 text-muted-foreground">Crypto</span>
      </div>

      <div className="space-y-2 overflow-hidden">
        <EdgeBar label="Fed cuts rates in Dec" ai={72.4} market={58.0} />
        <EdgeBar label="BTC > $120k by EOY" ai={41.2} market={52.5} />
        <EdgeBar label="CPI above 3% in June" ai={66.0} market={59.3} />
        <EdgeBar label="GDP Q4 > 2.5%" ai={38.8} market={31.1} />
      </div>
    </div>
  );
}
