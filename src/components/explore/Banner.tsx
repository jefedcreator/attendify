"use client"
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import wallet from "@public/assets/banner-wallet.svg";
import gift from "@public/assets/banner-gift.svg";
import { IBanner } from "src/utils/types/types";
import { useAccount } from "wagmi";

function Banner({ header, isDashboard }: IBanner) {
  const { connector: activeConnector, isConnected, address } = useAccount();

  return (
    <div
      className={`${
        isDashboard ? "h-[10vh]" : "h-[15vh]"
      } py-1 md:py-0 md:h-[30vh] flex justify-between items-start`}
    >
      <div className="h-full">
        {!isDashboard && (
          <div className="flex items-center ">
            <IoIosArrowBack size={30} color="#f9f9f9" />
            <Link
              className="text-[#F9F8FB] font-normal text-base leading-6 font-jarkata"
              href="/"
            >
              Go back
            </Link>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Image
            src={isDashboard ? gift : wallet}
            alt="wallet"
            className="h-10 w-10"
          />
          <h1
            className={`text-[#F9F8FB] font-syne font-semibold ${
              isDashboard ? "text-3xl" : "text-2xl"
            } md:text-4xl leading-14`}
          >
            {header}
          </h1>
        </div>
        <p className="text-[#BDB7CF] text-smallxxx leading-24 font-jakarta w-full text-center">
          {address}
        </p>
      </div>
      <div className="bg-cta hidden h-[80%] w-[25%] md:flex flex-col justify-around rounded-lg border border-solid border-opacity-20 border-[#bba9f4] p-3">
        <p className="text-[#BDB7CF] text-smallxxx leading-24 font-jakarta">
          Attend upcoming events listed on Attendify to get more Prezents
        </p>
        <Link
          href="/events"
          className="font-jarkata w-[70%] p-2 text-center text-[#F9F8FB] bg-gradient-to-t from-white-opacity-8 via-white-opacity-6 to-transparent border border-solid border-purple-300 border-opacity-30 font-bold text-smallxxx leading-6 rounded-md"
        >
          View Events
        </Link>
      </div>
    </div>
  );
}

export default Banner;
