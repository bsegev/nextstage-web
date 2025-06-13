"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useSwipeable } from "react-swipeable"

type ShowcaseItem = {
  title: string
  descr: string
  image: string
  bgImage: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Real Estate Developer",
    descr: "PITCH DECK",
    image: "/images/showcase/sp_deck.jpg",
    bgImage: "/images/showcase/sp-bg.jpg"
  },
  {
    title: "Cryptocurrency Platform",
    descr: "DASHBOARD",
    image: "/images/showcase/crypto-carousel.png",
    bgImage: "/images/showcase/crypto-bg.jpg"
  },
  {
    title: "AI Podcast Platform",
    descr: "WEBSITE",
    image: "/images/showcase/ai-podcast-mockup.jpg",
    bgImage: "/images/showcase/ai-podcast-bg.jpg"
  },
  {
    title: "Digital Bank",
    descr: "DASHBOARD",
    image: "/images/showcase/bank-comparison.png",
    bgImage: "/images/showcase/bank-bg.png"
  },
  {
    title: "Energy Platform",
    descr: "DASHBOARD",
    image: "/images/showcase/energy-comparison.jpg",
    bgImage: "/images/showcase/energy-bg.jpg"
  },
  {
    title: "Photography Portfolio",
    descr: "WEBSITE",
    image: "/images/showcase/photographer-portfolio.png",
    bgImage: "/images/showcase/photography-bg.png"
  },
  {
    title: "Health & Wellness",
    descr: "WEBSITE",
    image: "/images/showcase/weight-loss-comparison.png",
    bgImage: "/images/showcase/weight-loss-bg.png"
  }
]

