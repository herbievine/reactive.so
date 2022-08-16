const readingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  const minutes = Math.round(words / wordsPerMinute);
  return `${minutes} min read`;
};

export default readingTime;
