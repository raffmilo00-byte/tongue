import { describe, it, expect } from "vitest";
import { getNews } from "../src/services/newsService.js";

describe("newsService", () => {
  it("should return an array of news", async () => {
    const news = await getNews();
    expect(Array.isArray(news)).toBe(true);
  });
});

