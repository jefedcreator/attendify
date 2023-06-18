"use client";
import Image from "next/image";
import { useState, useContext, useEffect } from "react";
import MintButton from "@components/mintButton/MintButton";
import { useContractRead, useAccount, useContractEvent } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent, IMintedEvent } from "src/utils/types/types";
import { fetchNftMeta } from "src/utils/helper";
import Loader from "@components/loading/loading";

const Minting = ({ prezent }: { prezent: string }) => {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { mintedEvents, setMintedEvents, createdEvents } =
    useContext(attendifyContext);
  const [created, setCreated] = useState<ICreatedEvent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const isCreated: ICreatedEvent =
      createdEvents &&
      createdEvents.find((created: ICreatedEvent) => created.poap == prezent);
    setCreated(isCreated);
    setLoading(false);
  }, [createdEvents, prezent]);

  useContractEvent({
    address: attendifyAddress,
    abi: attendifyAbi,
    eventName: "mintedPrezents",
    async listener(log: any) {
      console.log("mintedPrezents", log[0].topics);
      const ipfsRes = log[0].args.eventUri
        ? `https://ipfs.io/ipfs/${log[0].args.eventUri.slice(7)}`
        : "";
      let ipfsMeta = await fetchNftMeta(ipfsRes);
      setMintedEvents((prev: ICreatedEvent[]) => {
        return [
          ...prev,
          {
            ...created,
            eventUri: ipfsMeta?.image,
          },
        ];
      });
    },
  });

  const { data } = useContractRead({
    address: attendifyAddress,
    abi: attendifyAbi,
    args: [prezent, address],
    functionName: "prezentBalance",
    onSuccess(data) {
      console.log("Success", data);
      // setMintAddress(data.result as ICreated);
    },
  });

  const balance = parseInt(data as string, 16);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full mx-auto">
      {created ? (
        <div className="w-full flex flex-col items-center text-center gap-4">
          <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
            You’re about to mint your Preznt for attending
            <br /> {created?.eventName}
          </p>
          <Image
            src={created?.eventUri}
            alt="nft image"
            width={200}
            height={200}
            className="clip-vr"
          />
          <MintButton prezent={prezent} balance={balance == 1} />
        </div>
      ) : (
        <div className="w-full mx-auto flex flex-col items-center text-center gap-4">
          <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
            Error, this link does not exist
          </p>
        </div>
      )}
    </div>
  );
};

export default Minting;
