"use client";
import { useContext } from "react";
import Image from "next/image";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { ICreatedEvent } from "src/utils/types/types";
import { useContractEvent } from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import Loader from "@components/loading/loading";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const EventsContainer = () => {
  const { createdEvents, setCreatedEvents } = useContext(attendifyContext);
  useContractEvent({
    address: attendifyAddress,
    abi: attendifyAbi,
    eventName: "createdEvents",
    listener(log) {
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
            className="border border-[#3D33A9] p-2 rounded-lg md:p-0 md:block bg-card"
            key={index}
          >
            <Image
              src={collection.eventUri}
              className="w-full min-h-[50%] object-cover h-[50%]"
              alt="hacker image"
              width={100}
              height={100}
            />
            <div className="w-full p-2">
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Name of Event
              </h2>
              <p className="font-jakarta text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.eventName}
              </p>
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Organisers
              </h2>
              <p className="font-jakarta text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.organizer}
              </p>
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Link
              </h2>
              <Link
                href={collection.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-jakarta text-sm leading-1 font-semibold mb-1 text-[#F9F8FB] flex items-center justify-start gap-2"
              >
                Register
                <FiExternalLink />
              </Link>
              <h2 className="font-minimal text-smallxxx leading-sm text-[#9D94B8] font-jakarta">
                Date
              </h2>
              <p className="font-jakarta text-sm leading-sm font-semibold mb-1 text-[#F9F8FB]">
                {collection.date}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventsContainer;
