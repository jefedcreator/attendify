"use client";
import { useContext } from "react";
import Image from "next/image";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent } from "src/utils/types/types";
import { useContractEvent } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import Loader from "@components/loading/loading";
import Link from "next/link";

const EventsContainer = () => {
  const { createdEvents, setCreatedEvents } = useContext(attendifyContext);
  useContractEvent({
    address: attendifyAddress,
    abi: attendifyAbi,
    eventName: "createdEvents",
    listener(log) {
      console.log("createdEvents", log);
      setCreatedEvents((prev: ICreatedEvent[]) => {
        return [...prev, log];
      });
    },
  });
  if (!createdEvents) {
    return <Loader />;
  }

  return (
    <div className="grid gap-8 md:grid-cols-4 md:gap-12 min-h-[50vh] my-5">
      {createdEvents &&
        createdEvents.map((collection: ICreatedEvent, index: number) => (
          <div
            className="border border-[#3D33A9] p-2 rounded-lg md:border-0 md:p-0  md:block  lg:border-0 lg:block lg:p-0 bg-card"
            key={index}
          >
            <Image
              src={collection.eventUri}
              className="w-full"
              alt="hacker image"
              width={100}
              height={100}
            />
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
                  Link
                </h2>
                <Link
                  href={collection.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jakarta text-smallxxx md:text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]"
                >
                  {collection.link}
                </Link>
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
