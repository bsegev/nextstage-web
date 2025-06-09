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
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
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

        {/* Newsletter Signup */}
        <motion.div 
          variants={itemVariants}
          className="py-12 border-t border-bone/10"
        >
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl text-bone mb-4">
              Transformation Insights
            </h3>
            <p className="text-bone/70 font-light mb-6">
              Monthly insights on digital transformation, emerging technologies, and strategic innovation.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-bone/5 border border-bone/20 rounded-lg text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <motion.button
                type="submit"
                className="px-8 py-3 bg-accent text-obsidian font-medium rounded-lg hover:bg-accent/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="py-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-bone/50">
            <p>© {currentYear} NextStage. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-bone transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-bone transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter", "GitHub"].map((social) => (
              <motion.a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="w-10 h-10 bg-bone/5 border border-bone/20 rounded-full flex items-center justify-center text-bone/60 hover:text-accent hover:border-accent/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">{social}</span>
                {social === "LinkedIn" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {social === "Twitter" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                )}
                {social === "GitHub" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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