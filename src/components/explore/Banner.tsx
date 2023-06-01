import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import wallet from "@public/assets/wallets.png";

// import { useWeb3React } from "@web3-react/core";
// import Button from "@common/Button";
function Banner() {
  // const { account } = useWeb3React();
  return (
    <div className="h-[30vh] flex justify-between items-start">
      <div className="h-full">
        <div className="flex items-center ">
          <IoIosArrowBack size={30} color="#f9f9f9" />
          <Link
            className="text-[#F9F8FB] font-normal text-base leading-6 font-jarkata"
            href="/"
          >
            Go back
          </Link>
        </div>
        <h1 className="text-[#F9F8FB] font-syne font-semibold text-3xl md:text-4xl leading-14">
          Explore Collection
        </h1>
        <div className="my-2">
          <Image src={wallet} alt="wallet" className="h-6 w-6" />
          <p className="text-[#BDB7CF] text-smallxxx leading-24 font-jakarta">
            {`0x123`}
          </p>
        </div>
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
