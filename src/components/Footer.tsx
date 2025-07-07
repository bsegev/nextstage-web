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
      { name: "Email", href: "mailto:ben@nextstage.co" },
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
      {/* Creative Background Pattern - Flowing Lines */}
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="h-full w-full">
          <defs>
            <linearGradient id="footerFlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5F4F1" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#F5F4F1" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#F5F4F1" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          
          {/* Flowing design lines */}
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="url(#footerFlow)" strokeWidth="1" fill="none" />
          <path d="M0,400 Q400,300 800,400 T1200,400" stroke="url(#footerFlow)" strokeWidth="1" fill="none" />
          <path d="M0,600 Q200,500 400,600 T1200,600" stroke="url(#footerFlow)" strokeWidth="1" fill="none" />
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
          
          {/* Mobile Layout - Clean & Classic */}
          <div className="lg:hidden space-y-12">
            
            {/* Brand Section - Mobile */}
            <motion.div variants={itemVariants} className="text-center space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-xl md:text-2xl text-bone mb-6">
                  NextStage
                </h2>
                <p className="text-sm text-bone/70 font-light leading-relaxed max-w-md mx-auto">
                  Where strategy, design, and technology converge to accelerate transformation.
                </p>
              </div>

              {/* Contact - Clean Approach */}
              <div className="space-y-6">
                <motion.div 
                  className="group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-3">
                    Ready to begin?
                  </p>
                  <a 
                    href="mailto:ben@nextstage.co"
                    className="text-lg text-bone font-light group-hover:text-accent transition-all duration-500 tracking-wide"
                  >
                    ben@nextstage.co
                  </a>
                  <motion.div 
                    className="w-8 h-[1px] bg-accent/30 mx-auto mt-4 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </motion.div>
                
                <motion.div 
                  className="group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-3">
                    Start a conversation
                  </p>
                  <a 
                    href="tel:+14165551234"
                    className="text-base text-bone font-light group-hover:text-accent transition-all duration-500 tracking-wide"
                  >
                    +1 (416) 555-1234
                  </a>
                </motion.div>
              </div>

              {/* Location with Creative Touch */}
              <div className="relative">
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-3">
                  Based in
                </p>
                <p className="text-bone/70 font-light text-sm leading-relaxed">
                  San Francisco, California<br />
                  <span className="text-bone/50">Working globally</span>
                </p>
              </div>
            </motion.div>

            {/* Navigation - Clean Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 text-center">
              
              {/* Services */}
              <div className="space-y-4">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Services
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-[1px] bg-accent/40"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </h3>
                <nav className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Company
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-[1px] bg-accent/40"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </h3>
                <nav className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Connect */}
              <div className="space-y-4">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Connect
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-[1px] bg-accent/40"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </h3>
                <nav className="space-y-3">
                  {footerLinks.connect.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-colors duration-300 font-light text-xs"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      whileHover={{ x: 2 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Enhanced Classic */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-display text-2xl sm:text-xl md:text-2xl text-bone mb-6 relative">
                  NextStage
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-16 h-[2px] bg-gradient-to-r from-accent to-accent/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                </h2>
                <p className="text-sm text-bone/70 font-light leading-relaxed max-w-md">
                  Where strategy, design, and technology converge to accelerate transformation 
                  and unlock exponential value.
                </p>
              </div>

              {/* Contact Information - Enhanced */}
              <div className="space-y-6">
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-2">
                    Ready to begin?
                  </p>
                  <a 
                    href="mailto:ben@nextstage.co"
                    className="text-base text-bone font-medium group-hover:text-accent transition-colors duration-300 relative"
                  >
                    ben@nextstage.co
                    <motion.div 
                      className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </motion.div>
                
                <motion.div
                  className="group cursor-pointer"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-2">
                    Start a conversation
                  </p>
                  <a 
                    href="tel:+14165551234"
                    className="text-base text-bone font-medium group-hover:text-accent transition-colors duration-300 relative"
                  >
                    +1 (416) 555-1234
                    <motion.div 
                      className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"
                    />
                  </a>
                </motion.div>
              </div>

              {/* Location */}
              <div className="pt-6 border-t border-bone/10 relative">
                <motion.div 
                  className="absolute -top-[1px] left-0 w-12 h-[1px] bg-accent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                />
                <p className="text-bone/50 text-xs font-medium tracking-wider uppercase mb-3">
                  Based in
                </p>
                <p className="text-bone/70 font-light text-sm leading-relaxed">
                  San Francisco, California<br />
                  <span className="text-bone/50">Working globally</span>
                </p>
              </div>
            </motion.div>

            {/* Navigation Links - Enhanced */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Services */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Services
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-8 h-[1px] bg-accent/60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </h3>
                <nav className="space-y-4">
                  {footerLinks.services.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-all duration-300 font-light text-xs relative group"
                      whileHover={{ x: 6 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <span className="relative">
                        {link.name}
                        <motion.div 
                          className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Company */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Company
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-8 h-[1px] bg-accent/60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  />
                </h3>
                <nav className="space-y-4">
                  {footerLinks.company.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-all duration-300 font-light text-xs relative group"
                      whileHover={{ x: 6 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                    >
                      <span className="relative">
                        {link.name}
                        <motion.div 
                          className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </motion.div>

              {/* Connect */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="font-display text-sm text-bone font-medium relative">
                  Connect
                  <motion.div 
                    className="absolute -bottom-2 left-0 w-8 h-[1px] bg-accent/60"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                </h3>
                <nav className="space-y-4">
                  {footerLinks.connect.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="block text-bone/60 hover:text-accent transition-all duration-300 font-light text-xs relative group"
                      whileHover={{ x: 6 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    >
                      <span className="relative">
                        {link.name}
                        <motion.div 
                          className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent/40 group-hover:w-full transition-all duration-300"
                        />
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Newsletter - Elegant Approach */}
        <motion.div 
          variants={itemVariants}
          className="py-8 sm:py-12 border-t border-bone/10 relative"
        >
          <motion.div 
            className="absolute -top-[1px] left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          <div className="max-w-2xl mx-auto text-center lg:text-left">
            <h3 className="font-display text-xl sm:text-lg md:text-xl text-bone mb-4 relative">
              Transformation Insights
              <motion.div 
                className="absolute -bottom-2 left-1/2 lg:left-0 transform lg:transform-none -translate-x-1/2 lg:translate-x-0 w-16 h-[1px] bg-accent/60"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            <p className="text-bone/70 font-light mb-8 text-sm leading-relaxed">
              Monthly insights on digital transformation, emerging technologies, and strategic innovation.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-bone/5 border border-bone/20 rounded-2xl text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 text-sm"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-accent text-obsidian font-semibold rounded-2xl hover:bg-accent/90 transition-all duration-300 text-sm min-h-[56px] flex items-center justify-center gap-3 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative">Subscribe</span>
                <motion.div 
                  className="w-5 h-5 relative"
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

        {/* Bottom Bar - Refined */}
        <motion.div 
          variants={itemVariants}
          className="py-6 sm:py-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between items-center gap-6 relative"
        >
          <motion.div 
            className="absolute -top-[1px] left-0 w-16 h-[1px] bg-accent/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-bone/50 text-center sm:text-left text-sm">
            <p>© {currentYear} NextStage. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#privacy" className="hover:text-bone transition-colors duration-300 relative group">
                Privacy Policy
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bone/30 group-hover:w-full transition-all duration-300"
                />
              </a>
              <a href="#terms" className="hover:text-bone transition-colors duration-300 relative group">
                Terms of Service
                <motion.div 
                  className="absolute -bottom-1 left-0 w-0 h-[1px] bg-bone/30 group-hover:w-full transition-all duration-300"
                />
              </a>
            </div>
          </div>

          {/* Social Icons - Minimalist */}
          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter", "GitHub"].map((social, index) => (
              <motion.a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="w-10 h-10 border border-bone/20 rounded-full flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/50 transition-all duration-300 relative group overflow-hidden"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="sr-only">{social}</span>
                {social === "LinkedIn" && (
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social === "Twitter" && (
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {social === "GitHub" && (
                  <svg className="w-4 h-4 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Signature - Elegant */}
        <motion.div 
          variants={itemVariants}
          className="pb-6 text-center relative"
        >
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <p className="text-bone/30 font-light italic text-sm pt-6">
            Designed and developed with precision in San Francisco
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 