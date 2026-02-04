# Setup Rapido - Studio Beneduce Landing Page

## 🚀 Quick Start

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Ambiente

Rinomina `env.example.txt` in `.env.local` e compila i valori:

```env
# Form submission (configura dopo con Google Apps Script o webhook)
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

# Analytics IDs (ottieni dai rispettivi pannelli)
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=123456
NEXT_PUBLIC_META_PIXEL_ID=1234567890
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Avvio Server di Sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

---

## 📝 Setup Form Submission

### Opzione 1: Google Sheets (Consigliato per MVP)

1. Crea un nuovo Google Sheet. Rinomina il primo tab in **Consulenza Gratuita** e nella prima riga inserisci le intestazioni: **DATA DI CREAZIONE** | **NOME E COGNOME** | **EMAIL** | **TELEFONO** | **TIPO DI ATTIVITÀ** | **FATTURATO** | **MESSAGGIO** | **SORGENTE**
2. Vai su **Extensions > Apps Script**
3. Incolla questo codice:

```javascript
function doPost(e) {
  try {
    // Usa il foglio "Consulenza Gratuita" (nome del tab nel Google Sheet)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Consulenza Gratuita');
    if (!sheet) throw new Error('Foglio "Consulenza Gratuita" non trovato');
    const data = JSON.parse(e.postData.contents);

    // Ordine colonne: DATA DI CREAZIONE | NOME E COGNOME | EMAIL | TELEFONO | TIPO DI ATTIVITÀ | FATTURATO | MESSAGGIO | SORGENTE
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.businessType,
      data.revenue,
      data.message || '',
      data.source || ''
    ]);
    
    // Rispondi con successo
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy > New deployment**
5. Scegli **Web app**
6. Imposta:
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Copia l'URL generato (es. `https://script.google.com/macros/s/xxxxx/exec`)
8. In `.env.local` aggiungi: `FORM_ENDPOINT=https://script.google.com/macros/s/TUO_SCRIPT_ID/exec`

### Opzione 2: Email con Resend

1. Registrati su [resend.com](https://resend.com)
2. Ottieni API key
3. Aggiungi a `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
NOTIFICATION_EMAIL=tuo@email.com
```

4. Modifica `/app/api/submit-form/route.ts` per usare Resend

---

## 📊 Setup Tracking

### LinkedIn Insight Tag

1. Vai su [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager)
2. Account Assets > Insight Tag
3. Copia il Partner ID
4. Incolla in `.env.local` come `NEXT_PUBLIC_LINKEDIN_PARTNER_ID`

### Meta Pixel

1. Vai su [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Crea nuovo Pixel
3. Copia il Pixel ID
4. Incolla in `.env.local` come `NEXT_PUBLIC_META_PIXEL_ID`

### Google Analytics 4

1. Vai su [Google Analytics](https://analytics.google.com)
2. Crea nuova proprietà GA4
3. Copia il Measurement ID (formato: G-XXXXXXXXXX)
4. Incolla in `.env.local` come `NEXT_PUBLIC_GA_MEASUREMENT_ID`

---

## 🎨 Personalizzazioni Comuni

### Cambiare i colori brand

File: `tailwind.config.ts`

```ts
colors: {
  primary: {
    DEFAULT: '#40dbe8',  // <- Cambia questo
    dark: '#268893',      // <- E questo
  },
}
```

### Modificare i contatti nel footer

File: `components/sections/Footer.tsx`

Cerca e modifica:
- Indirizzo studio
- Telefono
- Email
- Link social (LinkedIn, Facebook, Instagram)

### Cambiare immagine Hero

File: `components/sections/Hero.tsx`

Linea ~51, modifica l'URL dell'immagine Unsplash o usa la tua:

```tsx
<img
  src="https://images.unsplash.com/photo-xxxx"  // <- Cambia qui
  alt="..."
/>
```

### Modificare copy/testi

Tutti i testi sono hardcoded nei file in `components/sections/`.
Ogni sezione è un file separato facilmente modificabile.

---

## 🚢 Deploy su Vercel

### Metodo 1: CLI

```bash
npm install -g vercel
vercel
```

### Metodo 2: GitHub (Consigliato)

1. Pusha il codice su GitHub
2. Vai su [vercel.com](https://vercel.com)
3. Click **Import Project**
4. Seleziona il repository
5. Aggiungi le variabili d'ambiente dal pannello Vercel
6. Click **Deploy**

**Importante**: Ricorda di aggiungere tutte le variabili d'ambiente nel pannello Vercel (Settings > Environment Variables).

---

## ✅ Checklist Pre-Launch

- [ ] Form submission testato e funzionante
- [ ] Contatti nel footer aggiornati (indirizzo, telefono, email)
- [ ] Link social configurati
- [ ] Tracking IDs configurati (LinkedIn, Meta, GA4)
- [ ] Immagini ottimizzate
- [ ] Test su mobile
- [ ] Test su desktop
- [ ] Test form validation
- [ ] Privacy Policy e Cookie Policy create e linkate
- [ ] Test link CTA (tutti devono scrollare al form)
- [ ] Verifica testi e copy (nessun placeholder "Lorem Ipsum")

---

## 🐛 Troubleshooting

### Il form non invia

- Verifica che `NEXT_PUBLIC_FORM_ENDPOINT` sia configurato
- Controlla la console del browser per errori
- Verifica che Google Apps Script sia deployed "Anyone"

### Tracking non funziona

- Verifica che gli ID siano corretti in `.env.local`
- Le variabili devono iniziare con `NEXT_PUBLIC_` per essere visibili nel browser
- Dopo aver modificato `.env.local`, riavvia il server dev

### Errori TypeScript

```bash
# Pulisci cache e ricompila
rm -rf .next
npm run dev
```

### Styling non si applica

```bash
# Ricompila Tailwind
npm run dev
```

---

## 📞 Supporto

Se hai problemi durante il setup, consulta:
- README.md (documentazione completa)
- documentation.md (brief strategico originale)

Oppure contatta il team di sviluppo.

---

**Buon lancio! 🚀**
