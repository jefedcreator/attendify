import Image from "next/image";
import React from "react";
import Link from "next/link";
import Button from "@common/Button";
import event from "@public/assets/event.png";

function Attendee() {
  return (
    <section className="mt-32 md:my-56 lg:my-56 container mx-auto" id="about">
      {/* <div className="grid grid-cols-2 items-center justify-center"> */}
      <div className="grid lg:grid-cols-2 mx-6  items-center justify-center">
        <div>
          <h3 className="leading-sm-medium text-[#F9F8FB] font-syne text-medium">
            Attendify for Event
            <br /> Attenders
          </h3>
          <div className="flex my-4">
            <hr className="w-[30%] border-[#E326C8]" />
          </div>
          <p className="text-[#9D94B8] font-jakarta text-minimal leading-sm-xx my-6">
            Attendees use the mint link shared with them by the organisers, to
            mint
            <br /> their preznts which is stored in their collection forever.
          </p>
          <Button
            href={"/explore"}
            className="w-[100%] lg:w-[25%]  border-solid border-2 border-[#bba9f4]  bg-[#B5179E] text-white p-2"
            label="Attend Event"
          />
        </div>
        <div className="lg:ml-24">
          <Image src={event} className="w-full" alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Attendee;
