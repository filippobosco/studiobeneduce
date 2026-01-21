import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl border border-gray-200 p-6 shadow-card transition-all duration-300',
        hover && 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
