'use client';

import { useEffect, useState } from 'react';

export default function TechInnovationConsultingValueProp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Value Proposition Content */}
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              
              {/* Main Value Proposition */}
              <div className="mb-8 sm:mb-12">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    Where innovation becomes competitive advantage
                  </span>
                </h2>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] text-obsidian/70 font-light">
                    Most companies use technology to maintain status quo—digitizing old processes without reimagining possibilities. We see it differently. Your technology isn&apos;t just about efficiency. It&apos;s about creating capabilities that didn&apos;t exist before.
                  </p>
                </div>
              </div>

              {/* Supporting Points */}
              <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                
                {/* Point 1 */}
                <div className="group relative">
                  {/* Background card with subtle gradient and shadows */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-bone/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1" />
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-8 text-center">
                    {/* Icon with sophisticated styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent rounded-2xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Future<br/>Ready
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Advanced technology solutions that anticipate market changes and scale with emerging opportunities.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="group relative">
                  {/* Background card with subtle gradient and shadows */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-bone/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1" />
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-8 text-center">
                    {/* Icon with sophisticated styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent rounded-2xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Performance<br/>Driven
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Every system engineered for speed, reliability, and measurable impact on business operations.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="group relative">
                  {/* Background card with subtle gradient and shadows */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-bone/30 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1" />
                  
                  {/* Content */}
                  <div className="relative p-6 sm:p-8 text-center">
                    {/* Icon with sophisticated styling */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 to-accent/5 rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/10 to-transparent rounded-2xl" />
                      <div className="relative w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21l19.5-19.5M16.5 7.5L21 3m0 0h-3.75M21 3v3.75M9 12l2.25 2.25L15 10.5" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Growth<br/>Enabled
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Technology architecture designed to support 10x growth without rebuilding from scratch.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 