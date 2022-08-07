import "../styles/globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

dayjs.extend(relativeTime);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
