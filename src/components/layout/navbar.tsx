"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Menu, Moon, Search, Sun, WandSparkles, X } from "lucide-react";
import { categories, tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return tools.filter((tool) => [tool.name, tool.description, ...tool.searchTerms].join(" ").toLowerCase().includes(normalized)).slice(0, 6);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/78 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="ImageForge home">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-foreground text-background shadow-xl"><WandSparkles className="size-5" /></span>
          <span className="text-lg font-black tracking-tight">ImageForge</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          <Link className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground" href="/tools">All tools</Link>
          {categories.map((category) => (
            <a key={category} className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-muted hover:text-foreground" href={`/tools#${category.toLowerCase()}`}>{category}</a>
          ))}
        </nav>
        <div className="relative ml-auto hidden w-full max-w-sm md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search compress, PNG to JPG..." className="pl-10" aria-label="Search image tools" />
          {results.length > 0 ? (
            <div className="glass-panel absolute mt-2 w-full overflow-hidden rounded-3xl p-2">
              {results.map((tool) => <Link key={tool.slug} href={`/${tool.slug}`} className="flex items-center gap-3 rounded-2xl p-3 text-sm hover:bg-muted" onClick={() => setQuery("")}><tool.icon className="size-4 text-primary" />{tool.name}</Link>)}
            </div>
          ) : null}
        </div>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>{resolvedTheme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}</Button>
        <Button className="lg:hidden" variant="ghost" size="icon" aria-label="Toggle mobile menu" onClick={() => setOpen((value) => !value)}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</Button>
      </div>
      <div className={cn("border-t border-border px-4 py-4 lg:hidden", open ? "block" : "hidden")}>
        <div className="mx-auto grid max-w-7xl gap-2">
          <Link href="/tools" className="rounded-2xl p-3 font-semibold hover:bg-muted" onClick={() => setOpen(false)}>All image tools</Link>
          {tools.slice(0, 8).map((tool) => <Link href={`/${tool.slug}`} key={tool.slug} className="rounded-2xl p-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setOpen(false)}>{tool.name}</Link>)}
        </div>
      </div>
    </header>
  );
}
