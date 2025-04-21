import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Scala AI",
  description: "Agencia de inteligencia artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#181818]`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
