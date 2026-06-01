"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function DownloadButton({ label = "Download" }: { label?: string }) {
  return <Button onClick={() => toast.success("Download ready", { description: "This UI is prepared for the backend download endpoint." })}><Download className="size-4" />{label}</Button>;
}
