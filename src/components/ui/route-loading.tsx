'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function RouteLoadingIndicator() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-bone/20 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}

export function PageLoadingSpinner() {
  return (
    <div className="min-h-screen bg-bone flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <p className="text-obsidian/60 text-sm">Loading...</p>
      </div>
    </div>
  );
} 