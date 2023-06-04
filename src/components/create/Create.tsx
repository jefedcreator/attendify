"use client";
import { useState } from "react";
import Details from "./details/Details";
import Upload from "./upload/Upload";
import Preview from "./preview/Preview";

const CreateEvent = () => {
  const [next, setNext] = useState<number>(0);

  return (
    <section
      className={`w-[90%] md:w-[50%] ${
        next == 0 ? "h-[150vh]" : "h-[100vh]"
      }  mx-auto flex justify-start flex-col gap-3`}
    >
      {(() => {
        switch (next) {
          case 0:
            return <Details />;
          case 1:
            return <Upload />;
          case 2:
            return <Preview />;
          default:
            return <Details />;
        }
      })()}
      <button
        className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6"
        onClick={() => setNext(next + 1)}
      >
        {next == 2 ? "Create" : "Next"}
      </button>
    </section>
  );
};

export default CreateEvent;
