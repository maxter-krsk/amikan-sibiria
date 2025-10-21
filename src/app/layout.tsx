import type { Metadata } from "next";
import { montserrat } from "./components/ui/fonts";
import "./globals.css";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { SuccessPopupProvider } from "@/app/providers/SuccessPopupProvider";

import ScrollTop from "./components/ui/ScrollTop";

// Мета-данные

export const metadata: Metadata = {
  title: "Amikan Travel | Экскурсионно‑рыболовный тур в Саянах",
  description:
    "Организованный тур по Саяно‑Шушенскому водохранилищу и Кантегиру: комфорт, прогулки, музей, рыбалка, баня и джип‑тур на вершину Гладенькой. Заявка онлайн.",

  icons: {
    icon: [
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        sizes: "32x32",
      },

      {
        url: "/icons/favicons/favicon-dark.png",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: [{ url: "/icons/favicons/favicon-large.png", sizes: "180x180" }],
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
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
        <SuccessPopupProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollTop />
        </SuccessPopupProvider>
      </body>
    </html>
  );
}
