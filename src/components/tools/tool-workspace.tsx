"use client";

import { useMemo, useState } from "react";
import { ArrowDownToLine, Crop, FileText, FlipHorizontal, Image as ImageIcon, Layers, Move, RotateCcw, SlidersHorizontal, Sparkles } from "lucide-react";
import { toast } from "sonner";
import type { ToolDefinition, UploadedAsset } from "@/types/tool";
import { useAppStore } from "@/store/use-app-store";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { UploadZone } from "@/components/upload/upload-zone";
import { FileCard } from "@/components/upload/file-card";
import { PreviewModal } from "@/components/preview/preview-modal";
import { CompareSlider } from "@/components/preview/compare-slider";
import { DownloadButton } from "@/components/shared/download-button";
import { ZipModal } from "@/components/shared/zip-modal";
import { AdSlot } from "@/components/shared/ad-slot";

type ClientTool = Omit<ToolDefinition, "icon">;

export function ToolWorkspace({ tool }: { tool: ClientTool }) {
  const files = useAppStore((state) => state.uploadedFiles);
  const setProcessing = useAppStore((state) => state.setProcessing);
  const processing = useAppStore((state) => state.processing);
  const [preview, setPreview] = useState<UploadedAsset | undefined>();
  const [zipOpen, setZipOpen] = useState(false);
  const relevantFiles = files;
  const actionLabel = useMemo(() => {
    if (tool.mode === "compress") return "Compress images";
    if (tool.mode === "convert") return "Convert images";
    if (tool.mode === "background") return "Remove background";
    if (tool.mode === "enhance") return "Enhance image";
    if (tool.mode === "image-pdf") return "Create PDF";
    if (tool.mode === "pdf-image") return "Convert PDF";
    return "Apply edits";
  }, [tool.mode]);

  const simulateProcessing = () => {
    setProcessing({ activeTool: tool.slug, isProcessing: true, zipProgress: 28, downloadReady: false });
    toast.loading("Processing started", { id: "process", description: "The future API workflow is represented in this frontend state." });
    window.setTimeout(() => setProcessing({ zipProgress: 72 }), 500);
    window.setTimeout(() => {
      setProcessing({ isProcessing: false, zipProgress: 100, downloadReady: true });
      toast.success(`${tool.shortName} completed`, { id: "process", description: "Download controls are ready." });
    }, 950);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
      <main className="space-y-6">
        <UploadZone multiple={!tool.acceptsPdf} acceptsPdf={tool.acceptsPdf} />
        {relevantFiles.length ? <div className="grid gap-3 md:grid-cols-2">{relevantFiles.map((asset) => <FileCard key={asset.id} asset={asset} onPreview={setPreview} />)}</div> : null}
        <ToolControls tool={tool} />
        <Card className="p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-xl font-bold">Output workflow</h2><p className="mt-1 text-sm text-muted-foreground">Progress, retry, ZIP packaging, and download-ready states are wired for API integration.</p></div><Button onClick={simulateProcessing}>{actionLabel}</Button></div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-muted/55 p-4"><p className="text-sm text-muted-foreground">Processing</p><p className="mt-1 text-2xl font-black">{processing.isProcessing ? "Active" : processing.downloadReady ? "Done" : "Idle"}</p></div>
            <div className="rounded-2xl bg-muted/55 p-4"><p className="text-sm text-muted-foreground">Estimated savings</p><p className="mt-1 text-2xl font-black text-primary">42%</p></div>
            <div className="rounded-2xl bg-muted/55 p-4"><p className="text-sm text-muted-foreground">ZIP progress</p><Progress value={processing.zipProgress} className="mt-3" /></div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3"><DownloadButton label="Download result" /><Button variant="outline" onClick={() => setZipOpen(true)}><ArrowDownToLine className="size-4" />Prepare ZIP</Button></div>
        </Card>
      </main>
      <aside className="space-y-6">
        <AdSlot label="Sidebar" />
        <Card className="p-6"><h2 className="text-xl font-bold">Preview system</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Fullscreen previews include zoom, format, file size, and compression metadata. Compare slider supports visual QA for compression and AI enhancement.</p><div className="mt-5"><CompareSlider /></div></Card>
        <AdSlot label="Inline" />
      </aside>
      <PreviewModal asset={preview} onClose={() => setPreview(undefined)} />
      <ZipModal open={zipOpen} onOpenChange={setZipOpen} progress={processing.zipProgress} />
    </div>
  );
}

