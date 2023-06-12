"use client";
import { useContext } from "react";
import Image from "next/image";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent } from "src/utils/types/types";

const EventsContainer = () => {
  const { createdEvents } = useContext(attendifyContext);
  return (
    <div className="grid gap-8 md:grid-cols-4 md:gap-12 min-h-[50vh]" >
      {createdEvents && createdEvents.map((collection: ICreatedEvent, index: number) => (
        <div
          className="border border-[#3D33A9] p-2 rounded-lg md:border-0 md:p-0  md:block  lg:border-0 lg:block lg:p-0 bg-card"
          key={index}
        >
          <div>
            <Image src={collection.eventUri} className="w-full" alt="hacker image" width={100} height={100}/>
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-2 md:p-4">
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Name of Event
              </h2>
              <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.eventName}
              </p>
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Organisers
              </h2>
              <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.organizer}
              </p>
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Date
              </h2>
              <p className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsContainer;
