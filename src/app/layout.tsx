import type { Metadata, Viewport } from "next";
import { montserrat } from "./components/ui/fonts";
import "./globals.css";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import { SuccessPopupProvider } from "@/app/providers/SuccessPopupProvider";
import CookiesBanner from "@/app/components/ui/CookiesBanner";
import { SpeedInsights } from "@vercel/speed-insights/next";

import ScrollTop from "./components/ui/ScrollTop";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#142B23" },
    { media: "(prefers-color-scheme: dark)", color: "#142B23" },
  ],
};

// Мета-данные

export const metadata: Metadata = {
  metadataBase: new URL("https://domain.ru"),
  alternates: { canonical: "/" },

  title: "Amikan Travel | Экскурсионно‑рыболовный тур в Саянах",
  description:
    "Организованный тур по Саяно‑Шушенскому водохранилищу и Кантегиру: комфорт, прогулки, музей, рыбалка, баня и джип‑тур на вершину Гладенькой. Заявка онлайн.",

  openGraph: {
    title: "Amikan Travel | Экскурсионно‑рыболовный тур в Саянах",
    description:
      "Организованный тур по Саяно‑Шушенскому водохранилищу и Кантегиру: комфорт, прогулки, музей, рыбалка, баня и джип‑тур на вершину Гладенькой. Заявка онлайн.",
    url: "https://domain.ru",
    siteName: "Amikan Travel | Экскурсионно‑рыболовный тур в Саянах",
    images: [
      {
        url: "/og/og-img.jpg",
        width: 1200,
        height: 630,
        alt: "Превью сайта",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amikan Travel | Экскурсионно‑рыболовный тур в Саянах",
    description:
      "Организованный тур по Саяно‑Шушенскому водохранилищу и Кантегиру: комфорт, прогулки, музей, рыбалка, баня и джип‑тур на вершину Гладенькой. Заявка онлайн.",
    images: ["/og/og-img.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        sizes: "32x32",
      },

      {
        url: "/icons/favicons/favicon-dark.png",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icons/favicons/favicon-light.png",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],

    apple: [{ url: "/icons/favicons/favicon-large.png", sizes: "180x180" }],
  },
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
          <CookiesBanner />
          <SpeedInsights />
        </SuccessPopupProvider>
      </body>
    </html>
  );
}
