"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function AnimateOnScroll({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  duration = 300,
  className = '',
  once = true 
}: AnimateOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = getInitialTransform(animation);
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // Animate in
            target.style.opacity = '1';
            target.style.transform = 'translate3d(0, 0, 0) scale(1)';
            
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // Animate out if not "once"
            target.style.opacity = '0';
            target.style.transform = getInitialTransform(animation);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully visible
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animation, delay, duration, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}

function getInitialTransform(animation: string): string {
  switch (animation) {
    case 'fadeInUp':
      return 'translate3d(0, 30px, 0) scale(1)';
    case 'fadeInDown':
      return 'translate3d(0, -30px, 0) scale(1)';
    case 'fadeInLeft':
      return 'translate3d(-30px, 0, 0) scale(1)';
    case 'fadeInRight':
      return 'translate3d(30px, 0, 0) scale(1)';
    case 'scaleIn':
      return 'translate3d(0, 0, 0) scale(0.9)';
    case 'fadeIn':
    default:
      return 'translate3d(0, 0, 0) scale(1)';
  }
}

// Stagger animation utility for multiple elements
interface StaggerAnimationProps {
  children: ReactNode[];
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn' | 'scaleIn';
  staggerDelay?: number;
  duration?: number;
  className?: string;
}

export function StaggerAnimation({ 
  children, 
  animation = 'fadeInUp', 
  staggerDelay = 100,
  duration = 300,
  className = ''
}: StaggerAnimationProps) {
  return (
    <>
      {children.map((child, index) => (
        <AnimateOnScroll
          key={index}
          animation={animation}
          delay={index * staggerDelay}
          duration={duration}
          className={className}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </>
  );
} 