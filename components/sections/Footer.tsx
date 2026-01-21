'use client'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Bottom Bar */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Studio Beneduce - Dott. Commercialista | P.IVA: 04828461212</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
