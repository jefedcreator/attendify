import { collectionItem } from "static/data";
import hacker from "@public/assets/hacker.svg";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";
import { Dispatch, SetStateAction } from "react";

interface IModal {
  value: number;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const CollectionModal = ({ value, setModal }: IModal) => {
  const item = collectionItem[value] ?? {}; // Use empty object as a fallback
  return (
    <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed md:absolute h-[70vh] w-80 text-white rounded-md md:top-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col item-center text-center p-3 gap-3">
      <div className="w-full relative flex">
        <Image src={hacker} alt="hacker image" className="w-[30%] mx-auto" />{" "}
        <IoMdClose
          className="absolute right-0 cursor-pointer"
          onClick={() => setModal(false)}
        />
      </div>
      <h1 className="font-syne font-normal text-22 leading-32 text-[#F9F8FB]">
        {item.name}
      </h1>
      <p className="font-jarkata font-normal text-smallxxx leading-6 text-[#DEDBE7]">
        {" "}
        <span className="font-jarkata font-normal text-smallxxx leading-6 text-[#9D94B8]">
          By
        </span>{" "}
        {item.organizer}
      </p>
      <p className="font-jarkata font-normal text-sm leading-6 text-[#BDB7CF]">{`This Prezent confirms you were at ${item.name}`}</p>
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
    </div>
  );
};

export default CollectionModal;
