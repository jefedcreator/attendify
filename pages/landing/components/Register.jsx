import Image from "next/image";
import React from "react";
import Link from "next/link";

function Register() {
  return (
    <div className="container flex flex-col-reverse gap-4 lg:mt-24  md:grid md:gap-6 md:grid-cols-2 lg:grid lg:grid-cols-2 items-center mb-24">
      <div>
        <Image
          className=""
          src="/assets/vr.svg"
          width={306}
          height={420}
          alt="virtual_poap"
        />
      </div>
      <div className="text-center md:text-left lg:text-left">
        <h3 className="font-jarkata text-gray-200 text-3xl font-bold mb-4">
          Create an event on Attendify 
        </h3>
        <p className="text-gray-400 text-xs md:text-base lg:text-lg font-jarkata font-medium">
          With your goals and objectives in place, you can create an event on
          the ATTENDIFY platform with customized designs and products to be
          offered to attendees.
        </p>
        <Link href="/event/Create">
          <button className="px-8 py-2 mt-4 font-medium font-jarkata bg-[#B5179E] rounded-lg text-gray-200">
            Create an Event
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
