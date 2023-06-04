import CreateEvent from "@components/create/Create";

const Create = () => {
  return (
    <div className="container w-[90%] mx-auto">
    <div className="text-center">
      <h1 className="text-[#F9F8FB] text-2xl md:text-4xl font-semibold font-syne">
        Create an Event
      </h1>
      <p className="text-xl text-white font-bold my-3">Basic details of your event</p>

      {/* <p className="text-[#9EAEC7] w-full  lg:w-3/4 m-auto">
        Create long lasting memory with your events, Send Invites, Manage
        Guests , Issue POAPs & More!
      </p> */}
    </div>
    <CreateEvent/>

    {/* {show && (
      <Modal
        isOpen={show}
        className="border border-[#7d92b5] rounded-lg top-1/4 p-4  w-11/12 left-4 md:w-6/12 md:left-1/4 md:top-1/4 md:p-8 lg:w-3/12 lg:mx-auto absolute lg:left-[41%] lg:top-1/4 lg:p-4"
        style={customStyles}
      >
        <SuccessModal path={mintLink} />
      </Modal>
    )} */}
  </div>
  );
};

export default Create;
