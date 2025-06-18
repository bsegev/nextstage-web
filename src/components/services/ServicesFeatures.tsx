import { cn } from "@/lib/utils";
import {
  IconBulb,
  IconRocket,
  IconTarget,
  IconTrendingUp,
  IconPalette,
  IconCode,
  IconUsers,
  IconStar,
} from "@tabler/icons-react";

export default function ServicesFeatures() {
  const features = [
    {
      title: "No Handoff Delays",
      description: "Strategy, design, and technology teams work as one from day one—eliminating the weeks lost in traditional handoffs.",
      icon: <IconRocket />,
    },
    {
      title: "Compound Solutions",
      description: "Each discipline informs the others, creating solutions that are exponentially better than the sum of their parts.",
      icon: <IconTrendingUp />,
    },
    {
      title: "Future-Proof Thinking",
      description: "Technical constraints shape strategy early, while strategic vision guides technical architecture from the start.",
      icon: <IconBulb />,
    },
    {
      title: "Startup Velocity",
      description: "Move from concept to market in weeks, not quarters—without sacrificing quality or strategic depth.",
      icon: <IconTarget />,
    },
    {
      title: "Real Partnership",
      description: "We embed with your team, building internal capability while delivering results—not just consulting reports.",
      icon: <IconUsers />,
    },
    {
      title: "Proven at Scale",
      description: "From startups to enterprise, leaders choose our integrated approach when speed and quality both matter.",
      icon: <IconStar />,
    },
    {
      title: "Built to Evolve",
      description: "Every solution is designed for growth, with systems that scale and strategies that adapt as you expand.",
      icon: <IconCode />,
    },
    {
      title: "Measurable Impact",
      description: "Track progress from week one with clear metrics, working prototypes, and tangible business outcomes.",
      icon: <IconPalette />,
    },
  ];

  return (
    <section className="bg-bone/40 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-6 sm:mb-8 text-sm sm:text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>The advantage</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              How integration creates advantage
            </span>
          </h2>
          <p className="text-lg sm:text-base lg:text-lg text-obsidian/80 font-light max-w-3xl mx-auto">
            When strategy, design, and technology work together from the beginning, 
            each discipline amplifies the others to create exponentially better outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
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
        "flex flex-col py-12 px-8 relative group/feature transition-all duration-300",
        "border-r border-obsidian/10",
        (index === 0 || index === 4) && "border-l border-obsidian/10",
        index < 4 && "border-b border-obsidian/10",
        "hover:bg-accent/5"
      )}
    >
      {/* Hover overlay effects */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      )}
      
      {/* Icon */}
      <div className="mb-6 relative z-10 text-obsidian/60 group-hover/feature:text-obsidian/80 transition-colors duration-300">
        <div className="w-8 h-8">
          {icon}
        </div>
      </div>
      
      {/* Title with accent bar */}
      <div className="mb-3 relative z-10">
        <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-obsidian/20 group-hover/feature:bg-accent group-hover/feature:w-1.5 transition-all duration-300 origin-top" />
        <h3 className="font-display text-xl font-medium text-obsidian group-hover/feature:translate-x-3 transition-transform duration-300 pl-4">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-sm leading-relaxed text-obsidian/70 group-hover/feature:text-obsidian/80 relative z-10 transition-colors duration-300 pl-4">
        {description}
      </p>
    </div>
  );
}; 