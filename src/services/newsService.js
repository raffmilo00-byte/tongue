import { HackerNewsRepository } from '../api/hackerNewsRepository.js';

export const NewsService = {
  allIds: [],
  setAllIds(ids) { this.allIds = ids || []; },
  async fetchPageDetails(start, size) {
    const slice = (this.allIds || []).slice(start, start + size);
    const promises = slice.map(id => HackerNewsRepository.fetchItem(id));
    return Promise.all(promises);
  }
};
