"use client";
import Image from "next/image";
import { useContext } from "react";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { IoMdClose } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import reddit from "@public/assets/reddit-icon.svg";
import twitter from "@public/assets/twitter-icon.svg";
import telegram from "@public/assets/telegram-icon.svg";
import { IModal, ICreatedEvent } from "src/utils/types/types";
import { useAccount } from "wagmi";

const CollectionModal = ({ value, setModal }: IModal) => {
  const { address } = useAccount();
  const { mintedEvents } = useContext(attendifyContext);

  const item: ICreatedEvent = mintedEvents[value] ?? {}; // Use empty object as a fallback
  return (
    <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed md:absolute h-[90vh] md:h-[80vh] md:w-[30vw] w-80 text-white rounded-lg md:top-10 top-[50%] left-[50%] -translate-x-1/2 md:-translate-y-1/4 -translate-y-1/2 z-20 flex flex-col item-center text-center p-3 gap-3 md:gap-2">
      <div className="w-full relative flex">
        <Image
          src={item.eventUri}
          alt="hacker image"
          className="w-[50%] md:w-[30%] mx-auto"
          width={100}
          height={100}
        />{" "}
        <IoMdClose
          className="absolute right-0 cursor-pointer"
          onClick={() => setModal(false)}
        />
      </div>
      <h1 className="font-syne font-normal text-22 leading-32 text-[#F9F8FB]">
        {item.eventName}
      </h1>
      <p className="font-jarkata font-normal text-smallxxx leading-6 text-[#DEDBE7]">
        {" "}
        <span className="font-jarkata font-normal text-smallxxx leading-6 text-[#9D94B8]">
          By
        </span>{" "}
        {item.organizer}
      </p>
      <p className="font-jarkata font-normal md:text-sm text-smallxxx md:leading-6 leading-2 text-[#BDB7CF]">{`This Prezent confirms ${address} was at ${item.eventName}`}</p>
      <span className="flex items-center justify-center gap-1">
        <p className="font-jarkata font-normal text-sm leading-6 text-[#BDB7CF]">
          view on opensea
        </p>
        <FiExternalLink />
      </span>
      <p className="font-jarkata font-normal text-smallxxx leading-6 text-[#9D94B8]">
        Date
      </p>
      <p className="font-jarkata font-normal text-sm leading-6 text-[#F9F8FB]">
        {item.date}
      </p>
      <p className="font-jarkata font-normal text-smallxxx leading-6 text-[#9D94B8]">
        Share on
      </p>
      <span className="flex items-center justify-center gap-2">
        <Image src={twitter} alt="twitter icon" />
        <Image src={reddit} alt="reddit icon" />
        <Image src={telegram} alt="telegram icon" />
      </span>
    </div>
  );
};

export default CollectionModal;
