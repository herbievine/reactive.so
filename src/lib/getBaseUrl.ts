const getBaseUrl = (): string => {
  return (
    process.env.HOST ??
    process.env.NEXT_PUBLIC_URL ??
    `http://localhost:${process.env.PORT ?? 3000}`
  );
};

export default getBaseUrl;
