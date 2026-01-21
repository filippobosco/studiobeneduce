# ⚡ Quick Start - 60 Secondi per Vedere la Landing Page

## 🚀 3 Comandi per Partire

```bash
# 1. Installa dipendenze (2 minuti)
npm install

# 2. Avvia server di sviluppo (5 secondi)
npm run dev

# 3. Apri nel browser
# Vai su: http://localhost:3000
```

**That's it!** La landing page è live! 🎉

---

## 🎯 Cosa Vedrai

Una landing page completa con:
- ✅ Hero section con CTA
- ✅ Social proof (20+ anni, 150+ clienti)
- ✅ 4 problemi comuni del target
- ✅ 3 pilastri differenzianti
- ✅ Tabella comparativa
- ✅ 6 servizi offerti
- ✅ Autorità (libro Amazon)
- ✅ 3 testimonial
- ✅ Processo in 3 step
- ✅ **Form lead funzionante**
- ✅ FAQ accordion
- ✅ Footer con contatti

Tutto responsive, con animazioni e design professionale!

---

## ⚙️ Setup Minimo (Opzionale - 5 minuti)

### 1. Configura Form (per ricevere lead)

1. Crea un Google Sheet
2. Vai su Extensions > Apps Script
3. Incolla lo script da `SETUP.md`
4. Deploy come Web App
5. Copia URL in `.env.local` come `NEXT_PUBLIC_FORM_ENDPOINT`

### 2. Modifica Contatti nel Footer

File: `components/sections/Footer.tsx`

Cerca e sostituisci:
- Indirizzo studio
- Telefono
- Email

---

## 📱 Test su Mobile

### Opzione 1: Browser DevTools
1. Premi F12
2. Click icona mobile (Ctrl+Shift+M)
3. Seleziona iPhone o Android
4. Ricarica pagina

### Opzione 2: Smartphone Reale
1. Trova il tuo IP: `ifconfig | grep "inet "`
2. Sul telefono vai su: `http://TUO_IP:3000`

---

## 🚢 Deploy Veloce su Vercel

```bash
# Installa Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Segui le istruzioni. Done in 2 minuti! 🎉

---

## 📖 Prossimi Step

Tutto funziona? Ottimo!

Ora puoi:
1. Leggere `INSTALLATION_GUIDE.md` per setup completo
2. Leggere `SETUP.md` per configurazioni avanzate
3. Leggere `README.md` per documentazione tecnica

Oppure inizia subito a personalizzare:
- Colori: `tailwind.config.ts`
- Testi: `components/sections/*.tsx`
- Immagini: `components/sections/Hero.tsx`

---

## 🆘 Problemi?

**Errore "Cannot find module"**
```bash
rm -rf node_modules
npm install
```

**Porta 3000 occupata**
```bash
npm run dev -- -p 3001
```

**Altri problemi**: Vedi `INSTALLATION_GUIDE.md` sezione Troubleshooting

---

**Buon lancio! 🚀**
