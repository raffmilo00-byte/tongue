import axios from 'axios';

export const HackerNewsRepository = {
  async fetchNewStoriesIds() {
    const res = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
    return res.data;
  },

  async fetchItem(id) {
    const res = await axios.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
    return res.data;
  }
};
