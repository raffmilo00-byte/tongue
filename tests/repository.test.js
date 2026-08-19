import { describe, it, expect, vi } from "vitest";
import { HackerNewsRepository } from "../src/api/hackerNewsRepository.js";

describe("HackerNewsRepository", () => {
  it("fetchNews should return 10 items", async () => {
    vi.spyOn(HackerNewsRepository, "fetchNewStoriesIds")
      .mockResolvedValue([1,2,3,4,5,6,7,8,9,10]);

    vi.spyOn(HackerNewsRepository, "fetchItem")
      .mockImplementation(id => {
        return Promise.resolve({
          id,
          title: `Titolo ${id}`,
          url: `https://example.com/${id}`,
          time: 1234567890
        });
      });

    const result = await HackerNewsRepository.fetchNews();

    expect(result.length).toBe(10);
    expect(result[0].id).toBe(1);
  });
});
