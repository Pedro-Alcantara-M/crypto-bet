import type { Metadata } from "next";
import SideMenu from "@/components/ui/sideMenu";
import { Inter } from "next/font/google";
import "./globals.css";
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
    <html lang="en">
      <body className={classNames("flex flex-row", inter)}>
        <SideMenu />
        <div className="h-full">
        {children}
        </div>
      </body>
    </html>
  );
}
