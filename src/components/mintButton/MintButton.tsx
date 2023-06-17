"use client";
import { useAccount } from "wagmi";
import Connect from "@components/connectButton/ConnectButton";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import { toast } from "react-toastify";
import Link from "next/link";

const MintButton = ({
  prezent,
  balance,
}: {
  prezent: string;
  balance: boolean;
}) => {
  const { connector: activeConnector, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: attendifyAddress,
    abi: attendifyAbi,
    functionName: "claimPrezent",
    args: [prezent],
  });

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite(config);

  const handleMint = () => {
    writeAsync?.().then(() => {
      toast.success(
        <>
          {`minted succesfully`} <br/>
          <Link
            href={`https://testnets.opensea.io/assets/mumbai/${prezent}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on opensea
          </Link>
        </>
      );
    });
  };

  if (isConnected) {
    return (
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <button
          className={`${
            balance || isSuccess ? "bg-purple-600" : "bg-[#6E4AE7]"
          }  text-[#F9F8FB] text-center w-[100%] md:w-[45%] px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6`}
          onClick={handleMint}
          disabled={balance || isSuccess}
        >
          {isLoading
            ? "Minting..."
            : isSuccess || balance
            ? "Minted"
            : "Mint Prezent"}
        </button>
        {!balance && !isSuccess && (
          <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
            Click the button to mint
          </p>
        )}
      </div>
    );
  }

  return <Connect isMintPage={true} />;
};

export default MintButton;
