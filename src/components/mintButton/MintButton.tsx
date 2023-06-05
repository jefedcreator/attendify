"use client"
import { useAccount, useConnect } from "wagmi";
import Connect from "@components/connectButton/ConnectButton";

const MintButton = () => {
  const { connector: activeConnector, isConnected } = useAccount();

  if (isConnected) {
    return (
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <button className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-[100%] md:w-[45%] px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6">
          Mint Prezent
        </button>

        <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
          Click the button to mint
        </p>
      </div>
    );
  }

  return <Connect isMintPage={true}/>;
};

export default MintButton;
