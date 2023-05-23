import React from "react";

function Explore() {
  return (
    <section className="container mx-auto p-4 md:p-12">
      <input
        type="text"
        placeholder="Wallet Address"
        className="p-2 w-full outline-none bg-transparent border-2 rounded-lg text-[#f9f9f9] border-[#2B304B]"
      />

      <button
        className="w-full md:w-[50%] lg:w-full  font-bold border-solid border-2 p-2 rounded-lg my-4 bg-cta border-[#2B304B]  text-white"
      > Explore</button>

      <p className="text-[#9D94B8] text-center font-medium font-jakarta text-minimal leading-sm-xx">View any POAP collection</p>
    </section>
  );
}

export default Explore;
