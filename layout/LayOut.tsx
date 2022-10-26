import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import HeaderWallet from "../components/Header/HeaderWallet";
import useEagerConnect from "../web3/provider/walletHooks";

function LayOut({ children }) {
  useEagerConnect();
  const router = useRouter();
  return (
    <React.Fragment>
      <HeaderWallet />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default LayOut;
