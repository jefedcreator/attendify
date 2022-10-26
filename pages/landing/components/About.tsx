import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className="mt-32 md:mb-56 lg:mb-56" id="about">
      <div className=" md:max-w-1/2 md:mx-auto lg:max-w-1/2 lg:mx-auto">
        <h3 className="text-center text-gray-200 mb-4 font-jarkata font-bold text-lg  md:text-4xl lg:text-4xl">
          About attendify
        </h3>
        <p className="text-center text-xs md:text-base lg:text-lg text-gray-300 mb-8 font-jarkata font-medim">
          Discover events that match your passion, create events on Attendify
          and issue POA tokens which serves as incentives to participants and
          attendees of various events, in celebration of a special shared memory
          registered on the blockchain.
        </p>
      </div>
      <div className="grid gap-2 grid-cols-4 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4">
        <div>
          <Image src="/assets/card3.svg" alt="image" width={253} height={334} />
        </div>
        <div className="translate-y-6 md:translate-y-24 lg:translate-y-24">
          <Image src="/assets/card2.svg" alt="image" width={253} height={334} />
        </div>
        <div>
          <Image src="/assets/card.svg" alt="image" width={253} height={334} />
        </div>
        <div className="translate-y-6 md:translate-y-24 lg:translate-y-24">
          <Image src="/assets/card4.svg" alt="image" width={253} height={334} />
        </div>
      </div>
    </section>
  );
}

export default About;
