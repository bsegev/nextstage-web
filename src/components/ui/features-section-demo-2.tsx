import { cn } from "@/lib/utils";
import {
  IconCode,
  IconPalette,
  IconMail,
  IconBrandInstagram,
  IconRocket,
  IconTrendingUp,
  IconSearch,
  IconTarget,
} from "@tabler/icons-react";

export default function KeyDeliverablesShowcase() {
  const deliverables = [
    {
      title: "Website Design & Development",
      description:
        "Complete website with mobile optimization and CMS integration ready to launch your business.",
      icon: <IconCode />,
    },
    {
      title: "Brand Identity System",
      description:
        "Logo suite, color palette, typography, and brand guidelines for consistent professional presence.",
      icon: <IconPalette />,
    },
    {
      title: "Email Marketing Automation",
      description:
        "Automated email sequences with segmentation and performance tracking to nurture leads into customers.",
      icon: <IconMail />,
    },
    {
      title: "Social Media Brand Kit",
      description:
        "Templates, content guidelines, and visual assets for consistent social media growth and engagement.",
      icon: <IconBrandInstagram />,
    },
    {
      title: "Landing Page Templates",
      description:
        "High-converting landing page designs optimized for campaigns and product launches.",
      icon: <IconRocket />,
    },
    {
      title: "Growth Analytics Setup",
      description:
        "Performance tracking dashboard with automated reporting and actionable growth insights.",
      icon: <IconTrendingUp />,
    },
    {
      title: "SEO Foundation",
      description:
        "Technical SEO setup with content optimization and ongoing ranking improvement strategies.",
      icon: <IconSearch />,
    },
    {
      title: "Customer Acquisition System",
      description:
        "Multi-channel acquisition funnel with automated tracking and optimization workflows.",
      icon: <IconTarget />,
    },
  ];

  return (
    <section className="bg-bone py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>What You Get</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              What You Get
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-2xl mx-auto">
            Working solutions that launch your business. Built fast, built right.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {deliverables.map((deliverable, index) => (
            <Deliverable key={deliverable.title} {...deliverable} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base text-obsidian/70 mb-6">
            Need something specific? We build custom solutions for your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://cal.com/bensegev/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-bone rounded-full text-sm font-medium transition-all duration-300 hover:bg-obsidian/90 hover:shadow-lg hover:-translate-y-0.5"
            >
              Book appointment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center gap-2 px-6 py-3 border border-obsidian/20 text-obsidian rounded-full text-sm font-medium transition-all duration-300 hover:border-obsidian/40 hover:bg-obsidian/5"
            >
              View all services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const Deliverable = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 px-6 relative group/deliverable transition-all duration-300",
        "border-r border-obsidian/10",
        (index === 0 || index === 4) && "lg:border-l border-obsidian/10",
        index < 4 && "lg:border-b border-obsidian/10",
        "hover:bg-accent/5"
      )}
    >
      {/* Hover overlay effects */}
      {index < 4 && (
        <div className="opacity-0 group-hover/deliverable:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/deliverable:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-4 relative z-10 text-obsidian/60 group-hover/deliverable:text-obsidian/80 transition-colors duration-300">
        <div className="w-6 h-6">
          {icon}
        </div>
      </div>
      
      {/* Title with accent bar */}
      <div className="mb-3 relative z-10">
        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-obsidian/20 group-hover/deliverable:bg-accent group-hover/deliverable:w-1.5 transition-all duration-300 origin-top" />
        <h3 className="font-display text-lg font-medium text-obsidian group-hover/deliverable:translate-x-3 transition-transform duration-300 pl-4">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-sm leading-relaxed text-obsidian/70 group-hover/deliverable:text-obsidian/80 relative z-10 transition-colors duration-300 pl-4">
        {description}
      </p>
    </div>
  );
}; 