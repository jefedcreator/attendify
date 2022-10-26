import React from "react";
import Head from "next/head";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Link from "next/link";
import LayOut from "../../layout/LayOut";

function CreatedEvent() {
  return (
    <LayOut>
    <section className="container mx-auto mt-24 mb-48 p-4 sm:p-0 md:p-0 lg:p-0">
      <Head>
        <title>Attendify</title>
        <meta name="description" content="Poap Platform Built On Conflux" />
        <link rel="icon" href="/attendify.svg" />
      </Head>

      <h2 className="text-gray-200 capitalize text-jakarta mb-4 font-bold mb-4 text-4xl">
        your created events
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
          <img className="w-full" src="/assets/Search.svg" alt="search-icon" />
        </div>
      </div>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-x-4 gap-y-4"> */}
      {/* <div className='flex items-center gap-8 flex-wrap '> */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
        <div className="flex items-center border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/hacker.svg" className="w-full" />
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <p className="font-jakarta text-xs font-semibold mb-2 text-gray-200">
                  Crypto tech Night
                </p>
                <p className="font-jakarta  font-thin text-xs text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1] text-xs font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>

              <div className="absolute -top-4 right-4  md:top-4 md:right-4 lg:top-4 lg:right-4">
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <div className=" bg-navbar w-48  border border-[#7d92b5]   p-2 rounded-lg backdrop-blur-lg cursor-pointer">
                      <button className="text-gray-300 block font-semibold font-jakarta">
                        <Link href="/event/Create">Edit event</Link>
                      </button>
                      <hr className="text-gray-500 font-jakarta border-gray-500 my-2" />
                      <button className="text-gray-300 font-jakarta block font-semibold">
                        <Link href="!#">Delete event</Link>
                      </button>
                    </div>
                  }
                  animation="slide-up"
                >
                  <BiDotsHorizontalRounded className="text-gray-300 font-bold cursor-pointer" />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/night.svg" className="w-full" />
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <p className="font-jakarta text-xs font-semibold mb-2 text-gray-200">
                  Crypto tech Night
                </p>
                <p className="font-jakarta  font-thin text-xs text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1] text-xs font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>

              <div className="absolute -top-4 right-4  md:top-4 md:right-4 lg:top-4 lg:right-4">
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <div className=" bg-navbar w-48  border border-[#7d92b5]   p-2 rounded-lg backdrop-blur-lg cursor-pointer">
                      <button className="text-gray-300 block font-semibold font-jakarta">
                        <Link href="/event/Create">Edit event</Link>
                      </button>
                      <hr className="text-gray-500 font-jakarta border-gray-500 my-2" />
                      <button className="text-gray-300 font-jakarta block font-semibold">
                        <Link href="!#">Delete event</Link>
                      </button>
                    </div>
                  }
                  animation="slide-up"
                >
                  <BiDotsHorizontalRounded className="text-gray-300 font-bold cursor-pointer" />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <img src="/assets/hundred.svg" className="w-full" />
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <p className="font-jakarta text-xs font-semibold mb-2 text-gray-200">
                  Crypto tech Night
                </p>
                <p className="font-jakarta  font-thin text-xs text-gray-400 mb-2">
                  Sun, Jun 19, 6:00 PM
                </p>
                <p className="text-[#E84AD1] text-xs font-jakarta font-medium mb-2">
                  1000 attendees
                </p>
              </div>

              <div className="absolute -top-4 right-4  md:top-4 md:right-4 lg:top-4 lg:right-4">
                <Dropdown
                  trigger={["click"]}
                  overlay={
                    <div className=" bg-navbar w-48  border border-[#7d92b5]   p-2 rounded-lg backdrop-blur-lg cursor-pointer">
                      <button className="text-gray-300 block font-semibold font-jakarta">
                        <Link href="/event/Create">Edit event</Link>
                      </button>
                      <hr className="text-gray-500 font-jakarta border-gray-500 my-2" />
                      <button className="text-gray-300 font-jakarta block font-semibold">
                        <Link href="!#">Delete event</Link>
                      </button>
                    </div>
                  }
                  animation="slide-up"
                >
                  <BiDotsHorizontalRounded className="text-gray-300 font-bold cursor-pointer" />
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </LayOut>
  );
}

export default CreatedEvent;
