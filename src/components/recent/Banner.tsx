import Button from "@common/Button";
import React from "react";

function Banner() {
  return (
    <div className="bg-[#010B23] mb-24 bg-banner bg-no-repeat h-64 bg-bottom-4">
      <div className="px-12">
        <div className="relative">
          <div>
            <h1 className="text-[#F9F8FB] font-syne  text-medium leading-sm-medium font-bold">
              Its{" "}
              <span className="font-syne text-7xl leading-sm-medium font-bold">
                All
              </span>{" "}
            </h1>
          </div>
          <div className="absolute left-40  bottom-8">
            <div className="border-2 w-56 border-[#8D70EC]"></div>
          </div>
        </div>
        <p className="text-[#F9F8FB] font-syne font-bold text-smallx leading-sm-medium">
          About{" "}
          <span className="text-[#A48DF0] font-syne font-bold text-medium leading-sm-medium">
            Community
          </span>
        </p>
        <p className="text-[#BDB7CF] my-4">
          Want to create new NFTs for your project
        </p>
        <Button
          className="bg-[#6E4AE7] w-full md:w-[20%] lg:w-[20%] p-2 text-[#F9F8FB]"
          label="Contact us"
        />
      </div>
    </div>
  );
}

export default Banner;
