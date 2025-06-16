'use client';

import { useEffect, useState } from 'react';
import { 
  IconChartBar, 
  IconSettings, 
  IconTrendingUp 
} from '@tabler/icons-react';

export default function GrowthMarketingConsultingValueProp() {
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
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
                  <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                    How We Approach Marketing
                  </span>
                </h2>
                
                <p className="text-lg sm:text-lg md:text-xl text-obsidian/70 font-light leading-[1.6] max-w-3xl mx-auto">
                  We approach marketing from the customer side, your business goals, and your brand—then find the connection points between them.
                  </p>
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
                                                 <IconChartBar className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Customer<br/>Research
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      We start by understanding your best customers and how they make decisions.
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
                                                 <IconSettings className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Connected<br/>Systems
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      Everything works together to build momentum instead of competing for attention.
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
                                                 <IconTrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-accent transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="text-lg font-display font-semibold text-obsidian mb-4 sm:mb-5 tracking-[-0.01em] leading-tight">
                      Business<br/>Results
                    </h3>
                    <p className="text-base text-obsidian/65 leading-[1.6] font-light">
                      We track what moves your business forward and adjust based on what's working.
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