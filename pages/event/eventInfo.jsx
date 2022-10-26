import React from "react";
import Head from "next/head";
import LocationInfo from "./components/locationInfo";
import Similar from "./components/similar";
import TopInfo from "./components/topInfo";
import LayOut from "../../layout/LayOut";

const eventInfo = () => {
  return (
    <LayOut>
    <section className="p-8 lg:p-0">
      <Head>
        <title>Attendify</title>
        <meta name="description" content="Poap Platform Built On Conflux" />
        <link rel="icon" href="/attendify.svg" />
      </Head>
      <TopInfo />
      <LocationInfo />
      <Similar />
    </section>
    </LayOut>
  );
};

export default eventInfo;
