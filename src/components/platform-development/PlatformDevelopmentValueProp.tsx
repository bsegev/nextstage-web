'use client';

import { useEffect, useState } from 'react';
import { IconRocket, IconDashboard, IconTrendingUp } from '@tabler/icons-react';

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
                <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    Where you suddenly can do things you never could before
                  </span>
                </h2>
                
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg sm:text-lg md:text-xl text-obsidian/70 font-light leading-[1.6]">
                    Technology isn&apos;t about keeping up. It&apos;s about leaping ahead.
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
                        <IconRocket className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-obsidian tracking-[-0.01em] leading-tight mb-4 sm:mb-5">
                      New<br/>Capabilities
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      Build systems that let you do things that were impossible before.
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
                        <IconDashboard className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-obsidian tracking-[-0.01em] leading-tight mb-4 sm:mb-5">
                      Everything<br/>Faster
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      Technology that makes all your other work smarter and more efficient.
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
                        <IconTrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-obsidian tracking-[-0.01em] leading-tight mb-4 sm:mb-5">
                      Automatic<br/>Improvement
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      Set it up once, then it keeps getting better without more work.
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