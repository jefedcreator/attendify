import Image from "next/image";
import Link from "next/link";
import people from "@public/assets/people.png";
import hacker from "@public/assets/hacker.svg";

const Events = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="max-w-[70%] md:max-w-[35%] h-full flex flex-col gap-3">
          <div className="w-full flex flex-wrap items-center gap-2 h-[60%]">
            <span className="font-syne font-bold md:text-4xl text-2xl leading-14 text-[#F9F8FB]">
              Its
            </span>{" "}
            <span className="font-syne font-bold md:text-5xl text-2.5xl leading-14 text-[#F9F8FB]">
              All
            </span>{" "}
            <hr className="w-[150px] md:w-[180px] h-1 bg-[#8D70EC]" />{" "}
            <span className="font-syne font-bold md:text-3xl text-1.5xl leading-14 text-[#F9F8FB]">
              About
            </span>{" "}
            <span
              className="font-syne font-bold md:text-4xl text-2xl leading-14 "
              style={{
                WebkitTextStroke: "1px #A48DF0",
                WebkitTextFillColor: "#010A20",
              }}
            >
              Community
            </span>{" "}
          </div>
          <p className="font-jarkata font-normal md:text-base text-sm leading-6 text-[#BDB7CF] h-[20%]">
            Want to create NFTs for your event?
          </p>
          <Link
            href="/connect"
            className="bg-[#6E4AE7] text-[#F9F8FB] border border-solid border-purple-400 font-normal text-base leading-6 px-3 py-2 rounded-lg h-[20%] md:w-[30%] w-[80%] text-center"
          >
            contact us
          </Link>
        </div>
        <div className="max-w-[30%] md:max-w-[50%]">
          <Image src={people} alt="people image" />
        </div>
      </div>
      <h2 className="font-syne font-normal text-2xl leading-10 text-[#F8F9FB] py-2">
        Recent Events
      </h2>
      <div className="grid gap-8 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
        <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <Image src={hacker} className="w-full" alt="hacker image" />
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Name of Event
                </span>
                <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                  Attendify Launch Party <br />
                  <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                    Organisers
                  </span>
                  <p className="text-[#F9F8FB] font-jakarta font-semibold my-2">
                    {" "}
                    Attendify
                  </p>
                </h2>
                <span className="my-2 font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Date
                </span>
                <p className="font-jakarta  text-[#F9F8FB]  mb-1">
                  October,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <Image src={hacker} className="w-full" alt="hacker image" />{" "}
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Name of Event
                </span>
                <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                  Attendify Launch Party <br />
                  <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                    Organisers
                  </span>
                  <p className="text-[#F9F8FB] font-jakarta font-semibold my-2">
                    {" "}
                    Attendify
                  </p>
                </h2>
                <span className="my-2 font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Date
                </span>
                <p className="font-jakarta  text-[#F9F8FB]  mb-1">
                  October,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <Image src={hacker} className="w-full" alt="hacker image" />{" "}
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Name of Event
                </span>
                <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                  Attendify Launch Party <br />
                  <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                    Organisers
                  </span>
                  <p className="text-[#F9F8FB] font-jakarta font-semibold my-2">
                    {" "}
                    Attendify
                  </p>
                </h2>
                <span className="my-2 font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Date
                </span>
                <p className="font-jakarta  text-[#F9F8FB]  mb-1">
                  October,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-[#3D33A9] p-2 relative rounded-lg md:border-0 md:p-0  md:block md:relative lg:border-0 lg:block lg:relative lg:p-0 bg-card">
          <div>
            <Image src={hacker} className="w-full" alt="hacker image" />{" "}
          </div>
          <div className="w-full md:border-b md:border-r md:border-l md:border-[#3D33A9] md:rounded-b-lg lg:border-b lg:border-r lg:border-l lg:border-[#3D33A9] lg:rounded-b-lg">
            <div className="p-4 relative">
              <div>
                <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Name of Event
                </span>
                <h2 className="font-jakarta font-minimal leading-sm-xx font-semibold mb-1 text-[#F9F8FB]">
                  Attendify Launch Party <br />
                  <span className="font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                    Organisers
                  </span>
                  <p className="text-[#F9F8FB] font-jakarta font-semibold my-2">
                    {" "}
                    Attendify
                  </p>
                </h2>
                <span className="my-2 font-minimal leading-sm-xx text-[#9D94B8] font-jakarta">
                  Date
                </span>
                <p className="font-jakarta  text-[#F9F8FB]  mb-1">
                  October,2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
