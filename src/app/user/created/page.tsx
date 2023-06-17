import { Metadata } from "next";
import Banner from "@components/banner/Banner";
import Created from "@components/created/Created";

export const metadata: Metadata = {
  title: "Attendify - Created",
};

const created = () => {
  return (
    <section className="container w-[90%] mx-auto mb-32 relative">
      <Banner
        header="Your Events"
        message="Create more events to get them listed on Attendify"
        link="Create Events"
        url="/create"
        isDashboard={true}
      />
      <Created />
    </section>
  );
};

export default created;
