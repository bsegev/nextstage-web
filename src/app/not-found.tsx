import { NextStageNavbar } from "@/components/layout";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-obsidian">
      <NextStageNavbar />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-bone mb-6">
            Page Not Found
          </h1>
          <p className="text-lg text-bone/60 mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-accent text-obsidian rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
} 