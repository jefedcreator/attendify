import Image from "next/image";
import { ICollection } from "src/utils/types/types";

const Collection = ({
  eventUri,
  eventName,
  organizer,
  date,
  setModal,
  id,
  setValue,
}: ICollection) => {
  const handleModal = () => {
    setModal(true);
    setValue(id);
  };

  return (
    <div
      className="border border-[#3D33A9] p-2 rounded-lg md:p-0 md:block bg-card cursor-pointer"
      onClick={handleModal}
    >
      <Image
        src={eventUri}
        className="w-full min-h-[50%] object-cover h-[50%]"
        alt="nft image"
        width={100}
        height={100}
      />
      <div className="w-full p-2">
        <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
          Name of Event
        </h2>
        <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
          {eventName}
        </p>
        <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
          Organisers
        </h2>
        <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
          {organizer}
        </p>
        <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
          Date
        </h2>
        <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Collection;
