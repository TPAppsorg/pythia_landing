import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

export interface Slide {
  caption: string;
  /** Optional screenshot URL; leave empty to render the styled placeholder. */
  image?: string;
}

interface Props {
  slides: Slide[];
}

export function Carousel({ slides }: Props) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;

  const go = useCallback((n: number) => setI((prev) => (prev + n + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((p) => (p + 1) % total), 4500);
    return () => clearInterval(id);
  }, [total, paused]);

  return (
    <div
      className="relative mx-auto w-full max-w-md px-10 sm:px-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onTouchCancel={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <PhoneFrame className="max-w-[260px] sm:max-w-[320px]" island={false}>
        <div className="relative h-full w-full">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={
                "absolute inset-0 transition-opacity duration-700 " +
                (idx === i ? "opacity-100" : "pointer-events-none opacity-0")
              }
            >
              <Placeholder index={idx} caption={s.caption} image={s.image} />
            </div>
          ))}
        </div>
      </PhoneFrame>

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-border bg-surface/80 p-2 text-foreground/80 backdrop-blur transition hover:bg-surface hover:text-mint sm:-translate-x-12"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border border-border bg-surface/80 p-2 text-foreground/80 backdrop-blur transition hover:bg-surface hover:text-mint sm:translate-x-12"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Caption */}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        <span className="tabular mr-2 text-mint">0{i + 1}</span>
        {slides[i].caption}
      </p>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={
              "h-1.5 rounded-full transition-all " +
              (idx === i ? "w-6 bg-mint" : "w-1.5 bg-foreground/25 hover:bg-foreground/40")
            }
          />
        ))}
      </div>
    </div>
  );
}

function Placeholder({
  index,
  caption,
  image,
}: {
  index: number;
  caption: string;
  image?: string;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={caption}
        loading={index === 0 ? "eager" : "lazy"}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-surface-elevated to-background p-4 pt-10">
      <div className="tabular mb-2 flex items-center justify-between px-1 text-[10px] text-muted-foreground">
        <span>9:41</span>
        <span>Screen {index + 1}</span>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-mint/30 bg-mint/[0.04] p-4 text-center">
        <div className="tabular text-[10px] uppercase tracking-[0.2em] text-mint">
          Screenshot Placeholder
        </div>
        <div className="text-xs text-muted-foreground">{caption}</div>
        <div className="tabular text-[10px] text-muted-foreground/70">
          9 : 19.5 · drop your PNG here
        </div>
      </div>
    </div>
  );
}
