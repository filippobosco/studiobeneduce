'use client'

import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProofStrip from '@/components/sections/SocialProofStrip'
import ProblemAgitation from '@/components/sections/ProblemAgitation'
import UniqueApproach from '@/components/sections/UniqueApproach'
import ComparisonTable from '@/components/sections/ComparisonTable'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import Process from '@/components/sections/Process'
import LeadForm from '@/components/sections/LeadForm'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Add padding-top to account for fixed navbar */}
      <div className="pt-16 md:pt-20">
        {/* SEZIONE 1: Hero */}
        <Hero />

        {/* SEZIONE 2: Social Proof Strip */}
        <SocialProofStrip />

        {/* SEZIONE 3: Problem Agitation */}
        <div id="problemi">
          <ProblemAgitation />
        </div>

        {/* SEZIONE 4: Unique Approach */}
        <div id="approccio">
          <UniqueApproach />
        </div>

        {/* SEZIONE 5: Comparison Table */}
        <div id="confronto">
          <ComparisonTable />
        </div>

        {/* SEZIONE 6: Services */}
        <div id="servizi">
          <Services />
        </div>

        {/* SEZIONE 7: Testimonials */}
        <div id="testimonianze">
          <Testimonials />
        </div>

        {/* SEZIONE 8: Process */}
        <div id="processo">
          <Process />
        </div>

        {/* SEZIONE 9: Lead Form */}
        <LeadForm />

        {/* SEZIONE 10: FAQ */}
        <div id="faq">
          <FAQ />
        </div>

        {/* SEZIONE 11: Footer */}
        <Footer />
      </div>
    </main>
  )
}
