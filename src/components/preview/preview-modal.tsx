"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ZoomIn, ZoomOut, X } from "lucide-react";
import { useState } from "react";
import type { UploadedAsset } from "@/types/tool";
import { formatBytes } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PreviewModal({ asset, onClose }: { asset?: UploadedAsset; onClose: () => void }) {
  const [zoom, setZoom] = useState(1);
  return (
    <Dialog.Root open={Boolean(asset)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-4 z-50 grid rounded-3xl bg-background p-4 shadow-2xl md:inset-8 md:grid-cols-[1fr_320px]">
          <Dialog.Title className="sr-only">Image preview</Dialog.Title>
          <div className="checkerboard relative grid min-h-[50vh] place-items-center overflow-hidden rounded-2xl">
            {asset?.file.type.startsWith("image/") ? <Image src={asset.previewUrl} alt={asset.file.name} width={900} height={700} unoptimized className="max-h-full w-auto object-contain transition-transform" style={{ transform: `scale(${zoom})` }} /> : <div className="text-3xl font-black">PDF Preview</div>}
          </div>
          <aside className="p-5">
            <div className="flex items-center justify-between"><h3 className="text-xl font-bold">Metadata</h3><Dialog.Close asChild><Button variant="ghost" size="icon"><X className="size-4" /></Button></Dialog.Close></div>
            <dl className="mt-6 grid gap-4 text-sm">
              <div><dt className="text-muted-foreground">File</dt><dd className="mt-1 break-all font-semibold">{asset?.file.name}</dd></div>
              <div><dt className="text-muted-foreground">Size</dt><dd className="mt-1 font-semibold">{asset ? formatBytes(asset.file.size) : "—"}</dd></div>
              <div><dt className="text-muted-foreground">Format</dt><dd className="mt-1 font-semibold">{asset?.file.type || "Unknown"}</dd></div>
              <div><dt className="text-muted-foreground">Compression estimate</dt><dd className="mt-1 font-semibold text-primary">42% smaller after processing</dd></div>
            </dl>
            <div className="mt-8 flex gap-2"><Button variant="outline" onClick={() => setZoom((value) => Math.max(0.5, value - 0.2))}><ZoomOut className="size-4" />Zoom out</Button><Button variant="outline" onClick={() => setZoom((value) => Math.min(2.5, value + 0.2))}><ZoomIn className="size-4" />Zoom in</Button></div>
          </aside>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
