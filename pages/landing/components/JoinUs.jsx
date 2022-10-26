import React from "react";
import Image from "next/image";
import Link from "next/link";

function JoinUs() {
  return (
    <div className="container mt-32   grid md:gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 items-center mb-24 md:48 lg:mb-48">
      <div className="text-center md:text-left lg:text-left">
        <h3 className="text-gray-200 font-jarkata md:text-3xl  lg:text-3xl font-bold mb-4">
          Join Events on Attendify
        </h3>
        <p className="text-gray-400 text-xs md:text-base lg:text-lg font-jarkata font-medium">
          With your goals and objectives in place, you can create an event on
          the ATTENDIFY platform with customized designs and products to be
          offered to attendees.{" "}
        </p>
        <Link href="/upcoming/upcomingEvents">
          <button className="px-8 py-2 mt-4 bg-[#B5179E] font-medium rounded-lg text-white">
            Explore Events
          </button>
        </Link>
      </div>
      <div className="self-center mt-8 md:mt-0 lg:mt-0 ">
        <Image
          src="/assets/studyl.svg"
          alt="virtual_poap"
          width={291}
          height={400}
        />
      </div>
    </div>
  );
}

export default JoinUs;
