import "@styles/globals.css";
import type { AppProps} from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { ToastProvider } from "react-toast-notifications";
import { getLibrary } from "../../web3/helper";
import CreateEventProvider from "../../context/eventContext/event";

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <ToastProvider newestOnTop={true} autoDismiss={true}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <CreateEventProvider>
            <Component {...pageProps} />
          </CreateEventProvider>
        </Web3ReactProvider>
      </ToastProvider>
    </>
  );
}

export default MyApp;