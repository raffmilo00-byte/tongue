import { NewsService } from './services/newsService.js';
import { HackerNewsRepository } from './api/hackerNewsRepository.js';

async function init() {
  try {
    // 1️⃣ Carica tutti gli ID delle news
    const ids = await HackerNewsRepository.fetchNewStoriesIds();

    // 2️⃣ Salvali nel NewsService
    NewsService.setAllIds(ids);

    // 3️⃣ Carica la prima pagina (esempio: 0–10)
    const items = await NewsService.fetchPageDetails(0, 10);

    console.log("Items:", items);

    // Qui puoi aggiornare il DOM
    // renderItems(items);
  } catch (error) {
    console.error("Errore nel caricamento:", error);
  }
}

init();
