import React from "react";
import { headerIcon, headerNav } from "../../static/data";
import Connected from "./Connected";
import Image from "next/image";
import { useWeb3React } from "@web3-react/core";

function HeaderWallet() {
  const { active, account } = useWeb3React();
  return (
    <header className="container mx-auto mb-8 p-2 md:p-4 lg:p-6">
      <div className="flex items-center justify-between ">
        <div className="w-24 md:w-full lg:w-full">
          <a href="/">
            <Image
              src="/assets/attendify.svg"
              alt="attendify-logo"
              width={181}
              height={45}
            />
          </a>
        </div>
        {active && <Connected account={account} />}
        {/* <Connected /> */}
      </div>
    </header>
  );
}

export default HeaderWallet;
