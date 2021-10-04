import Head from "next/head";
import "../styles/globals.css";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <ToastContainer limit={2} />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
