"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface CaseStudyTestimonialType {
  quote: string;
  author: string;
  title: string;
  company: string;
  image?: string;
}

interface CaseStudyTestimonialProps {
  data: CaseStudyTestimonialType;
}

export default function CaseStudyTestimonial({ data }: CaseStudyTestimonialProps) {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-background dark:bg-obsidian">
      {/* Grid Background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1.5px,transparent_1.5px),linear-gradient(to_bottom,#e4e4e7_1.5px,transparent_1.5px)]",
          "dark:[background-image:linear-gradient(to_right,#404040_1.5px,transparent_1.5px),linear-gradient(to_bottom,#404040_1.5px,transparent_1.5px)]",
          "opacity-35"
        )}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="text-2xl font-light text-foreground/90 mb-8 italic">
          &ldquo;{data.quote}&rdquo;
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          {data.image && (
            <img src={data.image} alt={data.author} className="w-12 h-12 rounded-full" />
          )}
          <div>
            <div className="font-semibold text-foreground">{data.author}</div>
            <div className="text-foreground/60">{data.title}, {data.company}</div>
          </div>
        </div>
      </div>
    </section>
  );
} 