import React from "react";
import Head from "next/head";

import EventForm from "../event/components/eventform/EventForm";
import LayOut from "../../layout/LayOut";

const Create = () => {
  return (
    <LayOut>
    <div>
      <Head>
        <title>Attendify</title>
        <meta name="description" content="Poap Platform Built On Conflux" />
        <link rel="icon" href="/attendify.svg" />
      </Head>
      <EventForm />
    </div>
    </LayOut>
  );
};

export default Create;
