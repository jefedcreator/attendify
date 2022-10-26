import React from "react";
import Image from "next/image";
import { IoMdHeartEmpty } from "react-icons/io"

const Similar = () => {
  return (
    <div className="container mx-auto lg:mt-24 lg:mb-24">
      <h3 className="text-[#EFF1F6] font-bold text-4xl my-5 mb-8 grid px-8 sm:p-0 sm:place-content-center">
        Similar Event
      </h3>

      <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
        {/* COLUMN-1 */}
        <div className="flex border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/hacker.svg" className="w-full" />
          </div>
          <div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4">
                <p className="font-jakarta font-semibold mb-2 text-xs md:text-base lg:text-base text-gray-200">
                  Conflux Hackers
                </p>
                <p className="font-jakarta font-thin text-xs md:text-base lg:text-base text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1] font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
              <p className=" cursor-pointer  rounded-full p-1 backdrop-blur">
                <IoMdHeartEmpty
                  className="border-none text-gray-300"
                  size={25}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="flex border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/night.svg" className="w-full" />
          </div>
          <div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4">
                <p className="font-jakarta font-semibold mb-2 text-xs md:text-base lg:text-base text-gray-200">
                  Crypto Tech Night
                </p>
                <p className="font-jakarta font-thin text-xs md:text-base lg:text-base text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1] font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
              <p className=" cursor-pointer  rounded-full p-1 backdrop-blur">
                <IoMdHeartEmpty
                  className="border-none text-gray-300"
                  size={25}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="flex border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/hundred.svg" className="w-full" />
          </div>
          <div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4">
                <p className="font-jakarta font-semibold mb-2 text-xs md:text-base lg:text-base text-gray-200">
                  Crypto Tech Night
                </p>
                <p className="font-jakarta font-thin text-xs md:text-base lg:text-base text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1]  font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
              <p className=" cursor-pointer  rounded-full p-1 backdrop-blur">
                <IoMdHeartEmpty
                  className="border-none text-gray-300"
                  size={25}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="flex border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/hundred.svg" className="w-full" />
          </div>
          <div>
            <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
              <div className="p-4">
                <p className="font-jakarta font-semibold mb-2 text-xs md:text-base lg:text-base text-gray-200">
                  Crypto Tech Night
                </p>
                <p className="font-jakarta font-thin text-xs md:text-base lg:text-base text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1]  font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
              <p className=" cursor-pointer  rounded-full p-1 backdrop-blur">
                <IoMdHeartEmpty
                  className="border-none text-gray-300"
                  size={25}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Similar;
