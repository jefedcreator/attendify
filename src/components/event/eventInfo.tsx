import React from "react";
import Head from "next/head";
import LocationInfo from "./components/locationInfo";
import Similar from "./components/similar";
import TopInfo from "./components/topInfo";
import LayOut from "../../layout/LayOut";
import HeaderMetaData from "../../common/MetaData/HeaderMetaData";

const eventInfo = () => {
  return (
    <LayOut>
    <section className="p-8 lg:p-0">
     <HeaderMetaData/>
      <TopInfo />
      <LocationInfo />
      <Similar />
    </section>
    </LayOut>
  );
};

export default eventInfo;
