// GradientButtonPrimary.js
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const GradientButtonPrimary = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <Button 
      className={cn(
        "bg-gradient-to-r from-red-500 to-gray-500",
        "hover:from-red-600 hover:to-gray-600",
        "text-white",
        "uppercase tracking-wider font-medium",
        "transition-all duration-300",
        "rounded-full",
        "text-sm sm:text-base",
        "px-6 sm:px-8 py-2.5 sm:py-3",
        "shadow-lg hover:shadow-xl",
        "active:scale-95",
        className
      )}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default GradientButtonPrimary;