import Image from "next/image";
import { IProps } from "src/utils/types/types";
import conflux from "@public/assets/conflux.png";

const Mint = ({ params }: IProps) => {
  // console.log("router", params.mint);

  return (
    <section className="md:w-[50%] w-[80%] h-[80vh] mx-auto flex flex-col items-center justify-start text-center md:gap-2 gap-4">
      <h1 className="font-syne font-semibold text-2xl md:text-4xl leading-14 text-[#F9F8FB]">
        Welcome to Attendify
      </h1>
      <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
        You’re about to mint your Preznt for attending
        <br /> Web3 community call by Attendify.
      </p>
      <Image src={conflux} alt="nft image" />
      <button className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-[100%] md:w-[40%] px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6">
        Mint Prezent
      </button>
      <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
        Click the button to mint
      </p>
    </section>
  );
};

export default Mint;
