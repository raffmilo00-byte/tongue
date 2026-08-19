# Tongue  
Applicazione web per la consultazione delle ultime notizie pubblicate su Hacker News, sviluppata con JavaScript, Vite e Vitest. Il progetto adotta una struttura modulare che separa la logica di business, l’accesso ai dati e la presentazione, garantendo manutenibilità e chiarezza architetturale.

---

## Descrizione del progetto
Tongue è una web application che consente di visualizzare in modo semplice e immediato le news più recenti provenienti da Hacker News.  
L’applicazione effettua una chiamata alle API pubbliche, recupera gli ID delle notizie più recenti e li gestisce tramite un sistema di paginazione. Ogni elemento viene poi arricchito con una data di pubblicazione formattata e un link diretto alla fonte.

Il progetto include test automatici per verificare il corretto funzionamento del repository, del service e della logica di paginazione.

---

## Struttura del progetto
tongue/
src/api/hackerNewsRepository.js
src/services/newsService.js
src/main.js
src/style.css
src/index.html
tests/repository.test.js
tests/newsService.test.js
tests/pagination.test.js
package.json
vite.config.js
favicon.svg

Codice

---

## Tecnologie utilizzate

- JavaScript
- Vite
- Vitest
- Axios
- HTML5 e CSS3
- Hacker News API

---

## API utilizzata

L’applicazione utilizza gli endpoint pubblici di Hacker News:

- Recupero degli ID delle ultime news  
  `https://hacker-news.firebaseio.com/v0/newstories.json`

- Recupero dei dettagli di una singola news  
  `https://hacker-news.firebaseio.com/v0/item/{id}.json`

---

## Funzionamento dell’applicazione

1. **Recupero degli ID delle news**  
   Il repository effettua una chiamata alle API e ottiene la lista degli ID delle notizie più recenti.

2. **Paginazione**  
   Il service gestisce la lista degli ID e fornisce dieci elementi alla volta.

3. **Recupero dei dettagli**  
   Per ogni ID viene scaricato l’oggetto completo della news.

4. **Formattazione della data**  
   Il timestamp UNIX fornito dall’API viene convertito in una data leggibile.

5. **Rendering dell’interfaccia**  
   La UI mostra titolo, data di pubblicazione e link alla fonte.

---

## Test automatici (Vitest)

Il progetto include tre test principali:

### Test del repository
Verifica che il repository:
- recuperi correttamente dieci elementi,
- gestisca correttamente la funzione `fetchItem`,
- utilizzi correttamente i mock delle API.

### Test del service
Verifica che il service:
- gestisca correttamente la paginazione,
- restituisca il numero corretto di elementi,
- utilizzi correttamente gli ID forniti.

### Test della paginazione
Verifica la correttezza della logica di suddivisione degli elementi.

Per eseguire i test:

npm test

Codice

---

## Installazione

Clonare la repository:

git clone https://github.com/raffmilo00-byte/tongue.git

Codice

Installare le dipendenze:

npm install

Codice

Avviare il progetto in ambiente di sviluppo:

npm run dev

Codice

---

## Deploy

Il progetto è compatibile con:
- Vercel
- Netlify
- GitHub Pages

La struttura basata su Vite consente un deploy immediato senza configurazioni aggiuntive.

---

## Autore

Raff  
GitHub: https://github.com/raffmilo00-byte

---

## Licenza

Il progetto è distribuito sotto licenza ISC.
