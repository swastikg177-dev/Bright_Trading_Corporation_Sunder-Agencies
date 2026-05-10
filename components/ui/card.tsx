import * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-card/70 p-6 shadow-glass backdrop-blur-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
