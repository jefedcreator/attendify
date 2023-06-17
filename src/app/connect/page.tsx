import { Metadata } from "next";
import Image from "next/image";
import connect from "@public/assets/wallets.png";
import Switch from "@components/switch/Switch";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Attendify - Connect"
};

function WalletConnect() {
  return (
    <section className="container mx-auto mb-48 p-4 md:p-12">
      <div className="flex justify-center my-4">
        <Image src={connect} alt="wallet" />
      </div>
      <h3 className="text-white text-center font-bold font-syne text-medium leading-sm-medium">
        Welcome
      </h3>
      <p className="text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">
        Welcome to Attendify. You can mint Preznts,
        <br /> browse through your collection of Preznts.
      </p>
      <div className="flex justify-center my-6">
        <Switch />
      </div>
    </section>
  );
}

export default WalletConnect;
