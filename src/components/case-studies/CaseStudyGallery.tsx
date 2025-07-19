"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface CaseStudyGalleryType {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

interface CaseStudyGalleryProps {
  data: CaseStudyGalleryType;
}

export default function CaseStudyGallery({ data }: CaseStudyGalleryProps) {
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden">
              <Image 
                src={image.src} 
                alt={image.alt} 
                width={400}
                height={225}
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 