import axios from "axios";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const HackerNewsRepository = {
  async fetchNewStoriesIds() {
    const res = await axios.get(`${BASE_URL}/newstories.json`);
    return res.data;
  },

  async fetchItem(id) {
    const res = await axios.get(`${BASE_URL}/item/${id}.json`);
    const item = res.data;

    return {
      ...item,
      formattedTime: new Date(item.time * 1000).toLocaleString()
    };
  },

  async fetchNews() {
    const ids = await this.fetchNewStoriesIds();
    const first10 = ids.slice(0, 10);
    const items = await Promise.all(first10.map(id => this.fetchItem(id)));
    return items;
  }
};
