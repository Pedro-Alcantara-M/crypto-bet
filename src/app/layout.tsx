import type { Metadata } from "next";
import SideMenu from "@/components/ui/sideMenu";
import { Inter } from "next/font/google";
import "./globals.css";
import agletSans from "../../fonts";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Pigmo | Online cassino",
  description: "appp.pigmo.com",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={"en"}
      className={[agletSans.variable, inter.className].join(" ")}
    >
      <body className={classNames("flex flex-row", agletSans.className)}>
        <SideMenu />
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
