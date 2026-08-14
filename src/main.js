import { NewsService } from './services/newsService.js';
import { HackerNewsRepository } from './api/hackerNewsRepository.js';

let currentIndex = 0;
const pageSize = 10;

function formatDate(unix) {
  return new Date(unix * 1000).toLocaleString();
}

function renderItems(items) {
  const list = document.getElementById("list");

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "news-item";

    div.innerHTML = `
      <h3>${item.title || "Titolo non disponibile"}</h3>
      <p>Pubblicato: ${formatDate(item.time)}</p>
      <a href="${item.url || "#"}" target="_blank">Apri la fonte</a>
      <hr>
    `;

    list.appendChild(div);
  });
}

async function loadNext() {
  const items = await NewsService.fetchPageDetails(currentIndex, pageSize);
  renderItems(items);
  currentIndex += pageSize;

  if (currentIndex >= NewsService.allIds.length) {
    document.getElementById("loadMore").disabled = true;
    document.getElementById("loadMore").innerText = "No more news";
  }
}

async function init() {
  try {
    const ids = await HackerNewsRepository.fetchNewStoriesIds();
    NewsService.setAllIds(ids);

    // Costruzione UI iniziale
    document.getElementById("app").innerHTML = `
      <h1>Ultime News</h1>
      <div id="list"></div>
      <button id="loadMore">Load more</button>
    `;

    document.getElementById("loadMore").addEventListener("click", loadNext);

    // Carica i primi 10
    await loadNext();

  } catch (error) {
    console.error("Errore nel caricamento:", error);
    document.getElementById("app").innerHTML = "<p>Errore nel caricamento.</p>";
  }
}

init();
