"use client";
import { useState } from "react";
import Details from "@components/create/details/Details";
import Upload from "@components/create/upload/Upload";
import Preview from "@components/create/preview/Preview";
import { IEventDetails } from "src/utils/types/types";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { create, IPFSHTTPClient } from "ipfs-http-client";
import celebrate from "@public/assets/celebrate.svg";
import { toast } from "react-toastify";
import copy from "@public/assets/copy.svg";
import QRCode from "react-qr-code";

const CreateEvent = () => {
  const [next, setNext] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [eventDetails, setEventDetails] = useState<IEventDetails>({
    title: "",
    organizer: "",
    symbol: "",
    description: "",
    date: "",
    type: "",
    category: "",
    link: "",
    flier: null,
    flierImg: null,
    prezent: null,
    prezentImg: null,
  });

  const handleDisabled = (): boolean => {
    switch (next) {
      case 0:
        return !(
          eventDetails.title.trim() !== "" &&
          eventDetails.organizer.trim() !== "" &&
          eventDetails.description.trim() !== "" &&
          eventDetails.date.trim() !== "" &&
          eventDetails.type.trim() !== "" &&
          eventDetails.category.trim() !== "" &&
          eventDetails.link.trim() !== "" &&
          eventDetails.flier !== null &&
          eventDetails.flierImg !== null
        );
      case 1:
        return !(
          eventDetails.prezent !== null && eventDetails.prezentImg !== null
        );

      case 2:
        return false;

      default:
        return true;
    }
  };

  const authorization =
    "Basic " +
    btoa(
      process.env.NEXT_PUBLIC_PROJECT_ID +
        ":" +
        process.env.NEXT_PUBLIC_PROJECT_SECRET
    );

  let ipfs: IPFSHTTPClient | undefined;

  try {
    ipfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      headers: {
        authorization: authorization,
      },
    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }

  const fallbackCopyToClipBoard = (text: string): Promise<boolean> => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      return Promise.resolve(successful);
    } catch (err) {
      return Promise.resolve(false);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const copyToClipBoard = (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      return fallbackCopyToClipBoard(text);
    }
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  };

  const copyToClipBoardHandler = async (copy: string) => {
    // let path = window.location.href;
    const success = await copyToClipBoard(copy);
    if (success) {
      toast.success("Copied to clipboard");
    } else {
      toast.error("Not Copied");
    }
  };

  const handleCreateEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const eventNft = await ipfs?.add(eventDetails.prezent as File);
      let data = JSON.stringify({
        title: eventDetails.title,
        description: eventDetails.description,
        image: `https://attendify.infura-ipfs.io/ipfs/${eventNft?.path}`,
        // owner: address,
      });
      const getUri = await ipfs?.add(data);
      let uri = `ipfs://${getUri?.path}`;
      toast.success("event uri Uploaded to ipfs succesfully");
      console.log("uri", uri);
      setLoading(true);
      setModal(true);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <section
      className={`w-[90%] md:w-[50%] ${
        next == 0 ? "h-[150vh]" : "h-[100vh]"
      } relative mx-auto flex justify-start flex-col gap-3`}
    >
      {(() => {
        switch (next) {
          case 0:
            return (
              <Details
                setEventDetails={setEventDetails}
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                symbol={eventDetails.symbol}
                description={eventDetails.description}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flier={eventDetails.flier}
                flierImg={eventDetails.flierImg}
              />
            );
          case 1:
            return (
              <Upload
                setEventDetails={setEventDetails}
                prezent={eventDetails.prezent}
                prezentImg={eventDetails.prezentImg}
              />
            );
          case 2:
            return (
              <Preview
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flierImg={eventDetails.flierImg}
                prezentImg={eventDetails.prezentImg}
              />
            );
          default:
            return (
              <Details
                setEventDetails={setEventDetails}
                title={eventDetails.title}
                organizer={eventDetails.organizer}
                symbol={eventDetails.symbol}
                description={eventDetails.description}
                date={eventDetails.date}
                type={eventDetails.type}
                category={eventDetails.category}
                link={eventDetails.link}
                flier={eventDetails.flier}
                flierImg={eventDetails.flierImg}
              />
            );
        }
      })()}
      {!modal && (
        <button
          className={`${
            handleDisabled() ? "bg-gray-500" : "bg-[#6E4AE7]"
          } text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6`}
          disabled={handleDisabled()}
          onClick={
            next !== 2 ? () => setNext(next + 1) : (e) => handleCreateEvent(e)
          }
        >
          {next == 2 ? (loading ? "Creating..." : "Create") : "Next"}
        </button>
      )}
      {modal && (
        <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed md:absolute h-[70vh] md:w-[30vw] w-80 text-white rounded-lg md:top-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col item-center justify-start text-center p-3 gap-3 md:gap-2">
          <div className="w-full relative flex">
            <Image
              src={celebrate}
              alt="celebration icon"
              className="w-[20%] md:w-[10%] mx-auto"
            />
            <IoMdClose
              className="absolute right-0 cursor-pointer"
              onClick={() => setModal(false)}
            />
          </div>
          <h2 className="font-syne font-medium text-xl leading-9 text-[#F9F8FB]">
            Event created successfully
          </h2>
          <p className="text-sm leading-6 font-jarkata text-[#9D94B8]">
            You can now share the link or scan QR code for your attendees to
            mint preznts on Attendify
          </p>
          <div
            className="bg-[#270F73] border border-dashed border-[#8D70EC] flex flex-col items-start justify-around px-2 py-1 rounded-md cursor-pointer"
            onClick={() =>
              copyToClipBoardHandler("https://www.attendify.ca/e/naija-c...")
            }
          >
            <p className="font-light text-smallxxx leading-6 font-jarkata text-[#9D94B8]">
              Mint Link
            </p>
            <span className="w-full flex items-center justify-between">
              <p className="font-semibold text-sm leading-6 font-jarkata text-[#9D94B8] w-[70%] whitespace-nowrap overflow-hidden">
                https://www.attendify.ca/e/naija-c...
              </p>
              <Image src={copy} alt="copy" width={20} />
            </span>
          </div>
          <div className="w-full items-center mx-auto flex justify-center p-1">
            <QRCode
              size={180}
              bgColor="#ffff"
              value={`https://www.attendify.ca/e/naija.com`}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
          {/* <button className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6 cursor-pointer">
            continue
          </button> */}
        </div>
      )}
    </section>
  );
};

export default CreateEvent;
