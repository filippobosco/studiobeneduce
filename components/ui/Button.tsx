'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'large'
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variant === 'primary' && 'bg-primary text-black hover:bg-primary-dark shadow-cta hover:scale-105 active:bg-[#1a6f7a]',
          variant === 'secondary' && 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-black',
          size === 'default' && 'px-8 py-3 text-base',
          size === 'large' && 'px-8 py-4 text-lg h-12 md:h-14',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
