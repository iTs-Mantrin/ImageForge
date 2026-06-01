import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms", description: "ImageForge terms placeholder for future SaaS launch." };

export default function TermsPage() {
  return <main className="mx-auto max-w-3xl px-4 py-20"><h1 className="text-5xl font-black">Terms</h1><p className="mt-6 leading-8 text-muted-foreground">These terms are ready for legal review before launching subscriptions, cloud storage, and team collaboration features.</p></main>;
}
