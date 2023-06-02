import Link from "next/link";
// import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Banner from "@components/explore/Banner";
import Collections from "@components/collections/Collections";

function Dashboard() {
  return (
    <section className="container w-[90%] mx-auto mb-32 p-4 md:p-4 lg:p-0 relative">
      <Banner header="Your Collection" address="0x123" isDashboard={true}/>
      <Collections/>
    </section>
  );
}

export default Dashboard;
