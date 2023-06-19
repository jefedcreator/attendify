import upload from "@public/assets/upload.svg";
import Image from "next/image";
import { ISetEventDetails } from "src/utils/types/types";

const Details = ({
  setEventDetails,
  title,
  organizer,
  symbol,
  description,
  date,
  venue,
  category,
  link,
  flier,
  flierImg,
}: ISetEventDetails) => {
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEventDetails((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const onChangeCoverHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const form = e.target as HTMLInputElement;
      const files = form.files;
      if (!files || files.length === 0) {
        return alert("No files selected");
        // return toast.error("error selecting file");
      }
      // toast.success("book cover selected succesfully");
      const file = files[0];
      // const imageFile = e.target.files[0];
      if (!file) return;
      setEventDetails((event) => {
        return {
          ...event,
          flier: file,
        };
      });
      // setFile(file);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setEventDetails((e) => {
            return {
              ...e,
              flierImg: event.target?.result as string,
            };
          });
        }
      };

      reader.readAsDataURL(file);
      // upload files
      // const result = await (ipfs).add(file);

      // setCover("https://jefedcreator.infura-ipfs.io/ipfs/" + result.path)
    } catch (error) {
      // toast.error("error uploading cover to ipfs");
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <input
        type="text"
        name="title"
        onChange={handleInput}
        placeholder="Title of event"
        value={title}
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        name="organizer"
        onChange={handleInput}
        value={organizer}
        placeholder="Organizer"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        name="symbol"
        onChange={handleInput}
        value={symbol}
        placeholder="NFT symbol"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <input
        type="text"
        onChange={handleInput}
        name="description"
        value={description}
        placeholder="Description"
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
      />
      <div className="flex flex-col items-center justify-center w-full text-smallxxx leading-4 font-jarkata text-[#BDB7CF]">
        <label
          htmlFor="event-date"
          // className="flex flex-col items-center justify-center w-full h-[40] bg-[#04102B]"
          className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata flex items-center justify-between cursor-pointer"
        >
          <p className="text-xs text-[#BDB7CF] dark:text-gray-400">
            Event date
          </p>
          <input
            id="event-date"
            type="date"
            name="date"
            onChange={handleInput}
            value={date}
            placeholder="Date of event"
            className="bg-transparent focus:outline-none cursor-pointer"
          />
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <label
          htmlFor="type"
          className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full cursor-pointer text-[#BDB7CF] text-smallxxx leading-4 font-jarkata flex items-center justify-between"
        >
          <select
            name="venue"
            id="venue"
            onChange={handleInput}
            value={venue}
            // className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
            className="bg-transparent w-full h-full flex items-center justify-between focus:outline-none rounded-md text-[#BDB7CF] text-smallxxx leading-4 font-jarkata gap-1 cursor-pointer"
            placeholder="venue"
            required
          >
            <option value="" disabled>
              Event venue
            </option>
            <option value="virtual">Virtual</option>
            <option value="physical">Physical</option>
          </select>
        </label>
        <label
          htmlFor="category"
          className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata cursor-pointer"
        >
          <select
            name="category"
            id="category"
            onChange={handleInput}
            value={category}
            className="bg-transparent w-full h-full flex items-center justify-between focus:outline-none cursor-pointer"
            placeholder="Category"
            required
          >
            <option value="" disabled>
              Event Category
            </option>
            <option value="hackathon">Hackathon</option>
            <option value="hangout">Hangout</option>
            <option value="conferences">Conference</option>
          </select>
        </label>
      </div>

      <input
        type="text"
        name="link"
        onChange={handleInput}
        value={link}
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
        placeholder="Event registeration link (eventbrite, hopin...)"
      />
      {flierImg ? (
        <div className="flex flex-col items-center justify-center w-full h-22">
          <Image
            src={flierImg}
            alt="flier image"
            width={400}
            height={120}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full  text-smallxxx leading-4 font-jarkata text-[#BDB7CF]">
          <p className="mb-2 text-sm text-[#9D94B8] dark:text-gray-400 font-jarkata">
            <span className="font-semibold">Click to upload Event flier</span>{" "}
            or drag and drop
          </p>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-22 border focus:outline-none border-[#2B304B] border-dashed rounded-lg cursor-pointer bg-[#04102B] dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Image src={upload} alt="upload icon" />

              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, or JPG (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              name="flier"
              // value={flier}
              accept=".jpg, .jpeg, .png, .svg"
              onChange={onChangeCoverHandler}
            />
          </label>
        </div>
      )}
    </form>
  );
};

export default Details;
