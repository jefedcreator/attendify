import Image from "next/image";
import upload from "@public/assets/upload.svg";
import { ISetUploadDetails } from "src/utils/types/types";

const Upload = ({
  setEventDetails,
  prezent,
  prezentImg,
}: ISetUploadDetails) => {
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
          prezent: file,
        };
      });
      // setFile(file);

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setEventDetails((e) => {
            return {
              ...e,
              prezentImg: event.target?.result as string,
            };
          });
        }
      };

      reader.readAsDataURL(file);
      // upload files
      // const result = await (ipfs).add(file);

      // setCover("https://jefedcreator.infura-ipfs.io/ipfs/" + result.path)
    } catch (error) {
      console.log("error", error);
      // toast.error("error uploading cover to ipfs");
    }
  };
  if (prezentImg) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-22">
        <Image
          src={prezentImg}
          alt="flier image"
          width={400}
          height={120}
          className="object-cover"
        />
      </div>
    );
  }
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
          name="prezent"
          onChange={onChangeCoverHandler}
        />
      </label>
    </div>
  );
};

export default Upload;
