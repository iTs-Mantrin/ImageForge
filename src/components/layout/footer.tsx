import Link from "next/link";
import { Globe2, MessageCircle, Rss, WandSparkles } from "lucide-react";
import { categories, popularTools } from "@/data/tools";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2"><span className="flex size-10 items-center justify-center rounded-2xl bg-foreground text-background"><WandSparkles className="size-5" /></span><span className="text-lg font-black">ImageForge</span></div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">A scalable image tools frontend built for compression, conversion, PDF workflows, AI editing, monetization, and future SaaS expansion.</p>
          <div className="mt-5 flex gap-3 text-muted-foreground"><MessageCircle className="size-5" /><Globe2 className="size-5" /><Rss className="size-5" /></div>
        </div>
        <div>
          <h3 className="font-semibold">Popular</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">{popularTools.map((tool) => <Link key={tool.slug} href={`/${tool.slug}`} className="hover:text-foreground">{tool.name}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-semibold">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-muted-foreground">
            <Link href="/tools" className="hover:text-foreground">All tools</Link>
            {categories.map((category) => <a key={category} href={`/tools#${category.toLowerCase()}`} className="hover:text-foreground">{category}</a>)}
            <Link href="/privacy" className="hover:text-foreground">Privacy policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} ImageForge. Built for fast, private image workflows.</div>
    </footer>
  );
}
