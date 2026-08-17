import { HackerNewsRepository } from "../api/hackerNewsRepository.js";

export const NewsService = {
  allIds: [],

  setAllIds(ids) {
    this.allIds = ids;
  },

  async fetchPageDetails(startIndex, pageSize) {
    const slice = this.allIds.slice(startIndex, startIndex + pageSize);
    const items = await Promise.all(slice.map(id => HackerNewsRepository.fetchItem(id)));
    return items;
  }
};
