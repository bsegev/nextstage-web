"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TransformationTicker() {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-6 sm:mb-8 lg:mb-12">
        <div className="text-center">
          <div className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-sm font-medium text-foreground/60 tracking-wide uppercase">
            <span>Real Timelines</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-3 sm:mb-4 lg:mb-6 text-foreground">
            <span className="bg-gradient-to-r from-obsidian via-accent via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Recently Shipped
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-foreground/75 font-light max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            Built. Launched. Delivered.
          </p>
        </div>
      </div>

      {/* Infinite moving cards */}
      <div className="flex justify-center">
        <InfiniteMovingCards
          items={transformations}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="py-4 sm:py-6 lg:py-8"
        />
      </div>
    </div>
  );
}

// Real client transformations
const transformations = [
  {
    quote: "From name and logo to multi-million dollar funding in 30 days",
    name: "SparrowPark Development",
    title: "Brand + Strategy + Technology",
  },
  {
    quote: "AI podcast platform: 300% increase in user engagement in 6 weeks",
    name: "AI Odyssey",
    title: "Strategy + Design + Technology",
  },
  {
    quote: "Digital bank transformation: 5x client growth, 8x assets increase",
    name: "Bank DIB",
    title: "Strategy + Brand + Systems",
  },
  {
    quote: "Complete website and brand system launch in 4 weeks",
    name: "Grid Aero",
    title: "Brand + Design + Technology",
  },
  {
    quote: "Strategic rebrand and market positioning in under 1 month",
    name: "Eccan",
    title: "Brand + Strategy + Systems",
  },
  {
    quote: "Digital platform build and go-to-market strategy in 6 weeks",
    name: "WowWee",
    title: "Strategy + Technology + Growth",
  },
  {
    quote: "Brand identity to market launch in record time",
    name: "SimilarWeb",
    title: "Brand + Strategy + Design",
  },
]; 