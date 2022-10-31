import React, { useState } from "react";
import Image from "next/image";
import calendar from "../../../public/assets/calendar.png";
import creamy from "../../../public/assets/rec.png";
import { MdFavoriteBorder } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import {
  AiFillInstagram,
  AiFillRedditCircle,
  AiFillTwitterCircle,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    background: "rgba(3, 4, 41, 0.7)",
  },
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
    backgroundColor: "#1E0D45",
    // width: "560px",
    // height: "349px",
    // border: "background: rgba(3, 4, 41, 0.7)",
    // display: "grid",
    // placeContent: "center",
    borderRadius: "8px",
    // padding: "20px",
  },
};

Modal.setAppElement("#root");

const TopInfo = () => {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="bg-[#13082B] p-8">
      <div className="container mx-auto">
        {/* <div className="grid lg:grid-cols-2"> */}
        {/* <div className="flex flex-col justify-between sm:flex-row bg-[#13082B] px-8 py-8 sm:px-24 sm:py-16"> */}
        <div className="space-y-8 lg:flex lg:space-x-8 ">
          <div>
            <Image
              src={creamy}
              className="w-full"
              width={628}
              height={390}
              alt="poap_event"
            />
          </div>

          {/* <div className="w-full sm:w-1/2 ml-0 sm:ml-10 border-2 border-[#EFF1F6]  px-10 py-4 rounded-md"> */}
          <div className="border border-[#EFF1F6] border-opacity-10 p-4 flex-grow rounded-lg">
            <h2 className="font-bold text-3xl text-[#EFF1F6] ">
              Crypto Tech Night
            </h2>

            <p className="my-4 text-[#9EAEC7]">Hackathon</p>
            <p className="text-[#2BA765] mb-4">1000 registered attendees</p>

            <Image src={calendar} width={32} height={32} alt="calendar" />

            <div className="flex flex-row">
              <div>
                <p className="text-[#5C77A3] uppercase my-2">Event Starts</p>
                <p className="text-[#9EAEC7]">Sun, Jun, 19, 6:00 PM </p>
              </div>

              <div className="ml-16">
                <p className="text-[#5C77A3] uppercase my-2">Event Ends</p>
                <p className="text-[#9EAEC7]">Sun, Jun, 19, 6:00 PM </p>
              </div>
            </div>

            <div className="flex flex-row">
              <button className="px-4 py-4 sm:px-8 text-sm sm:text-xl sm:py-2 mt-4 bg-[#B5179E] font-medium rounded-lg text-white ">
                Register for Event
              </button>

              <div className="mt-4 flex">
                <div
                  className={`w-14 sm:w-16 h-14 rounded-md bg-card mx-2 sm:mx-6 grid place-content-center cursor-pointer `}
                >
                  <MdFavoriteBorder color="#9EAEC7" size={24} />
                </div>

                <div
                  className={`w-14 sm:w-16 h-14 rounded-md bg-card grid place-content-center cursor-pointer`}
                  onClick={toggleModal}
                >
                  <AiOutlineDownload color="#9EAEC7" size={28} />
                </div>

                <Modal
                  isOpen={show}
                  className=" top-1/4  w-11/12 left-4 md:w-1/2 md:left-1/4 md:top-1/4 md:p-8 lg:w-1/2 lg:mx-auto absolute lg:left-1/4 lg:top-1/4 lg:p-4"
                  style={customStyles}
                >
                  <div
                    onClick={closeModal}
                    className="text-white font-bold absolute right-4 top-2 lg:right-4"
                  >
                    <ImCancelCircle className="cursor-pointer " size={25} />
                  </div>
                  <div className="flex  justify-center">
                    <div>
                      <div className="text-center my-3">
                        <p className="font-bold text-xl text-[#fff]">
                          Share this event
                        </p>
                      </div>

                      <div className="bg-[#371880] w-80 h-24 p-4 rounded-md">
                        <p className="text-[#9EAEC7]">Event Link</p>
                        <div className="flex items-center space-x-2">
                          <p className="text-[#EFF1F6] text-xs my-3">
                            https://www.attendify.ca/e/naija-corn-fes...{" "}
                          </p>
                          <span>
                              <svg
                                width="16"
                                height="20"
                                viewBox="0 0 16 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.60078 0.400391C4.96426 0.400391 4.35381 0.653247 3.90372 1.10333C3.45364 1.55342 3.20078 2.16387 3.20078 2.80039V14.8004C3.20078 15.4369 3.45364 16.0474 3.90372 16.4974C4.35381 16.9475 4.96426 17.2004 5.60078 17.2004H12.8008C13.4373 17.2004 14.0477 16.9475 14.4978 16.4974C14.9479 16.0474 15.2008 15.4369 15.2008 14.8004V2.80039C15.2008 2.16387 14.9479 1.55342 14.4978 1.10333C14.0477 0.653247 13.4373 0.400391 12.8008 0.400391H5.60078ZM4.40078 2.80039C4.40078 2.48213 4.52721 2.17691 4.75225 1.95186C4.9773 1.72682 5.28252 1.60039 5.60078 1.60039H12.8008C13.119 1.60039 13.4243 1.72682 13.6493 1.95186C13.8744 2.17691 14.0008 2.48213 14.0008 2.80039V14.8004C14.0008 15.1187 13.8744 15.4239 13.6493 15.6489C13.4243 15.874 13.119 16.0004 12.8008 16.0004H5.60078C5.28252 16.0004 4.9773 15.874 4.75225 15.6489C4.52721 15.4239 4.40078 15.1187 4.40078 14.8004V2.80039ZM0.800781 5.20039C0.800792 4.77911 0.911692 4.36526 1.12234 4.00043C1.33298 3.63559 1.63594 3.33263 2.00078 3.12199V15.4004C2.00078 16.196 2.31685 16.9591 2.87946 17.5217C3.44207 18.0843 4.20513 18.4004 5.00078 18.4004H12.4792C12.2685 18.7652 11.9656 19.0682 11.6007 19.2788C11.2359 19.4895 10.8221 19.6004 10.4008 19.6004H5.00078C3.88687 19.6004 2.81859 19.1579 2.03093 18.3702C1.24328 17.5826 0.800781 16.5143 0.800781 15.4004V5.20039Z"
                                  fill="#BEC9DA"
                                />
                              </svg>
                            </span>
                        </div>
                      </div>

                      <div className="text-center py-4">
                        <p className="text-sm text-[#BEC9DA]">Share on</p>

                        <div className="flex justify-center py-2">
                          <div className="mx-1 cursor-pointer">
                            <AiFillInstagram color="#BA1C9F" size={24} />
                          </div>
                          <div className="mx-1 cursor-pointer">
                            <AiFillTwitterCircle color="#28A9EC" size={24} />
                          </div>
                          <div className="mx-1 cursor-pointer">
                            <AiFillRedditCircle color="#FF4500" size={24} />
                          </div>
                          <div className="mx-1 cursor-pointer">
                            <FaTelegramPlane color="#28A9EC" size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfo;
