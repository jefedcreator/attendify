import React from "react";
import Head from "next/head";

import { IoMdHeartEmpty } from "react-icons/io";
import LayOut from "@layout/LayOut";
import HeaderMetaData from "@common/MetaData/HeaderMetaData";

function Favourites() {
  return (
    <LayOut>
      <section className="container mx-auto mt-24 mb-48 p-4 md:p-4 lg:p-0">
        <HeaderMetaData />
        <h2 className="text-gray-200 capitalize text-jakarta font-bold mb-4 text-4xl">
          Your Favorites
        </h2>
        <div className="relative">
          {/* <div> */}
          <input
            type="text"
            className="mb-8 p-2 w-full pr-12  md:w-1/2 md:pr-12 lg:w-1/2  md:pr-24 lg:pr-12   font-jakarta rounded-sm border-2 border-[#5D77A280] bg-[#180A38] outline-none text-gray-200"
            placeholder="search for an event"
          />
          {/* </div> */}
          <div className="absolute top-4 right-4 md:top-4 md:right-[25rem] lg:top-4  search-icon ">
            <img
              className="w-full"
              src="/assets/Search.svg"
              alt="search-icon"
            />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
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
              <div className="absolute bottom-2 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
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
              <div className="absolute bottom-2 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
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
              <div className="absolute bottom-2 right-20  md:absolute md:right-4 md:bottom-36 lg:absolute  lg:right-4 lg:bottom-36">
                <p className=" cursor-pointer  rounded-full p-1 backdrop-blur">
                  <IoMdHeartEmpty
                    className="border-none text-gray-300"
                    size={25}
                  />
                </p>
              </div>
            </div>
          </div>
          {/* <div className='relative bg-card'>
            <div>
                <img src="/assets/night.svg" className='w-full'/>
                </div>
                <div className=' border-b border-r border-l border-[#3D33A9] rounded-b-lg'>
                <div className='p-4'>
                <p className='font-jakarta font-semibold mb-2 text-gray-200'>Crypto tech Night</p>
                <p className='font-jakarta font-thin text-base text-gray-400 mb-2'>Sun, Jun 19, 6:00 PM</p>
                <p className='text-[#E84AD1] font-jakarta font-medium mb-2'>1000 attendees</p>
                </div>
                </div>
                <div className='absolute  right-4 bottom-36'>
                    <p className=' cursor-pointer rounded-full p-1 backdrop-blur' ><IoMdHeartEmpty className='border-none text-gray-300' size={25}/></p>
                </div>
            </div> */}
        </div>
      </section>
    </LayOut>
  );
}

export default Favourites;
