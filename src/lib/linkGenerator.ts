import { TMetadata } from "@schema/metadata";

const BLOG_URL = "https://blog.herbievine.com/post";

const BASE_LINKS = {
  twitter: {
    url: "https://twitter.com/intent/tweet",
    params: {
      title: "text",
      url: "url",
    },
  },
  reddit: {
    url: "https://www.reddit.com/submit",
    params: {
      title: "title",
      url: "url",
    },
  },
  linkedin: {
    url: "https://www.linkedin.com/shareArticle?mini=true",
    params: {
      url: "url",
    },
  },
  hackernews: {
    url: "https://news.ycombinator.com/submitlink",
    params: {
      title: "t",
      url: "u",
    },
  },
};

const generateLink = (
  key: keyof typeof BASE_LINKS,
  metadata: TMetadata
): string => {
  const baseLink = BASE_LINKS[key];
  const url = new URL(baseLink.url);
  const data = {
    title: metadata.title,
    url: `${BLOG_URL}/${metadata.slug}`,
  };

  for (const [key] of Object.entries(baseLink.params) as [
    keyof typeof baseLink.params,
    string
  ][]) {
    url.searchParams.append(baseLink.params[key], data[key]);
  }

  // url.searchParams.append(baseLink.params.title, title);
  // url.searchParams.append(baseLink.params.url, `${BLOG_URL}/${slug}`);

  return url.href;
};

export default generateLink;
