"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Explore = () => {
  const [address, setAddress] = useState<string>("");
  const router = useRouter();
  const handleDisabled = () => {
    return address.length !== 42;
  };

  const handleExplore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/user/${address}`);
  };

  return (
    <section className="container mx-auto md:w-1/2 w-full flex flex-col items-center gap-2">
      <input
        type="text"
        placeholder="Wallet Address"
        value={address}
        className="bg-[#04102B] border border-[#2B304B] focus:outline-none rounded-md px-2 py-4 w-full text-[#BDB7CF] text-smallxxx leading-4 font-jarkata"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className={`${
          handleDisabled() ? "bg-gray-500" : "bg-purple-600"
        } text-[#F9F8FB] text-center md:w-1/2 px-3 py-2 w-2/3 border-2 border-purple-400 font-jarkata rounded-md font-bold text-sm leading-6`}
        disabled={handleDisabled()}
        onClick={(e) => handleExplore(e)}
      >
        Explore
      </button>
      <p className="text-[#9D94B8] text-center font-medium font-jakarta md:text-minimal text-sm leading-6">
        View wallet prezent collection
      </p>
    </section>
  );
};

export default Explore;
