export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-lg text-text-secondary mb-12">
          Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          {/* 1. Titolare del Trattamento */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              1. Titolare del Trattamento
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Il Titolare del trattamento dei dati personali è:
            </p>
            <div className="bg-background-secondary p-6 rounded-lg my-4">
              <p className="text-text-primary"><strong>Dott. Mauro Beneduce</strong></p>
              <p className="text-text-secondary">Commercialista</p>
              <p className="text-text-secondary">P.IVA: 04828461212</p>
              <p className="text-text-secondary">Indirizzo: Piazza Cattaneo 11, Sant&apos;Anastasia (NA) 80048</p>
              <p className="text-text-secondary">Telefono: 388 608 4324</p>
              <p className="text-text-secondary">Email: studio.beneduce@gmail.com</p>
            </div>
          </section>

          {/* 2. Dati Raccolti */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              2. Dati Personali Raccolti
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Attraverso il form di contatto presente sul sito, raccogliamo i seguenti dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Nome e Cognome</li>
              <li>Indirizzo Email</li>
              <li>Numero di Telefono</li>
              <li>Tipo di attività svolta</li>
              <li>Fatturato annuo indicativo</li>
              <li>Messaggio (opzionale)</li>
            </ul>
          </section>

          {/* 3. Finalità */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              3. Finalità del Trattamento
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I dati personali forniti vengono trattati per le seguenti finalità:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li><strong>Gestione richieste di consulenza:</strong> per rispondere alla tua richiesta di consulenza gratuita e fissare un appuntamento</li>
              <li><strong>Comunicazioni pre-contrattuali:</strong> per fornirti informazioni sui nostri servizi</li>
              <li><strong>Adempimenti di legge:</strong> per adempiere agli obblighi previsti da leggi, regolamenti e normativa comunitaria</li>
            </ul>
          </section>

          {/* 4. Base Giuridica */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              4. Base Giuridica del Trattamento
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Il trattamento dei tuoi dati personali si basa sul <strong>consenso esplicito</strong> che fornisci al momento della compilazione del form (Art. 6, comma 1, lett. a) del GDPR).
            </p>
          </section>

          {/* 5. Modalità di Trattamento */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              5. Modalità di Trattamento
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I dati personali sono trattati con strumenti informatici e telematici, con logiche strettamente correlate alle finalità indicate, e comunque in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I dati vengono conservati in archivi digitali sicuri (Google Sheets) con accesso limitato al solo personale autorizzato.
            </p>
          </section>

          {/* 6. Conservazione */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              6. Periodo di Conservazione
            </h2>
            <p className="text-text-secondary leading-relaxed">
              I dati personali saranno conservati per il tempo strettamente necessario al perseguimento delle finalità per cui sono stati raccolti e comunque nel rispetto delle normative fiscali e civilistiche vigenti (generalmente 10 anni dalla cessazione del rapporto professionale).
            </p>
          </section>

          {/* 7. Destinatari */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              7. Comunicazione e Diffusione dei Dati
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I tuoi dati personali non saranno diffusi a terzi. Potranno essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li>Soggetti che forniscono servizi per la gestione del sistema informatico (Google LLC per Google Sheets)</li>
              <li>Autorità competenti per adempimenti di legge</li>
            </ul>
          </section>

          {/* 8. Diritti dell'Interessato */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              8. Diritti dell&apos;Interessato
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              In qualità di interessato, hai diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary">
              <li><strong>Accesso:</strong> ottenere conferma dell&apos;esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica:</strong> ottenere la correzione dei dati inesatti</li>
              <li><strong>Cancellazione:</strong> ottenere la cancellazione dei dati (diritto all&apos;oblio)</li>
              <li><strong>Limitazione:</strong> ottenere la limitazione del trattamento</li>
              <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato e trasmetterli ad altro titolare</li>
              <li><strong>Opposizione:</strong> opporti al trattamento dei tuoi dati</li>
              <li><strong>Revoca del consenso:</strong> revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Per esercitare i tuoi diritti, contattaci all&apos;indirizzo email: <strong>studio.beneduce@gmail.com</strong>
            </p>
          </section>

          {/* 9. Reclamo */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              9. Diritto di Reclamo
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Hai il diritto di proporre reclamo all&apos;Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) qualora ritenga che il trattamento dei tuoi dati personali violi il GDPR.
            </p>
          </section>

          {/* 10. Modifiche */}
          <section>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-black mb-4">
              10. Modifiche alla Privacy Policy
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Il Titolare si riserva il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
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
