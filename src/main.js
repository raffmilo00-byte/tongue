import { HackerNewsRepository } from './api/hackerNewsRepository.js';
import { NewsService } from './services/newsService.js';

const app = document.getElementById('app') || document.body;

async function bootstrap() {
  app.innerHTML = '<p>Caricamento ID...</p>';
  try {
    const ids = await HackerNewsRepository.fetchNewStoriesIds();
    NewsService.setAllIds(ids);
    renderInitial();
  } catch (err) {
    app.innerHTML = '<p>Errore nel caricamento degli ID. Riprova più tardi.</p>';
    console.error(err);
  }
}

let currentIndex = 0;
const pageSize = 10;

async function renderInitial() {
  app.innerHTML = `
    <h1>Tongue · Ultime news</h1>
    <div id="list"></div>
    <div style="margin-top:12px">
      <button id="loadMore">Load more</button>
    </div>
  `;
  document.getElementById('loadMore').addEventListener('click', loadNext);
  await loadNext();
}

async function loadNext() {
  const list = document.getElementById('list');
  const items = await NewsService.fetchPageDetails(currentIndex, pageSize);
  items.forEach(it => {
    const el = document.createElement('div');
    el.className = 'news-item';
    el.innerHTML = `
      <a href="\${it.url || '#'}" target="_blank" rel="noopener noreferrer">\${it.title || 'No title'}</a>
      <div class="meta">\${new Date((it.time||0)*1000).toLocaleString()}</div>
    `;
    list.appendChild(el);
  });
  currentIndex += pageSize;
  const loadBtn = document.getElementById('loadMore');
  if ((NewsService.allIds || []).length <= currentIndex) loadBtn.disabled = true;
}

bootstrap();
