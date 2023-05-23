import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useWeb3React } from "@web3-react/core";
import Button from "@common/Button";
function Banner() {
  const { account } = useWeb3React();
  return (
    <div className="md:flex md:justify-between lg:flex lg:justify-between items-center  mb-24 p-4 md:p-0 lg:p-0">
      <div>
        <div className="flex items-center ">
          <p className="my-2">
            <IoIosArrowBack size={30} color="#f9f9f9" />
          </p>
          <p className="text-[#F9F8FB]"><Link  href="/">Go back</Link></p>
        </div>
        <h1 className="text-[#F9F8FB] font-syne font-bold md:leading-sm-medium md:text-medium lg:leading-sm-medium lg:text-medium">Explore Collection</h1>
        <div className="my-2">
          <img src="/assets/wallets.png" alt="wallet" />
        </div>
        <p className="text-[#BDB7CF] text-smallxxx leading-24 font-jakarta">{account}</p>
      </div>
      <div className="bg-cta w-full md:w-[50%] lg:w-[25%] p-4 my-8 md:my-0 lg:my-0  rounded-lg opacity-70 border-2 border-[#bba9f4]">
        <p className="my-4 text-[#BDB7CF] text-smallxxx leading-24 font-jakarta">
          Attend upcoming events listed on Attendify to
          <br /> get more Prezents
        </p>
        <Button
          className="w-full md:w-[50%] lg:w-[75%] border-solid border-2 bg-cta p-2 border-[#bba9f4]  text-white"
          label="view events"
        />
      </div>
    </div>
  );
}

export default Banner;
