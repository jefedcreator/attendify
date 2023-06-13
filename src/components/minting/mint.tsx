"use client";
import Image from "next/image";
import conflux from "@public/assets/conflux.png";
import MintButton from "@components/mintButton/MintButton";
import { useContractRead, useAccount } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";

const Minting = ({ prezent }: { prezent: string }) => {
  const { connector: activeConnector, isConnected, address } = useAccount();

  const { data } = useContractRead({
    address: attendifyAddress,
    abi: attendifyAbi,
    args: [prezent, address],
    functionName: "prezentBalance",
    onSuccess(data) {
      console.log("Success", data);
      // setMintAddress(data.result as ICreated);
    },
    // account: address
  });

  const balance = parseInt(data as string, 16);

  return (
    <div className="w-full mx-auto flex flex-col items-center text-center gap-4">
      <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
        You’re about to mint your Preznt for attending
        <br /> Web3 community call by Attendify.
      </p>
      <Image src={conflux} alt="nft image" />
      <MintButton prezent={prezent} balance={balance == 1} />
    </div>
  );
};

export default Minting;
