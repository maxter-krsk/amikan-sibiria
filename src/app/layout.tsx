import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

// Шрифты

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["300", "400"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["300", "400"],
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen overflow-x-hidden antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
