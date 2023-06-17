import { Metadata } from "next";
import Link from "next/link";
// import { useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import Banner from "@components/banner/Banner";
import Collections from "@components/collections/Collections";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Attendify - User"
};

function Dashboard() {
  return (
    <section className="container w-[90%] mx-auto mb-32 relative">
      <Banner header="My Collection" isDashboard={true} />
      <Collections />
    </section>
  );
}

export default Dashboard;
