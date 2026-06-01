import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Sora } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const instrument = Instrument_Serif({ subsets: ["latin"], variable: "--font-instrument-serif", weight: "400" });

const siteUrl = "https://imageforge.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ImageForge — Compress, Convert & Edit Images Instantly", template: "%s | ImageForge" },
  description: "A premium universal image toolkit for compression, conversion, editing, PDF workflows, AI image tools, previews, and ZIP downloads.",
  keywords: ["image compressor", "png to jpg", "resize image", "background remover", "image to pdf", "photo editor"],
  openGraph: { title: "ImageForge", description: "Compress, convert, edit, preview, and package images in a premium web workflow.", url: siteUrl, siteName: "ImageForge", type: "website" },
  twitter: { card: "summary_large_image", title: "ImageForge", description: "Modern image tools for high-traffic SaaS workflows." },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light dark", themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f8f6ef" }, { media: "(prefers-color-scheme: dark)", color: "#09111f" }] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${instrument.variable} grain antialiased`}>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
