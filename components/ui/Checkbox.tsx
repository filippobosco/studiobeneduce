'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(
            'mt-1 w-5 h-5 rounded border-gray-300 text-primary transition-colors',
            'focus:ring-2 focus:ring-primary/20 focus:ring-offset-0',
            'cursor-pointer',
            error && 'border-error',
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className="text-sm text-text-secondary cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
