import Document, { Html, Head, Main, NextScript } from "next/document";
import getBaseUrl from "@lib/getBaseUrl";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-EN">
        <Head>
          <script
            defer
            data-domain="reactive.so"
            src="https://plausible.io/js/plausible.js"
          ></script>
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href={getBaseUrl() + "/favicon.ico"}
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
