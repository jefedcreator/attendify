"use client";
import { useEffect } from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import Connected from "@components/connected/Connected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Attendify } from "@components/AttendifyContext/AttendifyContext";

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID as string }),
    publicProvider(),
  ]
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
  const { connector: activeConnector, isConnected, address } = useAccount();
  const pathname = usePathname();
  const router = useRouter();
  const isCreate = pathname == "/create";
  const isExplore = pathname == "/explore";
  const isUser = pathname == "/user";
  const isCreated = pathname == "/user/created";
  const shouldRedirect =
    (isCreate || isExplore || isUser || isCreated) && !isConnected;

  useEffect(() => {
    if (shouldRedirect) {
      router.push("/connect");
    }
  }, [shouldRedirect, router]);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Attendify>
          <ToastContainer />
          {!isConnected ? <Header /> : <Connected address={address as string}/>}
          {children}
          {!isCreate && <Footer />}
        </Attendify>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Wrapper;
