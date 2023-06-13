// import type { NextPage } from "next";
// import HeaderMetaData from "@common/MetaData/HeaderMetaData";
import About from "@components/landing/About/About";
import Organisers from "@components/landing/JoinUs/organisers";
import Jumbotron from "@components/landing/Jumbotron/Jumbotron";
import Attendee from "@components/landing/Attendee/Attendee";
import Sponsors from "@components/landing/Sponsor/Sponsors";
import Features from "@components/landing/Features/Features";

const Home = () => {
  return (
    <section>
      <div className="p-6 md:p-0 lg:p-0">
        <Jumbotron />
        <Features />
        <About />
        <Organisers />
        <Attendee />
        <Sponsors />
      </div>
    </section>
  );
};

export default Home;
