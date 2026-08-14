import { NewsService } from './services/newsService.js';
import { HackerNewsRepository } from './api/hackerNewsRepository.js';

function renderItems(items) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // pulizia

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item";

    div.innerHTML = `
      <h3>${item.title || "Titolo non disponibile"}</h3>
      <p>By: ${item.by || "Unknown"}</p>
      <a href="${item.url || "#"}" target="_blank">Apri</a>
      <hr>
    `;

    app.appendChild(div);
  });
}

async function init() {
  try {
    const ids = await HackerNewsRepository.fetchNewStoriesIds();
    NewsService.setAllIds(ids);

    const items = await NewsService.fetchPageDetails(0, 10);

    renderItems(items); // MOSTRA GLI ITEMS
  } catch (error) {
    console.error("Errore nel caricamento:", error);
    document.getElementById("app").innerHTML = "<p>Errore nel caricamento.</p>";
  }
}

init();
