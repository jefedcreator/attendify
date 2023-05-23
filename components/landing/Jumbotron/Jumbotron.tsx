import React from "react";
import Button from "@common/Button";

function Jumbotron() {
  return (
    <React.Fragment>
      {/* <div className=" items-center md:grid md:grid-cols-2 md:gap-x-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:mt-12 "> */}
      <section className="bg-hero-pattern bg-no-repeat p-4 md:p-4 lg:p-0 bg-top-4 w-full mt-24 md:h-screen lg:h-screen">
        {/* <section className="mt-24"> */}
        <div className="text-center">
          <h2 className="font-syne text-white text-smallx leading-sm-small md:text-hero-text md:leading-custom-leading lg:text-hero-text lg:leading-custom-leading font-bold">
            Attendify,
            <br /> The <span className="text-linear">web3</span> event hub{" "}
            <span className="font-bold text-[#8D70EC]">.</span>
          </h2>
          <p className="font-jakarta text-base text-[#D1C6F7]">
            Discover community events that match your passion. Create
            <br /> events and issue NFTs for attendees easily on Attendify.
          </p>
          <div className="w-full md:flex md:justify-center lg:flex lg:justify-center my-12 space-x-0 md:space-x-8 lg:space-x-8 space-y-8 md:space-y-0 lg:space-y-0">
            <Button
              href={`/create`}
              label="Create Event"
              className="w-full md:w-[100%] lg:w-[100%] border-solid border-2 border-[#bba9f4]  bg-[#6E4AE7] text-white"
            />
            <Button
              href={"/explore"}
              label="Explore Events"
              className="w-full md:w-[100%] my-4 md:my-0 lg:my-0 lg:w-[100%] border-solid border-2 bg-cta border-[#bba9f4]  text-white"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Jumbotron;
