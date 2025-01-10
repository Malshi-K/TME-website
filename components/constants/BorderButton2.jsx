import React from 'react'
import { cn } from '@/lib/utils'

const BorderButton2 = ({
  children,
  className,
  ...props
}) => {
  return (
    <button 
      className={cn(
        "relative inline-flex items-center justify-center",
        "px-6 py-2",
        "text-customRed font-medium",
        "uppercase tracking-wider",
        "rounded-md",
        "border-2 border-customRed",
        "transition-all duration-300 ease-in-out",
        "hover:bg-white hover:text-customRed",
        "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default BorderButton2;