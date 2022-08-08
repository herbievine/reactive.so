const getBaseUrl = (): string => {
  if (typeof window !== "undefined") {
    return "";
  }

  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://localhost:${process.env.PORT ?? 3000}`;
};

export default getBaseUrl;
