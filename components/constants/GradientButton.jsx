import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const GradientButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-customRed to-customGray" />
      <Button 
        className={cn(
          "relative m-[2px] bg-white hover:bg-customRed",
          "text-customRed hover:text-white",
          "uppercase tracking-wider font-medium",
          "transition-colors duration-200",
          "rounded-[22px]", // Increased border radius for pill shape
          className
        )}
        variant={variant}
        size={size}
        {...props}
      >
        {children}
      </Button>
    </div>
  )
}

export default GradientButton;