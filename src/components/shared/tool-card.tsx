import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ToolDefinition } from "@/types/tool";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ToolCard({ tool }: { tool: ToolDefinition }) {
  return (
    <Link href={`/${tool.slug}`} className="group block h-full transition-transform duration-300 hover:-translate-y-1.5">
      <Card className="h-full overflow-hidden p-6 transition hover:border-primary/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex size-13 items-center justify-center rounded-2xl bg-primary/10 text-primary"><tool.icon className="size-6" /></div>
          <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
        </div>
        <div className="mt-8 flex items-center gap-2"><h3 className="text-xl font-bold tracking-tight">{tool.name}</h3>{tool.popular ? <Badge>Popular</Badge> : null}</div>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{tool.description}</p>
      </Card>
    </Link>
  );
}
