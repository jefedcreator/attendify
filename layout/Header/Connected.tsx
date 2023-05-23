import React, { useState } from "react";
import { dropdownItem } from "../../../static/data";
import { shortenAddress } from "@utils/helper";

type accountProp = {
  account:string
}

function Connected({ account }:accountProp) {
  const [show, setShow] = useState(false);

  const dropdownItemHandler = () => {
    setShow(!show);
  };
  return (
    <div className="flex  items-center justify-end space-x-2 flex-grow lg:space-x-4">
      <div className="border w-40 border-gray-500 bg-[#6E4AE7] border-[#BEC9DA] rounded-lg flex space-x-2 p-1">
        {/* <img src="/assets/walletIcon.svg" alt="connectWallet_icon" /> */}
        <p className="text-gray-300 font-jakarta">{shortenAddress(account)}</p>
      </div>
      <div className="relative">
        <div className="flex  items-center space-x-2">
          <div className="w-8 md:w-12 lg:w-12">
            <img src="/assets/avatar.svg" alt="avatar_icon" />
          </div>

          <div>
            <div className="cursor-pointer" onClick={dropdownItemHandler}>
              <img src="/assets/arrowdown.svg" alt="arrow-down" />
            </div>
            {show && (
              <ul className="bg-navbar absolute w-48 backdrop-blur-lg  rounded-lg right-2 md:right-4 top-12 lg:-right-8 top-8">
                {dropdownItem.map((item, idx) => {
                  return (
                    <li
                      className="font-jakarta p-2  mb-2 last:border-b-0 border-b border-gray-800 hover:text-white  font-medium text-gray-300 text-sm"
                      key={idx}
                    >
                      <a className="p-4" href={item.link}>
                        {item.value}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connected;
