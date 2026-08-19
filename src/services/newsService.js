import { HackerNewsRepository } from "../api/hackerNewsRepository.js";

export const NewsService = {
  allIds: [],

  setAllIds(ids) {
    this.allIds = ids;
  },

  async fetchPageDetails(startIndex, pageSize) {
    const slice = this.allIds.slice(startIndex, startIndex + pageSize);

    const items = await Promise.all(
      slice.map(async id => {
        const item = await HackerNewsRepository.fetchItem(id);
        return {
          ...item,
          formattedTime: new Date(item.time * 1000).toLocaleString()
        };
      })
    );

    return items;
  }
};
