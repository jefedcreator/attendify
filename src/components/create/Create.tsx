"use client";
import { useState } from "react";
import Details from "./details/Details";
import Upload from "./upload/Upload";
import Preview from "./preview/Preview";
import { IEventDetails } from "src/utils/types/types";

const CreateEvent = () => {
  const [next, setNext] = useState<number>(0);
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
      }  mx-auto flex justify-start flex-col gap-3`}
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
        onClick={next !== 2 ? () => setNext(next + 1) : undefined}
      >
        {next == 2 ? "Create" : "Next"}
      </button>
    </section>
  );
};

export default CreateEvent;
