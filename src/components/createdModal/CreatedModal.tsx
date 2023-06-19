"use client";
import { IModal, ICreatedEvent } from "src/utils/types/types";
import { useContext } from "react";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import copy from "@public/assets/copy.svg";
import celebrate from "@public/assets/celebrate.svg";
import QRCode from "react-qr-code";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { copyToClipBoardHandler } from "src/utils/helper";
import { getLocationOrigin } from "next/dist/shared/lib/utils";

const CreatedModal = ({ value, setModal }: IModal) => {
  const { userCreatedEvents } = useContext(attendifyContext);
  const basepath = getLocationOrigin();
  const item: ICreatedEvent = userCreatedEvents[value] ?? {}; // Use empty object as a fallback
  const mintLink = `${basepath}/mint/${item.poap}`;

  return (
    <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed h-[70vh] md:h-[80vh] md:w-[30vw] w-80 text-white rounded-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col item-center text-center p-3 gap-3 md:gap-2">
      <div className="w-full relative flex">
        <Image
          src={celebrate}
          alt="celebration icon"
          className="w-[20%] md:w-[10%] mx-auto"
        />
        <IoMdClose
          className="absolute right-0 cursor-pointer"
          onClick={() => setModal(false)}
        />
      </div>
      <h2 className="font-syne font-medium text-xl leading-9 text-[#F9F8FB]">
        Your Event was created successfully
      </h2>
      <p className="text-sm leading-6 font-jarkata text-[#9D94B8]">
        You can now share the link or scan QR code for your attendees to mint
        preznts on Attendify
      </p>
      <div
        className="bg-[#270F73] border border-dashed border-[#8D70EC] flex flex-col items-start justify-around px-2 py-1 rounded-md cursor-pointer"
        onClick={() => copyToClipBoardHandler(mintLink)}
      >
        <p className="font-light text-smallxxx leading-6 font-jarkata text-[#9D94B8]">
          Mint Link
        </p>
        <span className="w-full flex items-center justify-between">
          <p className="font-semibold text-sm leading-6 font-jarkata text-[#9D94B8] w-[90%] whitespace-nowrap overflow-hidden">
            {mintLink}
          </p>
          <Image src={copy} alt="copy" width={20} />
        </span>
      </div>
      <div className="w-full items-center mx-auto flex justify-center p-1">
        <QRCode
          size={180}
          bgColor="#ffff"
          value={mintLink}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </div>
  );
};

export default CreatedModal;
