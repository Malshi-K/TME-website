import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const GradientButtonPrimary = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <div className="relative inline-block">
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-customRed to-customGray" />
      
      <Button 
        className={cn(
          "relative m-[2px]",
          "bg-transparent hover:bg-transparent",
          "text-white",
          "uppercase tracking-wider font-medium",
          "transition-all duration-300",
          "rounded-md",
          "text-sm sm:text-base",
          "px-6 sm:px-8 py-2.5 sm:py-3",
          "shadow-lg hover:shadow-xl",
          "active:scale-95",
          "inline-flex items-center gap-2",
          "border-0", // Remove default button border
          className
        )}
        variant={variant}
        size={size}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <ArrowRight className="w-4 h-4" />
        </span>
      </Button>
    </div>
  );
};

export default GradientButtonPrimary;