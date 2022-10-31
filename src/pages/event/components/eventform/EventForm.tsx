import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import img from "../../../../public/assets/InfoCircle.png";
import { useCreateEventContext } from "../../../../../context/eventContext/event";
import { isPositiveInt } from "../../../../../utils/helper";
// import { useWeb3React } from "@web3-react/core";
// import Modal from "react-modal";
import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useCallback } from "react";
// import { create as ipfsHttpClient } from "ipfs-http-client";
// import { Buffer } from "buffer";
// import {NFTStorage, File} from "nft.storage"
import PoapHooks from "../../../../../web3/hooks/index";
// Modal.setAppElement("#root");
// const auth =
//   "Basic " +
//   Buffer.from(
//     process.env.NEXT_PUBLIC_PROJECT_ID + ":" + process.env.NEXT_PUBLIC_API_KEY
//   ).toString("base64");
// const client = ipfsHttpClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
//   headers: {
//     authorization: auth,
//   },
// });

// const client = new NFTStorage({token:process.env.NEXT_PUBLIC_NFT_KEY})
const EventForm = () => {
  // const { addToast } = useToasts();
  // const { CreateEvent } = PoapHooks();
  const customStyles = {
    overlay: {
      background: "rgba(3, 4, 41, 0.7)",
    },
    content: {
      backgroundColor: "#1E0D45",
      borderRadius: "8px",
    },
  };
  // const { account, active } = useWeb3React();
  // const [status, setStatus] = useState(false);
  // const [creating, setCreating] = useState(false);

  // const [show, setShow] = useState(true);

  // const closeEmailModal = () => {
  //   setShow(false);
  // };

  // const emailRef = useRef();

  // const {
  //   data,
  //   loading,
  //   setLoading,
  //   setData,
  //   preview,
  //   setPreview,
  //   prevBanner,
  //   setPrevBanner,
  // } = useCreateEventContext();

  // const {
  //   title,
  //   description,
  //   type,
  //   category,
  //   symbol,
  //   location,
  //   url,
  //   startDate,
  //   endDate,
  //   numLink,
  //   banner,
  //   image,
  // } = data;
  // console.log(`${startDate}:${startTime}`);

//   const fetchUserStatus = useCallback(async () => {
//     if (!active) return setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://api.attendify.xyz/users/${account}`
//       );

//       setStatus(response.data.email);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//     }
//   }, [active, account]);
//   const postUserEmail = useCallback(
//     async (event) => {
//       event.preventDefault();
//       const emailInput = emailRef.current.value;
//       setLoading(true);
//       try {
//         console.log("account", account);
//         const request = await axios.patch(
//           `https://api.attendify.xyz/users/${account}`,
//           JSON.stringify(emailInput)
//         );
//         emailInput = "";
//         if (request.status === 200) {
//           addToast("Email added successfully", { appearance: "success" });
//           closeEmailModal();
//           setLoading(false);
//         }
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     },
//     [account, active]
//   );

//   useEffect(() => {
//     fetchUserStatus();
//   }, [active, account]);

//   const onInputChange = ({ target }) => {
//     const elementName = target.name;
//     const value = target.value;
//     const file = target?.files?.[0];

//     switch (elementName) {
//       case "title":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             title: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             title: value,
//           }));
//         break;
//       case "symbol":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             symbol: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             symbol: value,
//           }));
//         break;
//       case "description":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             description: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             description: value,
//           }));
//         break;
//       case "type":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             type: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             type: value,
//           }));
//         break;
//       case "category":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             category: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             category: value,
//           }));
//         break;
//       case "location":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             location: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             location: value,
//           }));
//         break;
//       case "links":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             url: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             url: value,
//           }));
//         break;
//       case "startDate":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             startDate: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             startDate: value,
//           }));
//         break;

//       case "endDate":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             endDate: "",
//           }));
//         else if (value)
//           return setData((prev) => ({
//             ...prev,
//             endDate: value,
//           }));
//         break;
//       case "amount":
//         if (value == "")
//           return setData((prev) => ({
//             ...prev,
//             numLink: 0,
//           }));
//         else if (isPositiveInt(value))
//           return setData((prev) => ({
//             ...prev,
//             numLink: value,
//           }));
//         break;
//       case "banner":
//         if (file == "")
//           return setData((prev) => ({
//             ...prev,
//             banner: "",
//           }));
//         else if (file)
//           return setData((prev) => ({
//             ...prev,
//             banner: file,
//           }));
//         break;
//       case "image":
//         if (file == "")
//           return setData((prev) => ({
//             ...prev,
//             image: "",
//           }));
//         else if (file)
//           return setData((prev) => ({
//             ...prev,
//             image: file,
//           }));
//         break;

