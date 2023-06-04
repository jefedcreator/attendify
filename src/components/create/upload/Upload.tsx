import Image from "next/image";
import upload from "@public/assets/upload.svg";

const Upload = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full  text-smallxxx leading-4 font-jarkata text-[#BDB7CF]">
      <p className="mb-2 text-smallxxx md:text-sm text-[#9D94B8] dark:text-gray-400 font-jarkata">
        <span className="font-semibold">Click to upload prezent image</span> or
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
  );
};

export default Upload;
