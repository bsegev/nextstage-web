'use client';

import { useEffect, useState } from 'react';

export default function StrategyConsultingValueProp() {
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
                    Built around your people, your constraints, your reality
                  </span>
                </h2>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-base sm:text-lg md:text-xl leading-[1.6] text-obsidian/70 font-light">
                    You&apos;ve probably been burned by strategy work before. Beautiful decks that sit in drawers. Frameworks that don&apos;t fit your reality. Consultants who&apos;ve never had to make payroll giving you advice on running your business. We get it—and we do things differently.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em]">
                      Clear Ownership
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Every strategic initiative has a named owner, clear accountabilities, and defined success metrics.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em]">
                      Actionable Roadmaps
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Step-by-step plans with clear next actions, not theoretical frameworks that gather dust.
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em]">
                      Operational Foundation
                    </h3>
                    <p className="text-sm sm:text-base text-obsidian/65 leading-[1.6] font-light">
                      Systems, processes, and structures that turn strategic decisions into daily operational reality.
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