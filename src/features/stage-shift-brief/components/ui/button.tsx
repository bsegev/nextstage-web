import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const buttonVariants = ({ variant = 'default', size = 'md' }: { variant?: 'default' | 'secondary' | 'outline'; size?: 'sm' | 'md' | 'lg' } = {}) => {
  return cn(
    // Base styles
    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 disabled:opacity-50 disabled:cursor-not-allowed',
    // Variants
    {
      'bg-accent hover:bg-accent/90 text-obsidian hover:scale-105': variant === 'default',
      'bg-accent/20 hover:bg-accent/30 text-bone border border-accent/30 hover:border-accent/50': variant === 'outline',
      'bg-obsidian/60 hover:bg-obsidian/80 text-bone': variant === 'secondary',
    },
    // Sizes
    {
      'px-3 py-2 text-sm': size === 'sm',
      'px-4 py-3 text-base': size === 'md',
      'px-6 py-4 text-lg': size === 'lg',
    }
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button'; 