function ToolControls({ tool }: { tool: ClientTool }) {
  if (tool.mode === "compress") return <ControlCard icon={<SlidersHorizontal className="size-5" />} title="Compression level"><input type="range" min="1" max="100" defaultValue="72" className="w-full accent-[var(--primary)]" /><div className="mt-3 flex justify-between text-xs text-muted-foreground"><span>Smaller file</span><span>Higher quality</span></div></ControlCard>;
  if (tool.mode === "convert") return <ControlCard icon={<ImageIcon className="size-5" />} title="Output format"><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{["JPG", "PNG", "WEBP", "AVIF"].map((format) => <Button key={format} variant="outline">{format}</Button>)}</div></ControlCard>;
  if (tool.mode === "resize") return <ControlCard icon={<Move className="size-5" />} title="Resize dimensions"><div className="grid gap-3 sm:grid-cols-4"><input className="rounded-2xl border border-input bg-background/60 px-4 py-3" placeholder="Width" /><input className="rounded-2xl border border-input bg-background/60 px-4 py-3" placeholder="Height" /><input className="rounded-2xl border border-input bg-background/60 px-4 py-3" placeholder="%" /><Button variant="outline">Lock ratio</Button></div><div className="mt-4 flex flex-wrap gap-2">{["Instagram", "YouTube", "LinkedIn", "Hero banner"].map((preset) => <Button key={preset} variant="secondary" size="sm">{preset}</Button>)}</div></ControlCard>;
  if (tool.mode === "crop") return <ControlCard icon={<Crop className="size-5" />} title="Crop ratios"><div className="grid grid-cols-2 gap-3 sm:grid-cols-5">{["Free", "1:1", "16:9", "4:3", "9:16"].map((ratio) => <Button key={ratio} variant="outline">{ratio}</Button>)}</div><input type="range" min="1" max="200" defaultValue="100" className="mt-5 w-full accent-[var(--primary)]" /></ControlCard>;
  if (tool.mode === "rotate") return <ControlCard icon={<RotateCcw className="size-5" />} title="Rotate & flip"><div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{["Rotate left", "Rotate right", "Flip H", "Flip V"].map((action) => <Button key={action} variant="outline"><FlipHorizontal className="size-4" />{action}</Button>)}</div></ControlCard>;
  if (tool.mode === "watermark") return <ControlCard icon={<Layers className="size-5" />} title="Watermark controls"><div className="grid gap-3 sm:grid-cols-3"><input className="rounded-2xl border border-input bg-background/60 px-4 py-3" placeholder="Watermark text" /><select className="rounded-2xl border border-input bg-background/60 px-4 py-3"><option>Editorial Serif</option><option>Modern Sans</option></select><input type="range" min="0" max="100" defaultValue="45" className="accent-[var(--primary)]" /></div></ControlCard>;
  if (tool.mode === "image-pdf" || tool.mode === "pdf-image") return <ControlCard icon={<FileText className="size-5" />} title="PDF workflow"><div className="grid gap-3 sm:grid-cols-3"><Button variant="outline">Drag to reorder</Button><Button variant="outline">Preview pages</Button><Button variant="outline">PNG/JPG output</Button></div></ControlCard>;
  return <ControlCard icon={<Sparkles className="size-5" />} title="AI options"><div className="grid gap-3 sm:grid-cols-3">{["Detail boost", "Color repair", "2x upscale"].map((option) => <Button key={option} variant="outline">{option}</Button>)}</div></ControlCard>;
}

function ControlCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return <Card className="p-6"><h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-foreground">{icon}{title}</h2>{children}</Card>;
}
