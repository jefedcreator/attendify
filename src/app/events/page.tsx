import Image from "next/image";
import Link from "next/link";
import people from "@public/assets/people.png";

const Events = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="max-w-[40%]">
          <div className="w-full flex flex-wrap items-center gap-2">
            <span className="font-syne font-bold text-4xl leading-14 text-[#F9F8FB]">
              Its
            </span>{" "}
            <span className="font-syne font-bold text-5xl leading-14 text-[#F9F8FB]">
              All
            </span>{" "}
            <hr className="w-[150px] h-1 border-7 border-solid bg-[#8D70EC]" />{" "}
            <span className="font-syne font-bold text-3xl leading-14 text-[#F9F8FB]">
              About
            </span>{" "}
            <span
              className="font-syne font-bold text-4xl leading-14 "
              style={{
                WebkitTextStroke: "1px #A48DF0",
                WebkitTextFillColor: "#010A20",
              }}
            >
              Community
            </span>{" "}
          </div>
          <p className="font-jarkata font-normal text-base leading-6 text-[#BDB7CF]">
            Want to create NFTs for your event?
          </p>
          <Link
            href="/connect"
            className="bg-[#6E4AE7] text-[#F9F8FB] border border-solid border-purple-400 font-normal text-base leading-6 px-3 py-2 rounded-sm"
          >
            contact us
          </Link>
        </div>
        <div>
          <Image src={people} alt="people image" />
        </div>
      </div>
    </div>
  );
};

export default Events;
