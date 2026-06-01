import type { LucideIcon } from "lucide-react";

export type ToolCategory = "Compression" | "Conversion" | "Editing" | "PDF" | "AI";

export type ToolMode =
  | "compress"
  | "convert"
  | "resize"
  | "crop"
  | "rotate"
  | "watermark"
  | "image-pdf"
  | "pdf-image"
  | "background"
  | "enhance";

export type ToolDefinition = {
  slug: string;
  name: string;
  shortName: string;
  category: ToolCategory;
  mode: ToolMode;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  popular?: boolean;
  acceptsPdf?: boolean;
  searchTerms: string[];
};

export type UploadedAsset = {
  id: string;
  file: File;
  previewUrl: string;
  progress: number;
  status: "queued" | "uploading" | "ready" | "processing" | "done" | "failed";
  error?: string;
};

export type ThemePreference = "light" | "dark" | "system";
