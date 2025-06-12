"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TransformationTicker() {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background relative overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-6 sm:mb-8 lg:mb-12">
        <div className="text-center">
          <div className="mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm font-medium text-foreground/60 tracking-wide uppercase">
            <span>Track Record</span>
          </div>
          
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-3 sm:mb-4 lg:mb-6 text-foreground">
            <span className="bg-gradient-to-r from-obsidian via-accent via-accent to-obsidian dark:from-bone dark:via-accent dark:to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Recently Deployed
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-foreground/75 font-light max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            Real transformations. Real timelines. Real results.
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

// Demo data - optimized for mobile readability
const transformations = [
  {
    quote: "B2C retail brand launch: Strategy to first purchase in 7 days",
    name: "E-commerce Startup",
    title: "Brand + Strategy + Systems",
  },
  {
    quote: "SaaS platform rebuild: 3x faster performance in 30 days",
    name: "Tech Company",
    title: "Strategy + Systems + Technology",
  },
  {
    quote: "Fintech MVP: Concept to first user transaction in 25 days",
    name: "Financial Services",
    title: "Strategy + Design + Technology",
  },
  {
    quote: "Enterprise rebrand: Complete identity to market rollout in 4 weeks",
    name: "Fortune 500",
    title: "Brand + Strategy + Design",
  },
  {
    quote: "E-commerce transformation: 200% conversion uplift in 28 days",
    name: "Retail Platform",
    title: "Strategy + Design + Systems",
  },
  {
    quote: "B2B marketplace: Strategy to live platform in 35 days",
    name: "SaaS Startup",
    title: "Strategy + Technology + Systems",
  },
  {
    quote: "Digital product launch: Idea to 1,000 users in 30 days",
    name: "Consumer App",
    title: "Brand + Design + Technology",
  },
]; 