import { getAllPosts } from "@lib/api";
import getBaseUrl from "@lib/getBaseUrl";
import type { NextPage, GetServerSideProps } from "next";
import type React from "react";

interface SiteMapProps {}

const SiteMap: NextPage<SiteMapProps> = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const allPosts = getAllPosts().map(({ post }) => post.metadata.slug);
  const allPages = [...allPosts.map((slug) => `/post/${slug}`), ...[""]];

  res.setHeader("Content-Type", "text/xml");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				${allPages
          .map((slug) => {
            return `
								<url>
										<loc>${getBaseUrl()}${slug}</loc>
								</url>
						`;
          })
          .join("")}
		</urlset>
	`);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
