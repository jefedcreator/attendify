"use client";
import { useAccount } from "wagmi";
import Connect from "@components/connectButton/ConnectButton";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";

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
    onSuccess(data) {
      console.log("Success", data);
      // setMintAddress(data.result as ICreated);
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  if (isConnected) {
    return (
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <button
          className={`${
            balance || isSuccess ? "bg-[#1b56ea]" : "bg-[#6E4AE7]"
          }  text-[#F9F8FB] text-center w-[100%] md:w-[45%] px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6`}
          onClick={() => write?.()}
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
