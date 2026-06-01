"use client";

import Image from "next/image";
import { RefreshCw, Trash2 } from "lucide-react";
import { toast } from "sonner";
import type { UploadedAsset } from "@/types/tool";
import { formatBytes } from "@/lib/utils";
import { useAppStore } from "@/store/use-app-store";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function FileCard({ asset, onPreview }: { asset: UploadedAsset; onPreview?: (asset: UploadedAsset) => void }) {
  const removeFile = useAppStore((state) => state.removeFile);
  const updateFile = useAppStore((state) => state.updateFile);
  return (
    <div className="glass-panel flex gap-4 rounded-3xl p-3">
      <button className="relative size-20 overflow-hidden rounded-2xl bg-muted" onClick={() => onPreview?.(asset)} aria-label={`Preview ${asset.file.name}`}>
        {asset.file.type.startsWith("image/") ? <Image src={asset.previewUrl} alt="" fill className="object-cover" unoptimized /> : <span className="grid h-full place-items-center text-xs font-bold">PDF</span>}
      </button>
      <div className="min-w-0 flex-1 py-1">
        <p className="truncate text-sm font-semibold">{asset.file.name}</p>
        <p className="mt-1 text-xs text-muted-foreground">{formatBytes(asset.file.size)} · {asset.status}</p>
        <Progress value={asset.progress} className="mt-3" />
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="ghost" size="icon" aria-label="Retry file" onClick={() => { updateFile(asset.id, { status: "ready", progress: 100, error: undefined }); toast.info("File queued again"); }}><RefreshCw className="size-4" /></Button>
        <Button variant="ghost" size="icon" aria-label="Remove file" onClick={() => removeFile(asset.id)}><Trash2 className="size-4" /></Button>
      </div>
    </div>
  );
}
