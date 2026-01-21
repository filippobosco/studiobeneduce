# 📦 Guida Completa Installazione - Studio Beneduce Landing Page

## Prerequisiti

Prima di iniziare, assicurati di avere installato:

- **Node.js** 18.x o superiore ([Download](https://nodejs.org/))
- **npm** o **yarn** (incluso con Node.js)
- Un editor di codice (consigliato: VS Code)

Verifica l'installazione:
```bash
node --version  # Deve essere >= 18.0.0
npm --version   # Qualsiasi versione recente
```

---

## 🚀 Installazione Step-by-Step

### Step 1: Naviga nella cartella del progetto

```bash
cd "/Users/filippobosco/Desktop/CURSOR/Studio Beneduce"
```

### Step 2: Installa le dipendenze

```bash
npm install
```

Questo comando installerà tutti i pacchetti necessari:
- Next.js 14+ (framework)
- React 18+ (UI library)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Hook Form + Zod (form handling)
- Lucide React (icons)
- E altri...

L'installazione potrebbe richiedere 2-5 minuti.

### Step 3: Configura le variabili d'ambiente

1. Rinomina il file `env.example.txt` in `.env.local`:

```bash
mv env.example.txt .env.local
```

2. Apri `.env.local` e modifica i valori:

```env
# Form submission endpoint (da configurare dopo)
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Analytics IDs (opzionali per iniziare)
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=YOUR_LINKEDIN_PARTNER_ID
NEXT_PUBLIC_META_PIXEL_ID=YOUR_META_PIXEL_ID
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Nota**: Puoi lasciare i placeholder per ora. La landing funzionerà comunque.

### Step 4: Avvia il server di sviluppo

```bash
npm run dev
```

Vedrai un output simile a:

```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in 2.3s
```

### Step 5: Apri nel browser

Apri il browser e vai su: **http://localhost:3000**

Dovresti vedere la landing page completa! 🎉

---

## 🔧 Configurazione Post-Installazione

### 1. Setup Form Submission (IMPORTANTE)

Il form attualmente non invierà dati. Devi configurare una destinazione.

#### Opzione A: Google Sheets (Più semplice)

Segui la guida in `SETUP.md` sezione "Setup Form Submission".

In breve:
1. Crea un Google Sheet
2. Aggiungi uno script Apps Script
3. Deploy come Web App
4. Copia l'URL in `.env.local`

#### Opzione B: Email Service

Usa Resend, SendGrid o simili (richiede più configurazione).

### 2. Personalizza i Contatti

File: `components/sections/Footer.tsx`

Cerca e modifica:

```tsx
// Linea ~27
<span>Via Example 123, Caserta, Italia</span>  // <- Tuo indirizzo

// Linea ~34
<span>+39 000 000 0000</span>  // <- Tuo telefono

// Linea ~41
<span>info@studiobeneduce.it</span>  // <- Tua email
```

### 3. Cambia i Colori (Opzionale)

File: `tailwind.config.ts`

```ts
// Linea 12-15
primary: {
  DEFAULT: '#40dbe8',  // <- Colore principale
  dark: '#268893',      // <- Colore hover
},
```

### 4. Sostituisci l'Immagine Hero (Opzionale)

File: `components/sections/Hero.tsx`

```tsx
// Linea ~51
<img
  src="https://images.unsplash.com/photo-..."  // <- Cambia URL
  alt="..."
/>
```

Puoi:
- Usare un'altra immagine da Unsplash
- Caricare una tua immagine in `/public/images/`
- Usare `/images/hero.jpg` come src

---

## 🧪 Test della Landing Page

### Checklist di Test

Apri http://localhost:3000 e verifica:

- [ ] **Hero Section**: Testo visibile, CTA cliccabile
- [ ] **Scroll**: Tutte le 12 sezioni sono visibili
- [ ] **Navbar**: Menu fisso in scroll, click funzionanti
- [ ] **CTA Buttons**: Tutti i bottoni scrollano al form
- [ ] **Form**: Compilabile, validazione errori funziona
- [ ] **Responsive**: Testa su mobile (DevTools > Toggle device)
- [ ] **Animazioni**: Fade-in su scroll (se troppo veloci, va bene)

### Test Form

1. Vai alla sezione form (scroll down o click CTA)
2. Compila tutti i campi
3. Click "Prenota la consulenza gratuita"
4. Dovresti vedere:
   - Se NON hai configurato l'endpoint: errore (normale)
   - Se hai configurato l'endpoint: messaggio successo ✅

---

## 📱 Test su Mobile

### Opzione 1: Browser DevTools

1. Chrome DevTools (F12)
2. Click icona mobile (Ctrl+Shift+M)
3. Seleziona device (es. iPhone 12 Pro)
4. Ricarica la pagina

### Opzione 2: Smartphone reale

1. Trova il tuo IP locale:

```bash
# Mac/Linux
ifconfig | grep "inet "

# Windows
ipconfig
```

2. Sul telefono, vai su: `http://TUO_IP:3000`

Esempio: `http://192.168.1.100:3000`

**Importante**: Telefono e computer devono essere sulla stessa rete WiFi.

---

## 🚢 Build per Produzione

Prima di deployare, testa il build:

```bash
npm run build
```

Questo compilerà l'app e segnalerà eventuali errori.

Se il build ha successo, avvia in modalità produzione:

```bash
npm start
```

---

## 🐛 Problemi Comuni e Soluzioni

### Errore: "Cannot find module"

```bash
# Reinstalla dipendenze
rm -rf node_modules package-lock.json
npm install
```

### Errore: "Port 3000 is already in use"

```bash
# Usa porta diversa
npm run dev -- -p 3001
```

Oppure killa il processo sulla porta 3000.

### Styling non appare correttamente

```bash
# Riavvia il server
# Premi Ctrl+C per fermare
npm run dev
```

### Form non invia / Errore console

È normale se non hai configurato `NEXT_PUBLIC_FORM_ENDPOINT`.
Il resto della landing funziona comunque.

### Immagini non si caricano

Verifica la connessione internet (immagini da Unsplash).
Oppure usa immagini locali.

### Animazioni troppo lente/veloci

File: `components/sections/*.tsx`

Cerca `duration:` nelle animazioni Framer Motion e modifica il valore.

---

## 📚 File Importanti

| File | Descrizione |
|------|-------------|
| `app/page.tsx` | Pagina principale (assembla tutte le sezioni) |
| `app/layout.tsx` | Layout root (fonts, metadata, tracking) |
| `components/sections/*` | Tutte le 12 sezioni della landing |
| `components/ui/*` | Componenti UI riusabili |
| `tailwind.config.ts` | Configurazione design system |
| `.env.local` | Variabili d'ambiente (NON committare) |
| `package.json` | Dipendenze e scripts |

---

## 📖 Prossimi Passi

1. ✅ Landing page installata e funzionante
2. ⚙️ Configura form submission (Google Sheets)
3. ✏️ Personalizza testi e contatti
4. 🎨 Opzionale: personalizza colori/immagini
5. 🧪 Testa su mobile
6. 🚀 Deploy su Vercel (vedi README.md)
7. 📊 Configura tracking (LinkedIn, Meta, GA4)
8. 🎯 Lancia campagne LinkedIn Ads

---

## 🆘 Serve Aiuto?

Consulta:
- **README.md** - Documentazione completa del progetto
- **SETUP.md** - Guide setup avanzate (form, tracking, etc.)
- **documentation.md** - Brief strategico originale

Oppure contatta il team di sviluppo.

---

**Tutto pronto! La tua landing page ad alta conversione è live! 🎉**

Ricorda: questa è una base solida. Testa, ottimizza e itera basandoti sui dati delle campagne.
