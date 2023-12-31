import { Metadata } from "next";
import dynamic from "next/dynamic";

const CreateEvent = dynamic(() =>
  import("@components/createEvent/CreateEvent"), {
  ssr: false 
});

export const metadata: Metadata = {
  title: "Attendify - Create",
};

const Create = () => {
  return (
    <div className="container w-[90%] mx-auto">
      <div className="text-center">
        <h1 className="text-[#F9F8FB] text-2xl md:text-4xl font-semibold font-syne">
          Create an Event
        </h1>
        <p className="text-xl text-white font-bold my-3">
          Basic details of your event
        </p>
      </div>
      <CreateEvent />
    </div>
  );
};

export default Create;
