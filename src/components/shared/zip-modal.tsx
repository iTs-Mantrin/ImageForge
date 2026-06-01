"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Archive, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ZipModal({ open, onOpenChange, progress }: { open: boolean; onOpenChange: (open: boolean) => void; progress: number }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm" />
        <Dialog.Content className="glass-panel fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between"><Dialog.Title className="flex items-center gap-2 text-xl font-bold"><Archive className="size-5 text-primary" /> ZIP archive</Dialog.Title><Dialog.Close asChild><Button variant="ghost" size="icon"><X className="size-4" /></Button></Dialog.Close></div>
          <Dialog.Description className="mt-3 text-sm leading-6 text-muted-foreground">Packaging your processed files. Estimated archive size updates once the backend returns output metadata.</Dialog.Description>
          <div className="mt-6 space-y-3"><Progress value={progress} /><div className="flex justify-between text-xs text-muted-foreground"><span>{progress < 100 ? "Preparing files" : "Ready to download"}</span><span>{Math.round(progress)}%</span></div></div>
          <Button className="mt-6 w-full" disabled={progress < 100}>Download ZIP</Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
