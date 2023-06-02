import "./globals.css";
import { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Wrapper from "@components/wrapper/Wrapper";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Attendify",
  description: "The web3 event hub.",
};

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
