import React from "react";
import Image from "next/image";

function Sponsors() {
  return (
    <React.Fragment>
      <div className="my-32 container mx-auto">
        <h3 className="text-[#F9F8FB] text-center font-bold text-xs md:text-base lg:text-medium  capitalize ">
          <span className="">Our tech partners</span>
        </h3>
        <div className="flex justify-center mt-8">
          <hr className="w-[15%] border-[#A48DF0]" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-32 ] my-12 ">
        <div>
            <Image
              width={205}
              height={52}
              src="/assets/Polygon.png"
              alt="polygon_logo"
            />
          </div>
          <div>
            <Image
              width={205}
              height={72}
              src="/assets/ether.png"
              alt="ethereum_logo"
            />
          </div>
          <div>
            <Image
              width={205}
              height={72}
              src="/assets/web3.png"
              alt="web3_logo"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sponsors;
