import React, { ReactNode,useEffect } from "react";
import Footer from "./Footer/Footer";
import HeaderWallet from "./Header/HeaderWallet";
import useEagerConnect from "../../web3/provider/walletHooks";
import { useWeb3React } from "@web3-react/core";
import { useSwitchNetwork } from "web3/provider/connector";

type childrenProp = {
  children?: ReactNode;
};

function LayOut({ children }: childrenProp) {
  useEagerConnect();
  const { chainId } = useWeb3React()

  const {handleNetworkSwitch}  =  useSwitchNetwork()
const transformChainId = `0x${Number(chainId).toString(16)}` 
  useEffect(()=>{
    if(transformChainId !== '0x13881'){
      handleNetworkSwitch()
    }
  },[transformChainId])
  return (
    <React.Fragment>
      <HeaderWallet />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default LayOut;
