import "./globals.css";
import { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Wrapper from "@components/wrapper/Wrapper";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Attendify",
  description: "The web3 event hub.",
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
  },
  twitter: {
    card: "player",
    site: "https://attendifyonchain.vercel.app/",
    images: "./twitter-image.png",
    description: "Attendify - The web3 event hub ",
    title: "Attendify - The web3 event hub",
  },
  openGraph: {
    type: "website",
    url: "https://attendifyonchain.vercel.app/",
    title: "Attendify",
    siteName: "Attendify",
    description: "Attendify - The web3 event hub ",
    images: [
      {
        url: "./opengraph-image.png"
      },
    ],
  },
};

// export async function generateMetadata({ params }: IProps) {
//   return {
//     title: `Attendify - ${params.page}`,
//     description: "The web3 event hub.",
//     viewport: {
//       width: "device-width",
//       initialScale: 1.0,
//       maximumScale: 1.0,
//       userScalable: false,
//     },
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={jakarta.className}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
