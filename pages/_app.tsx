import "../styles/globals.css";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
export default MyApp;
