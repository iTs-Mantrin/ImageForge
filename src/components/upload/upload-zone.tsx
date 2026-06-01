"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CloudUpload, ImagePlus } from "lucide-react";
import { toast } from "sonner";
import { cn, formatBytes } from "@/lib/utils";
import { useAppStore } from "@/store/use-app-store";
import type { UploadedAsset } from "@/types/tool";
import { Button } from "@/components/ui/button";

const imageAccept = {
  "image/jpeg": [".jpg", ".jpeg"],
  "image/png": [".png"],
  "image/svg+xml": [".svg"],
  "image/webp": [".webp"],
  "image/gif": [".gif"],
  "image/bmp": [".bmp"],
  "image/tiff": [".tif", ".tiff"],
  "image/avif": [".avif"]
};

export function UploadZone({ multiple = true, acceptsPdf = false, compact = false }: { multiple?: boolean; acceptsPdf?: boolean; compact?: boolean }) {
  const addFiles = useAppStore((state) => state.addFiles);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const assets: UploadedAsset[] = acceptedFiles.map((file) => ({
      id: `${file.name}-${file.size}-${crypto.randomUUID()}`,
      file,
      previewUrl: URL.createObjectURL(file),
      progress: 100,
      status: "ready"
    }));
    addFiles(assets);
    if (assets.length) toast.success("Upload ready", { description: `${assets.length} file${assets.length === 1 ? "" : "s"} added for processing.` });
  }, [addFiles]);

  const { getRootProps, getInputProps, isDragActive, fileRejections, open } = useDropzone({
    onDrop,
    accept: acceptsPdf ? { ...imageAccept, "application/pdf": [".pdf"] } : imageAccept,
    multiple,
    maxSize: 60 * 1024 * 1024,
    noClick: true
  });

  if (fileRejections.length) {
    const first = fileRejections[0];
    toast.error("Invalid file", { description: `${first.file.name}: ${first.errors[0]?.message ?? "Unsupported file"}` });
  }

  return (
    <div {...getRootProps()} className={cn("relative overflow-hidden rounded-[2rem] border border-dashed border-primary/35 bg-primary/5 p-8 text-center transition", isDragActive && "scale-[1.01] border-primary bg-primary/10", compact ? "p-5" : "min-h-72") }>
      <input {...getInputProps()} aria-label="Upload image files" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,var(--primary),transparent_18rem)] opacity-10" />
      <div className="mx-auto flex size-18 items-center justify-center rounded-3xl bg-background shadow-xl"><CloudUpload className="size-8 text-primary" /></div>
      <h3 className="mt-5 text-2xl font-black tracking-tight">Drop images here</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">Supports JPG, PNG, SVG, WEBP, GIF, BMP, TIFF, AVIF{acceptsPdf ? ", and PDF" : ""}. Upload {multiple ? "one file or a full batch" : "a single file"} up to {formatBytes(60 * 1024 * 1024)} each.</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row"><Button onClick={open}><ImagePlus className="size-4" />Choose files</Button><span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">drag · validate · preview</span></div>
    </div>
  );
}
