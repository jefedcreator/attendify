import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useRouter } from "next/router";
import HeaderWallet from "./Header/HeaderWallet";
import useEagerConnect from "../../web3/provider/walletHooks";

type childrenProp = {
  children?: ReactNode;
};

function LayOut({ children }: childrenProp) {
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
