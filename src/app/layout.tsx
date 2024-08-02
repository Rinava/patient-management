import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import clsx from "clsx";

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
  <Providers>
    <html lang="en">
      <body className={clsx(inter.className, "flex min-h-screen flex-col")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  </Providers>
);

export default RootLayout;
