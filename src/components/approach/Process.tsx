"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

// Add CSS to hide scrollbars
const scrollbarHideStyles = {
  scrollbarWidth: 'none' as const,
  msOverflowStyle: 'none' as const,
  WebkitOverflowScrolling: 'touch' as const,
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}

export function Process() {
  const [activeStep, setActiveStep] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const indicatorTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  // Reset indicator timeout when step changes
  useEffect(() => {
    if (!isMobile) return
    
    // Clear any existing timeout
    if (indicatorTimeoutRef.current) {
      clearTimeout(indicatorTimeoutRef.current)
    }
    
    // Show the indicator
    setShowIndicator(true)
    setHasScrolled(false)
    
    // Hide after 5 seconds even if no interaction
    indicatorTimeoutRef.current = setTimeout(() => {
      setShowIndicator(false)
    }, 5000)
    
    return () => {
      if (indicatorTimeoutRef.current) {
        clearTimeout(indicatorTimeoutRef.current)
      }
    }
  }, [activeStep, isMobile])

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.matchMedia("(hover: none)").matches
      setIsMobile(mobile)
    }
    
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Handle scroll snap on mobile
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return

    const handleScroll = () => {
      if (!carouselRef.current) return
      
      // Hide the indicator once user has scrolled
      if (!hasScrolled) {
        setHasScrolled(true)
        setShowIndicator(false)
      }
      
      const scrollPosition = carouselRef.current.scrollLeft
      const itemWidth = carouselRef.current.offsetWidth
      const newActiveStep = Math.round(scrollPosition / itemWidth) + 1
      
      if (newActiveStep !== activeStep) {
        setActiveStep(newActiveStep)
      }
    }

    const carousel = carouselRef.current
    carousel.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isMobile, activeStep, hasScrolled])

  // Scroll to active step when it changes
  useEffect(() => {
    if (!isMobile || !carouselRef.current) return
    
    const scrollToStep = (stepIndex: number) => {
      if (!carouselRef.current) return
      
      const itemWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: (stepIndex - 1) * itemWidth,
        behavior: 'smooth'
      })
    }
    
    scrollToStep(activeStep)
  }, [activeStep, isMobile])

  const processSteps = [
    {
      number: "01",
      title: "Discovery Session",
      description:
        "An in-depth meeting to dive into your business, your team, the market you're going after, as well as your goals. We'll set timelines and cover expectations for our collaboration.",
    },
    {
      number: "02",
      title: "Strategic Deep Dive",
      description:
        "1:1 sessions to see the world through your eyes. We'll analyze your business, market, and backgrounds to conceptualize strategies and designs that will ensure your story resonates.",
    },
    {
      number: "03",
      title: "Concept Workshop",
      description:
        "We'll share our initial design and strategic ideas with you, develop an even deeper understanding of your vision, and collectively agree on a path forward that aligns with your goals.",
    },
    {
      number: "04",
      title: "Creation & Refinement",
      description:
        "Kick back while we use our expertise to craft bespoke assets that celebrate your story, highlight your strengths, and move from ideas to tangible reality.",
    },
    {
      number: "05",
      title: "Delivery & Implementation",
      description:
        "We deliver your finished assets, integrate any feedback you have, provide strategic guidance for implementation, and ensure you have everything needed for continued success.",
    },
  ]

  return (
    <section ref={sectionRef} id="process" className="w-full py-12 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
              <span>The Journey</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                How we go from raw idea to market success
              </span>
            </h2>
            <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
              Our carefully crafted process transforms your vision into reality through deep understanding, 
              strategic thinking, and meticulous execution at every step. Whether it's for a logo, a website, or a full brand system, we've got you covered.
            </p>
          </div>
        </motion.div>

        {isMobile ? (
          // Mobile carousel view
          <div className="relative">
            <div 
              ref={carouselRef}
              className="flex overflow-x-scroll snap-x snap-mandatory -mx-4 px-4 pb-4 touch-pan-x"
              style={{
                ...scrollbarHideStyles,
                scrollSnapType: 'x proximity',
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: '-ms-autohiding-scrollbar'
              }}
            >
              {processSteps.map((step, index) => (
                <div 
                  key={step.number}
                  ref={(el) => { stepRefs.current[index] = el }}
                  className="flex-shrink-0 w-full snap-center px-2"
                  style={{
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always'
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        duration: 0.6,
                        delay: 0.1 + index * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    } : { opacity: 0, y: 20 }}
                    className={`process-step transform transition-all duration-300 ${
                      activeStep === index + 1 ? "scale-100" : "scale-95 opacity-50"
                    }`}
                  >
                    <div className={`process-step-inner relative z-10 rounded-2xl p-8 h-full border-2 transition-all duration-[800ms] ease-in-out ${
                      activeStep === index + 1 
                        ? "bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 shadow-2xl shadow-obsidian/20 border-obsidian" 
                        : "bg-background border-obsidian/40 shadow-lg"
                    } ${activeStep !== index + 1 ? "hover:shadow-xl hover:border-obsidian/60" : ""}`}>
                      <div className={`process-number font-display text-5xl font-bold leading-none mb-6 transition-colors duration-[800ms] ease-in-out ${
                        activeStep === index + 1 ? "text-accent" : "text-obsidian"
                      }`}>{step.number}</div>
                      <div className="process-content">
                        <h3 className={`text-xl font-display font-semibold mb-4 leading-tight transition-colors duration-[800ms] ease-in-out ${
                          activeStep === index + 1 ? "text-bone" : "text-foreground"
                        }`}>{step.title}</h3>
                        <div className={`h-0.5 w-20 bg-gradient-to-r mb-6 transition-all duration-[600ms] ease-in-out ${
                          activeStep === index + 1 
                            ? "from-accent to-accent/60 opacity-100 w-24" 
                            : "from-accent via-accent/80 to-obsidian/20 opacity-60 w-16"
                        }`}></div>
                        <p className={`text-base leading-relaxed font-light transition-colors duration-[800ms] ease-in-out ${
                          activeStep === index + 1 ? "text-bone/80" : "text-olive"
                        }`}>{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots with labels */}
            <div className="flex flex-col items-center mt-8 space-y-4">
              <div className="flex justify-center space-x-3">
                {processSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveStep(index + 1)
                      if (carouselRef.current) {
                        carouselRef.current.scrollTo({
                          left: index * carouselRef.current.offsetWidth,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="flex flex-col items-center group"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index + 1 
                        ? "bg-obsidian w-6" 
                        : "bg-foreground/30 group-hover:bg-foreground/50"
                    }`} />
                    <span className={`text-xs mt-2 transition-all duration-300 ${
                      activeStep === index + 1
                        ? "text-obsidian"
                        : "text-foreground/40 group-hover:text-foreground/60"
                    }`}>
                      {step.number}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Swipe indicator - shows only on first view */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: showIndicator ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute inset-y-0 right-4 flex items-center">
                <div className="bg-background/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-foreground/10">
                  <div className="flex items-center space-x-2 text-sm">
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-foreground/40"
                    >
                      ←
                    </motion.div>
                    <span className="text-foreground/60 whitespace-nowrap">Swipe to explore</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Desktop view
          <div 
            ref={containerRef}
            className="process-container relative"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                ref={(el) => { stepRefs.current[index] = el }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }
                } : { opacity: 0, y: 20 }}
                className={`process-step ${activeStep === index + 1 ? "active" : ""}`}
                onMouseEnter={() => setActiveStep(index + 1)}
              >
                <div className={`process-step-inner relative z-10 rounded-2xl p-8 border-2 transition-all duration-[800ms] ease-in-out ${
                  activeStep === index + 1 
                    ? "bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 shadow-2xl shadow-obsidian/20 border-obsidian" 
                    : "bg-background border-obsidian/40 shadow-lg"
                } ${activeStep !== index + 1 ? "hover:shadow-xl hover:border-obsidian/60" : ""}`}>
                  <div className={`process-number font-display text-5xl font-bold leading-none mb-6 transition-colors duration-[800ms] ease-in-out ${
                    activeStep === index + 1 ? "text-accent" : "text-obsidian"
                  }`}>{step.number}</div>
                  <div className="relative h-[180px]">
                    <motion.div 
                      className={`process-content absolute top-0 left-0 w-full`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: activeStep === index + 1 ? 1 : 0,
                        y: activeStep === index + 1 ? 0 : -10,
                        pointerEvents: activeStep === index + 1 ? "auto" : "none"
                      }}
                      transition={{ 
                        opacity: { duration: 0.4, ease: "easeInOut" },
                        y: { duration: 0.5, ease: "easeInOut" }
                      }}
                    >
                      <h3 className={`text-xl font-display font-semibold mb-4 leading-tight transition-colors duration-[800ms] ease-in-out ${
                        activeStep === index + 1 ? "text-bone" : "text-foreground"
                      }`}>{step.title}</h3>
                      <div className={`h-0.5 w-20 bg-gradient-to-r mb-6 transition-all duration-[600ms] ease-in-out ${
                        activeStep === index + 1 
                          ? "from-accent to-accent/60 opacity-100 w-24" 
                          : "from-accent via-accent/80 to-obsidian/20 opacity-60 w-16"
                      }`}></div>
                      <p className={`text-base leading-relaxed font-light transition-colors duration-[800ms] ease-in-out ${
                        activeStep === index + 1 ? "text-bone/80" : "text-olive"
                      }`}>{step.description}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Vertical line in the background */}
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={isInView ? { 
                scaleY: 1,
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1]
                }
              } : { scaleY: 0 }}
              className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-gray-200 -z-10 origin-top"
            />
          </div>
        )}

        {/* Mobile progress indicator */}
        {isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showIndicator ? 1 : 0,
              y: showIndicator ? 0 : 20,
              transition: { 
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none"
          >
            <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-foreground/10">
              <div className="flex items-center space-x-2 text-sm whitespace-nowrap">
                <div className="w-1 h-1 rounded-full bg-obsidian"></div>
                <span className="text-foreground/60">Step {activeStep} of {processSteps.length}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 