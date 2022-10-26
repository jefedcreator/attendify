import React from "react";
import Header from "../../components/Header/Header";
import About from "./components/About";
import JoinUs from "./components/JoinUs";
import Jumbotron from "./components/Jumbotron";
import Participant from "./components/Participant";
import Register from "./components/Register";
import Sponsors from "./components/Sponsors";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <section>
      <div className="container mx-auto p-8">
        <Header />
        <Jumbotron />
        <Participant />
        <UpcomingEvents />
        <Sponsors />
        <About />
        <JoinUs />
        <Register />
      </div>
      <Footer />
    </section>
  );
}

export default Landing;
