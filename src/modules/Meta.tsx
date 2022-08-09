import getBaseUrl from "@lib/getBaseUrl";
import Head from "next/head";
import type React from "react";

interface MetaProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  alt?: string;
  width?: string;
  height?: string;
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  image,
  url = getBaseUrl(),
  alt = `${title} - Reactive`,
  width = "1200",
  height = "627",
}) => {
  return (
    <Head>
      <title>{title} - Reactive</title>
      <meta name="title" content={`${title} - Reactive`} key="title" />
      <meta name="description" content={description} key="description" />

      {/* Open Graph */}
      <meta name="og:title" content={title} key="og:title" />
      <meta name="og:description" content={description} key="og:description" />
      <meta name="og:image" content={image} key="og:image" />
      <meta
        name="og:image:secure_url"
        content={image}
        key="og:image:secure_url"
      />
      <meta property="og:image:type" content="image/png" key="og:image:type" />
      <meta property="og:image:width" content={width} key="og:image:width" />
      <meta property="og:image:height" content={height} key="og:image:height" />
      <meta property="og:image:alt" content={alt} key="og:image:alt" />
      <meta property="og:site_name" content="reactive" key="og:site_name" />
      <meta property="og:url" content={url} key="og:url" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={image} key="twitter:image" />
      <meta
        property="twitter:domain"
        content={getBaseUrl()}
        key="twitter:domain"
      />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
    </Head>
  );
};

export default Meta;
