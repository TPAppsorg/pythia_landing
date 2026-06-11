import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
  /** Render the Dynamic Island cutout. Disable for screenshots with a baked-in status bar. */
  island?: boolean;
}

/** Modern bezel-less iPhone frame, ~9:19.5 aspect ratio. */
export function PhoneFrame({ children, className, island = true }: Props) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[320px] aspect-[9/19.5]", className)}>
      {/* Outer body */}
      <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-neutral-800 to-neutral-950 p-[3px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
        {/* Inner bezel */}
        <div className="relative h-full w-full overflow-hidden rounded-[42px] bg-black">
          {/* Screen */}
          <div className="absolute inset-[6px] overflow-hidden rounded-[36px] bg-background">
            {children}
          </div>
          {/* Dynamic island */}
          {island && (
            <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
          )}
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute -left-[2px] top-[18%] h-10 w-[3px] rounded-l bg-neutral-700" />
      <div className="absolute -left-[2px] top-[28%] h-16 w-[3px] rounded-l bg-neutral-700" />
      <div className="absolute -left-[2px] top-[42%] h-16 w-[3px] rounded-l bg-neutral-700" />
      <div className="absolute -right-[2px] top-[30%] h-24 w-[3px] rounded-r bg-neutral-700" />
    </div>
  );
}