//       default:
//         break;
//     }
//   };

//   // const [fileUrl, setFileUrl] = useState("");
//   // console.log(fileUrl);
//   // const onFileInputChange = async (e) => {
//   //   const file = e.target.value;
//   //   try {
//   //     const added = await client.add(file, {
//   //       progress: (prog) => console.log(`received ${prog}`),
//   //     });
//   //     // const url = `https://ipfs.infura.io/ipfs/${added.path}`
//   //     setFileUrl(added.path);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };
// console.log(data)




  // useEffect(() => {
  //   if (!banner) {
  //     setPrevBanner(undefined);
  //   }

  //   if (!image) {
  //     setPreview(undefined);
  //   }

  //   if (banner.length !== 0) {
  //     const objectUrl = window.URL.createObjectURL(banner);
  //     setPrevBanner(objectUrl);
  //   }
  //   if (image.length !== 0) {
  //     const objectUrl = window.URL.createObjectURL(image);
  //     setPreview(objectUrl);
  //   }
  // }, [banner,image]);
  // const uploadToIpfs = async () => {
  //   if (!title || !description || !type || !category || !fileUrl) return;
  //   const data = JSON.stringify({
  //     title,
  //     description,
  //     type,
  //     category,
  //     image: fileUrl,
  //   });
  //   try {
  //     const added = await client.add(data);
  //     const url = `https://ipfs.infura.io/ipfs/${added.path}`;
  //     return url;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const uploadToNftStorage = async() =>{
  //   const bannerUrl = new File([ banner ], `${title}.jpg`, { type: 'image/jpg' })
  //   const nftUrl = new File([ image ], `${symbol}.jpg`, { type: 'image/jpg' })
  // const metadata = await client.store({
  //   name:title,
  //   description:description,
  //   symbol:symbol,
  //   banner:bannerUrl,
  //   image:nftUrl,
  // })
  //     return  metadata
  // }


  // const fetchImageAndBanner = async() =>{
  //   const url = await uploadToNftStorage()
  //   console.log(url.ipnft)
  //   const request = await axios.get(`${`https://ipfs.io/ipfs/${url.ipnft}/metadata.json`}`)
  //   if(request.status !== 200)return;
  //   return request.data
  // }


  // const createPoapEvent = async (event) => {
  //   setCreating(true);
  //   event.preventDefault();
  //   if (
  //     !title ||
  //     !description ||
  //     !type ||
  //     !category ||
  //     !symbol ||
  //     !location ||
  //     !url ||
  //     !startDate ||
  //     !endDate ||
  //     !numLink ||
  //     !banner
  //   )
  //     return addToast("Fields cannot be empty!", { appearance: "error" });
  //     try {
  //     let upload = await uploadToNftStorage();
  //     let {banner, image} = await fetchImageAndBanner()


  //     await CreateEvent(title, symbol, upload.url, async (res) => {
  //       if (!res.hash) {
  //         return addToast(res.message, { appearance: "error" });
  //       }
  //       const result = await res.wait();

  //       if (!result)
  //         return addToast("An error occured", { appearance: "error" });
          
  //       let info = {
  //         title: title,
  //         type: type,
  //         category: category,
  //         location: location,
  //         link: url,
  //         start_datetime: startDate,
  //         end_datetime: endDate,
  //         mints_needed: numLink,
  //         banner_url: banner,
  //         nft_url: image,
  //         attendees: [],
  //         host_wallet: account,
  //         event_address: result.to,
  //       };
  //       console.log("I am data",info)
  //       // const requestOption = {
  //       //   headers:{"Content-Type":"application/json"},
  //       //   body:data
  //       // }
  //       const serverResponse = axios.post("https://api.attendify.xyz/events/",info);

  //       if (serverResponse.status !== 201)
  //         return addToast("Something went wrong", { appearance: "error" });
  //       addToast("Event successfully created", { appearance: "success" });
  //       setCreating(false);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
            <div className="flex flex-col py-3 flex-1">
              <label htmlFor="title">Symbol</label>
              <input
                type="text"
                name="symbol"
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
          </div>

          <div className="flex flex-col py-3 text-gray-400">
            <label htmlFor="description">Description</label>
            <textarea
              // onChange={onInputChange}
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
                // onChange={onInputChange}
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
                // onChange={onInputChange}
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
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="add a location."
              />
            </div>
            <div className="flex flex-col py-3 flex-1">
              <label htmlFor="link">Event Links</label>
              <input
                type="text"
                name="links"
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2 "
                placeholder="add event registration link"
              />
            </div>
          </div>
        </div>

        <div className="event-details">
          <p className="text-xl text-white my-3 font-bold">Event date & time</p>
          <div className="flex flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5 relative">
              <label htmlFor="startDate">Event Start Date and Time</label>
              <input
                type="datetime-local"
                name="startDate"
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="Pick date"
              />
            </div>
            <div className="flex flex-col py-3 flex-1 mr-5 relative">
              <label htmlFor="endDate">Event End Date and Time</label>
              <input
                 type="datetime-local"
                name="endDate"
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
                placeholder="Pick date"
              />
            </div>
          </div>

          
        </div>

        <div className="event-details">
          <p className="text-xl text-white my-3 font-bold">Minting</p>
          <div className="flex flex-row text-gray-400">
            <div className="flex flex-col py-3 flex-1 mr-5">
              <label htmlFor="amount">How many mint links do you need?</label>
              <input
                type="number"
                name="amount"
                // onChange={onInputChange}
                className="bg-[#180A38] border border-gray-400 rounded-md p-2 mt-2"
              />
            </div>
            <div className="flex flex-col py-3 flex-1"></div>
          </div>
        </div>

        <div className="event__banner">
          <div className="flex items-center flex-row w-80 space-between my-3">
            <p className="text-[#BEC9DA] mr-7">Upload Event Banner</p>
            <Image src={img} width={14} height={14} />
          </div>

          <div className="h-48 bg-[#100624] border-dashed cursor-pointer grid place-items-center border-2 border-slate-400 rounded-md">
            <input
              type="file"
              // onChange={onInputChange}
              name="banner"
              multiple={false}
            />
            <p className="text-[#9EAEC7]">Upload</p>
          </div>
          {/* <div className="my-4">
            {banner && (
              <img
                className="text-gray-400"
                src={prevBanner}
                alt="preview"
                width={200}
                height={200}
              />
            )}
          </div> */}
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

          <div className="h-48 bg-[#100624] cursor-pointer border-dashed grid place-items-center border-2 border-slate-400 rounded-md">
            <input
              type="file"
              // onChange={onInputChange}
              name="image"
              multiple={false}
            />
            <p className="text-[#9EAEC7]">Upload</p>
          </div>

          {/* <div className="my-4">
            {preview && (
              <img
                className="text-gray-400"
                src={preview}
                alt="preview"
                width={200}
                height={200}
              />
            )}
          </div> */}

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
          {/* <Link href="/user/created"> */}
          {/* {creating === true ? (
            <p>Creating Event</p>
          ) : ( */}
            <button
              // onClick={createPoapEvent}
              className="px-8 py-2  mx-auto w-full sm:w-1/2 font-medium font-jarkata bg-[#B5179E] rounded-lg text-gray-200"
            >
              Create an Event
            </button>
          {/* )} */}

          {/* </Link> */}
        </div>
      </form>
      {/* {loading === true ? (
        <p>Loading</p>
      ) : (
        <>
          {status === null && (
            <Modal
              isOpen={show}
              style={customStyles}
              className=" top-1/4  w-11/12 left-4 md:w-1/2 md:left-1/4 md:top-1/4 md:p-8 lg:w-1/2 lg:mx-auto absolute lg:left-1/4 lg:top-1/4 lg:p-4"
            >
              <div className="p-4 ">
                <form>
                  <p className="text-gray-300">
                    Do not fill the form if you already registered with before{" "}
                  </p>
                  <div>
                    <label
                      className="text-gray-300 block text-sm my-4"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="outline-none border-none mx-auto w-full sm:w-1/2 p-2 rounded-sm"
                      name="email"
                      ref={emailRef}
                      placeholder="enter your email"
                    />
                  </div>

                  <button
                    onClick={postUserEmail}
                    disabled={loading}
                    className="px-8 py-2  mx-auto w-full sm:w-1/2 my-8 font-medium font-jarkata bg-[#B5179E] cursor-pointer rounded-lg text-gray-200"
                  >
                    Submit Email
                  </button>
                </form>
              </div>
            </Modal>
          )}
        </>
      )} */}
    </div>
  );
};

export default EventForm;
