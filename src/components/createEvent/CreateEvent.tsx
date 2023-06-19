"use client";
import { useState, useContext } from "react";
import Details from "@components/details/Details";
import Upload from "@components/upload/Upload";
import Preview from "@components/preview/Preview";
import { IEventDetails, ICreated, ICreatedEvent } from "src/utils/types/types";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { create, IPFSHTTPClient } from "ipfs-http-client";
import celebrate from "@public/assets/celebrate.svg";
import { toast } from "react-toastify";
import { copyToClipBoardHandler } from "src/utils/helper";
import copy from "@public/assets/copy.svg";
import QRCode from "react-qr-code";
import {
  useContractWrite,
  usePrepareContractWrite,
  useContractEvent,
} from "wagmi";
import attendifyAbi from "src/utils/abi";
import attendifyAddress from "src/utils/address";
import { attendifyContext } from "@components/AttendifyContext/AttendifyContext";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { fetchNftMeta } from "src/utils/helper";

const CreateEvent = () => {
  const [next, setNext] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(true);
  const [createLoading, setCreateLoading] = useState<boolean>(false);
  const [uri, setUri] = useState("");
  const [mintAddress, setMintAddress] = useState<ICreated | null>(null);
  const [eventDetails, setEventDetails] = useState<IEventDetails>({
    title: "",
    organizer: "",
    symbol: "",
    description: "",
    date: "",
    venue: "",
    category: "",
    link: "",
    flier: null,
    flierImg: null,
    prezent: null,
    prezentImg: null,
  });
  const { setCreatedEvents, setUserCreatedEvents } =
    useContext(attendifyContext);

  useContractEvent({
    address: attendifyAddress,
    abi: attendifyAbi,
    eventName: "createdEvents",
    async listener(log: any) {
      const ipfsRes = log[0].args.eventUri
        ? `https://ipfs.io/ipfs/${log[0].args.eventUri.slice(7)}`
        : "";
      let ipfsMeta = await fetchNftMeta(ipfsRes);
      setCreatedEvents((prev: ICreatedEvent[]) => {
        return [
          ...prev,
          {
            ...log[0].args,
            eventUri: ipfsMeta?.image,
          },
        ];
      });
      setUserCreatedEvents((prev: ICreatedEvent[]) => {
        return [
          ...prev,
          {
            ...log[0].args,
            eventUri: ipfsMeta?.image,
          },
        ];
      });
    },
  });

  const basepath = getLocationOrigin();

  const { config } = usePrepareContractWrite({
    address: attendifyAddress,
    abi: attendifyAbi,
    functionName: "createEvent",
    args: [
      eventDetails.title,
      eventDetails.symbol,
      uri,
      eventDetails.organizer,
      eventDetails.date,
      eventDetails.venue,
      eventDetails.category,
      eventDetails.link,
    ],
    onSuccess(data) {
      setMintAddress(data.result as ICreated);
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  const handleDisabled = (): boolean => {
    switch (next) {
      case 0:
        return !(
          eventDetails.title.trim() !== "" &&
          eventDetails.organizer.trim() !== "" &&
          eventDetails.description.trim() !== "" &&
          eventDetails.date.trim() !== "" &&
          eventDetails.venue.trim() !== "" &&
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

  const handleIpfsUpload = async () => {
    try {
      const eventNft = await ipfs?.add(eventDetails.prezent as File);
      let nftData = JSON.stringify({
        title: eventDetails.title,
        description: eventDetails.description,
        image: `https://attendify.infura-ipfs.io/ipfs/${eventNft?.path}`,
        background_color: "010A20",
      });
      const getUri = await ipfs?.add(nftData);
      toast.promise(
        () => {
          return new Promise((resolve, reject) => {
            if (getUri) {
              return setTimeout(() => {
                resolve(getUri);
              }, 3000);
            }
            reject();
          }).then(() => {
            setUri(ipfsUri);
            setNext(next + 1);
          });
        },
        {
          pending: " uploading to ipfs...",
          success: " uploaded to ipfs succesfully",
          error: "error uploading to ipfs",
        }
      );
      let ipfsUri = `ipfs://${getUri?.path}`;
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleCreateEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCreateLoading(true);
    try {
      write?.();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleBack = () => {
    if (next > 0) {
      setNext(next - 1);
    }
  };

  const mintLink = `${basepath}/mint/${mintAddress?.[1]}`;

  return (
    <section
      className={`w-[90%] md:w-[50%] ${
        next == 0 ? "h-[150vh]" : "h-[100vh]"
      } relative mx-auto flex justify-start flex-col gap-3`}
    >
      {next > 0 && (
        <div
          onClick={handleBack}
          className="flex items-center w-[20%] md:w-[10%] gap-1 cursor-pointer"
        >
          <BiArrowBack color="white" width={200} height={200} />
          <p className="font-jarkata md:text-sm text-smallxxx font-bold text-white">
            Back
          </p>
        </div>
      )}
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
                venue={eventDetails.venue}
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
                venue={eventDetails.venue}
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
                venue={eventDetails.venue}
                category={eventDetails.category}
                link={eventDetails.link}
                flier={eventDetails.flier}
                flierImg={eventDetails.flierImg}
              />
            );
        }
      })()}
      {modal && !isSuccess && (
        <button
          className={`${
            handleDisabled() ? "bg-gray-500" : "bg-[#6E4AE7]"
          } text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6`}
          disabled={handleDisabled() || createLoading}
          onClick={
            next === 0
              ? () => setNext(next + 1)
              : next === 1
              ? () => handleIpfsUpload()
              : (e) => handleCreateEvent(e)
          }
        >
          {next == 2
            ? createLoading || isLoading
              ? "Creating..."
              : "Create"
            : "Next"}
        </button>
      )}
      {modal && isSuccess && (
        <div className="bg-gradient-to-r from-[#00091F] to-[#1E0C5A] border border-solid border-blue-500 border-opacity-20 fixed md:absolute h-[80vh] md:w-[30vw] w-80 text-white rounded-lg md:top-10 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col item-center justify-start text-center p-3 gap-3 md:gap-2">
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
            onClick={() => copyToClipBoardHandler(mintLink)}
          >
            <p className="font-light text-smallxxx leading-6 font-jarkata text-[#9D94B8]">
              Mint Link
            </p>
            <span className="w-full flex items-center justify-between">
              <p className="font-semibold text-sm leading-6 font-jarkata text-[#9D94B8] w-[90%] whitespace-nowrap overflow-hidden">
                {mintLink}
              </p>
              <Image src={copy} alt="copy" width={20} />
            </span>
          </div>
          <div className="w-full items-center mx-auto flex justify-center p-1">
            <QRCode
              size={180}
              bgColor="#ffff"
              value={mintLink}
              style={{
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
          <Link
            href={"/events"}
            className="bg-[#6E4AE7] text-[#F9F8FB] text-center w-full px-3 py-2 border border-[#A48DF0] font-jarkata rounded-md font-bold text-sm leading-6 cursor-pointer"
          >
            continue
          </Link>
        </div>
      )}
    </section>
  );
};

export default CreateEvent;
