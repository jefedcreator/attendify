import Image from "next/image";
import conflux from "@public/assets/conflux.png";
import flier from "@public/assets/flier.png";

const Preview = () => {
  return (
    <div className="bg-[#010C28] border border-[#09174A] h-[50%] md:h-[65%] w-full p-5 flex flex-col gap-1">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Name of Event
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            Future of Web 3
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Organizer
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            Conflux Network
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Date
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            October 12, 2022
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Category
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            Hackathon
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Type
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            Virtual
          </p>
        </span>
        <span className="w-[45%]">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Link
          </h2>
          <p className="text-sm md:text-base leading-7 font-jarkata text-[#F9F8FB]">
            zoom.com
          </p>
        </span>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="w-[45%] h-1/2 flex flex-col items-start justify-center gap-2">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Flyer
          </h2>
          <Image src={flier} alt="flyer image" className="h-12.5 w-12.5 object-contai"/>
        </div>
        <div className="w-[45%] h-1/2 flex flex-col items-start justify-center gap-2">
          <h2 className="text-xs leading-4 font-jarkata text-[#9D94B8]">
            Prezent
          </h2>
          <Image src={conflux} alt="nft image" className="h-12.5 w-12.5 object-contain "/>
        </div>
      </div>
    </div>
  );
};

export default Preview;
