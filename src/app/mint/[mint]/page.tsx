import Image from "next/image";
import { IProps } from "src/utils/types/types";
import conflux from "@public/assets/conflux.png";
import MintButton from "@components/mintButton/MintButton";

const Mint = ({ params }: IProps) => {
  console.log("router", params.mint);

  return (
    <section className="md:w-[50%] w-[80%] h-[80vh] mx-auto flex flex-col items-center justify-start text-center gap-4">
      <h1 className="font-syne font-semibold text-2xl md:text-4xl leading-14 text-[#F9F8FB]">
        Welcome to Attendify
      </h1>
      <p className="font-normal text-smallxxx md:text-sm leading-7 text-[#BDB7CF] font-jarkata">
        You’re about to mint your Preznt for attending
        <br /> Web3 community call by Attendify.
      </p>
      <Image src={conflux} alt="nft image" />
      <MintButton/>
    </section>
  );
};

export default Mint;
