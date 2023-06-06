"use client";
import { useState } from "react";
import Details from "./details/Details";
import Upload from "./upload/Upload";
import Preview from "./preview/Preview";
import { IEventDetails } from "src/utils/types/types";
import Image from "next/image";
import celebrate from "@public/assets/celebrate.svg";

const CreateEvent = () => {
  const [next, setNext] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [eventDetails, setEventDetails] = useState<IEventDetails>({
    title: "",
    organizer: "",
    symbol: "",
    description: "",
    date: "",
    type: "",
    category: "",
    link: "",
    flier: null,
    flierImg: null,
    prezent: null,
    prezentImg: null,
  });

  const handleDisabled = (): boolean => {
    switch (next) {
      case 0:
        return !(
          eventDetails.title.trim() !== "" &&
          eventDetails.organizer.trim() !== "" &&
          eventDetails.description.trim() !== "" &&
          eventDetails.date.trim() !== "" &&
          eventDetails.type.trim() !== "" &&
          eventDetails.category.trim() !== "" &&
          eventDetails.link.trim() !== "" &&
          eventDetails.flier !== null &&
          eventDetails.flierImg !== null
        );
      case 1:
        return !(
          eventDetails.prezent !== null && eventDetails.prezentImg !== null
        );

      case 2:
        return false;

      default:
        return true;
    }
  };

  return (
    <section
      className={`w-[90%] md:w-[50%] ${
        next == 0 ? "h-[150vh]" : "h-[100vh]"
      } relative mx-auto flex justify-start flex-col gap-3`}
    >
      {(() => {
        switch (next) {
          case 0:
            return (
              <Details
                setEventDetails={setEventDetails}
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                symbol={eventDetails.symbol}
                description={eventDetails.description}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flier={eventDetails.flier}
                flierImg={eventDetails.flierImg}
              />
            );
          case 1:
            return (
              <Upload
                setEventDetails={setEventDetails}
                prezent={eventDetails.prezent}
                prezentImg={eventDetails.prezentImg}
              />
            );
          case 2:
            return (
              <Preview
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flierImg={eventDetails.flierImg}
                prezentImg={eventDetails.prezentImg}
              />
            );
          default:
            return (
              <Details
                setEventDetails={setEventDetails}
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                symbol={eventDetails.symbol}
                description={eventDetails.description}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flier={eventDetails.flier}
                flierImg={eventDetails.flierImg}
              />
            );
        }
      })()}
      <button
        className={`${
          handleDisabled() ? "bg-gray-500" : "bg-[#6E4AE7]"
        } text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6`}
        disabled={handleDisabled()}
        onClick={next !== 2 ? () => setNext(next + 1) : () => setModal(true)}
      >
        {next == 2 ? "Create" : "Next"}
      </button>
      {modal && (
        <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed md:absolute h-[50vh] md:w-[30vw] w-80 text-white rounded-lg md:top-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col item-center justify-start text-center p-3 gap-3 md:gap-2">
          <Image
            src={celebrate}
            alt="celebration icon"
            className="w-[20%] md:w-[10%] mx-auto"
          />
          <h2 className="font-syne font-medium text-xl leading-9 text-[#F9F8FB]">
            Event created successfully
          </h2>
          <p className="text-sm leading-6 font-jarkata text-[#9D94B8]">
            You can now share the link for your attendees to mint preznts on
            Attendify
          </p>
          <div className="bg-[#270F73] border border-dashed border-[#8D70EC] flex flex-col items-start justify-around px-2 py-1 rounded-md">
            <p className="font-light text-smallxxx leading-6 font-jarkata text-[#9D94B8]">
              Mint Link
            </p>
            <p className="font-semibold text-sm leading-6 font-jarkata text-[#9D94B8] w-[70%] whitespace-nowrap overflow-hidden">
              https://www.attendify.ca/e/naija-c...
            </p>
          </div>
          <button className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6 cursor-pointer">
            continue
          </button>
        </div>
      )}
    </section>
  );
};

export default CreateEvent;
