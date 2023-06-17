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
      className="border border-[#3D33A9] p-2 rounded-lg md:border-0 md:p-0  md:block  lg:border-0 lg:block lg:p-0 bg-card cursor-pointer"
      onClick={handleModal}
    >
      <Image
        src={eventUri}
        className="w-full clip-vr"
        alt="nft image"
        width={100}
        height={100}
      />
      <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
        <div className="p-2 md:p-4  rounded-xl">
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
    </div>
  );
};

export default Collection;
