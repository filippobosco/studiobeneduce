# Studio Beneduce - Landing Page

Landing page ad alta conversione per Studio Beneduce, commercialista strategico specializzato in PMI, professionisti e e-commerce.

## 🎯 Obiettivo

Generare lead qualificati tramite campagne LinkedIn Ads (e Meta Ads) offrendo una consulenza gratuita di 45 minuti.

## 🚀 Stack Tecnologico

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4+
- **Animations**: Framer Motion
- **Form**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Notifications**: React Hot Toast

## 📐 Struttura della Landing Page

La landing page è composta da 12 sezioni strategicamente progettate per massimizzare la conversione:

1. **Hero** - Value proposition forte con CTA immediata
2. **Social Proof Strip** - Credibilità con numeri (20+ anni, 150+ clienti)
3. **Problem Agitation** - 4 pain points del target
4. **Unique Approach** - 3 pilastri differenzianti
5. **Comparison Table** - Studio Beneduce vs Altri Commercialisti
6. **Services** - 6 servizi offerti
7. **Authority Builder** - Libro Amazon + expertise
8. **Testimonials** - 3 storie di clienti soddisfatti
9. **Process** - 3 step semplici per iniziare
10. **Lead Form** - Form principale con validazione
11. **FAQ** - 5 domande frequenti
12. **Footer** - Contatti e link utili

## 🎨 Design System

### Colori
- **Primary**: `#40dbe8` (Azzurro brillante)
- **Primary Dark**: `#268893` (Hover states)
- **Success**: `#22C55E` (Verde)
- **Error**: `#EF4444` (Rosso)

### Typography
- **Headings**: Montserrat (Bold/SemiBold)
- **Body**: Inter (Regular/Medium)

### Responsive
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)

## 📦 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Avvia in produzione
npm start
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## ⚙️ Configurazione

1. Copia `.env.example` in `.env.local`
2. Compila le variabili d'ambiente:

```env
# Endpoint per invio form (Google Sheets, Zapier, etc.)
NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint_here

# LinkedIn Insight Tag
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=your_id_here

# Meta Pixel (opzionale)
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here

# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📊 Tracking & Analytics

La landing page include integrazione per:

- **LinkedIn Insight Tag** - Tracking conversioni da LinkedIn Ads
- **Meta Pixel** - Tracking conversioni da Meta Ads
- **Google Analytics 4** - Analytics generale

### Eventi tracciati:
- `cta_click` - Click su CTA (con location)
- `form_start` - Inizio compilazione form
- `form_submit` - Invio form completato (conversione principale)
- `section_view` - Visualizzazione sezioni chiave

## 📝 Form Lead

Il form principale raccoglie:
- Nome e Cognome
- Email
- Telefono
- Tipo di attività (dropdown)
- Fatturato annuo (dropdown)
- Messaggio opzionale
- Consenso privacy

### Validazione
Validazione real-time con Zod. Messaggi di errore chiari in italiano.

### Destinazione Form
Configurabile tramite `NEXT_PUBLIC_FORM_ENDPOINT`. Può inviare a:
- Google Sheets (tramite Apps Script)
- Zapier
- Make (Integromat)
- API custom
- Email service (Resend, SendGrid)

## 🎯 CTA Strategy

Multiple CTA distribuite strategicamente:
- Hero section (above the fold)
- Navbar (fisso in scroll)
- Ogni 2-3 scroll per mantenere intent
- Form principale (sezione dedicata)

## ♿ Accessibilità

- WCAG 2.1 Level AA compliance
- Color contrast ratio: 4.5:1 minimum
- Keyboard navigation completa
- ARIA labels su elementi interattivi
- Focus indicators visibili

## 📱 Mobile-First

Design ottimizzato per mobile:
- Hero stack verticale su mobile
- Comparison table → accordion su mobile
- Form a colonna singola su mobile
- Touch-friendly (tap targets 44x44px minimum)

## 🔧 Personalizzazione

### Modificare i colori
Modifica `tailwind.config.ts`:

```ts
colors: {
  primary: {
    DEFAULT: '#40dbe8',
    dark: '#268893',
  },
  // ...
}
```

### Modificare i contenuti
Tutti i testi sono hardcoded nei componenti in `/components/sections/`. 
Ogni sezione è un componente indipendente facilmente modificabile.

### Aggiungere/Rimuovere sezioni
Modifica `/app/page.tsx` e importa/rimuovi i componenti necessari.

## 📂 Struttura File

```
/
├── app/
│   ├── layout.tsx           # Root layout con fonts e metadata
│   ├── page.tsx             # Home page (assembla tutte le sezioni)
│   ├── globals.css          # Stili globali Tailwind
│   └── api/
│       └── submit-form/
│           └── route.ts     # API endpoint form submission
├── components/
│   ├── sections/            # Sezioni della landing page
│   │   ├── Hero.tsx
│   │   ├── SocialProofStrip.tsx
│   │   ├── ProblemAgitation.tsx
│   │   ├── UniqueApproach.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── Services.tsx
│   │   ├── AuthorityBuilder.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Process.tsx
│   │   ├── LeadForm.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── ui/                  # Componenti UI riusabili
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Select.tsx
│   │   └── Accordion.tsx
│   └── shared/
│       └── Navbar.tsx       # Navbar con menu responsive
├── lib/
│   ├── utils.ts             # Utility functions + tracking helpers
│   └── validations.ts       # Zod schemas per form
├── tailwind.config.ts       # Configurazione Tailwind
├── tsconfig.json
└── package.json
```

## 🚢 Deploy

### Vercel (Consigliato)
```bash
# Deploy su Vercel
vercel

# O collega il repository GitHub per deploy automatico
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Docker
```dockerfile
# Dockerfile disponibile su richiesta
```

## 📈 Ottimizzazione Performance

- Immagini da Unsplash con lazy loading
- Componenti ottimizzati con React.memo dove necessario
- Framer Motion animations con GPU acceleration
- Font loading ottimizzato (Google Fonts con display: swap)
- Minimizzazione bundle con tree-shaking

## 🔐 Privacy & GDPR

- Privacy Policy e Cookie Policy (link nel footer - da creare pagine)
- Consenso esplicito nel form
- Nessun tracking senza consenso
- Dati form processati in modo sicuro

## 📞 Supporto

Per domande o supporto tecnico, contatta:
- **Email**: info@studiobeneduce.it
- **Tel**: [Inserire telefono]

## 📄 Licenza

© 2026 Studio Beneduce. Tutti i diritti riservati.

---

**Versione**: 1.0.0  
**Data**: Gennaio 2026  
**Sviluppatore**: Meraviglialab  
**Cliente**: Studio Beneduce
