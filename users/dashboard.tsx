import Link from "next/link";
import React, { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Modal from "react-modal";
import {
  AiFillInstagram,
  AiFillRedditCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import LayOut from "@layout/LayOut";
import HeaderMetaData from "@common/MetaData/HeaderMetaData";

const customStyles = {
  overlay: {
    background: "rgba(3, 4, 41, 0.7)",
  },
  content: {
    backgroundColor: "#1E0D45",
    borderRadius: "8px",
  },
};

Modal.setAppElement("#root");

function Dashboard() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  return (
    <LayOut>
      <section className="container mx-auto mb-24 mt-24 p-4 md:p-8 lg:p-0">
        <HeaderMetaData />
        <div>
          <h3 className="text-[#EFF1F6] font-jakarta text-md md:text-3xl lg:text-5xl mb-4 font-bold">
            Welcome,
          </h3>
          <div className="text-white flex items-center cursor-pointer">
            <Link href="#">0x5CE0f.....8b4a41 </Link>
            <span>
              <CgArrowTopRight />
            </span>
          </div>
          <button className="px-8 w-full md:w-3/12 lg:w-3/12  capitalize py-2 mt-4 font-medium font-jarkata bg-[#B5179E] rounded-lg text-gray-200">
            create event
          </button>
        </div>

        <div>
          <h2 className="capitalize text-white font-semibold text-xl my-5">
            Your collection
          </h2>

          <div className="mb-8 ">
            <h2 className="text-[#BEC9DA] font-jakarta  font-normal">March</h2>
            <div className="flex items-center space-x-6 cursor-pointer">
              <Link href="#">
                <div className="cursor-pointer">
                  <img src="/assets/Poly.svg" alt="poap" />
                </div>
              </Link>
              <Link href="#">
                <div>
                  <img
                    className="cursor-pointer"
                    src="/assets/hun.svg"
                    alt="poap"
                  />
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-[#BEC9DA] font-jakarta font-normal">April</h2>
            <div className="flex items-center space-x-6 cursor-pointer">
              <Link className="cursor-pointer" href="#">
                <div>
                  <img src="/assets/Polygon.svg" alt="poap" />
                </div>
              </Link>
              {/* <button  className="cursor-pointer"> */}
              <div onClick={toggleModal}>
                <img src="/assets/hun.svg" alt="poap" />
              </div>
              {/* </button> */}
            </div>
          </div>
        </div>
        <Modal
          isOpen={show}
          className=" top-1/4  w-11/12 left-4 md:w-1/2 md:left-1/4 md:top-1/4 md:p-8 lg:w-1/2 lg:mx-auto absolute lg:left-1/4 lg:top-1/4 lg:p-4"
          style={customStyles}
        >
          <div className="cursor-pointer" onClick={closeModal}>
            <div>
              <div className="h-24 bg-[#B5179E] left-0 w-full rounded-t-lg absolute top-0 "></div>
              <div className="my-36 p-4 md:my-32 lg:my-32">
                <div className="text-center mt-2">
                  <p className="text-xl text-[#EFF1F6] py-4">
                    Crypto Tech Night
                  </p>
                  <p className="text-[#9EAEC7] mb-4">#61552</p>

                  <p className="text-[#9EAEC7] mb-2">
                    This POAP confrims you were at Conflux Crypto Tech NIght
                    2022.
                  </p>
                  <p className="text-[#9EAEC7]">
                    https://confluxnetwork.org/cryptotechnight
                  </p>
                </div>

                <div className="text-center my-4 h-3/4">
                  <div className="text-[#9EAEC7] my-2">
                    <p>16 May 2022</p>
                  </div>
                  <div className="text-[#9EAEC7]">
                    <p>You and 200 others attended</p>
                  </div>

                  <div className="text-center py-2">
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
            </div>
            <img
              src="/assets/hun.svg"
              alt="poap"
              className="w-28 absolute  top-8 left-[41%] lg:left-[42%]"
            />
          </div>
        </Modal>
      </section>
    </LayOut>
  );
}

export default Dashboard;
