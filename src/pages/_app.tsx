import type { AppRouter } from "@/server/router";
import "@/styles/globals.css";
import getBaseUrl from "@/utils/getBaseUrl";
import { withTRPC } from "@trpc/next";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";

dayjs.extend(relativeTime);

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
