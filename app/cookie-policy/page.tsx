export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container-custom py-6">
          <a href="/" className="inline-block hover:opacity-80 transition-opacity">
            <img 
              src="/images/Logo.svg" 
              alt="Studio Beneduce Logo" 
              className="h-12 w-auto"
            />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom max-w-4xl py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
          Cookie Policy
        </h1>
        <p className="text-lg text-text-secondary mb-12">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* Intro */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Cosa sono i Cookie
            </h2>
            <p className="text-text-secondary leading-relaxed">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) quando visiti un sito web. Vengono utilizzati per migliorare l&apos;esperienza di navigazione, ricordare le preferenze dell&apos;utente e raccogliere informazioni statistiche anonime.
            </p>
          </section>

          {/* Tipologie */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Tipologie di Cookie Utilizzati
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Il nostro sito utilizza le seguenti tipologie di cookie:
            </p>

            {/* Cookie Tecnici */}
            <div className="bg-background-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                1. Cookie Tecnici (Necessari)
              </h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Questi cookie sono essenziali per il corretto funzionamento del sito web. Non raccolgono informazioni personali e non possono essere disattivati.
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary text-sm">
                <li><strong>Cookie di sessione:</strong> permettono la navigazione sicura tra le pagine</li>
                <li><strong>Cookie di preferenze:</strong> ricordano le tue scelte (es. consenso cookie)</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-text-secondary"><strong>Durata:</strong> Sessione / 12 mesi</p>
                <p className="text-sm text-text-secondary"><strong>Base giuridica:</strong> Legittimo interesse</p>
              </div>
            </div>

            {/* Cookie Analitici */}
            <div className="bg-background-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                2. Cookie Analitici
              </h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Utilizziamo cookie per raccogliere informazioni statistiche anonime su come gli utenti utilizzano il sito, al fine di migliorare i nostri servizi.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-text-primary mb-2">Google Analytics 4</p>
                  <p className="text-sm text-text-secondary mb-2">
                    Servizio di analisi web fornito da Google LLC che ci aiuta a capire come gli utenti interagiscono con il sito.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                    <li>Cookie: _ga, _ga_*, _gid</li>
                    <li>Durata: 2 anni</li>
                    <li>Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">policies.google.com/privacy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-text-secondary"><strong>Base giuridica:</strong> Consenso (puoi rifiutare questi cookie)</p>
              </div>
            </div>

            {/* Cookie di Marketing */}
            <div className="bg-background-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-black mb-3">
                3. Cookie di Marketing e Tracciamento
              </h3>
              <p className="text-text-secondary leading-relaxed mb-3">
                Utilizziamo cookie di terze parti per monitorare l&apos;efficacia delle nostre campagne pubblicitarie e per offrirti contenuti personalizzati.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-text-primary mb-2">LinkedIn Insight Tag</p>
                  <p className="text-sm text-text-secondary mb-2">
                    Pixel di tracciamento di LinkedIn per misurare le conversioni e targetizzare gli annunci.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                    <li>Cookie: li_sugr, lidc, bcookie</li>
                    <li>Durata: 2 anni</li>
                    <li>Privacy Policy: <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/legal/privacy-policy</a></li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <p className="font-semibold text-text-primary mb-2">Meta Pixel (Facebook)</p>
                  <p className="text-sm text-text-secondary mb-2">
                    Pixel di tracciamento di Meta per misurare le conversioni e ottimizzare le campagne pubblicitarie.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-text-secondary">
                    <li>Cookie: _fbp, fr, datr</li>
                    <li>Durata: 3 mesi - 2 anni</li>
                    <li>Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">facebook.com/privacy/policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <p className="text-sm text-text-secondary"><strong>Base giuridica:</strong> Consenso (puoi rifiutare questi cookie)</p>
              </div>
            </div>
          </section>

          {/* Gestione Cookie */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Come Gestire i Cookie
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Puoi gestire le tue preferenze sui cookie in qualsiasi momento tramite:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary mb-4">
              <li><strong>Banner Cookie:</strong> al primo accesso al sito puoi scegliere quali cookie accettare</li>
              <li><strong>Impostazioni del Browser:</strong> puoi modificare le impostazioni del tuo browser per bloccare o eliminare i cookie</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              <strong>Nota:</strong> La disattivazione dei cookie tecnici potrebbe compromettere la funzionalità del sito.
            </p>
          </section>

          {/* Impostazioni Browser */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Gestione Cookie nei Browser
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Puoi gestire i cookie direttamente dalle impostazioni del tuo browser:
            </p>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a 
                  href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a 
                  href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Safari (Mac)
                </a>
              </li>
              <li>
                <a 
                  href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          {/* Cookie di Terze Parti */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Cookie di Terze Parti
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I cookie di terze parti sono impostati da domini diversi dal nostro. Non abbiamo accesso né controllo su questi cookie. Ti invitiamo a consultare le privacy policy dei servizi terzi per maggiori informazioni:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Meta Privacy Policy</a></li>
            </ul>
          </section>

          {/* Contatti */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Contatti
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Per domande sulla nostra Cookie Policy, puoi contattarci:
            </p>
            <div className="bg-background-secondary p-6 rounded-lg">
              <p className="text-text-primary"><strong>Studio Beneduce</strong></p>
              <p className="text-text-secondary">Email: studio.beneduce@gmail.com</p>
              <p className="text-text-secondary">Telefono: 388 608 4324</p>
            </div>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              Modifiche alla Cookie Policy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Potremmo aggiornare questa Cookie Policy periodicamente. Ti invitiamo a controllare regolarmente questa pagina per eventuali modifiche. La data di ultimo aggiornamento è indicata in cima alla pagina.
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/"
            className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            ← Torna alla Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white mt-20">
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
    </div>
  )
}
