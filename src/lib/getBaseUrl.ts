const getBaseUrl = (): string => {
  const { origin } = window.location;
  return process.env.NEXT_PUBLIC_URL ?? origin;
};

export default getBaseUrl;
