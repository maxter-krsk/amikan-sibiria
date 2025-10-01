import type { Metadata } from "next";
import { montserrat } from "./components/ui/fonts"
import "./globals.css";

import Footer from "@/app/components/Footer/Footer"
import Header from "@/app/components/Header/Header"


// Мета-данные

export const metadata: Metadata = {
  title: "Название сайта",
  description: "Описание для сайта",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montserrat.className} font-light flex flex-col min-h-screen overflow-x-hidden antialiased bg-beige`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
