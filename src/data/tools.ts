import {
  BadgePercent,
  Bot,
  Crop,
  FileArchive,
  FileImage,
  FileOutput,
  ImageDown,
  ImagePlus,
  Images,
  Maximize2,
  RefreshCcw,
  RotateCw,
  Sparkles,
  Stamp,
  Wand2
} from "lucide-react";
import type { ToolCategory, ToolDefinition } from "@/types/tool";

export const tools: ToolDefinition[] = [
  {
    slug: "compress-image",
    name: "Compress Image",
    shortName: "Compress",
    category: "Compression",
    mode: "compress",
    description: "Shrink JPG, PNG, WEBP, AVIF and GIF files while protecting visual quality.",
    longDescription: "Upload one image or an entire batch, choose a compression level, compare quality, and prepare single-file or ZIP downloads.",
    icon: BadgePercent,
    popular: true,
    searchTerms: ["compress image", "compress jpg", "compress png", "tiny png", "reduce size"]
  },
  {
    slug: "compress-jpg",
    name: "Compress JPG",
    shortName: "Compress JPG",
    category: "Compression",
    mode: "compress",
    description: "Optimize large JPEG photos for web, email, and social posts.",
    longDescription: "Balance JPEG quality and size with batch upload previews, percentage savings, and ZIP-ready downloads.",
    icon: FileArchive,
    searchTerms: ["compress jpg", "jpeg optimizer", "photo size"]
  },
  {
    slug: "compress-png",
    name: "Compress PNG",
    shortName: "Compress PNG",
    category: "Compression",
    mode: "compress",
    description: "Reduce PNG artwork and screenshots without losing sharp edges.",
    longDescription: "A focused PNG compression interface with previews, transparent-background checks, and export states ready for backend processing.",
    icon: ImageDown,
    searchTerms: ["compress png", "png optimizer", "transparent png"]
  },
  {
    slug: "png-to-jpg",
    name: "PNG to JPG",
    shortName: "PNG to JPG",
    category: "Conversion",
    mode: "convert",
    description: "Convert transparent PNGs into lightweight JPG images.",
    longDescription: "Choose JPG quality, queue multiple PNG assets, inspect conversion status, and download individual results or a ZIP archive.",
    icon: RefreshCcw,
    popular: true,
    searchTerms: ["png to jpg", "convert png", "transparent to jpg"]
  },
  {
    slug: "jpg-to-png",
    name: "JPG to PNG",
    shortName: "JPG to PNG",
    category: "Conversion",
    mode: "convert",
    description: "Create crisp PNG exports from JPG and JPEG photos.",
    longDescription: "A conversion workspace for changing JPG inputs into PNG outputs with live progress and download-ready states.",
    icon: RefreshCcw,
    searchTerms: ["jpg to png", "jpeg to png", "convert jpg"]
  },
  {
    slug: "svg-to-png",
    name: "SVG to PNG",
    shortName: "SVG to PNG",
    category: "Conversion",
    mode: "convert",
    description: "Rasterize SVG icons, logos, and illustrations into PNG images.",
    longDescription: "Set an output format, preview vector assets, and prepare high-resolution PNG or JPG exports for API conversion.",
    icon: FileOutput,
    popular: true,
    searchTerms: ["svg to png", "svg converter", "logo to png"]
  },
  {
    slug: "webp-converter",
    name: "WEBP Converter",
    shortName: "WEBP",
    category: "Conversion",
    mode: "convert",
    description: "Convert WEBP to JPG/PNG or prepare JPG assets for WEBP.",
    longDescription: "A flexible format-conversion interface that can target WEBP, JPG, PNG, and AVIF in future backend workflows.",
    icon: Images,
    searchTerms: ["webp converter", "webp to jpg", "jpg to webp"]
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    shortName: "Resize",
    category: "Editing",
    mode: "resize",
    description: "Resize photos by width, height, percentage, or social media preset.",
    longDescription: "Maintain aspect ratio, choose a platform preset, and preview output dimensions before sending the job to a backend service.",
    icon: Maximize2,
    popular: true,
    searchTerms: ["resize image", "resize photo", "image dimensions", "instagram size"]
  },
  {
    slug: "crop-image",
    name: "Crop Image",
    shortName: "Crop",
    category: "Editing",
    mode: "crop",
    description: "Crop images freely or with popular aspect ratios.",
    longDescription: "Use zoom controls, drag handles, and fixed ratios like 1:1, 16:9, 4:3, and 9:16 for social-ready crops.",
    icon: Crop,
    searchTerms: ["crop image", "crop photo", "square crop", "16:9 crop"]
  },
  {
    slug: "rotate-image",
    name: "Rotate & Flip Image",
    shortName: "Rotate",
    category: "Editing",
    mode: "rotate",
    description: "Rotate left, rotate right, flip horizontal, or flip vertical.",
    longDescription: "Quickly correct orientation with visible transform controls and non-destructive preview states.",
    icon: RotateCw,
    searchTerms: ["rotate image", "flip photo", "mirror image"]
  },
  {
    slug: "watermark-image",
    name: "Watermark Image",
    shortName: "Watermark",
    category: "Editing",
    mode: "watermark",
    description: "Add text or image watermarks with opacity and position controls.",
    longDescription: "Create branded exports with text inputs, font choices, opacity sliders, image watermark upload, resize controls, and preset positions.",
    icon: Stamp,
    searchTerms: ["watermark", "add logo", "text watermark", "protect photo"]
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    shortName: "Image PDF",
    category: "PDF",
    mode: "image-pdf",
    description: "Combine multiple images into a polished PDF document.",
    longDescription: "Upload images, reorder pages, inspect a PDF preview layout, and prepare a downloadable PDF result.",
    icon: FileImage,
    popular: true,
    searchTerms: ["image to pdf", "jpg to pdf", "png to pdf", "combine images"]
  },
  {
    slug: "pdf-to-image",
    name: "PDF to Image",
    shortName: "PDF Image",
    category: "PDF",
    mode: "pdf-image",
    description: "Turn PDF pages into PNG or JPG preview grids.",
    longDescription: "Upload a PDF, select output format, preview page tiles, and prepare per-page or ZIP downloads.",
    icon: FileOutput,
    acceptsPdf: true,
    searchTerms: ["pdf to image", "pdf to jpg", "pdf to png"]
  },
  {
    slug: "background-remover",
    name: "Background Remover",
    shortName: "Remove BG",
    category: "AI",
    mode: "background",
    description: "Remove image backgrounds and preview transparent output.",
    longDescription: "A polished AI processing interface with upload state, transparent preview surface, loader, and download CTA prepared for a future AI endpoint.",
    icon: Wand2,
    popular: true,
    searchTerms: ["background remover", "remove background", "transparent image", "cutout"]
  },
  {
    slug: "image-enhancer",
    name: "AI Image Enhancer",
    shortName: "Enhance",
    category: "AI",
    mode: "enhance",
    description: "Improve detail, color, sharpness, and upscaling quality.",
    longDescription: "Select enhancement options, quality level, and before/after preview states for a future AI image enhancement backend.",
    icon: Sparkles,
    searchTerms: ["image enhancer", "ai upscale", "improve image", "sharpen photo"]
  },
  {
    slug: "bulk-image-tools",
    name: "Bulk Image Tools",
    shortName: "Bulk Tools",
    category: "AI",
    mode: "enhance",
    description: "Prepare batches for compression, conversion, and AI editing workflows.",
    longDescription: "A scalable batch-workflow surface for future teams, cloud storage, subscriptions, and processing history.",
    icon: Bot,
    searchTerms: ["bulk upload", "batch image", "team image processing"]
  },
  {
    slug: "jpg-to-webp",
    name: "JPG to WEBP",
    shortName: "JPG WEBP",
    category: "Conversion",
    mode: "convert",
    description: "Generate modern WEBP files from JPG photos.",
    longDescription: "A dedicated JPG to WEBP conversion page with format controls, batch previews, and ZIP-ready download UI.",
    icon: ImagePlus,
    searchTerms: ["jpg to webp", "jpeg to webp", "web image"]
  }
];

export const categories: ToolCategory[] = ["Compression", "Conversion", "Editing", "PDF", "AI"];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory) {
  return tools.filter((tool) => tool.category === category);
}

export const popularTools = tools.filter((tool) => tool.popular);
