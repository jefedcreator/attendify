import Link from "next/link";
import React from "react";
import {IoMdHeartEmpty} from "react-icons/io"
// import event from '../../../';
// import event2 from '../../../public/crypto.svg'

function UpcomingEvents() {
  return (
    <React.Fragment>
      <div className=" mt-24">
        <h3 className="text-center text-gray-200 font-bold font-jarkata mb-6 text-2xl">
          Upcoming Events
        </h3>
        <div className='grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12'>
            <div className='relative bg-card'>
            <div>
                <img src="/assets/hacker.svg" className='w-full'/>
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
            </div>
            <div className='relative bg-card'>
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
                    <p className=' cursor-pointer rounded-full p-1 backdrop-blur' ><IoMdHeartEmpty className='border-none text-gray-300 ' size={25}/></p>
                </div>
            </div>

            <div className='relative bg-card'>
            <div>
                <img src="/assets/hundred.svg" className='w-full'/>
                </div>
                <div className=' border-b border-r border-l border-[#3D33A9] rounded-b-lg'>
                <div className='p-4'>
                <p className='font-jakarta font-semibold mb-2 text-gray-200'>Crypto tech Night</p>
                <p className='font-jakarta font-thin text-base text-gray-400 mb-2'>Sun, Jun 19, 6:00 PM</p>
                <p className='text-[#E84AD1] font-jakarta font-medium mb-2'>1000 attendees</p>
                </div>
                </div>
                <div className='absolute  right-4 bottom-36'>
                    <p className=' cursor-pointer rounded-full p-1 backdrop-blur' ><IoMdHeartEmpty className='border-none text-gray-300 ' size={25}/></p>
                </div>
            </div>
            <div className='relative bg-card'>
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
            </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-[#B5179E] px-12 py-2 rounded-lg text-center mt-12 flex justify-center">
            <a className="flex items-center " href="/upcoming/upcomingEvents">
              View more
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UpcomingEvents;
