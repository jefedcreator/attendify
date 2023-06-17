import { Metadata } from "next";
import Banner from "@components/banner/Banner";
import Collections from "@components/collections/Collections";

export const metadata: Metadata = {
  title: "Attendify - Explore",
};

function Explore() {
  return (
    <section className="container w-[90%] mx-auto mb-32 p-4 md:p-4 lg:p-0 relative">
      <Banner header="Explore Collection" isDashboard={false} />
      <Collections />
    </section>
  );
}

export default Explore;
