import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Landing from "./landing/Landing";

// import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Attendify</title>
        <meta name="description" content="Poap Platform Built On Conflux" />
        <link rel="icon" href="/attendify.svg" />
      </Head>
      <Landing />
    </div>
  );
};

export default Home;
