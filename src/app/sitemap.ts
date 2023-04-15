import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

const BASE_URL = "https://reactive.so";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${BASE_URL}/${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...posts,
  ];
}
