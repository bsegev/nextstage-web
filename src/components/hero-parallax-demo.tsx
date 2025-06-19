"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "AI Podcast Platform",
    link: "/case-studies/ai-podcast-platform",
    thumbnail: "/images/showcase/ai-podcast-mockup.jpg",
  },
  {
    title: "Digital Banking Platform",
    link: "/case-studies/digital-banking-platform",
    thumbnail: "/images/showcase/bank-comparison.png",
  },
  {
    title: "Crypto Investment Platform",
    link: "/case-studies/crypto-investment-platform",
    thumbnail: "/images/showcase/crypto-carousel.png",
  },
  {
    title: "Energy Trading Platform",
    link: "/case-studies/energy-trading-platform",
    thumbnail: "/images/showcase/energy-comparison.jpg",
  },
  {
    title: "Photography Portfolio",
    link: "/case-studies/photography-portfolio",
    thumbnail: "/images/showcase/photographer-portfolio.png",
  },
  {
    title: "SparrowPark Development",
    link: "/case-studies/sparrowpark-development",
    thumbnail: "/images/showcase/sp_deck.jpg",
  },
  {
    title: "Health & Wellness App",
    link: "/case-studies/health-wellness-app",
    thumbnail: "/images/showcase/weight-loss-comparison.png",
  },
  {
    title: "One Signal Platform",
    link: "#",
    thumbnail: "/images/showcase/1sp-bg.jpg",
  },
  {
    title: "Strategic Consulting",
    link: "#",
    thumbnail: "/images/strategy-hero.png",
  },
  {
    title: "Brand Identity System",
    link: "#",
    thumbnail: "/images/brand-design.png",
  },
  {
    title: "Tech Innovation Lab",
    link: "#",
    thumbnail: "/images/tech-innovation.png",
  },
  {
    title: "Growth Marketing System",
    link: "#",
    thumbnail: "/images/growth-marketing-hero-bg-2.png",
  },
  {
    title: "Platform Development",
    link: "#",
    thumbnail: "/images/tech-innovation-hero-bg.png",
  },
  {
    title: "Digital Transformation",
    link: "#",
    thumbnail: "/images/approach-hero-bg.png",
  },
  {
    title: "Innovation Consulting",
    link: "#",
    thumbnail: "/images/innovation-labs.png",
  },
]; 