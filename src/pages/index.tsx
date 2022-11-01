import type { NextPage } from "next";
import HeaderMetaData from "@common/MetaData/HeaderMetaData";
import About from "@components/landing/About/About";
import JoinUs from "@components/landing/JoinUs/JoinUs";
import Jumbotron from "@components/landing/Jumbotron/Jumbotron";
import Participant from "@components/landing/Participant/Participant";
import Register from "@components/landing/Register/Register";
import Sponsors from "@components/landing/Sponsor/Sponsors";
import UpcomingEvents from "@components/landing/UpcomingEvent/UpcomingEvents";
import Footer from "@layout/Footer/Footer";
import Header from "@layout/Header/Header";
import Features from "@components/landing/Features/Features";

// import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <section>
      <HeaderMetaData />
      <div className="container mx-auto p-8">
        <Header />
        <Jumbotron />
        <Features/>
        {/* <Participant />
        <UpcomingEvents />
        <Sponsors />
        <About />
        <JoinUs />
        <Register /> */}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
