import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/general/navbar/Navbar";
import Footer from "./components/general/Footer";

const poppings = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["300","400","500","600","700","800","900"]
});


export const metadata: Metadata = {
  title: "Tech Blog",
  description: "Ese's Tech Blog - A blog about technology and programming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppings.className} antialiased bg-black min-h-screen`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
