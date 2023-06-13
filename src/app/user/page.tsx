import Link from "next/link";
// import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Banner from "@components/explore/Banner";
import Collections from "@components/collections/Collections";

export const dynamic = "force-static";

function Dashboard() {
  return (
    <section className="container w-[90%] mx-auto mb-32 relative">
      <Banner header="Your Collection" isDashboard={true} />
      <Collections />
    </section>
  );
}

export default Dashboard;
