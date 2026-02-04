import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import UtmCapture from '@/components/UtmCapture'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Studio Beneduce | Consulenza Fiscale Strategica per PMI e E-commerce',
  description: 'Scopri l\'affiancamento strategico che trasforma la burocrazia fiscale in opportunità di crescita. Oltre 20 anni di esperienza, specialista e-commerce. Consulenza gratuita.',
  keywords: 'commercialista, consulenza fiscale, PMI, e-commerce, dropshipping, regime forfettario, pianificazione fiscale',
  authors: [{ name: 'Studio Beneduce' }],
  openGraph: {
    title: 'Studio Beneduce | Consulenza Fiscale Strategica',
    description: 'Consulenza strategica che trasforma la fiscalità in opportunità di crescita',
    type: 'website',
    locale: 'it_IT',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#40dbe8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* LinkedIn Insight Tag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "YOUR_PARTNER_ID";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `,
          }}
        />
        <script async src="https://snap.licdn.com/li.lcs-sc/insight.min.js" />
        
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '873770878969510');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=873770878969510&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body>
        <UtmCapture />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#1A1A1A',
              padding: '16px',
              borderRadius: '8px',
            },
            success: {
              iconTheme: {
                primary: '#22C55E',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
