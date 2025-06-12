"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Digital Transformation", href: "#transformation" },
      { name: "Strategic Design", href: "#design" },
      { name: "Technology Innovation", href: "#technology" },
      { name: "Experience Strategy", href: "#experience" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Our Approach", href: "#approach" },
      { name: "Work", href: "#work" },
      { name: "Insights", href: "#insights" },
    ],
    connect: [
      { name: "LinkedIn", href: "#linkedin" },
      { name: "Twitter", href: "#twitter" },
      { name: "Email", href: "mailto:hello@nextstage.com" },
      { name: "Newsletter", href: "#newsletter" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="bg-obsidian border-t border-bone/10 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="h-full w-full">
          <pattern id="footerGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#F5F4F1" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10"
      >
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          
          {/* Mobile Layout - Optimized */}
          <div className="lg:hidden space-y-10">
            
            {/* Brand Section - Mobile */}
            <motion.div variants={itemVariants} className="text-center space-y-6">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl text-bone mb-4">
                  NextStage
                </h2>
                <p className="text-lg text-bone/70 font-light leading-relaxed max-w-md mx-auto">
                  Where strategy, design, and technology converge to accelerate transformation 
                  and unlock exponential value.
                </p>
              </div>

              {/* Enhanced Contact Information - Mobile */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:hello@nextstage.com"
                  className="group block p-4 bg-bone/5 border border-bone/10 rounded-2xl hover:border-accent/30 transition-all duration-300 touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-2">
                    Ready to begin?
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xl text-bone font-medium group-hover:text-accent transition-colors duration-300">
                      hello@nextstage.com
                    </span>
                    <motion.div 
                      className="w-5 h-5 text-bone/40 group-hover:text-accent"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="tel:+1234567890"
                  className="group block p-4 bg-bone/5 border border-bone/10 rounded-2xl hover:border-accent/30 transition-all duration-300 touch-manipulation"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-2">
                    Start a conversation
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-xl text-bone font-medium group-hover:text-accent transition-colors duration-300">
                      +1 (234) 567-8900
                    </span>
                    <motion.div 
                      className="w-5 h-5 text-bone/40 group-hover:text-accent"
                      whileHover={{ scale: 1.1 }}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.a>
              </div>

              {/* Location - Mobile */}
              <div className="pt-6 border-t border-bone/10">
                <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-2">
                  Based in
                </p>
                <p className="text-bone/70 font-light text-lg">
                  San Francisco, California<br />
                  Working globally
                </p>
              </div>
            </motion.div>

            {/* Navigation Links - Mobile (Accordion Style) */}
            <div className="space-y-6">
              
              {/* Services */}
              <motion.div variants={itemVariants} className="bg-bone/5 border border-bone/10 rounded-2xl p-6">
                <h3 className="font-display text-xl text-bone font-medium mb-4 text-center">
                  Services
                </h3>
                <nav className="grid grid-cols-1 gap-3">
                  {footerLinks.services.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-center p-3 text-bone/60 hover:text-accent hover:bg-bone/5 rounded-xl transition-all duration-300 font-light touch-manipulation"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Company & Connect Combined */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={itemVariants} className="bg-bone/5 border border-bone/10 rounded-2xl p-6">
                  <h3 className="font-display text-lg text-bone font-medium mb-4 text-center">
                    Company
                  </h3>
                  <nav className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="block text-center text-sm text-bone/60 hover:text-accent hover:bg-bone/5 rounded-lg p-2 transition-all duration-300 font-light touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>

                <motion.div variants={itemVariants} className="bg-bone/5 border border-bone/10 rounded-2xl p-6">
                  <h3 className="font-display text-lg text-bone font-medium mb-4 text-center">
                    Connect
                  </h3>
                  <nav className="space-y-3">
                    {footerLinks.connect.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="block text-center text-sm text-bone/60 hover:text-accent hover:bg-bone/5 rounded-lg p-2 transition-all duration-300 font-light touch-manipulation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </nav>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Unchanged but improved */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-bone mb-4">
                  NextStage
                </h2>
                <p className="text-lg text-bone/70 font-light leading-relaxed max-w-md">
                  Where strategy, design, and technology converge to accelerate transformation 
                  and unlock exponential value.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-1">
                    Ready to begin?
                  </p>
                  <a 
                    href="mailto:hello@nextstage.com"
                    className="text-xl text-bone font-medium group-hover:text-accent transition-colors duration-300"
                  >
                    hello@nextstage.com
                  </a>
                </motion.div>
                
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-1">
                    Start a conversation
                  </p>
                  <a 
                    href="tel:+1234567890"
                    className="text-xl text-bone font-medium group-hover:text-accent transition-colors duration-300"
                  >
                    +1 (234) 567-8900
                  </a>
                </motion.div>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-bone/10">
                <p className="text-bone/50 text-sm font-medium tracking-wide uppercase mb-2">
                  Based in
                </p>
                <p className="text-bone/70 font-light">
                  San Francisco, California<br />
                  Working globally
                </p>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Services */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-display text-lg text-bone font-medium">
                  Services
                </h3>
                <nav className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-display text-lg text-bone font-medium">
                  Company
                </h3>
                <nav className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Connect */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="font-display text-lg text-bone font-medium">
                  Connect
                </h3>
                <nav className="space-y-3">
                  {footerLinks.connect.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <motion.div 
          variants={itemVariants}
          className="py-8 sm:py-12 border-t border-bone/10"
        >
          <div className="max-w-2xl mx-auto text-center lg:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-bone mb-4">
              Transformation Insights
            </h3>
            <p className="text-bone/70 font-light mb-6 text-lg leading-relaxed">
              Monthly insights on digital transformation, emerging technologies, and strategic innovation.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-bone/5 border border-bone/20 rounded-2xl text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-lg touch-manipulation"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-accent text-obsidian font-semibold rounded-2xl hover:bg-accent/90 transition-all duration-300 touch-manipulation text-lg min-h-[56px] flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
                <motion.div 
                  className="w-5 h-5"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="py-6 sm:py-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-bone/50 text-center sm:text-left">
            <p>© {currentYear} NextStage. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#privacy" className="hover:text-bone transition-colors duration-300 touch-manipulation p-2">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-bone transition-colors duration-300 touch-manipulation p-2">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Enhanced Social Icons */}
          <div className="flex items-center gap-3">
            {["LinkedIn", "Twitter", "GitHub"].map((social) => (
              <motion.a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="w-12 h-12 bg-bone/5 border border-bone/20 rounded-2xl flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/50 transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{social}</span>
                {social === "LinkedIn" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social === "Twitter" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {social === "GitHub" && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Signature Element */}
        <motion.div 
          variants={itemVariants}
          className="pb-6 text-center"
        >
          <p className="text-xs text-bone/30 font-light italic">
            Designed and developed with precision in San Francisco
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 