import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head />
      <title>Fullstack Developer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Erstellung einer Webseite und/oder mobiler App ganz nach Ihren Wünschen und modernster Techniken entsprechend" />
      <body className="bg-gray-200 dark:bg-bgColor pattern-isometric pattern-neutral-800 pattern-bg-transparent pattern-opacity-100 pattern-size-8">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
