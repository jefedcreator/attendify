import Image from "next/image";
import { IProps } from "src/utils/types/types";
import Minting from "@components/minting/mint";

export const dynamic = "force-static";

const Mint = ({ params }: IProps) => {
  return (
    <section className="md:w-[50%] w-[80%] h-[80vh] mx-auto flex flex-col items-center justify-start text-center gap-4">
      <h1 className="font-syne font-semibold text-2xl md:text-4xl leading-14 text-[#F9F8FB]">
        Welcome to Attendify
      </h1>
      <Minting prezent={params.mint} />
    </section>
  );
};

export default Mint;
