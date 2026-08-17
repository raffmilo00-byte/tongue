import { describe, it, expect } from "vitest";

function paginate(items, page, perPage) {
  const start = (page - 1) * perPage;
  return items.slice(start, start + perPage);
}

describe("pagination", () => {
  it("should paginate correctly", () => {
    const items = [1,2,3,4,5];
    const page = paginate(items, 2, 2);
    expect(page).toEqual([3,4]);
  });
});
