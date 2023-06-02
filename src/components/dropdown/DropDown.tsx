"use client";
import { useState, useRef } from "react";
import avatar from "@public/assets/avatar.svg";
import arrowDown from "@public/assets/arrowdown.svg";
import Image from "next/image";
import Link from "next/link";
import { dropdownItem } from "../../../static/data";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const dropdownHandler = () => {
    setShow(!show);
  };

  const dropDownRef: React.RefObject<HTMLUListElement> = useRef(null);

  //   const handleClickOutside = (e: React.MouseEvent<HTMLElement>) =>{
  //     if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
  //         setShow(false)
  //     }
  //   }

  return (
    <div
      className="relative flex items-center w-[20%] cursor-pointer"
      onClick={dropdownHandler}
    >
      <Image src={avatar} alt="avatar icon" />
      <Image src={arrowDown} alt="arrow down icon" />
      <div>
        {show && (
          <ul
            className="bg-navbar absolute w-48 backdrop-blur-lg  rounded-lg right-2 md:right-4 top-12 lg:-right-8 z-30"
            ref={dropDownRef}
          >
            {dropdownItem.map((item, idx) => {
              return (
                <li
                  className="font-jakarta p-2  mb-2 last:border-b-0 border-b border-gray-800 hover:text-white  font-medium text-gray-300 text-sm"
                  key={idx}
                >
                  <Link className="p-4" href={item.link}>
                    {item.value}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
