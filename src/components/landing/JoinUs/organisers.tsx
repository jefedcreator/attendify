import React from "react";
import Image from "next/image";
import cart from "@public/assets/cart.png";
import Button from "@common/Button";

function Organisers() {
  return (
    <section className="mt-32 md:my-56 lg:my-56 container mx-auto" id="about">
      <div className="grid lg:grid-cols-2 mx-6  items-center justify-center">
        <div>
          <Image src={cart} className="w-full" alt="image" />
        </div>
        <div>
          <h3 className="leading-sm-medium text-[#F9F8FB] font-bold font-syne text-medium my-6">
            Attendify for Event
            <br /> Organizers
          </h3>
          <div className="flex my-4">
            <hr className="w-[30%] border-[#E326C8]" />
          </div>
          <p className="text-[#9D94B8] font-jakarta text-minimal leading-sm-xx my-6">
            Organisers create their events on Attendify by providing required
            <br /> information about the event and preznts to be presented to
            <br /> attendees.
          </p>
          <Button
            href={"/create"}
            className="w-[100%] lg:w-[25%]  border-solid border-2 border-[#bba9f4]  bg-[#6E4AE7] text-white p-2"
            label="Create Event"
          />
        </div>
      </div>
    </section>
  );
}

export default Organisers;
