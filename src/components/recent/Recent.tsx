import React from "react";
import HeaderMetaData from "@common/MetaData/HeaderMetaData";
import Banner from "./Banner";

function Recent() {
  return (
    <div>
      <HeaderMetaData />

      <Banner />
      <section className="container  mx-auto mt-24 mb-48 p-4 md:p-0 lg:p-0">
        <h2 className="text-gray-200 capitalize text-jakarta font-bold mb-4 text-4xl">
          Recents Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
          <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
            <div>
              <img src="/assets/hacker.svg" className="w-full" />
            </div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4 relative">
                <div>
                  <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                    Attendify Launch Party <br />
                    <p className="text-[#A48DF0] my-2"> by Attendify</p>
                  </h2>
                  <p className="font-jakarta  text-[#9D94B8]  mb-1">
                    Thu, Oct 27, 12:00PM EST
                  </p>

                  <p className="font-jakarta  text-[#9D94B8]  mb-1">Virtual</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
            <div>
              <img src="/assets/hacker.svg" className="w-full" />
            </div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4 relative">
                <div>
                  <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                    Attendify Launch Party <br />
                    <p className="text-[#A48DF0] my-2"> by Attendify</p>
                  </h2>
                  <p className="font-jakarta  text-[#9D94B8] mb-1">
                    Thu, Oct 27, 12:00PM EST
                  </p>

                  <p className="font-jakarta  text-[#9D94B8] mb-1">Virtual</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
            <div>
              <img src="/assets/hacker.svg" className="w-full" />
            </div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4 relative">
                <div>
                  <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                    Attendify Launch Party <br />
                    <p className="text-[#A48DF0] my-2"> by Attendify</p>
                  </h2>
                  <p className="font-jakarta  text-[#9D94B8] mb-1">
                    Thu, Oct 27, 12:00PM EST
                  </p>

                  <p className="font-jakarta  text-[#9D94B8] mb-1">Virtual</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
            <div>
              <img src="/assets/hacker.svg" className="w-full" />
            </div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4 relative">
                <div>
                  <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                    Attendify Launch Party <br />
                    <p className="text-[#A48DF0] my-2"> by Attendify</p>
                  </h2>
                  <p className="font-jakarta  text-[#9D94B8]  mb-1">
                    Thu, Oct 27, 12:00PM EST
                  </p>

                  <p className="font-jakarta  text-[#9D94B8]  mb-1">Virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Recent;
