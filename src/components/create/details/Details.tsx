import upload from "@public/assets/upload.svg";
import Image from "next/image";

const Details = () => {
  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        name="title"
        //   onChange={onInputChange}
        placeholder="Title of event"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        name="organizer"
        //   onChange={onInputChange}
        placeholder="Organizer"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        name="symbol"
        //   onChange={onInputChange}
        placeholder="NFT symbol"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        // onChange={onInputChange}
        name="Description"
        placeholder="Description"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="datetime-local"
        name="date"
        //   onChange={onInputChange}
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
        placeholder="Date of event"
      />
      <div className="flex gap-2 items-center">
        <select
          name="type"
          id="type"
          //   onChange={onInputChange}
          className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
          placeholder="Type"
          required
        >
          <option value="none">Select</option>
          <option value="virtual">Virtual</option>
          <option value="physical">Physical</option>
        </select>
        <select
          name="category"
          id="category"
          //   onChange={onInputChange}
          className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
          placeholder="Category"
          required
        >
          <option value="none">Select</option>
          <option value="hackathon">Hackathon</option>
          <option value="hangout">Hangout</option>
          <option value="conferences">Conference</option>
        </select>
      </div>

      <input
        type="text"
        name="links"
        //   onChange={onInputChange}
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
        placeholder="Event registeration link (eventbrite, hopin...)"
      />

      <div className="flex flex-col items-center justify-center w-full  text-smallxxx leading-4 font-jarkata text-[#BDB7CF]">
        <p className="mb-2 text-sm text-[#9D94B8] dark:text-gray-400 font-jarkata">
          <span className="font-semibold">Click to upload Event flier</span> or
          drag and drop
        </p>
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-22 border focus:outline-none border-[#2B304B] border-dashed rounded-lg cursor-pointer bg-[#04102B] dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Image src={upload} alt="upload icon" />

            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            name="banner"
          />
        </label>
      </div>
    </form>
  );
};

export default Details;
