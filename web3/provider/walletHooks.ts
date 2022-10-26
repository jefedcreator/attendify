// 
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injected } from "./connector";

export default function useEagerConnect() {
  const { activate, active, library } = useWeb3React();

  const [tried, setTried] = useState(false);


  useEffect(() => {

    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          setTried(true);
        });
      } else {

        setTried(true);
      }
    });
  }, [activate]);

  useEffect(() => {
    const walletConnect = window.localStorage.getItem("walletconnect");
    if (walletConnect) {
      const parsedJson = JSON.parse(walletConnect)
      if (parsedJson.connected) {
        activate(injected, undefined, true).catch((error) => {
          console.log(error)
          setTried(true);
        });
      }
    }
  }, [activate]);

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}
