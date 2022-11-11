import { useState, useEffect, useRef, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { getPoap } from "../provider/contractInstance";
import { address } from "../constant";

const PoapHooks = () => {
  const { active, library } = useWeb3React();
  let signer = useRef();
  let provider = useRef();
  let poap = useRef();

  useEffect(
    () => {
      if (active) {
        signer.current = library.getSigner();
      } else {
        provider.current = new ethers.providers.JsonRpcProvider(
          process.env.NEXT_PUBLIC_RPC_URL
        );
      }
    },
    // eslint-disable-next-line
    [active]
  );

  poap.current = getPoap(address, signer.current || provider.current);


  const CreateEvent = useCallback(
    async (name, symbol, uri, callback) => {
      if (!active) throw new Error("You're not connected");
      if (!poap.current) return;
      try {
        await poap.current
          .createEvent(name, symbol, uri)
          .then(callback)
          .catch(callback);
      } catch (error) {
        console.log(error);
        throw new Error("something went wrong");
      }
    },
    [active]
  );

  return {
    CreateEvent,
  };
};

export default PoapHooks;
