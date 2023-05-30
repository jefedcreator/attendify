"use client";

import "./globals.css";
import { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import attendify from "@public/assets/attendify.png";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { useAccount, useConnect } from "wagmi";
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

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Attendify",
  description: "The web3 event hub .",
  openGraph: {
    images: [
      {
        url: "@public/assets/attendify.png",
        width: 800,
        height: 600,
      },
      {
        url: "@public/assets/attendify.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "./attendify.png",
    shortcut: "./attendify.png",
    apple: "./attendify.png",
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { connector: activeConnector, isConnected } = useAccount();

  return (
    <html lang="en">
      <body className={jakarta.className}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            {!isConnected ? <Header /> : <Connected />}
            {children}
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
