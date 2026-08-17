import { describe, it, expect } from "vitest";
import { fetchNews } from "../src/api/hackerNewsRepository.js";

describe("repository", () => {
  it("should fetch data from API", async () => {
    const data = await fetchNews();
    expect(data).toBeDefined();
  });
});
