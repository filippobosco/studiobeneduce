'use client'

import { useState, useEffect } from 'react'
import Button from '@/components/ui/Button'
import { trackCTAClick } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    trackCTAClick('navbar')
    setIsMobileMenuOpen(false)
    const formSection = document.getElementById('lead-form')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/images/Logo.svg" 
              alt="Studio Beneduce Logo" 
              className="h-12 md:h-14 w-auto"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('confronto')}
              className="text-text-primary hover:text-primary transition-colors"
            >
              Confronto
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-text-primary hover:text-primary transition-colors"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('testimonianze')}
              className="text-text-primary hover:text-primary transition-colors"
            >
              Testimonianze
            </button>
            <Button onClick={handleCTAClick} size="default">
              Consulenza Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('confronto')}
                className="text-left py-2 text-text-primary hover:text-primary transition-colors"
              >
                Confronto
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="text-left py-2 text-text-primary hover:text-primary transition-colors"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('testimonianze')}
                className="text-left py-2 text-text-primary hover:text-primary transition-colors"
              >
                Testimonianze
              </button>
              <Button onClick={handleCTAClick} size="default" className="w-full">
                Consulenza Gratuita
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