export default function ShowcaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  // Calculate actual animation duration: 900ms + 150ms delay = 1050ms
  const ANIMATION_DURATION = 1050

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
    preventScrollOnSwipe: true,
    trackTouch: true
  })

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const nextIndex = (activeIndex + 1) % showcaseItems.length
    setActiveIndex(nextIndex)
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    const prevIndex = (activeIndex - 1 + showcaseItems.length) % showcaseItems.length
    setActiveIndex(prevIndex)
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'ArrowRight') handleNext()
  }

  return (
    <motion.section 
      ref={sectionRef} 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }
      } : { opacity: 0, scale: 0.98 }}
      className="relative w-full h-[85vh] md:h-[100vh] overflow-hidden bg-obsidian"
      role="region"
      aria-label="Project Showcase Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-6 md:top-10 left-4 md:left-10 text-bone z-10"
      >
        <div className="mb-2 md:mb-4 text-xs sm:text-sm font-medium text-bone/60 tracking-wide uppercase">
          <span>Showcase</span>
        </div>
        
        <h2 className="font-display text-4xl sm:text-3xl md:text-4xl tracking-[-0.02em] leading-[0.9]">
          <span className="bg-gradient-to-r from-bone via-accent to-bone bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
            Recent Projects
          </span>
        </h2>
      </motion.div>

      <div 
        className="relative w-full h-full"
        {...handlers}
      >
        {showcaseItems.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0"
            style={{ pointerEvents: index === activeIndex ? 'auto' : 'none' }}
            role="tabpanel"
            aria-label={`Project: ${item.title}`}
            aria-hidden={index !== activeIndex}
          >
            {/* Background Image with Parallax */}
            <motion.div 
              initial={{ x: index < activeIndex ? "-100%" : "100%" }}
              animate={{ x: index === activeIndex ? "0%" : index < activeIndex ? "-100%" : "100%" }}
              transition={{ 
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0"
            >
              <Image
                src={item.bgImage}
                alt=""
                fill
                className="object-cover opacity-30"
                priority={index === activeIndex}
                sizes="100vw"
                quality={60}
              />
            </motion.div>
            
            {/* Main Image and Text Container */}
            <motion.div
              initial={{ x: index < activeIndex ? "-100%" : "100%" }}
              animate={{ x: index === activeIndex ? "0%" : index < activeIndex ? "-100%" : "100%" }}
              transition={{ 
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="absolute inset-0"
            >
              {/* Main Image */}
              <div className="absolute inset-0 flex items-center justify-center px-4 md:px-0">
                <div className="relative group">
                  {/* Enhanced card with gradient border and effects */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-[2.2rem] blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 via-transparent to-accent/30 rounded-[2.1rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative w-[90vw] md:w-[65vw] h-[50vw] md:h-[34.5vw] rounded-[2rem] overflow-hidden">
                    {/* Background glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5 rounded-[2rem]"></div>
                    
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top rounded-[2rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                      priority={index === activeIndex}
                      sizes="(max-width: 768px) 90vw, 65vw"
                      quality={90}
                    />
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={index === activeIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-20 md:bottom-10 left-4 md:left-10 text-bone z-10"
              >
                <p className="text-sm font-medium tracking-wider mb-2 text-accent">{item.descr}</p>
                <h3 className="font-display text-3xl md:text-3xl mb-3 tracking-[-0.02em]">{item.title}</h3>
                <div className="flex flex-wrap gap-2 max-w-[90vw] md:max-w-[50vw]">
                  {index === 0 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Brand Strategy</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Web Design</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Business Strategy</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Digital Product Development</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Platform Architecture</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Digital Experience Design</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Brand Identity Systems</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Web Design & Development</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Content Systems</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Digital Transformation</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Platform Architecture</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Marketing Design Systems</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Brand Strategy</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Campaign Strategy</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Go-to-Market Planning</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Content Systems</span>
                    </>
                  )}
                  {index === 5 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Web Design & Development</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Digital Experience Design</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Performance Optimization</span>
                    </>
                  )}
                  {index === 6 && (
                    <>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Brand Identity Systems</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Web Design & Development</span>
                      <span className="text-[13px] px-3 py-0.5 rounded-full bg-accent/20 text-accent">Marketing Technology</span>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-10 right-4 md:right-10 flex space-x-3"
      >
        <button
          onClick={handlePrev}
          className="group relative w-12 h-12 md:w-14 md:h-14"
          disabled={isAnimating}
          aria-label="Previous project"
        >
          {/* Button background with gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-full h-full bg-obsidian/90 backdrop-blur-sm border border-bone/20 rounded-full flex items-center justify-center text-bone transition-all duration-300 group-hover:bg-bone group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-0.5 group-hover:scale-105 group-disabled:opacity-50 group-disabled:cursor-not-allowed">
            <span className="text-lg md:text-xl font-light">←</span>
          </div>
        </button>
        
        <button
          onClick={handleNext}
          className="group relative w-12 h-12 md:w-14 md:h-14"
          disabled={isAnimating}
          aria-label="Next project"
        >
          {/* Button background with gradient border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-full h-full bg-obsidian/90 backdrop-blur-sm border border-bone/20 rounded-full flex items-center justify-center text-bone transition-all duration-300 group-hover:bg-bone group-hover:text-obsidian group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:-translate-y-0.5 group-hover:scale-105 group-disabled:opacity-50 group-disabled:cursor-not-allowed">
            <span className="text-lg md:text-xl font-light">→</span>
          </div>
        </button>
      </motion.div>

      {/* Progress Indicators */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 right-3 md:right-10 -translate-y-1/2 flex flex-col space-y-3"
        role="tablist"
        aria-label="Project navigation"
      >
        {showcaseItems.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => !isAnimating && setActiveIndex(index)}
            className={`group relative w-1.5 h-8 md:h-10 rounded-full transition-all duration-500 cursor-pointer ${
              index === activeIndex ? "scale-110" : "hover:scale-105"
            }`}
            whileHover={{ scale: index === activeIndex ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnimating}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`View ${item.title}`}
          >
            {/* Active indicator with gradient */}
            {index === activeIndex && (
              <motion.div
                layoutId="progress-indicator"
                className="absolute inset-0 bg-gradient-to-b from-accent via-accent/80 to-accent rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {/* Background indicator */}
            <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
              index === activeIndex 
                ? "bg-accent" 
                : "bg-bone/20 group-hover:bg-bone/30"
            }`} />
            
            {/* Hover glow effect */}
            <div className="absolute -inset-0.5 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </motion.button>
        ))}
      </motion.div>
    </motion.section>
  )
} 