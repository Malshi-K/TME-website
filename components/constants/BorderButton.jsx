import React from 'react'
import { cn } from '@/lib/utils'

const BorderButton = ({
  children,
  className,
  ...props
}) => {
  return (
    <button 
      className={cn(
        "relative inline-flex items-center justify-center",
        "px-6 py-2",
        "text-white font-medium",
        "uppercase tracking-wider",
        "rounded-md",
        "border-2 border-white",
        "transition-all duration-300 ease-in-out",
        "hover:bg-white hover:text-customRed",
        "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
        className
      )}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </span>
    </button>
  )
}

export default BorderButton;