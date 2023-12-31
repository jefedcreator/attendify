import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import people from "@public/assets/people.png";
import EventsContainer from "@components/events/Events";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Attendify - Events",
};

const Events = () => {
  return (
    <div className="relative w-[90%] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="max-w-[70%] md:max-w-[35%] h-full flex flex-col gap-3">
          <div className="w-full flex flex-wrap items-center gap-2 h-[60%]">
            <span className="font-syne font-bold md:text-4xl text-2xl leading-14 text-[#F9F8FB]">
              Its
            </span>{" "}
            <span className="font-syne font-bold md:text-5xl text-2.5xl leading-14 text-[#F9F8FB]">
              All
            </span>{" "}
            <hr className="w-[150px] md:w-[180px] h-1 bg-[#8D70EC]" />{" "}
            <span className="font-syne font-bold md:text-3xl text-1.5xl leading-14 text-[#F9F8FB]">
              About
            </span>{" "}
            <span
              className="font-syne font-bold md:text-4xl text-2xl leading-14 "
              style={{
                WebkitTextStroke: "1px #A48DF0",
                WebkitTextFillColor: "#010A20",
              }}
            >
              Community
            </span>{" "}
          </div>
          <p className="font-jarkata font-normal md:text-base text-sm leading-6 text-[#BDB7CF] h-[20%]">
            Want to create NFTs for your event?
          </p>
          <Link
            href="/connect"
            className="bg-[#6E4AE7] text-[#F9F8FB] border border-solid border-purple-400 font-normal text-sm leading-6 px-2 py-2 rounded-lg h-[20%] md:w-[30%] w-[80%] text-center"
          >
            contact us
          </Link>
        </div>
        <div className="max-w-[30%] md:max-w-[50%]">
          <Image src={people} alt="people image" />
        </div>
      </div>
      <h2 className="font-syne font-normal text-2xl leading-10 text-[#F8F9FB] py-2">
        Recent Events
      </h2>
      <EventsContainer />
    </div>
  );
};

export default Events;
