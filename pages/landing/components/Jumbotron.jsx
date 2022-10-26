import React from "react";
import Link from "next/link";

function Jumbotron() {
  return (
    <React.Fragment>
      <div className=" items-center md:grid md:grid-cols-2 md:gap-x-16 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:mt-12 ">
        <div>
          <h2 className="text-white sm-height text-small   font-bold font-jarkata  lg:text-7xl lg:custom-height">
            Attendify &ndash; The web3 event hub
          </h2>
          <p className="text-[#BEC9DA] text-minimal font-normal leading-7 my-5">
            Discover events that match your passion, Create events and issue POA
            tokens easily on Attendify.
          </p>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-6 md:mt-4 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:mt-4">
            <Link href="/upcoming/upcomingEvents">
            
              <button className="p-4 md:p-2 lg:p-4 bg-[#B5179E]  rounded-lg text-white">
                Explore event
              </button>
            </Link>

            <Link href="/event/Create">
              <button className="p-4 md:p-2 lg:p-4 bg-[#440E59] mt-4 md:mt-0 lg:mt-0 rounded-lg text-white">
                Create an event
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <img src="/assets/jumbo.png" alt="caesar-logo" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Jumbotron;
