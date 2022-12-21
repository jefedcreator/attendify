import React, { useEffect, useState } from "react";
import { useCreateEventContext } from "@context/eventContext/event";
import { customStyles, epoch, ipfs, useIPFS } from "@utils/helper";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { NFTStorage, File } from "nft.storage";
import { usePrezent } from "web3/hooks/index";
import { useRouter } from "next/router";
import Modal from "react-modal";
import SuccessModal from "./success";

const client = new NFTStorage({ token: process.env.NEXT_PUBLIC_NFT_KEY! });
const EventForm = () => {
  const [show, setShow] = useState(false);
  const [mintLink, setMintLink] = useState("");

  const toggleModal = () => {
    setShow(true);
    console.log("Open modal");
  };
  const closeModal = () => {
    setShow(false);
  };

  const { addToast } = useToasts();
  const { CreateEvent } = usePrezent();

  const { account } = useWeb3React();
  const [creating, setCreating] = useState(false);

  const { data, setData, preview, setPreview, prevBanner, setPrevBanner } =
    useCreateEventContext();

  const {
    title,
    description,
    type,
    category,
    symbol,
    location,
    url,
    startDate,
    endDate,
    banner,
    image,
  } = data;

  const onInputChange = ({ target }: any) => {
    const elementName = target.name;
    const value = target.value;
    const file = target?.files?.[0];

    switch (elementName) {
      case "title":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            title: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            title: value,
          }));
        break;
      case "symbol":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            symbol: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            symbol: value,
          }));
        break;
      case "description":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            description: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            description: value,
          }));
        break;
      case "type":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            type: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            type: value,
          }));
        break;
      case "category":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            category: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            category: value,
          }));
        break;
      case "location":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            location: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            location: value,
          }));
        break;
      case "links":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            url: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            url: value,
          }));
        break;
      case "startDate":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            startDate: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            startDate: value,
          }));
        break;

      case "endDate":
        if (value == "")
          return setData((prev: any) => ({
            ...prev,
            endDate: "",
          }));
        else if (value)
          return setData((prev: any) => ({
            ...prev,
            endDate: value,
          }));
        break;
      case "banner":
        if (file == "")
          return setData((prev: any) => ({
            ...prev,
            banner: "",
          }));
        else if (file)
          return setData((prev: any) => ({
            ...prev,
            banner: file,
          }));
        break;
      case "image":
        if (file == "")
          return setData((prev: any) => ({
            ...prev,
            image: "",
          }));
        else if (file)
          return setData((prev: any) => ({
            ...prev,
            image: file,
          }));
        break;

      default:
        break;
    }
  };

  // const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    if (!banner) {
      setPrevBanner(undefined);
    }

    if (!image) {
      setPreview(undefined);
    }

    if (banner.length !== 0) {
      const objectUrl = window.URL.createObjectURL(banner);
      setPrevBanner(objectUrl);
    }
    if (image.length !== 0) {
      const objectUrl = window.URL.createObjectURL(image);
      setPreview(objectUrl);
    }
  }, [banner, image]);

  const uploadToIpfs = async () => {
    const thumbnailCID = ipfs.add(image);
    const cover = await `https://attendify.infura-ipfs.io/ipfs/${
      (
        await thumbnailCID
      ).path
    }`;
    const metadata = {
      name: title,
      description: description,
      symbol: symbol,
      image: cover,
    };
    const format = await JSON.stringify(metadata);
    const response = await ipfs.add(format);
    return `${await response.path}`;
  };

  const fetchFromIpfs = async () => {
    let cid = await uploadToIpfs();
    let result = await useIPFS(cid);
    console.log("result:", result);
    return result;
  };

  // const uploadToNftStorage = async () => {
  //   // const bannerUrl = new File([banner], `${title}.jpg`, { type: "image/jpg" });
  //   const nftUrl = new File([image], `${symbol}.jpg`, { type: "image/jpg" });
  //   const metadata = await client.store({
  //     name: title,
  //     description: description,
  //     symbol: symbol,
  //     // banner: bannerUrl,
  //     image: nftUrl,
  //   });
  //   return metadata;
  // };
  // const fetchImageAndBanner = async () => {
  //   const url = await uploadToNftStorage();
  //   console.log("I am url:", url);
  //   const request = await axios.get(
  //     `${`https://ipfs.io/ipfs/${url.ipnft}/metadata.json`}`
  //   );
  //   if (request.status !== 200) return;
  //   return request.data;
  // };

  const createPoapEvent = async (event: any) => {
    event.preventDefault();
    if (
      !title ||
      !description ||
      !type ||
      !category ||
      !symbol ||
      !location ||
      !url ||
      !startDate ||
      !endDate ||
      // !numLink ||
      !banner
    )
    return  addToast("Fields cannot be empty!", { appearance: "error" }) 
    try {
      setCreating(true);
      let upload = await uploadToIpfs();
      let tokenUri = `ipfs://${upload}`;
      let { image } = await fetchFromIpfs();

      await CreateEvent(title, symbol, tokenUri, async (res: any) => {
        if (!res.hash) {
          return addToast(res.message, { appearance: "error" });
        }
        const result = await res.wait();

        if (!result)
          return addToast("An error occured", { appearance: "error" });
        const start = epoch(startDate);
        const end = epoch(endDate);
        let info = {
          title: title,
          description: description,
          type: type,
          category: category,
          location: location,
          link: url,
          start_time: start,
          end_time: end,
          banner: "",
          nft: image,
          creator: account,
          attendify: result?.events[0]?.address,
        };
        const serverResponse: any = axios.post(
          "https://attendify.onrender.com/create",
          info
        );
        if (!serverResponse) {
          addToast("Something went wrong", { appearance: "error" });
          setCreating(false);
        }
        addToast("Event successfully created", { appearance: "success" });
        setMintLink(result?.events[0]?.address);
        // await router.push(`/mint/${result?.events[0]?.address}`);
        setShow(true);
        setCreating(false);
      });
    } catch (error) {
      setCreating(false);
      console.log(error);
      throw error;
    }
  };

  return (
    // <div className="p-4 w-full md:w-1/2 md:m-auto sm:m-6 text-[#BEC9DA]">
    <div className="container mx-auto p-6 md:p-8 lg:p-0">
      <div className="text-center  p-3 sm:p-10">
        <h1 className="text-white text-2xl lg:text-6xl font-bold p-7">
          Create an Event
        </h1>
        <p className="text-[#9EAEC7] w-full  lg:w-3/4 m-auto">
          Create long lasting memory with your events, Send Invites, Manage
          Guests , Issue POAPs & More!
        </p>
      </div>
      <form>
        <div className="basic-details">
          <p className="text-xl text-white font-bold my-3">Basic Details</p>

          <div className="flex flex-col sm:flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5">
              <label htmlFor="title">Event title</label>
              <input
                type="text"
                name="title"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
            <div className="flex flex-col py-3 flex-1">
              <label htmlFor="title">Symbol</label>
              <input
                type="text"
                name="symbol"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
          </div>

          <div className="flex flex-col py-3 text-gray-400">
            <label htmlFor="description">Description</label>
            <textarea
              onChange={onInputChange}
              name="description"
              className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2 h-40"
            />
          </div>

          <div className="flex flex-col sm:flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5">
              <label htmlFor="type">Type of Event</label>
              <select
                name="type"
                id="type"
                onChange={onInputChange}
                className="rounded py-3 mt-5 p-2 bg-[#180A38]"
                required
              >
                <option value="none">Select</option>
                <option value="virtual">Virtual</option>
                <option value="physical">Physical</option>
              </select>
            </div>
            <div className="flex flex-col py-3 flex-1">
              <label htmlFor="category">Category</label>

              <select
                name="category"
                id="category"
                onChange={onInputChange}
                className="rounded py-3 mt-5 p-2 bg-[#180A38] border-1 border-solid border-red-100 "
                required
              >
                <option value="none">Select</option>
                <option value="hackathon">Hackathon</option>
                <option value="hangout">Hangout</option>
                <option value="conferences">Conference</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="add a location."
              />
            </div>
            <div className="flex flex-col py-3 flex-1">
              <label htmlFor="link">Event Links</label>
              <input
                type="text"
                name="links"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2 "
                placeholder="add event registration link"
              />
            </div>
          </div>
        </div>

        <div className="event-details">
          <p className="text-xl text-white my-3 font-bold">Event date & time</p>
          <div className="block md:flex md:flex-col lg:flex lg:flex-col text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5 relative">
              <label htmlFor="startDate">Event Start Date and Time</label>
              <input
                type="datetime-local"
                name="startDate"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="Pick date"
              />
            </div>
            <div className="flex flex-col py-3 flex-1 mr-5 relative">
              <label htmlFor="endDate">Event End Date and Time</label>
              <input
                type="datetime-local"
                name="endDate"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="Pick date"
              />
            </div>
          </div>
        </div>

        {/* <div className="event-details">
          <p className="text-xl text-white my-3 font-bold">Minting</p>
          <div className="flex flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5">
              <label htmlFor="amount">How many mint links do you need?</label>
              <input
                type="number"
                name="amount"
                onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
            <div className="flex flex-col py-3 flex-1"></div>
          </div>
        </div> */}

        <div className="event__banner">
          <div className="flex items-center flex-row w-80 space-between my-3">
            <p className="text-[#BEC9DA] mr-7">Upload Event Banner</p>
            {/* <Image src={img} width={14} height={14} /> */}
          </div>

          <div className="h-48 bg-[#100624] border-dashed inp cursor-pointer grid place-items-center border-2 border-slate-400 rounded-md">
            <input
              type="file"
              onChange={onInputChange}
              className="inpt text-[#DEDBE7]"
              name="banner"
              multiple={false}
            />
          </div>
          <div className="my-4">
            {banner && (
              <img
                className="text-gray-400"
                src={prevBanner}
                alt="preview"
                width={200}
                height={200}
              />
            )}
          </div>
          <div className="require_details my-3.5">
            <p className="text-sm tracking-wider text-gray-400 font-bold">
              Image requirements:
            </p>
            <ul className="text-sm text-gray-300">
              <li>Mandatory: PNG format</li>
              <li>Recommended measures 500x500px, size less than 200kb</li>
            </ul>
          </div>
        </div>

        <div className="NFT__banner my-5">
          <div className="flex items-center flex-row w-80 space-between my-3">
            <p className="text-[#BEC9DA] mr-7">Upload NFT</p>
          </div>

          <div className="h-48 bg-[#100624] cursor-pointer inp border-dashed grid place-items-center border-2 border-slate-400 rounded-md">
            <input
              type="file"
              onChange={onInputChange}
              name="image"
              className="inpt text-[#DEDBE7]"
              // className="absolute left-[20%] md:left-[45%] lg:left-[45%] text-[#9EAEC7]"
              multiple={false}
            />
            {/* <p className="text-[#9EAEC7]">Upload</p> */}
          </div>

          <div className="my-4">
            {preview && (
              <img
                className="text-gray-400"
                src={preview}
                alt="preview"
                width={200}
                height={200}
              />
            )}
          </div>

          <div className="require_details my-3.5">
            <p className="text-sm tracking-wider text-gray-300 font-bold">
              Image requirements:
            </p>
            <ul className="text-sm text-gray-400">
              <li>Mandatory: PNG format</li>
              <li>Recommended measures 500x500px, size less than 200kb</li>
            </ul>
          </div>
        </div>

        <div className="mb-36 flex item-center mt-16">
          <button
            className="px-8 py-2  mx-auto w-full sm:w-1/2 font-medium font-jarkata bg-[#B5179E] rounded-lg text-gray-200"
            disabled={creating === true}
            onClick={createPoapEvent}
          >
            {creating ? "creating" : "Create an Event"}
          </button>
        </div>
      </form>
      {show && (
        <Modal
          isOpen={show}
          className="border border-[#7d92b5] rounded-lg top-1/4 p-4  w-11/12 left-4 md:w-6/12 md:left-1/4 md:top-1/4 md:p-8 lg:w-3/12 lg:mx-auto absolute lg:left-[41%] lg:top-1/4 lg:p-4"
          style={customStyles}
        >
          <SuccessModal path={mintLink} />
        </Modal>
      )}
    </div>
  );
};

export default EventForm;
