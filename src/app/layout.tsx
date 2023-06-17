import "./globals.css";
import { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Wrapper from "@components/wrapper/Wrapper";
import { IProps } from "src/utils/types/types";
import { getURL } from "next/dist/shared/lib/utils";

const inter = Inter({ subsets: ["latin"] });
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
