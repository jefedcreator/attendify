"use client";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount, useConnect } from "wagmi";
import { usePathname } from "next/navigation";
// import attendify from '@components/'
import Connected from "@components/connected/Connected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string}), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Attendify",
  projectId: "YOUR_PROJECT_ID",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { connector: activeConnector, isConnected } = useAccount();
  const pathname = usePathname();  
  const isCreate = pathname == '/create'
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <ToastContainer/>
        {!isConnected ? <Header /> : <Connected />}
        {children}
        {!isCreate && <Footer />}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Wrapper;
