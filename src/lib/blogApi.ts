import { createServerFn } from "@tanstack/react-start";

const BASE_URL = "https://admin.thedentalroots.com";

// Disable strict serialization check since API returns dynamic JSON
export const fetchBlogList = createServerFn({ method: "GET", strict: false }).handler(async () => {
  const res = await fetch(`${BASE_URL}/api/blog`);
  if (!res.ok) throw new Error(`Blog API error: ${res.status}`);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return res.json() as Promise<any>;
});

export const fetchBlogDetail = createServerFn({ method: "GET", strict: false })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const res = await fetch(`${BASE_URL}/api/blog/${slug}`);
    if (!res.ok) throw new Error(`Blog detail API error: ${res.status}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return res.json() as Promise<any>;
  });
