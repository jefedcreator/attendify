import { collectionItem } from "static/data";
import hacker from "@public/assets/hacker.svg";
import Image from "next/image";

interface IModal {
  value: number;
}

const CollectionModal = ({ value }: IModal) => {
  const item = collectionItem[value] ?? {}; // Use empty object as a fallback
  return (
    <div className="bg-gradient-to-b from-[rgba(0, 9, 31, 0.98)] via-[rgba(30, 12, 90, 0.92)] to-transparent border border-solid border-blue-500 border-opacity-20 absolute min-h-100 w-80 text-white rounded-md top-10 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col item-center text-center p-3 gap-3">
      <Image src={hacker} alt="hacker image" className="w-[30%] mx-auto" />{" "}
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
      <p className="font-jarkata font-normal text-sm leading-6 text-[#BDB7CF]">{`This POAP confirms you were at ${item.name}`}</p>
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
