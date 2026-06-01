import type { Metadata } from "next";
import { categories, getToolsByCategory } from "@/data/tools";
import { ToolCard } from "@/components/shared/tool-card";
import { AdSlot } from "@/components/shared/ad-slot";

export const metadata: Metadata = { title: "All Image Tools", description: "Browse compression, conversion, editing, PDF, and AI image tools." };

export default function ToolsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Tool directory</p><h1 className="mt-3 text-5xl font-black tracking-tight">All image tools, grouped by workflow</h1><p className="mt-5 text-muted-foreground">Find compression, conversion, editing, PDF, and AI tools instantly.</p></div>
      <AdSlot label="Inline" className="mt-10" />
      <div className="mt-12 space-y-16">{categories.map((category) => <section id={category.toLowerCase()} key={category}><h2 className="text-3xl font-black">{category} tools</h2><div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{getToolsByCategory(category).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div></section>)}</div>
    </main>
  );
}
