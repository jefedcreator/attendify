"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
// import { useRouter } from "next/router";
import Link from "next/link";
import { headerIcon, headerNav } from "../../../static/data";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);
  //   const router = useRouter();
  const toggleMenu = () => {
    setMenu(!menu);
  };

  //   const handleNavigate = () => {
  //     router(
  //       pathname: "/signin",
  //     });
  //   };

  return (
    <nav
      className={`{${
        menu ? "relative" : "static"
      } ml-0 h-[10%] md:h-[15%] font-manrope leading-normal font-bold md:w-1/2`}
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
                : "bg-white font-medium text-[#23154C] py-2 jarkata	capitalize md:pr-6 md:pl-6 lg:pl-12 lg:pr-12 rounded-lg text-center"
            }`}
            href="/connect"
          >
            open app
          </Link>
        </ul>
        <RxHamburgerMenu
          className="block h-[2rem] w-[2rem] md:hidden z-20"
          onClick={toggleMenu}
          color="white"
        />
        <Link
          className="hidden md:block bg-white font-medium text-[#23154C] py-2 jarkata	capitalize md:pr-6 md:pl-6 lg:pl-12 lg:pr-12 rounded-lg"
          href="/connect"
        >
          open app
        </Link>
      </div>
    </nav>
  );
};

export default Hamburger;
