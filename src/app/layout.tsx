import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Providers from "@/components/layout/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patient Management",
  description: "Manage your patients with ease",
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
      <Providers>
        <Header />
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
);

export default RootLayout;
