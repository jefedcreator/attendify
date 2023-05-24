import "./globals.css";
import { Metadata } from "next";
import { Inter,Plus_Jakarta_Sans } from "next/font/google";
import attendify from "@public/assets/attendify.png";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Attendify",
  description: "The web3 event hub .",
  openGraph: {
    images: [
      {
        url: '@public/assets/attendify.png',
        width: 800,
        height: 600,
      },
      {
        url: '@public/assets/attendify.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en-US',
    type: 'website',    
  },
  icons: {
    icon: './attendify.png',
    shortcut: './attendify.png',
    apple: './attendify.png',
  },
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
