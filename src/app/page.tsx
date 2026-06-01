import Link from "next/link";
import { ArrowRight, BadgeCheck, Lock, PackageCheck, Zap } from "lucide-react";
import { popularTools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UploadZone } from "@/components/upload/upload-zone";
import { ToolCard } from "@/components/shared/tool-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { AdSlot } from "@/components/shared/ad-slot";

const features = [
  { icon: Zap, title: "Fast processing", body: "Frontend states are ready for streamed API progress and instant previews." },
  { icon: PackageCheck, title: "Bulk uploads", body: "Batch queues, ZIP packaging, retries, and output cards scale to large workflows." },
  { icon: BadgeCheck, title: "ZIP downloads", body: "Download-ready modals, archive progress, and estimated output size are modeled." },
  { icon: Lock, title: "Privacy protection", body: "Clear UX boundaries prepare private, expiring backend processing flows." }
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_520px] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit border-primary/30 bg-primary/10 text-primary">Premium image SaaS toolkit</Badge>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">Compress, Convert & Edit Images Instantly</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">A production-ready frontend for high-traffic image tools: uploads, previews, compression controls, conversion workflows, PDF tools, AI experiences, ads, SEO, and SaaS expansion.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><Link href="/compress-image">Start compressing <ArrowRight className="size-5" /></Link></Button><Button size="lg" variant="outline" asChild><Link href="/tools">Explore all tools</Link></Button></div>
        </div>
        <div className="mesh-card rounded-[2.25rem] p-3 shadow-2xl"><UploadZone compact /></div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AdSlot label="Header banner" /></div>
      <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Popular tools</p><h2 className="mt-3 text-4xl font-black tracking-tight">Everything image teams use daily</h2></div><Button variant="outline" asChild><Link href="/tools">View all tools</Link></Button></div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{popularTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}</div>
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map((feature) => <Card key={feature.title} className="p-6"><feature.icon className="size-7 text-primary" /><h3 className="mt-5 text-xl font-bold">{feature.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.body}</p></Card>)}</div>
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black tracking-tight">FAQ</h2>
        <Accordion type="single" collapsible className="mt-8 glass-panel rounded-3xl px-6">
          {[
            ["Is image processing implemented?", "This deliverable is the production frontend. Processing controls, upload state, retries, previews, ZIP progress, and download states are ready for Node.js + Express API integration."],
            ["Does it support dark mode?", "Yes. Light, dark, and system preference are supported with localStorage persistence."],
            ["Can I monetize with ads?", "Yes. Header, sidebar, inline, and mobile sticky ad surfaces are reserved without disrupting the workflow."],
            ["Is this SEO-ready?", "The app includes metadata, Open Graph, Twitter cards, JSON-LD, sitemap, and robots support."],
          ].map(([question, answer]) => <AccordionItem key={question} value={question}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}
        </Accordion>
      </AnimatedSection>
      <div className="sticky bottom-3 z-40 mx-auto mb-4 max-w-sm px-4 md:hidden"><AdSlot label="Mobile sticky" className="bg-background/90 backdrop-blur" /></div>
    </main>
  );
}
