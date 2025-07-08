"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { IconWorld, IconBuilding, IconTrendingUp } from "@tabler/icons-react"

export default function TrustBanner() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: true })

  const trustItems = [
    { 
      text: "Across Countries",
      description: "From Silicon Valley to Singapore to Stockholm",
      icon: IconWorld
    },
    { 
      text: "Across Industries", 
      description: "Healthcare, fintech, consumer tech, and beyond",
      icon: IconBuilding
    },
    { 
      text: "Across Company Sizes",
      description: "Pre-seed startups to Fortune 500 enterprises",
      icon: IconTrendingUp
    }
  ]

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-bone/3 to-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl transform translate-y-1/2" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={isInView ? { opacity: 0.06, rotate: 360 } : { opacity: 0, rotate: 0 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 left-8 w-4 h-4 border border-accent/30 rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={isInView ? { opacity: 0.04, rotate: -360 } : { opacity: 0, rotate: 0 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-12 right-12 w-6 h-6 border border-accent/20 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.03, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-16 w-2 h-2 bg-accent/40 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative">
        
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-24">
            {trustItems.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative group cursor-default"
              >
                {/* Subtle hover background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute -inset-8 bg-gradient-to-b from-bone/5 to-transparent rounded-2xl"
                />
                
                                 <div className="relative text-center space-y-6">
                   {/* Icon Container */}
                   <motion.div
                     initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                     animate={isInView ? { 
                       opacity: 1, 
                       scale: 1, 
                       rotateY: 0,
                     } : { opacity: 0, scale: 0, rotateY: -180 }}
                     transition={{ 
                       duration: 0.8, 
                       delay: 0.2 + index * 0.15,
                       ease: [0.22, 1, 0.36, 1] 
                     }}
                     className="relative mx-auto w-20 h-20 group"
                   >
                                            {/* Background glow */}
                       <motion.div
                         animate={{ 
                           scale: [1, 1.1, 1],
                           opacity: [0.5, 0.8, 0.5]
                         }}
                         transition={{ 
                           duration: 4, 
                           repeat: Infinity, 
                           ease: "easeInOut",
                           delay: index * 0.5
                         }}
                         className="absolute inset-0 bg-accent/40 rounded-3xl blur-xl"
                       />
                       
                       {/* Main icon container */}
                       <motion.div
                         whileHover={{ 
                           scale: 1.05,
                           rotateY: 5,
                           rotateX: 5,
                           transition: {
                             duration: 0.3,
                             ease: [0.22, 1, 0.36, 1]
                           }
                         }}
                         animate={{
                           y: [0, -2, 0],
                         }}
                         transition={{
                           y: {
                             duration: 3,
                             repeat: Infinity,
                             ease: "easeInOut",
                             delay: index * 0.3
                           }
                         }}
                         className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 border border-accent/30 rounded-3xl shadow-xl shadow-obsidian/20 backdrop-blur-sm"
                       >
                         {/* Number indicator - small */}
                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-obsidian rounded-full flex items-center justify-center shadow-lg">
                           <span className="font-mono text-xs font-bold">
                             {index + 1}
                           </span>
                         </div>
                         
                         {/* Icon */}
                         <motion.div
                           animate={{
                             rotate: item.icon === IconWorld ? [0, 360] : 0,
                           }}
                           transition={{
                             duration: item.icon === IconWorld ? 20 : 0,
                             repeat: item.icon === IconWorld ? Infinity : 0,
                             ease: "linear"
                           }}
                         >
                           <item.icon 
                             className="w-8 h-8 text-accent"
                             strokeWidth={2}
                           />
                         </motion.div>
                       </motion.div>
                   </motion.div>

                                     {/* Main text */}
                   <h3 className="font-display text-lg xl:text-xl text-obsidian font-semibold tracking-[-0.02em] leading-[1.1]">
                     {item.text}
                   </h3>

                   {/* Description */}
                   <motion.p
                     initial={{ opacity: 0 }}
                     animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                     transition={{ 
                       duration: 0.6, 
                       delay: 0.6 + index * 0.15,
                       ease: [0.22, 1, 0.36, 1] 
                     }}
                     className="text-sm text-obsidian/75 font-normal leading-relaxed"
                   >
                     {item.description}
                   </motion.p>

                  {/* Decorative line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.8 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    className="w-16 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mx-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

                 {/* Mobile Layout */}
         <div className="lg:hidden space-y-8">
           {trustItems.map((item, index) => (
             <motion.div
               key={item.text}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ 
                 duration: 0.7, 
                 delay: index * 0.15,
                 ease: [0.22, 1, 0.36, 1] 
               }}
               className="relative"
             >
               {/* Card Container */}
               <div className="relative bg-gradient-to-br from-bone/5 to-white/80 border border-accent/15 rounded-2xl p-6 backdrop-blur-sm shadow-lg shadow-accent/5">
                 {/* Subtle background glow */}
                 <motion.div
                   animate={{ 
                     opacity: [0.1, 0.2, 0.1]
                   }}
                   transition={{ 
                     duration: 4, 
                     repeat: Infinity, 
                     ease: "easeInOut",
                     delay: index * 0.8
                   }}
                   className="absolute inset-0 bg-accent/10 rounded-2xl"
                 />
                 
                 <div className="relative flex items-start space-x-4">
                   {/* Icon Container - Mobile */}
                   <motion.div
                     initial={{ opacity: 0, scale: 0 }}
                     animate={isInView ? { 
                       opacity: 1, 
                       scale: 1,
                     } : { opacity: 0, scale: 0 }}
                     transition={{ 
                       duration: 0.6, 
                       delay: 0.3 + index * 0.15,
                       ease: [0.22, 1, 0.36, 1] 
                     }}
                     className="relative flex-shrink-0 w-14 h-14"
                   >
                     {/* Background glow */}
                     <motion.div
                       animate={{ 
                         scale: [1, 1.1, 1],
                         opacity: [0.3, 0.5, 0.3]
                       }}
                       transition={{ 
                         duration: 3, 
                         repeat: Infinity, 
                         ease: "easeInOut",
                         delay: index * 0.5
                       }}
                       className="absolute inset-0 bg-accent/25 rounded-xl blur-md"
                     />
                     
                     {/* Main icon container */}
                     <motion.div
                       animate={{
                         y: [0, -1, 0],
                       }}
                       transition={{
                         duration: 2.5,
                         repeat: Infinity,
                         ease: "easeInOut",
                         delay: index * 0.3
                       }}
                       className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 border border-accent/30 rounded-xl shadow-lg shadow-obsidian/20 backdrop-blur-sm"
                     >
                       {/* Number indicator - small */}
                       <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-accent text-obsidian rounded-full flex items-center justify-center shadow-md">
                         <span className="font-mono text-xs font-bold">
                           {index + 1}
                         </span>
                       </div>
                       
                       {/* Icon */}
                       <motion.div
                         animate={{
                           rotate: item.icon === IconWorld ? [0, 360] : 0,
                         }}
                         transition={{
                           duration: item.icon === IconWorld ? 25 : 0,
                           repeat: item.icon === IconWorld ? Infinity : 0,
                           ease: "linear"
                         }}
                       >
                         <item.icon 
                           className="w-6 h-6 text-accent"
                           strokeWidth={2}
                         />
                       </motion.div>
                     </motion.div>
                   </motion.div>

                   {/* Content */}
                   <div className="flex-1 space-y-2">
                     {/* Main text */}
                     <h3 className="font-display text-lg xl:text-xl text-obsidian font-semibold tracking-[-0.02em] leading-[1.1]">
                       {item.text}
                     </h3>

                     {/* Description */}
                     <motion.p
                       initial={{ opacity: 0 }}
                       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                       transition={{ 
                         duration: 0.6, 
                         delay: 0.5 + index * 0.15,
                         ease: [0.22, 1, 0.36, 1] 
                       }}
                       className="text-sm text-obsidian/70 font-normal leading-relaxed"
                     >
                       {item.description}
                     </motion.p>
                   </div>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>

      </div>
    </motion.section>
  )
} 