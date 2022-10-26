import React from "react";
import Head from "next/head";

import EventForm from "./components/eventform/EventForm";
import LayOut from "../../layout/LayOut";
import HeaderMetaData from "../../components/MetaData/HeaderMetaData";

const Create = () => {
  return (
    <LayOut>
    <div>
      <HeaderMetaData/>
      <EventForm />
    </div>
    </LayOut>
  );
};

export default Create;
