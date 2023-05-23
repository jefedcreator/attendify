import React from "react";
import { headerIcon, headerNav } from "../../../static/data";
import Link from "next/link";

function Header() {
  return (
    <header className="p-6 md:p-12 lg:p-12">
      <div className="hidden md:justify-end md:space-x-6 mb-4 md:flex lg:flex justify-end space-x-2">
        {headerIcon.map((icon, index) => {
          return (
            <a href={icon.link} key={index}>
              {icon.icon}
            </a>
          );
        })}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <a href="/">
            <img src="/assets/attendify.svg" alt="attendify-logo" />
          </a>
        </div>
        <div className="hidden  md:flex md:items-center md:space-x-6  lg:flex lg:items-center lg:space-x-12 my-2">
          {headerNav.map((header, index) => {
            return (
              <li className="list-none" key={index}>
                <a
                  className="text-gray-300 font-medium font-jarkata"
                  href={header.link}
                >
                  {header.value}
                </a>
              </li>
            );
          })}
          <Link href="/walletConnect">
            <button className="bg-white font-medium text-[#23154C] py-2 jarkata	capitalize md:pr-6 md:pl-6 lg:pl-12 lg:pr-12 rounded-lg">
              open app
            </button>
          </Link>
        </div>
        <div className="block md:hidden lg:hidden">
          <Link href="/walletConnect">
            <button className="bg-white font-medium text-[#23154C] py-2 jarkata	capitalize p-2 rounded-lg">
              open app
            </button>
          </Link>
          </div>
      </div>
    </header>
  );
}

export default Header;
