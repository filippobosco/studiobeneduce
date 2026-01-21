'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemProps {
  question: string
  answer: string
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-gray-200 last:border-b-0">
          <Disclosure.Button className="flex w-full justify-between items-center py-5 text-left hover:bg-background-secondary/50 transition-colors px-4 rounded-lg">
            <span className="font-semibold text-text-primary text-lg">
              {question}
            </span>
            <ChevronDown
              className={cn(
                'w-5 h-5 text-primary transition-transform duration-200',
                open && 'rotate-180'
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pb-5 text-text-secondary leading-relaxed">
            {answer}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

interface AccordionProps {
  items: AccordionItemProps[]
}

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  )
}
