import Image from "next/image";
// import conflux from "@public/assets/conflux.png";
// import fliers from "@public/assets/flier.png";
import { IPreview } from "src/utils/types/types";

const Preview = ({
  title,
  organizer,
  date,
  type,
  category,
  link,
  flierImg,
  prezentImg,
}: IPreview) => {
  return (
    <div className="bg-[#010C28] border border-[#09174A] h-[50%] md:h-[70%] w-full p-5 flex flex-col gap-1">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Name of Event
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {title}
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Organizer
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {organizer}
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Date
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {date}
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Category
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {category}
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Type
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {type}
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Link
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            {link}
          </p>
        </span>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="w-[45%] h-1/2 flex flex-col items-start justify-center gap-2">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Flyer
          </h2>
          {flierImg && (
            <Image
              src={flierImg}
              alt="flyer image"
              className="h-12.5 w-12.5 object-contain"
              width={180}
              height={150}
            />
          )}
        </div>
        <div className="w-[45%] h-1/2 flex flex-col items-start justify-center gap-2">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Prezent
          </h2>
          {prezentImg && (
            <Image
              src={prezentImg}
              alt="nft image"
              className="h-12.5 w-12.5 object-contain "
              width={180}
              height={150}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
