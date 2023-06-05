"use client";
import { useState } from "react";
// import Explore from "@components/walletConnect/Explore/explore";
import Connect from "@components/connectButton/ConnectButton";
import { ConnectExploreType } from "src/utils/types/types";


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
      <div className="flex flex-col items-center justify-center p-5">
        {mySwitch == "explore" ? (
          <h3 className="text-white">Explore</h3>
        ) : (
          <Connect isMintPage={false}/>
        )}
      </div>
      <p className="text-[#9D94B8] font-jarkata">
        Connect your wallet to view your collection
      </p>
    </div>
  );
};

export default Switch;
