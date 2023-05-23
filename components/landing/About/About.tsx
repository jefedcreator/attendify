import React from "react";
import Image from "next/image";
import poap from "@public/assets/POAPs.png";
import Button from "@common/Button";

function About() {
  return (
    <section className="mt-32 md:my-56 lg:my-56 container mx-auto" id="about">
      <div className="grid lg:grid-cols-2 mx-6 items-center justify-center">
        <div>
          <h3 className="leading-sm-medium text-[#F9F8FB] font-syne text-medium">
            What is <span className="text-linear">Attendify?</span>
          </h3>
          <div className="flex my-4">
            <hr className="w-[30%] border-[#E326C8]" />
          </div>
          <p className="text-[#9D94B8] font-jakarta text-minimal leading-sm-xx my-6">
            Attendify is a digital Non Fungible Token (NFT) memento platform, in
            <br /> celebration of life's remarkable moments these unique badges
            or
            <br /> collectibles (preznts) are minted by attendees creating a
            lifelong
            <br /> record of their participation.
          </p>
          <Button
            className="w-[100%] lg:w-[25%] border-solid border-2 border-[#bba9f4]  bg-[#6E4AE7] text-white p-2"
            label="Open App"
            href={"/walletConnect"}
          />
        </div>
        <div className="mt-12">
          <Image src={poap} className="w-full" alt="image" />
        </div>
      </div>
    </section>
  );
}

export default About;
