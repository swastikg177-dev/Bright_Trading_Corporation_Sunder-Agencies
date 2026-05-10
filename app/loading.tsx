export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-pulse-soft rounded-[1.75rem] border border-primary/25 bg-primary/10 shadow-glow" />
        <p className="font-display text-sm uppercase tracking-[0.3em] text-primary">Bright Trading</p>
      </div>
    </div>
  );
}
