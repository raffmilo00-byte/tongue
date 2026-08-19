import { describe, it, expect } from "vitest";
import { NewsService } from "../src/services/newsService.js";

describe("NewsService", () => {
  it("should return 10 news items", async () => {
    NewsService.setAllIds([1,2,3,4,5,6,7,8,9,10]);

    const result = await NewsService.fetchPageDetails(0, 10);

    expect(result.length).toBe(10);
  });
});
