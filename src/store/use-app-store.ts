"use client";

import { create } from "zustand";
import type { ThemePreference, UploadedAsset } from "@/types/tool";

type ProcessingState = {
  activeTool?: string;
  isProcessing: boolean;
  zipProgress: number;
  downloadReady: boolean;
};

type AppState = {
  uploadedFiles: UploadedAsset[];
  processing: ProcessingState;
  theme: ThemePreference;
  addFiles: (files: UploadedAsset[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
  updateFile: (id: string, patch: Partial<UploadedAsset>) => void;
  setProcessing: (patch: Partial<ProcessingState>) => void;
  setTheme: (theme: ThemePreference) => void;
};

export const useAppStore = create<AppState>((set, get) => ({
  uploadedFiles: [],
  processing: { isProcessing: false, zipProgress: 0, downloadReady: false },
  theme: "system",
  addFiles: (files) => set({ uploadedFiles: [...get().uploadedFiles, ...files] }),
  removeFile: (id) => {
    const target = get().uploadedFiles.find((file) => file.id === id);
    if (target) URL.revokeObjectURL(target.previewUrl);
    set({ uploadedFiles: get().uploadedFiles.filter((file) => file.id !== id) });
  },
  clearFiles: () => {
    get().uploadedFiles.forEach((file) => URL.revokeObjectURL(file.previewUrl));
    set({ uploadedFiles: [] });
  },
  updateFile: (id, patch) => set({ uploadedFiles: get().uploadedFiles.map((file) => (file.id === id ? { ...file, ...patch } : file)) }),
  setProcessing: (patch) => set({ processing: { ...get().processing, ...patch } }),
  setTheme: (theme) => set({ theme })
}));
