"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { headerNav } from "../../../static/data";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav
      className={`{${
        menu ? "relative" : "static"
      } ml-0 h-[10%] md:h-full font-manrope leading-normal font-bold md:w-[60%] flex items-center`}
    >
      <div className={`w-full flex justify-between items-center`}>
        <ul
          className={`${
            !menu
              ? "hidden"
              : "flex flex-col absolute top-20 left-0 right-0 py-5 px-12 z-10 bg-[#833EF1] w-full h-80"
          } md:h-full md:items-center w-full md:w-2/3 justify-around md:flex-row md:static md:top-0 md:px-0 md:py-0 md:z-0 md:flex`}
        >
          {headerNav.map((header, index) => {
            return (
              <li className="list-none" key={index}>
                <Link
                  className="text-gray-300 font-medium font-jarkata"
                  href={header.link}
                >
                  {header.value}
                </Link>
              </li>
            );
          })}
          <Link
            className={`${
              !menu
                ? "hidden"
                : "bg-white font-medium text-[#23154C] py-2 jarkata capitalize rounded-lg text-center"
            }`}
            href="/connect"
          >
            connect wallet
          </Link>
        </ul>
        <RxHamburgerMenu
          className="block h-[2rem] w-[2rem] md:hidden z-20"
          onClick={toggleMenu}
          color="white"
        />
        <Link
          className="hidden md:block bg-[#6E4AE7] font-medium text-white py-2 px-4 jarkata capitalize rounded-lg"
          href="/connect"
        >
          connect wallet
        </Link>
      </div>
    </nav>
  );
};

export default Hamburger;
