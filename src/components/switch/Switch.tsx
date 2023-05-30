"use client";

import { useState } from "react";
import Explore from "@components/walletConnect/Explore/explore";
import { ConnectButton } from '@rainbow-me/rainbowkit';
// import Connect from "@components/walletConnect/Connect/connect";

type ConnectExploreType = "connect" | "explore";

const Switch = () => {
  const [mySwitch, setMySwitch] = useState<ConnectExploreType>("connect");

  return (
    <div className={"text-center space-x-6 my-4 w-full"}>
      <div className="flex justify-between w-[80%] md:w-1/2 items-center mx-auto">
        <h2
          className={
            mySwitch == "connect"
              ? "underline underline-offset-8 decoration-2 decoration-[#B5179E] text-white cursor-pointer"
              : "underline underline-offset-8 decoration-2 decoration-[#5E547F] text-[#BDB7CF] cursor-pointer"
          }
          onClick={() => setMySwitch("connect")}
        >
          Connect Wallet
        </h2>
        <h2
          className={
            mySwitch == "explore"
              ? "underline underline-offset-8 decoration-2 decoration-[#B5179E] text-white cursor-pointer"
              : "underline underline-offset-8 decoration-2 decoration-[#5E547F] text-[#BDB7CF] cursor-pointer"
          }
          onClick={() => setMySwitch("explore")}
        >
          Explore Wallet
        </h2>
      </div>
      <div className="flex items-center justify-center p-5">
        {mySwitch == "explore" ? (
          <h3 className="text-white">Explore</h3>
        ) : (
          <ConnectButton />
        )}
      </div>
    </div>
  );
};

export default Switch;
