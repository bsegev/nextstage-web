'use client';

// Beautiful orange color scheme for future reference:
// bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700
// border-2 border-orange-600
// Very vibrant and appealing, but not aligned with current brand palette

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { IconMail, IconPhone, IconCalendar, IconBrandLinkedin, IconCopy, IconArrowRight, IconCheck, IconMapPin, IconClock, IconX } from '@tabler/icons-react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  scale: number;
}

type ContactMethod = 'email' | 'linkedin' | 'schedule';

interface ContactCard {
  id: ContactMethod;
  icon: any;
  title: string;
  subtitle: string;
  action: string;
  actionText: string;
  bgClass: string;
  hoverClass: string;
  textColor: string;
  iconBg: string;
  special?: boolean;
}

export default function ContactMethods() {
  const [mounted, setMounted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedCard, setExpandedCard] = useState<ContactMethod | null>(null);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  useEffect(() => {
    setMounted(true);
    // Generate floating elements only on client side to prevent hydration mismatch
    setFloatingElements(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 8 + Math.random() * 6,
        scale: 0.3 + Math.random() * 0.7
      }))
    );
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("ben@nextstage.co");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };



  const contactCards: ContactCard[] = [
    {
      id: 'email',
      icon: IconMail,
      title: 'Email',
      subtitle: 'ben@nextstage.co',
      action: 'copy',
      actionText: copiedEmail ? 'Copied!' : 'Copy',
      bgClass: 'bg-white border-2 border-obsidian/15',
      hoverClass: '',
      textColor: 'text-obsidian',
      iconBg: 'bg-obsidian/10'
    },
    {
      id: 'linkedin',
      icon: IconBrandLinkedin,
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      action: 'connect',
      actionText: 'Connect',
      bgClass: 'bg-[#0077b5] border-2 border-[#0077b5]',
      hoverClass: '',
      textColor: 'text-white',
      iconBg: 'bg-white/15'
    },
    {
      id: 'schedule',
      icon: IconCalendar,
      title: 'Schedule',
      subtitle: '30min Strategy Call',
      action: 'book',
      actionText: 'Book Now',
      bgClass: 'bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 border-2 border-obsidian',
      hoverClass: '',
      textColor: 'text-white',
      iconBg: 'bg-white/15',
      special: true
    }
  ];

  const handleCardAction = (card: ContactCard) => {
    switch (card.action) {
      case 'copy':
        if (card.id === 'email') copyEmail();
        break;
      case 'connect':
        window.open("https://www.linkedin.com/company/nextstage-ventures", "_blank");
        break;
      case 'book':
        window.open("https://cal.com/bensegev/30min", "_blank");
        break;
    }
  };

  const expandCard = (cardId: ContactMethod) => {
    setExpandedCard(cardId);
  };

  const CardContent = ({ card, isExpanded }: { card: ContactCard; isExpanded: boolean }) => {
    const Icon = card.icon;

  return (
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          // Default card view
          <motion.div
            key="default"
            className="flex flex-col items-center justify-center text-center h-full relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Icon with TrustBanner styling */}
            <motion.div className="relative mx-auto w-20 h-20 mb-6">
              {/* Background glow */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-accent/30 rounded-3xl blur-xl"
              />
              
              {/* Main icon container */}
              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`relative flex items-center justify-center w-full h-full ${
                  card.id === 'linkedin' || card.id === 'schedule' 
                    ? 'bg-white/15 border border-white/30' 
                    : 'bg-gradient-to-br from-obsidian via-obsidian/95 to-obsidian/90 border border-accent/30'
                } rounded-3xl shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}
              >
                {/* Icon */}
                <Icon className={`w-8 h-8 ${
                  card.id === 'linkedin' || card.id === 'schedule' 
                    ? 'text-white' 
                    : 'text-accent'
                }`} strokeWidth={2} />
              </motion.div>
            </motion.div>

            <span className={`text-lg font-semibold mb-1 ${card.textColor}`}>
              {card.title}
            </span>
            
            <span className={`text-sm mb-4 ${card.id === 'linkedin' || card.id === 'schedule' ? 'text-white/75' : 'text-obsidian/60'}`}>
              {card.subtitle}
            </span>

            {/* Action area */}
            <div className={`flex items-center gap-2 ${card.id === 'linkedin' || card.id === 'schedule' ? 'text-white' : 'text-obsidian'} transition-transform duration-300 group-hover:-translate-y-1`}>
              {(card.id === 'email' && copiedEmail) ? (
                <IconCheck className="w-4 h-4 text-green-600" />
              ) : (
                <IconCopy className={`w-4 h-4 ${card.id === 'linkedin' || card.id === 'schedule' ? 'opacity-75 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100'} transition-opacity duration-300`} />
              )}
              <span className="text-sm font-medium">{card.actionText}</span>
              <IconArrowRight className={`w-4 h-4 ${card.id === 'linkedin' || card.id === 'schedule' ? 'opacity-75 group-hover:opacity-100' : 'opacity-60 group-hover:opacity-100'} group-hover:translate-x-1 transition-all duration-300`} />
            </div>
          </motion.div>
        ) : (
          // Expanded card view
          <motion.div
            key="expanded"
            className="flex flex-col justify-between h-full p-6 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close button */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                setExpandedCard(null);
              }}
              className="absolute top-4 right-4 p-1 rounded-full bg-obsidian/10 hover:bg-obsidian/20 transition-colors cursor-pointer"
            >
              <IconX className="w-4 h-4 text-obsidian/60" />
            </div>

            {/* Enhanced card content */}
            <div className="text-center">
              <div className={`rounded-full p-6 mb-6 mx-auto w-fit ${card.iconBg}`}>
                <Icon className={`w-12 h-12 ${card.id === 'linkedin' || card.id === 'schedule' ? 'text-white' : 'text-accent'}`} />
              </div>
              
              <h3 className={`text-2xl font-display font-semibold mb-2 ${card.textColor}`}>
                {card.title}
              </h3>
              
              <p className={`text-base mb-6 ${card.id === 'linkedin' || card.id === 'schedule' ? 'text-white/75' : 'text-obsidian/70'}`}>
                {card.subtitle}
              </p>

              {/* Additional details */}
              {card.id === 'schedule' && (
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2 text-white/75">
                    <IconClock className="w-4 h-4" />
                    <span className="text-sm">Usually responds within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white/75">
                    <IconMapPin className="w-4 h-4" />
                    <span className="text-sm">Available worldwide via video call</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action button */}
            <motion.button
              onClick={() => handleCardAction(card)}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                card.id === 'linkedin' || card.id === 'schedule'
                  ? 'bg-white/20 hover:bg-white/30 text-white'
                  : 'bg-accent/20 hover:bg-accent/30 text-accent'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {card.actionText}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        {/* Flowing communication lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="contactFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFE0D7" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#FFE0D7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="contactFlowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE0D7" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFE0D7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFE0D7" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Primary communication streams */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.path
              key={i}
              d={`M${-100 + i * 120} ${200 + i * 80} Q${500 + i * 150} ${250 + i * 60} ${1400 + i * 100} ${220 + i * 70}`}
              stroke="url(#contactFlowGradient)"
              strokeWidth={1 + (i % 2)}
              fill="none"
              opacity={0.4 - i * 0.05}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.4 - i * 0.05, 0]
              }}
              transition={{
                duration: 8 + i * 0.8,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* Secondary streams */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.path
              key={`secondary-${i}`}
              d={`M${-60 + i * 180} ${400 + i * 50} Q${600 + i * 120} ${180 + i * 70} ${1320 + i * 80} ${320 + i * 40}`}
              stroke="url(#contactFlowGradient2)"
              strokeWidth={1}
              fill="none"
              opacity={0.3 - i * 0.04}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: [0, 1, 0]
              }}
              transition={{
                duration: 10 + i * 1.2,
                repeat: Infinity,
                delay: 4 + i * 0.8,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>

        {/* Floating particles - only render after mount */}
        {mounted && floatingElements.map(element => (
          <motion.div
            key={element.id}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [element.scale, element.scale * 1.5, element.scale]
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-obsidian rounded-full blur-3xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:6rem_6rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Enhanced header matching BrandDesignConsultingServices pattern */}
        <motion.div 
          className={`text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 sm:mb-8 text-sm font-medium text-obsidian/60 tracking-[0.2em] uppercase">
            <span>Ready to Begin?</span>
            </div>
          
          <h2 className="font-display text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-[-0.02em] leading-[0.9] mb-4 sm:mb-6 md:mb-8">
            <span className="bg-gradient-to-r from-obsidian via-accent to-obsidian bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
              Let's start the conversation
            </span>
          </h2>
          
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl text-obsidian/80 font-light max-w-4xl mx-auto leading-relaxed">
            Every transformation begins with a conversation. Choose the path that resonates with you.
          </p>
        </motion.div>

        {/* Enhanced contact cards grid */}
        <motion.div 
          className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, staggerChildren: 0.1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {contactCards.map((card, index) => (
              <motion.div
                key={card.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
          <button
                  onClick={() => handleCardAction(card)}
                  className={`group relative w-full h-64 lg:h-72 p-6 lg:p-8 rounded-2xl ${card.bgClass} hover:shadow-xl hover:scale-[1.01] hover:-translate-y-1 text-center overflow-hidden transition-all duration-300 shadow-lg`}
                >
                  {/* Simple background effect */}
                  <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/5 rounded-2xl transition-colors duration-300" />

                  <CardContent card={card} isExpanded={expandedCard === card.id} />
          </button>
              </motion.div>
            ))}
        </div>
        </motion.div>

        {/* Enhanced bottom section */}
        <motion.div 
          className={`text-center transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg lg:text-xl text-obsidian/60 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Not sure where to start? No problem. Just reach out and tell us about your challenge — we&apos;ll guide you from there.
          </p>
          
          <motion.div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent text-base font-medium backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(255, 224, 215, 0.15)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-2 h-2 bg-accent rounded-full mr-3"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Currently accepting new projects for 2024
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}