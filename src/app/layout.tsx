import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import {cx} from "@utils/cx";
import {LayoutHeader} from "components/@layout/Header";
import {LayoutSideNavBar} from "components/@layout/SideNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
            'flex flex-col h-screen w-screen bg-zinc-900 text-zinc-200',
            `${geistSans.variable} ${geistMono.variable} antialiased`
        )}
      >
        {/* Banners */}
      
        {/* Navbar */}
        <LayoutHeader />
        
        <div className={cx(
            'flex flex-1 flex-row overflow-y-hidden'
        )}>
          {/* Sidenav */}
          <LayoutSideNavBar />
          
          <div className={cx('flex grow w-full min-h-full overflow-y-auto')}>
            {children}
          </div>
        </div>
        
        {/* Footer */}
        <div className={cx()}>
        
        </div>
      </body>
    </html>
);
}
