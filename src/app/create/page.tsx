import CreateEvent from "@components/create/Create";

export const dynamic = "force-static";

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
