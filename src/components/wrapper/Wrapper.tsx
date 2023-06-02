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
// import attendify from '@components/'
import Connected from "@components/connected/Connected";

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: "process.env.ALCHEMY_ID" }), publicProvider()]
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

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {!isConnected ? <Header /> : <Connected />}
        {children}
        <Footer />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Wrapper;
