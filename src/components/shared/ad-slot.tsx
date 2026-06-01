import { cn } from "@/lib/utils";

export function AdSlot({ label, className }: { label: string; className?: string }) {
  return (
    <aside className={cn("rounded-3xl border border-dashed border-border bg-muted/35 p-4 text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground", className)} aria-label={`${label} advertisement space`}>
      {label} ad space
    </aside>
  );
}
