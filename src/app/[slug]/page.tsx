import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { getToolBySlug, tools } from "@/data/tools";
import { ToolWorkspace } from "@/components/tools/tool-workspace";
import { Badge } from "@/components/ui/badge";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "Tool not found" };
  return {
    title: tool.name,
    description: tool.longDescription,
    alternates: { canonical: `/${tool.slug}` },
    openGraph: { title: `${tool.name} | ImageForge`, description: tool.description, url: `/${tool.slug}`, type: "website" },
    twitter: { card: "summary_large_image", title: tool.name, description: tool.description }
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();
  const { icon: _icon, ...clientTool } = tool;
  const schema = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: tool.name, applicationCategory: "MultimediaApplication", operatingSystem: "Web", description: tool.longDescription, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Badge className="border-primary/30 bg-primary/10 text-primary">{tool.category}</Badge>
        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">{tool.name}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{tool.longDescription}</p>
      </section>
      <ToolWorkspace tool={clientTool} />
      <Script id={`${tool.slug}-schema`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
