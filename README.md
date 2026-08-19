Tongue – HackerNews Client
Tongue è un’applicazione web che permette di consultare le ultime notizie pubblicate su HackerNews. Il progetto è stato sviluppato con un’architettura modulare, separando la logica di comunicazione con l’API, la gestione dei dati, la presentazione e gli asset grafici. L’interfaccia è semplice, pulita e progettata per offrire una consultazione immediata delle notizie.

Obiettivi del progetto
L’obiettivo principale è realizzare un client che:

recupera gli ID delle ultime news tramite l’API pubblica di HackerNews;

recupera i dettagli delle singole news (titolo, URL, timestamp);

visualizza le notizie in modo ordinato e leggibile;

implementa un sistema di caricamento progressivo tramite pulsante “Load more”;

gestisce correttamente la fine della lista;

effettua il deploy su Vercel;

include test di base tramite Vitest.

Architettura del progetto
La struttura del progetto è organizzata come segue:

Codice
src/
│
├── api/
│   └── hackerNewsRepository.js      # Comunicazione con l’API HackerNews
│
├── services/
│   └── newsService.js               # Logica di business e formattazione dei dati
│
├── components/                      # Componenti futuri o opzionali
│
├── assets/
│   └── css/
│       └── style.css                # Foglio di stile dell’interfaccia
│
├── utils/                           # Funzioni di utilità
│
└── main.js                          # Entry point dell’applicazione
Funzionamento
Recupero degli ID delle news
Il modulo HackerNewsRepository effettua una chiamata all’endpoint pubblico di HackerNews, ottenendo un array di ID relativi alle ultime notizie pubblicate.

Recupero dei dettagli
Il servizio NewsService utilizza gli ID per recuperare i dettagli delle singole news, formattando la data e preparando i dati per la visualizzazione.

Visualizzazione e paginazione
Il file main.js gestisce:

la creazione della struttura HTML;

il rendering delle notizie in card;

il caricamento progressivo tramite pulsante “Load more”;

la disabilitazione del pulsante quando non sono presenti ulteriori notizie.

Interfaccia grafica
Lo stile dell’applicazione è definito nel file:

Codice
src/assets/css/style.css
Il foglio di stile gestisce:

layout centrato;

card con ombreggiatura;

pulsante di caricamento;

sfondo neutro;

spaziature e leggibilità.

Installazione
Per installare il progetto in locale:

bash
git clone https://github.com/raffmilo00-byte/tongue.git
cd tongue
npm install
npm run dev
Build
Per generare la build di produzione:

bash
npm run build
Test
Il progetto include test di base tramite Vitest.
Per eseguirli:

bash
npm run test
Deploy
Il progetto è pubblicato tramite Vercel.

Demo online:
https://tongue-7bjotkzbq-raff9.vercel.app

Screenshot
Inserire qui uno screenshot dell’interfaccia e uno del pannello di deploy Vercel.

Link utili
Repository GitHub:
https://github.com/raffmilo00-byte/tongue

Demo Vercel:
https://tongue-7bjotkzbq-raff9.vercel.app

Conclusioni
Tongue è un progetto che dimostra l’utilizzo corretto di API esterne, la gestione della paginazione, la separazione dei moduli, l’implementazione di test e la pubblicazione tramite un servizio di hosting moderno. L’applicazione è stabile, funzionante e pronta per la consegna accademica.
